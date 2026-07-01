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
// Rate gempa dalam % sesuai ketentuan: Zona 4 → 0,075% | Zona 5 → 0,160%
// Rate gempa dalam ‰ (per mil), per golongan
// Golongan I  : Rumah tinggal, Kos, Kantor, Ruko/Toko
// Golongan II : Vila, Homestay, Motel, Hotel, Gudang non-hazardous
// Golongan III: Gudang kimia/hazardous, pabrik (tidak disupport di form ini)
const ZONA_GEMPA_RATE: Record<string, { gol1: number; gol2: number }> = {
  "Kota Yogyakarta":        { gol1: 1.350, gol2: 1.600 },
  "Kabupaten Sleman":       { gol1: 1.350, gol2: 1.600 },
  "Kabupaten Gunung Kidul": { gol1: 1.350, gol2: 1.600 },
  "Kabupaten Kulon Progo":  { gol1: 1.350, gol2: 1.600 },
  "Kabupaten Bantul":       { gol1: 1.600, gol2: 2.150 },
};

const ZONA_GEMPA_NOMOR: Record<string, number> = {
  "Kota Yogyakarta":        4,
  "Kabupaten Sleman":       4,
  "Kabupaten Gunung Kidul": 4,
  "Kabupaten Kulon Progo":  4,
  "Kabupaten Bantul":       5,
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

// ═══════════════════════════════════════════════════════════════════════════
// PDF PENAWARAN PROPERTI — meniru format "Perhitungan Premi" (contoh terlampir)
// Hanya produk "properti" yang memiliki format PDF resmi saat ini.
// Angka & baris di bawah 100% mengikuti hasil input form SPPA / kalkulator.
// ═══════════════════════════════════════════════════════════════════════════

// Format rate permil (‰) menjadi persen 4 desimal, contoh: 0.294‰ → "0.0294%"
function fmtPct(permil: number): string {
  return (permil / 10).toFixed(4) + "%";
}
function fmtRpPlain(n: number): string {
  return Math.round(n).toLocaleString("id-ID");
}

interface PropertiCalc {
  nama: string;
  alamat: string;
  okupasiRaw: string;
  okupasiLabel: string;
  kkLabel: string;
  jenisPertanggungan: string;
  nilaiBangunan: number;
  nilaiIsi: number;
  totalNilai: number;
  ratePermilDasar: number;
  premiDasar: number;
  adaBanjir: boolean; premiBanjir: number; rateBanjirPermil: number;
  adaHuru: boolean;   premiHuru: number;   rateHuruPermil: number;
  adaBurglary: boolean; premiBurglary: number; rateBurglaryPermil: number;
  adaTabrakan: boolean; premiTabrakan: number; rateTabrakanPermil: number;
  subtotalKebakaran: number;
  biayaAdminKebakaran: number;
  totalKebakaran: number;
  adaGempa: boolean;
  wGempa: string;
  zonaGempa: number;
  golLabel: string;
  rGempaPermil: number;
  premiGempa: number;
  biayaAdminGempa: number;
  totalGempa: number;
}

function computePropertiCalc(sub: Submission): PropertiCalc {
  const f = sub.fields;
  const nilaiBangunan = fNum(f.nilaiBangunan);
  const nilaiIsi      = fNum(f.nilaiIsi);
  const totalNilai    = nilaiBangunan + nilaiIsi;
  const okupasiRaw    = fStr(f.okupasi);
  const okupasiStr    = okupasiRaw.toLowerCase();
  const kkStr         = fStr(f.kelasKonstruksi).toLowerCase();

  const kk = kkStr.includes("1") || kkStr.includes("beton") ? 1
           : kkStr.includes("2") || kkStr.includes("semi")  ? 2 : 3;
  const kkLabel = kk === 1 ? "Kelas 1 (Beton/Bata)" : kk === 2 ? "Kelas 2 (Semi Permanen)" : "Kelas 3 (Kayu/Bambu)";

  type OkupasiRate = { label: string; kk1: number; kk2: number; kk3: number };
  const RATE_TABLE: { match: string[]; data: OkupasiRate }[] = [
    { match: ["rumah", "hunian", "tinggal"],    data: { label: "Rumah Tinggal",           kk1: 0.294, kk2: 0.397, kk3: 0.499 } },
    { match: ["kos", "kontrakan", "indekos"],   data: { label: "Kos-Kosan",                kk1: 0.478, kk2: 0.645, kk3: 0.812 } },
    { match: ["ruko", "toko", "retail"],        data: { label: "Ruko / Toko",              kk1: 0.594, kk2: 0.802, kk3: 1.011 } },
    { match: ["gudang", "warehouse", "pabrik"], data: { label: "Gudang / Pabrik",           kk1: 0.764, kk2: 1.031, kk3: 1.299 } },
    { match: ["kantor", "office"],              data: { label: "Kantor",                   kk1: 0.368, kk2: 0.497, kk3: 0.625 } },
    { match: ["vila", "villa", "homestay", "motel", "hotel"], data: { label: "Hotel / Vila / Homestay", kk1: 0.478, kk2: 0.645, kk3: 0.812 } },
  ];
  const matched     = RATE_TABLE.find(r => r.match.some(m => okupasiStr.includes(m)));
  const okupasiData = matched ? matched.data : RATE_TABLE[0].data;
  const ratePermilDasar = kk === 1 ? okupasiData.kk1 : kk === 2 ? okupasiData.kk2 : okupasiData.kk3;
  const premiDasar  = Math.round(totalNilai * ratePermilDasar / 1000);

  const risikoTambahan: string[] = Array.isArray(f.risikoTambahan)
    ? f.risikoTambahan as string[]
    : f.risikoTambahan ? [String(f.risikoTambahan)] : [];

  const adaBanjir = risikoTambahan.some(r => /banjir|longsor|topan/i.test(r));
  const rateBanjirPermil = 0.450;
  const premiBanjir = adaBanjir ? Math.round(totalNilai * rateBanjirPermil / 1000) : 0;

  const adaHuru = risikoTambahan.some(r => /huru|rsmd|srcc|kerusuhan/i.test(r));
  const rateHuruPermil = 0.010;
  const premiHuru = adaHuru ? Math.round(totalNilai * rateHuruPermil / 1000) : 0;

  const isRumah = !matched || matched.match.includes("rumah");
  const adaBurglary = risikoTambahan.some(r => /kebong|pencurian|burglary/i.test(r));
  const rateBurglaryPermil = isRumah ? 0.010 : (okupasiStr.includes("gudang") ? 1.500 : 1.000);
  const premiBurglary = adaBurglary ? Math.round((nilaiIsi || totalNilai) * rateBurglaryPermil / 1000) : 0;

  const adaTabrakan = risikoTambahan.some(r => /tabrakan|vehicle/i.test(r));
  const rateTabrakanPermil = 0.010;
  const premiTabrakan = adaTabrakan ? Math.round(totalNilai * rateTabrakanPermil / 1000) : 0;

  const subtotalKebakaran   = premiDasar + premiBanjir + premiHuru + premiBurglary + premiTabrakan;
  const biayaAdminKebakaran = subtotalKebakaran < 5_000_000 ? 30_000 : 40_000;
  const totalKebakaran      = subtotalKebakaran + biayaAdminKebakaran;

  const wGempa    = fStr(f.wilayahGempa);
  const zonaGempa = ZONA_GEMPA_NOMOR[wGempa] || 0;
  const rateZona  = ZONA_GEMPA_RATE[wGempa];
  const isGol2    = ["vila", "villa", "homestay", "motel", "hotel", "gudang"].some(k => okupasiStr.includes(k));
  const rGempaPermil = rateZona ? (isGol2 ? rateZona.gol2 : rateZona.gol1) : 0;
  const golLabel  = isGol2 ? "Golongan II (Vila/Hotel/Gudang)" : "Golongan I (Rumah/Kos/Kantor/Ruko)";
  const premiGempa = rGempaPermil && totalNilai ? Math.round(totalNilai * rGempaPermil / 1000) : 0;
  const biayaAdminGempa = premiGempa < 5_000_000 ? 30_000 : 40_000;
  const totalGempa = premiGempa > 0 ? premiGempa + biayaAdminGempa : 0;

  return {
    nama: sub.nama,
    alamat: fStr(f.lokasiProperti),
    okupasiRaw,
    okupasiLabel: okupasiData.label,
    kkLabel,
    jenisPertanggungan: `${okupasiRaw !== "—" ? okupasiRaw : okupasiData.label} / ${kkLabel}`,
    nilaiBangunan, nilaiIsi, totalNilai,
    ratePermilDasar, premiDasar,
    adaBanjir, premiBanjir, rateBanjirPermil,
    adaHuru, premiHuru, rateHuruPermil,
    adaBurglary, premiBurglary, rateBurglaryPermil,
    adaTabrakan, premiTabrakan, rateTabrakanPermil,
    subtotalKebakaran, biayaAdminKebakaran, totalKebakaran,
    adaGempa: premiGempa > 0,
    wGempa, zonaGempa, golLabel, rGempaPermil,
    premiGempa, biayaAdminGempa, totalGempa,
  };
}

function docStyles(): string {
  return `
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:Arial,Helvetica,sans-serif;color:#1A1A1A;background:#fff;}
  .doc-page{width:190mm;margin:0 auto;padding:14mm 16mm 12mm;page-break-after:always;}
  .doc-page:last-child{page-break-after:auto;}
  .letterhead{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2.5px solid #0D2137;padding-bottom:10px;margin-bottom:16px;}
  .lh-brand{font-size:19px;font-weight:800;color:#0D2137;letter-spacing:-0.3px;}
  .lh-brand span{color:#C8963E;}
  .lh-sub{font-size:9.5px;color:#64748B;margin-top:2px;}
  .lh-contact{font-size:9px;color:#64748B;text-align:right;line-height:1.7;}
  .doc-meta{display:flex;justify-content:space-between;font-size:10px;color:#64748B;margin-bottom:10px;}
  .doc-title{text-align:center;font-size:13.5px;font-weight:700;text-decoration:underline;color:#0D2137;margin:6px 0 16px;}
  .calc-card{border:1.5px solid #0D2137;border-radius:5px;overflow:hidden;}
  .calc-card-head{background:#0D2137;padding:11px 14px;text-align:center;}
  .cch-t1{color:#fff;font-size:12.5px;font-weight:700;letter-spacing:0.3px;}
  .cch-t2{color:#C8963E;font-size:9px;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-top:2px;}
  .calc-body{padding:16px 20px;}
  .info-row{display:flex;font-size:11.5px;padding:3.5px 0;}
  .info-row .lbl{width:180px;flex-shrink:0;font-style:italic;color:#334155;}
  .info-row .col{width:12px;flex-shrink:0;color:#334155;}
  .info-row .val{font-weight:500;color:#0D2137;}
  .info-row.total .val{font-weight:800;}
  .info-row.total{background:#FEF6E0;margin:3px -8px 2px;padding:6px 8px;border-radius:4px;}
  .grp-title{font-size:11px;font-weight:700;color:#0D2137;margin:12px 0 4px;}
  .rincian-table{width:100%;border-collapse:collapse;margin-top:4px;}
  .rincian-table td{padding:4px 2px;font-size:11px;vertical-align:middle;}
  .rincian-table td.item{color:#334155;}
  .rincian-table td.rate{color:#64748B;text-align:right;width:76px;white-space:nowrap;}
  .rincian-table td.rp-lbl{width:18px;color:#64748B;text-align:right;padding-right:4px;}
  .rincian-table td.rp-val{text-align:right;font-weight:600;color:#0D2137;width:96px;}
  .rincian-total td{border-top:1.5px solid #0D2137;font-weight:800;padding-top:7px;}
  .sum-row{display:flex;justify-content:space-between;font-size:11.5px;padding:4px 0;}
  .sum-row .k{color:#334155;}
  .sum-row .v{font-weight:700;color:#0D2137;}
  .sum-row.final{margin-top:6px;padding-top:9px;border-top:2px solid #C8963E;}
  .sum-row.final .k{font-weight:800;font-size:13px;color:#0D2137;}
  .sum-row.final .v{font-weight:800;font-size:15px;color:#C8963E;}
  .footnote{font-size:9.5px;color:#64748B;font-style:italic;margin-top:14px;line-height:1.6;}
  .sign-wrap{display:flex;justify-content:space-between;align-items:flex-end;margin-top:30px;}
  .sign-left{font-size:9.5px;color:#64748B;}
  .sign-right{text-align:left;}
  .sign-brand{font-size:12px;font-weight:800;color:#0D2137;}
  .sign-brand span{color:#C8963E;}
  .sign-name{font-size:11px;font-weight:700;color:#0D2137;margin-top:34px;}
  .sign-role{font-size:9.5px;color:#64748B;}
  .badge-sim{display:inline-block;background:#FEF2F2;color:#991B1B;border:1px solid #FECACA;border-radius:4px;padding:3px 8px;font-size:9px;font-weight:700;margin-bottom:12px;}
  @media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact;}}
  `;
}

function letterheadHTML(): string {
  return `
  <div class="letterhead">
    <div>
      <div class="lh-brand">Asuransi<span>Jogja</span></div>
      <div class="lh-sub">Konsultan Asuransi Kerugian Independen · Yogyakarta</div>
    </div>
    <div class="lh-contact">
      📱 0877-8165-8231 (Rio MD)<br/>
      ✉️ rio@asuransijogja.biz.id · 🌐 asuransijogja.biz.id
    </div>
  </div>`;
}

function signBlockHTML(): string {
  return `
  <div class="sign-wrap">
    <div class="sign-left">Terdaftar dan bekerja sama dengan perusahaan asuransi<br/>yang diawasi oleh Otoritas Jasa Keuangan (OJK)</div>
    <div class="sign-right">
      <div class="sign-brand">Asuransi<span>Jogja</span></div>
      <div class="sign-name">Rio Mardiansyah</div>
      <div class="sign-role">Konsultan Asuransi Kerugian Independen</div>
    </div>
  </div>`;
}

function kebakaranPageHTML(sub: Submission, c: PropertiCalc, docNo: string, tanggal: string): string {
  const rows: string[] = [];
  rows.push(`<tr><td class="item">Premi Dasar Kebakaran (FLEXAS)</td><td class="rate">${fmtPct(c.ratePermilDasar)}</td><td class="rp-lbl">Rp</td><td class="rp-val">${fmtRpPlain(c.premiDasar)}</td></tr>`);
  if (c.adaHuru)     rows.push(`<tr><td class="item">RSMDCC (Kerusuhan &amp; Huru-Hara)</td><td class="rate">${fmtPct(c.rateHuruPermil)}</td><td class="rp-lbl">Rp</td><td class="rp-val">${fmtRpPlain(c.premiHuru)}</td></tr>`);
  if (c.adaBanjir)   rows.push(`<tr><td class="item">TSWD (Banjir, Angin Topan)</td><td class="rate">${fmtPct(c.rateBanjirPermil)}</td><td class="rp-lbl">Rp</td><td class="rp-val">${fmtRpPlain(c.premiBanjir)}</td></tr>`);
  if (c.adaBurglary || c.adaTabrakan) {
    const rateGab = c.rateBurglaryPermil + c.rateTabrakanPermil;
    rows.push(`<tr><td class="item">Other (Burglary, Vehicle Impact)</td><td class="rate">${fmtPct(rateGab)}</td><td class="rp-lbl">Rp</td><td class="rp-val">${fmtRpPlain(c.premiBurglary + c.premiTabrakan)}</td></tr>`);
  }
  rows.push(`<tr class="rincian-total"><td colspan="2"></td><td class="rp-lbl">Rp</td><td class="rp-val">${fmtRpPlain(c.subtotalKebakaran)}</td></tr>`);

  return `
  <div class="doc-page">
    ${letterheadHTML()}
    <div class="doc-meta">
      <span>No. Simulasi: <strong>${docNo}</strong></span>
      <span>${tanggal}</span>
    </div>
    <div class="doc-title">Simulasi Perhitungan Premi Asuransi Kebakaran</div>
    <div class="calc-card">
      <div class="calc-card-head">
        <div class="cch-t1">PERHITUNGAN PREMI ASURANSI KEBAKARAN</div>
        <div class="cch-t2">AsuransiJogja — Simulasi &amp; Estimasi</div>
      </div>
      <div class="calc-body">
        <div class="info-row"><div class="lbl">Cover Asuransi</div><div class="col">:</div><div class="val">Kebakaran</div></div>
        <div class="info-row"><div class="lbl">Nama Tertanggung</div><div class="col">:</div><div class="val">${c.nama}</div></div>
        <div class="info-row"><div class="lbl">Alamat Resiko</div><div class="col">:</div><div class="val">${c.alamat}</div></div>
        <div class="info-row"><div class="lbl">Jenis Pertanggungan</div><div class="col">:</div><div class="val">${c.jenisPertanggungan}</div></div>
        <div class="info-row"><div class="lbl">Jangka Waktu</div><div class="col">:</div><div class="val">1 Tahun</div></div>

        <div class="grp-title">Nilai Pertanggungan</div>
        <div class="info-row"><div class="lbl">Bangunan ${c.okupasiLabel}</div><div class="col">:</div><div class="val">Rp ${fmtRpPlain(c.nilaiBangunan)}</div></div>
        ${c.nilaiIsi ? `<div class="info-row"><div class="lbl">Perabotan</div><div class="col">:</div><div class="val">Rp ${fmtRpPlain(c.nilaiIsi)}</div></div>` : ""}
        <div class="info-row total"><div class="lbl">Total Pertanggungan</div><div class="col">:</div><div class="val">Rp ${fmtRpPlain(c.totalNilai)}</div></div>
        <div class="info-row"><div class="lbl">Okupasi</div><div class="col">:</div><div class="val">${c.okupasiLabel} / ${c.kkLabel}</div></div>

        <div class="grp-title">Rincian Premi</div>
        <table class="rincian-table"><tbody>${rows.join("")}</tbody></table>

        <div style="margin-top:14px;">
          <div class="sum-row"><span class="k">Premi / Tahun</span><span class="v">${fmtRpPlain(c.subtotalKebakaran)}</span></div>
          <div class="sum-row"><span class="k">Biaya ADM</span><span class="v">${fmtRpPlain(c.biayaAdminKebakaran)}</span></div>
          <div class="sum-row final"><span class="k">Total Premi Akhir</span><span class="v">${fmtRpPlain(c.totalKebakaran)} <span style="font-size:9.5px;font-weight:500;color:#64748B;">/ tahun</span></span></div>
        </div>

        <p class="footnote">*) Penetapan tarif mengacu pada SE OJK No. 6/SEOJK.05/2017 Tentang Usaha Asuransi Harta Benda. Angka di atas adalah <strong>simulasi &amp; estimasi</strong>, bukan penawaran resmi (quotation) maupun polis — premi final ditetapkan perusahaan asuransi setelah survei &amp; analisis risiko.</p>
      </div>
    </div>
    ${signBlockHTML()}
  </div>`;
}

function gempaPageHTML(sub: Submission, c: PropertiCalc, docNo: string, tanggal: string): string {
  return `
  <div class="doc-page">
    ${letterheadHTML()}
    <div class="doc-meta">
      <span>No. Simulasi: <strong>${docNo}</strong></span>
      <span>${tanggal}</span>
    </div>
    <div class="doc-title">Simulasi Perhitungan Premi Asuransi Gempa Bumi</div>
    <span class="badge-sim">POLIS TERPISAH DARI ASURANSI KEBAKARAN</span>
    <div class="calc-card">
      <div class="calc-card-head">
        <div class="cch-t1">PERHITUNGAN PREMI ASURANSI GEMPA BUMI</div>
        <div class="cch-t2">AsuransiJogja — Simulasi &amp; Estimasi</div>
      </div>
      <div class="calc-body">
        <div class="info-row"><div class="lbl">Cover Asuransi</div><div class="col">:</div><div class="val">Gempa Bumi</div></div>
        <div class="info-row"><div class="lbl">Nama Tertanggung</div><div class="col">:</div><div class="val">${c.nama}</div></div>
        <div class="info-row"><div class="lbl">Alamat Resiko</div><div class="col">:</div><div class="val">${c.alamat}</div></div>
        <div class="info-row"><div class="lbl">Jenis Pertanggungan</div><div class="col">:</div><div class="val">${c.jenisPertanggungan}</div></div>
        <div class="info-row"><div class="lbl">Jangka Waktu</div><div class="col">:</div><div class="val">1 Tahun</div></div>

        <div class="grp-title">Nilai Pertanggungan</div>
        <div class="info-row"><div class="lbl">Bangunan ${c.okupasiLabel}</div><div class="col">:</div><div class="val">Rp ${fmtRpPlain(c.nilaiBangunan)}</div></div>
        ${c.nilaiIsi ? `<div class="info-row"><div class="lbl">Perabotan</div><div class="col">:</div><div class="val">Rp ${fmtRpPlain(c.nilaiIsi)}</div></div>` : ""}
        <div class="info-row total"><div class="lbl">Total Pertanggungan</div><div class="col">:</div><div class="val">Rp ${fmtRpPlain(c.totalNilai)}</div></div>
        <div class="info-row"><div class="lbl">Okupasi</div><div class="col">:</div><div class="val">${c.okupasiLabel} / ${c.kkLabel}</div></div>
        <div class="info-row"><div class="lbl">Wilayah / Zona Gempa</div><div class="col">:</div><div class="val">${c.wGempa} — Zona ${c.zonaGempa}</div></div>

        <div class="grp-title">Rincian Premi</div>
        <table class="rincian-table"><tbody>
          <tr><td class="item">Gempa Bumi (EQ) — Zona ${c.zonaGempa}</td><td class="rate">${fmtPct(c.rGempaPermil)}</td><td class="rp-lbl">Rp</td><td class="rp-val">${fmtRpPlain(c.premiGempa)}</td></tr>
          <tr class="rincian-total"><td colspan="2"></td><td class="rp-lbl">Rp</td><td class="rp-val">${fmtRpPlain(c.premiGempa)}</td></tr>
        </tbody></table>

        <div style="margin-top:14px;">
          <div class="sum-row"><span class="k">Premi / Tahun</span><span class="v">${fmtRpPlain(c.premiGempa)}</span></div>
          <div class="sum-row"><span class="k">Biaya ADM</span><span class="v">${fmtRpPlain(c.biayaAdminGempa)}</span></div>
          <div class="sum-row final"><span class="k">Total Premi Akhir</span><span class="v">${fmtRpPlain(c.totalGempa)} <span style="font-size:9.5px;font-weight:500;color:#64748B;">/ tahun</span></span></div>
        </div>

        <p class="footnote">*) Penetapan tarif mengacu pada SE OJK No. 6/SEOJK.05/2017 Tentang Usaha Asuransi Harta Benda. Golongan risiko: ${c.golLabel}. Asuransi Gempa Bumi diterbitkan sebagai <strong>polis tersendiri</strong>, terpisah dari polis Asuransi Kebakaran, sesuai ketentuan PSAKI. Angka di atas adalah <strong>simulasi &amp; estimasi</strong>, bukan penawaran resmi maupun polis.</p>
      </div>
    </div>
    ${signBlockHTML()}
  </div>`;
}

function buildPropertiDocument(sub: Submission): string {
  const c = computePropertiCalc(sub);
  const docNo = sub.id;
  const tanggal = new Date(sub.submittedAt).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });

  const pages = [kebakaranPageHTML(sub, c, docNo, tanggal)];
  if (c.adaGempa) pages.push(gempaPageHTML(sub, c, docNo, tanggal));

  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"/>
