import type { Metadata } from "next";
import Link from "next/link";
import PropertyLayout from "@/components/properti/PropertyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Banjir & Gempa Bumi Jogja – Perluasan Properti Wajib DIY",
  description:
    "Asuransi perluasan banjir dan gempa bumi untuk properti di Yogyakarta. Proteksi risiko Merapi, patahan Opak, banjir Kali Code & Kali Opak. Endorsement yang wajib dimiliki pemilik properti DIY. Konsultasi gratis.",
  keywords:
    "asuransi banjir jogja, asuransi gempa yogyakarta, perluasan banjir properti, asuransi merapi yogyakarta, asuransi bencana alam jogja, endorsement gempa bumi yogyakarta, asuransi lahar dingin merapi, asuransi tsunami bantul, perluasan risiko katastrofe DIY, asuransi angin topan jogja",
  alternates: {
    canonical: "https://asuransijogja.biz.id/asuransi-properti/banjir-gempa",
  },
  openGraph: {
    title: "Asuransi Banjir & Gempa Bumi Jogja – Perluasan Properti Wajib DIY",
    description:
      "Proteksi bencana alam untuk properti di Yogyakarta: banjir, gempa, erupsi Merapi, lahar dingin, angin topan. Konsultasi gratis.",
    url: "https://asuransijogja.biz.id/asuransi-properti/banjir-gempa",
    type: "website",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og/og-properti.png", width: 1200, height: 630, alt: "Asuransi Banjir & Gempa Bumi Jogja – Perluasan Properti Wajib DIY" }],
  },
};

