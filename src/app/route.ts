import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/send-sppa
 *
 * Alur:
 * 1. Terima payload dari SPPAForm
 * 2. Simpan ke in-memory store (bisa diganti DB)
 * 3. Kirim notif WA ke admin (Fonnte)
 * 4. Kirim WA konfirmasi ke klien (Fonnte)
 */

export interface SPPASubmission {
  id: string;
  product: string;
  productLabel: string;
  nama: string;
  whatsapp: string;
  email: string | null;
  fields: Record<string, string | string[]>;
  fieldLabels: Record<string, string>;
  submittedAt: string;
  status: "baru" | "diproses" | "selesai";
}

// ─── In-memory store (untuk production, ganti dengan DB / file sistem) ────────
// Gunakan global agar tidak hilang antar request di development
declare global {
  // eslint-disable-next-line no-var
  var __sppaSubmissions: SPPASubmission[] | undefined;
}
if (!global.__sppaSubmissions) global.__sppaSubmissions = [];

export const getSubmissions = (): SPPASubmission[] =>
  global.__sppaSubmissions ?? [];

// ─── Fonnte WA Sender ─────────────────────────────────────────────────────────
async function sendWA(target: string, message: string): Promise<boolean> {
  const token = process.env.FONNTE_TOKEN;
  if (!token) {
    console.warn("[send-sppa] FONNTE_TOKEN tidak di-set — WA tidak dikirim");
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
    });
    const json = await res.json();
    if (!json.status) {
      console.error("[send-sppa] Fonnte error:", json);
      return false;
    }
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
  msg += `🕐 ${new Date(sub.submittedAt).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}\n\n`;
  msg += `👤 *Nama:* ${sub.nama}\n`;
  msg += `📱 *WA:* ${sub.whatsapp}\n`;
  if (sub.email) msg += `✉️ *Email:* ${sub.email}\n`;
  msg += `\n📦 *Produk:* ${sub.productLabel}\n${garis}\n`;

  Object.entries(sub.fields).forEach(([key, val]) => {
    if (!val || (Array.isArray(val) && val.length === 0)) return;
    const label = sub.fieldLabels[key] || key;
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
  msg += `Kami telah menerima permintaan penjelasan rinci untuk:\n`;
  msg += `📦 *${sub.productLabel}*\n\n`;
  msg += `${garis}\n`;
  msg += `*Ringkasan data yang Anda input:*\n`;

  Object.entries(sub.fields).forEach(([key, val]) => {
    if (!val || (Array.isArray(val) && val.length === 0)) return;
    const label = sub.fieldLabels[key] || key;
    const display = Array.isArray(val) ? val.join(", ") : String(val);
    msg += `• ${label}: ${display}\n`;
  });

  msg += `${garis}\n\n`;
  msg += `Tim kami sedang menyiapkan dokumen *Penjelasan Rinci* khusus untuk kebutuhan Anda.\n\n`;
  msg += `⏱ Estimasi pengiriman: *dalam 1×24 jam kerja*\n\n`;
  msg += `Jika ada pertanyaan mendesak, balas pesan ini atau hubungi:\n`;
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

// ─── Route Handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { product, productLabel, nama, whatsapp, email, fields, fieldLabels, submittedAt } = body;

    // Validasi minimal
    if (!product || !nama || !whatsapp) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    // Normalisasi nomor WA: 08xxx → 628xxx
    const normalizeWA = (num: string) =>
      num.replace(/\D/g, "").replace(/^08/, "628").replace(/^8/, "628");

    const submission: SPPASubmission = {
      id: generateId(),
      product,
      productLabel: productLabel || product,
      nama,
      whatsapp: normalizeWA(whatsapp),
      email: email || null,
      fields: fields || {},
      fieldLabels: fieldLabels || {},
      submittedAt: submittedAt || new Date().toISOString(),
      status: "baru",
    };

    // Simpan ke store
    global.__sppaSubmissions!.push(submission);

    // Kirim WA (parallel, tidak await untuk tidak memblok response)
    const adminWA = process.env.ADMIN_WA || "6287781658231";

    Promise.all([
      sendWA(adminWA, buildAdminMessage(submission)),
      sendWA(submission.whatsapp, buildClientMessage(submission)),
    ]).catch(err => console.error("[send-sppa] WA parallel error:", err));

    return NextResponse.json({ success: true, id: submission.id });
  } catch (err) {
    console.error("[send-sppa] POST error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ─── GET: untuk dashboard admin ───────────────────────────────────────────────
export async function GET(req: NextRequest) {
  // Proteksi sederhana via secret header
  const secret = req.headers.get("x-admin-secret");
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const subs = getSubmissions().sort(
    (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );
  return NextResponse.json({ submissions: subs, total: subs.length });
}

// ─── PATCH: update status dari dashboard ─────────────────────────────────────
export async function PATCH(req: NextRequest) {
  const secret = req.headers.get("x-admin-secret");
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id, status } = await req.json();
  const subs = global.__sppaSubmissions ?? [];
  const idx = subs.findIndex(s => s.id === id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  subs[idx].status = status;
  return NextResponse.json({ success: true, submission: subs[idx] });
}
