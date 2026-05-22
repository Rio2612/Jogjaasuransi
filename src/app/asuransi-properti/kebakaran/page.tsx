import type { Metadata } from "next";
import Link from "next/link";
import PropertyLayout from "@/components/properti/PropertyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kebakaran Jogja – Rumah, Kos, Ruko & Bangunan Komersial | Asuransi Jogja",
  description:
    "Asuransi kebakaran di Yogyakarta untuk rumah tinggal, kos-kosan, ruko, gudang, dan bangunan komersial. Jaminan FLEXAS, perluasan banjir & gempa, premi terjangkau, klaim mudah. Konsultasi gratis.",
  keywords:
    "asuransi kebakaran jogja, asuransi kebakaran rumah yogyakarta, asuransi kebakaran kos jogja, asuransi kebakaran ruko yogyakarta, asuransi kebakaran gedung jogja, jaminan FLEXAS yogyakarta, asuransi kebakaran gudang jogja, premi asuransi kebakaran yogyakarta, asuransi korsleting listrik yogyakarta, asuransi kebakaran OJK jogja",
  alternates: {
    canonical: "https://asuransijogja.biz.id/asuransi-properti/kebakaran",
  },
  openGraph: {
    title: "Asuransi Kebakaran Jogja – Rumah, Kos, Ruko & Bangunan Komersial",
    description:
      "Lindungi properti Anda dari kebakaran di Yogyakarta. Jaminan FLEXAS, perluasan banjir & gempa, premi mulai ratusan ribu per tahun.",
    url: "https://asuransijogja.biz.id/asuransi-properti/kebakaran",
    type: "website",
  },
};

