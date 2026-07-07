/**
 * src/lib/pdfGenerator.ts
 * Generate PDF server-side menggunakan @sparticuz/chromium + puppeteer-core.
 * Dioptimasi untuk Vercel serverless (cold start cepat, ukuran minimal).
 *
 * CATATAN: Saat ini format PDF resmi HANYA tersedia untuk produk "properti"
 * (Asuransi Kebakaran & Gempa Bumi — 2 polis terpisah), meniru format
 * "Perhitungan Premi" standar industri. Produk lain belum memiliki format
 * PDF resmi sehingga generatePDFBuffer() akan mengembalikan null (email
 * tetap terkirim tanpa lampiran PDF).
 *
 * Install sekali di terminal project:
 *   npm install @sparticuz/chromium puppeteer-core
 */

import type { SPPASubmission } from "@/lib/sppaStore";

// ─── Helpers (duplikat dari AdminSPPAPage agar bisa dipakai server-side) ──────
function fStr(val: string | string[] | undefined, fallback = "—"): string {
  if (!val || (Array.isArray(val) && val.length === 0)) return fallback;
  return Array.isArray(val) ? val.join(", ") : String(val);
}

function fNum(val: string | string[] | undefined): number {
  if (!val) return 0;
  const raw = Array.isArray(val) ? val[0] : val;
  return parseInt(String(raw).replace(/\D/g, ""), 10) || 0;
}

function fmtPct(permil: number): string {
  return (permil / 10).toFixed(4) + "%";
}
function fmtRpPlain(n: number): string {
  return Math.round(n).toLocaleString("id-ID");
}

// ─── Rate Tables (sync dengan AdminSPPAPage) ──────────────────────────────────
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

// ─── Kalkulasi Properti (sync dengan AdminSPPAPage.computePropertiCalc) ───────
interface PropertiCalc {
  nama: string;
  alamat: string;
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

function computePropertiCalc(sub: SPPASubmission): PropertiCalc {
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
      <div class="lh-sub">Praktisi Asuransi Independen · Yogyakarta</div>
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
      <div class="sign-role">Praktisi Asuransi Independen</div>
    </div>
  </div>`;
}

function kebakaranPageHTML(c: PropertiCalc, docNo: string, tanggal: string): string {
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

function gempaPageHTML(c: PropertiCalc, docNo: string, tanggal: string): string {
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

function buildPropertiPDFHtml(sub: SPPASubmission): string {
  const c = computePropertiCalc(sub);
  const docNo = sub.id;
  const tanggal = new Date(sub.submittedAt).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });

  const pages = [kebakaranPageHTML(c, docNo, tanggal)];
  if (c.adaGempa) pages.push(gempaPageHTML(c, docNo, tanggal));

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

// ─── Main export: generate PDF buffer ────────────────────────────────────────
// Hanya produk "properti" yang punya format PDF resmi saat ini.
export async function generatePDFBuffer(sub: SPPASubmission): Promise<Buffer | null> {
  if (sub.product !== "properti") {
    console.log("[pdfGenerator] Produk", sub.product, "belum memiliki format PDF — dilewati.");
    return null;
  }

  try {
    // Dynamic import agar tidak error saat build jika belum install
    const chromium = (await import("@sparticuz/chromium")).default;
    const puppeteer = (await import("puppeteer-core")).default;

    const browser = await puppeteer.launch({
      args:            chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath:  await chromium.executablePath(),
      headless:        true,
    });

    const page = await browser.newPage();
    const html = buildPropertiPDFHtml(sub);
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
      format:             "A4",
      printBackground:    true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    await browser.close();
    return Buffer.from(pdf);
  } catch (err) {
    console.error("[pdfGenerator] Gagal generate PDF:", err);
    return null;
  }
}
