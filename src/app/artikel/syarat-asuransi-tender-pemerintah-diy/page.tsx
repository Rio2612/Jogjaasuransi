// app/artikel/syarat-asuransi-tender-pemerintah-diy/page.tsx
// TARGET KEYWORD: "syarat asuransi tender pemerintah DIY", "asuransi wajib kontraktor tender yogyakarta"
// INTENT: Informational + Commercial — kontraktor yang baru menang tender atau sedang persiapan penawaran
// SILO: Surety Bond + Engineering cluster — cross-link ke CAR, jaminan-pelaksanaan, jaminan-penawaran

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Syarat Asuransi Tender Pemerintah DIY – Panduan Lengkap Kontraktor | Asuransi Jogja",
  description:
    "Panduan lengkap syarat asuransi untuk tender pemerintah di Yogyakarta: Jaminan Penawaran, Jaminan Pelaksanaan, CAR, dan Jaminan Pemeliharaan. Dasar hukum Perpres 12/2021, urutan pengajuan, dan tips agar dokumen asuransi tidak ditolak panitia.",
  keywords:
    "syarat asuransi tender pemerintah DIY, asuransi kontraktor yogyakarta, jaminan penawaran tender jogja, jaminan pelaksanaan proyek pemerintah, CAR wajib tender yogyakarta, perpres 12 2021 asuransi kontraktor",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/syarat-asuransi-tender-pemerintah-diy",
  },
  openGraph: {
    title: "Syarat Asuransi Tender Pemerintah DIY – Panduan Lengkap Kontraktor",
    description:
      "Jaminan apa saja yang wajib disiapkan kontraktor sebelum dan sesudah menang tender pemerintah di Yogyakarta? Lengkap dengan dasar hukum dan urutan pengajuan.",
    url: "https://asuransijogja.biz.id/artikel/syarat-asuransi-tender-pemerintah-diy",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Syarat Asuransi Tender Pemerintah DIY",
          item: "https://asuransijogja.biz.id/artikel/syarat-asuransi-tender-pemerintah-diy",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Syarat Asuransi Tender Pemerintah DIY – Panduan Lengkap Kontraktor",
      description:
        "Panduan lengkap jenis asuransi dan jaminan yang wajib disiapkan kontraktor untuk mengikuti dan melaksanakan tender pemerintah di Yogyakarta.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Praktisi Asuransi" },
      publisher: {
        "@type": "Organization",
        name: "Asuransi Jogja",
        url: "https://asuransijogja.biz.id",
      },
      datePublished: "2025-03-10",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa saja asuransi yang wajib disiapkan kontraktor untuk tender pemerintah DIY?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ada empat jenis jaminan utama: (1) Jaminan Penawaran sebelum memasukkan penawaran, (2) Jaminan Pelaksanaan setelah dinyatakan menang dan sebelum kontrak ditandatangani, (3) Asuransi CAR (Contractor All Risk) sebelum pekerjaan dimulai, dan (4) Jaminan Pemeliharaan setelah serah terima pertama (PHO). Khusus proyek dengan nilai DP, ditambah Jaminan Uang Muka.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa nilai Jaminan Penawaran untuk tender pemerintah?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Berdasarkan Perpres 12/2021, nilai Jaminan Penawaran untuk pengadaan jasa konstruksi pemerintah berkisar 1–3% dari nilai HPS (Harga Perkiraan Sendiri). Nilai persisnya tercantum dalam Dokumen Pengadaan masing-masing paket tender.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama proses penerbitan polis CAR dan Jaminan Pelaksanaan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jaminan Pelaksanaan dan Jaminan Penawaran melalui surety bond umumnya dapat diterbitkan dalam 1–3 hari kerja setelah dokumen lengkap diterima. Polis CAR membutuhkan 1–3 hari kerja tergantung nilai proyek dan kelengkapan dokumen (RAB, gambar, schedule). Proyek besar di atas Rp 50 miliar umumnya membutuhkan proses underwriting lebih panjang.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah Jaminan Penawaran dari surety bond diterima panitia tender pemerintah DIY?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Berdasarkan Perpres 16/2018 jo. Perpres 12/2021, jaminan penawaran dapat menggunakan Bank Garansi atau Surety Bond dari perusahaan asuransi yang memiliki izin OJK dan tercantum dalam Daftar Perusahaan Penjaminan yang ditetapkan Menteri Keuangan.",
          },
        },
        {
          "@type": "Question",
          name: "Apa yang terjadi jika kontraktor tidak menyerahkan Jaminan Pelaksanaan tepat waktu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jika kontraktor pemenang tidak menyerahkan Jaminan Pelaksanaan dalam batas waktu yang ditentukan (umumnya 14 hari kerja setelah penetapan pemenang), kontrak dapat dibatalkan dan Jaminan Penawaran dicairkan. Kontraktor juga dapat dimasukkan dalam Daftar Hitam (blacklist) pengadaan pemerintah.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const jaminanWajib = [
  {
    urutan: "01",
    nama: "Jaminan Penawaran",
    kapan: "Sebelum memasukkan dokumen penawaran",
    nilai: "1–3% dari nilai HPS",
    masa: "Mengikuti masa berlaku penawaran (umumnya 28–60 hari)",
    dasar: "Perpres 12/2021 Pasal 33",
    icon: "📋",
    warna: "border-blue-200 bg-blue-50/60",
    warnaLabel: "bg-blue-100 text-blue-700",
    link: "/asuransi-surety-bond/jaminan-penawaran",
    catatan: "Wajib diserahkan bersamaan dengan dokumen penawaran. Jika tidak ada, penawaran gugur administrasi.",
  },
  {
    urutan: "02",
    nama: "Jaminan Pelaksanaan",
    kapan: "Setelah ditetapkan sebagai pemenang, sebelum penandatanganan kontrak",
    nilai: "5% dari nilai kontrak (atau 5% dari HPS jika penawaran < 80% HPS)",
    masa: "Sama dengan masa pelaksanaan kontrak + 14 hari",
    dasar: "Perpres 12/2021 Pasal 36",
    icon: "🏆",
    warna: "border-gold/40 bg-gold/5",
    warnaLabel: "bg-gold/15 text-amber-700",
    link: "/asuransi-surety-bond/jaminan-pelaksanaan",
    catatan: "Wajib diserahkan maksimal 14 hari kerja setelah penetapan pemenang. Terlambat = kontrak batal.",
  },
  {
    urutan: "03",
    nama: "Jaminan Uang Muka",
    kapan: "Sebelum uang muka dicairkan (jika ada klausul DP dalam kontrak)",
    nilai: "Sama dengan nilai uang muka yang diterima (umumnya 20–30% kontrak)",
    masa: "Sampai uang muka terkompensasi sepenuhnya",
    dasar: "Perpres 12/2021 Pasal 37",
    icon: "💰",
    warna: "border-green-200 bg-green-50/60",
    warnaLabel: "bg-green-100 text-green-700",
    link: "/asuransi-surety-bond/jaminan-uang-muka",
    catatan: "Tidak semua proyek memberikan DP. Cek dokumen kontrak. Nilai jaminan harus sama persis dengan nilai DP.",
  },
  {
    urutan: "04",
    nama: "Asuransi CAR (Contractor All Risk)",
    kapan: "Sebelum pekerjaan konstruksi dimulai — umumnya syarat pencairan termin pertama",
    nilai: "Nilai kontrak (termasuk material, upah, overhead)",
    masa: "Masa pelaksanaan + masa pemeliharaan (umumnya +12 bulan)",
    dasar: "Perpres 12/2021 + Spesifikasi Teknis masing-masing proyek",
    icon: "🏗️",
    warna: "border-navy/20 bg-navy/3",
    warnaLabel: "bg-navy/10 text-navy",
    link: "/asuransi-engineering/contractor-all-risk",
    catatan: "Polis CAR harus mencantumkan nama owner/bouwheer sebagai co-insured (Principal Clause). Tanpa ini, klaim bisa ditolak.",
  },
  {
    urutan: "05",
    nama: "Jaminan Pemeliharaan",
    kapan: "Diserahkan saat Serah Terima Pertama (PHO) — sebagai pengganti retensi",
    nilai: "5% dari nilai kontrak",
    masa: "Masa pemeliharaan (umumnya 6–12 bulan setelah PHO)",
    dasar: "Perpres 12/2021 Pasal 38",
    icon: "🔧",
    warna: "border-purple-200 bg-purple-50/60",
    warnaLabel: "bg-purple-100 text-purple-700",
    link: "/asuransi-surety-bond/jaminan-pemeliharan",
    catatan: "Berfungsi menggantikan dana retensi 5% yang ditahan PPK. Dengan menyerahkan jaminan ini, kontraktor bisa menerima pembayaran penuh.",
  },
];

