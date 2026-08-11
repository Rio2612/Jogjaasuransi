// app/artikel/syarat-dokumen-asuransi-event-musik-jogja/page.tsx
// TARGET: "syarat asuransi event musik", "data yang dibutuhkan asuransi konser jogja"
// INTENT: Navigational + Transactional — EO/promotor yang siap mengajukan, butuh tahu data apa yang harus disiapkan
// SILO: Event cluster → mendukung /asuransi-event/konser-festival-musik/

import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Syarat & Data Asuransi Konser/Festival Musik Jogja – Checklist Lengkap",
  description:
    "Panduan lengkap data dan dokumen yang dibutuhkan untuk mengajukan asuransi event musik di Yogyakarta: data EO, detail acara, data artis, nilai pertanggungan per komponen, hingga dokumen pendukung. Konsultasi gratis.",
  keywords:
    "syarat asuransi event musik jogja, data asuransi konser yogyakarta, dokumen asuransi festival musik, cara mengajukan asuransi event, checklist asuransi konser, syarat rider asuransi artis",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/syarat-dokumen-asuransi-event-musik-jogja",
  },
  openGraph: {
    title: "Syarat & Data Asuransi Konser/Festival Musik Jogja – Checklist Lengkap",
    description:
      "Data dan dokumen yang perlu disiapkan EO/promotor sebelum mengajukan paket asuransi event musik — dari data acara hingga nilai pertanggungan per komponen.",
    url: "https://asuransijogja.biz.id/artikel/syarat-dokumen-asuransi-event-musik-jogja",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Syarat & Data Asuransi Konser/Festival Musik Jogja – Checklist Lengkap" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransijogja.biz.id" },
        { "@type": "ListItem", position: 2, name: "Artikel", item: "https://asuransijogja.biz.id/artikel" },
        { "@type": "ListItem", position: 3, name: "Syarat & Data Asuransi Event Musik Jogja", item: "https://asuransijogja.biz.id/artikel/syarat-dokumen-asuransi-event-musik-jogja" },
      ],
    },
    {
      "@type": "Article",
      headline: "Syarat & Data Asuransi Konser/Festival Musik Jogja – Checklist Lengkap",
      description: "Data dan dokumen yang dibutuhkan untuk mengajukan paket asuransi event musik di Yogyakarta.",
      author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Praktisi Asuransi" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2026-08-12",
      dateModified: "2026-08-12",
    },
    {
      "@type": "HowTo",
      name: "Cara Mengajukan Asuransi Konser & Festival Musik",
      description: "Langkah-langkah menyiapkan data dan dokumen untuk mengajukan paket asuransi event musik 4-in-1.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Diskusi Awal Kebutuhan Proteksi", text: "Hubungi praktisi via WhatsApp, sampaikan jenis acara, perkiraan tanggal, dan apakah ada persyaratan asuransi dari rider artis." },
        { "@type": "HowToStep", position: 2, name: "Isi Data Acara & Pemohon", text: "Lengkapi data EO/promotor, detail acara (tanggal, venue, kapasitas), dan data artis/personel yang perlu ditanggung." },
        { "@type": "HowToStep", position: 3, name: "Kirim Dokumen Pendukung", text: "Kirimkan dokumen yang sudah tersedia — izin keramaian, kontrak venue, halaman rider asuransi artis (jika ada), dan daftar inventaris peralatan." },
        { "@type": "HowToStep", position: 4, name: "Praktisi Susun Proposal", text: "Berdasarkan data yang diberikan, praktisi menyusun proposal cakupan dan mengajukan ke perusahaan asuransi yang sesuai." },
        { "@type": "HowToStep", position: 5, name: "Review Nilai Pertanggungan & Premi", text: "Periksa dan konfirmasi limit tiap komponen (liability, cancellation, personal accident, property) beserta estimasi premi sebelum polis diterbitkan." },
        { "@type": "HowToStep", position: 6, name: "Polis Terbit Sebelum Hari-H", text: "Setelah disetujui, polis diterbitkan dan dikirim dalam bentuk digital — idealnya diterima jauh sebelum hari pelaksanaan sebagai bukti kepatuhan rider." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa lama sebelum acara sebaiknya mengajukan asuransi event?",
          acceptedAnswer: { "@type": "Answer", text: "Idealnya 2–4 minggu sebelum hari-H, khususnya untuk komponen Event Cancellation yang membutuhkan proses underwriting lebih mendalam. Untuk festival internasional berskala besar, ajukan lebih awal — 1–2 bulan sebelumnya — agar ada waktu penyesuaian sesuai rider artis." },
        },
        {
          "@type": "Question",
          name: "Apakah semua data harus lengkap sebelum bisa mulai konsultasi?",
          acceptedAnswer: { "@type": "Answer", text: "Tidak. Anda bisa memulai konsultasi dengan data dasar (jenis acara, perkiraan tanggal, skala penonton) untuk mendapatkan gambaran awal cakupan dan premi. Dokumen lengkap bisa menyusul selama proses berjalan, selama tersedia sebelum polis diterbitkan." },
        },
        {
          "@type": "Question",
          name: "Apakah rider asuransi dari artis internasional bisa langsung dijadikan acuan?",
          acceptedAnswer: { "@type": "Answer", text: "Bisa, dan justru sangat membantu. Kirimkan halaman rider yang memuat klausul asuransi — nama jenis proteksi, limit yang diminta, dan pihak yang harus ditanggung. Praktisi akan menyesuaikan struktur polis agar memenuhi persyaratan tersebut." },
        },
        {
          "@type": "Question",
          name: "Apakah nilai pertanggungan Event Cancellation harus sama persis dengan total budget produksi?",
          acceptedAnswer: { "@type": "Answer", text: "Sebaiknya mendekati nilai riil pengeluaran yang berisiko hilang jika event batal — fee artis, sewa venue, biaya produksi, dan marketing yang sudah dikeluarkan. Nilai yang terlalu rendah membuat Anda underinsured, sementara nilai yang terlalu tinggi tanpa dasar akan meningkatkan premi tanpa manfaat sepadan." },
        },
        {
          "@type": "Question",
          name: "Bagaimana jika artis membawa alat musik pribadi bernilai tinggi seperti gitar vintage?",
          acceptedAnswer: { "@type": "Answer", text: "Alat musik bernilai tinggi sebaiknya didaftarkan secara terpisah dengan estimasi nilai penggantian masing-masing (bukan digabung sebagai satu angka umum), agar proses klaim lebih akurat jika terjadi kerusakan atau kehilangan pada item spesifik tersebut." },
        },
        {
          "@type": "Question",
          name: "Apakah polis masih bisa diterbitkan jika acara kurang dari 2 minggu lagi?",
          acceptedAnswer: { "@type": "Answer", text: "Untuk sebagian komponen seperti Public Liability dan Personal Accident, proses masih bisa dipercepat. Namun untuk Event Cancellation dengan nilai pertanggungan besar, waktu yang mepet bisa membatasi opsi cakupan atau meningkatkan premi. Segera hubungi kami begitu tanggal acara sudah pasti." },
        },
      ],
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const dataPemohon = [
  { item: "Nama perusahaan/promotor/EO", ket: "Beserta bentuk badan usaha (PT, CV, atau perseorangan) dan NPWP jika ada" },
  { item: "Nama & kontak penanggung jawab acara", ket: "Person in charge yang bisa dihubungi untuk koordinasi polis dan proses klaim" },
  { item: "Pengalaman menyelenggarakan event sejenis", ket: "Opsional, tapi membantu penanggung menilai profil risiko — terutama untuk event berskala besar" },
];

