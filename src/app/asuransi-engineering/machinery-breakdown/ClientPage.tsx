"use client";
import { useState } from "react";
import Link from "next/link";
import EngineeringLayout from "@/components/engineering/EngineeringLayout";
import { KONTAK } from "@/lib/data";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const bedaMBvsKebakaran = [
  { aspek: "Penyebab Kerusakan", kebakaran: "Kebakaran dari luar yang merusak mesin", mb: "Kerusakan dari dalam mesin itu sendiri" },
  { aspek: "Contoh Kejadian", kebakaran: "Mesin terbakar karena kebakaran pabrik", mb: "Korsleting internal, bearing aus, piston pecah" },
  { aspek: "Frekuensi", kebakaran: "Jarang terjadi, dampak masif", mb: "Lebih sering terjadi, dampak per-mesin" },
  { aspek: "Biaya Perbaikan", kebakaran: "Biasanya diganti total (total loss)", mb: "Perbaikan komponen atau penggantian parsial" },
  { aspek: "Estimasi Premi", kebakaran: "Termasuk dalam polis properti", mb: "0,3–0,8% nilai mesin per tahun" },
];

const penyebabKerusakan = [
  { icon: "⚡", label: "Korsleting & Kegagalan Listrik", desc: "Lonjakan tegangan (voltage surge), korsleting pada motor listrik, dan kerusakan akibat pemadaman listrik mendadak yang sering terjadi di kawasan industri" },
  { icon: "🔩", label: "Kegagalan Komponen Internal", desc: "Bearing aus, gear patah, piston retak, atau shaft bengkok akibat kelelahan material setelah jam operasional panjang" },
  { icon: "🌡️", label: "Overheat & Kegagalan Pendingin", desc: "Sistem pendingin mesin yang tidak berfungsi menyebabkan suhu berlebih — kerusakan paling umum pada mesin produksi non-stop" },
  { icon: "💧", label: "Masuknya Air & Kontaminan", desc: "Air atau pelumas yang terkontaminasi masuk ke sistem mesin menyebabkan kerusakan komponen presisi secara cepat" },
  { icon: "🤷", label: "Kesalahan Operator", desc: "Kesalahan pengoperasian yang tidak disengaja — beban berlebih, pengaturan parameter salah, atau prosedur startup yang keliru" },
  { icon: "🔄", label: "Vibrasi & Misalignment", desc: "Ketidaksejajaran poros, fondasi yang tidak rata, atau imbalance pada komponen berputar mempercepat keausan mesin" },
];

const mesinYangDijamin = [
  { icon: "🏭", label: "Mesin Produksi & Manufaktur", contoh: "Mesin cetak offset, mesin jahit industri, line produksi otomatis, mesin CNC, dan mesin press" },
  { icon: "❄️", label: "Sistem Pendingin & HVAC", contoh: "Chiller, kompresor AC sentral, cooling tower, dan sistem refrigerasi industri" },
  { icon: "⚡", label: "Genset & Sistem Kelistrikan", contoh: "Generator listrik cadangan, trafo distribusi, UPS industri, dan panel switchgear" },
  { icon: "💧", label: "Pompa & Kompresor", contoh: "Pompa air industri, pompa bahan kimia, kompresor udara, dan pompa hidrolik" },
  { icon: "🔄", label: "Konveyor & Material Handling", contoh: "Belt conveyor, crane overhead, forklift elektrik, dan elevator kargo" },
  { icon: "🖨️", label: "Mesin Cetak & Percetakan", contoh: "Mesin offset, digital printing industri, mesin finishing, dan binding machine" },
];

const dampakBisnis = [
  { icon: "⏸️", title: "Produksi Berhenti", desc: "Satu mesin utama rusak bisa menghentikan seluruh lini produksi — seluruh target produksi berantakan dalam hitungan jam" },
  { icon: "💰", title: "Biaya Perbaikan Besar", desc: "Spare part mesin impor, jasa teknisi authorized, dan biaya import lead time bisa menelan ratusan juta rupiah" },
  { icon: "🏃", title: "Kehilangan Kontrak", desc: "Ketidakmampuan memenuhi order karena mesin rusak bisa berujung pada penalti kontrak dan kehilangan klien jangka panjang" },
  { icon: "👷", title: "Dampak ke Karyawan", desc: "Produksi berhenti artinya karyawan tidak bisa bekerja — biaya overhead tetap berjalan walau mesin tidak beroperasi" },
];