const alurTender = [
  {
    fase: "Pra-Tender",
    langkah: [
      { label: "Terima undangan / download dokumen pengadaan", dokumen: null },
      { label: "Siapkan Jaminan Penawaran (surety bond atau bank garansi)", dokumen: "Jaminan Penawaran" },
      { label: "Masukkan dokumen penawaran + jaminan ke panitia", dokumen: null },
    ],
  },
  {
    fase: "Pasca Penetapan Pemenang",
    langkah: [
      { label: "Terima SPPBJ (Surat Penunjukan Penyedia Barang/Jasa)", dokumen: null },
      { label: "Siapkan Jaminan Pelaksanaan — max. 14 hari kerja", dokumen: "Jaminan Pelaksanaan" },
      { label: "Tandatangani kontrak setelah jaminan diserahkan", dokumen: null },
      { label: "Ajukan DP jika ada → siapkan Jaminan Uang Muka", dokumen: "Jaminan Uang Muka" },
    ],
  },
  {
    fase: "Pelaksanaan Pekerjaan",
    langkah: [
      { label: "Siapkan polis CAR sebelum mulai pekerjaan", dokumen: "Asuransi CAR" },
      { label: "Serahkan polis CAR ke PPK — syarat pencairan termin", dokumen: null },
      { label: "Jaga masa berlaku semua jaminan sesuai perpanjangan proyek", dokumen: null },
    ],
  },
  {
    fase: "Serah Terima & Pemeliharaan",
    langkah: [
      { label: "Ajukan Serah Terima Pertama (PHO)", dokumen: null },
      { label: "Serahkan Jaminan Pemeliharaan — tukar dengan retensi 5%", dokumen: "Jaminan Pemeliharaan" },
      { label: "Masa pemeliharaan berjalan — semua jaminan aktif", dokumen: null },
      { label: "Serah Terima Akhir (FHO) — semua kewajiban selesai", dokumen: null },
    ],
  },
];