const dataAcara = [
  { item: "Nama & jenis acara", ket: "Konser tunggal, festival multi-hari, single stage atau multi stage" },
  { item: "Tanggal & waktu pelaksanaan", ket: "Termasuk periode load-in, rehearsal, hari pertunjukan, hingga load-out — ini menentukan periode pertanggungan polis" },
  { item: "Lokasi/venue lengkap", ket: "Nama venue, alamat, dan apakah indoor atau outdoor" },
  { item: "Estimasi kapasitas/jumlah penonton", ket: "Termasuk skema all standing, seated, atau campuran — berpengaruh pada penilaian risiko liability" },
];

const dataArtis = [
  { item: "Nama artis/performer & asal", ket: "Nasional atau internasional — mempengaruhi kebutuhan cakupan cancellation" },
  { item: "Halaman rider yang memuat klausul asuransi", ket: "Jika tersedia, kirimkan agar limit tiap komponen bisa langsung disesuaikan" },
  { item: "Jumlah personel yang perlu ditanggung Personal Accident", ket: "Artis, kru teknis, tim manajemen, dan personel pendamping lainnya" },
  { item: "Jadwal kedatangan & keberangkatan", ket: "Termasuk kru pendukung, untuk menentukan tanggal mulai dan berakhirnya periode pertanggungan" },
];

