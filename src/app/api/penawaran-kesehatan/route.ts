import { NextRequest, NextResponse, after } from "next/server";
import { addSubmission, type SPPASubmission } from "@/lib/sppaStore";

export const runtime = "nodejs";
export const maxDuration = 30;

const FETCH_TIMEOUT_MS = 15000;

const PAKET_LABEL: Record<string, string> = {
  hemat: "Hemat — IPS500 + OPS45",
  menengah: "Menengah — IPS750 + OPS70",
  lengkap: "Lengkap — IPS1000 + OPS100",
  lainnya: "Paket lain / minta rekomendasi",
};

function normalizeWA(num: string): string {
  const clean = num.replace(/\D/g, "");
  if (clean.startsWith("62")) return clean;
  if (clean.startsWith("0")) return "62" + clean.slice(1);
  return "62" + clean;
}

function generateId(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `KES-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${rand}`;
}

async function sendWA(target: string, message: string): Promise<boolean> {
  const token = process.env.FONNTE_TOKEN;
  if (!token) {
    console.warn("[penawaran-kesehatan] FONNTE_TOKEN tidak di-set");
    return false;
  }
  try {
    const res = await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ target, message, countryCode: "62" }),
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    const text = await res.text();
    let json: Record<string, unknown> = {};
    try { json = JSON.parse(text); } catch { /* bukan JSON */ }
    if (!res.ok || json.status === false) {
      console.error("[penawaran-kesehatan] Fonnte gagal:", text);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[penawaran-kesehatan] Fonnte error:", err);
    return false;
  }
}

async function sendEmail(to: string, subject: string, text: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[penawaran-kesehatan] RESEND_API_KEY tidak di-set");
    return false;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Asuransi Jogja <rio@asuransijogja.biz.id>",
        reply_to: "rio@asuransijogja.biz.id",
        to: [to],
        subject,
        text,
      }),
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!res.ok) {
      console.error("[penawaran-kesehatan] Resend gagal:", await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[penawaran-kesehatan] Resend error:", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot: bot mengisi field tersembunyi → pura-pura sukses
    if (body.website) return NextResponse.json({ success: true });

    const nama = String(body.nama ?? "").trim().slice(0, 120);
    const paket = String(body.paket ?? "lainnya");
    const peserta = Math.floor(Number(body.peserta));
    const channel = body.channel === "email" ? "email" : "wa";
    const kontak = String(body.kontak ?? "").trim().slice(0, 120);

    if (!nama || !kontak || !Number.isFinite(peserta) || peserta < 1 || peserta > 5000) {
      return NextResponse.json({ error: "Data belum lengkap atau tidak valid." }, { status: 400 });
    }
    if (channel === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(kontak)) {
      return NextResponse.json({ error: "Format email tidak valid." }, { status: 400 });
    }
    if (channel === "wa" && normalizeWA(kontak).length < 10) {
      return NextResponse.json({ error: "Nomor WhatsApp tidak valid." }, { status: 400 });
    }

    const paketLabel = PAKET_LABEL[paket] ?? PAKET_LABEL.lainnya;
    const waCustomer = channel === "wa" ? normalizeWA(kontak) : "";

    const submission: SPPASubmission = {
      id: generateId(),
      product: "kesehatan",
      productLabel: "Asuransi Kesehatan Karyawan (Simas Sehat Corporate)",
      nama,
      whatsapp: waCustomer,
      email: channel === "email" ? kontak : null,
      fields: {
        paket: paketLabel,
        jumlahPeserta: String(peserta),
        kirimVia: channel === "wa" ? "WhatsApp" : "Email",
      },
      fieldLabels: {
        paket: "Paket diminati",
        jumlahPeserta: "Jumlah peserta",
        kirimVia: "Kirim penawaran via",
      },
      submittedAt: new Date().toISOString(),
      status: "baru",
    };

    // 1. Simpan lead; jika Redis gagal, lead tetap dikirim ke admin via WA.
    let saved = true;
    try {
      await addSubmission(submission);
    } catch (err) {
      saved = false;
      console.error("[penawaran-kesehatan] Gagal simpan ke Redis:", err);
    }

    const adminWA = process.env.ADMIN_WA || "628131556592";
    const adminMsg =
      (saved ? "" : "⚠️ *Data tidak tersimpan di dashboard (Redis error)*\n\n") +
      `🏥 *PERMINTAAN PENAWARAN KESEHATAN*\n` +
      `👤 *PIC/Perusahaan:* ${nama}\n` +
      `📦 *Paket:* ${paketLabel}\n` +
      `👥 *Peserta:* ${peserta} orang\n` +
      `📨 *Kirim via:* ${channel === "wa" ? "WhatsApp" : "Email"}: ${kontak}\n` +
      `ID: ${submission.id}`;

    if (!saved) {
      const ok = await sendWA(adminWA, adminMsg);
      if (!ok) {
        return NextResponse.json(
          { error: "Layanan sedang bermasalah. Silakan hubungi kami via WhatsApp." },
          { status: 503 }
        );
      }
    }

    // 2. Notifikasi dikirim setelah respons (tidak membuat pengguna menunggu).
    after(async () => {
      const tasks: Promise<boolean>[] = [];
      if (saved) tasks.push(sendWA(adminWA, adminMsg));

      const ringkasan =
        `Paket: ${paketLabel}\nJumlah peserta: ${peserta} orang`;
      if (channel === "wa") {
        tasks.push(
          sendWA(
            waCustomer,
            `Halo *${nama}*! 👋\n\nTerima kasih, permintaan penawaran *Asuransi Kesehatan Karyawan* sudah kami terima.\n\n${ringkasan}\n\nPremi bergantung pada jumlah peserta dan ketentuan asuransi, jadi kami siapkan penawarannya dulu lalu kirim ke nomor ini.\n\n_Asuransi Jogja — Praktisi Asuransi Independen Yogyakarta_`
          )
        );
      } else {
        tasks.push(
          sendEmail(
            kontak,
            `Permintaan Penawaran Asuransi Kesehatan Karyawan [${submission.id}]`,
            `Halo ${nama},\n\nTerima kasih, permintaan penawaran Asuransi Kesehatan Karyawan sudah kami terima.\n\n${ringkasan}\n\nPremi bergantung pada jumlah peserta dan ketentuan asuransi, jadi kami siapkan penawarannya dulu lalu kirim ke email ini.\n\nSalam,\nAsuransi Jogja — Praktisi Asuransi Independen Yogyakarta`
          )
        );
      }
      await Promise.allSettled(tasks);
    });

    return NextResponse.json({ success: true, id: submission.id, saved });
  } catch (err) {
    console.error("[penawaran-kesehatan] POST error:", err);
    return NextResponse.json({ error: "Terjadi kesalahan server." }, { status: 500 });
  }
}
