import { NextRequest, NextResponse } from "next/server";
import {
  getSubmissions,
  addSubmission,
  updateSubmissionStatus,
  type SPPASubmission,
} from "@/lib/sppaStore";

// ─── Fonnte WA Sender ─────────────────────────────────────────────────────────
async function sendWA(target: string, message: string): Promise<boolean> {
  const token = process.env.FONNTE_TOKEN;
  if (!token) {
    console.warn("[send-sppa] FONNTE_TOKEN tidak di-set");
    return false;
  }
  try {
    const res = await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        target,
        message,
        countryCode: "62",
      }),
    });

    const text = await res.text();
    let json: Record<string, unknown> = {};
    try { json = JSON.parse(text); } catch { /* bukan JSON */ }

    if (!res.ok || json.status === false) {
      console.error("[send-sppa] Fonnte gagal:", text);
      return false;
    }

    console.log("[send-sppa] WA terkirim ke:", target);
    return true;
  } catch (err) {
    console.error("[send-sppa] Fonnte fetch error:", err);
    return false;
  }
}

// ─── Message builders ─────────────────────────────────────────────────────────
function buildAdminMessage(sub: SPPASubmission): string {
  const garis = "━━━━━━━━━━━━━━━━━━━━━━";
  let msg = `📋 *SPPA BARU MASUK*\n${garis}\n`;
  msg += `🕐 ${new Date(sub.submittedAt).toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  })}\n\n`;
  msg += `👤 *Nama:* ${sub.nama}\n`;
  msg += `📱 *WA:* ${sub.whatsapp}\n`;
  if (sub.email) msg += `✉️ *Email:* ${sub.email}\n`;
  msg += `\n📦 *Produk:* ${sub.productLabel}\n${garis}\n`;

  Object.entries(sub.fields).forEach(([key, val]) => {
    if (!val || (Array.isArray(val) && val.length === 0)) return;
    const label   = sub.fieldLabels[key] || key;
    const display = Array.isArray(val) ? val.join(", ") : String(val);
    msg += `• *${label}:* ${display}\n`;
  });

  msg += `\n${garis}\n`;
  msg += `ID: ${sub.id}\n`;
  msg += `_Dashboard: asuransijogja.biz.id/admin/sppa_`;
  return msg;
}

function buildClientMessage(sub: SPPASubmission): string {
  const garis = "─────────────────────";
  let msg = `Halo *${sub.nama}*! 👋\n\n`;
  msg += `Terima kasih telah menghubungi *Asuransi Jogja*.\n\n`;
  msg += `Kami telah menerima permintaan *Simulasi & Estimasi Premi* untuk:\n`;
  msg += `📦 *${sub.productLabel}*\n\n`;
  msg += `${garis}\n`;
  msg += `*Ringkasan data yang Anda input:*\n`;

  Object.entries(sub.fields).forEach(([key, val]) => {
    if (!val || (Array.isArray(val) && val.length === 0)) return;
    const label   = sub.fieldLabels[key] || key;
    const display = Array.isArray(val) ? val.join(", ") : String(val);
    msg += `• ${label}: ${display}\n`;
  });

  msg += `${garis}\n\n`;
  msg += `Tim kami sedang menyiapkan dokumen *Simulasi & Estimasi Premi* khusus untuk kebutuhan Anda.\n\n`;
  msg += `⏱ Estimasi pengiriman: *dalam 1×24 jam kerja*\n\n`;
  msg += `Jika ada pertanyaan, balas pesan ini atau hubungi:\n`;
  msg += `📞 *0877-8165-8231* (Rio MD)\n\n`;
  msg += `_Asuransi Jogja — Konsultan Asuransi Kerugian Independen Yogyakarta_`;
  return msg;
}

// ─── ID Generator ─────────────────────────────────────────────────────────────
function generateId(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const dateStr = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SPPA-${dateStr}-${rand}`;
}

// ─── Normalize WA number ──────────────────────────────────────────────────────
function normalizeWA(num: string): string {
  let clean = num.replace(/\D/g, "");
  if (clean.startsWith("08")) clean = "628" + clean.slice(1);
  else if (clean.startsWith("8")) clean = "62" + clean;
  else if (!clean.startsWith("62")) clean = "62" + clean;
  return clean;
}

// ─── POST: Terima submission ──────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { product, productLabel, nama, whatsapp, email, fields, fieldLabels, submittedAt } = body;

    if (!product || !nama || !whatsapp) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    const submission: SPPASubmission = {
      id:           generateId(),
      product,
      productLabel: productLabel || product,
      nama,
      whatsapp:     normalizeWA(String(whatsapp)),
      email:        email || null,
      fields:       fields || {},
      fieldLabels:  fieldLabels || {},
      submittedAt:  submittedAt || new Date().toISOString(),
      status:       "baru",
    };

    // 1. Simpan ke Supabase dulu — ini harus berhasil
    await addSubmission(submission);
    console.log("[send-sppa] Tersimpan ke Supabase:", submission.id);

    // 2. Kirim WA — await keduanya agar tidak mati di Vercel serverless
    const adminWA = process.env.ADMIN_WA || "6287781658231";
    const [adminSent, clientSent] = await Promise.all([
      sendWA(adminWA, buildAdminMessage(submission)),
      sendWA(submission.whatsapp, buildClientMessage(submission)),
    ]);

    console.log("[send-sppa] WA admin:", adminSent, "| WA client:", clientSent);

    return NextResponse.json({
      success: true,
      id: submission.id,
      wa: { admin: adminSent, client: clientSent },
    });
  } catch (err) {
    console.error("[send-sppa] POST error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}

// ─── GET: Ambil semua submission untuk dashboard ──────────────────────────────
export async function GET(req: NextRequest) {
  const secret = req.headers.get("x-admin-secret");
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const subs = await getSubmissions();
    return NextResponse.json({ submissions: subs, total: subs.length });
  } catch (err) {
    console.error("[send-sppa] GET error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Gagal mengambil data" },
      { status: 500 }
    );
  }
}

// ─── PATCH: Update status ─────────────────────────────────────────────────────
export async function PATCH(req: NextRequest) {
  const secret = req.headers.get("x-admin-secret");
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, status } = await req.json();

    if (!id || !["baru", "diproses", "selesai"].includes(status)) {
      return NextResponse.json({ error: "Parameter tidak valid" }, { status: 400 });
    }

    const updated = await updateSubmissionStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: "Submission tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ success: true, submission: updated });
  } catch (err) {
    console.error("[send-sppa] PATCH error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Gagal update status" },
      { status: 500 }
    );
  }
}
