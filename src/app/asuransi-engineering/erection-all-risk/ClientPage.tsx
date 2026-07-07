"use client";
import { useState } from "react";
import Link from "next/link";
import EngineeringLayout from "@/components/engineering/EngineeringLayout";
import { KONTAK } from "@/lib/data";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const bedaCARvsEAR = [
  { aspek: "Jenis Pekerjaan", car: "Pekerjaan sipil — gedung, jalan, jembatan, bendungan", ear: "Pemasangan / erection — mesin, struktur baja, panel, instalasi" },
  { aspek: "Material Utama", car: "Beton, bata, besi beton, material bangunan", ear: "Mesin, baja profil, peralatan industri, komponen elektronik" },
  { aspek: "Fase Kritis", car: "Pengecoran pondasi, struktur, finishing", ear: "Lift, angkat, sambung, uji coba (cold & hot commissioning)" },
  { aspek: "Risiko Dominan", car: "Hujan, banjir, keruntuhan bekisting", ear: "Jatuh saat pengangkatan, salah assembly, uji coba gagal" },
  { aspek: "Estimasi Premi", car: "0,15–0,5% nilai kontrak", ear: "0,2–0,6% nilai kontrak" },
];

const tahapanEAR = [
  { tahap: "Pra-Erection", icon: "📦", desc: "Material dan komponen terlindungi sejak tiba di lokasi — sebelum proses pemasangan dimulai" },
  { tahap: "Proses Erection", icon: "🏗️", desc: "Seluruh proses pengangkatan, pemasangan, dan penyambungan komponen dalam jaminan penuh" },
  { tahap: "Testing & Commissioning", icon: "⚡", desc: "Periode paling kritis — uji coba pertama (cold & hot commissioning) sering menjadi penyebab kerusakan terbesar" },
  { tahap: "Maintenance Period", icon: "🛡️", desc: "Jaminan pemeliharaan setelah serah terima — umumnya 12 bulan untuk menemukan cacat tersembunyi" },
];

const jenisInstalasi = [
  { icon: "🏭", label: "Mesin Pabrik & Produksi", desc: "Mesin cetak, mesin tekstil, line produksi makanan, mesin pengolahan — proses erection kompleks dan bernilai besar" },
  { icon: "⚡", label: "Instalasi Listrik & Panel", desc: "Trafo, panel distribusi HV/LV, switchgear, dan instalasi sistem tenaga listrik industri" },
  { icon: "🏗️", label: "Struktur Baja & Rangka", desc: "Rangka baja gudang, jembatan gantung, tower crane permanen, dan struktur baja industri" },
  { icon: "❄️", label: "Sistem HVAC & Pendingin", desc: "Chiller, cooling tower, AHU, dan sistem tata udara gedung komersial dan industri" },
  { icon: "⛽", label: "Tangki & Pressure Vessel", desc: "Tangki penyimpanan BBM, tangki air industri, boiler, dan bejana tekan yang memerlukan uji hidrostatik" },
  { icon: "🔄", label: "Konveyor & Material Handling", desc: "Sistem conveyor, elevator kargo, crane overhead, dan peralatan pemindahan material di pabrik" },
];

const risikoEAR = [
  { icon: "🪂", label: "Jatuh saat Pengangkatan", desc: "Komponen berat yang jatuh saat proses lifting adalah risiko paling sering dalam erection — sekali jatuh, biayanya bisa sangat besar" },
  { icon: "💥", label: "Kegagalan saat Uji Coba", desc: "Korsleting, overpressure, atau vibrasi berlebih saat testing pertama dapat merusak seluruh instalasi yang baru dipasang" },
  { icon: "⚒️", label: "Kesalahan Pemasangan", desc: "Assembly yang tidak sesuai spesifikasi teknis — baut salah momen, alignment tidak tepat — menyebabkan kerusakan permanen" },
  { icon: "🌧️", label: "Cuaca Selama Erection", desc: "Hujan deras, angin kencang, dan kelembaban tinggi di Yogyakarta dapat merusak komponen sensitif yang belum selesai dipasang" },
];

