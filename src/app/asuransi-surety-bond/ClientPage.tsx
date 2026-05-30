"use client";
// app/asuransi-surety-bond/ClientPage.tsx
// ─── CLIENT COMPONENT ────────────────────────────────────────────────────────

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

// ─── DATA ────────────────────────────────────────────────────────────────────

const produkSuretyBond = [
  {
    id: "penawaran",
    icon: "📋",
    nama: "Jaminan Penawaran",
    inggris: "Bid Bond",
    tagline: "Sebelum memasukkan dokumen penawaran",
    href: "/asuransi-surety-bond/jaminan-penawaran",
    warnaBadge: "bg-blue-50 text-blue-700 border-blue-200",
    warnaAksen: "border-blue-400",
    warnaBg: "bg-blue-50/30",
    deskripsi:
      "Jaminan kepada panitia tender bahwa kontraktor sungguh-sungguh dalam penawarannya — dan bersedia menandatangani kontrak jika ditetapkan sebagai pemenang. Tanpa ini, dokumen penawaran ditolak.",
    kapanDiserahkan: "Bersama dokumen penawaran, sebelum batas waktu pemasukan",
    nilaiJaminan: "1 – 3% dari nilai HPS",
    masaBerlaku: "Sesuai masa berlaku penawaran (28–60 hari kalender)",
    dasarHukum: "Perpres 12/2021 Pasal 33",
    prosesHari: "1–2 hari kerja",
    dokumenUtama: [
      "KTP Direktur + akta perusahaan",
      "SIUJK/NIB yang masih berlaku",
      "NPWP perusahaan",
      "Dokumen pengadaan / undangan tender",
    ],
    risikoJikaTidakAda:
      "Penawaran gugur administrasi — tidak bisa mengikuti proses evaluasi teknis.",
    highlight: "Syarat masuk tender",
    highlightWarna: "bg-blue-700 text-white",
  },
  {
    id: "pelaksanaan",
    icon: "🏆",
    nama: "Jaminan Pelaksanaan",
    inggris: "Performance Bond",
    tagline: "Setelah menang tender, sebelum tanda tangan kontrak",
    href: "/asuransi-surety-bond/jaminan-pelaksanaan",
    warnaBadge: "bg-gold/15 text-amber-700 border-amber-200",
    warnaAksen: "border-gold",
    warnaBg: "bg-gold/4",
    deskripsi:
      "Jaminan kepada pemilik proyek (PPK) bahwa kontraktor akan melaksanakan pekerjaan sesuai kontrak. Ini adalah jaminan paling kritis — terlambat menyerahkan berakibat kontrak batal dan masuk blacklist.",
    kapanDiserahkan: "Maksimal 14 hari kerja setelah terima SPPBJ — sebelum kontrak ditandatangani",
    nilaiJaminan: "5% dari nilai kontrak (atau 5% HPS jika penawaran < 80% HPS)",
    masaBerlaku: "Sama dengan masa pelaksanaan kontrak + 14 hari kalender",
    dasarHukum: "Perpres 12/2021 Pasal 36",
    prosesHari: "1–2 hari kerja",
    dokumenUtama: [
      "KTP Direktur + akta perusahaan",
      "SIUJK/NIB yang masih berlaku",
      "NPWP perusahaan",
      "SPPBJ (Surat Penunjukan Pemenang)",
    ],
    risikoJikaTidakAda:
      "Kontrak dibatalkan, Jaminan Penawaran dicairkan, kontraktor masuk Daftar Hitam LKPP hingga 2 tahun.",
    highlight: "Paling kritis — deadline 14 hari",
    highlightWarna: "bg-amber-600 text-white",
  },
  {
    id: "uangmuka",
    icon: "💰",
    nama: "Jaminan Uang Muka",
    inggris: "Advance Payment Bond",
    tagline: "Sebelum uang muka (DP) dicairkan",
    href: "/asuransi-surety-bond/jaminan-uang-muka",
    warnaBadge: "bg-green-50 text-green-700 border-green-200",
    warnaAksen: "border-green-400",
    warnaBg: "bg-green-50/30",
    deskripsi:
      "Jaminan kepada PPK bahwa uang muka yang diberikan akan digunakan sesuai peruntukan dan dikembalikan (melalui kompensasi termin) jika kontraktor gagal melaksanakan pekerjaan.",
    kapanDiserahkan: "Sebelum uang muka dicairkan — setelah kontrak ditandatangani",
    nilaiJaminan: "Sama dengan nilai uang muka yang diterima (umumnya 20–30% nilai kontrak)",
    masaBerlaku: "Sampai uang muka terkompensasi sepenuhnya melalui pemotongan termin",
    dasarHukum: "Perpres 12/2021 Pasal 37",
    prosesHari: "1–3 hari kerja",
    dokumenUtama: [
      "KTP Direktur + akta perusahaan",
      "SIUJK/NIB yang masih berlaku",
      "NPWP perusahaan",
      "Kontrak yang sudah ditandatangani",
    ],
    risikoJikaTidakAda:
      "Uang muka tidak dapat dicairkan — kontraktor harus membiayai pekerjaan awal dari modal sendiri.",
    highlight: "Syarat cair uang muka",
    highlightWarna: "bg-green-700 text-white",
  },
  {
    id: "pemeliharaan",
    icon: "🔧",
    nama: "Jaminan Pemeliharaan",
    inggris: "Maintenance Bond",
    tagline: "Saat serah terima pertama (PHO)",
    href: "/asuransi-surety-bond/jaminan-pemeliharan",
    warnaBadge: "bg-purple-50 text-purple-700 border-purple-200",
    warnaAksen: "border-purple-400",
    warnaBg: "bg-purple-50/30",
    deskripsi:
      "Jaminan kepada PPK bahwa kontraktor akan memperbaiki kerusakan atau cacat yang ditemukan selama masa pemeliharaan. Diserahkan saat PHO sebagai pengganti retensi 5% yang ditahan — kontraktor menerima pembayaran penuh.",
    kapanDiserahkan: "Saat pengajuan Serah Terima Pertama (PHO)",
    nilaiJaminan: "5% dari nilai kontrak",
    masaBerlaku: "Masa pemeliharaan — umumnya 6–12 bulan setelah PHO",
    dasarHukum: "Perpres 12/2021 Pasal 38",
    prosesHari: "1–3 hari kerja",
    dokumenUtama: [
      "KTP Direktur + akta perusahaan",
      "SIUJK/NIB yang masih berlaku",
      "NPWP perusahaan",
      "Kontrak + Berita Acara PHO",
    ],
    risikoJikaTidakAda:
      "Retensi 5% ditahan PPK hingga FHO — kontraktor tidak menerima pembayaran penuh saat PHO.",
    highlight: "Tukar retensi 5%",
    highlightWarna: "bg-purple-700 text-white",
  },
];