// ─── SCHEMA ──────────────────────────────────────────────────────────────────
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa saja yang dijamin asuransi kebakaran standar (FLEXAS)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asuransi kebakaran standar menjamin 5 risiko yang disebut FLEXAS: Fire (kebakaran dari sumber apa pun kecuali yang dikecualikan), Lightning (sambaran petir langsung), Explosion (ledakan gas atau instalasi), Aircraft impact (jatuhnya pesawat atau benda dari udara), dan Smoke (kerusakan akibat asap dari kebakaran). Banjir dan gempa bumi TIDAK termasuk dalam jaminan dasar ini.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa premi asuransi kebakaran untuk rumah di Yogyakarta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Premi dihitung berdasarkan nilai bangunan dan kelas konstruksi. Untuk rumah beton (Kelas 1) dengan nilai bangunan Rp 300 juta, premi dasar sekitar Rp 229.200 per tahun. Dengan penambahan perluasan gempa (Zona 4) dan banjir, total estimasi sekitar Rp 850.000–1.000.000 per tahun. Sangat terjangkau dibanding risiko kehilangan aset ratusan juta rupiah.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan Kelas 1, 2, dan 3 dalam asuransi kebakaran?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kelas konstruksi menentukan tingkat risiko dan besarnya premi. Kelas 1 adalah bangunan beton/bata dengan atap genteng atau beton — premi paling rendah karena paling tahan api. Kelas 2 adalah semi-permanen, campuran beton dan kayu — premi lebih tinggi. Kelas 3 adalah bangunan kayu atau bambu — premi tertinggi karena paling mudah terbakar.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah isi rumah (perabot, elektronik) bisa ikut diasuransikan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Nilai isi bangunan — perabot, elektronik, pakaian, dan barang lain — dapat diasuransikan dalam polis yang sama atau sebagai tambahan. Nilai isi dihitung dan diasuransikan terpisah dari nilai bangunan. Untuk rumah yang baru direnovasi atau dengan peralatan elektronik banyak, mengasuransikan isi rumah sangat dianjurkan.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara mengajukan klaim asuransi kebakaran?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Langkah klaim: (1) Pastikan keselamatan seluruh penghuni; (2) Hubungi Pemadam Kebakaran dan minta surat keterangan kebakaran; (3) Laporkan ke konsultan atau perusahaan asuransi maksimal 3×24 jam setelah kejadian; (4) Dokumentasikan kerusakan dengan foto dan video sebelum ada pembersihan; (5) Kumpulkan dokumen: polis, KTP, IMB/PBG, foto kerusakan, dan surat keterangan damkar; (6) Tunggu proses survei dari adjustor; (7) Terima ganti rugi setelah persetujuan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah kebakaran yang disebabkan oleh kelalaian penghuni tetap bisa diklaim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umumnya ya, selama tidak ada unsur kesengajaan dari pihak tertanggung (pemilik properti). Kebakaran akibat kompor lupa dimatikan, lilin yang ditinggal, atau rokok yang tidak dipadamkan oleh penghuni kos atau penyewa umumnya masih dapat diklaim. Yang dikecualikan adalah kerusakan yang dilakukan atau disengaja oleh tertanggung sendiri.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada masa tunggu setelah polis asuransi kebakaran terbit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asuransi kebakaran standar umumnya tidak memiliki masa tunggu — polis aktif langsung saat diterbitkan. Namun untuk perluasan banjir, beberapa perusahaan asuransi menerapkan masa tunggu 3–14 hari. Ini berarti Anda tidak bisa membeli perluasan banjir saat banjir sudah terjadi atau sudah diprediksi akan segera terjadi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah kos-kosan yang disewakan kepada mahasiswa bisa diasuransikan dengan polis kebakaran biasa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kos-kosan bisa diasuransikan dengan asuransi kebakaran. Tidak seperti vila sewa harian (Airbnb) yang perlu endorsement komersial khusus, kos-kosan residensial umumnya masuk dalam kategori yang dapat dijamin polis kebakaran standar. Namun, pastikan status penggunaan properti dikomunikasikan dengan jelas ke perusahaan asuransi saat pembelian polis.",
      },
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const flexasItems = [
  {
    icon: "🔥",
    label: "Fire",
    sublabel: "Kebakaran",
    desc: "Kebakaran dari sumber apa pun kecuali yang dikecualikan — termasuk korsleting listrik, kompor gas, dan kontak api dari luar.",
  },
  {
    icon: "⚡",
    label: "Lightning",
    sublabel: "Petir",
    desc: "Sambaran petir langsung pada bangunan yang menyebabkan kerusakan struktural atau kebakaran.",
  },
  {
    icon: "💥",
    label: "Explosion",
    sublabel: "Ledakan",
    desc: "Ledakan tabung gas LPG, instalasi boiler, mesin, atau sumber tekanan lainnya.",
  },
  {
    icon: "✈️",
    label: "Aircraft",
    sublabel: "Pesawat Jatuh",
    desc: "Jatuhnya pesawat terbang, helikopter, atau benda yang jatuh dari pesawat pada bangunan.",
  },
  {
    icon: "💨",
    label: "Smoke",
    sublabel: "Asap",
    desc: "Kerusakan bangunan dan isi akibat asap yang dihasilkan dari kebakaran, bukan dari proses produksi normal.",
  },
];