const pengecualianEAR = [
  { icon: "❌", label: "Desain atau Spesifikasi Cacat", desc: "Kerusakan yang timbul semata-mata dari desain yang keliru atau spesifikasi teknis yang salah sejak awal tidak dijamin. Ini masuk ranah Professional Indemnity." },
  { icon: "❌", label: "Keausan Normal Selama Operasi", desc: "EAR hanya berlaku selama fase pemasangan dan komisioning. Keausan setelah mesin beroperasi normal masuk ranah Machinery Breakdown." },
  { icon: "❌", label: "Kerugian Finansial & Denda", desc: "Kerugian finansial akibat keterlambatan (delay penalty, loss of profit) tidak dijamin EAR standar. Ada produk tambahan Delay in Start-Up (DSU) untuk ini." },
  { icon: "❌", label: "Kontaminasi & Polusi", desc: "Kerusakan akibat kontaminasi kimia, polusi udara, atau ground contamination secara umum dikecualikan kecuali ada endorsement khusus." },
];

const industriDIY = [
  { icon: "🏭", sektor: "Kawasan Industri Sleman & Bantul", contoh: "Pabrik garmen, pengolahan pangan, dan manufaktur yang terus berkembang membutuhkan EAR untuk setiap lini produksi baru" },
  { icon: "🏥", sektor: "Rumah Sakit & Fasilitas Medis", contoh: "Instalasi MRI, CT Scan, sistem oksigen sentral, dan peralatan medis bernilai miliaran rupiah wajib diasuransikan EAR" },
  { icon: "⚡", sektor: "Infrastruktur Energi DIY", contoh: "Pembangunan gardu induk, instalasi panel surya, dan sistem kelistrikan baru untuk mendukung pertumbuhan kawasan industri" },
  { icon: "🛋️", sektor: "Hotel & Mal Baru", contoh: "Pemasangan lift, eskalator, chiller, dan sistem MEP untuk gedung komersial baru yang terus bermunculan di Yogyakarta" },
];

const prosesKlaimSteps = [
  { step: 1, judul: "Laporkan Segera (24–48 Jam)", desc: "Hubungi kami via WhatsApp begitu insiden terjadi selama proses erection atau commissioning. Jangan lanjutkan pekerjaan di area yang rusak sebelum dilaporkan." },
  { step: 2, judul: "Amankan Bukti & Dokumentasi", desc: "Ambil foto dan video kerusakan komponen dari berbagai sudut. Simpan log harian proyek yang mencatat kondisi sebelum dan saat insiden terjadi." },
  { step: 3, judul: "Hentikan Kerusakan Lanjutan", desc: "Lakukan tindakan darurat yang wajar untuk mencegah kerusakan lebih lanjut — biaya pengamanan darurat ini umumnya bisa diklaim juga." },
  { step: 4, judul: "Pengisian Form Klaim & Dokumen", desc: "Kami bantu siapkan form klaim, estimasi biaya perbaikan dari vendor resmi, dan dokumen teknis yang diperlukan loss adjuster." },
  { step: 5, judul: "Survei & Persetujuan Klaim", desc: "Loss adjuster akan survei kerusakan bersama teknisi. Kami mendampingi untuk memastikan nilai klaim dinilai secara akurat dan adil." },
];