const tabelPerbandingan = [
  {
    aspek: "Nama Internasional",
    penawaran: "Bid Bond",
    pelaksanaan: "Performance Bond",
    uangMuka: "Advance Payment Bond",
    pemeliharaan: "Maintenance Bond",
  },
  {
    aspek: "Diserahkan kepada",
    penawaran: "Panitia / Pokja pengadaan",
    pelaksanaan: "PPK (sebelum kontrak)",
    uangMuka: "PPK (sebelum DP cair)",
    pemeliharaan: "PPK (saat PHO)",
  },
  {
    aspek: "Nilai Jaminan",
    penawaran: "1–3% HPS",
    pelaksanaan: "5% nilai kontrak",
    uangMuka: "= Nilai DP yang diterima",
    pemeliharaan: "5% nilai kontrak",
  },
  {
    aspek: "Masa Berlaku",
    penawaran: "28–60 hari (masa penawaran)",
    pelaksanaan: "Masa pelaksanaan + 14 hari",
    uangMuka: "Sampai DP terkompensasi",
    pemeliharaan: "6–12 bulan (masa pemeliharaan)",
  },
  {
    aspek: "Proses Penerbitan",
    penawaran: "1–2 hari kerja",
    pelaksanaan: "1–2 hari kerja",
    uangMuka: "1–3 hari kerja",
    pemeliharaan: "1–3 hari kerja",
  },
  {
    aspek: "Konsekuensi Dicairkan",
    penawaran: "Kontraktor kehilangan nilai jaminan",
    pelaksanaan: "Blacklist LKPP + nilai jaminan dicairkan",
    uangMuka: "DP harus dikembalikan + denda",
    pemeliharaan: "Kontraktor wajib perbaiki atau ganti rugi",
  },
  {
    aspek: "Dokumen Kunci",
    penawaran: "Dokumen pengadaan / undangan",
    pelaksanaan: "SPPBJ",
    uangMuka: "Kontrak yang ditandatangani",
    pemeliharaan: "Kontrak + BA PHO",
  },
];