// ─── SCHEMA ──────────────────────────────────────────────────────────────────
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah asuransi kebakaran standar sudah mencakup banjir dan gempa bumi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Asuransi kebakaran standar hanya menjamin risiko FLEXAS (Fire, Lightning, Explosion, Aircraft, Smoke). Banjir dan gempa bumi adalah risiko katastrofe yang harus ditambahkan secara eksplisit sebagai endorsement atau perluasan dalam polis. Ini sangat penting diketahui pemilik properti di Yogyakarta sebelum merasa sudah 'terlindungi penuh'.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa biaya tambahan premi untuk perluasan banjir dan gempa di Yogyakarta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biaya perluasan banjir umumnya sekitar 0,05–0,15% dari nilai pertanggungan per tahun tergantung zona risiko. Perluasan gempa bumi di Yogyakarta berkisar 0,135–0,160% dari nilai pertanggungan (Zona 4 dan Zona 5 berdasarkan zonasi OJK). Untuk rumah dengan nilai bangunan Rp 500 juta, biaya tambahan perluasan gempa hanya sekitar Rp 675.000–800.000 per tahun.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan Zona 4 dan Zona 5 gempa bumi di Yogyakarta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zonasi gempa untuk keperluan asuransi di DIY dibagi dua: Zona 4 mencakup Sleman, Gunungkidul, Kulon Progo, dan Kota Yogyakarta dengan rate premi lebih rendah. Zona 5 mencakup Bantul yang memiliki risiko seismik lebih tinggi karena dekat patahan Opak — lokasi episentrum gempa destruktif 2006 — sehingga rate preminya lebih tinggi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah perluasan gempa juga mencakup erupsi Gunung Merapi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perluasan gempa bumi standar mencakup gempa tektonik. Risiko erupsi vulkanik (letusan Merapi, lahar panas, awan panas) adalah klausul terpisah yang perlu ditambahkan khusus — terutama untuk properti di kawasan Sleman Utara, Pakem, Cangkringan, dan sepanjang aliran sungai yang berhulu di Merapi. Pastikan Anda menambahkan klausul vulkanik jika properti Anda berada di kawasan ini.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana proses klaim jika properti saya terkena banjir atau gempa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Langkah pertama: laporkan kejadian ke praktisi atau perusahaan asuransi dalam 3×24 jam. Dokumentasikan kerusakan dengan foto dan video sebelum ada pembersihan. Siapkan dokumen: polis, KTP, bukti kepemilikan properti, laporan dari BPBD atau instansi terkait, dan estimasi biaya perbaikan. Praktisi kami mendampingi seluruh proses klaim hingga dana cair.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah kerusakan akibat lahar dingin pasca-erupsi Merapi bisa diklaim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kerusakan akibat lahar dingin (banjir lahar) bisa diklaim jika polis Anda memiliki perluasan banjir DAN perluasan erupsi vulkanik. Lahar dingin adalah risiko spesifik yang berbeda dari banjir biasa maupun gempa tektonik. Untuk properti di sekitar aliran Kali Boyong, Kali Gendol, atau Kali Kuning yang berhulu di Merapi, pastikan kedua perluasan ini ada dalam polis Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada masa tunggu (waiting period) untuk klaim banjir dan gempa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beberapa polis memiliki klausul waiting period — periode setelah polis terbit di mana klaim bencana alam belum bisa diajukan. Lamanya bervariasi, umumnya 3–14 hari. Ini berarti Anda tidak bisa membeli perluasan banjir saat banjir sudah terjadi. Sebaiknya pastikan perluasan sudah aktif jauh sebelum musim hujan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah tanah longsor juga bisa dijamin dalam perluasan ini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tanah longsor dapat dijamin sebagai bagian dari perluasan bencana alam, terutama untuk properti di kawasan perbukitan seperti sebagian wilayah Gunungkidul, Kulon Progo, dan lereng Merapi. Tidak semua polis secara otomatis mencakup longsor — pastikan klausul ini secara eksplisit tercantum dalam polis Anda.",
      },
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const risikoLokal = [
  {
    icon: "🌋",
    label: "Gunung Merapi — Paling Aktif di Indonesia",
    level: "Tinggi",
    levelColor: "bg-red-100 text-red-700",
    desc: "Merapi meletus lebih dari 68 kali dalam sejarah tercatat. Erupsi besar 2010 menyebabkan kerusakan properti senilai triliunan rupiah di Sleman dan Magelang. Radius bahaya erupsi mencapai 10–20 km dari puncak, dan lahar dingin bisa mengalir lebih jauh mengikuti sungai.",
  },
  {
    icon: "💥",
    label: "Zona Gempa Aktif — Patahan Opak",
    level: "Tinggi",
    levelColor: "bg-red-100 text-red-700",
    desc: "Gempa Bantul 27 Mei 2006 (M5,9) menghancurkan lebih dari 150.000 bangunan dan merenggut 5.700+ jiwa. Patahan Opak yang membelah Bantul masih aktif hingga saat ini. Para ahli geologi menyebut Bantul sebagai salah satu kawasan paling rawan gempa di Pulau Jawa.",
  },
  {
    icon: "🌊",
    label: "Banjir Kali Code & Kali Opak",
    level: "Sedang-Tinggi",
    levelColor: "bg-orange-100 text-orange-700",
    desc: "Bantaran Kali Code di Gondokusuman dan Jetis rentan banjir bandang saat hujan ekstrem. Kali Opak di Bantul berulang kali meluap. Banjir 2017 menenggelamkan ratusan rumah di sepanjang daerah aliran sungai. Penurunan muka tanah juga membuat area yang sebelumnya aman kini lebih rentan.",
  },
  {
    icon: "💨",
    label: "Angin Kencang & Puting Beliung",
    level: "Sedang",
    levelColor: "bg-yellow-100 text-yellow-700",
    desc: "Dataran Bantul dan Kulon Progo beberapa kali dilanda puting beliung yang merusak atap, menumbangkan pohon ke bangunan, dan merusak instalasi listrik. Musim pancaroba (Maret–April dan Oktober–November) adalah periode risiko tertinggi.",
  },
  {
    icon: "🏔️",
    label: "Tanah Longsor di Kawasan Perbukitan",
    level: "Sedang",
    levelColor: "bg-yellow-100 text-yellow-700",
    desc: "Sebagian Gunungkidul, Kulon Progo, dan lereng selatan Merapi memiliki kondisi tanah yang rentan longsor saat hujan lebat. Properti di tebing atau lereng perbukitan menghadapi risiko ini secara signifikan.",
  },
  {
    icon: "🌊",
    label: "Potensi Tsunami Pantai Selatan",
    level: "Sedang",
    levelColor: "bg-yellow-100 text-yellow-700",
    desc: "Samudra Hindia di selatan Yogyakarta adalah zona subduksi aktif. Meskipun probabilitasnya lebih rendah, risiko tsunami tidak bisa diabaikan untuk properti di kawasan Bantul Selatan, Gunung Kidul, dan area pesisir selatan DIY.",
  },
];