const faqItems = [
  {
    q: "Berapa estimasi premi EAR untuk pemasangan mesin senilai Rp 2 miliar?",
    a: "Estimasi premi EAR untuk instalasi senilai Rp 2 miliar berkisar Rp 4–12 juta (rate 0,2–0,6%), tergantung jenis mesin, kompleksitas proses pemasangan, durasi erection, dan apakah includef testing & commissioning. Mesin dengan proses cold/hot commissioning yang panjang cenderung memiliki rate lebih tinggi.",
  },
  {
    q: "Apa itu cold commissioning dan hot commissioning dalam EAR?",
    a: "Cold commissioning adalah pengujian instalasi tanpa beban operasional — misalnya mengecek sambungan listrik, sistem kontrol, dan mekanisme tanpa menjalankan mesin pada kapasitas penuh. Hot commissioning adalah pengujian dengan beban penuh (produksi percobaan). Keduanya adalah fase paling kritis dan berisiko tinggi, serta tercakup dalam EAR.",
  },
  {
    q: "Apakah polis EAR mencakup kerusakan kargo saat pengiriman ke lokasi?",
    a: "EAR standar biasanya mencakup material yang sudah tiba di lokasi proyek. Untuk kerusakan selama pengiriman (transit darat, laut, atau udara) dari supplier ke lokasi, diperlukan polis Marine Cargo atau Inland Transit yang terpisah. Kami bisa bantu paketkan keduanya sekaligus.",
  },
  {
    q: "Apa perbedaan EAR dan Machinery Breakdown untuk mesin yang sama?",
    a: "EAR berlaku selama fase pemasangan hingga serah terima (erection & commissioning). Setelah mesin beroperasi secara normal dan diterima oleh pemilik, perlindungannya beralih ke Machinery Breakdown Insurance. Untuk proteksi berkelanjutan, kami sarankan membeli keduanya: EAR untuk fase konstruksi, lanjut MB untuk operasional.",
  },
  {
    q: "Apakah EAR wajib untuk proyek instalasi di kawasan industri DIY?",
    a: "Untuk proyek EPC (Engineering, Procurement & Construction) yang melibatkan pemasangan mesin atau instalasi listrik bertegangan tinggi di kawasan industri, EAR sangat dianjurkan dan dalam banyak kontrak dengan BUMN atau perusahaan multinasional sudah menjadi persyaratan wajib.",
  },
  {
    q: "Bisakah satu polis EAR menanggung beberapa paket mesin sekaligus?",
    a: "Ya. Polis EAR bisa dibuat dengan Schedule of Insurance yang mencantumkan beberapa item mesin atau instalasi sekaligus, dengan nilai pertanggungan per item. Ini lebih efisien secara premi dibanding mengurus polis terpisah untuk setiap item.",
  },
  {
    q: "Bagaimana penanganan klaim jika mesin jatuh saat proses lifting?",
    a: "Ini adalah klaim paling umum dalam EAR. Segera hentikan aktivitas erection di area tersebut, laporkan ke kami dalam 24–48 jam, dan dokumentasikan kerusakan. Loss adjuster akan datang untuk survei. Polis EAR menanggung biaya perbaikan atau penggantian komponen yang rusak, dikurangi deductible yang berlaku.",
  },
  {
    q: "Apakah ada produk yang bisa menanggung kerugian akibat keterlambatan proyek?",
    a: "Ya, ada produk Delay in Start-Up (DSU) atau Advance Loss of Profits (ALOP) yang bisa dijadikan endorsement atau polis tambahan dari EAR. DSU menanggung kerugian finansial akibat keterlambatan mulainya operasi — misalnya hilangnya pendapatan karena pabrik belum bisa berproduksi. Ini sangat relevan untuk proyek dengan target produksi ketat.",
  },
];

