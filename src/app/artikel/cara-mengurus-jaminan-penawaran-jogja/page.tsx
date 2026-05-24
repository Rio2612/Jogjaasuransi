// app/artikel/cara-mengurus-jaminan-penawaran-jogja/page.tsx
// TARGET: "cara mengurus jaminan penawaran jogja", "bid bond yogyakarta"
// INTENT: Navigational + Educational — kontraktor yang belum pernah urus atau bingung prosesnya
// SILO: Surety Bond cluster → mendukung /asuransi-surety-bond/jaminan-penawaran/

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cara Mengurus Jaminan Penawaran (Bid Bond) Jogja – Syarat & Alur Lengkap | Asuransi Jogja",
  description:
    "Panduan lengkap cara mengurus Jaminan Penawaran (Bid Bond) di Yogyakarta untuk tender pemerintah dan swasta. Syarat dokumen, alur pengajuan, dan tips agar polis terbit tepat waktu sebelum batas upload. Konsultasi gratis.",
  keywords:
    "cara mengurus jaminan penawaran jogja, bid bond yogyakarta, surety bond tender DIY, syarat jaminan penawaran kontraktor, cara buat bid bond yogyakarta, jaminan penawaran LPSE DIY",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/cara-mengurus-jaminan-penawaran-jogja",
  },
  openGraph: {
    title: "Cara Mengurus Jaminan Penawaran (Bid Bond) Jogja – Syarat & Alur Lengkap",
    description:
      "Panduan syarat, dokumen, dan alur pengajuan Bid Bond untuk tender di Yogyakarta. Edukasi dari konsultan asuransi independen.",
    url: "https://asuransijogja.biz.id/artikel/cara-mengurus-jaminan-penawaran-jogja",
    type: "article",
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
        { "@type": "ListItem", position: 3, name: "Cara Mengurus Jaminan Penawaran Jogja", item: "https://asuransijogja.biz.id/artikel/cara-mengurus-jaminan-penawaran-jogja" },
      ],
    },
    {
      "@type": "Article",
      headline: "Cara Mengurus Jaminan Penawaran (Bid Bond) Jogja – Syarat & Alur Lengkap",
      description: "Panduan lengkap cara mengurus Jaminan Penawaran untuk tender pemerintah dan swasta di Yogyakarta.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Konsultan Asuransi Kerugian" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-04-01",
      dateModified: "2025-06-01",
    },
    {
      "@type": "HowTo",
      name: "Cara Mengurus Jaminan Penawaran (Bid Bond) untuk Tender",
      description: "Langkah-langkah mengajukan dan mendapatkan Jaminan Penawaran (Bid Bond) dari perusahaan surety/asuransi untuk keperluan tender.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Baca RKS dan Identifikasi Syarat Jaminan", text: "Baca seluruh Rencana Kerja dan Syarat-Syarat (RKS). Catat nilai jaminan yang diminta (umumnya 1–3% dari nilai HPS), masa berlaku, dan format dokumen yang diterima panitia." },
        { "@type": "HowToStep", position: 2, name: "Siapkan Dokumen Perusahaan", text: "Kumpulkan dokumen yang dibutuhkan: akta pendirian perusahaan dan perubahannya, NPWP, NIB, laporan keuangan 2 tahun terakhir, SBU/IUJK yang masih berlaku, dan KTP direktur." },
        { "@type": "HowToStep", position: 3, name: "Hubungi Konsultan Surety Bond", text: "Sampaikan informasi: nama paket tender, nomor pengumuman, nilai HPS, masa berlaku jaminan yang diminta, dan kirimkan dokumen perusahaan. Konsultan akan memproses dan menghubungkan dengan perusahaan surety." },
        { "@type": "HowToStep", position: 4, name: "Review Draft Jaminan", text: "Periksa draft Jaminan Penawaran sebelum dicetak: nama tertanggung, nama penerima jaminan, nama paket tender, nilai jaminan, dan masa berlaku. Konfirmasi jika ada yang perlu dikoreksi." },
        { "@type": "HowToStep", position: 5, name: "Terima Dokumen Jaminan", text: "Setelah disetujui, dokumen Jaminan Penawaran dicetak di atas kertas segel perusahaan surety. File digital (PDF) dikirim online, dokumen asli dikirim melalui kurir atau ojol ke alamat Anda." },
        { "@type": "HowToStep", position: 6, name: "Lampirkan ke Dokumen Penawaran", text: "Sertakan dokumen Jaminan Penawaran asli atau hasil scan (sesuai ketentuan tender) dalam amplop dokumen penawaran atau upload di SPSE sebelum batas waktu yang ditentukan." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa saja dokumen yang dibutuhkan untuk mengurus Jaminan Penawaran?",
          acceptedAnswer: { "@type": "Answer", text: "Dokumen utama yang umumnya dibutuhkan: akta pendirian perusahaan dan perubahan terakhir, NPWP perusahaan, NIB (Nomor Induk Berusaha), laporan keuangan 2 tahun terakhir (minimal neraca dan laba rugi), SBU atau IUJK yang masih berlaku, KTP direktur yang berwenang menandatangani, serta dokumen tender (undangan/pengumuman lelang)." },
        },
        {
          "@type": "Question",
          name: "Berapa nilai Jaminan Penawaran yang harus disiapkan?",
          acceptedAnswer: { "@type": "Answer", text: "Nilai Jaminan Penawaran umumnya 1–3% dari nilai Harga Perkiraan Sendiri (HPS) yang tercantum dalam dokumen tender. Nilai pastinya selalu mengacu pada dokumen pengadaan masing-masing paket — jangan menggunakan angka perkiraan sendiri." },
        },
        {
          "@type": "Question",
          name: "Berapa lama masa berlaku Jaminan Penawaran?",
          acceptedAnswer: { "@type": "Answer", text: "Masa berlaku Jaminan Penawaran biasanya ditentukan dalam RKS — umumnya antara 30 hingga 90 hari sejak tanggal penutupan penawaran. Pastikan masa berlaku dalam polis sama dengan atau lebih panjang dari yang diminta RKS." },
        },
      ],
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const dokumenYangDibutuhkan = [
  {
    kategori: "Dokumen Legalitas Perusahaan",
    icon: "🏢",
    items: [
      { dok: "Akta Pendirian Perusahaan", ket: "Beserta seluruh perubahan yang pernah dilakukan hingga yang terbaru" },
      { dok: "SK Kemenkumham", ket: "Surat pengesahan akta dari Kementerian Hukum dan HAM (untuk PT)" },
      { dok: "NPWP Perusahaan", ket: "Kartu NPWP atau surat keterangan NPWP yang masih aktif" },
      { dok: "NIB (Nomor Induk Berusaha)", ket: "Dari sistem OSS — menggantikan SIUP dan TDP yang sudah tidak berlaku" },
    ],
  },
  {
    kategori: "Dokumen Keuangan",
    icon: "📊",
    items: [
      { dok: "Laporan Keuangan 2 Tahun Terakhir", ket: "Minimal neraca (balance sheet) dan laporan laba rugi. Laporan yang diaudit lebih kuat, tapi laporan internal juga bisa diterima tergantung kebijakan perusahaan surety" },
      { dok: "Rekening Koran 3 Bulan Terakhir", ket: "Beberapa perusahaan surety meminta sebagai pelengkap untuk melihat cashflow perusahaan" },
    ],
  },
  {
    kategori: "Dokumen Teknis & Kualifikasi",
    icon: "📋",
    items: [
      { dok: "SBU (Sertifikat Badan Usaha)", ket: "Sertifikat dari LPJK sesuai bidang pekerjaan — pastikan masih berlaku dan klasifikasinya sesuai paket tender" },
      { dok: "IUJK (Izin Usaha Jasa Konstruksi)", ket: "Khusus untuk paket konstruksi — diterbitkan oleh dinas pemerintah daerah" },
    ],
  },
  {
    kategori: "Dokumen Pengurus & Tender",
    icon: "👤",
    items: [
      { dok: "KTP Direktur / Pengurus Berwenang", ket: "Yang namanya tercantum dalam akta sebagai pihak yang berwenang menandatangani perjanjian" },
      { dok: "Dokumen Tender (RKS / Pengumuman)", ket: "Halaman yang mencantumkan nilai HPS, nilai jaminan yang diminta, masa berlaku jaminan, dan nama instansi penerima" },
    ],
  },
];