const keunggulanVsBankGaransi = [
  {
    aspek: "Proses Penerbitan",
    suretyBond: "1–3 hari kerja",
    bankGaransi: "5–14 hari kerja",
    unggul: true,
  },
  {
    aspek: "Persyaratan Agunan",
    suretyBond: "Umumnya tanpa agunan fisik",
    bankGaransi: "Seringkali butuh agunan atau setoran jaminan",
    unggul: true,
  },
  {
    aspek: "Biaya / Premi",
    suretyBond: "Lebih terjangkau — premi asuransi",
    bankGaransi: "Bunga + biaya administrasi bank",
    unggul: true,
  },
  {
    aspek: "Pengaruh ke Limit Kredit Bank",
    suretyBond: "Tidak mempengaruhi fasilitas kredit bank",
    bankGaransi: "Mengurangi plafon kredit yang tersedia",
    unggul: true,
  },
  {
    aspek: "Dasar Hukum Penerimaan",
    suretyBond: "Perpres 12/2021 + PMK 45/2020",
    bankGaransi: "Perpres 12/2021",
    unggul: false,
  },
  {
    aspek: "Fleksibilitas Nilai & Masa",
    suretyBond: "Lebih fleksibel untuk penyesuaian",
    bankGaransi: "Tergantung kebijakan bank masing-masing",
    unggul: true,
  },
  {
    aspek: "Pengalaman Familiar Panitia",
    suretyBond: "Sudah diterima luas di DIY",
    bankGaransi: "Sudah sangat familiar",
    unggul: false,
  },
];

const alurPengajuan = [
  {
    no: "01",
    judul: "Hubungi Konsultan via WA",
    detail:
      "Beritahu jenis jaminan yang dibutuhkan, nilai proyek, dan tenggat waktu. Kami langsung konfirmasi ketersediaan dan estimasi premi hari itu juga.",
    ikon: "💬",
    durasi: "Hari yang sama",
  },
  {
    no: "02",
    judul: "Kirim Dokumen via WA / Email",
    detail:
      "Scan KTP, akta, SIUJK, NPWP, dan dokumen proyek (undangan tender / SPPBJ / kontrak sesuai jenis jaminan). Semua bisa dikirim digital.",
    ikon: "📎",
    durasi: "30 menit – 2 jam",
  },
  {
    no: "03",
    judul: "Proses & Konfirmasi Premi",
    detail:
      "Kami proses ke perusahaan surety. Anda menerima konfirmasi nominal premi untuk disetujui sebelum diterbitkan.",
    ikon: "⚙️",
    durasi: "1–2 jam setelah dokumen lengkap",
  },
  {
    no: "04",
    judul: "Bayar & Surat Jaminan Terbit",
    detail:
      "Setelah pembayaran premi dikonfirmasi, surat jaminan diterbitkan dan dikirimkan dalam format PDF. Bisa juga dicetak fisik sesuai kebutuhan tender.",
    ikon: "✅",
    durasi: "Hari yang sama setelah pembayaran",
  },
];

const artikelTerkait = [
  {
    href: "/artikel/syarat-asuransi-tender-pemerintah-diy",
    icon: "📋",
    judul: "Syarat Asuransi Tender Pemerintah DIY",
    desc: "Timeline lengkap 5 jaminan dari penawaran hingga FHO",
    badge: "Panduan Tender",
  },
  {
    href: "/artikel/asuransi-kontraktor-proyek-jogja",
    icon: "🔨",
    judul: "Panduan Lengkap Asuransi Kontraktor",
    desc: "Semua asuransi yang dibutuhkan kontraktor dari A–Z",
    badge: "Panduan A–Z",
  },
  {
    href: "/artikel/perbedaan-surety-bond-bank-garansi",
    icon: "🏦",
    judul: "Surety Bond vs Bank Garansi — Apa Bedanya?",
    desc: "Perbandingan detail dan kapan masing-masing lebih menguntungkan",
    badge: "Perbandingan",
  },
  {
    href: "/artikel/cara-mengurus-jaminan-penawaran-jogja",
    icon: "📄",
    judul: "Cara Mengurus Jaminan Penawaran di Jogja",
    desc: "Langkah demi langkah dari dokumen hingga surat jaminan terbit",
    badge: "Panduan Praktis",
  },
];