<title>Simulasi Premi Kebakaran & Gempa Bumi — ${sub.nama}</title>
<style>${docStyles()}</style>
</head>
<body>
${pages.join("\n")}
</body>
</html>`;
}

// ─── Trigger download / print — HANYA untuk produk Properti ──────────────────
function downloadPDF(sub: Submission) {
  if (sub.product !== "properti") {
    alert("Format PDF resmi saat ini baru tersedia untuk produk Asuransi Properti (Kebakaran & Gempa Bumi). Produk lain akan menyusul.");
    return;
  }

  const html = buildPropertiDocument(sub);
  const win = window.open("", "_blank");
  if (!win) return alert("Pop-up diblokir browser. Izinkan pop-up dan coba lagi.");

  const safeNama = sub.nama.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");
  const fileName = `Simulasi-Premi-Kebakaran-Gempa-${safeNama}.pdf`;

  win.document.write(html);
  win.document.close();

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
                          {sub.product === "properti" ? (
                            <button
                              onClick={e => { e.stopPropagation(); downloadPDF(sub); }}
                              className="text-xs bg-navy text-white px-3 py-1.5 rounded-lg hover:bg-navy/80 transition-colors whitespace-nowrap"
                            >
                              📄 PDF
                            </button>
                          ) : (
                            <span
                              title="Format PDF belum tersedia untuk produk ini"
                              className="text-xs bg-[#F1F5F9] text-[#94A3B8] px-3 py-1.5 rounded-lg whitespace-nowrap cursor-not-allowed select-none"
                            >
                              📄 PDF
                            </span>
                          )}
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
                    {selected.product === "properti" ? (
                      <button
                        onClick={() => downloadPDF(selected)}
                        className="w-full bg-navy text-white text-xs font-bold py-2.5 rounded-xl hover:bg-navy/85 transition-colors"
                      >
                        📄 Download / Cetak PDF Penawaran
                      </button>
                    ) : (
                      <div
                        title="Format PDF belum tersedia untuk produk ini"
                        className="w-full bg-[#F1F5F9] text-[#94A3B8] text-xs font-semibold py-2.5 rounded-xl text-center cursor-not-allowed select-none"
                      >
                        📄 Format PDF belum tersedia
                      </div>
                    )}
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