const jaminanItems = [
  {
    icon: "🌊",
    label: "Banjir & Genangan Air",
    detail: "Air hujan masuk bangunan, meluapnya sungai dan saluran air, banjir bandang, dan genangan berkepanjangan yang menyebabkan kerusakan struktural atau isi bangunan.",
  },
  {
    icon: "🌋",
    label: "Letusan Gunung Berapi",
    detail: "Kerusakan akibat abu vulkanik, awan panas, material erupsi, dan dampak langsung letusan. Tersedia sebagai klausul khusus untuk properti di kawasan lereng Merapi.",
  },
  {
    icon: "💥",
    label: "Gempa Bumi Tektonik",
    detail: "Kerusakan struktural bangunan akibat getaran gempa, pergerakan dan penurunan tanah, serta retakan dan keruntuhan yang disebabkan aktivitas seismik.",
  },
  {
    icon: "🌊",
    label: "Lahar Dingin & Lahar Panas",
    detail: "Aliran material vulkanik yang mengikuti sungai-sungai berhulu Merapi (Kali Boyong, Kali Gendol, Kali Kuning). Termasuk dalam perluasan vulkanik khusus.",
  },
  {
    icon: "🌊",
    label: "Tsunami",
    detail: "Gelombang besar akibat gempa bawah laut. Relevan khususnya untuk properti di kawasan pesisir Bantul Selatan, Gunung Kidul, dan area pantai selatan DIY.",
  },
  {
    icon: "💨",
    label: "Angin Topan & Puting Beliung",
    detail: "Kerusakan akibat angin kencang, badai tropis, puting beliung, dan hujan es yang merusak struktur atap, dinding, atau komponen bangunan lainnya.",
  },
  {
    icon: "🏔️",
    label: "Tanah Longsor",
    detail: "Kerusakan akibat pergerakan tanah, longsor, dan subsidensi yang menimpa atau menggeser bangunan — relevan untuk properti di area perbukitan dan lereng.",
  },
  {
    icon: "🔥",
    label: "Kebakaran Akibat Bencana",
    detail: "Kebakaran yang dipicu oleh gempa bumi (instalasi gas/listrik putus) atau erupsi (material panas) secara otomatis dijamin dalam perluasan bencana alam.",
  },
];

const zonaRawan = [
  {
    zona: "Sleman Utara (Kaliurang, Pakem, Cangkringan)",
    risiko: ["Erupsi Merapi", "Lahar panas", "Lahar dingin", "Gempa"],
    rekomendasi: "PAR/Kebakaran + perluasan gempa + perluasan vulkanik + banjir lahar",
    levelColor: "bg-red-100 text-red-700",
    level: "Risiko Sangat Tinggi",
    catatan: "Vila dan properti di kawasan ini wajib memiliki klausul vulkanik — bukan hanya gempa tektonik.",
  },
  {
    zona: "Bantul (seluruh wilayah)",
    risiko: ["Gempa tektonik tinggi", "Banjir Kali Opak", "Angin kencang"],
    rekomendasi: "Kebakaran/PAR + perluasan gempa Zona 5 + banjir",
    levelColor: "bg-red-100 text-red-700",
    level: "Risiko Tinggi",
    catatan: "Zona 5 gempa bumi — rate premi lebih tinggi namun perlindungan sangat krusial.",
  },
  {
    zona: "Sleman Tengah & Selatan (Depok, Mlati, Gamping)",
    risiko: ["Gempa sedang", "Banjir genangan", "Lahar jauh"],
    rekomendasi: "Kebakaran + perluasan gempa Zona 4 + banjir",
    levelColor: "bg-orange-100 text-orange-700",
    level: "Risiko Sedang-Tinggi",
    catatan: "Kawasan padat perumahan — risiko banjir genangan meningkat seiring penurunan muka tanah.",
  },
  {
    zona: "Kota Yogyakarta (Gondokusuman, Jetis, Danurejan)",
    risiko: ["Banjir Kali Code", "Gempa", "Kebakaran kawasan padat"],
    rekomendasi: "Kebakaran + perluasan banjir + perluasan gempa",
    levelColor: "bg-orange-100 text-orange-700",
    level: "Risiko Sedang-Tinggi",
    catatan: "Bantaran Kali Code rentan banjir bandang. Kawasan padat bangunan tua berisiko tinggi.",
  },
  {
    zona: "Bantul Selatan (Parangtritis, Sanden, Kretek)",
    risiko: ["Tsunami (potensi)", "Angin pantai", "Gempa"],
    rekomendasi: "PAR + gempa + angin topan + perluasan tsunami",
    levelColor: "bg-orange-100 text-orange-700",
    level: "Risiko Sedang-Tinggi",
    catatan: "Vila dan properti tepi pantai perlu perhatian khusus terhadap risiko tsunami.",
  },
  {
    zona: "Gunungkidul & Kulon Progo",
    risiko: ["Gempa", "Angin kencang", "Longsor perbukitan"],
    rekomendasi: "Kebakaran + perluasan gempa + angin + longsor",
    levelColor: "bg-yellow-100 text-yellow-700",
    level: "Risiko Sedang",
    catatan: "Properti di lereng perbukitan Kulon Progo perlu perluasan tanah longsor.",
  },
];

