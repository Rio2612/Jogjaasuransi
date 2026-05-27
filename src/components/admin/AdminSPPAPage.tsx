"use client";

import { useState, useEffect, useCallback } from "react";

interface Submission {
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

const STATUS_STYLE: Record<string, string> = {
  baru:     "bg-amber-100 text-amber-800 border-amber-200",
  diproses: "bg-blue-100  text-blue-800  border-blue-200",
  selesai:  "bg-green-100 text-green-800 border-green-200",
};
const STATUS_LABEL = { baru: "Baru", diproses: "Diproses", selesai: "Selesai" };

const PRODUCT_ICON: Record<string, string> = {
  kendaraan: "🚗", properti: "🏠", liability: "🛡️",
  engineering: "⚙️", surety: "📋", cargo: "📦",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("id-ID", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

function formatRp(n: number) {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

// ─── PDF Generator (client-side, print-to-PDF via browser) ────────────────────
// ─── Data Zona Gempa (sync dengan SPPAForm) ──────────────────────────────────
const ZONA_GEMPA_RATE: Record<string, number> = {
  "Kota Yogyakarta":       0.240,
  "Kabupaten Sleman":      0.240,
  "Kabupaten Gunung Kidul":0.240,
  "Kabupaten Kulon Progo": 0.240,
  "Kabupaten Bantul":      0.360,
};

const ZONA_GEMPA_NOMOR: Record<string, number> = {
  "Kota Yogyakarta":       4,
  "Kabupaten Sleman":      4,
  "Kabupaten Gunung Kidul":4,
  "Kabupaten Kulon Progo": 4,
  "Kabupaten Bantul":      5,
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
// Safely get string from field (may be string | string[])
function fStr(val: string | string[] | undefined, fallback = "—"): string {
  if (!val || (Array.isArray(val) && val.length === 0)) return fallback;
  return Array.isArray(val) ? val.join(", ") : String(val);
}

// Format angka ke Rupiah
function fRp(val: string | string[] | undefined): string {
  if (!val || (Array.isArray(val) && val.length === 0)) return "—";
  const raw = Array.isArray(val) ? val[0] : val;
  const num = parseInt(String(raw).replace(/\D/g, ""), 10);
  if (isNaN(num)) return String(raw);
  return "Rp " + num.toLocaleString("id-ID");
}

// Safely parse number from field
function fNum(val: string | string[] | undefined): number {
  if (!val) return 0;
  const raw = Array.isArray(val) ? val[0] : val;
  return parseInt(String(raw).replace(/\D/g, ""), 10) || 0;
}

// ─── Template PDF per produk ──────────────────────────────────────────────────
function buildProductSections(sub: Submission): string {
  const f = sub.fields;
  const product = sub.product;

  /* ── Kendaraan ── */
  if (product === "kendaraan") {
    const nilaiRaw   = fNum(f.nilaiKendaraan);
    const rateAR     = 1.05; // % estimasi (kategori menengah)
    const rateTLO    = 0.20;
    const tipeStr    = fStr(f.tipeProteksi);
    const isAR       = !tipeStr || tipeStr === "—" || tipeStr.includes("All Risk");
    const rateUsed   = isAR ? rateAR : rateTLO;
    const rateLabel  = isAR ? "1,05% (estimasi All Risk)" : "0,20% (estimasi TLO)";
    const premiDasar = Math.round(nilaiRaw * rateUsed / 100);
    const biayaAdmin = 50000;
    const biayaPolis = 75000;
    const total      = premiDasar + biayaAdmin + biayaPolis;

    const perluasanRows = [
      ["Tanggung Jawab Hukum Pihak Ketiga (TJH III)", "± Rp 150.000 – Rp 350.000 / tahun"],
      ["Kecelakaan Diri Pengemudi & Penumpang (PA)", "± Rp 75.000 – Rp 200.000 / tahun"],
      ["Perluasan Banjir & Genangan Air", "± Rp 100.000 – Rp 250.000 / tahun"],
      ["Perluasan Gempa Bumi & Tsunami", "± Rp 80.000 – Rp 180.000 / tahun"],
      ["Huru-Hara, Kerusuhan & Sabotase (RSMD)", "± Rp 50.000 – Rp 120.000 / tahun"],
    ].map(([n,v]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;font-size:12px;color:#475569;">${n}</td><td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;font-size:12px;font-weight:600;color:#0D2137;text-align:right;">${v}</td></tr>`).join("");

    return `
  <!-- A. INFO KENDARAAN -->
  <div class="section">
    <div class="section-title">🚗 A. Informasi Objek Pertanggungan</div>
    <table>
      <tbody>
        <tr><td class="td-label">Nama Tertanggung</td><td class="td-val">${sub.nama}</td></tr>
        <tr><td class="td-label">Jenis Kendaraan</td><td class="td-val">${fStr(f.jenisKendaraan)}</td></tr>
        <tr><td class="td-label">Tahun Kendaraan</td><td class="td-val">${fStr(f.tahunKendaraan)}</td></tr>
        <tr><td class="td-label">Plat / Wilayah</td><td class="td-val">${fStr(f.platKendaraan)}</td></tr>
        <tr><td class="td-label">Tipe Proteksi</td><td class="td-val">${fStr(f.tipeProteksi, "All Risk / Comprehensive")}</td></tr>
        <tr><td class="td-label">Nilai Pertanggungan</td><td class="td-val highlight">${fRp(f.nilaiKendaraan)}</td></tr>
      </tbody>
    </table>
  </div>

  <!-- B. SIMULASI PREMI -->
  <div class="section">
    <div class="section-title">📊 B. Simulasi &amp; Estimasi Premi</div>
    <div class="sim-note">⚠️ Nilai di bawah adalah <strong>SIMULASI &amp; ESTIMASI</strong> — premi final ditetapkan perusahaan asuransi setelah survei &amp; analisis risiko.</div>
    <table class="premi-table">
      <thead>
        <tr>
          <th style="text-align:left;padding:10px 12px;background:#0D2137;color:#C8963E;font-size:11px;letter-spacing:1px;text-transform:uppercase;border-radius:6px 0 0 0;">Komponen</th>
          <th style="text-align:right;padding:10px 12px;background:#0D2137;color:#C8963E;font-size:11px;letter-spacing:1px;text-transform:uppercase;border-radius:0 6px 0 0;">Estimasi Biaya</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="td-premi">Nilai Pertanggungan</td><td class="td-premi-val">${nilaiRaw ? fRp(f.nilaiKendaraan) : "—"}</td></tr>
        <tr><td class="td-premi">Rate Premi Dasar (estimasi)</td><td class="td-premi-val">${rateLabel}</td></tr>
        <tr><td class="td-premi">Premi Dasar (estimasi)</td><td class="td-premi-val">${nilaiRaw ? "Rp " + premiDasar.toLocaleString("id-ID") : "—"}</td></tr>
        <tr><td class="td-premi">Biaya Administrasi</td><td class="td-premi-val">Rp ${biayaAdmin.toLocaleString("id-ID")}</td></tr>
        <tr><td class="td-premi">Biaya Penerbitan Polis</td><td class="td-premi-val">Rp ${biayaPolis.toLocaleString("id-ID")}</td></tr>
        <tr style="background:#FDF9F3;">
          <td style="padding:12px;font-weight:700;color:#0D2137;font-size:13px;border-top:2px solid #C8963E;">TOTAL ESTIMASI PREMI / TAHUN</td>
          <td style="padding:12px;font-weight:800;color:#C8963E;font-size:15px;text-align:right;border-top:2px solid #C8963E;">${nilaiRaw ? "Rp " + total.toLocaleString("id-ID") : "—"}</td>
        </tr>
      </tbody>
    </table>
    <p style="font-size:11px;color:#94A3B8;margin-top:8px;line-height:1.6;">
      * Rate estimasi mengacu pada tarif referensi OJK SE No.6/SEOJK.05/2017. Own Risk (risiko sendiri): Rp 300.000/kejadian (BBM) atau Rp 500.000/kejadian (EV).
    </p>
  </div>

  <!-- C. JAMINAN UTAMA -->
  <div class="section">
    <div class="section-title">✅ C. Manfaat Pertanggungan Utama</div>
    <div class="benefit-grid">
      ${[
        ["Kerusakan Akibat Tabrakan & Benturan","Termasuk kerusakan akibat tabrakan dengan kendaraan lain, benda diam, atau terjatuh ke jurang."],
        ["Kerusakan Akibat Terbalik","Kendaraan yang terbalik akibat kecelakaan dijamin penuh sesuai tipe perlindungan."],
        ["Kebakaran (termasuk sambaran petir)","Kerusakan akibat kebakaran, ledakan, atau sambaran petir ditanggung."],
        ["Pencurian / Kehilangan Total","Kendaraan yang hilang akibat pencurian dijamin sesuai nilai pertanggungan."],
        ["Kerusakan saat Transit","Kerusakan saat kendaraan diangkut menggunakan kapal penyeberangan resmi."],
        ["Biaya Derek & Evakuasi","Biaya derek ke bengkel rekanan terdekat ditanggung oleh penanggung."],
      ].map(([t,d]) => `<div class="benefit-item"><div class="benefit-title">✓ ${t}</div><div class="benefit-desc">${d}</div></div>`).join("")}
    </div>
  </div>

  <!-- D. PERLUASAN JAMINAN -->
  <div class="section">
    <div class="section-title">➕ D. Perluasan Jaminan (Opsional — Estimasi Tambahan Premi)</div>
    <p style="font-size:12px;color:#64748B;margin-bottom:10px;">Berikut adalah perluasan jaminan yang dapat ditambahkan sesuai kebutuhan:</p>
    <table><tbody>${perluasanRows}</tbody></table>
  </div>

  <!-- E. YANG DIJAMIN -->
  <div class="section">
    <div class="section-title">📋 E. Hal-Hal yang Dijamin (PSAKBI)</div>
    <p style="font-size:12px;color:#64748B;margin-bottom:10px;">Berdasarkan <em>Polis Standar Asuransi Kendaraan Bermotor Indonesia (PSAKBI)</em>, pertanggungan mencakup:</p>
    <ul class="list-check">
      <li>Kerugian atau kerusakan pada kendaraan bermotor yang dipertanggungkan akibat kecelakaan</li>
      <li>Kerusakan akibat perbuatan jahat pihak ketiga (vandalisme) — bila diperluas</li>
      <li>Biaya perbaikan di bengkel resmi atau bengkel rekanan penanggung</li>
      <li>Kerugian total (total loss) akibat kerusakan ≥ 75% dari harga kendaraan atau pencurian</li>
      <li>Tanggung jawab hukum kepada pihak ketiga — bila perluasan TJH III diambil</li>
      <li>Santunan kecelakaan diri pengemudi &amp; penumpang — bila perluasan PA diambil</li>
    </ul>
  </div>

  <!-- F. PENGECUALIAN -->
  <div class="section">
    <div class="section-title">🚫 F. Pengecualian — Hal yang Tidak Dijamin</div>
    <p style="font-size:12px;color:#64748B;margin-bottom:10px;">Berdasarkan ketentuan polis, klaim <strong>tidak akan diproses</strong> apabila:</p>
    <ul class="list-cross">
      <li>Pengemudi tidak memiliki Surat Izin Mengemudi (SIM) yang sah dan sesuai golongan</li>
      <li>Pengemudi berada di bawah pengaruh alkohol, narkotika, atau zat psikoaktif lainnya</li>
      <li>Kerusakan disebabkan oleh kelalaian atau tindakan yang disengaja oleh tertanggung</li>
      <li>Keausan, korosi, atau kerusakan mekanis akibat pemakaian normal (bukan kecelakaan)</li>
      <li>Kendaraan digunakan untuk balapan, uji kecepatan, atau kegiatan sejenisnya</li>
      <li>Kerusakan akibat perang, terorisme, atau bencana nuklir</li>
      <li>Banjir, gempa bumi, tsunami — kecuali perluasan risiko telah diambil</li>
      <li>Kendaraan digunakan di luar wilayah yang disepakati dalam polis</li>
    </ul>
  </div>

  <!-- G. KLAIM & CTA -->
  <div class="section">
    <div class="section-title">📞 G. Prosedur Klaim &amp; Langkah Selanjutnya</div>
    <div class="claim-box">
      <div class="claim-title">Dokumen yang Diperlukan untuk Klaim</div>
      <ul class="list-check" style="margin-top:8px;">
        <li>Formulir klaim yang telah diisi dan ditandatangani</li>
        <li>Fotokopi KTP, SIM, dan STNK yang masih berlaku</li>
        <li>Foto kerusakan kendaraan (minimal 4 sisi: depan, belakang, kiri, kanan)</li>
        <li>Laporan kepolisian (khusus untuk kasus pencurian atau kecelakaan besar)</li>
        <li>Kronologi kejadian secara tertulis</li>
      </ul>
      <div style="margin-top:12px;padding:10px;background:#FEF9EC;border-radius:6px;border-left:3px solid #C8963E;">
        ⏱ <strong>Batas waktu pelaporan klaim: maksimal 5 (lima) hari kalender</strong> sejak tanggal kejadian.
      </div>
    </div>
    <div class="cta-box">
      <div class="cta-title">Tertarik Melanjutkan ke Penerbitan Polis Resmi?</div>
      <p class="cta-desc">Hubungi konsultan kami untuk mendapatkan penawaran resmi dari beberapa perusahaan asuransi terkemuka — kami akan bantu membandingkan dan memilihkan yang paling sesuai dengan kebutuhan dan anggaran Anda.</p>
      <div class="cta-contact">
        <span>💬 WhatsApp: <strong>0877-8165-8231</strong> (Rio MD)</span>
        <span>✉️ Email: <strong>rio@asuransijogja.biz.id</strong></span>
      </div>
    </div>
  </div>`;
  }

  /* ── Properti ── */
  if (product === "properti") {
    const nilaiRaw   = parseInt(String(f.nilaiBangunan || "0").replace(/\D/g, ""), 10) || 0;
    const nilaiIsiRaw= fNum(f.nilaiIsi);
    const totalNilai = nilaiRaw + nilaiIsiRaw;
    const kkStr      = fStr(f.kelasKonstruksi);
    const rateKelas  = kkStr.includes("1") ? 0.08 : kkStr.includes("2") ? 0.15 : 0.25;
    const rateLabel  = kkStr.includes("1") ? "0,08% (Kelas 1 — Beton/Bata)" : kkStr.includes("2") ? "0,15% (Kelas 2 — Semi Permanen)" : "0,25% (Kelas 3 — Kayu/Bambu)";
    const premiDasar = Math.round(totalNilai * rateKelas / 100);
    const biayaAdmin = 75000;
    const biayaPolis = 100000;
    const total      = premiDasar + biayaAdmin + biayaPolis;

    const risikoTambahan: string[] = Array.isArray(f.risikoTambahan) ? f.risikoTambahan as string[] : (f.risikoTambahan ? [String(f.risikoTambahan)] : []);

    const perluasanRows = [
      ["Perluasan Banjir & Genangan Air", "± 0,10% – 0,15% dari nilai pertanggungan"],
      ["Perluasan Gempa Bumi & Tsunami", "± 0,05% – 0,12% dari nilai pertanggungan"],
      ["Huru-Hara, Kerusuhan & Sabotase (RSMD)", "± 0,05% – 0,10% dari nilai pertanggungan"],
      ["Tanah Longsor & Pergerakan Tanah", "± 0,05% – 0,10% dari nilai pertanggungan"],
    ].map(([n,v]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;font-size:12px;color:#475569;">${n}</td><td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;font-size:12px;font-weight:600;color:#0D2137;text-align:right;">${v}</td></tr>`).join("");

    return `
  <div class="section">
    <div class="section-title">🏠 A. Informasi Objek Pertanggungan</div>
    <table><tbody>
      <tr><td class="td-label">Nama Tertanggung</td><td class="td-val">${sub.nama}</td></tr>
      <tr><td class="td-label">Lokasi / Alamat</td><td class="td-val">${fStr(f.lokasiProperti)}</td></tr>
      <tr><td class="td-label">Jenis / Okupasi</td><td class="td-val">${fStr(f.okupasi)}</td></tr>
      <tr><td class="td-label">Kelas Konstruksi</td><td class="td-val">${fStr(f.kelasKonstruksi)}</td></tr>
      <tr><td class="td-label">Nilai Bangunan</td><td class="td-val highlight">${fRp(f.nilaiBangunan)}</td></tr>
      <tr><td class="td-label">Nilai Isi / Perabot</td><td class="td-val">${fRp(f.nilaiIsi)}</td></tr>
      ${risikoTambahan.length ? `<tr><td class="td-label">Perluasan Risiko</td><td class="td-val">${risikoTambahan.join(", ")}</td></tr>` : ""}
      ${fStr(f.wilayahGempa) !== "—" ? `<tr><td class="td-label">Wilayah Gempa</td><td class="td-val">` + fStr(f.wilayahGempa) + ` (Zona ` + (ZONA_GEMPA_NOMOR[fStr(f.wilayahGempa)] || "—") + `)</td></tr>` : ""}
    </tbody></table>
  </div>

  <div class="section">
    <div class="section-title">📊 B. Simulasi &amp; Estimasi Premi</div>
    <div class="sim-note">⚠️ Nilai di bawah adalah <strong>SIMULASI &amp; ESTIMASI</strong> — premi final ditetapkan setelah survei lokasi &amp; analisis risiko oleh penanggung.</div>
    <table class="premi-table">
      <thead><tr>
        <th style="text-align:left;padding:10px 12px;background:#0D2137;color:#C8963E;font-size:11px;letter-spacing:1px;text-transform:uppercase;border-radius:6px 0 0 0;">Komponen</th>
        <th style="text-align:right;padding:10px 12px;background:#0D2137;color:#C8963E;font-size:11px;letter-spacing:1px;text-transform:uppercase;border-radius:0 6px 0 0;">Estimasi Biaya</th>
      </tr></thead>
      <tbody>
        <tr><td class="td-premi">Total Nilai Pertanggungan</td><td class="td-premi-val">${totalNilai ? "Rp " + totalNilai.toLocaleString("id-ID") : "—"}</td></tr>
        <tr><td class="td-premi">Rate Premi Dasar (estimasi)</td><td class="td-premi-val">${rateLabel}</td></tr>
        <tr><td class="td-premi">Premi Dasar (estimasi)</td><td class="td-premi-val">${totalNilai ? "Rp " + premiDasar.toLocaleString("id-ID") : "—"}</td></tr>
        <tr><td class="td-premi">Biaya Administrasi</td><td class="td-premi-val">Rp ${biayaAdmin.toLocaleString("id-ID")}</td></tr>
        <tr><td class="td-premi">Biaya Penerbitan Polis</td><td class="td-premi-val">Rp ${biayaPolis.toLocaleString("id-ID")}</td></tr>
        ${(() => {
          const wGempa = fStr(f.wilayahGempa);
          const rGempa = ZONA_GEMPA_RATE[wGempa] || 0;
          const pGempa = rGempa && totalNilai ? Math.round(totalNilai * rGempa / 1000) : 0;
          const biayaAdm = (premiDasar + pGempa) < 5_000_000 ? 30_000 : 40_000;
          const grandTotal = premiDasar + pGempa + biayaAdm + biayaPolis;
          return pGempa > 0 ? `
            <tr><td class="td-premi">Premi Gempa Bumi (Zona ${ZONA_GEMPA_NOMOR[wGempa]} — ${rGempa}‰)</td><td class="td-premi-val">Rp ${pGempa.toLocaleString("id-ID")}</td></tr>
            <tr><td class="td-premi">Biaya Administrasi</td><td class="td-premi-val">Rp ${biayaAdm.toLocaleString("id-ID")}</td></tr>
            <tr><td class="td-premi">Biaya Penerbitan Polis</td><td class="td-premi-val">Rp ${biayaPolis.toLocaleString("id-ID")}</td></tr>
            <tr style="background:#FDF9F3;"><td style="padding:12px;font-weight:700;color:#0D2137;font-size:13px;border-top:2px solid #C8963E;">TOTAL ESTIMASI PREMI / TAHUN</td><td style="padding:12px;font-weight:800;color:#C8963E;font-size:15px;text-align:right;border-top:2px solid #C8963E;">Rp ${grandTotal.toLocaleString("id-ID")}</td></tr>
          ` : `
            <tr><td class="td-premi">Biaya Administrasi</td><td class="td-premi-val">Rp ${biayaAdm.toLocaleString("id-ID")}</td></tr>
            <tr><td class="td-premi">Biaya Penerbitan Polis</td><td class="td-premi-val">Rp ${biayaPolis.toLocaleString("id-ID")}</td></tr>
            <tr style="background:#FDF9F3;"><td style="padding:12px;font-weight:700;color:#0D2137;font-size:13px;border-top:2px solid #C8963E;">TOTAL ESTIMASI PREMI / TAHUN</td><td style="padding:12px;font-weight:800;color:#C8963E;font-size:15px;text-align:right;border-top:2px solid #C8963E;">${totalNilai ? "Rp " + grandTotal.toLocaleString("id-ID") : "—"}</td></tr>
          `;
        })()}
      </tbody>
    </table>
    <p style="font-size:11px;color:#94A3B8;margin-top:8px;line-height:1.6;">* Rate estimasi mengacu pada tarif PAR/kebakaran standar. Biaya admin: &lt;Rp 5 juta = Rp 30.000, &ge;Rp 5 juta = Rp 40.000. Survei properti dapat mempengaruhi rate final.</p>
  </div>

  <div class="section">
    <div class="section-title">✅ C. Jaminan Utama (PSAKI / PAR)</div>
    <ul class="list-check">
      <li>Kebakaran akibat api yang timbul secara tiba-tiba (termasuk sambaran petir)</li>
      <li>Ledakan yang berasal dari dalam bangunan</li>
      <li>Kejatuhan pesawat udara atau bagian-bagiannya</li>
      <li>Asap yang berasal dari kebakaran di dalam bangunan yang sama</li>
      <li>Kerusakan akibat perbuatan jahat (malicious damage) — bila diperluas</li>
      <li>Biaya pembersihan puing-puing akibat kebakaran (hingga batas tertentu)</li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">➕ D. Perluasan Jaminan (Opsional)</div>
    <table><tbody>${perluasanRows}</tbody></table>
  </div>

  <div class="section">
    <div class="section-title">🚫 E. Pengecualian — Tidak Dijamin</div>
    <ul class="list-cross">
      <li>Kerusakan yang disebabkan oleh tindakan disengaja oleh tertanggung atau keluarga</li>
      <li>Bangunan kosong tidak berpenghuni lebih dari 30 hari berturut-turut tanpa pemberitahuan</li>
      <li>Kerusakan akibat perang, invasi, pemberontakan bersenjata</li>
      <li>Kerusakan akibat reaksi nuklir, radiasi, atau kontaminasi radioaktif</li>
      <li>Banjir, gempa bumi, tsunami, tanah longsor — kecuali perluasan telah diambil</li>
      <li>Kerusakan akibat keausan, pemeliharaan yang tidak memadai, atau konstruksi yang cacat</li>
      <li>Kerugian akibat penyitaan atau penggusuran oleh pemerintah berdasarkan hukum</li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">📞 F. Prosedur Klaim &amp; Langkah Selanjutnya</div>
    <div class="claim-box">
      <div class="claim-title">Dokumen Klaim yang Diperlukan</div>
      <ul class="list-check" style="margin-top:8px;">
        <li>Formulir klaim yang telah diisi dan ditandatangani</li>
        <li>Fotokopi KTP pemilik bangunan</li>
        <li>Fotokopi sertifikat atau bukti kepemilikan bangunan</li>
        <li>Foto kerusakan sebelum dilakukan perbaikan apapun</li>
        <li>Laporan kepolisian (untuk kasus kebakaran besar atau perbuatan jahat)</li>
        <li>Estimasi biaya perbaikan dari kontraktor atau toko bangunan</li>
      </ul>
      <div style="margin-top:12px;padding:10px;background:#FEF9EC;border-radius:6px;border-left:3px solid #C8963E;">
        ⏱ <strong>Batas waktu pelaporan klaim: maksimal 5 (lima) hari kalender</strong> sejak tanggal kejadian.
      </div>
    </div>
    <div class="cta-box">
      <div class="cta-title">Siap Melanjutkan ke Penerbitan Polis Resmi?</div>
      <p class="cta-desc">Tim konsultan kami siap membantu Anda membandingkan penawaran dari berbagai perusahaan asuransi dan memilih yang paling sesuai untuk properti Anda di Yogyakarta.</p>
      <div class="cta-contact">
        <span>💬 WhatsApp: <strong>0877-8165-8231</strong> (Rio MD)</span>
        <span>✉️ Email: <strong>rio@asuransijogja.biz.id</strong></span>
      </div>
    </div>
  </div>`;
  }

  /* ── Produk lain — generic template ── */
  const fieldRows = Object.entries(f)
    .filter(([, val]) => val && !(Array.isArray(val) && val.length === 0))
    .map(([key, val]) => {
      const label = sub.fieldLabels[key] || key;
      const display = Array.isArray(val) ? val.join(", ") : String(val);
      return `<tr><td class="td-label">${label}</td><td class="td-val">${display}</td></tr>`;
    }).join("");

  return `
  <div class="section">
    <div class="section-title">📋 Rincian Data ${sub.productLabel}</div>
    <div class="sim-note">⚠️ Dokumen ini merupakan <strong>Simulasi &amp; Estimasi</strong> awal — nilai final ditetapkan setelah analisis risiko lebih lanjut.</div>
    <table><tbody>${fieldRows || '<tr><td colspan="2" style="padding:16px;color:#94A3B8;text-align:center;">Data belum diisi</td></tr>'}</tbody></table>
  </div>

  <div class="section">
    <div class="section-title">📞 Langkah Selanjutnya</div>
    <div class="cta-box">
      <div class="cta-title">Hubungi Konsultan Kami untuk Penawaran Resmi</div>
      <p class="cta-desc">Kami akan membantu Anda mendapatkan penawaran terbaik dari beberapa perusahaan asuransi terpercaya yang sesuai dengan kebutuhan dan anggaran Anda.</p>
      <div class="cta-contact">
        <span>💬 WhatsApp: <strong>0877-8165-8231</strong> (Rio MD)</span>
        <span>✉️ Email: <strong>rio@asuransijogja.biz.id</strong></span>
      </div>
    </div>
  </div>`;
}

function generatePDFContent(sub: Submission): string {
  const produkLabel = sub.productLabel;
  const now = new Date(sub.submittedAt).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  });

  const productSections = buildProductSections(sub);

  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"/>
<title>Simulasi & Estimasi Premi ${produkLabel} — ${sub.nama}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'DM Sans',sans-serif;background:#fff;color:#0D2137;font-size:13.5px;line-height:1.65;}
  .page{max-width:740px;margin:0 auto;padding:48px 52px;}
  /* Header */
  .header{background:#0D2137;border-radius:14px;padding:30px 36px;margin-bottom:32px;position:relative;overflow:hidden;}
  .brand{font-family:'Syne',sans-serif;font-size:21px;font-weight:800;color:#fff;}
  .brand span{color:#C8963E;}
  .doc-type{font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#C8963E;margin-top:5px;margin-bottom:14px;}
  .doc-title{font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:#fff;line-height:1.22;}
  .meta-row{display:flex;gap:20px;margin-top:16px;flex-wrap:wrap;}
  .meta-item{display:flex;flex-direction:column;gap:2px;}
  .meta-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,0.40);}
  .meta-value{font-size:11.5px;color:rgba(255,255,255,0.82);font-weight:500;}
  .id-badge{display:inline-block;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:5px;padding:2px 8px;font-size:9.5px;font-weight:600;color:rgba(255,255,255,0.45);font-family:monospace;margin-top:14px;}
  /* Sections */
  .section{margin-bottom:26px;}
  .section-title{font-family:'Syne',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#94A3B8;border-bottom:1.5px solid #f1f5f9;padding-bottom:7px;margin-bottom:12px;}
  /* Tables */
  table{width:100%;border-collapse:collapse;}
  .td-label{padding:9px 12px;color:#64748B;font-size:12.5px;width:40%;border-bottom:1px solid #f8fafc;vertical-align:top;}
  .td-val{padding:9px 12px;color:#0D2137;font-size:12.5px;font-weight:600;border-bottom:1px solid #f8fafc;}
  .td-val.highlight{color:#C8963E;font-size:13.5px;}
  /* Premi table */
  .premi-table{border-radius:8px;overflow:hidden;margin-bottom:4px;}
  .td-premi{padding:9px 12px;color:#475569;font-size:12.5px;border-bottom:1px solid #f1f5f9;}
  .td-premi-val{padding:9px 12px;color:#0D2137;font-size:12.5px;font-weight:600;text-align:right;border-bottom:1px solid #f1f5f9;}
  /* Sim note */
  .sim-note{background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;padding:10px 14px;font-size:12px;color:#92400E;margin-bottom:14px;line-height:1.6;}
  /* Benefits */
  .benefit-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
  .benefit-item{background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:12px 14px;}
  .benefit-title{font-size:12px;font-weight:700;color:#0D2137;margin-bottom:4px;}
  .benefit-desc{font-size:11.5px;color:#64748B;line-height:1.55;}
  /* Lists */
  .list-check{list-style:none;display:flex;flex-direction:column;gap:6px;}
  .list-check li{font-size:12.5px;color:#475569;padding-left:20px;position:relative;line-height:1.55;}
  .list-check li::before{content:"✓";position:absolute;left:0;color:#16A34A;font-weight:700;}
  .list-cross{list-style:none;display:flex;flex-direction:column;gap:6px;}
  .list-cross li{font-size:12.5px;color:#475569;padding-left:20px;position:relative;line-height:1.55;}
  .list-cross li::before{content:"✕";position:absolute;left:0;color:#DC2626;font-weight:700;}
  /* Claim box */
  .claim-box{background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:16px 18px;margin-bottom:16px;}
  .claim-title{font-family:'Syne',sans-serif;font-size:12px;font-weight:700;color:#0D2137;margin-bottom:10px;}
  /* CTA */
  .cta-box{background:#0D2137;border-radius:12px;padding:20px 22px;}
  .cta-title{font-family:'Syne',sans-serif;font-size:14px;font-weight:800;color:#C8963E;margin-bottom:8px;}
  .cta-desc{font-size:12px;color:rgba(255,255,255,0.75);line-height:1.65;margin-bottom:14px;}
  .cta-contact{display:flex;flex-direction:column;gap:5px;}
  .cta-contact span{font-size:12px;color:rgba(255,255,255,0.70);}
  .cta-contact strong{color:#fff;}
  /* Disclaimer */
  .disclaimer-final{background:#FDF9F3;border:1px solid #E8D5B0;border-radius:10px;padding:14px 18px;margin-top:24px;}
  .disclaimer-final p{font-size:11.5px;color:#64748B;line-height:1.7;}
  /* Footer */
  .footer{margin-top:32px;padding-top:14px;border-top:1px solid #f1f5f9;display:flex;justify-content:space-between;align-items:flex-end;}
  .footer-brand{font-family:'Syne',sans-serif;font-weight:700;font-size:14px;color:#0D2137;}
  .footer-brand span{color:#C8963E;}
  .footer-contact{font-size:10.5px;color:#94A3B8;text-align:right;line-height:1.65;}
  @media print{
    body{print-color-adjust:exact;-webkit-print-color-adjust:exact;}
    .page{padding:28px 32px;}
    .benefit-grid{grid-template-columns:1fr 1fr;}
  }
</style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <div class="header">
    <div class="brand">Asuransi<span>Jogja</span></div>
    <div class="doc-type">Simulasi &amp; Estimasi Premi</div>
    <div class="doc-title">Ringkasan Simulasi &amp; Estimasi<br/>${produkLabel}</div>
    <div class="meta-row">
      <div class="meta-item">
        <span class="meta-label">Dipersiapkan untuk</span>
        <span class="meta-value">${sub.nama}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">WhatsApp</span>
        <span class="meta-value">${sub.whatsapp}</span>
      </div>
      ${sub.email ? `<div class="meta-item"><span class="meta-label">Email</span><span class="meta-value">${sub.email}</span></div>` : ""}
      <div class="meta-item">
        <span class="meta-label">Tanggal Dokumen</span>
        <span class="meta-value">${now}</span>
      </div>
    </div>
    <div class="id-badge">${sub.id}</div>
  </div>

  <!-- PRODUCT SECTIONS -->
  ${productSections}

  <!-- DISCLAIMER AKHIR -->
  <div class="disclaimer-final">
    <p>
      <strong>⚠️ Pernyataan Penting:</strong> Seluruh angka dalam dokumen ini merupakan <strong>Simulasi &amp; Estimasi</strong>
      yang bersifat indikatif dan <strong>bukan merupakan penawaran resmi (quotation) maupun polis asuransi</strong>.
      Premi final akan ditetapkan oleh perusahaan asuransi setelah proses survei objek dan analisis risiko secara menyeluruh.
      Sebagai konsultan asuransi kerugian independen, kami tidak menerbitkan polis secara langsung, melainkan membantu
      Anda memperoleh penawaran terbaik dari perusahaan asuransi yang terdaftar dan diawasi oleh OJK.
    </p>
  </div>

  <!-- FOOTER -->
  <div class="footer">
    <div>
      <div class="footer-brand">Asuransi<span>Jogja</span></div>
      <div style="font-size:10.5px;color:#94A3B8;margin-top:3px;">Konsultan Asuransi Kerugian Independen · Yogyakarta</div>
    </div>
    <div class="footer-contact">
      📱 0877-8165-8231 (Rio MD)<br/>
      ✉️ rio@asuransijogja.biz.id<br/>
      🌐 asuransijogja.biz.id
    </div>
  </div>

</div>
</body>
</html>`;
}

function downloadPDF(sub: Submission) {
  const html = generatePDFContent(sub);
  const win = window.open("", "_blank");
  if (!win) return alert("Pop-up diblokir browser. Izinkan pop-up dan coba lagi.");

  // Format nama file: Simulasi-dan-Estimasi-Premi-[NamaNasabah].pdf
  const safeNama = sub.nama.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");
  const fileName = `Simulasi-dan-Estimasi-Premi-${safeNama}.pdf`;

  win.document.write(html);
  win.document.close();

  // Set document title agar browser memakai nama file yang benar saat Save/Print to PDF
  setTimeout(() => {
    win.document.title = fileName;
    win.print();
  }, 800);
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function AdminSPPAPage() {
  const [secret, setSecret]         = useState("");
  const [authed, setAuthed]         = useState(false);
  const [subs, setSubs]             = useState<Submission[]>([]);
  const [loading, setLoading]       = useState(false);
  const [filterStatus, setFilter]   = useState<string>("semua");
  const [filterProduk, setFProduk]  = useState<string>("semua");
  const [search, setSearch]         = useState("");
  const [selected, setSelected]     = useState<Submission | null>(null);
  const [authError, setAuthError]   = useState("");

  const fetchData = useCallback(async (sec: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/send-sppa", {
        headers: { "x-admin-secret": sec },
      });
      if (res.status === 401) { setAuthError("Secret salah."); return; }
      const json = await res.json();
      setSubs(json.submissions || []);
      setAuthed(true);
    } catch {
      setAuthError("Gagal terhubung ke server.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!secret.trim()) return;
    fetchData(secret);
  };

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/send-sppa", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-secret": secret },
      body: JSON.stringify({ id, status }),
    });
    setSubs(prev => prev.map(s => s.id === id ? { ...s, status: status as Submission["status"] } : s));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status: status as Submission["status"] } : prev);
  };

  const filtered = subs
    .filter(s => filterStatus === "semua" || s.status === filterStatus)
    .filter(s => filterProduk === "semua" || s.product === filterProduk)
    .filter(s =>
      !search ||
      s.nama.toLowerCase().includes(search.toLowerCase()) ||
      s.whatsapp.includes(search) ||
      s.id.toLowerCase().includes(search.toLowerCase())
    );

  const stats = {
    total: subs.length,
    baru: subs.filter(s => s.status === "baru").length,
    diproses: subs.filter(s => s.status === "diproses").length,
    selesai: subs.filter(s => s.status === "selesai").length,
  };

  /* ── Login screen ── */
  if (!authed) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-black/6 p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="font-heading text-xl font-bold text-navy mb-1">
              Asuransi<span className="text-gold">Jogja</span>
            </div>
            <div className="text-xs text-[#94A3B8] font-medium tracking-widest uppercase">Admin Dashboard</div>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-navy/60 mb-1.5">Admin Secret</label>
              <input
                type="password"
                value={secret}
                onChange={e => setSecret(e.target.value)}
                placeholder="Masukkan ADMIN_SECRET"
                className="w-full border border-[#D4C9B8] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all"
                autoFocus
              />
            </div>
            {authError && <p className="text-red-500 text-xs">{authError}</p>}
            <button
              type="submit"
              className="w-full bg-navy text-white font-bold text-sm py-2.5 rounded-xl hover:bg-navy/85 transition-colors"
            >
              Masuk →
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Top bar */}
      <div className="bg-navy px-6 py-3.5 flex items-center justify-between">
        <div className="font-heading text-base font-bold text-white">
          Asuransi<span className="text-gold">Jogja</span>
          <span className="text-white/40 font-normal text-xs ml-3">/ Admin SPPA</span>
        </div>
        <button
          onClick={() => fetchData(secret)}
          className="text-xs text-white/60 hover:text-gold transition-colors flex items-center gap-1.5"
        >
          🔄 Refresh
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Total", val: stats.total, color: "text-navy" },
            { label: "Baru", val: stats.baru, color: "text-amber-600" },
            { label: "Diproses", val: stats.diproses, color: "text-blue-600" },
            { label: "Selesai", val: stats.selesai, color: "text-green-600" },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-black/6 p-4 text-center">
              <div className={`font-heading text-2xl font-bold ${s.color}`}>{s.val}</div>
              <div className="text-xs text-[#94A3B8] font-medium mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-black/6 p-4 mb-4 flex flex-wrap gap-3 items-center">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Cari nama, WA, atau ID..."
            className="border border-[#D4C9B8] rounded-lg px-3 py-2 text-sm flex-1 min-w-[180px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15"
          />
          <select
            value={filterStatus}
            onChange={e => setFilter(e.target.value)}
            className="border border-[#D4C9B8] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
          >
            <option value="semua">Semua Status</option>
            <option value="baru">Baru</option>
            <option value="diproses">Diproses</option>
            <option value="selesai">Selesai</option>
          </select>
          <select
            value={filterProduk}
            onChange={e => setFProduk(e.target.value)}
            className="border border-[#D4C9B8] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
          >
            <option value="semua">Semua Produk</option>
            {["kendaraan","properti","liability","engineering","surety","cargo"].map(p => (
              <option key={p} value={p}>{PRODUCT_ICON[p]} {p.charAt(0).toUpperCase()+p.slice(1)}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          {/* Table */}
          <div className="flex-1 min-w-0">
            {loading ? (
              <div className="bg-white rounded-xl border border-black/6 p-12 text-center text-[#94A3B8] text-sm">
                Memuat data...
              </div>
            ) : filtered.length === 0 ? (
              <div className="bg-white rounded-xl border border-black/6 p-12 text-center">
                <div className="text-4xl mb-3 opacity-30">📋</div>
                <p className="text-sm text-[#94A3B8]">Belum ada SPPA masuk</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-black/6 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-black/6 bg-[#F8F9FB]">
                      {["ID", "Produk", "Nama", "WA", "Waktu", "Status", "Aksi"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-bold text-[#94A3B8] uppercase tracking-wider whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((sub, i) => (
                      <tr
                        key={sub.id}
                        className={`border-b border-black/4 hover:bg-gold/3 transition-colors cursor-pointer ${
                          selected?.id === sub.id ? "bg-gold/5" : i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                        }`}
                        onClick={() => setSelected(sub)}
                      >
                        <td className="px-4 py-3 font-mono text-xs text-[#64748B]">{sub.id}</td>
                        <td className="px-4 py-3 text-sm whitespace-nowrap">
                          {PRODUCT_ICON[sub.product]} <span className="text-[#64748B] text-xs">{sub.productLabel}</span>
                        </td>
                        <td className="px-4 py-3 text-sm font-semibold text-navy">{sub.nama}</td>
                        <td className="px-4 py-3 text-xs text-[#64748B] font-mono">{sub.whatsapp}</td>
                        <td className="px-4 py-3 text-xs text-[#94A3B8] whitespace-nowrap">{formatDate(sub.submittedAt)}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${STATUS_STYLE[sub.status]}`}>
                            {STATUS_LABEL[sub.status]}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={e => { e.stopPropagation(); downloadPDF(sub); }}
                            className="text-xs bg-navy text-white px-3 py-1.5 rounded-lg hover:bg-navy/80 transition-colors whitespace-nowrap"
                          >
                            📄 PDF
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Detail panel */}
          {selected && (
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-xl border border-black/6 overflow-hidden sticky top-6">
                <div className="bg-navy px-5 py-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gold/70 font-bold tracking-widest uppercase mb-0.5">Detail SPPA</div>
                    <div className="text-white font-semibold text-sm">{selected.nama}</div>
                  </div>
                  <button onClick={() => setSelected(null)} className="text-white/40 hover:text-white text-lg">✕</button>
                </div>
                <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">

                  {/* Info dasar */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Data Pemohon</p>
                    <div className="text-xs space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">ID</span>
                        <span className="font-mono text-navy font-medium">{selected.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">Produk</span>
                        <span className="text-navy font-medium">{selected.productLabel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">WhatsApp</span>
                        <a href={`https://wa.me/${selected.whatsapp}`} className="text-green-600 font-medium">{selected.whatsapp}</a>
                      </div>
                      {selected.email && (
                        <div className="flex justify-between">
                          <span className="text-[#64748B]">Email</span>
                          <span className="text-navy">{selected.email}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">Waktu</span>
                        <span className="text-navy">{formatDate(selected.submittedAt)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Field detail */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Detail Isian</p>
                    <div className="space-y-1.5">
                      {Object.entries(selected.fields)
                        .filter(([, v]) => v && !(Array.isArray(v) && v.length === 0))
                        .map(([key, val]) => (
                          <div key={key} className="bg-[#F8F9FB] rounded-lg px-3 py-2">
                            <div className="text-[0.65rem] text-[#94A3B8] font-medium">{selected.fieldLabels[key] || key}</div>
                            <div className="text-xs text-navy font-semibold mt-0.5">
                              {Array.isArray(val) ? val.join(", ") : val}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Status update */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Update Status</p>
                    <div className="flex gap-2 flex-wrap">
                      {(["baru", "diproses", "selesai"] as const).map(st => (
                        <button
                          key={st}
                          onClick={() => updateStatus(selected.id, st)}
                          className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all ${
                            selected.status === st
                              ? STATUS_STYLE[st] + " scale-105"
                              : "bg-white border-black/10 text-[#64748B] hover:border-navy/30"
                          }`}
                        >
                          {STATUS_LABEL[st]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2 border-t border-black/6">
                    <button
                      onClick={() => downloadPDF(selected)}
                      className="w-full bg-navy text-white text-xs font-bold py-2.5 rounded-xl hover:bg-navy/85 transition-colors"
                    >
                      📄 Download / Cetak PDF
                    </button>
                    <a
                      href={`https://wa.me/${selected.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full bg-[#25D366] text-white text-xs font-bold py-2.5 rounded-xl hover:opacity-90 transition-opacity text-center no-underline"
                    >
                      💬 Balas via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