const biayaOverhaulTipikal = [
  { mesin: "Chiller / AC Sentral", biaya: "Rp 50 – 300 juta", keterangan: "Tergantung kapasitas dan jenis kerusakan kompresor" },
  { mesin: "Genset 100 – 500 kVA", biaya: "Rp 30 – 200 juta", keterangan: "Overhaul mesin diesel, alternator, dan panel kontrol" },
  { mesin: "Mesin CNC / Produksi", biaya: "Rp 20 – 500 juta", keterangan: "Sangat bervariasi tergantung merek dan ketersediaan suku cadang" },
  { mesin: "Kompresor Industri", biaya: "Rp 15 – 100 juta", keterangan: "Penggantian piston, valve, bearing, dan sistem pendingin" },
];

const prosesKlaimSteps = [
  { step: 1, judul: "Laporkan dalam 24–48 Jam", desc: "Hubungi kami via WhatsApp segera setelah mesin mengalami kerusakan mendadak. Jangan lakukan perbaikan sebelum mendapat persetujuan dari perusahaan asuransi — ini syarat klaim yang paling sering dilanggar." },
  { step: 2, judul: "Dokumentasi Kerusakan", desc: "Ambil foto dan video komponen yang rusak dari berbagai sudut. Catat gejala sebelum kerusakan, jam operasi mesin, dan riwayat pemeliharaan terakhir." },
  { step: 3, judul: "Laporan Teknisi Resmi", desc: "Minta teknisi atau vendor mesin membuat laporan tertulis mengenai penyebab kerusakan (root cause analysis) dan estimasi biaya perbaikan resmi." },
  { step: 4, judul: "Survei Loss Adjuster", desc: "Loss adjuster dari perusahaan asuransi akan memeriksa kerusakan secara langsung. Kami mendampingi untuk memastikan penilaian yang adil dan akurat." },
  { step: 5, judul: "Persetujuan & Perbaikan", desc: "Setelah klaim disetujui, perbaikan bisa dilakukan. Biaya suku cadang, jasa teknisi, dan pengiriman komponen ditanggung asuransi dikurangi deductible." },
];

const faqItems = [
  {
    q: "Berapa premi asuransi Machinery Breakdown untuk mesin senilai Rp 500 juta?",
    a: "Estimasi premi MB untuk mesin Rp 500 juta berkisar Rp 1,5–4 juta per tahun (rate 0,3–0,8%). Rate dipengaruhi jenis mesin, usia mesin, kondisi perawatan, dan apakah termasuk perluasan Business Interruption. Premi yang kelihatan kecil ini bisa menanggung biaya perbaikan puluhan hingga ratusan juta rupiah.",
  },
  {
    q: "Apa perbedaan Machinery Breakdown dengan asuransi kebakaran untuk mesin?",
    a: "Asuransi kebakaran hanya menanggung kerusakan mesin akibat kebakaran dari luar. MB menanggung kerusakan dari dalam mesin — korsleting internal, bearing aus, piston pecah, overheat — yang tidak disebabkan kebakaran. Riset industri menunjukkan lebih dari 90% kerusakan mesin bukan akibat kebakaran.",
  },
  {
    q: "Apa itu Business Interruption (BI) dalam Machinery Breakdown?",
    a: "Business Interruption (BI) adalah perluasan polis MB yang menanggung kerugian finansial akibat berhentinya produksi saat mesin rusak — termasuk kehilangan laba, biaya tetap yang terus berjalan (gaji karyawan, sewa), dan biaya ekstra untuk mengejar keterlambatan produksi. Sangat penting untuk bisnis yang bergantung pada mesin kritis.",
  },
  {
    q: "Apakah mesin yang sudah tua (di atas 10 tahun) bisa diasuransikan MB?",
    a: "Bisa, namun perlu survei kondisi mesin terlebih dahulu. Beberapa perusahaan asuransi menetapkan batas usia mesin (biasanya 15–20 tahun) atau mengenakan loading premi untuk mesin yang lebih tua. Kami bantu carikan perusahaan asuransi yang tepat sesuai kondisi mesin Anda.",
  },
  {
    q: "Apakah genset cadangan bisa diasuransikan dengan Machinery Breakdown?",
    a: "Ya. Genset, baik utama maupun cadangan, bisa diasuransikan MB. Genset adalah salah satu mesin yang paling sering mengalami kerusakan mendadak — terutama akibat kegagalan sistem pendingin, kerusakan alternator, atau masalah pada sistem bahan bakar.",
  },
  {
    q: "Apakah biaya spare part impor ditanggung dalam klaim MB?",
    a: "Ya, termasuk biaya spare part impor, jasa teknisi authorized, dan biaya pengiriman suku cadang. Ini adalah keunggulan utama MB — justru berguna sekali untuk mesin dengan spare part mahal yang butuh import lead time panjang, karena total biaya bisa sangat besar.",
  },
  {
    q: "Apa saja yang dikecualikan dalam polis Machinery Breakdown?",
    a: "Pengecualian umum MB meliputi: keausan normal (wear & tear), kerusakan akibat kebakaran dari luar (itu ranah asuransi properti), kerusakan estetika tanpa gangguan fungsi, kerusakan yang disebabkan oleh modifikasi mesin tanpa persetujuan pabrikan, serta kerusakan yang sudah ada sebelum polis berlaku. Kami jelaskan detail pengecualian secara transparan sebelum polis diterbitkan.",
  },
  {
    q: "Apakah ada manfaat pajak dari premi Machinery Breakdown untuk perusahaan?",
    a: "Ya, premi asuransi MB yang dibayar perusahaan umumnya dapat dibebankan sebagai biaya operasional (deductible expense) dalam perhitungan PPh Badan, sepanjang aset yang diasuransikan digunakan untuk kegiatan usaha yang menghasilkan penghasilan kena pajak. Konsultasikan dengan akuntan atau konsultan pajak Anda.",
  },
];