const kesalahanUmum = [
  {
    kesalahan: "Jaminan sudah kedaluwarsa saat diserahkan",
    dampak: "Panitia menolak dokumen penawaran — gugur administrasi",
    solusi: "Pastikan masa berlaku jaminan minimal sampai batas waktu sanggah + 14 hari. Koordinasikan tanggal dengan konsultan sebelum cetak.",
  },
  {
    kesalahan: "Nama tertanggung tidak sesuai persis dengan nama di SIUJK/NIB",
    dampak: "PPK menolak polis — kontraktor harus urus endorsement atau cetak ulang",
    solusi: "Berikan copy SIUJK dan akta perusahaan terbaru kepada konsultan sebelum proses penerbitan jaminan.",
  },
  {
    kesalahan: "Polis CAR tidak mencantumkan Principal Clause (nama owner)",
    dampak: "Klaim CAR bisa ditolak karena owner tidak terdaftar sebagai tertanggung",
    solusi: "Selalu minta Principal Clause saat pesan polis CAR proyek pemerintah. Sebutkan nama instansi pemilik proyek secara lengkap.",
  },
  {
    kesalahan: "Nilai Jaminan Pelaksanaan dihitung dari nilai penawaran, bukan dari HPS",
    dampak: "Jika penawaran < 80% HPS, nilai jaminan harus 5% dari HPS — bukan dari nilai penawaran",
    solusi: "Cek dahulu: apakah penawaran Anda ≥ 80% HPS atau tidak. Jika di bawah, konsultasikan nilai jaminan dengan PPK sebelum cetak.",
  },
  {
    kesalahan: "Lupa memperpanjang jaminan saat proyek terlambat",
    dampak: "Jaminan kedaluwarsa di tengah proyek — PPK bisa mencairkan jaminan pelaksanaan",
    solusi: "Pasang reminder 30 hari sebelum jatuh tempo. Konsultan kami membantu monitoring masa berlaku semua jaminan aktif Anda.",
  },
];

