"use client";
import { useState } from "react";
import Link from "next/link";
import EngineeringLayout from "@/components/engineering/EngineeringLayout";
import { KONTAK } from "@/lib/data";


// ─── DATA ─────────────────────────────────────────────────────────────────────
const sectionPolis = [
  {
    section: "Section I",
    judul: "Material Damage",
    icon: "🏗️",
    isi: [
      "Kerusakan fisik pada pekerjaan permanen dan sementara yang sedang dibangun",
      "Kerusakan material dan bahan bangunan yang tersimpan di lokasi proyek",
      "Kerusakan peralatan konstruksi milik kontraktor (plant & equipment)",
      "Biaya pembersihan puing dan debris akibat kerusakan yang dijamin",
    ],
  },
  {
    section: "Section II",
    judul: "Third Party Liability (TPL)",
    icon: "🤝",
    isi: [
      "Kerusakan properti pihak ketiga akibat aktivitas konstruksi",
      "Cedera badan pihak ketiga termasuk warga sekitar dan pengunjung lokasi",
      "Biaya pembelaan hukum dan ganti rugi atas tuntutan pihak ketiga",
      "Kerusakan fasilitas umum: pipa air, kabel listrik, saluran komunikasi",
    ],
  },
];

const risikoProyek = [
  { icon: "🌧️", label: "Hujan & Banjir", desc: "Curah hujan tinggi di Yogyakarta bisa menggenangi galian pondasi, merusak material terbuka, dan menunda progress proyek" },
  { icon: "🌋", label: "Gempa Bumi", desc: "Yogyakarta zona gempa aktif — struktur yang sedang dibangun lebih rentan terhadap kerusakan gempa dibanding bangunan jadi" },
  { icon: "🔥", label: "Kebakaran di Lokasi", desc: "Penggunaan api las, bahan bakar alat berat, dan material mudah terbakar menjadikan lokasi proyek rentan kebakaran" },
  { icon: "🏚️", label: "Keruntuhan Struktur", desc: "Kegagalan bekisting, longsoran galian, atau runtuhnya struktur sementara adalah risiko paling mahal dalam konstruksi" },
  { icon: "🦹", label: "Pencurian Material", desc: "Besi beton, kabel listrik, dan material proyek sering menjadi target pencurian — terutama di lokasi yang dijaga minim" },
  { icon: "💥", label: "Ledakan & Kecelakaan", desc: "Penggunaan bahan peledak untuk galian, kecelakaan alat berat, dan insiden di ketinggian masuk dalam cakupan CAR" },
];

const tahapProyek = [
  { tahap: "Persiapan & Mobilisasi", cover: "Material, peralatan yang datang ke site mulai terlindungi sejak tiba di lokasi" },
  { tahap: "Pekerjaan Utama", cover: "Seluruh pekerjaan fisik: pondasi, struktur, arsitektur, MEP — semua dalam jaminan Section I" },
  { tahap: "Testing & Commissioning", cover: "Pengujian instalasi dan sistem sebelum diserahterimakan kepada pemilik proyek" },
  { tahap: "Maintenance Period", cover: "Periode pemeliharaan pasca selesai konstruksi — umumnya 12 bulan setelah serah terima" },
];

const proyekTipikal = [
  { icon: "🏨", label: "Hotel & Akomodasi", nilai: "Rp 10M – 500M+", durasi: "12–36 bulan" },
  { icon: "🏫", label: "Gedung Kampus & Sekolah", nilai: "Rp 5M – 200M", durasi: "12–24 bulan" },
  { icon: "🏥", label: "Rumah Sakit & Klinik", nilai: "Rp 20M – 1T+", durasi: "18–48 bulan" },
  { icon: "🛣️", label: "Jalan & Infrastruktur", nilai: "Rp 2M – 500M", durasi: "6–24 bulan" },
  { icon: "🏭", label: "Pabrik & Industri", nilai: "Rp 10M – 300M", durasi: "12–30 bulan" },
  { icon: "🏘️", label: "Perumahan & Ruko", nilai: "Rp 1M – 50M", durasi: "6–18 bulan" },
];

const dokumenTender = [
  "Sertifikat asuransi CAR (Certificate of Insurance)",
  "Schedule of Insurance — detail nilai proyek, periode, dan limit TPL",
  "Endorsement khusus sesuai persyaratan kontrak (misal: waiver of subrogation, principal clause)",
  "Konfirmasi premi lunas dan polis aktif",
];

