/**
 * src/lib/pdfGenerator.ts
 * Generate PDF server-side menggunakan @sparticuz/chromium + puppeteer-core.
 * Dioptimasi untuk Vercel serverless (cold start cepat, ukuran minimal).
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

function fRp(val: string | string[] | undefined): string {
  if (!val || (Array.isArray(val) && val.length === 0)) return "—";
  const raw = Array.isArray(val) ? val[0] : val;
  const num = parseInt(String(raw).replace(/\D/g, ""), 10);
  if (isNaN(num)) return String(raw);
  return "Rp " + num.toLocaleString("id-ID");
}

function fNum(val: string | string[] | undefined): number {
  if (!val) return 0;
  const raw = Array.isArray(val) ? val[0] : val;
  return parseInt(String(raw).replace(/\D/g, ""), 10) || 0;
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

// ─── Build HTML untuk PDF (sama dengan AdminSPPAPage tapi standalone) ─────────
function buildPDFHtml(sub: SPPASubmission): string {
  const f       = sub.fields;
  const product = sub.product;
  const now     = new Date(sub.submittedAt).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  });

  // ── Kendaraan ──────────────────────────────────────────────────────────────
  let productSection = "";

  if (product === "kendaraan") {
    const nilaiRaw = fNum(f.nilaiKendaraan);
    const tipeStr  = fStr(f.tipeProteksi);
    const isAR     = !tipeStr || tipeStr === "—" || tipeStr.includes("All Risk");

    type RateEntry = { max: number; ar: number; tlo: number; labelAR: string; labelTLO: string };
    const OJK_RATES: RateEntry[] = [
      { max: 125_000_000, ar: 2.53, tlo: 0.51, labelAR: "2,53% (Kat.1 ≤125 jt)",     labelTLO: "0,51% (Kat.1 ≤125 jt)"     },
      { max: 200_000_000, ar: 2.69, tlo: 0.44, labelAR: "2,69% (Kat.2 >125–200 jt)", labelTLO: "0,44% (Kat.2 >125–200 jt)" },
      { max: 400_000_000, ar: 1.79, tlo: 0.29, labelAR: "1,79% (Kat.3 >200–400 jt)", labelTLO: "0,29% (Kat.3 >200–400 jt)" },
      { max: 800_000_000, ar: 1.14, tlo: 0.23, labelAR: "1,14% (Kat.4 >400–800 jt)", labelTLO: "0,23% (Kat.4 >400–800 jt)" },
      { max: Infinity,    ar: 1.05, tlo: 0.20, labelAR: "1,05% (Kat.5 >800 jt)",     labelTLO: "0,20% (Kat.5 >800 jt)"     },
    ];
    const rateEntry       = OJK_RATES.find(r => nilaiRaw <= r.max) ?? OJK_RATES[OJK_RATES.length - 1];
    const rateUsed        = isAR ? rateEntry.ar : rateEntry.tlo;
    const rateLabel       = isAR ? rateEntry.labelAR : rateEntry.labelTLO;
    const premiDasar      = Math.round(nilaiRaw * rateUsed / 100);
    const diskon          = Math.round(premiDasar * 0.11);
    const premiSetelahDiskon = premiDasar - diskon;
    const biayaAdmin      = premiDasar < 5_000_000 ? 30_000 : 40_000;
    const total           = premiSetelahDiskon + biayaAdmin;

    productSection = `
    <div class="section">
      <div class="section-title">🚗 A. Informasi Objek Pertanggungan</div>
      <table><tbody>
        <tr><td class="td-l">Nama Tertanggung</td><td class="td-v">${sub.nama}</td></tr>
        <tr><td class="td-l">Jenis Kendaraan</td><td class="td-v">${fStr(f.jenisKendaraan)}</td></tr>
        <tr><td class="td-l">Tahun Kendaraan</td><td class="td-v">${fStr(f.tahunKendaraan)}</td></tr>
        <tr><td class="td-l">Plat / Wilayah</td><td class="td-v">${fStr(f.platKendaraan)}</td></tr>
        <tr><td class="td-l">Tipe Proteksi</td><td class="td-v">${fStr(f.tipeProteksi, "All Risk / Comprehensive")}</td></tr>
        <tr><td class="td-l">Nilai Pertanggungan</td><td class="td-v" style="color:#C8963E;font-size:14px;">${fRp(f.nilaiKendaraan)}</td></tr>
      </tbody></table>
    </div>
    <div class="section">
      <div class="section-title">📊 B. Simulasi &amp; Estimasi Premi</div>
      <div class="sim-note">⚠️ Nilai berikut adalah <strong>SIMULASI &amp; ESTIMASI</strong> — premi final ditetapkan perusahaan asuransi setelah survei &amp; analisis risiko.</div>
      <table class="premi-table">
        <thead><tr>
          <th style="text-align:left;padding:9px 12px;background:#0D2137;color:#C8963E;font-size:10px;letter-spacing:1px;text-transform:uppercase;">Komponen</th>
          <th style="text-align:right;padding:9px 12px;background:#0D2137;color:#C8963E;font-size:10px;letter-spacing:1px;text-transform:uppercase;">Estimasi Biaya</th>
        </tr></thead>
        <tbody>
          <tr><td class="td-p">Nilai Pertanggungan</td><td class="td-pv">${fRp(f.nilaiKendaraan)}</td></tr>
          <tr><td class="td-p">Rate Premi (estimasi, Wil. 3 Yogyakarta)</td><td class="td-pv">${rateLabel}</td></tr>
          <tr><td class="td-p">Premi Dasar</td><td class="td-pv">Rp ${premiDasar.toLocaleString("id-ID")}</td></tr>
          <tr><td class="td-p" style="color:#16A34A;">Diskon</td><td class="td-pv" style="color:#16A34A;">– Rp ${diskon.toLocaleString("id-ID")}</td></tr>
          <tr><td class="td-p">Premi Setelah Diskon</td><td class="td-pv">Rp ${premiSetelahDiskon.toLocaleString("id-ID")}</td></tr>
          <tr><td class="td-p">Biaya Administrasi</td><td class="td-pv">Rp ${biayaAdmin.toLocaleString("id-ID")}</td></tr>
          <tr style="background:#FDF9F3;">
            <td style="padding:11px 12px;font-weight:700;color:#0D2137;font-size:13px;border-top:2px solid #C8963E;">TOTAL ESTIMASI PREMI / TAHUN</td>
            <td style="padding:11px 12px;font-weight:800;color:#C8963E;font-size:14px;text-align:right;border-top:2px solid #C8963E;">Rp ${total.toLocaleString("id-ID")}</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:10px;color:#94A3B8;margin-top:6px;line-height:1.6;">* Tarif referensi OJK SE No.6/SEOJK.05/2017 Wilayah 3. Own Risk: Rp 300.000/kejadian (BBM) / Rp 500.000 (EV). Biaya admin: &lt;Rp 5 juta = Rp 30.000, ≥Rp 5 juta = Rp 40.000.</p>
    </div>
    <div class="section">
      <div class="section-title">📞 C. Langkah Selanjutnya</div>
      <div class="cta-box">
        <div style="font-size:13px;font-weight:700;color:#C8963E;margin-bottom:6px;">Tertarik Melanjutkan ke Polis Resmi?</div>
        <p style="font-size:12px;color:rgba(255,255,255,0.75);line-height:1.65;margin-bottom:12px;">Hubungi konsultan kami untuk penawaran resmi dari beberapa perusahaan asuransi — kami bantu bandingkan dan pilihkan yang terbaik.</p>
        <div style="font-size:12px;color:rgba(255,255,255,0.65);line-height:2;">
          💬 WhatsApp: <strong style="color:#fff;">0877-8165-8231</strong> (Rio MD)<br/>
          ✉️ Email: <strong style="color:#fff;">rio@asuransijogja.biz.id</strong>
        </div>
      </div>
    </div>`;
  }

  // ── Properti ───────────────────────────────────────────────────────────────
  else if (product === "properti") {
    const nilaiRaw    = fNum(f.nilaiBangunan);
    const nilaiIsiRaw = fNum(f.nilaiIsi);
    const totalNilai  = nilaiRaw + nilaiIsiRaw;
    const kkStr       = fStr(f.kelasKonstruksi).toLowerCase();
    const okupasiStr  = fStr(f.okupasi).toLowerCase();

    const kk = kkStr.includes("1") || kkStr.includes("beton") ? 1
             : kkStr.includes("2") || kkStr.includes("semi")  ? 2 : 3;
    const kkLabel = kk === 1 ? "Kelas 1 — Beton/Bata"
                  : kk === 2 ? "Kelas 2 — Semi Permanen"
                  : "Kelas 3 — Kayu/Bambu";

    type OkupasiRate = { label: string; kk1: number; kk2: number; kk3: number };
    const RATE_TABLE: { match: string[]; data: OkupasiRate }[] = [
      { match: ["rumah","hunian","tinggal"], data: { label:"Rumah Tinggal",    kk1:0.294,kk2:0.397,kk3:0.499 } },
      { match: ["kos","kontrakan"],          data: { label:"Kos-Kosan",         kk1:0.478,kk2:0.645,kk3:0.812 } },
      { match: ["ruko","toko","retail"],     data: { label:"Ruko / Toko",       kk1:0.594,kk2:0.802,kk3:1.011 } },
      { match: ["gudang","warehouse"],       data: { label:"Gudang",            kk1:0.764,kk2:1.031,kk3:1.299 } },
      { match: ["kantor","office"],          data: { label:"Kantor",            kk1:0.368,kk2:0.497,kk3:0.625 } },
      { match: ["vila","villa","homestay","motel"], data: { label:"Vila/Homestay", kk1:0.478,kk2:0.645,kk3:0.812 } },
    ];
    const matched     = RATE_TABLE.find(r => r.match.some(m => okupasiStr.includes(m)));
    const okupasiData = matched ? matched.data : RATE_TABLE[0].data;
    const ratePermil  = kk === 1 ? okupasiData.kk1 : kk === 2 ? okupasiData.kk2 : okupasiData.kk3;
    const premiDasar  = Math.round(totalNilai * ratePermil / 1000);
    const biayaAdmin  = premiDasar < 5_000_000 ? 30_000 : 40_000;
    const totalPolis  = premiDasar + biayaAdmin;

    const risikoTambahan: string[] = Array.isArray(f.risikoTambahan)
      ? f.risikoTambahan as string[]
      : f.risikoTambahan ? [String(f.risikoTambahan)] : [];
    const adaBanjir = risikoTambahan.some(r => r.toLowerCase().includes("banjir") || r.toLowerCase().includes("longsor"));
    const adaHuru   = risikoTambahan.some(r => r.toLowerCase().includes("huru") || r.toLowerCase().includes("rsmd"));
    const premiBanjir = adaBanjir ? Math.round(totalNilai * 0.450 / 1000) : 0;
    const premiHuru   = adaHuru   ? Math.round(totalNilai * 0.010 / 1000) : 0;
    const totalPerluasan = premiBanjir + premiHuru;
    const totalPolisIncl = premiDasar + totalPerluasan + biayaAdmin;

    const wGempa       = fStr(f.wilayahGempa);
    const zonaGempa    = ZONA_GEMPA_NOMOR[wGempa] || 0;
    const rateZona     = ZONA_GEMPA_RATE[wGempa];
    const isGol2       = ["vila","villa","homestay","motel","hotel","gudang"].some(k => okupasiStr.includes(k));
    const rGempaPermil = rateZona ? (isGol2 ? rateZona.gol2 : rateZona.gol1) : 0;
    const golLabel     = isGol2 ? "Golongan II (Vila/Hotel/Gudang)" : "Golongan I (Rumah/Kos/Kantor/Ruko)";
    const pGempa       = rGempaPermil && totalNilai ? Math.round(totalNilai * rGempaPermil / 1000) : 0;
    const biayaAdminGempa = pGempa < 5_000_000 ? 30_000 : 40_000;
    const totalPolisGempa = pGempa + biayaAdminGempa;

    productSection = `
    <div class="section">
      <div class="section-title">🏠 A. Informasi Objek Pertanggungan</div>
      <table><tbody>
        <tr><td class="td-l">Nama Tertanggung</td><td class="td-v">${sub.nama}</td></tr>
        <tr><td class="td-l">Lokasi / Alamat</td><td class="td-v">${fStr(f.lokasiProperti)}</td></tr>
        <tr><td class="td-l">Jenis / Okupasi</td><td class="td-v">${fStr(f.okupasi)}</td></tr>
        <tr><td class="td-l">Kelas Konstruksi</td><td class="td-v">${kkLabel}</td></tr>
        <tr><td class="td-l">Nilai Bangunan</td><td class="td-v" style="color:#C8963E;font-size:14px;">${fRp(f.nilaiBangunan)}</td></tr>
        ${nilaiIsiRaw ? `<tr><td class="td-l">Nilai Isi / Perabot</td><td class="td-v">${fRp(f.nilaiIsi)}</td></tr>` : ""}
        ${risikoTambahan.length ? `<tr><td class="td-l">Perluasan Risiko</td><td class="td-v">${risikoTambahan.join(", ")}</td></tr>` : ""}
        ${wGempa !== "—" ? `<tr><td class="td-l">Wilayah Gempa</td><td class="td-v">${wGempa} (Zona ${zonaGempa})</td></tr>` : ""}
      </tbody></table>
    </div>
    <div class="section">
      <div class="section-title">📊 B. Simulasi &amp; Estimasi Premi — Polis Utama</div>
      <div class="sim-note">⚠️ Nilai berikut adalah <strong>SIMULASI &amp; ESTIMASI</strong> — premi final ditetapkan setelah survei lokasi &amp; analisis risiko.</div>
      <table class="premi-table">
        <thead><tr>
          <th style="text-align:left;padding:9px 12px;background:#0D2137;color:#C8963E;font-size:10px;letter-spacing:1px;text-transform:uppercase;">Komponen</th>
          <th style="text-align:right;padding:9px 12px;background:#0D2137;color:#C8963E;font-size:10px;letter-spacing:1px;text-transform:uppercase;">Estimasi</th>
        </tr></thead>
        <tbody>
          <tr><td class="td-p">Total Nilai Pertanggungan</td><td class="td-pv">Rp ${totalNilai.toLocaleString("id-ID")}</td></tr>
          <tr><td class="td-p">Rate Premi Dasar</td><td class="td-pv">${ratePermil.toFixed(3).replace(".",",")}‰ — ${okupasiData.label} / ${kkLabel}</td></tr>
          <tr><td class="td-p">Premi Dasar Kebakaran</td><td class="td-pv">Rp ${premiDasar.toLocaleString("id-ID")}</td></tr>
          ${adaBanjir ? `<tr><td class="td-p">+ Banjir &amp; Bencana Alam (0,450‰)</td><td class="td-pv">Rp ${premiBanjir.toLocaleString("id-ID")}</td></tr>` : ""}
          ${adaHuru   ? `<tr><td class="td-p">+ Huru-Hara / RSMD (0,010‰)</td><td class="td-pv">Rp ${premiHuru.toLocaleString("id-ID")}</td></tr>` : ""}
          <tr><td class="td-p">Biaya Administrasi</td><td class="td-pv">Rp ${biayaAdmin.toLocaleString("id-ID")}</td></tr>
          <tr style="background:#FDF9F3;">
            <td style="padding:11px 12px;font-weight:700;color:#0D2137;font-size:13px;border-top:2px solid #C8963E;">TOTAL ESTIMASI POLIS UTAMA / TAHUN</td>
            <td style="padding:11px 12px;font-weight:800;color:#C8963E;font-size:14px;text-align:right;border-top:2px solid #C8963E;">Rp ${totalPolisIncl.toLocaleString("id-ID")}</td>
          </tr>
        </tbody>
      </table>
    </div>
    ${pGempa > 0 ? `
    <div class="section">
      <div class="section-title">🌋 C. Simulasi &amp; Estimasi Premi — Polis Gempa Bumi (Polis Tersendiri)</div>
      <table class="premi-table">
        <thead><tr>
          <th style="text-align:left;padding:9px 12px;background:#0D2137;color:#C8963E;font-size:10px;letter-spacing:1px;text-transform:uppercase;">Komponen</th>
          <th style="text-align:right;padding:9px 12px;background:#0D2137;color:#C8963E;font-size:10px;letter-spacing:1px;text-transform:uppercase;">Estimasi</th>
        </tr></thead>
        <tbody>
          <tr><td class="td-p">Total Nilai Pertanggungan</td><td class="td-pv">Rp ${totalNilai.toLocaleString("id-ID")}</td></tr>
          <tr><td class="td-p">Wilayah / Zona</td><td class="td-pv">${wGempa} — Zona ${zonaGempa}</td></tr>
          <tr><td class="td-p">Golongan Risiko</td><td class="td-pv">${golLabel}</td></tr>
          <tr><td class="td-p">Rate Gempa</td><td class="td-pv">${rGempaPermil.toFixed(3).replace(".",",")}‰</td></tr>
          <tr><td class="td-p">Premi Gempa (estimasi)</td><td class="td-pv">Rp ${pGempa.toLocaleString("id-ID")}</td></tr>
          <tr><td class="td-p">Biaya Administrasi</td><td class="td-pv">Rp ${biayaAdminGempa.toLocaleString("id-ID")}</td></tr>
          <tr style="background:#FDF9F3;">
            <td style="padding:11px 12px;font-weight:700;color:#0D2137;font-size:13px;border-top:2px solid #C8963E;">TOTAL ESTIMASI POLIS GEMPA / TAHUN</td>
            <td style="padding:11px 12px;font-weight:800;color:#C8963E;font-size:14px;text-align:right;border-top:2px solid #C8963E;">Rp ${totalPolisGempa.toLocaleString("id-ID")}</td>
          </tr>
        </tbody>
      </table>
    </div>` : ""}
    <div class="section">
      <div class="section-title">📞 ${pGempa > 0 ? "D" : "C"}. Langkah Selanjutnya</div>
      <div class="cta-box">
        <div style="font-size:13px;font-weight:700;color:#C8963E;margin-bottom:6px;">Siap Melanjutkan ke Polis Resmi?</div>
        <p style="font-size:12px;color:rgba(255,255,255,0.75);line-height:1.65;margin-bottom:12px;">Tim konsultan kami siap membantu membandingkan penawaran dari berbagai perusahaan asuransi untuk properti Anda di Yogyakarta.</p>
        <div style="font-size:12px;color:rgba(255,255,255,0.65);line-height:2;">
          💬 WhatsApp: <strong style="color:#fff;">0877-8165-8231</strong> (Rio MD)<br/>
          ✉️ Email: <strong style="color:#fff;">rio@asuransijogja.biz.id</strong>
        </div>
      </div>
    </div>`;
  }

  // ── Produk lain — generic ──────────────────────────────────────────────────
  else {
    const fieldRows = Object.entries(f)
      .filter(([, val]) => val && !(Array.isArray(val) && val.length === 0))
      .map(([key, val]) => {
        const label   = sub.fieldLabels[key] || key;
        const display = Array.isArray(val) ? val.join(", ") : String(val);
        return `<tr><td class="td-l">${label}</td><td class="td-v">${display}</td></tr>`;
      }).join("");

    productSection = `
    <div class="section">
      <div class="section-title">📋 Rincian Data ${sub.productLabel}</div>
      <div class="sim-note">⚠️ Dokumen ini merupakan <strong>Simulasi &amp; Estimasi</strong> awal — nilai final ditetapkan setelah analisis risiko.</div>
      <table><tbody>${fieldRows}</tbody></table>
    </div>
    <div class="section">
      <div class="cta-box">
        <div style="font-size:13px;font-weight:700;color:#C8963E;margin-bottom:6px;">Hubungi Konsultan untuk Penawaran Resmi</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.65);line-height:2;">
          💬 <strong style="color:#fff;">0877-8165-8231</strong> (Rio MD) &nbsp;·&nbsp;
          ✉️ <strong style="color:#fff;">rio@asuransijogja.biz.id</strong>
        </div>
      </div>
    </div>`;
  }

  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"/>
<title>Simulasi & Estimasi Premi — ${sub.productLabel}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'DM Sans',sans-serif;background:#fff;color:#0D2137;font-size:13px;line-height:1.65;}
  .page{max-width:720px;margin:0 auto;padding:40px 48px;}
  .header{background:#0D2137;border-radius:12px;padding:28px 32px;margin-bottom:28px;}
  .brand{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:#fff;}
  .brand span{color:#C8963E;}
  .doc-type{font-size:9px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#C8963E;margin-top:4px;margin-bottom:12px;}
  .doc-title{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:#fff;line-height:1.22;}
  .meta-row{display:flex;gap:20px;margin-top:14px;flex-wrap:wrap;}
  .meta-item{display:flex;flex-direction:column;gap:2px;}
  .meta-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,0.4);}
  .meta-value{font-size:11px;color:rgba(255,255,255,0.8);font-weight:500;}
  .id-badge{display:inline-block;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:2px 7px;font-size:9px;font-weight:600;color:rgba(255,255,255,0.4);font-family:monospace;margin-top:12px;}
  .section{margin-bottom:22px;}
  .section-title{font-family:'Syne',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#94A3B8;border-bottom:1.5px solid #f1f5f9;padding-bottom:6px;margin-bottom:10px;}
  table{width:100%;border-collapse:collapse;}
  .td-l{padding:8px 11px;color:#64748B;font-size:12px;width:40%;border-bottom:1px solid #f8fafc;vertical-align:top;}
  .td-v{padding:8px 11px;color:#0D2137;font-size:12px;font-weight:600;border-bottom:1px solid #f8fafc;}
  .premi-table{border-radius:7px;overflow:hidden;margin-bottom:4px;}
  .td-p{padding:8px 11px;color:#475569;font-size:12px;border-bottom:1px solid #f1f5f9;}
  .td-pv{padding:8px 11px;color:#0D2137;font-size:12px;font-weight:600;text-align:right;border-bottom:1px solid #f1f5f9;}
  .sim-note{background:#FFFBEB;border:1px solid #FDE68A;border-radius:7px;padding:9px 13px;font-size:11px;color:#92400E;margin-bottom:12px;line-height:1.6;}
  .cta-box{background:#0D2137;border-radius:10px;padding:18px 20px;}
  .disclaimer{background:#FDF9F3;border:1px solid #E8D5B0;border-radius:8px;padding:12px 16px;margin-top:22px;}
  .disclaimer p{font-size:10.5px;color:#78716C;line-height:1.7;}
  .footer{margin-top:28px;padding-top:12px;border-top:1px solid #f1f5f9;display:flex;justify-content:space-between;align-items:flex-end;}
  .footer-brand{font-family:'Syne',sans-serif;font-weight:800;font-size:13px;color:#0D2137;}
  .footer-brand span{color:#C8963E;}
  .footer-contact{font-size:10px;color:#94A3B8;text-align:right;line-height:1.7;}
  @media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact;}.page{padding:28px 32px;}}
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div class="brand">Asuransi<span>Jogja</span></div>
    <div class="doc-type">Simulasi &amp; Estimasi Premi</div>
    <div class="doc-title">Ringkasan Simulasi &amp; Estimasi<br/>${sub.productLabel}</div>
    <div class="meta-row">
      <div class="meta-item"><span class="meta-label">Dipersiapkan untuk</span><span class="meta-value">${sub.nama}</span></div>
      <div class="meta-item"><span class="meta-label">WhatsApp</span><span class="meta-value">${sub.whatsapp}</span></div>
      ${sub.email ? `<div class="meta-item"><span class="meta-label">Email</span><span class="meta-value">${sub.email}</span></div>` : ""}
      <div class="meta-item"><span class="meta-label">Tanggal</span><span class="meta-value">${now}</span></div>
    </div>
    <div class="id-badge">${sub.id}</div>
  </div>

  ${productSection}

  <div class="disclaimer">
    <p><strong>⚠️ Pernyataan Penting:</strong> Seluruh angka dalam dokumen ini merupakan <strong>Simulasi &amp; Estimasi</strong> yang bersifat indikatif dan <strong>bukan merupakan penawaran resmi (quotation) maupun polis asuransi</strong>. Premi final ditetapkan oleh perusahaan asuransi setelah proses survei dan analisis risiko. Sebagai konsultan asuransi kerugian independen, kami tidak menerbitkan polis secara langsung.</p>
  </div>

  <div class="footer">
    <div>
      <div class="footer-brand">Asuransi<span>Jogja</span></div>
      <div style="font-size:10px;color:#94A3B8;margin-top:2px;">Konsultan Asuransi Kerugian Independen · Yogyakarta</div>
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

// ─── Main export: generate PDF buffer ────────────────────────────────────────
export async function generatePDFBuffer(sub: SPPASubmission): Promise<Buffer | null> {
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
    const html = buildPDFHtml(sub);
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