const produkItems = [
  {
    icon: "🏡",
    title: "Asuransi Kebakaran Rumah Tinggal",
    desc: "Rumah adalah investasi terbesar kebanyakan keluarga. Satu insiden kebakaran bisa menghapus aset seumur hidup. Dengan premi mulai dari Rp 200 ribuan per tahun, risiko ini bisa dialihkan.",
    manfaat: [
      "Penggantian kerugian akibat kebakaran, petir, ledakan, dan asap (FLEXAS)",
      "Pilihan pertanggungan bangunan saja, atau bangunan + isi rumah",
      "Perluasan banjir dan gempa bumi tersedia untuk kawasan rawan di DIY",
      "Premi sangat terjangkau, mulai dari Rp 200 ribuan per tahun",
      "Tersedia untuk rumah milik sendiri maupun yang dikontrakkan kepada pihak lain",
    ],
    cocok: "Pemilik rumah tinggal, debitur KPR, pemilik properti yang dikontrakkan",
    link: { href: "/artikel/asuransi-rumah-tinggal-jogja", label: "Baca panduan lengkap asuransi rumah tinggal di Jogja →" },
  },
  {
    icon: "🏘️",
    title: "Asuransi Kebakaran Kos-kosan Jogja",
    desc: "Yogyakarta adalah kota pelajar dengan puluhan ribu unit kos aktif. Sebagai pemilik kos, Anda bertanggung jawab atas keselamatan bangunan yang ditempati oleh penghuni yang berganti setiap tahun.",
    manfaat: [
      "Pertanggungan bangunan kos dari kebakaran dan seluruh risiko FLEXAS",
      "Fleksibel untuk kos skala kecil (1–5 kamar) hingga besar (20+ kamar)",
      "Bisa digabung dengan asuransi perabot dan inventaris kos",
      "Khusus kawasan Jogja: perluasan gempa dan angin ribut tersedia",
      "Penerbitan polis cepat — 1–2 hari kerja untuk properti standar",
    ],
    cocok: "Pemilik kos di Sleman, Bantul, Kota Yogyakarta, Gunungkidul, dan Kulon Progo",
    link: { href: "/artikel/asuransi-kos-jogja", label: "Baca panduan lengkap asuransi kos-kosan di Jogja →" },
  },
  {
    icon: "🏪",
    title: "Asuransi Kebakaran Ruko & Bangunan Komersial",
    desc: "Ruko adalah jantung bisnis Anda. Kebakaran tidak hanya merusak bangunan — ia juga menghentikan operasional, memusnahkan stok, dan menimbulkan kerugian usaha yang jauh melampaui nilai fisik bangunan.",
    manfaat: [
      "Jaminan bangunan ruko, stok barang dagangan, dan peralatan usaha",
      "Tersedia perluasan Business Interruption untuk mengganti omzet yang hilang",
      "Proteksi untuk deretan ruko (beberapa kavling) dalam satu polis",
      "Penanganan klaim prioritas untuk bisnis yang bergantung pada kontinuitas",
      "Bisa dikombinasikan dengan Public Liability untuk perlindungan penuh",
    ],
    cocok: "Pemilik ruko, toko, minimarket, apotek, bengkel, restoran, laundry, dan usaha komersial lainnya",
    link: { href: "/asuransi-properti/property-all-risk", label: "Untuk ruko bernilai tinggi, pertimbangkan Property All Risk →" },
  },
  {
    icon: "🏭",
    title: "Asuransi Kebakaran Gudang & Properti Industri",
    desc: "Gudang menyimpan aset yang sering bernilai jauh lebih besar dari nilai bangunannya. Risiko kebakaran pada properti industri juga cenderung lebih tinggi karena bahan-bahan yang disimpan.",
    manfaat: [
      "Pertanggungan bangunan gudang dari kebakaran dan FLEXAS",
      "Dapat mencakup stok barang dan bahan baku dalam gudang",
      "Rate premi disesuaikan dengan jenis barang yang disimpan",
      "Tersedia untuk gudang konvensional maupun cold storage",
      "Bisa dikombinasikan dengan asuransi kargo untuk proteksi lengkap rantai pasok",
    ],
    cocok: "Pemilik gudang, distributor, importir, produsen, dan pengelola logistik di Yogyakarta dan sekitarnya",
    link: { href: "/asuransi-properti/property-all-risk", label: "Gudang bernilai tinggi disarankan menggunakan Property All Risk →" },
  },
];

const penyebabKebakaran = [
  {
    rank: "01",
    label: "Korsleting Listrik",
    persen: "40%",
    desc: "Instalasi listrik lama, kabel terbuka, overloading, dan penggunaan perangkat tidak SNI menjadi penyebab utama kebakaran properti di perkotaan.",
    bar: "w-[95%]",
  },
  {
    rank: "02",
    label: "Kebakaran Kompor & Gas",
    persen: "25%",
    desc: "Kompor gas yang tidak dimatikan, selang LPG bocor, dan regulator tidak standar adalah penyebab umum kebakaran di rumah tinggal dan warung.",
    bar: "w-[60%]",
  },
  {
    rank: "03",
    label: "Pembakaran Sampah",
    persen: "15%",
    desc: "Pembakaran sampah yang tidak terkontrol, terutama di musim kemarau ketika angin kencang bisa menyebarkan api ke properti terdekat.",
    bar: "w-[36%]",
  },
  {
    rank: "04",
    label: "Rokok & Sumber Api Kecil",
    persen: "12%",
    desc: "Rokok yang tidak dimatikan sempurna, lilin, atau kemenyan yang ditinggal adalah penyebab yang sering diabaikan namun berdampak besar.",
    bar: "w-[29%]",
  },
  {
    rank: "05",
    label: "Lainnya (Petir, dll.)",
    persen: "8%",
    desc: "Sambaran petir, anak bermain api, dan penyebab tidak teridentifikasi lainnya.",
    bar: "w-[19%]",
  },
];