const dokumenPengajuan = [
  { dok: "SPPA (Surat Permohonan Penutupan Asuransi)", ket: "Form standard yang kami bantu isi" },
  { dok: "Dokumen kontrak atau RAB proyek", ket: "Sebagai dasar penetapan nilai pertanggungan" },
  { dok: "Gambar teknis / site plan", ket: "Untuk proyek di atas Rp 5 miliar" },
  { dok: "Foto lokasi proyek", ket: "Kondisi existing sebelum konstruksi dimulai" },
  { dok: "Jadwal proyek (time schedule)", ket: "Sebagai dasar penentuan periode polis" },
];

const pengecualianCAR = [
  { icon: "❌", label: "Desain yang Cacat (Faulty Design)", desc: "Kerusakan akibat kesalahan desain atau spesifikasi teknis yang sejak awal keliru tidak ditanggung — ini risiko profesional yang masuk domain Professional Indemnity Insurance." },
  { icon: "❌", label: "Keausan Normal (Wear & Tear)", desc: "Kerusakan bertahap akibat pemakaian normal, korosi, dan oksidasi yang terjadi secara alami tidak masuk cakupan CAR." },
  { icon: "❌", label: "Kelalaian Disengaja", desc: "Kerusakan yang timbul dari tindakan disengaja atau kelalaian yang sangat berat (gross negligence) dari tertanggung sendiri dikecualikan." },
  { icon: "❌", label: "Perang & Kerusuhan Sipil", desc: "Kerusakan akibat perang, invasi, pemberontakan bersenjata, dan kerusuhan sipil secara standar dikecualikan dari polis CAR." },
  { icon: "❌", label: "Kontaminasi Nuklir", desc: "Risiko nuklir, radiasi ionisasi, dan kontaminasi radioaktif dikecualikan secara universal dalam semua polis asuransi." },
  { icon: "❌", label: "Biaya Perbaikan Desain", desc: "Biaya untuk memperbaiki desain, spesifikasi, atau formula yang salah tidak ditanggung — hanya kerusakan fisik akibat pelaksanaannya yang bisa diklaim." },
];

const prosesKlaimSteps = [
  { step: 1, judul: "Laporkan Segera (24–48 Jam)", desc: "Hubungi kami via WhatsApp begitu insiden terjadi. Jangan perbaiki kerusakan sebelum dilaporkan — ini syarat klaim yang sering diabaikan dan menyebabkan klaim ditolak." },
  { step: 2, judul: "Dokumentasi Kerusakan", desc: "Ambil foto dan video kondisi kerusakan dari berbagai sudut. Catat tanggal, jam, dan kondisi cuaca saat kejadian. Simpan semua bukti yang relevan." },
  { step: 3, judul: "Pengisian Form Klaim", desc: "Kami bantu mengisi formulir klaim dengan benar. Lengkapi dengan laporan kejadian, estimasi biaya perbaikan dari kontraktor, dan dokumen pendukung lainnya." },
  { step: 4, judul: "Survei oleh Loss Adjuster", desc: "Perusahaan asuransi akan mengirim loss adjuster untuk mensurvei kerusakan. Kami mendampingi Anda dalam proses ini untuk memastikan klaim dinilai secara adil." },
  { step: 5, judul: "Persetujuan & Pembayaran Klaim", desc: "Setelah klaim disetujui, dana ganti rugi ditransfer ke rekening tertanggung dikurangi deductible yang berlaku dalam polis." },
];