const nilaiPertanggungan = [
  { icon: "🤝", komponen: "Public Liability", ket: "Limit sesuai permintaan rider, atau limit standar berdasarkan skala dan lokasi acara" },
  { icon: "🎫", komponen: "Event Cancellation", ket: "Estimasi total nilai yang berisiko hilang — fee artis, sewa venue, biaya produksi, dan marketing yang sudah dikeluarkan" },
  { icon: "🩹", komponen: "Personal Accident", ket: "Jumlah personel yang ditanggung dan limit santunan per orang" },
  { icon: "🎸", komponen: "Property All Risk", ket: "Daftar alat musik/peralatan beserta estimasi nilai penggantian masing-masing" },
];

const dokumenPendukung = [
  {
    kategori: "Dokumen Perizinan & Venue",
    icon: "📋",
    items: [
      { dok: "Izin Keramaian", ket: "Dari Kepolisian setempat (Polres/Polresta) sesuai wilayah venue" },
      { dok: "Kontrak/Perjanjian Sewa Venue", ket: "Termasuk tanggal pemakaian dan kapasitas yang disepakati" },
    ],
  },
  {
    kategori: "Dokumen Artis & Rider",
    icon: "🎤",
    items: [
      { dok: "Kontrak & Rider Artis", ket: "Khususnya halaman yang memuat klausul persyaratan asuransi, jika tersedia" },
      { dok: "Rencana Keamanan & Manajemen Kerumunan", ket: "Untuk event outdoor berskala besar — membantu penilaian risiko Public Liability" },
    ],
  },
  {
    kategori: "Dokumen Aset & Legalitas",
    icon: "👤",
    items: [
      { dok: "Daftar Inventaris Alat Musik/Peralatan", ket: "Untuk keperluan Property All Risk, beserta estimasi nilai per item" },
      { dok: "KTP & NPWP Penanggung Jawab", ket: "Sebagai identitas pemegang polis dalam dokumen pengajuan" },
    ],
  },
];

