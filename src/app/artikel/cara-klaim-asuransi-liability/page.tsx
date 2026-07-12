// app/artikel/cara-klaim-asuransi-liability/page.tsx
// TARGET KEYWORD: "cara klaim asuransi liability", "proses klaim public liability Indonesia"
// INTENT: How-to — pemilik bisnis yang sedang atau akan menghadapi tuntutan dari pihak ketiga
// SILO: Liability cluster → /public-liability, /employer-liability + artikel perbedaan jenis

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cara Klaim Asuransi Liability – Panduan Lengkap dari Laporan hingga Dana Cair | Asuransi Jogja",
  description:
    "Panduan step-by-step cara klaim asuransi liability (Public, Employer, Product) di Yogyakarta. Dokumen yang dibutuhkan, kesalahan yang harus dihindari, dan tips agar klaim tidak ditolak. Berdasarkan pengalaman nyata mendampingi bisnis di DIY.",
  keywords:
    "cara klaim asuransi liability, proses klaim public liability, klaim employer liability indonesia, dokumen klaim asuransi tanggung gugat, klaim ditolak liability jogja",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-liability",
  },
  openGraph: {
    title: "Cara Klaim Asuransi Liability – Panduan Lengkap dari Laporan hingga Dana Cair",
    description: "Panduan praktis cara klaim asuransi liability di Yogyakarta. Dokumen wajib, kesalahan fatal, dan tips agar proses klaim berjalan lancar.",
    url: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-liability",
    type: "article",
  },
};