const alurPengajuan = [
  {
    step: "01",
    judul: "Baca RKS — Temukan Klausul Jaminan",
    icon: "📖",
    desc: "Sebelum menghubungi konsultan, baca seluruh RKS terlebih dahulu. Cari bagian yang membahas 'Jaminan Penawaran'. Catat: nilai jaminan yang diminta (% HPS atau nominal), masa berlaku jaminan, format yang diterima (asli atau bisa scan), dan nama penerima jaminan.",
    penting: "Jangan asumsikan syaratnya — setiap paket tender bisa berbeda. Ada yang minta 1%, ada yang 3%, ada yang minta masa berlaku 30 hari, ada 60 hari.",
  },
  {
    step: "02",
    judul: "Siapkan Dokumen Perusahaan",
    icon: "📁",
    desc: "Kumpulkan semua dokumen yang dibutuhkan dalam format digital (scan atau foto resolusi baik). Untuk perusahaan yang sudah pernah mengurus jaminan sebelumnya, dokumen ini biasanya sudah tersimpan — tinggal cek masa berlaku SBU dan IUJK.",
    penting: "SBU yang sudah habis masa berlakunya adalah penyebab paling umum pengajuan jaminan ditolak atau tertunda. Cek dulu sebelum menghubungi konsultan.",
  },
  {
    step: "03",
    judul: "Konsultasikan ke Konsultan Surety Bond",
    icon: "💬",
    desc: "Hubungi konsultan asuransi melalui WhatsApp. Sampaikan: nama paket tender dan instansi penerima, nilai HPS dan nilai jaminan yang diminta, tanggal penutupan penawaran, serta kirimkan dokumen perusahaan yang sudah disiapkan.",
    penting: "Sampaikan informasi selengkap mungkin di awal. Semakin lengkap informasi, semakin cepat konsultan bisa membantu memproses.",
  },
  {
    step: "04",
    judul: "Konsultan Proses ke Perusahaan Surety",
    icon: "⚙️",
    desc: "Konsultan akan meneruskan pengajuan ke perusahaan surety (asuransi) yang paling sesuai. Perusahaan surety akan menganalisis profil dan kapasitas perusahaan Anda berdasarkan dokumen yang dikirimkan.",
    penting: "Proses analisis ini yang menentukan apakah jaminan bisa diterbitkan. Perusahaan dengan laporan keuangan sehat dan SBU sesuai umumnya lebih cepat disetujui.",
  },
  {
    step: "05",
    judul: "Review Draft Jaminan",
    icon: "🔍",
    desc: "Sebelum dicetak, Anda akan menerima draft Jaminan Penawaran untuk dikonfirmasi. Periksa dengan teliti: nama tertanggung (harus sama persis dengan nama perusahaan di dokumen penawaran), nama penerima/obligee, nama paket pekerjaan, nilai jaminan, dan masa berlaku.",
    penting: "Kesalahan kecil seperti nama perusahaan yang berbeda satu huruf bisa menyebabkan dokumen ditolak panitia. Koreksi harus dilakukan sebelum polis dicetak.",
  },
  {
    step: "06",
    judul: "Terima Dokumen — Siap Dilampirkan",
    icon: "📨",
    desc: "Setelah dikonfirmasi, file digital (PDF) Jaminan Penawaran dikirim melalui WhatsApp atau email untuk keperluan administrasi awal. Dokumen asli dicetak di atas kertas segel perusahaan surety dan dikirim melalui kurir atau ojol ke alamat yang Anda tentukan.",
    penting: "Untuk tender online (SPSE), scan dokumen asli setelah diterima. Untuk tender konvensional, dokumen asli dilampirkan langsung dalam amplop penawaran.",
  },
];