const alurPengajuan = [
  {
    step: "01",
    judul: "Diskusi Awal Kebutuhan Proteksi",
    icon: "💬",
    desc: "Hubungi kami via WhatsApp dan sampaikan jenis acara, perkiraan tanggal, serta apakah ada persyaratan asuransi dari rider artis. Dari sini kami bisa memberikan gambaran awal cakupan yang relevan.",
    penting: "Semakin awal dihubungi, semakin banyak opsi cakupan yang bisa disesuaikan — terutama untuk Event Cancellation.",
  },
  {
    step: "02",
    judul: "Isi Data Acara & Pemohon",
    icon: "📝",
    desc: "Lengkapi data EO/promotor, detail acara, dan data artis/personel sesuai checklist di atas. Tidak perlu 100% lengkap di awal — data inti (tanggal, venue, skala) sudah cukup untuk memulai.",
    penting: "Jadwal load-in dan load-out penting untuk ditentukan sejak awal karena menentukan periode aktif polis.",
  },
  {
    step: "03",
    judul: "Kirim Dokumen Pendukung",
    icon: "📁",
    desc: "Kirimkan dokumen yang sudah tersedia — halaman rider asuransi, kontrak venue, izin keramaian, dan daftar inventaris peralatan. Dokumen yang belum siap bisa menyusul selama masih sebelum polis diterbitkan.",
    penting: "Halaman rider yang memuat klausul asuransi sangat membantu mempercepat penyesuaian limit tiap komponen.",
  },
  {
    step: "04",
    judul: "Praktisi Susun Proposal",
    icon: "⚙️",
    desc: "Berdasarkan data yang diberikan, kami menyusun proposal cakupan dan mengajukan ke perusahaan asuransi yang paling sesuai dengan profil risiko acara Anda.",
    penting: "Untuk event besar, keempat komponen bisa berasal dari satu atau beberapa penanggung tergantung ketersediaan kapasitas pasar.",
  },
  {
    step: "05",
    judul: "Review Nilai Pertanggungan & Premi",
    icon: "🔍",
    desc: "Periksa dan konfirmasi limit tiap komponen — pastikan sesuai dengan yang diminta rider (jika ada) dan mencerminkan nilai riil acara Anda.",
    penting: "Nilai pertanggungan yang terlalu rendah berisiko underinsured saat klaim; konsultasikan jika ragu menentukan angka yang tepat.",
  },
  {
    step: "06",
    judul: "Polis Terbit Sebelum Hari-H",
    icon: "📨",
    desc: "Setelah disetujui, polis diterbitkan dalam bentuk digital (PDF) — bisa langsung digunakan sebagai bukti kepatuhan terhadap syarat rider kepada agensi artis.",
    penting: "Simpan salinan polis untuk ditunjukkan kepada tim produksi artis maupun pengelola venue jika diminta sewaktu-waktu.",
  },
];

const checklist = [
  "Tanggal & jam pelaksanaan sudah pasti (termasuk load-in dan load-out)",
  "Venue dan kapasitas penonton sudah ditentukan",
  "Daftar personel yang perlu ditanggung Personal Accident sudah disusun",
  "Halaman rider asuransi (jika ada) sudah disiapkan untuk dikirim",
  "Estimasi nilai alat musik/peralatan sudah didata per item",
  "Estimasi total biaya produksi untuk keperluan Event Cancellation sudah dihitung",
  "Penanggung jawab acara yang bisa dihubungi sudah ditentukan",
];

const faqItems = [
  {
    q: "Berapa lama sebelum acara sebaiknya mengajukan asuransi event?",
    a: "Idealnya 2–4 minggu sebelum hari-H, khususnya untuk Event Cancellation yang membutuhkan underwriting lebih mendalam. Untuk festival internasional berskala besar, ajukan 1–2 bulan sebelumnya agar ada waktu penyesuaian sesuai rider artis.",
  },
  {
    q: "Apakah semua data harus lengkap sebelum bisa mulai konsultasi?",
    a: "Tidak. Anda bisa memulai dengan data dasar — jenis acara, perkiraan tanggal, skala penonton — untuk mendapatkan gambaran awal cakupan dan premi. Dokumen lengkap bisa menyusul selama proses berjalan.",
  },
  {
    q: "Apakah rider asuransi dari artis internasional bisa langsung dijadikan acuan?",
    a: "Bisa, dan sangat membantu. Kirimkan halaman rider yang memuat klausul asuransi — jenis proteksi, limit yang diminta, dan pihak yang harus ditanggung — agar struktur polis bisa langsung disesuaikan.",
  },
  {
    q: "Apakah nilai pertanggungan Event Cancellation harus sama persis dengan total budget produksi?",
    a: "Sebaiknya mendekati nilai riil yang berisiko hilang jika event batal — fee artis, sewa venue, biaya produksi, dan marketing yang sudah dikeluarkan. Nilai terlalu rendah membuat Anda underinsured; nilai terlalu tinggi tanpa dasar hanya menambah premi tanpa manfaat sepadan.",
  },
  {
    q: "Bagaimana jika artis membawa alat musik pribadi bernilai tinggi seperti gitar vintage?",
    a: "Sebaiknya didaftarkan terpisah dengan estimasi nilai penggantian masing-masing, bukan digabung sebagai satu angka umum — supaya proses klaim lebih akurat jika terjadi kerusakan atau kehilangan pada item tertentu.",
  },
  {
    q: "Apakah polis masih bisa diterbitkan jika acara kurang dari 2 minggu lagi?",
    a: "Untuk Public Liability dan Personal Accident, proses masih bisa dipercepat. Untuk Event Cancellation dengan nilai besar, waktu mepet bisa membatasi opsi cakupan atau menaikkan premi. Segera hubungi kami begitu tanggal acara pasti.",
  },
];