const faqItems = [
  {
    q: "Berapa premi CAR untuk proyek senilai Rp 500 juta?",
    a: "Estimasi premi CAR untuk proyek Rp 500 juta berkisar Rp 750 ribu – Rp 2,5 juta per tahun (rate 0,15–0,5%). Rate dipengaruhi oleh jenis pekerjaan (sipil, MEP, atau infrastruktur), lokasi proyek, limit TPL yang diambil, dan masa pemeliharaan. Hubungi kami untuk penawaran resmi dengan dokumen proyek.",
  },
  {
    q: "Apa perbedaan nilai kontrak dan nilai pertanggungan dalam CAR?",
    a: "Nilai kontrak adalah nilai pekerjaan yang tertera dalam kontrak dengan owner. Nilai pertanggungan (sum insured) dalam CAR umumnya sama dengan atau lebih besar dari nilai kontrak, karena harus mencakup material, upah, overhead, dan profit kontraktor. Untuk proyek dengan material impor, nilai pertanggungan bisa lebih tinggi dari nilai kontrak.",
  },
  {
    q: "Apakah alat berat sewa tercakup dalam CAR?",
    a: "Ini tergantung klausul polis. Secara standar, Section I CAR menanggung plant & equipment milik kontraktor. Untuk alat berat sewa, perlu endorsement khusus atau polis terpisah (Contractor's Plant & Equipment/CPE). Kami bantu review dan sesuaikan polis dengan situasi Anda.",
  },
  {
    q: "Berapa lama periode pemeliharaan (maintenance period) dalam CAR?",
    a: "Periode pemeliharaan dalam CAR umumnya 12 bulan setelah serah terima proyek (Provisional Handover). Selama periode ini, kerusakan akibat pekerjaan yang dilakukan saat konstruksi masih ditanggung. Panjang periode pemeliharaan bisa disesuaikan dengan syarat kontrak.",
  },
  {
    q: "Apa itu Principal Clause dalam polis CAR?",
    a: "Principal Clause adalah endorsement yang memperluas perlindungan CAR sehingga juga melindungi kepentingan pemilik proyek (owner/bouwheer) selain kontraktor. Ini sering disyaratkan dalam kontrak pemerintah dan proyek swasta besar — pemilik proyek ingin memastikan kepentingannya terlindungi jika kontraktor lalai.",
  },
  {
    q: "Bagaimana cara klaim CAR jika terjadi kerusakan akibat banjir?",
    a: "Segera hubungi kami (24–48 jam setelah kejadian). Jangan bersihkan kerusakan sebelum dilaporkan. Ambil dokumentasi foto/video. Kami akan memandu proses pengisian form klaim, koordinasi dengan loss adjuster perusahaan asuransi, dan pendampingan hingga klaim cair.",
  },
  {
    q: "Apakah subkontraktor perlu polis CAR tersendiri?",
    a: "Tidak selalu. Polis CAR kontraktor utama biasanya mencakup pekerjaan subkontraktor yang bekerja di lokasi yang sama. Namun, subkontraktor yang bekerja di lokasi terpisah atau yang mengerjakan pekerjaan khusus mungkin perlu polis terpisah. Sebaiknya dicantumkan dalam schedule of insurance.",
  },
  {
    q: "Apakah ada diskon premi untuk kontraktor yang punya track record klaim bersih?",
    a: "Ya, beberapa perusahaan asuransi memberikan no-claim discount (NCD) atau experience rating adjustment bagi kontraktor dengan riwayat klaim yang baik. Sebagai praktisi independen, kami membantu Anda memanfaatkan track record klaim untuk mendapatkan premi yang lebih efisien.",
  },
];