const syaratDariSisiKontraktor = [
  {
    syarat: "Perusahaan sudah berbadan hukum resmi",
    detail: "PT, CV, atau Firma yang sudah terdaftar dan memiliki akta notaris. Perusahaan perseorangan umumnya tidak bisa mengurus Jaminan Penawaran.",
  },
  {
    syarat: "SBU sesuai dengan bidang pekerjaan yang dilelang",
    detail: "SBU konstruksi dibagi berdasarkan sub-klasifikasi pekerjaan. Paket bangunan gedung membutuhkan SBU berbeda dengan paket jalan atau MEP. Ketidaksesuaian SBU bisa menjadi alasan jaminan tidak bisa diterbitkan.",
  },
  {
    syarat: "Laporan keuangan yang wajar dan tidak defisit besar",
    detail: "Perusahaan surety akan mengevaluasi laporan keuangan untuk menetapkan limit jaminan yang bisa diberikan. Perusahaan dengan ekuitas negatif atau defisit besar kemungkinan akan kesulitan mendapatkan limit yang cukup.",
  },
  {
    syarat: "Tidak sedang dalam status pailit atau permasalahan hukum berat",
    detail: "Perusahaan yang sedang dalam proses kepailitan atau memiliki catatan klaim jaminan yang belum terselesaikan akan sangat sulit mendapatkan persetujuan dari perusahaan surety.",
  },
  {
    syarat: "Nilai jaminan masih dalam batas limit yang tersedia",
    detail: "Setiap perusahaan kontraktor memiliki limit surety bond total yang ditetapkan berdasarkan kapasitas finansialnya. Jika total jaminan yang sedang berjalan sudah mendekati limit, pengajuan baru mungkin perlu menunggu sebagian jaminan lama berakhir.",
  },
];