const perbedaanPerluasan = [
  {
    aspek: "Yang Dijamin",
    banjirSaja: "Banjir, genangan, meluapnya sungai",
    gempa: "Gempa tektonik, getaran tanah",
    vulkanik: "Erupsi, abu, lahar, awan panas",
    lengkap: "Semua di atas dalam satu paket",
  },
  {
    aspek: "Polis",
    banjirSaja: "Endorsement di polis kebakaran",
    gempa: "Polis gempa terpisah (Kelas 1)",
    vulkanik: "Endorsement khusus di polis gempa",
    lengkap: "Bisa dikonsolidasikan dalam PAR",
  },
  {
    aspek: "Cocok untuk",
    banjirSaja: "Kawasan bantaran sungai",
    gempa: "Seluruh DIY (wajib)",
    vulkanik: "Sleman Utara & sekitar Merapi",
    lengkap: "Properti bernilai tinggi di semua zona",
  },
];

const faqItems = [
  {
    q: "Apakah asuransi kebakaran standar sudah mencakup banjir dan gempa bumi?",
    a: "Tidak. Asuransi kebakaran standar hanya menjamin risiko FLEXAS (kebakaran, petir, ledakan, pesawat jatuh, asap). Banjir dan gempa bumi adalah risiko katastrofe yang harus ditambahkan secara eksplisit sebagai endorsement. Banyak pemilik properti di Yogyakarta yang tidak menyadari hal ini hingga terjadi musibah dan klaim ditolak.",
  },
  {
    q: "Berapa biaya tambahan premi untuk perluasan banjir dan gempa di Yogyakarta?",
    a: "Perluasan banjir umumnya 0,05–0,15% dari nilai pertanggungan per tahun tergantung zona risiko. Perluasan gempa bumi di Yogyakarta berkisar 0,135% (Zona 4: Sleman, Kota, Gunungkidul, Kulon Progo) hingga 0,160% (Zona 5: Bantul) dari nilai pertanggungan. Untuk rumah dengan nilai Rp 500 juta, biaya tambahan perluasan gempa hanya Rp 675.000–800.000 per tahun — sangat terjangkau.",
  },
  {
    q: "Apa perbedaan Zona 4 dan Zona 5 gempa bumi di Yogyakarta?",
    a: "Zonasi gempa untuk asuransi di DIY terbagi dua. Zona 4 mencakup Sleman, Gunungkidul, Kulon Progo, dan Kota Yogyakarta — rate premi lebih rendah. Zona 5 mencakup Bantul yang memiliki risiko seismik lebih tinggi karena dekat Patahan Opak — lokasi episentrum gempa destruktif 2006 — sehingga rate preminya lebih tinggi. Pastikan Anda memilih zona yang tepat sesuai lokasi properti.",
  },
  {
    q: "Apakah perluasan gempa juga mencakup erupsi Gunung Merapi?",
    a: "Tidak otomatis. Perluasan gempa bumi standar mencakup gempa tektonik. Risiko erupsi vulkanik (letusan Merapi, lahar panas, awan panas) adalah klausul terpisah yang perlu ditambahkan khusus — terutama untuk properti di Kaliurang, Pakem, Cangkringan, dan sepanjang aliran sungai berhulu Merapi. Jangan sampai properti Anda di lereng Merapi hanya punya perluasan gempa tektonik.",
  },
  {
    q: "Bagaimana proses klaim jika terkena banjir atau gempa?",
    a: "Laporkan kejadian ke praktisi atau perusahaan asuransi dalam 3×24 jam. Dokumentasikan kerusakan dengan foto dan video sebelum ada pembersihan. Siapkan dokumen: polis, KTP, bukti kepemilikan, laporan BPBD atau pihak berwenang, dan estimasi biaya perbaikan. Praktisi kami mendampingi seluruh proses klaim tanpa biaya tambahan.",
  },
  {
    q: "Apakah kerusakan akibat lahar dingin pasca-erupsi Merapi bisa diklaim?",
    a: "Bisa diklaim jika polis Anda memiliki perluasan banjir DAN perluasan erupsi vulkanik. Lahar dingin adalah risiko spesifik yang berbeda dari banjir hujan biasa maupun gempa tektonik. Untuk properti di sekitar Kali Boyong, Kali Gendol, atau Kali Kuning, pastikan kedua perluasan ini ada secara eksplisit dalam polis.",
  },
  {
    q: "Apakah ada masa tunggu (waiting period) untuk klaim banjir dan gempa?",
    a: "Ya, beberapa polis memiliki waiting period — periode setelah polis terbit di mana klaim bencana alam belum bisa diajukan, umumnya 3–14 hari. Artinya, Anda tidak bisa membeli perluasan banjir saat banjir sudah di depan pintu. Pastikan perluasan aktif jauh sebelum musim hujan atau sebelum potensi bencana meningkat.",
  },
  {
    q: "Apakah tanah longsor juga bisa dijamin?",
    a: "Ya, tanah longsor dapat dijamin sebagai bagian dari perluasan bencana alam — terutama untuk properti di kawasan perbukitan seperti sebagian Gunungkidul, Kulon Progo, dan lereng Merapi. Tidak semua polis otomatis mencakup longsor, jadi pastikan klausul ini secara eksplisit tercantum dalam polis Anda.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function BanjirGempaPage() {
  return (
    <PropertyLayout
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Perluasan Banjir & Gempa" },
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
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">
          🌋
        </div>
        <div className="relative z-10 max-w-3xl">
          <Link
            href="/asuransi-properti"
            className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline"
          >
            ← Asuransi Properti
          </Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Perluasan Banjir &amp; Gempa · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Perluasan Banjir
            <br />
            <em className="not-italic text-gold">&amp; Gempa Bumi</em>
            <br />
            Khusus Yogyakarta
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[540px] mb-8">
            Yogyakarta berdiri di atas tanah yang aktif secara geologi — 30 km dari Merapi,
            dilintasi Patahan Opak yang terbukti destruktif, dan dikelilingi sungai-sungai
            yang rentan banjir. Perluasan jaminan bencana alam bukan pilihan tambahan —
            ini adalah keharusan yang wajib dipahami setiap pemilik properti di DIY.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline"
            >
              💬 Konsultasi Risiko Lokasi
            </a>
            <a
              href="#zona"
              className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline"
            >
              Cek Zona Risiko Saya →
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
            {[
              { num: "8", lbl: "Jenis Jaminan Bencana" },
              { num: "6 Zona", lbl: "Peta Risiko DIY" },
              { num: "Gratis", lbl: "Analisis Risiko Lokasi" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-heading text-gold text-xl font-bold">{s.num}</div>
                <div className="text-white/60 text-xs mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENGAPA WAJIB ────────────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
              Yang Wajib Diketahui
            </div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
              Polis Kebakaran Standar Anda
              <br />
              Tidak Menjamin Banjir &amp; Gempa
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-card p-6 border border-black/6">
              <div className="font-heading text-navy font-bold text-base mb-4 pb-3 border-b border-black/8">
                ✗ Apa yang Dijamin Kebakaran Standar
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { ico: "🔥", label: "Kebakaran (Fire)" },
                  { ico: "⚡", label: "Petir (Lightning)" },
                  { ico: "💥", label: "Ledakan (Explosion)" },
                  { ico: "✈️", label: "Pesawat Jatuh (Aircraft)" },
                  { ico: "💨", label: "Asap (Smoke)" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm">
                    <span className="text-xl">{item.ico}</span>
                    <span className="text-green-700 font-semibold">✓ {item.label}</span>
                  </div>
                ))}
                <div className="mt-3 pt-3 border-t border-black/8">
                  {[
                    "✗ Banjir & lahar dingin",
                    "✗ Gempa bumi tektonik",
                    "✗ Erupsi vulkanik Merapi",
                    "✗ Tsunami",
                    "✗ Angin topan & puting beliung",
                    "✗ Tanah longsor",
                  ].map((item) => (
                    <div key={item} className="text-sm text-red-700 py-0.5">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-navy rounded-card p-6 text-white">
              <div className="font-heading text-gold font-bold text-base mb-3">
                ⚠️ Risiko Nyata yang Sering Tidak Disadari
              </div>
              <p className="text-sm leading-relaxed text-white/80 mb-4">
                Banyak pemilik properti di Yogyakarta merasa sudah &quot;punya asuransi&quot;
                karena memiliki polis kebakaran. Padahal, saat banjir atau gempa terjadi dan
                mereka mengajukan klaim — jawabannya:{" "}
                <strong className="text-gold">ditolak</strong>, karena risiko tersebut tidak
                ada dalam polis.
              </p>
              <p className="text-sm leading-relaxed text-white/80 mb-5">
                Ini bukan kesalahan perusahaan asuransi — ini soal ketidaksesuaian produk
                dengan kebutuhan nyata. Dan di Yogyakarta, di mana gempa dan erupsi Merapi
                adalah risiko yang{" "}
                <strong className="text-gold">bukan sekadar teori</strong>, kelalaian ini
                bisa sangat mahal.
              </p>
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="inline-block bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all"
              >
                Cek Polis Saya Sekarang →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RISIKO LOKAL ─────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Data Risiko Nyata
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Mengapa Yogyakarta
            <br />
            Butuh Perlindungan Lebih
          </h2>
          <p className="text-base text-[#475569] max-w-[500px] mx-auto mt-3">
            Data historis membuktikan Yogyakarta adalah salah satu provinsi dengan kerugian
            bencana alam tertinggi di Indonesia
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {risikoLokal.map((r) => (
            <div
              key={r.label}
              className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{r.icon}</span>
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${r.levelColor}`}
                >
                  {r.level}
                </span>
              </div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">
                {r.label}
              </div>
              <p className="text-base leading-relaxed text-[#475569]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── JAMINAN ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Cakupan Perluasan
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            8 Jenis Bencana yang Bisa
            <br />
            Dijamin dalam Perluasan Ini
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {jaminanItems.map((j) => (
            <div
              key={j.label}
              className="bg-white rounded-card p-5 border border-black/6 hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-3">{j.icon}</div>
              <div className="font-heading text-navy font-bold text-sm mb-1.5">
                {j.label}
              </div>
              <p className="text-xs leading-relaxed text-[#475569]">{j.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-4xl mx-auto bg-navy rounded-xl p-6 text-white">
          <div className="font-heading text-gold text-sm font-semibold mb-2">
            🏛️ Cara Menambahkan Perluasan ke Polis Anda
          </div>
          <p className="text-xs leading-relaxed text-white/75">
            Perluasan banjir ditambahkan sebagai{" "}
            <strong className="text-gold">endorsement</strong> pada polis kebakaran atau PAR
            yang sudah ada. Perluasan gempa bumi umumnya diterbitkan sebagai{" "}
            <strong className="text-gold">polis terpisah</strong> (khusus Kelas 1/beton).
            Perluasan vulkanik adalah endorsement tambahan di polis gempa. Praktisi kami
            memandu seluruh proses agar tidak ada celah perlindungan.
          </p>
        </div>
      </section>

      {/* ── ZONA RAWAN ───────────────────────────────────────────────────── */}
      <section id="zona" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Peta Risiko DIY
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Rekomendasi Perluasan
            <br />
            Berdasarkan Lokasi Properti Anda
          </h2>
          <p className="text-base text-[#475569] max-w-[520px] mx-auto mt-3">
            Setiap kawasan di DIY punya profil risiko berbeda. Lokasi menentukan jenis
            perluasan yang paling relevan dan urgensinya.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {zonaRawan.map((z) => (
            <div
              key={z.zona}
              className="bg-cream rounded-card p-6 border border-black/6 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 items-start"
            >
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <div className="font-heading text-navy font-bold text-[0.95rem]">
                    📍 {z.zona}
                  </div>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${z.levelColor}`}
                  >
                    {z.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {z.risiko.map((r) => (
                    <span
                      key={r}
                      className="bg-red-50 border border-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full"
                    >
                      {r}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#475569] italic">{z.catatan}</p>
              </div>
              <div className="hidden lg:block text-gold text-xl text-center pt-4">→</div>
              <div className="bg-gold/8 border border-gold/20 rounded-lg p-4">
                <div className="text-xs text-[#475569] mb-1 font-semibold">
                  ✓ Rekomendasi Perluasan:
                </div>
                <div className="text-xs text-navy2 font-medium leading-relaxed">
                  {z.rekomendasi}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-[#475569] mb-4">
            Tidak yakin zona risiko properti Anda? Konsultasi gratis — kami analisis
            berdasarkan alamat lengkap.
          </p>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm inline-block no-underline hover:bg-gold2 transition-all"
          >
            💬 Cek Risiko Lokasi Saya
          </a>
        </div>
      </section>

      {/* ── PERBANDINGAN PERLUASAN ───────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Panduan Memilih
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Banjir, Gempa, atau Vulkanik?
            <br />
            Ini Perbedaannya
          </h2>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse text-sm min-w-[600px]">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">Aspek</th>
                <th className="text-left px-4 py-3 font-semibold">Perluasan Banjir</th>
                <th className="text-left px-4 py-3 font-semibold">Perluasan Gempa</th>
                <th className="text-left px-4 py-3 font-semibold">Perluasan Vulkanik</th>
                <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold">PAR Lengkap</th>
              </tr>
            </thead>
            <tbody>
              {perbedaanPerluasan.map((r, i) => (
                <tr key={r.aspek} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                  <td className="px-4 py-3 font-semibold text-navy">{r.aspek}</td>
                  <td className="px-4 py-3 text-[#475569]">{r.banjirSaja}</td>
                  <td className="px-4 py-3 text-[#475569]">{r.gempa}</td>
                  <td className="px-4 py-3 text-[#475569]">{r.vulkanik}</td>
                  <td className="px-4 py-3 text-green-700 font-medium">{r.lengkap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 max-w-4xl mx-auto bg-gold/8 border border-gold/20 rounded-xl p-5">
          <p className="text-sm text-navy2 leading-relaxed">
            <strong className="text-gold">💡 Rekomendasi Praktisi:</strong> Untuk properti
            di Yogyakarta, minimal tambahkan perluasan gempa bumi dan banjir. Jika properti
            berada di Sleman Utara atau dekat aliran sungai berhulu Merapi, tambahkan juga
            perluasan vulkanik. Biaya totalnya jauh lebih kecil dari potensi kerugian yang
            ditanggung.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            FAQ
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Pertanyaan Seputar
            <br />
            Perluasan Banjir &amp; Gempa
          </h2>
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
              <p className="text-base leading-[1.78] text-[#475569] pb-4">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="max-w-[740px] mx-auto mt-8 bg-navy rounded-xl p-6 text-center">
          <div className="font-heading text-white text-base font-semibold mb-2">
            Pertanyaan Lain Seputar Risiko Lokasi Anda?
          </div>
          <p className="text-white/70 text-sm mb-4">
            Konsultasikan langsung dengan Pak Rio — analisis risiko lokasi gratis.
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
      <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">
            Produk &amp; Artikel Terkait
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/asuransi-properti/kebakaran"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🔥 Asuransi Kebakaran →
            </Link>
            <Link
              href="/asuransi-properti/property-all-risk"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🏢 Property All Risk →
            </Link>
            <Link
              href="/asuransi-properti/hotel-vila"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🏨 Hotel &amp; Vila Wisata →
            </Link>
            <Link
              href="/asuransi-properti/vila-homestay"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🌿 Vila &amp; Homestay →
            </Link>
            <Link
              href="/artikel/asuransi-rumah-tinggal-jogja"
              className="bg-gold/10 border border-gold/30 text-gold font-semibold text-sm px-4 py-2 rounded-full hover:bg-gold/20 transition-colors no-underline"
            >
              📖 Panduan Asuransi Rumah di Jogja →
            </Link>
            <Link
              href="/artikel/asuransi-vila-homestay-jogja"
              className="bg-gold/10 border border-gold/30 text-gold font-semibold text-sm px-4 py-2 rounded-full hover:bg-gold/20 transition-colors no-underline"
            >
              📖 Panduan Asuransi Vila Jogja →
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
          <div className="text-5xl mb-4">🌋</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Yogyakarta Indah,
            <br />
            tapi Risikonya Sangat Nyata
          </h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">
            Jangan tunggu bencana untuk baru memikirkan perluasan polis. Analisis risiko
            lokasi properti Anda sekarang — gratis, cepat, dan tanpa tekanan.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
            >
              💬 Konsultasi Perluasan Sekarang
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