const perluasanItems = [
  {
    icon: "🌊",
    label: "Banjir",
    tersedia: true,
    detail: "Sangat dianjurkan untuk properti di bantaran sungai atau kawasan dengan drainase buruk di Yogyakarta.",
  },
  {
    icon: "🌋",
    label: "Gempa Bumi",
    tersedia: true,
    detail: "Wajib untuk seluruh DIY. Polis gempa terpisah untuk Kelas 1 (beton). Zona 4 dan Zona 5 (Bantul).",
  },
  {
    icon: "💨",
    label: "Angin Topan & Puting Beliung",
    tersedia: true,
    detail: "Penting untuk properti di Bantul dan Kulon Progo yang rentan puting beliung saat pancaroba.",
  },
  {
    icon: "🌊",
    label: "Kerusuhan & Huru-hara",
    tersedia: true,
    detail: "Perluasan RSMD (Riot, Strike, Malicious Damage) tersedia untuk properti di kawasan bisnis.",
  },
  {
    icon: "🏔️",
    label: "Tanah Longsor",
    tersedia: true,
    detail: "Tersedia untuk properti di kawasan perbukitan Kulon Progo, Gunungkidul, atau lereng Merapi.",
  },
  {
    icon: "⚡",
    label: "Listrik (Electrical Damage)",
    tersedia: true,
    detail: "Kerusakan peralatan elektronik akibat tegangan listrik tidak stabil, tersedia di beberapa produk.",
  },
];

const prosesItems = [
  {
    step: "01",
    icon: "💬",
    label: "Konsultasi",
    desc: "Ceritakan jenis properti, lokasi, nilai bangunan, dan kebutuhan perluasan. Bisa via WhatsApp — langsung respons.",
  },
  {
    step: "02",
    icon: "📋",
    label: "Analisis & Rekomendasi",
    desc: "Kami bantu hitung nilai pertanggungan yang tepat, analisis risiko lokasi, dan rekomendasikan produk yang sesuai.",
  },
  {
    step: "03",
    icon: "📄",
    label: "Penawaran Resmi",
    desc: "Terima penawaran dari beberapa perusahaan asuransi terpercaya berlisensi OJK, lengkap dengan penjelasan klausul.",
  },
  {
    step: "04",
    icon: "✅",
    label: "Polis Terbit",
    desc: "Polis resmi terbit dalam 1–2 hari kerja untuk properti standar. Langsung terlindungi sejak hari penerbitan.",
  },
];

