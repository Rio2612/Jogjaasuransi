// app/artikel/cara-klaim-asuransi-mobil/page.tsx
// TARGET KEYWORD: "cara klaim asuransi mobil", "proses klaim asuransi kendaraan yogyakarta"
// INTENT: How-to — pemilik kendaraan yang baru mengalami kecelakaan atau kehilangan
// SILO: Kendaraan cluster → /mobil + cross-link artikel all-risk vs TLO

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cara Klaim Asuransi Mobil – Panduan Lengkap dari Insiden hingga Dana Cair | Asuransi Jogja",
  description:
    "Panduan step-by-step cara klaim asuransi mobil di Yogyakarta: kecelakaan, kehilangan, hingga kerusakan banjir. Dokumen yang dibutuhkan, batas waktu pelaporan, kesalahan fatal yang harus dihindari, dan tips agar klaim tidak ditolak.",
  keywords:
    "cara klaim asuransi mobil, proses klaim asuransi kendaraan yogyakarta, klaim all risk yogyakarta, dokumen klaim asuransi mobil, klaim asuransi mobil hilang jogja, cara lapor kecelakaan asuransi",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-mobil",
  },
  openGraph: {
    title: "Cara Klaim Asuransi Mobil – Panduan Lengkap dari Insiden hingga Dana Cair",
    description: "Baru mengalami kecelakaan atau kehilangan kendaraan? Panduan langkah demi langkah agar klaim asuransi mobil Anda tidak ditolak.",
    url: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-mobil",
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
        { "@type": "ListItem", position: 3, name: "Cara Klaim Asuransi Mobil", item: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-mobil" },
      ],
    },
    {
      "@type": "Article",
      headline: "Cara Klaim Asuransi Mobil – Panduan Lengkap dari Insiden hingga Dana Cair",
      description: "Panduan step-by-step cara klaim asuransi mobil di Yogyakarta untuk kecelakaan, kehilangan, dan kerusakan banjir.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Praktisi Asuransi" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-05-25",
      dateModified: "2025-06-01",
    },
    {
      "@type": "HowTo",
      name: "Cara Klaim Asuransi Mobil",
      description: "Langkah-langkah mengajukan klaim asuransi kendaraan agar proses berjalan lancar dan tidak ditolak.",
      totalTime: "P7D",
      step: [
        { "@type": "HowToStep", position: 1, name: "Amankan Diri & Dokumentasi", text: "Pastikan keselamatan, hubungi polisi jika perlu, foto kondisi kendaraan dari semua sudut sebelum dipindahkan." },
        { "@type": "HowToStep", position: 2, name: "Lapor ke Konsultan dalam 3×24 Jam", text: "Hubungi konsultan asuransi dalam 3 hari — melewati batas ini bisa jadi alasan penolakan klaim." },
        { "@type": "HowToStep", position: 3, name: "Lengkapi Dokumen Klaim", text: "Siapkan formulir klaim, STNK, SIM, KTP, polis, dan dokumen pendukung sesuai jenis klaim." },
        { "@type": "HowToStep", position: 4, name: "Survei Kendaraan", text: "Bawa kendaraan ke bengkel rekanan atau tunggu surveyor insurer datang ke lokasi." },
        { "@type": "HowToStep", position: 5, name: "Perbaikan & Pengambilan", text: "Kendaraan diperbaiki di bengkel rekanan. Bayar deductible saat pengambilan kendaraan." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa lama batas waktu pelaporan klaim asuransi mobil?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Umumnya 3×24 jam (3 hari kerja) setelah insiden terjadi. Beberapa insurer memberi kelonggaran hingga 5 hari. Melewati batas ini bisa menjadi alasan penolakan klaim yang sah. Laporkan segera meski dokumen belum lengkap — kelengkapan bisa menyusul.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah klaim asuransi mobil bisa ditolak meski polis aktif?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Alasan penolakan yang paling umum: pelaporan terlambat, pengemudi tidak memiliki SIM saat kejadian, kendaraan digunakan di luar peruntukan yang dideklarasikan (misalnya untuk ojek online padahal dideklarasikan kendaraan pribadi), kerusakan masuk kategori pengecualian polis, atau tertanggung memperbaiki kendaraan sendiri tanpa persetujuan insurer.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah harus lapor polisi untuk setiap klaim asuransi mobil?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tidak untuk semua kasus. Laporan polisi (surat keterangan kepolisian) wajib untuk: kehilangan kendaraan, kecelakaan dengan korban jiwa atau luka, dan kerusakan yang melibatkan kendaraan pihak ketiga. Untuk kerusakan ringan akibat kecelakaan tunggal atau kerusakan di parkiran, laporan polisi tidak selalu diperlukan tapi sangat membantu memperkuat klaim.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const langkahKlaimKecelakaan = [
  {
    no: "01", ikon: "🚨",
    judul: "Di Lokasi Kejadian — Amankan & Dokumentasi",
    tipe: "critical",
    detail: "Prioritas pertama: keselamatan. Setelah aman, aktifkan lampu hazard dan pasang segitiga pengaman. Foto kondisi kendaraan dari semua sudut SEBELUM dipindahkan. Catat nomor polisi, kontak, dan identitas pengemudi lain jika ada. Jangan pindahkan kendaraan sebelum dokumentasi selesai kecuali ada bahaya.",
    warna: "bg-red-50 border-red-200",
    warnaNo: "bg-red-100 text-red-700",
  },
  {
    no: "02", ikon: "📞",
    judul: "Hubungi Konsultan dalam 3×24 Jam",
    tipe: "urgent",
    detail: "Hubungi konsultan asuransi segera — meski dokumen belum lengkap. Laporkan dulu, lengkapi dokumen belakangan. Batas waktu 3 hari adalah syarat klaim yang tidak bisa ditawar. Konsultan akan memandu langkah selanjutnya.",
    warna: "bg-amber-50 border-amber-200",
    warnaNo: "bg-amber-100 text-amber-700",
  },
  {
    no: "03", ikon: "📄",
    judul: "Siapkan & Serahkan Dokumen",
    tipe: "action",
    detail: "Dokumen standar: formulir klaim (dari konsultan), fotokopi STNK, SIM pengemudi saat kejadian, KTP tertanggung, polis asuransi, dan foto kerusakan. Untuk kecelakaan dengan pihak ketiga: tambah surat keterangan kepolisian.",
    warna: "bg-blue-50 border-blue-200",
    warnaNo: "bg-blue-100 text-blue-700",
  },
  {
    no: "04", ikon: "🔍",
    judul: "Survei Kendaraan oleh Insurer",
    tipe: "process",
    detail: "Bawa kendaraan ke bengkel rekanan insurer untuk disurvei, atau surveyor insurer datang ke lokasi. Survei menentukan estimasi biaya perbaikan dan persetujuan klaim. Jangan perbaiki kendaraan sebelum disurvei — ini alasan penolakan klaim yang sering terjadi.",
    warna: "bg-purple-50 border-purple-200",
    warnaNo: "bg-purple-100 text-purple-700",
  },
  {
    no: "05", ikon: "🔧",
    judul: "Perbaikan di Bengkel Rekanan",
    tipe: "process",
    detail: "Kendaraan diperbaiki di bengkel rekanan insurer. Biaya perbaikan dibayar langsung oleh insurer ke bengkel. Anda hanya membayar deductible (risiko sendiri) saat pengambilan kendaraan.",
    warna: "bg-slate-50 border-slate-200",
    warnaNo: "bg-slate-100 text-slate-700",
  },
  {
    no: "06", ikon: "✅",
    judul: "Pengambilan Kendaraan",
    tipe: "result",
    detail: "Bayar deductible yang tertera dalam polis (umumnya Rp 150–300 ribu untuk kecelakaan). Periksa kualitas perbaikan sebelum menandatangani berita acara penyelesaian. Jika ada yang tidak memuaskan, sampaikan sebelum tandatangan.",
    warna: "bg-green-50 border-green-200",
    warnaNo: "bg-green-100 text-green-700",
  },
];

const skenarioKhusus = [
  {
    skenario: "Kehilangan Kendaraan (Pencurian)",
    icon: "🔑",
    langkahTambahan: [
      "Lapor polisi SEGERA — maksimal 24 jam setelah sadar kendaraan hilang",
      "Minta Surat Tanda Penerimaan Laporan (STPL) dari polisi",
      "Blokir STNK di Samsat agar kendaraan tidak bisa dibalik nama",
      "Serahkan kunci cadangan asli kepada insurer (beberapa insurer mensyaratkan ini)",
      "Proses klaim kehilangan lebih lama — biasanya 60–90 hari tunggu hasil penyelidikan polisi",
    ],
    catatan: "Jika kendaraan ditemukan kembali dalam kondisi rusak selama proses klaim kehilangan, laporkan segera ke konsultan — ada prosedur khusus untuk skenario ini.",
    warna: "border-amber-200 bg-amber-50/30",
  },
  {
    skenario: "Kerusakan Akibat Banjir",
    icon: "🌊",
    langkahTambahan: [
      "Jangan coba menghidupkan mesin jika kendaraan terendam banjir — risiko water hammer",
      "Dokumentasi ketinggian air yang merendam kendaraan (foto lingkungan sekitar)",
      "Simpan semua barang yang basah sebagai bukti — jangan dibersihkan dulu",
      "Lapor dalam 3×24 jam — proses klaim banjir cenderung lebih ramai saat musim hujan",
      "Konfirmasi: apakah polis Anda memiliki perluasan banjir? Tanpa ini klaim ditolak",
    ],
    catatan: "Kerusakan mesin akibat water hammer (mobil dipaksa jalan saat terendam) bisa sangat mahal — Rp 30–80 juta. Pastikan perluasan banjir ada di polis sebelum musim hujan.",
    warna: "border-blue-200 bg-blue-50/30",
  },
  {
    skenario: "Tabrakan Melibatkan Kendaraan Pihak Ketiga",
    icon: "💥",
    langkahTambahan: [
      "Tukar data dengan pengemudi lain: nama, nomor telepon, nomor polisi, insurer",
      "Jangan tandatangani surat pernyataan apapun di lokasi tanpa konsultasi",
      "Minta surat keterangan kepolisian — penting untuk klaim TPL dan klaim kerusakan",
      "Laporkan ke konsultan meski Anda tidak bersalah — proses TPL perlu koordinasi",
      "Jika ada tuntutan dari pihak ketiga, terapkan prinsip yang sama dengan klaim liability",
    ],
    catatan: "Jika Anda yang bersalah dan tidak punya perluasan TPL, Anda bertanggung jawab penuh atas kerusakan kendaraan/properti pihak ketiga. Perluasan TPL sangat dianjurkan.",
    warna: "border-red-200 bg-red-50/30",
  },
];

const dokumenPerKasus = [
  {
    kasus: "Kerusakan Parsial (Tabrakan, Penyok, Baret)",
    dokumen: [
      { dok: "Formulir klaim yang diisi lengkap", wajib: true },
      { dok: "Fotokopi SIM pengemudi saat kejadian", wajib: true },
      { dok: "Fotokopi STNK", wajib: true },
      { dok: "Fotokopi KTP tertanggung", wajib: true },
      { dok: "Foto kerusakan kendaraan", wajib: true },
      { dok: "Surat keterangan polisi (untuk kerusakan besar atau ada pihak ketiga)", wajib: false },
    ],
    icon: "🚗",
  },
  {
    kasus: "Kehilangan Kendaraan (Pencurian)",
    dokumen: [
      { dok: "Formulir klaim kehilangan", wajib: true },
      { dok: "Laporan polisi + STPL (surat tanda penerimaan laporan)", wajib: true },
      { dok: "STNK asli (jika masih ada)", wajib: true },
      { dok: "Fotokopi BPKB", wajib: true },
      { dok: "Kunci kendaraan (asli dan cadangan)", wajib: true },
      { dok: "Surat blokir STNK dari Samsat", wajib: false },
      { dok: "KTP + KK tertanggung", wajib: true },
    ],
    icon: "🔑",
  },
  {
    kasus: "Kerusakan Akibat Banjir",
    dokumen: [
      { dok: "Formulir klaim banjir", wajib: true },
      { dok: "Fotokopi SIM, STNK, KTP", wajib: true },
      { dok: "Foto kondisi kendaraan dan lingkungan sekitar (bukti banjir)", wajib: true },
      { dok: "Polis dengan perluasan banjir (konfirmasi ada klausul banjir)", wajib: true },
      { dok: "Keterangan cuaca atau berita banjir (media setempat)", wajib: false },
    ],
    icon: "🌊",
  },
];

const kesalahanFatal = [
  {
    kesalahan: "Memperbaiki kendaraan sebelum disurvei insurer",
    dampak: "Insurer tidak bisa menilai kerusakan asli → klaim ditolak atau dibayar jauh lebih kecil",
    solusi: "Hubungi konsultan dulu, minta izin perbaikan. Untuk kerusakan darurat, foto dan dokumentasi sangat lengkap sebelum perbaikan apapun.",
  },
  {
    kesalahan: "Laporan terlambat — lebih dari 3×24 jam",
    dampak: "Menjadi alasan sah penolakan klaim meski insiden nyata dan polis aktif",
    solusi: "Lapor segera meski dokumen belum lengkap. Konsultan bisa membantu melengkapi dokumen belakangan.",
  },
  {
    kesalahan: "Pengemudi tidak memiliki SIM sah saat kejadian",
    dampak: "Klaim ditolak penuh — SIM expired, SIM tidak sesuai kategori kendaraan, atau tidak punya SIM",
    solusi: "Pastikan SIM selalu valid dan sesuai kategori kendaraan. Jika mengizinkan orang lain mengemudi, pastikan mereka memiliki SIM valid.",
  },
  {
    kesalahan: "Kendaraan digunakan untuk ojek online tanpa deklarasi",
    dampak: "Polis dideklarasikan sebagai kendaraan pribadi — penggunaan komersial adalah alasan penolakan",
    solusi: "Deklarasikan ke insurer jika kendaraan digunakan untuk ojek atau ride-sharing. Ada produk asuransi kendaraan komersial yang sesuai.",
  },
  {
    kesalahan: "Tidak ada laporan polisi untuk klaim kehilangan",
    dampak: "Klaim kehilangan tanpa laporan polisi hampir pasti ditolak",
    solusi: "Lapor kehilangan ke polisi dalam 24 jam. STPL (Surat Tanda Penerimaan Laporan) adalah dokumen kritis untuk klaim ini.",
  },
];

const faqItems = [
  {
    q: "Bolehkah saya memilih bengkel sendiri untuk perbaikan klaim asuransi?",
    a: "Tergantung polis. Sebagian besar polis All Risk mewajibkan perbaikan di bengkel rekanan insurer. Beberapa polis premium (biasanya dengan premi lebih tinggi) memberikan opsi 'bengkel pilihan nasabah' — Anda bisa memilih bengkel sendiri tapi pembayaran melalui reimburse dengan nilai yang disetujui insurer. Tanyakan kepada kami saat membeli polis jika preferensi bengkel penting bagi Anda.",
  },
  {
    q: "Berapa lama proses klaim dari lapor hingga kendaraan selesai diperbaiki?",
    a: "Klaim kerusakan standar: lapor → survei (1–3 hari) → persetujuan (1–3 hari) → perbaikan (3–14 hari tergantung kerusakan) → selesai. Total biasanya 1–3 minggu. Klaim kehilangan lebih lama: 60–90 hari karena ada masa tunggu hasil penyelidikan polisi. Klaim banjir saat musim hujan bisa lebih lama karena volume klaim tinggi.",
  },
  {
    q: "Apakah klaim asuransi kendaraan mempengaruhi premi tahun berikutnya?",
    a: "Bisa ya — ini disebut 'no-claim discount' (NCD) atau bonus malus. Jika tidak ada klaim dalam satu tahun, Anda mendapat diskon premi di tahun berikutnya. Setiap klaim yang diajukan bisa menghilangkan atau mengurangi NCD, sehingga premi renewal bisa lebih tinggi. Untuk kerusakan kecil dengan nilai di bawah Rp 1–2 juta, pertimbangkan apakah lebih baik bayar sendiri untuk mempertahankan NCD.",
  },
  {
    q: "Apa itu deductible dan berapa besarnya?",
    a: "Deductible adalah bagian kerugian yang ditanggung sendiri oleh pemilik polis — umumnya disebut 'risiko sendiri'. Untuk asuransi kendaraan standar, deductible biasanya Rp 150.000–300.000 per klaim kecelakaan. Untuk klaim kehilangan, deductible lebih besar — biasanya 10–20% dari nilai kendaraan. Deductible dibayar saat pengambilan kendaraan atau saat klaim disetujui.",
  },
  {
    q: "Bagaimana jika bengkel rekanan kualitas kerjanya kurang memuaskan?",
    a: "Jangan tandatangani berita acara selesai jika ada perbaikan yang tidak memuaskan. Sampaikan keberatan secara tertulis kepada konsultan dan insurer sebelum kendaraan diambil. Insurer berkewajiban memastikan perbaikan sesuai standar. Kami selalu mendampingi klien dalam proses ini untuk memastikan kualitas perbaikan yang adil.",
  },
];

export default function ArtikelCaraKlaimAsuransiMobil() {
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
            <span className="text-navy font-semibold">Cara Klaim Asuransi Mobil</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-kendaraan/mobil" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🚗 Asuransi Mobil
              </Link>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/40 text-xs">Panduan Klaim</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Cara Klaim Asuransi Mobil —<br />
              <em className="not-italic text-gold">Panduan Lengkap<br />dari Insiden hingga Selesai</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Satu kesalahan di langkah pertama — memperbaiki kendaraan sebelum melapor, atau menghubungi insurer terlambat — bisa membuat klaim yang seharusnya cair menjadi ditolak. Panduan ini memastikan Anda melakukan hal yang benar dari awal.
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
              <strong className="text-navy">3 Aturan Utama:</strong>{" "}
              (1) <strong>Jangan perbaiki kendaraan</strong> sebelum disurvei insurer.{" "}
              (2) <strong>Lapor dalam 3×24 jam</strong> — batas waktu ini tidak bisa ditawar.{" "}
              (3) <strong>Pastikan SIM pengemudi valid</strong> saat kejadian — SIM tidak valid adalah alasan penolakan paling umum.
            </p>
          </div>

          {/* Peringatan */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-10 flex gap-3">
            <span className="text-lg flex-shrink-0">⚠️</span>
            <p className="text-sm text-red-700 leading-relaxed">
              <strong>Baru mengalami insiden sekarang?</strong> Hentikan semua aktivitas dan hubungi konsultan asuransi segera via WhatsApp. Jangan perbaiki, jangan bersihkan kerusakan, jangan tandatangani pernyataan apapun sebelum berkonsultasi.
            </p>
          </div>

          {/* Langkah klaim kecelakaan */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Langkah Klaim untuk Kerusakan / Kecelakaan — 6 Tahap
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Urutan ini berlaku untuk klaim kerusakan apapun — dari lecet ringan hingga tabrakan besar:
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {langkahKlaimKecelakaan.map((l) => (
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

          {/* Skenario khusus */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Langkah Tambahan untuk 3 Skenario Khusus
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Kehilangan, banjir, dan tabrakan dengan pihak ketiga memerlukan langkah ekstra di luar prosedur standar:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {skenarioKhusus.map((s) => (
              <div key={s.skenario} className={`rounded-card p-5 border ${s.warna}`}>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="font-heading font-bold text-navy text-[0.95rem]">{s.skenario}</span>
                </div>
                <ul className="flex flex-col gap-2 mb-3">
                  {s.langkahTambahan.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-navy font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}.</span>
                      <span className="text-xs text-navy2 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white/60 rounded-lg p-3 border border-black/6">
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    <strong className="text-navy">📌 Catatan:</strong> {s.catatan}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dokumen per kasus */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Checklist Dokumen per Jenis Klaim
          </h2>
          <div className="flex flex-col gap-4 mb-10">
            {dokumenPerKasus.map((d) => (
              <div key={d.kasus} className="bg-white border border-black/8 rounded-card overflow-hidden">
                <div className="px-5 py-3 bg-cream/60 border-b border-black/6 flex items-center gap-2.5">
                  <span className="text-lg">{d.icon}</span>
                  <span className="font-heading font-bold text-navy text-sm">{d.kasus}</span>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {d.dokumen.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[0.6rem] font-bold ${item.wajib ? "bg-navy text-white" : "bg-cream border border-black/15 text-[#94A3B8]"}`}>
                          {item.wajib ? "✓" : "+"}
                        </span>
                        <span className="text-xs text-navy2">{item.dok}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kesalahan fatal */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            5 Kesalahan yang Paling Sering Membuat Klaim Ditolak
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[30%]">Kesalahan</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[28%]">Dampak</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold rounded-tr-xl w-[42%]">Yang Seharusnya Dilakukan</th>
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

          {/* CTA */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Baru mengalami kecelakaan atau kehilangan kendaraan?</div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-4">
              Hubungi kami sekarang via WhatsApp. Kami panduan langkah pertama yang benar, bantu kelengkapan dokumen, dan dampingi proses klaim hingga kendaraan Anda kembali.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Hubungi Konsultan Sekarang
              </a>
              <Link href="/asuransi-kendaraan/mobil" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                🚗 Lihat Produk Asuransi Mobil →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">Pertanyaan Seputar Klaim Asuransi Kendaraan</h2>
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
                { href: "/asuransi-kendaraan/mobil", icon: "🚗", judul: "Asuransi Mobil", desc: "All Risk dan TLO — detail cakupan dan cara daftar" },
                { href: "/artikel/perbedaan-all-risk-tlo", icon: "📊", judul: "Perbedaan All Risk vs TLO", desc: "Panduan memilih jenis asuransi yang tepat untuk mobil Anda" },
                { href: "/artikel/asuransi-mobil-banjir", icon: "🌊", judul: "Asuransi Mobil dari Banjir", desc: "Mengapa perluasan banjir wajib untuk kendaraan di DIY" },
                { href: "/artikel/cara-menghitung-premi-asuransi-mobil", icon: "💰", judul: "Cara Menghitung Premi Asuransi Mobil", desc: "Simulasi premi All Risk dan TLO berbagai kendaraan" },
                { href: "/asuransi-kendaraan/dump-truk-niaga", icon: "🚛", judul: "Asuransi Kendaraan Niaga", desc: "Klaim untuk dump truk dan kendaraan komersial" },
                { href: "/asuransi-kendaraan/armada-fleet", icon: "🚌", judul: "Asuransi Armada & Fleet", desc: "Proteksi dan klaim untuk banyak kendaraan sekaligus" },
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
              Klaim Asuransi Kendaraan Lebih Lancar<br />dengan Pendampingan yang Tepat
            </h2>
            <p className="text-white/75 text-sm max-w-[420px] mx-auto mb-8">
              Kami dampingi dari pelaporan pertama hingga kendaraan selesai diperbaiki atau klaim kehilangan cair. Hubungi kami kapanpun insiden terjadi.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
                💬 Konsultasi via WhatsApp
              </a>
              <Link href="/asuransi-kendaraan/mobil" className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all">
                🚗 Lihat Produk Asuransi Mobil
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