// ─── KALKULATOR SEDERHANA ─────────────────────────────────────────────────────
function KalkulatorCAR() {
  const [nilaiKontrak, setNilaiKontrak] = useState("");
  const [jenisProyek, setJenisProyek] = useState("sipil");
  const [limitTPL, setLimitTPL] = useState("10");
  const [hasil, setHasil] = useState<null | { min: number; max: number; waMsg: string }>(null);
  const [error, setError] = useState("");

  const rateMap: Record<string, [number, number]> = {
    sipil: [0.0015, 0.003],
    infrastruktur: [0.002, 0.004],
    mep: [0.0018, 0.0035],
    renovasi: [0.002, 0.005],
  };

  const hitung = () => {
    const n = parseFloat(nilaiKontrak);
    if (!n || n < 10_000_000) {
      setError("Masukkan nilai kontrak minimal Rp 10.000.000");
      return;
    }
    setError("");
    const [rMin, rMax] = rateMap[jenisProyek];
    const min = n * rMin;
    const max = n * rMax;

    const jenisLabel: Record<string, string> = { sipil: "Pekerjaan Sipil / Gedung", infrastruktur: "Infrastruktur (Jalan, Jembatan)", mep: "MEP / Mekanikal-Elektrikal", renovasi: "Renovasi / Rehabilitasi" };
    const tplLabel = `Rp ${parseInt(limitTPL)} miliar`;
    const fmt = (v: number) => "Rp " + Math.round(v).toLocaleString("id-ID");
    const waMsg = encodeURIComponent(
      `Halo Pak Rio, saya ingin konsultasi asuransi CAR.\n\n- Jenis Proyek: ${jenisLabel[jenisProyek]}\n- Nilai Kontrak: ${fmt(n)}\n- Limit TPL yang diinginkan: ${tplLabel}\n- Estimasi Premi: ${fmt(min)} – ${fmt(max)}/tahun\n\nMohon info penawaran resminya. Terima kasih.`
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
          Kalkulator Estimasi<br />Premi Asuransi CAR
        </h2>
        <p className="text-white/60 text-sm leading-relaxed max-w-[460px] mx-auto mt-3">
          Estimasi kasar berdasarkan jenis pekerjaan dan nilai kontrak. Premi final ditentukan setelah review dokumen proyek.
        </p>
      </div>
      <div className="bg-white/5 border border-gold/20 rounded-[20px] p-8 max-w-[680px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>Jenis Pekerjaan</label>
            <select className={selectCls} value={jenisProyek} onChange={(e) => setJenisProyek(e.target.value)}>
              <option value="sipil" style={{ background: "#163352" }}>🏗️ Pekerjaan Sipil / Gedung</option>
              <option value="infrastruktur" style={{ background: "#163352" }}>🛣️ Infrastruktur (Jalan, Jembatan)</option>
              <option value="mep" style={{ background: "#163352" }}>⚡ MEP / Mekanikal-Elektrikal</option>
              <option value="renovasi" style={{ background: "#163352" }}>🔨 Renovasi / Rehabilitasi</option>
            </select>
          </div>
          <div>
            <label className={labelCls}>Limit TPL (Pihak Ketiga)</label>
            <select className={selectCls} value={limitTPL} onChange={(e) => setLimitTPL(e.target.value)}>
              <option value="5" style={{ background: "#163352" }}>Rp 5 Miliar</option>
              <option value="10" style={{ background: "#163352" }}>Rp 10 Miliar</option>
              <option value="25" style={{ background: "#163352" }}>Rp 25 Miliar</option>
              <option value="50" style={{ background: "#163352" }}>Rp 50 Miliar</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          <label className={labelCls}>Nilai Kontrak Proyek (Rp)</label>
          <input
            type="number"
            placeholder="Contoh: 1000000000"
            className={inputCls}
            value={nilaiKontrak}
            onChange={(e) => setNilaiKontrak(e.target.value)}
          />
          <span className="text-white/40 text-xs mt-1 block">Nilai pekerjaan sesuai kontrak (tanpa PPN)</span>
        </div>
        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
        <button
          onClick={hitung}
          className="w-full bg-gold text-navy py-3.5 rounded-lg font-bold text-[0.95rem] mt-6 hover:bg-gold2 hover:-translate-y-px transition-all cursor-pointer border-none"
        >
          Hitung Estimasi Premi CAR →
        </button>
        {hasil && (
          <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-6">
            <div className="font-heading text-gold2 text-base font-semibold mb-3">Estimasi Premi Asuransi CAR</div>
            <div className="flex justify-between items-center py-2 border-t border-gold/20">
              <span className="text-gold2 font-semibold text-sm">Estimasi Premi / Tahun</span>
              <span className="text-gold text-[1.1rem] font-bold">{fmt(hasil.min)} – {fmt(hasil.max)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-t border-gold/15">
              <span className="text-white/50 text-xs">Belum termasuk Section II TPL dan biaya polis</span>
              <span className="text-white/50 text-xs">*estimasi</span>
            </div>
            <p className="text-white/40 text-xs mt-3 leading-relaxed">
              * Estimasi berdasarkan tarif referensi pasar. Premi final ditentukan perusahaan asuransi setelah review dokumen proyek lengkap.
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
        { label: "Contractor All Risk (CAR)" },
      ]}
    >
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)" }} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">🏗️</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-engineering" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">
            ← Asuransi Engineering
          </Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Contractor All Risk · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Contractor All Risk<br /><em className="not-italic text-gold">(CAR) Yogyakarta</em><br />Proyek Aman, Tender Lancar
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[520px] mb-4">
            Dari hotel bintang di Malioboro hingga gedung kampus di Sleman — setiap proyek konstruksi di Yogyakarta menghadapi risiko yang sama: cuaca ekstrem, gempa, kecelakaan pekerja, dan tuntutan pihak ketiga. CAR melindungi semuanya dalam satu polis.
          </p>
          <p className="text-white/55 text-sm max-w-[480px] mb-8">
            Estimasi premi: <strong className="text-gold2">0,15–0,5%</strong> dari nilai kontrak. Polis terbit <strong className="text-gold2">1–3 hari kerja</strong>. Dokumen tender siap pakai.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">
              💬 Konsultasi CAR Sekarang
            </a>
            <a href="#kalkulator" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">
              Hitung Estimasi Premi →
            </a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { num: "Section I+II", lbl: "Cakupan Lengkap" },
              { num: "Wajib", lbl: "Tender Pemerintah DIY" },
              { num: "1–3 Hari", lbl: "Proses Polis" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-heading text-gold text-lg font-bold">{s.num}</div>
                <div className="text-white/45 text-xs mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION POLIS ───────────────────────────────────────────────────── */}
      <section id="section" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Struktur Polis CAR</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Dua Section Polis CAR<br />yang Saling Melengkapi
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sectionPolis.map((s) => (
            <div key={s.section} className="bg-white rounded-card p-7 border border-black/6">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-navy text-gold font-heading font-bold text-sm w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  {s.section.replace("Section ", "§")}
                </div>
                <div>
                  <div className="font-heading text-navy font-bold text-[1.1rem]">{s.judul}</div>
                  <div className="text-gold text-xs font-semibold">{s.section}</div>
                </div>
                <span className="text-2xl ml-auto">{s.icon}</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {s.isi.map((i) => (
                  <li key={i} className="flex gap-2 text-base text-navy2">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-4xl mx-auto bg-gold/8 border border-gold/20 rounded-xl p-5">
          <p className="text-sm text-navy2">
            <strong className="text-gold">💡 Tips:</strong> Untuk proyek di kawasan padat seperti pusat kota Yogyakarta, sangat disarankan mengambil kedua section sekaligus. Risiko merusak properti tetangga dan cedera pejalan kaki sangat nyata di area konstruksi perkotaan.
          </p>
        </div>
      </section>

      {/* ── RISIKO PROYEK ────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Risiko Nyata</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Risiko yang Mengintai<br />Setiap Proyek di Yogyakarta
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {risikoProyek.map((r) => (
            <div key={r.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{r.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── KALKULATOR ──────────────────────────────────────────────────────── */}
      <KalkulatorCAR />

      {/* ── PROYEK TIPIKAL ───────────────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Referensi Proyek</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Jenis Proyek & Estimasi<br />Nilai Pertanggungan
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {proyekTipikal.map((p) => (
            <div key={p.label} className="bg-white rounded-card p-5 border border-black/5 flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">{p.icon}</span>
              <div>
                <div className="font-heading text-navy font-bold text-sm mb-1">{p.label}</div>
                <div className="text-xs text-[#64748B]">Nilai: <span className="font-semibold text-navy">{p.nilai}</span></div>
                <div className="text-xs text-[#64748B]">Durasi: <span className="font-semibold text-navy">{p.durasi}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TAHAP PROYEK ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Periode Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            CAR Melindungi<br />dari Awal hingga Serah Terima
          </h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {tahapProyek.map((t, i) => (
            <div key={t.tahap} className="bg-cream rounded-card p-5 border border-black/5 grid grid-cols-[auto_1fr] gap-4 items-center">
              <div className="bg-navy text-gold font-heading font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</div>
              <div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1">{t.tahap}</div>
                <p className="text-base leading-relaxed text-[#64748B]">{t.cover}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PENGECUALIAN POLIS (NEW - HIGH SEO VALUE) ────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Penting Diketahui</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Pengecualian dalam Polis CAR<br />yang Wajib Anda Pahami
          </h2>
          <p className="text-base text-[#64748B] max-w-[500px] mx-auto mt-3">
            Memahami pengecualian sama pentingnya dengan memahami cakupan. Ini yang tidak ditanggung oleh polis CAR standar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {pengecualianCAR.map((p) => (
            <div key={p.label} className="bg-white rounded-card p-6 border border-red-100">
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{p.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-4xl mx-auto bg-navy rounded-xl p-5 text-white">
          <p className="text-sm text-white/80">
            <strong className="text-gold">📋 Catatan:</strong> Beberapa pengecualian standar bisa diatasi dengan endorsement tambahan. Misalnya, risiko kesalahan desain bisa dilengkapi dengan Professional Indemnity Insurance. Konsultasikan kebutuhan spesifik proyek Anda kepada kami.
          </p>
        </div>
      </section>

      {/* ── PROSES KLAIM (NEW - HIGH SEO VALUE + HowTo Schema) ──────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Panduan Klaim</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Cara Klaim Asuransi CAR<br />agar Dana Cair Lebih Cepat
          </h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {prosesKlaimSteps.map((s, i) => (
            <div key={s.step} className="bg-cream rounded-card p-5 border border-black/5 grid grid-cols-[auto_1fr] gap-4 items-start">
              <div className="bg-gold text-navy font-heading font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 flex-shrink-0">{i + 1}</div>
              <div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1">{s.judul}</div>
                <p className="text-base leading-relaxed text-[#64748B]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-3xl mx-auto bg-gold/8 border border-gold/20 rounded-xl p-5">
          <p className="text-sm text-navy2">
            <strong className="text-gold">⚡ Penting:</strong> Satu-satunya penyebab klaim ditolak yang paling sering adalah tidak melapor dalam waktu 24–48 jam setelah kejadian. Simpan nomor WhatsApp kami di kontak darurat proyek.
          </p>
        </div>
      </section>

      {/* ── DOKUMEN PENGAJUAN (NEW) ───────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Persyaratan Tender</div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy mb-4">
              Dokumen Asuransi<br />yang Dibutuhkan Tender
            </h2>
            <p className="text-sm leading-relaxed text-[#64748B] mb-5">
              Tender pemerintah DIY dan proyek swasta besar umumnya mensyaratkan dokumen asuransi berikut:
            </p>
            <ul className="flex flex-col gap-3">
              {dokumenTender.map((d) => (
                <li key={d} className="flex gap-2.5 text-base text-navy2 leading-relaxed">
                  <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>{d}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-3">Dokumen Pengajuan Polis</div>
              <div className="flex flex-col gap-2">
                {dokumenPengajuan.map((d) => (
                  <div key={d.dok} className="bg-white rounded-lg p-3 border border-black/6">
                    <div className="font-semibold text-navy text-xs mb-0.5">{d.dok}</div>
                    <div className="text-xs text-[#64748B]">{d.ket}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-navy rounded-card p-7 text-white sticky top-24">
            <div className="text-3xl mb-3 text-center">⚡</div>
            <div className="font-heading text-gold text-base font-semibold text-center mb-3">Butuh Polis Cepat untuk Tender?</div>
            <p className="text-xs leading-relaxed text-white/75 text-center mb-5">
              Kami proses polis CAR dalam <strong className="text-gold">1–3 hari kerja</strong> dengan dokumen lengkap. Hubungi kami segera — jangan sampai tender terlewat karena dokumen asuransi belum siap.
            </p>
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="block text-center bg-gold text-navy py-3 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all mb-3"
            >
              💬 Proses CAR Sekarang
            </a>
            <div className="border-t border-white/10 pt-4 mt-2">
              <div className="text-white/50 text-xs text-center mb-3">Informasi yang dibutuhkan:</div>
              <ul className="text-xs text-white/65 flex flex-col gap-1.5">
                <li>✓ Nama & nilai kontrak proyek</li>
                <li>✓ Lokasi dan jenis pekerjaan</li>
                <li>✓ Durasi proyek</li>
                <li>✓ Limit TPL yang dibutuhkan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Pertanyaan Seputar<br />Asuransi CAR Yogyakarta
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
            <Link href="/asuransi-engineering/erection-all-risk" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚙️ Erection All Risk →</Link>
            <Link href="/asuransi-engineering/machinery-breakdown" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔧 Machinery Breakdown →</Link>
            <Link href="/asuransi-liability/employer-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
            <Link href="/asuransi-liability/public-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
            <Link href="/asuransi-kendaraan/dump-truk-niaga" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚛 Kendaraan Proyek →</Link>
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
            Proyek Berjalan, Tender Menang,<br />Polis CAR Sudah Siap
          </h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-2">
            Konsultasi gratis CAR untuk proyek Anda di Yogyakarta — dari review nilai pertanggungan hingga dokumen tender siap pakai.
          </p>
          <p className="text-white/45 text-xs mb-8">Melayani Yogyakarta, Sleman, Bantul, Kulon Progo, Gunung Kidul, dan sekitarnya</p>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
          >
            💬 Konsultasi CAR via WhatsApp
          </a>
        </div>
      </section>
    </EngineeringLayout>
  );
}