const checklist = [
  "Nilai jaminan sesuai dengan yang tertera di RKS (bukan perkiraan sendiri)",
  "Masa berlaku jaminan sama atau lebih panjang dari yang diminta RKS",
  "Nama tertanggung identik dengan nama perusahaan di dokumen penawaran",
  "Nama penerima/obligee sesuai dengan nama instansi/panitia di RKS",
  "Nama paket pekerjaan sesuai dengan dokumen tender",
  "Format jaminan (asli/scan) sesuai dengan ketentuan RKS",
  "Tanda tangan dan stempel perusahaan surety sudah ada",
  "Nomor referensi jaminan tertera dengan jelas",
];

const faqItems = [
  {
    q: "Apakah Jaminan Penawaran bisa dibuat untuk beberapa paket tender sekaligus?",
    a: "Bisa, dan ini hal yang lumrah. Satu perusahaan kontraktor bisa mengikuti beberapa tender sekaligus dengan Jaminan Penawaran yang terpisah untuk masing-masing paket. Yang perlu diperhatikan adalah total nilai jaminan yang sedang berjalan tidak melebihi limit surety yang tersedia untuk perusahaan Anda.",
  },
  {
    q: "Apa yang terjadi dengan Jaminan Penawaran jika perusahaan tidak menang tender?",
    a: "Jaminan Penawaran secara otomatis berakhir setelah masa berlakunya habis. Tidak ada proses pengembalian premi. Itulah mengapa penting untuk memastikan masa berlaku jaminan tidak terlalu panjang dari yang dibutuhkan — karena premi dihitung berdasarkan nilai dan durasi.",
  },
  {
    q: "Apa yang terjadi jika perusahaan menang tender tapi menolak menandatangani kontrak?",
    a: "Inilah fungsi utama Jaminan Penawaran — melindungi pemilik proyek dari situasi ini. Pemilik proyek berhak mencairkan (mengeksekusi) Jaminan Penawaran sebagai kompensasi atas kerugian yang timbul akibat penolakan tersebut. Bagi kontraktor, ini berdampak serius pada reputasi dan bisa mempersulit pengajuan jaminan di masa depan.",
  },
  {
    q: "Apakah kontraktor kualifikasi kecil (K1/K2) bisa mengurus Jaminan Penawaran?",
    a: "Ya, bisa. Jaminan Penawaran tersedia untuk semua kualifikasi kontraktor — dari kecil (K1/K2) hingga besar (B1/B2). Limit jaminan yang bisa diberikan akan berbeda sesuai kualifikasi dan kapasitas finansial perusahaan. Untuk paket dengan nilai kecil, proses umumnya lebih sederhana.",
  },
  {
    q: "Apakah bisa mengurus Jaminan Penawaran tanpa laporan keuangan yang diaudit?",
    a: "Bisa untuk banyak kasus, terutama untuk paket bernilai kecil hingga menengah. Laporan keuangan internal yang ditandatangani direktur seringkali sudah cukup. Namun untuk paket bernilai besar atau kontraktor yang pertama kali mengajukan, laporan yang diaudit akuntan publik tentu lebih kuat.",
  },
  {
    q: "Bagaimana cara mengkonfirmasi keaslian Jaminan Penawaran jika panitia mempertanyakannya?",
    a: "Dokumen Jaminan Penawaran dari perusahaan surety yang berizin OJK bisa dikonfirmasi keasliannya melalui kontak resmi perusahaan surety yang tercantum dalam dokumen. Konsultan kami juga bisa membantu proses konfirmasi jika diperlukan.",
  },
];