const faqItems = [
  {
    q: "Apa saja yang dijamin asuransi kebakaran standar (FLEXAS)?",
    a: "Asuransi kebakaran standar menjamin 5 risiko FLEXAS: Fire (kebakaran), Lightning (petir), Explosion (ledakan), Aircraft impact (pesawat jatuh), dan Smoke (asap dari kebakaran). Banjir, gempa bumi, angin topan, dan kerusuhan TIDAK termasuk dalam jaminan dasar — harus ditambahkan sebagai perluasan.",
  },
  {
    q: "Berapa premi asuransi kebakaran untuk rumah di Yogyakarta?",
    a: "Untuk rumah beton (Kelas 1) dengan nilai bangunan Rp 300 juta, premi dasar sekitar Rp 229.200 per tahun. Dengan perluasan gempa Zona 4 dan banjir, total estimasi sekitar Rp 850.000–1.000.000 per tahun. Sangat terjangkau dibanding risiko kehilangan aset ratusan juta rupiah.",
  },
  {
    q: "Apa perbedaan Kelas 1, 2, dan 3 dalam asuransi kebakaran?",
    a: "Kelas konstruksi menentukan tingkat risiko dan premi. Kelas 1: bangunan beton/bata dengan atap genteng atau beton — premi paling rendah. Kelas 2: semi-permanen, campuran beton dan kayu — premi menengah. Kelas 3: bangunan kayu atau bambu — premi tertinggi karena paling mudah terbakar. Sebagian besar rumah tinggal di Yogyakarta masuk Kelas 1.",
  },
  {
    q: "Apakah isi rumah (perabot, elektronik) bisa ikut diasuransikan?",
    a: "Ya. Perabot, elektronik, pakaian, dan barang lain dapat diasuransikan dalam polis yang sama atau sebagai tambahan. Nilai isi dihitung dan diasuransikan terpisah dari nilai bangunan. Untuk rumah dengan peralatan elektronik lengkap atau furnitur premium, mengasuransikan isi sangat dianjurkan.",
  },
  {
    q: "Bagaimana cara mengajukan klaim asuransi kebakaran?",
    a: "Pastikan keselamatan penghuni terlebih dahulu. Hubungi Pemadam Kebakaran dan minta surat keterangan. Laporkan ke konsultan atau perusahaan asuransi maksimal 3×24 jam. Dokumentasikan kerusakan dengan foto/video sebelum ada pembersihan. Siapkan dokumen: polis, KTP, IMB/PBG, dan surat keterangan damkar. Konsultan kami mendampingi seluruh proses klaim.",
  },
  {
    q: "Apakah kebakaran karena kelalaian penghuni kos tetap bisa diklaim?",
    a: "Umumnya ya, selama tidak ada unsur kesengajaan dari pihak tertanggung (pemilik properti). Kebakaran akibat kompor lupa dimatikan atau lilin yang ditinggal oleh penghuni kos umumnya masih dapat diklaim. Yang dikecualikan adalah kerusakan yang dilakukan secara sengaja oleh tertanggung sendiri.",
  },
  {
    q: "Apakah ada masa tunggu setelah polis kebakaran terbit?",
    a: "Asuransi kebakaran standar umumnya aktif langsung saat polis diterbitkan — tidak ada masa tunggu. Namun untuk perluasan banjir, beberapa perusahaan asuransi menerapkan masa tunggu 3–14 hari. Jadi jangan menunggu banjir sudah terlihat untuk baru membeli perluasan.",
  },
  {
    q: "Apakah ruko yang disewakan ke penyewa bisa diasuransikan?",
    a: "Ya. Polis kebakaran untuk ruko komersial mencakup bangunan yang disewakan kepada penyewa. Sebagai pemilik, Anda yang menjadi tertanggung dalam polis. Jika penyewa menyebabkan kebakaran tanpa unsur kesengajaan, klaim pada umumnya tetap dapat diproses. Pastikan status kepemilikan dan penggunaan dikomunikasikan dengan jelas saat pembelian polis.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function KebakeranPage() {
  return (
    <PropertyLayout
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Asuransi Kebakaran" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)",
          }}
        />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">
          🔥
        </div>
        <div className="relative z-10 max-w-3xl">
          <Link
            href="/asuransi-properti"
            className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline"
          >
            ← Asuransi Properti
          </Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Asuransi Kebakaran · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Kebakaran
            <br />
            <em className="not-italic text-gold">Rumah, Kos &amp; Ruko</em>
            <br />
            di Yogyakarta
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[540px] mb-8">
            40% kebakaran properti di Indonesia disebabkan korsleting listrik. Satu
            kejadian cukup untuk menghapus aset yang dibangun bertahun-tahun dalam
            hitungan menit. Dengan premi mulai ratusan ribu per tahun, risiko ini
            bisa dialihkan sepenuhnya ke perusahaan asuransi.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline"
            >
              💬 Konsultasi Gratis
            </a>
            <a
              href="#produk"
              className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline"
            >
              Lihat Produk →
            </a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { num: "FLEXAS", lbl: "5 Jaminan Dasar" },
              { num: "1–2 Hari", lbl: "Proses Polis" },
              { num: "Gratis", lbl: "Konsultasi & Analisis" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-heading text-gold text-xl font-bold">{s.num}</div>
                <div className="text-white/45 text-xs mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEXAS ───────────────────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
              Standar Jaminan
            </div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
              Standar FLEXAS —<br />5 Risiko yang Selalu Dijamin
            </h2>
            <p className="text-base text-[#64748B] max-w-[480px] mx-auto mt-3">
              Setiap polis asuransi kebakaran di Indonesia minimal menjamin 5 risiko ini
              sesuai standar AAUI (Asosiasi Asuransi Umum Indonesia)
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {flexasItems.map((f) => (
              <div
                key={f.label}
                className="bg-white rounded-card p-5 text-center border border-black/6 hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-2">{f.icon}</div>
                <div className="font-heading text-navy font-bold text-sm mb-0.5">
                  {f.label}
                </div>
                <div className="text-gold text-xs font-semibold mb-2">{f.sublabel}</div>
                <p className="text-xs text-[#64748B] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Penyebab Kebakaran */}
          <div className="mt-10 bg-white rounded-card p-6 border border-black/6">
            <div className="font-heading text-navy font-bold text-base mb-5">
              📊 Penyebab Utama Kebakaran Properti di Indonesia
            </div>
            <div className="flex flex-col gap-4">
              {penyebabKebakaran.map((p) => (
                <div key={p.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gold/60 w-6">{p.rank}</span>
                      <span className="text-sm font-semibold text-navy">{p.label}</span>
                    </div>
                    <span className="text-sm font-bold text-gold">{p.persen}</span>
                  </div>
                  <div className="h-1.5 bg-navy/8 rounded-full overflow-hidden">
                    <div className={`h-full bg-gold rounded-full ${p.bar}`} />
                  </div>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 bg-gold/8 border border-gold/20 rounded-xl p-5">
            <p className="text-base text-navy2 leading-relaxed">
              <strong className="text-gold">💡 Tips Pak Rio:</strong> Jaminan dasar FLEXAS
              sering belum mencakup risiko banjir dan gempa — dua ancaman paling nyata di
              Yogyakarta. Kami selalu lakukan analisis risiko lokasi sebelum merekomendasikan
              produk, agar Anda tahu persis perluasan mana yang benar-benar diperlukan.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUK ───────────────────────────────────────────────────────── */}
      <section id="produk" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Produk Kami
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Solusi untuk Setiap
            <br />
            Jenis Properti Anda
          </h2>
        </div>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {produkItems.map((p) => (
            <div
              key={p.title}
              className="bg-cream rounded-card p-8 border border-black/6 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 items-start"
            >
              <div className="text-center md:text-left">
                <div className="text-[3.5rem]">{p.icon}</div>
              </div>
              <div>
                <div className="font-heading text-navy font-bold text-[1.2rem] mb-2">
                  {p.title}
                </div>
                <p className="text-sm leading-relaxed text-[#64748B] mb-4">{p.desc}</p>
                <ul className="flex flex-col gap-2 mb-4">
                  {p.manfaat.map((m) => (
                    <li key={m} className="flex gap-2 text-base text-navy2">
                      <span className="text-gold flex-shrink-0 font-bold">✓</span>
                      {m}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="bg-white rounded-lg px-4 py-2.5 text-xs text-[#64748B] border border-black/5 flex-1">
                    <strong className="text-navy">Cocok untuk:</strong> {p.cocok}
                  </div>
                  <Link
                    href={p.link.href}
                    className="text-gold text-xs font-semibold hover:underline no-underline flex items-center whitespace-nowrap"
                  >
                    {p.link.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PERLUASAN ────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Perluasan Tersedia
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Tambahkan Perlindungan
            <br />
            Sesuai Risiko Lokasi Anda
          </h2>
          <p className="text-base text-[#64748B] max-w-[500px] mx-auto mt-3">
            FLEXAS hanyalah titik awal. Yogyakarta memiliki risiko unik yang membutuhkan
            perluasan tambahan agar perlindungan benar-benar menyeluruh.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {perluasanItems.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{item.icon}</div>
                <span className="bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                  ✓ Tersedia
                </span>
              </div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">
                {item.label}
              </div>
              <p className="text-sm leading-[1.75] text-[#64748B]">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-4xl mx-auto">
          <Link
            href="/asuransi-properti/banjir-gempa"
            className="flex items-center justify-between bg-navy rounded-xl p-5 text-white no-underline hover:bg-navy2 transition-all group"
          >
            <div>
              <div className="font-heading text-gold font-semibold mb-1">
                🌋 Panduan Lengkap Perluasan Banjir &amp; Gempa di Yogyakarta
              </div>
              <p className="text-white/65 text-xs">
                Peta risiko per kawasan, estimasi biaya perluasan, dan penjelasan
                perbedaan Zona 4 vs Zona 5 gempa bumi di DIY.
              </p>
            </div>
            <span className="text-gold text-xl ml-4 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* ── PROSES ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Alur
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Proses Mudah,
            <br />
            Polis Cepat Terbit
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {prosesItems.map((p) => (
            <div
              key={p.step}
              className="bg-cream rounded-card p-6 text-center border border-black/5 relative"
            >
              <div className="absolute top-4 right-5 font-heading text-[2rem] font-bold text-navy/8">
                {p.step}
              </div>
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">
                {p.label}
              </div>
              <p className="text-base leading-relaxed text-[#64748B]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            FAQ
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Pertanyaan Seputar
            <br />
            Asuransi Kebakaran
          </h2>
          <p className="text-base text-[#64748B] max-w-[500px] mx-auto mt-3">
            Jawaban untuk pertanyaan paling umum dari pemilik properti di Yogyakarta
          </p>
        </div>
        <div className="max-w-[740px] mx-auto">
          {faqItems.map((f, i) => (
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}
                <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-base leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="max-w-[740px] mx-auto mt-8 bg-navy rounded-xl p-6 text-center">
          <div className="font-heading text-white text-base font-semibold mb-2">
            Masih Ada Pertanyaan?
          </div>
          <p className="text-white/70 text-sm mb-4">
            Konsultasikan langsung dengan Pak Rio — gratis, cepat respons.
          </p>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all"
          >
            💬 Tanya via WhatsApp
          </a>
        </div>
      </section>

      {/* ── INTERNAL LINKS ───────────────────────────────────────────────── */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">
            Produk &amp; Artikel Terkait
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/asuransi-properti/banjir-gempa"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🌊 Perluasan Banjir &amp; Gempa →
            </Link>
            <Link
              href="/asuransi-properti/property-all-risk"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🏢 Property All Risk (PAR) →
            </Link>
            <Link
              href="/asuransi-properti/hotel-vila"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🏨 Hotel &amp; Vila Wisata →
            </Link>
            <Link
              href="/asuransi-liability/public-liability"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🤝 Public Liability →
            </Link>
            <Link
              href="/artikel/asuransi-rumah-tinggal-jogja"
              className="bg-gold/10 border border-gold/30 text-gold font-semibold text-sm px-4 py-2 rounded-full hover:bg-gold/20 transition-colors no-underline"
            >
              📖 Panduan Asuransi Rumah Tinggal →
            </Link>
            <Link
              href="/artikel/asuransi-kos-jogja"
              className="bg-gold/10 border border-gold/30 text-gold font-semibold text-sm px-4 py-2 rounded-full hover:bg-gold/20 transition-colors no-underline"
            >
              📖 Panduan Asuransi Kos-kosan →
            </Link>
            <Link
              href="/artikel/cara-menghitung-nilai-asuransi"
              className="bg-gold/10 border border-gold/30 text-gold font-semibold text-sm px-4 py-2 rounded-full hover:bg-gold/20 transition-colors no-underline"
            >
              📊 Cara Hitung Nilai Pertanggungan →
            </Link>
            <Link
              href="/asuransi-properti"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              ← Semua Asuransi Properti
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-5xl mb-4">🔥</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Properti Anda Layak
            <br />
            Mendapat Perlindungan Terbaik
          </h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">
            Konsultasi gratis, analisis risiko lokasi, dan penawaran dari perusahaan
            asuransi terpercaya berlisensi OJK — tanpa biaya apapun.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
            >
              💬 WhatsApp Pak Rio Sekarang
            </a>
            <a
              href={`mailto:${KONTAK.email}`}
              className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all"
            >
              ✉️ Kirim Email
            </a>
          </div>
        </div>
      </section>
    </PropertyLayout>
  );
}