const dokumenPengajuan = [
  { dok: "KTP/identitas Direktur", untuk: "Semua jenis jaminan" },
  { dok: "Akta pendirian + perubahan terakhir", untuk: "Semua jenis jaminan" },
  { dok: "SIUJK / IUJK yang masih berlaku", untuk: "Semua jenis jaminan" },
  { dok: "NIB (Nomor Induk Berusaha)", untuk: "Semua jenis jaminan" },
  { dok: "NPWP perusahaan", untuk: "Semua jenis jaminan" },
  { dok: "Dokumen pengadaan / undangan tender", untuk: "Jaminan Penawaran" },
  { dok: "SPPBJ (Surat Penunjukan Pemenang)", untuk: "Jaminan Pelaksanaan" },
  { dok: "Kontrak yang sudah ditandatangani", untuk: "Jaminan Uang Muka, CAR, Pemeliharaan" },
  { dok: "RAB / Bill of Quantity proyek", untuk: "Asuransi CAR" },
  { dok: "Jadwal pelaksanaan proyek (S-Curve / schedule)", untuk: "Asuransi CAR" },
  { dok: "Gambar teknis / desain (untuk proyek > Rp 5 miliar)", untuk: "Asuransi CAR" },
];

const faqItems = [
  {
    q: "Apakah surety bond dari perusahaan asuransi diterima sama seperti bank garansi?",
    a: "Ya. Berdasarkan Perpres 16/2018 jo. Perpres 12/2021, surety bond dari perusahaan asuransi yang memiliki izin OJK dan terdaftar sebagai perusahaan penjaminan (sesuai PMK No. 45/PMK.06/2020) memiliki kedudukan hukum yang setara dengan bank garansi. Sebagian besar panitia pengadaan di lingkungan Pemerintah DIY sudah familiar dan menerima surety bond. Prosesnya juga lebih cepat dan premi umumnya lebih terjangkau.",
  },
  {
    q: "Berapa premi Jaminan Penawaran dan Jaminan Pelaksanaan?",
    a: "Premi surety bond sangat terjangkau karena fungsinya sebagai penjaminan, bukan asuransi kerugian. Jaminan Penawaran umumnya berkisar Rp 100–500 ribu tergantung nilai dan masa berlaku. Jaminan Pelaksanaan berkisar 0,2–0,8% dari nilai jaminan per tahun. Hubungi kami untuk simulasi biaya berdasarkan nilai proyek spesifik Anda.",
  },
  {
    q: "Bolehkah kontraktor menggunakan satu konsultan asuransi untuk semua jenis jaminan?",
    a: "Sangat disarankan. Menggunakan satu konsultan untuk semua kebutuhan jaminan — dari Jaminan Penawaran, CAR, hingga Jaminan Pemeliharaan — memudahkan koordinasi, monitoring masa berlaku, dan penanganan jika ada perpanjangan atau klaim. Kami di Asuransi Jogja menangani semua jenis jaminan kontraktor dalam satu layanan terintegrasi.",
  },
  {
    q: "Apa itu PPK dan mengapa nama PPK penting dalam polis?",
    a: "PPK adalah Pejabat Pembuat Komitmen — pihak yang bertanggung jawab atas pelaksanaan kontrak dari sisi pemerintah. Nama PPK dan nama instansi pemilik proyek (owner) wajib tercantum dengan benar di polis CAR sebagai Principal (co-insured). Jika terjadi kesalahan nama, proses klaim atau pencairan jaminan bisa terhambat.",
  },
  {
    q: "Apakah proyek APBD kabupaten/kota di DIY syaratnya sama dengan proyek APBN?",
    a: "Secara umum sama, karena semua mengacu pada Perpres 12/2021. Namun beberapa Pemerintah Kabupaten di DIY memiliki ketentuan tambahan dalam dokumen pengadaan (misalnya persyaratan minimum nilai pertanggungan CAR atau klausul khusus). Kami terbiasa menangani proyek dari APBN, APBD DIY, maupun APBD Kabupaten Sleman, Bantul, Kulon Progo, dan Gunung Kidul.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ArtikelSyaratAsuransiTenderDIY() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }}
      />
      <Header />
      <div className="pt-[68px]">

        {/* ── Breadcrumb ── */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#475569] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Syarat Asuransi Tender Pemerintah DIY</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link
                href="/asuransi-surety-bond"
                className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors"
              >
                📋 Surety Bond
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <Link
                href="/asuransi-engineering/contractor-all-risk"
                className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors"
              >
                🏗️ Asuransi Engineering
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan Praktis</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Syarat Asuransi Tender<br />
              Pemerintah DIY —<br />
              <em className="not-italic text-gold">Panduan Lengkap Kontraktor</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px] mb-6">
              Dari Jaminan Penawaran hingga Jaminan Pemeliharaan — ada 5 jenis dokumen jaminan yang wajib disiapkan kontraktor
              di berbagai tahapan tender pemerintah. Salah satu saja terlambat atau salah nilai, kontrak bisa batal.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio MD — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 8 menit</span>
            </div>
          </div>
        </section>

        {/* ── Konten Utama ── */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead Box */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Jawaban Singkat:</strong> Kontraktor yang mengikuti dan melaksanakan
              tender pemerintah di DIY wajib menyiapkan{" "}
              <strong>5 jenis jaminan</strong> — Jaminan Penawaran, Jaminan Pelaksanaan, Jaminan Uang Muka (jika ada DP),{" "}
              <strong>Asuransi CAR</strong>, dan Jaminan Pemeliharaan — sesuai{" "}
              <strong>Perpres 12/2021</strong>. Setiap jaminan memiliki waktu penyerahan berbeda dan konsekuensi serius jika terlambat.
            </p>
          </div>

          {/* Dasar Hukum */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Dasar Hukum — Mengapa Jaminan Ini Wajib?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-4">
            Kewajiban asuransi dan jaminan dalam pengadaan barang/jasa pemerintah diatur dalam{" "}
            <strong className="text-navy">Peraturan Presiden Nomor 12 Tahun 2021</strong> tentang Pengadaan Barang/Jasa
            Pemerintah (perubahan atas Perpres 16/2018), yang kemudian dijabarkan lebih teknis melalui{" "}
            Peraturan LKPP Nomor 12 Tahun 2021 tentang Pedoman Pelaksanaan Pengadaan.
          </p>
          <p className="text-[#475569] text-base leading-relaxed mb-4">
            Di lingkungan Pemerintah DIY — baik proyek APBN yang dikelola oleh BBWSO, Balai Pelaksana Jalan Nasional,
            maupun APBD DIY dan APBD kabupaten (Sleman, Bantul, Kulon Progo, Gunung Kidul) — ketentuan ini berlaku
            seragam. Pengalaman kami mendampingi kontraktor di Yogyakarta selama 8 tahun menunjukkan bahwa
            kesalahan administrasi jaminan adalah penyebab terbesar kontraktor gagal kontrak atau terkena sanksi blacklist.
          </p>
          <div className="bg-navy/4 border border-navy/12 rounded-xl p-4 mb-10 flex gap-3">
            <span className="text-lg flex-shrink-0">⚠️</span>
            <p className="text-sm text-navy2 leading-relaxed">
              <strong>Penting:</strong> Jaminan yang diterbitkan oleh perusahaan asuransi (surety bond) harus berasal dari perusahaan yang
              memiliki izin OJK dan tercantum dalam daftar Menteri Keuangan. Jaminan dari perusahaan tidak terdaftar
              otomatis ditolak panitia, meski formatnya terlihat sah.
            </p>
          </div>

          {/* 5 Jaminan Wajib */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            5 Jaminan Wajib Kontraktor — Beserta Nilai & Waktu Penyerahan
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Berikut kelima jenis jaminan secara lengkap, urut sesuai tahapan yang harus dilalui kontraktor:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {jaminanWajib.map((j) => (
              <div key={j.nama} className={`rounded-card p-5 border ${j.warna}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/70 border border-black/8 flex items-center justify-center text-lg shadow-sm">
                    {j.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                      <span className="font-heading font-bold text-navy text-[0.95rem]">{j.nama}</span>
                      <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full ${j.warnaLabel}`}>
                        {j.urutan}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 mb-3">
                      <div>
                        <span className="text-xs text-[#5A6472] uppercase tracking-wide font-semibold">Kapan diserahkan</span>
                        <p className="text-sm text-navy2 leading-snug mt-0.5">{j.kapan}</p>
                      </div>
                      <div>
                        <span className="text-xs text-[#5A6472] uppercase tracking-wide font-semibold">Nilai</span>
                        <p className="text-sm text-navy2 leading-snug mt-0.5">{j.nilai}</p>
                      </div>
                      <div>
                        <span className="text-xs text-[#5A6472] uppercase tracking-wide font-semibold">Masa berlaku</span>
                        <p className="text-sm text-navy2 leading-snug mt-0.5">{j.masa}</p>
                      </div>
                      <div>
                        <span className="text-xs text-[#5A6472] uppercase tracking-wide font-semibold">Dasar hukum</span>
                        <p className="text-sm text-navy2 leading-snug mt-0.5">{j.dasar}</p>
                      </div>
                    </div>
                    <div className="bg-white/60 rounded-lg px-3.5 py-2.5 border border-black/6 mb-3">
                      <p className="text-xs text-[#475569] leading-relaxed">
                        <strong className="text-navy">💡 Catatan penting:</strong> {j.catatan}
                      </p>
                    </div>
                    <Link
                      href={j.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold2 transition-colors no-underline"
                    >
                      Pelajari produk ini →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alur Lengkap */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Alur Lengkap: Kapan Masing-masing Jaminan Dibutuhkan?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Berikut urutan kronologis pengajuan jaminan dari awal proses tender hingga selesai masa pemeliharaan:
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {alurTender.map((fase, fi) => (
              <div key={fase.fase} className="bg-white rounded-card border border-black/8 overflow-hidden">
                <div className="bg-navy px-4 py-2.5 flex items-center gap-2.5">
                  <span className="text-gold font-heading font-bold text-xs">
                    FASE {fi + 1}
                  </span>
                  <span className="text-white font-semibold text-sm">{fase.fase}</span>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  {fase.langkah.map((l, li) => (
                    <div key={li} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cream border border-black/10 flex items-center justify-center text-[0.6rem] font-bold text-navy mt-0.5">
                        {li + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm text-[#475569] leading-snug">{l.label}</p>
                      </div>
                      {l.dokumen && (
                        <span className="flex-shrink-0 text-[0.65rem] font-bold px-2 py-0.5 rounded-full bg-gold/12 text-amber-700 border border-gold/20 whitespace-nowrap">
                          {l.dokumen}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Kesalahan Umum */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            5 Kesalahan yang Paling Sering Terjadi — dan Cara Menghindarinya
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Berdasarkan pengalaman mendampingi ratusan kontraktor di DIY, ini adalah kesalahan administrasi jaminan
            yang paling sering berujung pada penolakan panitia atau bahkan pembatalan kontrak:
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[33%]">Kesalahan</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[30%]">Dampak</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold rounded-tr-xl w-[37%]">✓ Cara Menghindari</th>
                </tr>
              </thead>
              <tbody>
                {kesalahanUmum.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 font-semibold text-navy text-xs align-top">{row.kesalahan}</td>
                    <td className="p-3.5 text-red-700 text-xs leading-relaxed align-top">{row.dampak}</td>
                    <td className="p-3.5 text-[#475569] text-sm leading-relaxed align-top">{row.solusi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dokumen yang Diperlukan */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Dokumen yang Perlu Disiapkan untuk Pengajuan Jaminan
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-5">
            Semakin lengkap dokumen Anda dari awal, semakin cepat polis atau surat jaminan dapat diterbitkan.
            Berikut checklist dokumen yang umumnya dibutuhkan:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-cream border-b-2 border-gold/30">
                  <th className="text-left p-3 font-heading font-semibold text-xs text-navy w-[55%]">Dokumen</th>
                  <th className="text-left p-3 font-heading font-semibold text-xs text-navy w-[45%]">Dibutuhkan untuk</th>
                </tr>
              </thead>
              <tbody>
                {dokumenPengajuan.map((d, i) => (
                  <tr key={i} className={`border-b border-black/5 ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}>
                    <td className="p-3 text-navy2 text-sm align-top">
                      <span className="text-gold mr-2">✓</span>{d.dok}
                    </td>
                    <td className="p-3 text-[#475569] text-xs align-top">{d.untuk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5A6472] mb-10">
            * Dokumen di atas adalah standar umum. Beberapa underwriter mungkin meminta dokumen tambahan untuk proyek dengan
            nilai besar atau lokasi tertentu (misalnya kawasan rawan gempa di Kulon Progo atau Gunung Kidul).
          </p>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">
              Butuh semua jaminan ini dalam satu layanan?
            </div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              Kami bantu kontraktor DIY mengurus Jaminan Penawaran, Jaminan Pelaksanaan, Polis CAR, hingga Jaminan
              Pemeliharaan — dalam satu koordinasi. Konsultasi gratis, proses cepat, dan kami pantau masa berlaku semua
              jaminan Anda.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all"
              >
                💬 Konsultasi via WA — Gratis
              </a>
              <Link
                href="/asuransi-surety-bond"
                className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all"
              >
                📋 Lihat Semua Produk Surety Bond →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            Pertanyaan yang Sering Diajukan Kontraktor
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
            <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Pelajari Lebih Lanjut</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/asuransi-surety-bond/jaminan-penawaran",
                  icon: "📋",
                  judul: "Jaminan Penawaran",
                  desc: "Syarat, nilai, dan cara pengajuan sebelum memasukkan penawaran",
                },
                {
                  href: "/asuransi-surety-bond/jaminan-pelaksanaan",
                  icon: "🏆",
                  judul: "Jaminan Pelaksanaan",
                  desc: "Panduan lengkap setelah menang tender — nilai, waktu, dan risiko",
                },
                {
                  href: "/asuransi-engineering/contractor-all-risk",
                  icon: "🏗️",
                  judul: "Asuransi CAR (Contractor All Risk)",
                  desc: "Cakupan, kalkulator premi, dan cara klaim CAR proyek pemerintah",
                },
                {
                  href: "/artikel/perbedaan-car-ear-asuransi-engineering",
                  icon: "⚙️",
                  judul: "CAR vs EAR — Mana yang Tepat?",
                  desc: "Panduan memilih antara CAR dan EAR untuk jenis proyek berbeda",
                },
                {
                  href: "/artikel/premi-asuransi-car-jogja",
                  icon: "💰",
                  judul: "Berapa Premi CAR di Jogja?",
                  desc: "Tabel estimasi premi dan faktor yang mempengaruhi rate",
                },
                {
                  href: "/artikel/asuransi-kontraktor-proyek-jogja",
                  icon: "🔨",
                  judul: "Panduan Asuransi Kontraktor Jogja",
                  desc: "Semua jenis asuransi yang dibutuhkan kontraktor dari A–Z",
                },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group"
                >
                  <span className="text-xl flex-shrink-0">{a.icon}</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">
                      {a.judul}
                    </div>
                    <div className="text-xs text-[#475569]">{a.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* ── CTA Bottom ── */}
        <section className="py-16 px-[5vw] bg-navy text-center relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
              Siap Ikut Tender?<br />Kami Urus Semua Jaminannya
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
              Dari Jaminan Penawaran hingga Jaminan Pemeliharaan — satu konsultan, satu koordinasi.
              Kontraktor DIY yang bekerja sama dengan kami tidak pernah melewatkan tenggat jaminan.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
              >
                💬 Konsultasi via WhatsApp
              </a>
              <Link
                href="/asuransi-surety-bond"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                📋 Lihat Produk Surety Bond
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