// ─── KALKULATOR EAR ──────────────────────────────────────────────────────────
function KalkulatorEAR() {
  const [nilaiInstalasi, setNilaiInstalasi] = useState("");
  const [jenisInstalasi, setJenisInstalasi] = useState("mesin");
  const [limitTPL, setLimitTPL] = useState("10");
  const [includeDSU, setIncludeDSU] = useState(false);
  const [hasil, setHasil] = useState<null | { min: number; max: number; waMsg: string }>(null);
  const [error, setError] = useState("");

  const rateMap: Record<string, [number, number]> = {
    mesin: [0.002, 0.004],
    struktur: [0.0025, 0.005],
    listrik: [0.003, 0.006],
    hvac: [0.0025, 0.005],
    tangki: [0.003, 0.006],
  };

  const hitung = () => {
    const n = parseFloat(nilaiInstalasi);
    if (!n || n < 50_000_000) {
      setError("Masukkan nilai instalasi minimal Rp 50.000.000");
      return;
    }
    setError("");
    let [rMin, rMax] = rateMap[jenisInstalasi];
    if (includeDSU) { rMin += 0.001; rMax += 0.002; }
    const min = n * rMin;
    const max = n * rMax;

    const jenisLabel: Record<string, string> = { mesin: "Mesin Industri / Pabrik", struktur: "Struktur Baja", listrik: "Instalasi Listrik / Panel HV", hvac: "Sistem HVAC / Pendingin", tangki: "Tangki & Pressure Vessel" };
    const fmt = (v: number) => "Rp " + Math.round(v).toLocaleString("id-ID");
    const waMsg = encodeURIComponent(
      `Halo Pak Rio, saya ingin konsultasi asuransi EAR.\n\n- Jenis Instalasi: ${jenisLabel[jenisInstalasi]}\n- Nilai Instalasi: ${fmt(n)}\n- Limit TPL: Rp ${limitTPL} miliar\n- DSU/ALOP: ${includeDSU ? "Ya" : "Tidak"}\n- Estimasi Premi: ${fmt(min)} – ${fmt(max)}\n\nMohon info penawaran resminya. Terima kasih.`
    );
    setHasil({ min, max, waMsg });
  };

  const fmt = (v: number) => "Rp " + Math.round(v).toLocaleString("id-ID");
  const selectCls = "bg-navy2 border border-white/20 text-white px-3.5 py-[11px] rounded-lg text-[1rem] outline-none focus:border-gold appearance-none cursor-pointer w-full";
  const inputCls = "bg-navy2 border border-white/20 text-white px-3.5 py-[11px] rounded-lg text-[1rem] outline-none focus:border-gold placeholder-white/40 w-full";
  const labelCls = "text-[0.95rem] font-semibold text-white/75 mb-1.5 block";

  return (
    <section id="kalkulator" className="py-20 px-[5vw] bg-navy">
      <div className="text-center mb-10">
        <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-2">Estimasi Premi</div>
        <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.6rem)] text-white leading-[1.22]">
          Kalkulator Estimasi<br />Premi Asuransi EAR
        </h2>
        <p className="text-white/60 text-sm leading-relaxed max-w-[460px] mx-auto mt-3">
          Estimasi berdasarkan jenis instalasi dan nilai kontrak. Premi final ditentukan setelah review dokumen teknis.
        </p>
      </div>
      <div className="bg-white/5 border border-gold/20 rounded-[20px] p-8 max-w-[680px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="ear-jenis">Jenis Instalasi</label>
            <select id="ear-jenis" className={selectCls} value={jenisInstalasi} onChange={(e) => setJenisInstalasi(e.target.value)}>
              <option value="mesin" style={{ background: "#163352" }}>🏭 Mesin Industri / Pabrik</option>
              <option value="struktur" style={{ background: "#163352" }}>🏗️ Struktur Baja</option>
              <option value="listrik" style={{ background: "#163352" }}>⚡ Instalasi Listrik / Panel HV</option>
              <option value="hvac" style={{ background: "#163352" }}>❄️ Sistem HVAC / Pendingin</option>
              <option value="tangki" style={{ background: "#163352" }}>⛽ Tangki & Pressure Vessel</option>
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="ear-limit">Limit TPL (Pihak Ketiga)</label>
            <select id="ear-limit" className={selectCls} value={limitTPL} onChange={(e) => setLimitTPL(e.target.value)}>
              <option value="5" style={{ background: "#163352" }}>Rp 5 Miliar</option>
              <option value="10" style={{ background: "#163352" }}>Rp 10 Miliar</option>
              <option value="25" style={{ background: "#163352" }}>Rp 25 Miliar</option>
              <option value="50" style={{ background: "#163352" }}>Rp 50 Miliar</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          <label className={labelCls}>Nilai Instalasi / Kontrak (Rp)</label>
          <input
            type="number"
            placeholder="Contoh: 2000000000"
            className={inputCls}
            value={nilaiInstalasi}
            onChange={(e) => setNilaiInstalasi(e.target.value)}
          />
          <span className="text-white/40 text-xs mt-1 block">Nilai peralatan + jasa pemasangan (tanpa PPN)</span>
        </div>
        <div className="mt-5">
          <label className={labelCls}>Perluasan (Opsional)</label>
          <label className="flex items-center gap-2 cursor-pointer text-white/80 text-sm">
            <input type="checkbox" checked={includeDSU} onChange={(e) => setIncludeDSU(e.target.checked)} className="accent-gold w-4 h-4" />
            ⏱️ DSU / ALOP (Delay in Start-Up — kerugian akibat keterlambatan operasi)
          </label>
        </div>
        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
        <button
          onClick={hitung}
          className="w-full bg-gold text-navy py-3.5 rounded-lg font-bold text-[0.95rem] mt-6 hover:bg-gold2 hover:-translate-y-px transition-all cursor-pointer border-none"
        >
          Hitung Estimasi Premi EAR →
        </button>
        {hasil && (
          <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-6">
            <div className="font-heading text-gold2 text-base font-semibold mb-3">Estimasi Premi Asuransi EAR</div>
            <div className="flex justify-between items-center py-2 border-t border-gold/20">
              <span className="text-gold2 font-semibold text-sm">Estimasi Premi</span>
              <span className="text-gold text-[1.1rem] font-bold">{fmt(hasil.min)} – {fmt(hasil.max)}</span>
            </div>
            <p className="text-white/40 text-xs mt-3 leading-relaxed">
              * Estimasi berdasarkan tarif referensi pasar. Premi final ditentukan perusahaan asuransi setelah review dokumen teknis.
            </p>
            <a
              href={`https://wa.me/${KONTAK.wa}?text=${hasil.waMsg}`}
              className="block text-center mt-4 bg-[#25D366] text-white py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-opacity"
            >
              💬 Dapatkan Penawaran Resmi via WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
export default function ClientPage() {
  return (
    <EngineeringLayout
      breadcrumbs={[
        { label: "Asuransi Engineering", href: "/asuransi-engineering" },
        { label: "Erection All Risk (EAR)" },
      ]}
    >
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)" }} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">⚙️</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-engineering" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">
            ← Asuransi Engineering
          </Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Erection All Risk · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Erection All Risk<br /><em className="not-italic text-gold">(EAR) Yogyakarta</em><br />Mesin & Instalasi Terlindungi
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[520px] mb-4">
            Proses pemasangan mesin dan struktur baja adalah fase paling rentan dalam proyek industri. Satu komponen jatuh saat pengangkatan atau satu kegagalan saat uji coba (commissioning) bisa menghancurkan investasi senilai miliaran rupiah.
          </p>
          <p className="text-white/55 text-sm max-w-[480px] mb-8">
            Estimasi premi: <strong className="text-gold2">0,2–0,6%</strong> dari nilai instalasi. Mencakup fase erection hingga testing & commissioning. Tersedia perluasan DSU/ALOP.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">
              💬 Konsultasi EAR Sekarang
            </a>
            <a href="#kalkulator" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">
              Hitung Estimasi Premi →
            </a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { num: "All Risks", lbl: "Prinsip Jaminan" },
              { num: "Testing", lbl: "& Commissioning Cover" },
              { num: "DSU/ALOP", lbl: "Perluasan Tersedia" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-heading text-gold text-lg font-bold">{s.num}</div>
                <div className="text-white/45 text-xs mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEDA CAR vs EAR ─────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Perbedaan Produk</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            CAR vs EAR —<br />Kapan Harus Pakai yang Mana?
          </h2>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left p-4 font-heading font-semibold text-xs rounded-tl-xl">Aspek</th>
                <th className="text-left p-4 font-heading font-semibold text-xs">CAR</th>
                <th className="text-left p-4 font-heading font-semibold text-xs rounded-tr-xl text-gold">EAR</th>
              </tr>
            </thead>
            <tbody>
              {bedaCARvsEAR.map((b, i) => (
                <tr key={b.aspek} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                  <td className="p-4 font-semibold text-navy text-xs">{b.aspek}</td>
                  <td className="p-4 text-[#64748B] text-sm leading-relaxed">{b.car}</td>
                  <td className="p-4 text-navy2 text-sm leading-relaxed font-medium">{b.ear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 max-w-4xl mx-auto bg-navy rounded-xl p-5 text-white">
          <p className="text-sm text-white/80">
            <strong className="text-gold">💡 Catatan:</strong> Proyek yang menggabungkan pekerjaan sipil sekaligus pemasangan mesin berat dapat menggunakan <strong className="text-gold">polis Combined CAR/EAR</strong> — satu polis yang menanggung kedua jenis pekerjaan sekaligus, lebih efisien.
          </p>
        </div>
      </section>

      {/* ── TAHAPAN JAMINAN ──────────────────────────────────────────────────── */}
      <section id="tahapan" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Periode Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            EAR Melindungi<br />di Setiap Fase Proyek
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {tahapanEAR.map((t, i) => (
            <div key={t.tahap} className="bg-cream rounded-card p-6 border border-black/5 relative text-center">
              <div className="absolute top-4 right-4 font-heading text-[2rem] font-bold text-navy/8">{i + 1}</div>
              <div className="text-3xl mb-3">{t.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{t.tahap}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RISIKO EAR ───────────────────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Risiko Spesifik</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Risiko Unik dalam<br />Proses Erection & Instalasi
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {risikoEAR.map((r) => (
            <div key={r.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{r.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── KALKULATOR ──────────────────────────────────────────────────────── */}
      <KalkulatorEAR />

      {/* ── JENIS INSTALASI ──────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cakupan Instalasi</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Jenis Instalasi yang<br />Dapat Diasuransikan EAR
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {jenisInstalasi.map((j) => (
            <div key={j.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{j.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{j.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{j.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PENGECUALIAN (NEW) ────────────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Penting Diketahui</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Pengecualian Polis EAR<br />yang Perlu Dipahami
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {pengecualianEAR.map((p) => (
            <div key={p.label} className="bg-white rounded-card p-6 border border-red-100">
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{p.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROSES KLAIM (NEW) ───────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Panduan Klaim</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Cara Klaim Asuransi EAR<br />Jika Terjadi Insiden
          </h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {prosesKlaimSteps.map((s, i) => (
            <div key={s.step} className="bg-cream rounded-card p-5 border border-black/5 grid grid-cols-[auto_1fr] gap-4 items-start">
              <div className="bg-gold text-navy font-heading font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</div>
              <div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1">{s.judul}</div>
                <p className="text-base leading-relaxed text-[#64748B]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRI DI DIY ──────────────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Konteks Lokal DIY</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Sektor Industri Yogyakarta<br />yang Membutuhkan EAR
          </h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {industriDIY.map((ind) => (
            <div key={ind.sektor} className="bg-white rounded-card p-6 border border-black/5 grid grid-cols-[auto_1fr] gap-4 items-start">
              <span className="text-3xl">{ind.icon}</span>
              <div>
                <div className="font-heading text-navy font-bold text-[1rem] mb-1">{ind.sektor}</div>
                <p className="text-base leading-relaxed text-[#64748B]">{ind.contoh}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Pertanyaan Seputar<br />Asuransi EAR Yogyakarta
          </h2>
        </div>
        <div className="max-w-[700px] mx-auto">
          {faqItems.map((f, i) => (
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}
                <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-base leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── INTERNAL LINKS ───────────────────────────────────────────────────── */}
      <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk & Artikel Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-engineering/contractor-all-risk" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏗️ Contractor All Risk →</Link>
            <Link href="/asuransi-engineering/machinery-breakdown" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔧 Machinery Breakdown →</Link>
            <Link href="/asuransi-liability/employer-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏭 Property All Risk →</Link>
            <Link href="/artikel/asuransi-kontraktor-proyek-jogja" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📄 Panduan Asuransi Kontraktor →</Link>
            <Link href="/asuransi-engineering" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Engineering</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Mesin Miliaran Rupiah<br />Layak Dilindungi Saat Dipasang
          </h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">
            Konsultasi gratis EAR — kami review nilai instalasi, fase erection, dan siapkan polis yang menanggung risiko dari awal hingga komisioning.
          </p>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
          >
            💬 Konsultasi EAR via WhatsApp
          </a>
        </div>
      </section>
    </EngineeringLayout>
  );
}