export default function ArtikelSyaratDataAsuransiEventMusik() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-sm text-[#475569] flex-wrap">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Syarat & Data Asuransi Event Musik Jogja</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <Link href="/asuransi-event/konser-festival-musik" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
              🎤 Konser & Festival Musik
            </Link>
            <span className="text-white/60 text-xs">·</span>
            <span className="text-white/60 text-xs">Checklist Pengajuan</span>
          </div>
          <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
            Data & Dokumen yang<br /><em className="not-italic text-gold">Dibutuhkan</em> untuk<br />Asuransi Event Musik
          </h1>
          <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
            Sebelum polis paket 4-in-1 bisa diproses, ada sejumlah data dan dokumen yang perlu disiapkan EO atau promotor. Panduan ini merangkum semuanya — dari data acara hingga nilai pertanggungan tiap komponen — agar pengajuan Anda berjalan cepat.
          </p>
          <div className="flex gap-3 text-xs text-white/60 flex-wrap">
            <span>✍️ Rio Mardiansyah — Praktisi Asuransi</span>
            <span>·</span>
            <span>📅 Agustus 2026</span>
            <span>·</span>
            <span>⏱️ Baca 7 menit</span>
          </div>
        </div>
      </section>

      {/* Konten Artikel */}
      <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

        {/* Ringkasan */}
        <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
          <p className="text-navy2 text-sm leading-relaxed">
            <strong className="text-navy">Yang perlu Anda tahu:</strong> Berbeda dari asuransi kendaraan yang menggunakan tarif tetap, paket asuransi event musik (Public Liability, Event Cancellation, Personal Accident, Property All Risk) sepenuhnya disusun berdasarkan data spesifik acara Anda. Semakin lengkap data yang diberikan di awal, semakin cepat dan akurat proposal cakupan yang bisa kami susun.
          </p>
        </div>

        {/* Kenapa data dibutuhkan */}
        <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
          Mengapa Data Ini Dibutuhkan Sebelum Polis Diproses?
        </h2>
        <p className="text-[#475569] text-base leading-relaxed mb-4">
          Asuransi event bersifat <em>fully underwritten</em> per acara — bukan produk dengan tarif baku seperti asuransi kendaraan. Setiap event punya profil risiko berbeda: skala penonton, lokasi indoor/outdoor, reputasi artis, hingga nilai peralatan yang dibawa. Semua faktor ini menentukan limit dan premi yang tepat.
        </p>
        <p className="text-[#475569] text-base leading-relaxed mb-8">
          Untuk konser atau festival dengan artis internasional, data yang diminta biasanya sudah tercermin dalam rider kontrak — dokumen ini justru mempermudah proses karena limit yang dibutuhkan sudah tertulis jelas. Bagi event tanpa rider formal, kami bantu tentukan limit yang wajar berdasarkan skala acara.
        </p>

        {/* Data Pemohon */}
        <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
          1. Data Pemohon / Penyelenggara (EO)
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {dataPemohon.map((d, i) => (
            <div key={i} className="bg-cream rounded-card p-5 border border-black/6 grid grid-cols-[auto_1fr] gap-4">
              <div className="bg-navy text-gold font-heading font-bold text-xs w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</div>
              <div>
                <div className="font-heading text-navy font-bold text-sm mb-1">{d.item}</div>
                <p className="text-sm text-[#475569] leading-relaxed">{d.ket}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Data Acara */}
        <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
          2. Data Acara (Event Details)
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {dataAcara.map((d, i) => (
            <div key={i} className="bg-cream rounded-card p-5 border border-black/6 grid grid-cols-[auto_1fr] gap-4">
              <div className="bg-navy text-gold font-heading font-bold text-xs w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</div>
              <div>
                <div className="font-heading text-navy font-bold text-sm mb-1">{d.item}</div>
                <p className="text-sm text-[#475569] leading-relaxed">{d.ket}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Data Artis */}
        <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
          3. Data Artis & Personel yang Ditanggung
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {dataArtis.map((d, i) => (
            <div key={i} className="bg-cream rounded-card p-5 border border-black/6 grid grid-cols-[auto_1fr] gap-4">
              <div className="bg-navy text-gold font-heading font-bold text-xs w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</div>
              <div>
                <div className="font-heading text-navy font-bold text-sm mb-1">{d.item}</div>
                <p className="text-sm text-[#475569] leading-relaxed">{d.ket}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nilai Pertanggungan */}
        <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
          4. Nilai Pertanggungan per Komponen
        </h2>
        <p className="text-[#475569] text-base leading-relaxed mb-6">
          Setiap komponen dalam paket 4-in-1 membutuhkan angka acuan yang berbeda. Siapkan estimasi berikut sebelum konsultasi agar proposal bisa langsung disusun:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {nilaiPertanggungan.map(n => (
            <div key={n.komponen} className="bg-white rounded-card p-5 border border-black/8">
              <div className="text-2xl mb-2">{n.icon}</div>
              <div className="font-heading text-navy font-bold text-sm mb-1">{n.komponen}</div>
              <p className="text-sm text-[#475569] leading-relaxed">{n.ket}</p>
            </div>
          ))}
        </div>

        {/* Dokumen Pendukung */}
        <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
          5. Dokumen Pendukung yang Perlu Disiapkan
        </h2>
        <p className="text-[#475569] text-base leading-relaxed mb-6">
          Dokumen berikut mempercepat proses underwriting. Tidak semua wajib ada di awal — kirimkan yang sudah tersedia, sisanya bisa menyusul:
        </p>
        <div className="flex flex-col gap-5 mb-10">
          {dokumenPendukung.map((kat) => (
            <div key={kat.kategori} className="bg-white rounded-card border border-black/8 overflow-hidden">
              <div className="bg-navy px-5 py-3 flex items-center gap-3">
                <span className="text-xl">{kat.icon}</span>
                <span className="font-heading text-white font-semibold text-sm">{kat.kategori}</span>
              </div>
              <div className="p-5 flex flex-col gap-3">
                {kat.items.map((item) => (
                  <div key={item.dok} className="flex gap-3 items-start">
                    <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <div className="font-semibold text-navy text-sm">{item.dok}</div>
                      <div className="text-xs text-[#475569] leading-relaxed mt-0.5">{item.ket}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Alur Pengajuan */}
        <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
          Alur Pengajuan Step-by-Step
        </h2>
        <p className="text-[#475569] text-base leading-relaxed mb-6">
          Berikut alur lengkap dari diskusi awal hingga polis siap digunakan sebagai bukti kepatuhan rider:
        </p>
        <div className="flex flex-col gap-4 mb-10">
          {alurPengajuan.map((a) => (
            <div key={a.step} className="bg-white rounded-card p-5 border border-black/8">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="bg-navy text-gold font-heading font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center">{a.step}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{a.icon}</span>
                    <span className="font-heading text-navy font-bold text-sm">{a.judul}</span>
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed mb-3">{a.desc}</p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    <p className="text-xs text-amber-800 leading-relaxed">
                      <strong>⚠️ Perhatikan:</strong> {a.penting}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
          Checklist Ringkas Sebelum Menghubungi Kami
        </h2>
        <p className="text-[#475569] text-base leading-relaxed mb-6">
          Siapkan poin-poin berikut agar konsultasi awal langsung menghasilkan gambaran cakupan dan estimasi premi:
        </p>
        <div className="flex flex-col gap-2.5 mb-6">
          {checklist.map((c, i) => (
            <div key={i} className="flex gap-3 items-center bg-cream rounded-xl p-4 border border-black/5">
              <div className="w-5 h-5 rounded border-2 border-navy/30 flex-shrink-0 bg-white" />
              <span className="text-sm text-navy2 leading-relaxed">{c}</span>
            </div>
          ))}
        </div>
        <div className="bg-navy rounded-xl p-5 text-white mb-10">
          <p className="text-sm text-white/80">
            <strong className="text-gold">💡 Tips dari Praktisi:</strong> Jika Anda menerima rider dari agensi artis internasional, kirimkan langsung halaman yang memuat klausul asuransi apa adanya. Ini jauh mempercepat proses dibanding menerjemahkan sendiri persyaratannya ke dalam angka pertanggungan.
          </p>
        </div>

        {/* CTA Inline */}
        <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
          <div className="font-heading text-navy font-bold text-base mb-2">Sudah Punya Rider dari Agensi Artis?</div>
          <p className="text-[#475569] text-sm leading-relaxed mb-4">
            Kirimkan halaman rider yang memuat persyaratan asuransi beserta perkiraan tanggal acara. Kami bantu susun proposal cakupan yang sesuai sebelum negosiasi kontrak berlanjut.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
              💬 Konsultasi via WhatsApp
            </a>
            <Link href="/asuransi-event/konser-festival-musik" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
              🎤 Halaman Produk Asuransi Event →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
          Pertanyaan yang Sering Ditanyakan
        </h2>
        <div className="flex flex-col divide-y divide-black/8 mb-10">
          {faqItems.map((f, i) => (
            <details key={i} className="group py-1">
              <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                {f.q}
                <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-sm leading-[1.78] text-[#475569] pb-3">{f.a}</p>
            </details>
          ))}
        </div>

        {/* Internal Links */}
        <div className="border-t border-black/8 pt-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Baca Juga</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/asuransi-event/konser-festival-musik", icon: "🎤", judul: "Asuransi Konser & Festival Musik", desc: "Detail paket 4-in-1 — cakupan, skenario klaim, dan estimasi premi" },
              { href: "/asuransi-event", icon: "🎪", judul: "Semua Asuransi Event", desc: "Ikhtisar produk asuransi event di Yogyakarta" },
              { href: "/asuransi-liability/public-liability", icon: "🤝", judul: "Public Liability", desc: "Detail proteksi tanggung jawab hukum pihak ketiga" },
              { href: "/asuransi-properti/property-all-risk", icon: "🏢", judul: "Property All Risk (PAR)", desc: "Proteksi menyeluruh untuk aset dan peralatan bernilai tinggi" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                <span className="text-xl flex-shrink-0">{a.icon}</span>
                <div>
                  <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">{a.judul}</div>
                  <div className="text-xs text-[#475569]">{a.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* CTA Bottom */}
      <section className="py-16 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
            Siap Menyiapkan Data Asuransi<br />Event Musik Anda?
          </h2>
          <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
            Sampaikan detail acara Anda — kami bantu susun proposal cakupan sesuai kebutuhan dan rider artis, gratis tanpa tekanan.
          </p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
            💬 Konsultasi Asuransi Event via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