const schemaArtikel = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransijogja.biz.id" },
        { "@type": "ListItem", position: 2, name: "Artikel", item: "https://asuransijogja.biz.id/artikel" },
        { "@type": "ListItem", position: 3, name: "Cara Klaim Asuransi Liability", item: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-liability" },
      ],
    },
    {
      "@type": "Article",
      headline: "Cara Klaim Asuransi Liability – Panduan Lengkap dari Laporan hingga Dana Cair",
      description: "Panduan step-by-step cara klaim asuransi liability di Yogyakarta termasuk dokumen yang dibutuhkan dan kesalahan yang harus dihindari.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Praktisi Asuransi" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-05-01",
      dateModified: "2025-06-01",
    },
    {
      "@type": "HowTo",
      name: "Cara Klaim Asuransi Liability",
      description: "Langkah-langkah mengajukan klaim asuransi liability agar proses berjalan lancar dan tidak ditolak.",
      totalTime: "P14D",
      step: [
        { "@type": "HowToStep", position: 1, name: "Jangan Akui Tanggung Jawab", text: "Hindari pernyataan atau tindakan apapun yang bisa diinterpretasikan sebagai pengakuan bersalah sebelum berkonsultasi dengan praktisi asuransi." },
        { "@type": "HowToStep", position: 2, name: "Laporkan dalam 24–48 Jam", text: "Hubungi praktisi asuransi segera setelah insiden terjadi atau setelah menerima surat tuntutan dari pihak ketiga." },
        { "@type": "HowToStep", position: 3, name: "Dokumentasikan Insiden", text: "Kumpulkan semua bukti: foto lokasi kejadian, laporan saksi, laporan medis, dan surat tuntutan yang diterima." },
        { "@type": "HowToStep", position: 4, name: "Serahkan ke Praktisi", text: "Praktisi meneruskan klaim ke perusahaan asuransi dan mendampingi proses investigasi oleh loss adjuster." },
        { "@type": "HowToStep", position: 5, name: "Negosiasi dan Penyelesaian", text: "Perusahaan asuransi bernegosiasi dengan penuntut. Tertanggung tidak perlu langsung berhadapan dengan tuntutan hukum." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa yang harus dilakukan pertama kali saat menerima surat tuntutan liability?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Langkah pertama: jangan balas surat tuntutan atau buat pernyataan apapun tanpa berkonsultasi dengan praktisi asuransi Anda. Hubungi praktisi dalam 24 jam. Salinan surat tuntutan, amplop berperangko, dan semua dokumentasi terkait insiden harus diserahkan kepada praktisi.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama proses klaim asuransi liability diselesaikan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Klaim liability yang tidak disengketakan biasanya selesai dalam 30–90 hari setelah semua dokumen lengkap. Klaim yang melibatkan proses hukum atau nilai besar bisa memakan waktu 6–24 bulan. Pendampingan praktisi yang berpengalaman terbukti mempercepat proses secara signifikan.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah klaim liability bisa ditolak meski polis aktif?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Alasan penolakan yang paling umum: pelaporan terlambat (di luar batas waktu yang ditentukan polis), insiden masuk kategori pengecualian polis, tertanggung sudah membuat pengakuan bersalah sebelum melapor, atau tertanggung sudah membayar klaim sendiri tanpa persetujuan insurer. Itulah mengapa langkah pertama selalu harus menghubungi praktisi — bukan langsung bereaksi terhadap penuntut.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const langkahKlaim = [
  {
    no: "01",
    ikon: "🚫",
    judul: "JANGAN: Akui Tanggung Jawab atau Buat Pernyataan",
    tipe: "warning",
    detail: "Ini adalah aturan nomor satu dalam klaim liability. Apapun yang terjadi — meski Anda merasa bersalah — jangan pernah membuat pernyataan tertulis atau lisan yang mengakui tanggung jawab sebelum berkonsultasi dengan praktisi. Kata-kata seperti 'maaf, itu salah kami' bisa digunakan sebagai bukti dalam proses hukum dan mempersulit posisi insurer.",
    warna: "bg-red-50 border-red-200",
    warnaNo: "bg-red-100 text-red-700",
    warnaIkon: "text-red-500",
  },
  {
    no: "02",
    ikon: "📞",
    judul: "Hubungi Praktisi Asuransi dalam 24–48 Jam",
    tipe: "action",
    detail: "Segera hubungi praktisi via WhatsApp begitu insiden terjadi atau begitu Anda menerima surat tuntutan dari pihak ketiga. Sebagian besar polis liability mensyaratkan pelaporan dalam batas waktu tertentu — melampaui batas ini bisa menjadi alasan penolakan klaim meski insiden terbukti tertanggung.",
    warna: "bg-blue-50 border-blue-200",
    warnaNo: "bg-blue-100 text-blue-700",
    warnaIkon: "text-blue-500",
  },
  {
    no: "03",
    ikon: "📸",
    judul: "Dokumentasikan Insiden Selengkap Mungkin",
    tipe: "action",
    detail: "Kumpulkan semua bukti yang relevan: foto dan video lokasi kejadian, identitas dan kontak saksi mata, laporan medis pihak yang cedera, estimasi kerusakan properti, dan salinan semua surat tuntutan yang diterima. Semakin lengkap dokumentasi, semakin kuat posisi klaim Anda.",
    warna: "bg-amber-50 border-amber-200",
    warnaNo: "bg-amber-100 text-amber-700",
    warnaIkon: "text-amber-500",
  },
  {
    no: "04",
    ikon: "📄",
    judul: "Serahkan Dokumen Klaim ke Praktisi",
    tipe: "action",
    detail: "Praktisi akan memandu pengisian formulir klaim dan meneruskan ke perusahaan asuransi. Jangan langsung menghubungi perusahaan asuransi tanpa melalui praktisi — jalur yang tepat memastikan klaim diproses dengan benar sejak awal.",
    warna: "bg-purple-50 border-purple-200",
    warnaNo: "bg-purple-100 text-purple-700",
    warnaIkon: "text-purple-500",
  },
  {
    no: "05",
    ikon: "🔍",
    judul: "Investigasi oleh Loss Adjuster",
    tipe: "process",
    detail: "Perusahaan asuransi menunjuk loss adjuster independen untuk menginvestigasi insiden — mewawancarai saksi, mengevaluasi bukti, dan menilai besaran klaim. Praktisi kami mendampingi proses ini untuk memastikan investigasi berjalan objektif dan kepentingan Anda terlindungi.",
    warna: "bg-slate-50 border-slate-200",
    warnaNo: "bg-slate-100 text-slate-700",
    warnaIkon: "text-slate-500",
  },
  {
    no: "06",
    ikon: "🤝",
    judul: "Negosiasi Penyelesaian",
    tipe: "process",
    detail: "Insurer bernegosiasi langsung dengan penuntut atau kuasa hukumnya. Anda tidak perlu berhadapan langsung dengan tuntutan hukum — insurer yang menanggung biaya pengacara dan proses negosiasi. Tertanggung tetap diinformasikan setiap perkembangan penting.",
    warna: "bg-green-50 border-green-200",
    warnaNo: "bg-green-100 text-green-700",
    warnaIkon: "text-green-500",
  },
  {
    no: "07",
    ikon: "✅",
    judul: "Pembayaran Klaim / Penyelesaian Tuntutan",
    tipe: "result",
    detail: "Setelah kesepakatan dicapai, pembayaran dilakukan oleh insurer kepada penuntut (bukan ke tertanggung). Tertanggung hanya menanggung deductible yang tercantum dalam polis. Untuk klaim yang diselesaikan melalui pengadilan, pembayaran dilakukan sesuai putusan.",
    warna: "bg-emerald-50 border-emerald-200",
    warnaNo: "bg-emerald-100 text-emerald-700",
    warnaIkon: "text-emerald-500",
  },
];

const dokumenPerJenis = [
  {
    jenis: "Public Liability",
    icon: "👥",
    dokumenUmum: [
      "Formulir klaim yang diisi lengkap",
      "Laporan insiden internal perusahaan",
      "Foto dan video lokasi kejadian",
      "Identitas dan kontak saksi mata",
      "Salinan surat tuntutan dari penuntut",
    ],
    dokumenTambahan: [
      "Laporan medis dan kuitansi biaya pengobatan pihak ketiga",
      "Laporan polisi jika ada (untuk insiden serius)",
      "Penilaian kerusakan properti pihak ketiga",
      "Bukti kepemilikan atau tanggung jawab atas lokasi kejadian",
    ],
    warna: "border-blue-200",
    warnaBadge: "bg-blue-50 text-blue-700",
  },
  {
    jenis: "Employer Liability",
    icon: "👷",
    dokumenUmum: [
      "Formulir klaim yang diisi lengkap",
      "Laporan kecelakaan kerja internal",
      "Laporan ke BPJS Ketenagakerjaan (Form KK)",
      "Bukti pembayaran manfaat BPJS",
      "Salinan tuntutan dari karyawan atau ahli waris",
    ],
    dokumenTambahan: [
      "Kontrak kerja karyawan yang terlibat",
      "Rekam medis dan riwayat pengobatan",
      "Laporan investigasi kecelakaan kerja",
      "Dokumen analisis penyebab kecelakaan (root cause)",
    ],
    warna: "border-amber-200",
    warnaBadge: "bg-amber-50 text-amber-700",
  },
  {
    jenis: "Product Liability",
    icon: "📦",
    dokumenUmum: [
      "Formulir klaim yang diisi lengkap",
      "Sampel produk yang diduga menyebabkan kerugian",
      "Bukti pembelian produk oleh penuntut",
      "Salinan tuntutan dari konsumen",
      "Sertifikat halal / BPOM / SNI produk (jika ada)",
    ],
    dokumenTambahan: [
      "Laporan uji laboratorium produk",
      "Catatan produksi batch yang terlibat",
      "Laporan medis konsumen yang mengalami kerugian",
      "Rekaman CCTV di titik penjualan (jika relevan)",
    ],
    warna: "border-green-200",
    warnaBadge: "bg-green-50 text-green-700",
  },
];

const kesalahanFatal = [
  {
    kesalahan: "Mengakui kesalahan sebelum melapor ke asuransi",
    dampak: "Insurer bisa menolak klaim karena Anda sudah 'mengakui' tanggung jawab tanpa persetujuan mereka",
    solusi: "Tunjukkan empati tanpa mengakui kesalahan. Katakan 'kami sangat menyesal kejadian ini terjadi' — bukan 'ini salah kami'.",
  },
  {
    kesalahan: "Terlambat melapor — di atas 48 jam setelah insiden",
    dampak: "Banyak polis mencantumkan batas waktu pelaporan. Terlambat = alasan penolakan klaim yang sah",
    solusi: "Hubungi praktisi segera, bahkan jika belum ada tuntutan resmi. Lebih baik lapor terlalu awal daripada terlambat.",
  },
  {
    kesalahan: "Membayar klaim sendiri tanpa persetujuan insurer",
    dampak: "Insurer bisa menolak reimburse karena pembayaran dilakukan tanpa otorisasi mereka",
    solusi: "Jangan bayar apapun kepada penuntut — bahkan sebagai 'goodwill' — sebelum mendapat persetujuan tertulis dari insurer.",
  },
  {
    kesalahan: "Menghancurkan atau mengubah bukti di lokasi kejadian",
    dampak: "Dianggap menghalangi investigasi — klaim bisa ditolak penuh dan menimbulkan masalah hukum baru",
    solusi: "Biarkan lokasi kejadian apa adanya hingga loss adjuster melakukan survei, kecuali ada alasan keselamatan yang mendesak.",
  },
  {
    kesalahan: "Merespons surat tuntutan tanpa konsultasi hukum/asuransi",
    dampak: "Respons yang salah bisa diinterpretasikan sebagai pengakuan atau bisa melemahkan posisi hukum Anda",
    solusi: "Teruskan semua surat tuntutan ke praktisi. Jangan balas langsung — biarkan insurer yang menangani komunikasi dengan penuntut.",
  },
];

const timelineKlaim = [
  { hari: "H+0", aksi: "Insiden terjadi atau surat tuntutan diterima", tipe: "start" },
  { hari: "H+1", aksi: "Hubungi praktisi — laporkan insiden", tipe: "action" },
  { hari: "H+2–7", aksi: "Kumpulkan dan serahkan dokumen lengkap", tipe: "action" },
  { hari: "H+7–14", aksi: "Insurer menunjuk loss adjuster — investigasi dimulai", tipe: "process" },
  { hari: "H+14–30", aksi: "Investigasi selesai — insurer evaluasi klaim", tipe: "process" },
  { hari: "H+30–90", aksi: "Negosiasi dengan penuntut — klaim tidak disengketakan", tipe: "result" },
  { hari: "3–24 bulan", aksi: "Proses hukum jika klaim disengketakan atau nilai besar", tipe: "note" },
];

const faqItems = [
  {
    q: "Apakah saya bisa memilih pengacara sendiri dalam proses klaim liability?",
    a: "Umumnya tidak untuk klaim standar — insurer memiliki tim pengacara atau panel hukum yang mereka gunakan. Namun beberapa polis premium memberikan pilihan kepada tertanggung untuk menentukan pengacara sendiri (freedom of choice of lawyer clause), terutama untuk klaim besar atau yang melibatkan konflik kepentingan. Diskusikan klausul ini saat membeli polis jika Anda memiliki preferensi firma hukum tertentu.",
  },
  {
    q: "Apa yang terjadi jika tuntutan melebihi limit polis saya?",
    a: "Jika nilai tuntutan melebihi limit liability yang tercantum dalam polis, insurer membayar hingga batas limit tersebut. Selisihnya menjadi tanggung jawab tertanggung. Itulah mengapa pemilihan limit liability yang memadai sejak awal sangat penting — konsultasikan dengan kami untuk menentukan limit yang sesuai dengan skala dan risiko bisnis Anda.",
  },
  {
    q: "Apakah klaim liability mempengaruhi premi di tahun berikutnya?",
    a: "Bisa ya, bisa tidak — tergantung kebijakan insurer dan jumlah klaim yang diajukan. Satu klaim kecil biasanya tidak mempengaruhi premi renewal secara signifikan. Namun beberapa klaim dalam satu periode, atau satu klaim bernilai besar, bisa mengakibatkan kenaikan premi atau bahkan non-renewal. Ini adalah salah satu alasan mengapa pencegahan insiden (risk management) sama pentingnya dengan memiliki asuransi.",
  },
  {
    q: "Bagaimana jika penuntut langsung menghubungi saya, bukan melalui pengacara?",
    a: "Tetap terapkan prinsip yang sama: tunjukkan empati, dengarkan, tapi jangan buat komitmen finansial apapun. Sampaikan bahwa Anda akan menindaklanjuti dan segera hubungi praktisi. Penyelesaian langsung (di luar jalur asuransi) boleh saja dilakukan, tapi harus dengan persetujuan insurer terlebih dahulu jika nilai penyelesaian akan diklaim ke polis.",
  },
  {
    q: "Apakah asuransi liability menanggung klaim yang terjadi sebelum polis terbit?",
    a: "Tidak untuk insiden yang sudah diketahui sebelum polis terbit. Polis liability standar bersifat 'claims-made' atau 'occurrence-based'. Untuk claims-made: klaim harus diajukan selama masa berlaku polis. Untuk occurrence-based: insiden harus terjadi selama masa berlaku polis. Konsultasikan jenis basis polis Anda dengan praktisi untuk memastikan tidak ada gap perlindungan.",
  },
];

export default function ArtikelCaraKlaimLiability() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }} />
      <Header />
      <div className="pt-[68px]">

        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Cara Klaim Asuransi Liability</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-liability" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🛡️ Asuransi Liability
              </Link>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/40 text-xs">Panduan Klaim</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Cara Klaim Asuransi Liability —<br />
              <em className="not-italic text-gold">Panduan Lengkap<br />dari Laporan hingga Dana Cair</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Klaim liability berbeda dari klaim asuransi lain. Ada aturan yang jika dilanggar di langkah pertama, seluruh klaim bisa gugur — meski polis Anda aktif dan insiden jelas-jelas tertanggung.
            </p>
            <div className="flex gap-3 text-xs text-white/40 flex-wrap">
              <span>✍️ Rio MD — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 7 menit</span>
            </div>
          </div>
        </section>

        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-6">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Aturan Paling Penting:</strong> Begitu insiden terjadi atau surat tuntutan diterima — <strong>jangan buat pernyataan apapun, jangan bayar apapun</strong>, dan <strong>hubungi praktisi asuransi dalam 24 jam</strong>. Tiga hal ini menentukan apakah klaim Anda berhasil atau gugur sebelum dimulai.
            </p>
          </div>

          {/* Kotak peringatan khusus */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-10 flex gap-3">
            <span className="text-lg flex-shrink-0">⚠️</span>
            <p className="text-sm text-red-700 leading-relaxed">
              <strong>Perhatian khusus:</strong> Klaim liability adalah proses hukum, bukan hanya proses administrasi. Setiap kata yang Anda ucapkan atau tindakan yang Anda ambil bisa menjadi bukti. Berbeda dengan klaim kebakaran atau kargo, klaim liability memerlukan strategi dari langkah pertama.
            </p>
          </div>

          {/* 7 Langkah */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            7 Langkah Klaim Asuransi Liability yang Benar
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Urutan ini sangat penting. Jangan melompat ke langkah selanjutnya sebelum langkah sebelumnya selesai:
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {langkahKlaim.map((l) => (
              <div key={l.no} className={`rounded-xl p-4 border flex gap-4 ${l.warna}`}>
                <div className="flex-shrink-0 text-center min-w-[40px]">
                  <div className={`text-[0.65rem] font-bold px-2 py-1 rounded-lg mb-1.5 text-center ${l.warnaNo}`}>{l.no}</div>
                  <div className="text-xl">{l.ikon}</div>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">{l.judul}</p>
                  <p className="text-xs text-[#64748B] leading-relaxed">{l.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Estimasi Timeline Proses Klaim
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-5">
            Seberapa lama proses klaim liability berlangsung tergantung kompleksitas kasus dan apakah ada sengketa:
          </p>
          <div className="flex flex-col gap-0 mb-10">
            {timelineKlaim.map((t, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[0.6rem] font-bold flex-shrink-0 z-10 ${
                    t.tipe === "start" ? "bg-navy text-white" :
                    t.tipe === "action" ? "bg-gold text-navy" :
                    t.tipe === "process" ? "bg-navy2 text-white" :
                    t.tipe === "result" ? "bg-green-600 text-white" :
                    "bg-[#94A3B8] text-white"
                  }`}>
                    {i + 1}
                  </div>
                  {i < timelineKlaim.length - 1 && <div className="w-0.5 bg-black/10 flex-1 my-1" style={{ minHeight: "20px" }} />}
                </div>
                <div className="pb-4 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-[0.65rem] font-bold px-2.5 py-1 rounded-full ${
                      t.tipe === "start" ? "bg-navy/8 text-navy" :
                      t.tipe === "action" ? "bg-gold/15 text-amber-700" :
                      t.tipe === "process" ? "bg-navy2/8 text-navy2" :
                      t.tipe === "result" ? "bg-green-50 text-green-700" :
                      "bg-slate-100 text-slate-600"
                    }`}>
                      {t.hari}
                    </span>
                    <span className="text-sm text-navy2 leading-snug">{t.aksi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dokumen per jenis */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Dokumen Klaim per Jenis Liability
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Dokumen yang dibutuhkan berbeda tergantung jenis polis. Siapkan semua ini sebelum menghubungi praktisi:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {dokumenPerJenis.map((d) => (
              <div key={d.jenis} className={`bg-white rounded-card border ${d.warna} overflow-hidden`}>
                <div className="px-5 py-3.5 bg-cream/60 border-b border-black/6 flex items-center gap-2.5">
                  <span className="text-lg">{d.icon}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${d.warnaBadge}`}>{d.jenis}</span>
                </div>
                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-2">Dokumen Utama</p>
                    <ul className="flex flex-col gap-1.5">
                      {d.dokumenUmum.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-navy font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                          <span className="text-xs text-navy2 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-2">Dokumen Pendukung</p>
                    <ul className="flex flex-col gap-1.5">
                      {d.dokumenTambahan.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gold font-bold text-xs flex-shrink-0 mt-0.5">+</span>
                          <span className="text-xs text-[#64748B] leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kesalahan fatal */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            5 Kesalahan Fatal yang Membuat Klaim Ditolak
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Berdasarkan pengalaman mendampingi klaim di Yogyakarta — ini adalah kesalahan yang paling sering berakibat fatal:
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[30%]">Kesalahan</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[30%]">Dampak</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold rounded-tr-xl w-[40%]">✓ Yang Seharusnya Dilakukan</th>
                </tr>
              </thead>
              <tbody>
                {kesalahanFatal.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 font-semibold text-navy text-xs align-top">{row.kesalahan}</td>
                    <td className="p-3.5 text-red-600 text-xs leading-relaxed align-top">{row.dampak}</td>
                    <td className="p-3.5 text-[#64748B] text-sm leading-relaxed align-top">{row.solusi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Sedang menghadapi tuntutan dari pihak ketiga?</div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-4">
              Hubungi kami segera via WhatsApp — jangan buat keputusan apapun sebelum berkonsultasi. Kami bantu pastikan langkah pertama Anda benar.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Konsultasi Darurat via WA
              </a>
              <Link href="/asuransi-liability" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                🛡️ Lihat Produk Liability →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">Pertanyaan Seputar Proses Klaim Liability</h2>
          <div className="flex flex-col divide-y divide-black/8 mb-10">
            {faqItems.map((f, i) => (
              <details key={i} className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  {f.q}
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#64748B] pb-3">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Internal Links */}
          <div className="border-t border-black/8 pt-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">Produk & Artikel Terkait</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/asuransi-liability/public-liability", icon: "👥", judul: "Public Liability", desc: "Detail cakupan, premi, dan panduan mendaftar" },
                { href: "/asuransi-liability/employer-liability", icon: "👷", judul: "Employer Liability", desc: "Perlindungan dari tuntutan hukum tenaga kerja" },
                { href: "/artikel/perbedaan-jenis-asuransi-liability", icon: "📊", judul: "Perbedaan Jenis Liability", desc: "Public vs Employer vs Product vs B3 — panduan memilih" },
                { href: "/artikel/contoh-kasus-gugatan-liability-bisnis", icon: "⚖️", judul: "Contoh Kasus Gugatan Liability", desc: "Kasus nyata dan bagaimana asuransi menanganinya" },
                { href: "/asuransi-liability/product-liability", icon: "📦", judul: "Product Liability", desc: "Proteksi produsen dari tuntutan konsumen" },
                { href: "/artikel/asuransi-umkm-jogja", icon: "🏪", judul: "Panduan Asuransi UMKM Jogja", desc: "Semua jenis asuransi yang dibutuhkan pelaku usaha" },
              ].map((a) => (
                <Link key={a.href} href={a.href} className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">{a.icon}</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">{a.judul}</div>
                    <div className="text-xs text-[#64748B]">{a.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Bottom */}
        <section className="py-16 px-[5vw] bg-navy text-center relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)" }} />
          <div className="relative z-10">
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
              Hadapi Tuntutan Liability<br />dengan Pendampingan yang Tepat
            </h2>
            <p className="text-white/75 text-sm max-w-[420px] mx-auto mb-8">
              Jangan hadapi tuntutan hukum sendirian. Kami dampingi seluruh proses klaim — dari pelaporan pertama hingga penyelesaian akhir.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
                💬 Konsultasi via WhatsApp
              </a>
              <Link href="/asuransi-liability" className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all">
                🛡️ Lihat Produk Liability
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