export default function ArtikelCaraMengurusJaminanPenawaran() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <div className="pt-[68px]">

        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Cara Mengurus Jaminan Penawaran Jogja</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-surety-bond/jaminan-penawaran" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                📋 Jaminan Penawaran
              </Link>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/40 text-xs">Panduan Syarat & Alur</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Cara Mengurus Jaminan Penawaran<br /><em className="not-italic text-gold">(Bid Bond) di Jogja</em> —<br />Syarat, Alur & Tips Agar Lancar
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Jaminan Penawaran adalah dokumen pertama yang wajib ada sebelum penawaran Anda bahkan dibuka oleh panitia. Tanpanya, peluang proyek hangus di meja administrasi. Panduan ini menjelaskan semua yang perlu Anda tahu — dari syarat dokumen hingga hal-hal yang sering menjadi penghambat.
            </p>
            <div className="flex gap-3 text-xs text-white/40 flex-wrap">
              <span>✍️ Rio MD — Konsultan Asuransi Kerugian</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 8 menit</span>
            </div>
          </div>
        </section>

        {/* Konten Artikel */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Ringkasan */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Yang perlu Anda tahu:</strong> Jaminan Penawaran (Bid Bond) adalah instrumen surety bond yang menyatakan bahwa peserta tender bersungguh-sungguh dan siap melaksanakan kontrak jika menang. Diterbitkan oleh perusahaan asuransi berizin OJK — bukan bank — dengan proses yang lebih fleksibel. File digital dikirim online, dokumen asli dikirim melalui kurir atau ojol ke alamat Anda.
            </p>
          </div>

          {/* Apa itu Bid Bond */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Apa Itu Jaminan Penawaran dan Mengapa Wajib Ada?
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-4">
            Jaminan Penawaran adalah dokumen jaminan yang dikeluarkan perusahaan surety (asuransi) atas permintaan kontraktor (disebut <em>principal</em>) kepada pemilik proyek (disebut <em>obligee</em>). Isinya menyatakan: jika kontraktor ini menang tender tapi kemudian menolak menandatangani kontrak atau menarik penawaran, maka perusahaan surety akan memberikan kompensasi kepada pemilik proyek.
          </p>
          <p className="text-[#64748B] text-base leading-relaxed mb-4">
            Bagi pemilik proyek — terutama instansi pemerintah — ini adalah mekanisme seleksi serius. Peserta tender yang tidak bersedia menyerahkan Jaminan Penawaran dianggap tidak memiliki komitmen yang cukup untuk mengikuti proses pengadaan.
          </p>
          <p className="text-[#64748B] text-base leading-relaxed mb-8">
            Berdasarkan <strong>Perpres No. 12 Tahun 2021</strong> tentang Pengadaan Barang/Jasa Pemerintah, Jaminan Penawaran wajib dilampirkan dalam dokumen penawaran untuk seluruh paket pengadaan konstruksi di atas nilai tertentu. Tanpa dokumen ini, penawaran dinyatakan tidak memenuhi syarat administrasi dan langsung gugur.
          </p>

          {/* Syarat dari sisi kontraktor */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Syarat yang Harus Dipenuhi Kontraktor
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Sebelum mengajukan Jaminan Penawaran, ada syarat mendasar dari sisi perusahaan Anda yang harus terpenuhi. Perusahaan surety akan mengevaluasi hal-hal berikut sebelum memutuskan menerbitkan jaminan:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {syaratDariSisiKontraktor.map((s, i) => (
              <div key={i} className="bg-cream rounded-card p-5 border border-black/6 grid grid-cols-[auto_1fr] gap-4">
                <div className="bg-navy text-gold font-heading font-bold text-xs w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</div>
                <div>
                  <div className="font-heading text-navy font-bold text-sm mb-1">{s.syarat}</div>
                  <p className="text-sm text-[#64748B] leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dokumen yang dibutuhkan */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Dokumen yang Perlu Disiapkan
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Berikut daftar lengkap dokumen yang umumnya dibutuhkan untuk pengajuan Jaminan Penawaran. Semua dikirim dalam format digital (foto atau scan) melalui WhatsApp atau email:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {dokumenYangDibutuhkan.map((kat) => (
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
                        <div className="text-xs text-[#64748B] leading-relaxed mt-0.5">{item.ket}</div>
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
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Berikut alur lengkap dari membaca RKS hingga dokumen siap dilampirkan ke penawaran:
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
                    <p className="text-sm text-[#64748B] leading-relaxed mb-3">{a.desc}</p>
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

          {/* Checklist sebelum serahkan */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Checklist: Periksa Dokumen Sebelum Dilampirkan ke Penawaran
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Setelah menerima dokumen Jaminan Penawaran, lakukan verifikasi mandiri sebelum memasukkan ke amplop penawaran atau mengupload ke SPSE. Kesalahan kecil di tahap ini bisa berakibat fatal:
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
              <strong className="text-gold">💡 Tips dari Konsultan:</strong> Jika ada keraguan tentang format atau isi dokumen, hubungi panitia pengadaan untuk konfirmasi sebelum batas upload. Lebih baik bertanya terlebih dahulu daripada dokumen ditolak di tahap evaluasi administrasi.
            </p>
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Ada Tender yang Sedang Disiapkan?</div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-4">
              Konsultasikan kebutuhan Jaminan Penawaran Anda. Ceritakan paket tender, nilai HPS, dan batas waktu — kami bantu pastikan semua dokumen sesuai sebelum dilampirkan.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Konsultasi via WhatsApp
              </a>
              <Link href="/asuransi-surety-bond/jaminan-penawaran" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                📋 Halaman Produk Bid Bond →
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
                <p className="text-sm leading-[1.78] text-[#64748B] pb-3">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Internal Links */}
          <div className="border-t border-black/8 pt-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">Baca Juga</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/asuransi-surety-bond/jaminan-penawaran", icon: "📋", judul: "Halaman Produk Jaminan Penawaran", desc: "Informasi lengkap Bid Bond — fungsi, nilai, dan syarat" },
                { href: "/asuransi-surety-bond/jaminan-pelaksanaan", icon: "🏗️", judul: "Jaminan Pelaksanaan (Performance Bond)", desc: "Jaminan berikutnya setelah menang tender" },
                { href: "/artikel/perbedaan-surety-bond-bank-garansi", icon: "🔍", judul: "Surety Bond vs Bank Garansi", desc: "Mana yang lebih menguntungkan untuk kontraktor?" },
                { href: "/artikel/syarat-surety-bond-kontraktor-diy", icon: "✅", judul: "Syarat Surety Bond untuk Kontraktor DIY", desc: "Dokumen dan kualifikasi yang dibutuhkan" },
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
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10">
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
              Butuh Konsultasi Jaminan Penawaran<br />untuk Tender Anda?
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
              Sampaikan nama paket, nilai HPS, dan batas waktu. Kami bantu pastikan persyaratan terpenuhi agar penawaran Anda lolos evaluasi administrasi.
            </p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi Jaminan Penawaran via WhatsApp
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