const faqItems = [
  {
    q: "Apakah surety bond dari perusahaan asuransi benar-benar diterima panitia tender pemerintah DIY?",
    a: "Ya, dan ini sudah berlaku sejak Perpres 16/2018 diperbarui dengan Perpres 12/2021. Kami telah menerbitkan ribuan surat jaminan yang diterima di proyek APBN (Balai Jalan Nasional, BBWSO), APBD DIY, maupun APBD kabupaten Sleman, Bantul, Kulon Progo, dan Gunung Kidul. Syaratnya: perusahaan asuransi harus terdaftar di OJK dan masuk daftar Menteri Keuangan — dan kami memenuhi syarat tersebut.",
  },
  {
    q: "Berapa premi surety bond untuk proyek Rp 5 miliar?",
    a: "Jaminan Penawaran (1% HPS, misal HPS Rp 5 M → jaminan Rp 50 juta): premi estimasi Rp 100–250 ribu. Jaminan Pelaksanaan (5% kontrak = Rp 250 juta): premi estimasi Rp 500 ribu – Rp 2 juta tergantung tenor. Jaminan Pemeliharaan (5% kontrak = Rp 250 juta, 12 bulan): estimasi Rp 375 ribu – Rp 1,5 juta. Angka ini estimasi — hubungi kami untuk perhitungan resmi berdasarkan nilai dan durasi spesifik.",
  },
  {
    q: "Apakah surat jaminan bisa diterbitkan dalam satu hari untuk kebutuhan mendesak?",
    a: "Sangat sering kami lakukan. Selama dokumen lengkap diterima sebelum pukul 12.00 siang, surat jaminan umumnya bisa diterbitkan di hari yang sama. Untuk kebutuhan mendesak, hubungi kami langsung via WhatsApp dan sebutkan deadline Anda — kami akan upayakan semaksimal mungkin.",
  },
  {
    q: "Apa yang harus dilakukan jika proyek terlambat dan jaminan hampir kedaluwarsa?",
    a: "Segera hubungi kami minimal 14 hari sebelum jatuh tempo untuk mengajukan perpanjangan. Perpanjangan jaminan (extension) memerlukan pembayaran premi tambahan dan dokumen addendum kontrak atau surat perpanjangan dari PPK. Jangan tunggu sampai jaminan benar-benar kedaluwarsa — PPK bisa mencairkan jaminan yang sudah lewat masa berlakunya.",
  },
  {
    q: "Bisakah kontraktor dari luar Yogyakarta mengurus surety bond untuk proyek di DIY?",
    a: "Bisa. Kami melayani kontraktor dari seluruh Jawa — dan bahkan luar Jawa — yang mengerjakan proyek di wilayah Yogyakarta dan sekitarnya. Seluruh proses bisa dilakukan secara digital; dokumen dikirim via WhatsApp atau email, surat jaminan diterbitkan digital dan bisa dicetak sendiri.",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ClientPage() {
  const [activeTab, setActiveTab] = useState<
    "penawaran" | "pelaksanaan" | "uangmuka" | "pemeliharaan"
  >("penawaran");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const produkAktif = produkSuretyBond.find((p) => p.id === activeTab)!;

  return (
    <>
      <Header />
      <div className="pt-[68px]">

        {/* ── Breadcrumb ── */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Surety Bond</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 75% at 85% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 max-w-[640px]">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold3 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              📋 Surety Bond — Yogyakarta & DIY
            </div>
            <h1 className="font-heading text-[clamp(2rem,3.8vw,3.2rem)] text-white leading-[1.18] mb-5">
              Surety Bond untuk Kontraktor<br />
              Tender Pemerintah{" "}
              <em className="not-italic text-gold">DIY</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] mb-7 max-w-[520px]">
              Jaminan Penawaran, Pelaksanaan, Uang Muka, dan Pemeliharaan — diterbitkan dalam
              1–2 hari kerja, diterima di semua pengadaan pemerintah DIY, lebih cepat dan
              lebih terjangkau dari bank garansi.
            </p>
            {/* Stat strip */}
            <div className="flex flex-wrap gap-x-7 gap-y-3 mb-8">
              {[
                { angka: "1–2", label: "Hari terbit" },
                { angka: "4", label: "Jenis jaminan" },
                { angka: "11+", label: "Tahun pengalaman" },
                { angka: "Gratis", label: "Konsultasi" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-gold font-bold text-xl leading-none">{s.angka}</div>
                  <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-gold text-navy px-6 py-3 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all hover:-translate-y-px inline-flex items-center gap-2"
              >
                💬 Minta Jaminan Sekarang
              </a>
              <a
                href="#produk"
                className="border border-white/25 text-white/80 px-6 py-3 rounded-lg text-sm no-underline hover:border-gold/50 hover:text-gold transition-all inline-flex items-center gap-2"
              >
                📋 Lihat 4 Jenis Jaminan ↓
              </a>
            </div>
          </div>
        </section>

        {/* ── Intro 4 Kartu Cepat ── */}
        <section className="py-12 px-[5vw] max-w-[900px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {produkSuretyBond.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-white border border-black/8 rounded-card p-4 no-underline hover:border-gold/40 hover:shadow-md hover:-translate-y-0.5 transition-all group text-center"
              >
                <div className="text-2xl mb-2">{p.icon}</div>
                <div className="font-heading font-bold text-navy text-xs group-hover:text-gold transition-colors mb-1 leading-snug">
                  {p.nama}
                </div>
                <div className="text-[0.65rem] text-[#94A3B8] leading-tight mb-2">{p.tagline}</div>
                <div className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full border inline-block ${p.warnaBadge}`}>
                  {p.nilaiJaminan}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Tab Produk Interaktif ── */}
        <section id="produk" className="py-12 px-[5vw] bg-cream">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">4 Produk Surety Bond</p>
              <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy">
                Pilih Jaminan Sesuai Tahapan Tender Anda
              </h2>
            </div>

            {/* Tab Selector */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {produkSuretyBond.map((p) => (
                <button
                  key={p.id}
                  onClick={() =>
                    setActiveTab(p.id as "penawaran" | "pelaksanaan" | "uangmuka" | "pemeliharaan")
                  }
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all border ${
                    activeTab === p.id
                      ? "bg-navy text-white border-navy shadow-sm"
                      : "bg-white text-[#64748B] border-black/10 hover:text-navy hover:border-navy/30"
                  }`}
                >
                  <span>{p.icon}</span>
                  <span className="hidden sm:inline">{p.nama}</span>
                  <span className="sm:hidden text-xs">{p.inggris}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className={`bg-white rounded-card border border-black/8 overflow-hidden shadow-sm`}>
              {/* Header */}
              <div className={`border-l-4 ${produkAktif.warnaAksen} p-6 border-b border-black/6`}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-2xl">{produkAktif.icon}</span>
                      <span className="font-heading font-bold text-navy text-xl">{produkAktif.nama}</span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${produkAktif.warnaBadge}`}>
                        {produkAktif.inggris}
                      </span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${produkAktif.highlightWarna}`}>
                        {produkAktif.highlight}
                      </span>
                    </div>
                    <p className="text-[#64748B] text-sm leading-relaxed max-w-[520px]">
                      {produkAktif.deskripsi}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs text-[#94A3B8] uppercase tracking-wide font-semibold mb-0.5">Proses</div>
                    <div className="font-heading font-bold text-navy text-lg">{produkAktif.prosesHari}</div>
                  </div>
                </div>
              </div>

              {/* Detail grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-black/6">
                {/* Kiri — spesifikasi */}
                <div className="p-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">
                    Spesifikasi Jaminan
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: "Diserahkan", val: produkAktif.kapanDiserahkan },
                      { label: "Nilai jaminan", val: produkAktif.nilaiJaminan },
                      { label: "Masa berlaku", val: produkAktif.masaBerlaku },
                      { label: "Dasar hukum", val: produkAktif.dasarHukum },
                    ].map((item) => (
                      <div key={item.label}>
                        <span className="text-[0.65rem] text-[#94A3B8] uppercase tracking-wide font-semibold block mb-0.5">
                          {item.label}
                        </span>
                        <span className="text-sm text-navy2 leading-snug">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kanan — dokumen + risiko */}
                <div className="p-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-3">
                    Dokumen yang Dibutuhkan
                  </p>
                  <ul className="flex flex-col gap-2 mb-5">
                    {produkAktif.dokumenUtama.map((dok, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-gold flex-shrink-0 mt-0.5 font-bold text-xs">✓</span>
                        <span className="text-sm text-navy2 leading-snug">{dok}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-red-50 border border-red-100 rounded-xl p-3.5">
                    <p className="text-xs text-red-700 leading-relaxed">
                      <strong>⚠️ Jika tidak ada:</strong> {produkAktif.risikoJikaTidakAda}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="px-6 py-4 bg-cream/60 border-t border-black/6 flex items-center justify-between flex-wrap gap-3">
                <p className="text-xs text-[#64748B]">
                  Proses cepat — dokumen bisa dikirim via WhatsApp
                </p>
                <div className="flex gap-2.5">
                  <a
                    href={`https://wa.me/${KONTAK.wa}`}
                    className="bg-gold text-navy px-4 py-2 rounded-lg font-bold text-xs no-underline hover:bg-gold2 transition-all"
                  >
                    💬 Minta Jaminan Ini
                  </a>
                  <Link
                    href={produkAktif.href}
                    className="border border-navy/20 text-navy px-4 py-2 rounded-lg text-xs no-underline hover:border-gold hover:text-gold transition-all"
                  >
                    Halaman Lengkap →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Surety Bond vs Bank Garansi ── */}
        <section className="py-14 px-[5vw] max-w-[900px] mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Perbandingan</p>
            <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-3">
              Surety Bond vs Bank Garansi
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed max-w-[560px]">
              Keduanya memiliki kedudukan hukum yang setara. Tapi ada perbedaan praktis yang
              penting bagi kontraktor:
            </p>
          </div>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[28%]">
                    Aspek
                  </th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold w-[36%]">
                    📋 Surety Bond (Asuransi)
                  </th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tr-xl w-[36%]">
                    🏦 Bank Garansi
                  </th>
                </tr>
              </thead>
              <tbody>
                {keunggulanVsBankGaransi.map((row, i) => (
                  <tr key={row.aspek} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 font-semibold text-navy text-xs align-top">{row.aspek}</td>
                    <td className={`p-3.5 text-sm leading-relaxed align-top ${row.unggul ? "text-navy2 font-medium" : "text-[#64748B]"}`}>
                      {row.unggul && <span className="text-gold mr-1.5">✓</span>}
                      {row.suretyBond}
                    </td>
                    <td className="p-3.5 text-[#64748B] text-sm leading-relaxed align-top">
                      {row.bankGaransi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Link
              href="/artikel/perbedaan-surety-bond-bank-garansi"
              className="text-sm text-gold font-semibold no-underline hover:text-gold2 transition-colors"
            >
              Baca perbandingan lengkap Surety Bond vs Bank Garansi →
            </Link>
          </div>
        </section>

        {/* ── Tabel Perbandingan 4 Jenis Jaminan ── */}
        <section className="py-12 px-[5vw] bg-cream">
          <div className="max-w-[900px] mx-auto">
            <div className="mb-6">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">
                Ringkasan
              </p>
              <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy">
                Perbandingan 4 Jenis Surety Bond
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left p-3 font-heading font-semibold text-xs rounded-tl-xl w-[20%]">
                      Aspek
                    </th>
                    <th className="text-left p-3 font-heading font-semibold text-xs w-[20%]">
                      📋 Penawaran
                    </th>
                    <th className="text-left p-3 font-heading font-semibold text-xs text-gold2 w-[20%]">
                      🏆 Pelaksanaan
                    </th>
                    <th className="text-left p-3 font-heading font-semibold text-xs w-[20%]">
                      💰 Uang Muka
                    </th>
                    <th className="text-left p-3 font-heading font-semibold text-xs text-gold3 rounded-tr-xl w-[20%]">
                      🔧 Pemeliharaan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tabelPerbandingan.map((row, i) => (
                    <tr key={row.aspek} className={i % 2 === 0 ? "bg-white" : "bg-cream/70"}>
                      <td className="p-3 font-semibold text-navy text-xs align-top">{row.aspek}</td>
                      <td className="p-3 text-[#64748B] text-xs leading-snug align-top">{row.penawaran}</td>
                      <td className="p-3 text-navy2 text-xs leading-snug font-medium align-top">{row.pelaksanaan}</td>
                      <td className="p-3 text-[#64748B] text-xs leading-snug align-top">{row.uangMuka}</td>
                      <td className="p-3 text-[#64748B] text-xs leading-snug align-top">{row.pemeliharaan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Alur Pengajuan ── */}
        <section className="py-14 px-[5vw] max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Cara Kerja</p>
            <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy">
              Proses Pengajuan — 4 Langkah Mudah
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {alurPengajuan.map((l, i) => (
              <div key={l.no} className="relative">
                {i < alurPengajuan.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%-8px)] w-4 h-0.5 bg-gold/30 z-10" />
                )}
                <div className="bg-white rounded-card border border-black/8 p-5 h-full hover:border-gold/30 transition-colors">
                  <div className="font-heading text-gold font-bold text-2xl mb-1">{l.no}</div>
                  <div className="text-2xl mb-2">{l.ikon}</div>
                  <div className="font-semibold text-navy text-sm mb-2">{l.judul}</div>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-3">{l.detail}</p>
                  <div className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold text-[#94A3B8] bg-cream rounded-full px-2.5 py-1 border border-black/6">
                    ⏱️ {l.durasi}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Tengah ── */}
        <section className="py-10 px-[5vw]">
          <div className="max-w-[900px] mx-auto bg-gold/8 border border-gold/25 rounded-card p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <div className="font-heading font-bold text-navy text-base mb-1">
                Perlu jaminan hari ini?
              </div>
              <p className="text-[#64748B] text-sm">
                Kirim dokumen via WhatsApp sekarang — surat jaminan bisa terbit hari ini
                untuk dokumen yang masuk sebelum pukul 12.00.
              </p>
            </div>
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-gold text-navy px-6 py-3 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all whitespace-nowrap flex-shrink-0"
            >
              💬 Kirim Dokumen via WA
            </a>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 px-[5vw] max-w-[780px] mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">FAQ</p>
            <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-black/8">
            {faqItems.map((f, i) => (
              <div key={i} className="py-1">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-3 text-left font-semibold text-[0.9rem] text-navy flex justify-between items-center gap-4 bg-transparent border-none cursor-pointer"
                >
                  <span>{f.q}</span>
                  <span
                    className={`text-gold text-xl flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="text-sm leading-[1.78] text-[#64748B] pb-4 pr-8">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Artikel Terkait ── */}
        <section className="py-12 px-[5vw] bg-cream">
          <div className="max-w-[900px] mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-5">
              Artikel & Panduan
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {artikelTerkait.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="bg-white border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group"
                >
                  <span className="text-xl flex-shrink-0">{a.icon}</span>
                  <div>
                    <div className="text-[0.65rem] font-bold text-[#94A3B8] uppercase tracking-wide mb-0.5">
                      {a.badge}
                    </div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">
                      {a.judul}
                    </div>
                    <div className="text-xs text-[#64748B]">{a.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sub-produk Cards ── */}
        <section className="py-14 px-[5vw] max-w-[900px] mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-5">
            Halaman Produk Lengkap
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {produkSuretyBond.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={`border border-black/8 rounded-card p-4 no-underline hover:border-gold/40 hover:shadow-md hover:-translate-y-0.5 transition-all group ${p.warnaBg}`}
              >
                <div className="text-2xl mb-2">{p.icon}</div>
                <div className="font-heading font-bold text-navy text-xs group-hover:text-gold transition-colors mb-1 leading-snug">
                  {p.nama}
                </div>
                <div className="text-[0.6rem] text-[#64748B] leading-tight mb-3">{p.tagline}</div>
                <div className="text-gold text-xs font-semibold group-hover:underline">
                  Detail & cara urus →
                </div>
              </Link>
            ))}
          </div>
        </section>

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
              Jangan Sampai Kehilangan Kontrak<br />
              karena Jaminan Terlambat
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
              Kami terbitkan surety bond dalam 1–2 hari kerja. Hubungi kami sekarang —
              sampaikan jenis jaminan, nilai proyek, dan deadline Anda.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
              >
                💬 Konsultasi via WhatsApp
              </a>
              <Link
                href="/asuransi-engineering"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                ⚙️ Butuh Asuransi CAR juga?
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