// ─── KALKULATOR MB ───────────────────────────────────────────────────────────
function KalkulatorMB() {
  const [nilaiMesin, setNilaiMesin] = useState("");
  const [jenisMesin, setJenisMesin] = useState("produksi");
  const [usiaMesin, setUsiaMesin] = useState("baru");
  const [includeBI, setIncludeBI] = useState(false);
  const [hasil, setHasil] = useState<null | { min: number; max: number; waMsg: string }>(null);
  const [error, setError] = useState("");

  // Rate: [min%, max%] per tahun dari nilai mesin
  const rateMap: Record<string, [number, number]> = {
    produksi: [0.003, 0.005],
    pendingin: [0.004, 0.007],
    genset: [0.004, 0.008],
    pompa: [0.003, 0.006],
    conveyor: [0.003, 0.006],
    cetak: [0.004, 0.007],
  };

  const usiaSurcharge: Record<string, number> = {
    baru: 0,
    sedang: 0.001,
    tua: 0.002,
  };

  const hitung = () => {
    const n = parseFloat(nilaiMesin);
    if (!n || n < 10_000_000) {
      setError("Masukkan nilai mesin minimal Rp 10.000.000");
      return;
    }
    setError("");
    let [rMin, rMax] = rateMap[jenisMesin];
    const surcharge = usiaSurcharge[usiaMesin];
    rMin += surcharge;
    rMax += surcharge;
    if (includeBI) { rMin += 0.001; rMax += 0.003; }

    const min = n * rMin;
    const max = n * rMax;

    const jenisLabel: Record<string, string> = {
      produksi: "Mesin Produksi / Manufaktur",
      pendingin: "Sistem Pendingin / HVAC / Chiller",
      genset: "Genset & Sistem Kelistrikan",
      pompa: "Pompa & Kompresor",
      conveyor: "Konveyor & Material Handling",
      cetak: "Mesin Cetak & Percetakan",
    };
    const fmt = (v: number) => "Rp " + Math.round(v).toLocaleString("id-ID");
    const waMsg = encodeURIComponent(
      `Halo Pak Rio, saya ingin konsultasi asuransi Machinery Breakdown.\n\n- Jenis Mesin: ${jenisLabel[jenisMesin]}\n- Nilai Mesin: ${fmt(n)}\n- Usia Mesin: ${usiaMesin}\n- Perluasan BI: ${includeBI ? "Ya" : "Tidak"}\n- Estimasi Premi: ${fmt(min)} – ${fmt(max)}/tahun\n\nMohon info penawaran resminya. Terima kasih.`
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
          Kalkulator Estimasi<br />Premi Machinery Breakdown
        </h2>
        <p className="text-white/60 text-sm leading-relaxed max-w-[460px] mx-auto mt-3">
          Estimasi berdasarkan jenis dan kondisi mesin. Premi final ditentukan setelah survei kondisi mesin.
        </p>
      </div>
      <div className="bg-white/5 border border-gold/20 rounded-[20px] p-8 max-w-[680px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="mb-jenis">Jenis Mesin</label>
            <select id="mb-jenis" className={selectCls} value={jenisMesin} onChange={(e) => setJenisMesin(e.target.value)}>
              <option value="produksi" style={{ background: "#163352" }}>🏭 Mesin Produksi / Manufaktur</option>
              <option value="pendingin" style={{ background: "#163352" }}>❄️ Pendingin / HVAC / Chiller</option>
              <option value="genset" style={{ background: "#163352" }}>⚡ Genset & Sistem Kelistrikan</option>
              <option value="pompa" style={{ background: "#163352" }}>💧 Pompa & Kompresor</option>
              <option value="conveyor" style={{ background: "#163352" }}>🔄 Konveyor & Material Handling</option>
              <option value="cetak" style={{ background: "#163352" }}>🖨️ Mesin Cetak & Percetakan</option>
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="mb-usia">Usia Mesin</label>
            <select id="mb-usia" className={selectCls} value={usiaMesin} onChange={(e) => setUsiaMesin(e.target.value)}>
              <option value="baru" style={{ background: "#163352" }}>Baru (0–5 tahun)</option>
              <option value="sedang" style={{ background: "#163352" }}>Sedang (5–10 tahun)</option>
              <option value="tua" style={{ background: "#163352" }}>Tua (10–15 tahun)</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          <label className={labelCls}>Nilai Mesin / Replacement Value (Rp)</label>
          <input
            type="number"
            placeholder="Contoh: 500000000"
            className={inputCls}
            value={nilaiMesin}
            onChange={(e) => setNilaiMesin(e.target.value)}
          />
          <span className="text-white/40 text-xs mt-1 block">Nilai penggantian mesin baru (bukan nilai buku / harga beli)</span>
        </div>
        <div className="mt-5">
          <label className={labelCls}>Perluasan (Opsional)</label>
          <label className="flex items-center gap-2 cursor-pointer text-white/80 text-sm">
            <input type="checkbox" checked={includeBI} onChange={(e) => setIncludeBI(e.target.checked)} className="accent-gold w-4 h-4" />
            📊 Business Interruption (BI) — kerugian finansial saat produksi berhenti akibat mesin rusak
          </label>
        </div>
        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
        <button
          onClick={hitung}
          className="w-full bg-gold text-navy py-3.5 rounded-lg font-bold text-[0.95rem] mt-6 hover:bg-gold2 hover:-translate-y-px transition-all cursor-pointer border-none"
        >
          Hitung Estimasi Premi MB →
        </button>
        {hasil && (
          <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-6">
            <div className="font-heading text-gold2 text-base font-semibold mb-3">Estimasi Premi Machinery Breakdown</div>
            <div className="flex justify-between items-center py-2 border-t border-gold/20">
              <span className="text-gold2 font-semibold text-sm">Estimasi Premi / Tahun</span>
              <span className="text-gold text-[1.1rem] font-bold">{fmt(hasil.min)} – {fmt(hasil.max)}</span>
            </div>
            {includeBI && (
              <div className="flex justify-between items-center py-1.5 border-t border-gold/10">
                <span className="text-white/50 text-xs">✓ Termasuk Business Interruption</span>
              </div>
            )}
            <p className="text-white/40 text-xs mt-3 leading-relaxed">
              * Estimasi berdasarkan tarif referensi pasar. Premi final ditentukan setelah survei kondisi mesin.
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
        { label: "Machinery Breakdown (MB)" },
      ]}
    >
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)" }} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">🔧</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-engineering" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">
            ← Asuransi Engineering
          </Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Machinery Breakdown · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Machinery<br /><em className="not-italic text-gold">Breakdown (MB)</em><br />Mesin Rusak, Bisnis Jalan Terus
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[520px] mb-4">
            Mesin produksi tidak pernah rusak di waktu yang tepat. Tapi dengan Machinery Breakdown Insurance, biaya perbaikan tak terduga tidak harus mengganggu arus kas dan kelangsungan bisnis Anda di Yogyakarta.
          </p>
          <p className="text-white/55 text-sm max-w-[480px] mb-8">
            Estimasi premi: <strong className="text-gold2">0,3–0,8%</strong> dari nilai mesin per tahun. Tersedia perluasan <strong className="text-gold2">Business Interruption</strong>.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">
              💬 Konsultasi MB Sekarang
            </a>
            <a href="#kalkulator" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">
              Hitung Estimasi Premi →
            </a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { num: "Bukan", lbl: "Hanya Kebakaran" },
              { num: "BI Cover", lbl: "Perluasan Tersedia" },
              { num: "Gratis", lbl: "Analisis Kebutuhan" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-heading text-gold text-lg font-bold">{s.num}</div>
                <div className="text-white/45 text-xs mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERBEDAAN MB vs KEBAKARAN ────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Kenapa Perlu MB?</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Asuransi Kebakaran Tidak Cukup —<br />Ini Bedanya dengan MB
          </h2>
          <p className="text-base text-[#64748B] max-w-[500px] mx-auto mt-3">
            Banyak pemilik pabrik mengira mesinnya sudah terlindungi karena ada asuransi kebakaran. Kenyataannya, lebih dari 90% kerusakan mesin bukan disebabkan kebakaran.
          </p>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left p-4 font-heading font-semibold text-xs rounded-tl-xl">Aspek</th>
                <th className="text-left p-4 font-heading font-semibold text-xs">Asuransi Kebakaran</th>
                <th className="text-left p-4 font-heading font-semibold text-xs rounded-tr-xl text-gold">Machinery Breakdown</th>
              </tr>
            </thead>
            <tbody>
              {bedaMBvsKebakaran.map((b, i) => (
                <tr key={b.aspek} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                  <td className="p-4 font-semibold text-navy text-xs">{b.aspek}</td>
                  <td className="p-4 text-[#64748B] text-sm leading-relaxed">{b.kebakaran}</td>
                  <td className="p-4 text-navy2 text-sm leading-relaxed font-medium">{b.mb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 max-w-4xl mx-auto bg-gold/8 border border-gold/20 rounded-xl p-5">
          <p className="text-sm text-navy2">
            <strong className="text-gold">💡 Solusi Terbaik:</strong> Kombinasikan asuransi kebakaran (untuk risiko eksternal) dengan Machinery Breakdown (untuk risiko internal mesin). Keduanya saling melengkapi dan menutup seluruh risiko kerusakan mesin industri Anda.
          </p>
        </div>
      </section>

      {/* ── PENYEBAB KERUSAKAN ───────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Penyebab Kerusakan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            6 Penyebab Utama<br />Kerusakan Mesin Industri
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {penyebabKerusakan.map((p) => (
            <div key={p.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{p.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DAMPAK BISNIS ────────────────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Dampak Bisnis</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Apa yang Terjadi Ketika<br />Mesin Utama Tiba-Tiba Rusak?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {dampakBisnis.map((d) => (
            <div key={d.title} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{d.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{d.title}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BUSINESS INTERRUPTION (NEW - UPSELL) ────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-white">
        <div className="max-w-4xl mx-auto bg-navy rounded-[20px] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
              Perluasan Penting
            </div>
            <h2 className="font-heading text-white text-[1.4rem] mb-3">
              Business Interruption —<br /><em className="not-italic text-gold">Kerugian Finansial Juga Ditanggung</em>
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Polis Machinery Breakdown standar hanya menanggung biaya perbaikan mesin. Tapi kerugian nyata saat mesin rusak seringkali jauh lebih besar — produksi berhenti, order tidak terpenuhi, karyawan tetap digaji.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Dengan perluasan <strong className="text-gold2">Business Interruption (BI)</strong>, kerugian finansial akibat berhentinya produksi juga ditanggung — termasuk:
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: "📉", label: "Kehilangan Laba (Loss of Profit)", desc: "Laba bersih yang seharusnya dihasilkan selama periode mesin tidak beroperasi" },
              { icon: "💼", label: "Biaya Tetap yang Terus Berjalan", desc: "Gaji karyawan, sewa, cicilan, dan overhead lainnya yang tetap berjalan walau produksi berhenti" },
              { icon: "🚀", label: "Biaya Ekstra Produksi", desc: "Biaya lembur, sub-kontrak produksi ke pihak lain, dan biaya ekstra untuk memenuhi order yang tertunda" },
              { icon: "⏰", label: "Periode Indemnity", desc: "Umumnya 6–12 bulan sejak tanggal kerusakan atau hingga mesin kembali beroperasi normal" },
            ].map((item) => (
              <div key={item.label} className="bg-white/8 border border-white/10 rounded-xl p-4 flex gap-3 items-start">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-semibold text-white text-sm mb-0.5">{item.label}</div>
                  <div className="text-white/55 text-xs leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KALKULATOR ──────────────────────────────────────────────────────── */}
      <KalkulatorMB />

      {/* ── MESIN YANG DIJAMIN ───────────────────────────────────────────────── */}
      <section id="mesin" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cakupan Mesin</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Mesin & Peralatan<br />yang Dapat Dijamin MB
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {mesinYangDijamin.map((m) => (
            <div key={m.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{m.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{m.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{m.contoh}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BIAYA OVERHAUL ───────────────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Referensi Biaya</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Estimasi Biaya Perbaikan<br />Mesin Industri Umum
          </h2>
          <p className="text-base text-[#64748B] max-w-[460px] mx-auto mt-2">
            Angka di bawah adalah estimasi pasar — biaya aktual sangat bergantung pada kondisi dan ketersediaan suku cadang
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {biayaOverhaulTipikal.map((b) => (
            <div key={b.mesin} className="bg-white rounded-card p-5 border border-black/5 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 items-center">
              <div className="font-heading text-navy font-bold text-sm">{b.mesin}</div>
              <div className="hidden md:block text-gold/30">|</div>
              <div>
                <div className="font-heading text-gold font-bold text-base">{b.biaya}</div>
                <div className="text-xs text-[#64748B] mt-0.5">{b.keterangan}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-3xl mx-auto bg-navy rounded-xl p-6 text-white">
          <div className="font-heading text-gold text-sm font-semibold mb-2">📊 Premi vs Biaya Perbaikan</div>
          <p className="text-xs leading-relaxed text-white/75">
            Premi Machinery Breakdown biasanya berkisar <strong className="text-gold">0,3–0,8% dari nilai mesin per tahun</strong>. Untuk mesin senilai Rp 500 juta, premi sekitar Rp 1,5–4 juta per tahun. Satu kali kejadian kerusakan serius sudah bisa menutup biaya premi puluhan tahun ke depan.
          </p>
        </div>
      </section>

      {/* ── PROSES KLAIM (NEW) ───────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Panduan Klaim</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Cara Klaim Machinery Breakdown<br />agar Mesin Cepat Diperbaiki
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
        <div className="mt-6 max-w-3xl mx-auto bg-gold/8 border border-gold/20 rounded-xl p-5">
          <p className="text-sm text-navy2">
            <strong className="text-gold">⚡ Kunci Klaim Lancar:</strong> Dua hal terpenting — (1) lapor dalam 24–48 jam, dan (2) jangan lakukan perbaikan sebelum ada persetujuan dari perusahaan asuransi. Kami siap mendampingi dari langkah pertama hingga dana cair.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Pertanyaan Seputar<br />Asuransi Machinery Breakdown
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
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk & Artikel Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-engineering/contractor-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏗️ Contractor All Risk →</Link>
            <Link href="/asuransi-engineering/erection-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚙️ Erection All Risk →</Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏭 Property All Risk →</Link>
            <Link href="/asuransi-liability/employer-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
            <Link href="/artikel/asuransi-kontraktor-proyek-jogja" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📄 Panduan Asuransi Kontraktor →</Link>
            <Link href="/asuransi-engineering" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Engineering</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Mesin Rusak Tak Terduga —<br />Biaya Perbaikan Sudah Tertanggung
          </h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">
            Konsultasi gratis Machinery Breakdown — kami bantu inventarisir mesin, hitung nilai pertanggungan, dan pilih polis yang tepat untuk industri Anda di Yogyakarta.
          </p>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
          >
            💬 Konsultasi MB via WhatsApp
          </a>
        </div>
      </section>
    </EngineeringLayout>
  );
}
