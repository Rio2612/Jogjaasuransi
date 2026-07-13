// app/artikel/cara-klaim-asuransi-kargo/page.tsx
// TARGET: "cara klaim asuransi kargo", "proses klaim asuransi pengiriman barang"
// INTENT: HowTo — user sedang menghadapi masalah, butuh panduan langsung
// SILO: Kargo cluster → mendukung /asuransi-kargo/

import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cara Klaim Asuransi Kargo – Panduan Lengkap agar Dana Ganti Rugi Cair",
  description:
    "Panduan lengkap cara mengajukan klaim asuransi kargo jika barang kiriman rusak atau hilang. Dokumen yang dibutuhkan, langkah-langkah klaim, kesalahan yang harus dihindari, dan tips agar klaim tidak ditolak.",
  keywords:
    "cara klaim asuransi kargo, klaim asuransi barang kiriman rusak, prosedur klaim kargo, dokumen klaim asuransi pengiriman, klaim asuransi barang hilang ekspedisi",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-kargo",
  },
  openGraph: {
    title: "Cara Klaim Asuransi Kargo – Panduan Agar Klaim Tidak Ditolak",
    description:
      "Langkah-langkah mengajukan klaim asuransi kargo dengan benar. Dokumen yang diperlukan dan kesalahan yang sering menyebabkan klaim ditolak.",
    url: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-kargo",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Cara Klaim Asuransi Kargo – Panduan Agar Klaim Tidak Ditolak" }],
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
        { "@type": "ListItem", position: 3, name: "Cara Klaim Asuransi Kargo", item: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-kargo" },
      ],
    },
    {
      "@type": "Article",
      headline: "Cara Klaim Asuransi Kargo – Panduan Lengkap agar Dana Ganti Rugi Cair",
      description: "Panduan langkah demi langkah mengajukan klaim asuransi kargo jika barang kiriman rusak atau hilang.",
      author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Praktisi Asuransi" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-05-15",
      dateModified: "2025-06-01",
    },
    {
      "@type": "HowTo",
      name: "Cara Mengajukan Klaim Asuransi Kargo",
      description: "Langkah-langkah mengajukan klaim asuransi kargo jika barang kiriman rusak, hilang, atau mengalami kerusakan selama pengiriman.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Dokumentasikan Kerusakan Segera", text: "Saat menerima kiriman dalam kondisi bermasalah, dokumentasikan segera sebelum menandatangani tanda terima. Foto kondisi kemasan luar, dalam, dan barang yang rusak dari berbagai sudut." },
        { "@type": "HowToStep", position: 2, name: "Buat Catatan pada Tanda Terima", text: "Jangan tandatangani tanda terima tanpa catatan jika ada kerusakan. Tulis 'diterima dengan kondisi rusak/tidak sesuai' pada formulir tanda terima ekspedisi sebelum menandatangani." },
        { "@type": "HowToStep", position: 3, name: "Hubungi Praktisi Asuransi", text: "Hubungi praktisi asuransi untuk mendapatkan panduan prosedur klaim yang berlaku pada polis Anda. Sampaikan kronologi kejadian dan dokumentasi yang sudah dikumpulkan." },
        { "@type": "HowToStep", position: 4, name: "Siapkan Dokumen Klaim", text: "Kumpulkan seluruh dokumen yang diperlukan: sertifikat asuransi, resi pengiriman, invoice/faktur barang, foto kerusakan, dan formulir klaim yang diisi lengkap." },
        { "@type": "HowToStep", position: 5, name: "Kirim Formulir dan Dokumen Klaim", text: "Submit formulir klaim beserta semua dokumen pendukung ke perusahaan asuransi sesuai prosedur yang berlaku — umumnya bisa dikirim via email atau langsung ke kantor." },
        { "@type": "HowToStep", position: 6, name: "Survei Loss Adjuster (jika diperlukan)", text: "Untuk klaim dengan nilai signifikan, perusahaan asuransi mungkin mengirim loss adjuster untuk memverifikasi kerusakan. Siapkan barang dan kemasan yang rusak untuk diperiksa." },
        { "@type": "HowToStep", position: 7, name: "Persetujuan dan Pembayaran Klaim", text: "Setelah verifikasi selesai dan klaim disetujui, dana ganti rugi akan ditransfer ke rekening yang didaftarkan, dikurangi deductible jika ada dalam polis." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa lama batas waktu pelaporan klaim asuransi kargo?",
          acceptedAnswer: { "@type": "Answer", text: "Umumnya 3–7 hari kerja sejak barang diterima dalam kondisi rusak, atau sejak diketahui barang hilang. Batas waktu pasti tercantum dalam polis. Melapor lebih cepat selalu lebih baik — jangan tunggu hingga batas akhir." },
        },
        {
          "@type": "Question",
          name: "Apakah klaim bisa diajukan jika kemasan luar terlihat utuh tapi isi rusak?",
          acceptedAnswer: { "@type": "Answer", text: "Bisa, namun lebih kompleks. Kerusakan tersembunyi (concealed damage) biasanya memiliki batas waktu pelaporan yang lebih pendek sejak diterima — biasanya 3 hari. Dokumentasikan segera saat membuka kemasan, bahkan jika kondisi luar terlihat baik." },
        },
      ],
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const langkahKlaim = [
  {
    no: "01",
    icon: "📸",
    judul: "Dokumentasikan Sebelum Apapun",
    kapan: "Saat kiriman tiba",
    isi: "Ini adalah langkah paling kritis dan sering diabaikan. Sebelum menandatangani tanda terima, periksa kondisi kiriman. Jika ada kerusakan atau tanda-tanda kejanggalan, dokumentasikan terlebih dahulu.",
    aksi: [
      "Foto kondisi kemasan luar dari semua sisi sebelum dibuka",
      "Video proses pembukaan kemasan dari awal",
      "Foto kondisi isi kiriman — baik yang utuh maupun yang rusak",
      "Foto label pengiriman dan nomor resi dengan jelas",
    ],
    warning: "Jangan pernah membuang kemasan sebelum klaim selesai. Loss adjuster mungkin perlu memeriksa kemasan untuk menentukan penyebab kerusakan.",
  },
  {
    no: "02",
    icon: "✍️",
    judul: "Buat Catatan pada Tanda Terima Ekspedisi",
    kapan: "Saat menerima kiriman",
    isi: "Jika kiriman diterima langsung dari kurir, jangan tanda tangani tanda terima tanpa catatan jika ada indikasi kerusakan. Tanda tangan tanpa catatan dianggap sebagai penerimaan dalam kondisi baik — ini bisa memperlemah posisi klaim Anda.",
    aksi: [
      "Tulis 'diterima dengan kondisi kemasan rusak' atau 'isi belum diperiksa' di kolom tanda terima",
      "Minta kurir untuk ikut menandatangani atau setidaknya menyaksikan catatan tersebut",
      "Simpan salinan tanda terima yang sudah ada catatan tersebut",
    ],
    warning: "Jika menerima kiriman yang dikirim ke pembeli Anda: minta pembeli melakukan hal yang sama saat menerima dari kurir, dan segera foto-dokumentasikan kondisi yang dikirimkan ke Anda.",
  },
  {
    no: "03",
    icon: "💬",
    judul: "Hubungi Praktisi Asuransi untuk Panduan",
    kapan: "Sesegera mungkin — idealnya hari yang sama",
    isi: "Sebelum mengisi formulir apapun atau berkomunikasi resmi dengan perusahaan asuransi, hubungi kami terlebih dahulu. Kami akan menjelaskan prosedur klaim yang berlaku pada polis Anda, dokumen apa yang dibutuhkan, dan cara terbaik menyampaikan kronologi kejadian.",
    aksi: [
      "Hubungi via WhatsApp dengan foto dokumentasi yang sudah diambil",
      "Ceritakan kronologi: kapan dikirim, kapan diterima, apa yang ditemukan",
      "Sampaikan nomor polis atau sertifikat asuransi yang berlaku",
      "Tanyakan batas waktu pelaporan yang berlaku pada polis Anda",
    ],
    warning: "Sebagai praktisi, kami membantu Anda memahami prosedur dan dokumen yang diperlukan — bukan menggantikan proses klaim formal yang tetap dilakukan langsung ke perusahaan asuransi.",
  },
  {
    no: "04",
    icon: "📁",
    judul: "Kumpulkan Seluruh Dokumen yang Diperlukan",
    kapan: "Setelah mendapat panduan dari praktisi",
    isi: "Kelengkapan dokumen adalah faktor terbesar yang menentukan lancar tidaknya proses klaim. Siapkan semua dokumen berikut sebelum mengisi formulir klaim.",
    aksi: [
      "Sertifikat asuransi kargo (polis atau certificate of insurance)",
      "Resi pengiriman / airway bill / bill of lading",
      "Invoice atau faktur pembelian yang menunjukkan nilai barang",
      "Packing list (daftar isi kiriman jika ada)",
      "Foto dan video dokumentasi kerusakan",
      "Tanda terima dengan catatan kondisi dari ekspedisi",
      "Laporan kerusakan dari ekspedisi (jika diminta dan bisa didapatkan)",
    ],
    warning: "Nilai klaim yang diajukan tidak boleh melebihi nilai yang tercantum dalam invoice dan tidak boleh melebihi nilai yang diasuransikan dalam polis.",
  },
  {
    no: "05",
    icon: "📝",
    judul: "Isi dan Submit Formulir Klaim",
    kapan: "Setelah dokumen lengkap",
    isi: "Isi formulir klaim dengan teliti, jujur, dan lengkap. Formulir klaim adalah dokumen legal — ketidakakuratan bisa menjadi alasan klaim ditolak bahkan jika kejadian memang terjadi.",
    aksi: [
      "Isi kronologi kejadian dengan urutan waktu yang jelas",
      "Cantumkan nilai kerugian berdasarkan invoice — jangan melebih-lebihkan",
      "Sertakan semua dokumen pendukung yang sudah disiapkan",
      "Submit sesuai prosedur yang ditentukan perusahaan asuransi",
    ],
    warning: "Klaim yang nilai kerugiannya jauh di atas nilai invoice atau nilai yang diasuransikan akan dipertanyakan dan bisa memperlambat proses.",
  },
  {
    no: "06",
    icon: "🔍",
    judul: "Proses Verifikasi oleh Perusahaan Asuransi",
    kapan: "Setelah formulir disubmit",
    isi: "Perusahaan asuransi akan memverifikasi klaim — bisa melalui review dokumen saja, atau dengan mengirim loss adjuster untuk pemeriksaan langsung untuk klaim bernilai besar.",
    aksi: [
      "Simpan barang dan kemasan yang rusak — jangan dibuang selama proses berlangsung",
      "Siapkan dokumen tambahan jika diminta",
      "Responsif jika ada pertanyaan dari tim klaim perusahaan asuransi",
      "Hubungi praktisi jika ada ketidakjelasan dalam proses",
    ],
    warning: "Proses verifikasi membutuhkan waktu yang bervariasi tergantung kompleksitas kasus. Tanyakan estimasi waktu kepada tim klaim di awal.",
  },
  {
    no: "07",
    icon: "💰",
    judul: "Pembayaran Ganti Rugi",
    kapan: "Setelah klaim disetujui",
    isi: "Jika klaim disetujui, dana ganti rugi akan ditransfer ke rekening yang didaftarkan. Jumlah yang dibayarkan adalah nilai yang disetujui dikurangi deductible jika ada dalam polis.",
    aksi: [
      "Konfirmasi rekening tujuan transfer dengan tim klaim",
      "Simpan seluruh dokumen klaim yang sudah diproses sebagai arsip",
      "Evaluasi kejadian untuk memperbaiki pengemasan di pengiriman berikutnya",
    ],
    warning: "Jika klaim sebagian disetujui atau ditolak, Anda berhak mendapatkan penjelasan tertulis. Hubungi kami untuk mendiskusikan langkah selanjutnya.",
  },
];

const kesalahanUmum = [
  {
    icon: "⚠️",
    kesalahan: "Tanda tangan tanda terima tanpa catatan meski ada kerusakan",
    dampak: "Dianggap menerima barang dalam kondisi baik — klaim sulit dibuktikan",
    solusi: "Selalu buat catatan tertulis di tanda terima sebelum menandatangani jika ada kerusakan atau kejanggalan",
  },
  {
    icon: "⚠️",
    kesalahan: "Membuang kemasan yang rusak sebelum klaim selesai",
    dampak: "Loss adjuster tidak bisa memeriksa penyebab kerusakan dari kemasan",
    solusi: "Simpan semua kemasan — luar dan dalam — sampai proses klaim benar-benar selesai",
  },
  {
    icon: "⚠️",
    kesalahan: "Menunda pelaporan hingga lewat batas waktu polis",
    dampak: "Klaim otomatis ditolak karena melewati batas waktu pelaporan",
    solusi: "Laporkan maksimal dalam 3 hari setelah kerusakan diketahui, tidak perlu menunggu dokumen lengkap untuk melapor awal",
  },
  {
    icon: "⚠️",
    kesalahan: "Mengajukan nilai klaim melebihi nilai invoice",
    dampak: "Klaim dipertanyakan dan bisa diinvestigasi lebih dalam",
    solusi: "Nilai klaim harus berdasarkan nilai invoice yang aktual dan tidak melebihi nilai yang diasuransikan",
  },
  {
    icon: "⚠️",
    kesalahan: "Tidak mendokumentasikan sebelum membuka kemasan",
    dampak: "Sulit membuktikan kerusakan terjadi selama pengiriman, bukan setelah diterima",
    solusi: "Selalu video proses unboxing, terutama untuk barang bernilai tinggi",
  },
  {
    icon: "⚠️",
    kesalahan: "Langsung memperbaiki atau membuang barang yang rusak",
    dampak: "Bukti fisik kerusakan hilang sebelum diperiksa",
    solusi: "Simpan barang dalam kondisi apa adanya sampai ada konfirmasi dari perusahaan asuransi bahwa pemeriksaan fisik tidak diperlukan",
  },
];

const dokumenPerKasus = [
  {
    kasus: "Barang Rusak saat Diterima",
    dokumen: [
      "Sertifikat asuransi / polis",
      "Resi pengiriman",
      "Invoice nilai barang",
      "Foto kerusakan kemasan luar dan dalam",
      "Foto barang yang rusak",
      "Tanda terima dengan catatan kondisi rusak",
      "Formulir klaim yang diisi lengkap",
    ],
  },
  {
    kasus: "Barang Hilang (tidak diterima)",
    dokumen: [
      "Sertifikat asuransi / polis",
      "Resi pengiriman",
      "Invoice nilai barang",
      "Konfirmasi dari ekspedisi bahwa barang hilang / tidak terdeteksi",
      "Screenshot pelacakan (tracking) yang menunjukkan barang tidak sampai",
      "Formulir klaim dengan keterangan 'barang hilang'",
    ],
  },
  {
    kasus: "Kerusakan Tersembunyi (kondisi luar oke, isi rusak)",
    dokumen: [
      "Sertifikat asuransi / polis",
      "Resi pengiriman",
      "Invoice nilai barang",
      "Video proses unboxing yang menunjukkan kemasan utuh lalu isi rusak",
      "Foto detail kerusakan",
      "Formulir klaim dengan keterangan 'concealed damage'",
      "Klaim harus dilaporkan dalam 3 hari sejak diterima",
    ],
  },
];

const faqItems = [
  {
    q: "Berapa lama batas waktu mengajukan klaim asuransi kargo?",
    a: "Batas waktu pelaporan klaim kargo umumnya 3–7 hari kerja sejak barang diterima dalam kondisi rusak, atau sejak diketahui barang hilang. Untuk kerusakan tersembunyi yang baru terlihat saat dibuka, batasnya sering lebih ketat — 3 hari. Batas waktu pasti selalu mengacu pada ketentuan dalam polis. Hubungi praktisi Anda segera setelah kejadian.",
  },
  {
    q: "Bagaimana cara mengklaim jika barang dikirim ke pembeli dan rusak saat diterima pembeli?",
    a: "Edukasikan pembeli Anda sejak awal — jika menerima kiriman yang kondisinya meragukan, minta mereka membuat catatan di tanda terima dan mendokumentasikan sebelum membuka. Pembeli kemudian mengirimkan dokumentasi tersebut kepada Anda. Dengan bukti dari pembeli, Anda bisa mengajukan klaim ke perusahaan asuransi.",
  },
  {
    q: "Apakah perlu melibatkan ekspedisi dalam proses klaim asuransi kargo?",
    a: "Tidak selalu. Klaim ke perusahaan asuransi dilakukan secara terpisah dari komplain ke ekspedisi. Anda bisa mengajukan klaim ke asuransi sambil bersamaan membuat komplain ke ekspedisi. Dokumen dari ekspedisi (seperti laporan kerusakan atau konfirmasi kehilangan) bisa memperkuat klaim asuransi, namun bukan syarat mutlak.",
  },
  {
    q: "Apakah ada deductible dalam asuransi kargo?",
    a: "Tergantung polis. Beberapa polis kargo memiliki deductible (jumlah yang menjadi tanggungan tertanggung sendiri per klaim), sementara beberapa tidak. Besaran deductible jika ada biasanya relatif kecil untuk kargo. Cek ketentuan ini dalam polis Anda atau tanyakan kepada praktisi saat membeli.",
  },
  {
    q: "Apakah pengemasan yang buruk bisa menyebabkan klaim ditolak?",
    a: "Ya, ini salah satu alasan paling umum klaim kargo ditolak. Jika terbukti kerusakan disebabkan pengemasan yang tidak memadai — bukan karena penanganan kasar dari pihak pengiriman — perusahaan asuransi berhak menolak klaim. Standar pengemasan yang 'memadai' bergantung pada jenis barang dan kondisi pengiriman.",
  },
  {
    q: "Bisa kah praktisi membantu jika klaim saya ditolak?",
    a: "Kami bisa membantu menjelaskan alasan penolakan berdasarkan ketentuan polis dan memberikan perspektif dari sisi praktisi asuransi. Jika ada ketidaksesuaian dalam proses klaim, kami bisa membantu Anda memahami opsi yang tersedia — termasuk mengajukan banding sesuai mekanisme yang berlaku di perusahaan asuransi.",
  },
];

export default function ArtikelCaraKlaimKargo() {
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
            <span className="text-navy font-semibold">Cara Klaim Asuransi Kargo</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-kargo" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                📦 Asuransi Kargo
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan Klaim</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Cara Klaim Asuransi Kargo —<br /><em className="not-italic text-gold">Panduan Lengkap</em><br />agar Ganti Rugi Cair
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Klaim asuransi kargo sering gagal bukan karena kejadiannya tidak nyata, tapi karena prosedur yang salah sejak menit pertama. Panduan ini menjelaskan langkah yang benar — dari momen barang diterima dalam kondisi rusak hingga dana ganti rugi masuk ke rekening.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio Mardiansyah — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 9 menit</span>
            </div>
          </div>
        </section>

        {/* Konten */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Alert penting */}
          <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5 mb-10">
            <p className="text-red-800 text-sm leading-relaxed">
              <strong>⚠️ Penting:</strong> Jika Anda baru saja menerima kiriman yang rusak atau hilang, <strong>jangan buang kemasan, jangan perbaiki barang, dan jangan tanda tangani tanda terima tanpa catatan</strong>. Baca langkah pertama di bawah ini terlebih dahulu sebelum melakukan apapun.
            </p>
          </div>

          {/* Langkah Klaim */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            7 Langkah Mengajukan Klaim Asuransi Kargo
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-8">
            Ikuti urutan ini dengan benar. Melewati satu langkah atau melakukannya tidak berurutan bisa memperlemah posisi klaim Anda:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {langkahKlaim.map((l) => (
              <div key={l.no} className="bg-white rounded-card p-6 border border-black/8">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="bg-navy text-gold font-heading font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center">{l.no}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xl">{l.icon}</span>
                      <span className="font-heading text-navy font-bold text-sm">{l.judul}</span>
                    </div>
                    <div className="text-xs text-gold font-semibold mb-2">⏰ Kapan: {l.kapan}</div>
                    <p className="text-sm text-[#475569] leading-relaxed mb-3">{l.isi}</p>
                    <div className="bg-cream rounded-xl p-4 mb-3">
                      <div className="text-xs font-semibold text-navy mb-2">Yang harus dilakukan:</div>
                      <ul className="flex flex-col gap-1.5">
                        {l.aksi.map((a, i) => (
                          <li key={i} className="flex gap-2 text-xs text-navy2">
                            <span className="text-gold font-bold flex-shrink-0">✓</span>{a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                      <p className="text-xs text-amber-800">⚠️ {l.warning}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dokumen per Kasus */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Dokumen Klaim Berdasarkan Jenis Kasus
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Dokumen yang dibutuhkan sedikit berbeda tergantung jenis masalah yang terjadi:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {dokumenPerKasus.map((d) => (
              <div key={d.kasus} className="bg-cream rounded-card border border-black/6 overflow-hidden">
                <div className="bg-navy px-5 py-3">
                  <span className="font-heading text-white font-semibold text-sm">{d.kasus}</span>
                </div>
                <div className="p-5">
                  <ul className="flex flex-col gap-2">
                    {d.dokumen.map((dok, i) => (
                      <li key={i} className="flex gap-2 text-sm text-navy2 items-start">
                        <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>{dok}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Kesalahan umum */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            6 Kesalahan yang Sering Menyebabkan Klaim Ditolak
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Sebagian besar penolakan klaim kargo sebenarnya bisa dihindari. Berikut kesalahan yang paling sering terjadi:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {kesalahanUmum.map((k, i) => (
              <div key={i} className="rounded-card border border-black/8 overflow-hidden">
                <div className="bg-red-50 border-b border-red-100 px-5 py-3 flex gap-2 items-start">
                  <span className="text-red-500 text-sm flex-shrink-0">{k.icon}</span>
                  <div>
                    <span className="font-semibold text-red-700 text-sm">{k.kesalahan}</span>
                    <div className="text-xs text-red-700 mt-0.5">Dampak: {k.dampak}</div>
                  </div>
                </div>
                <div className="bg-green-50 px-5 py-3 flex gap-2 items-start">
                  <span className="text-green-600 font-bold text-sm flex-shrink-0">✓</span>
                  <span className="text-sm text-[#475569] leading-relaxed">{k.solusi}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Butuh Panduan Klaim Sekarang?</div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              Hubungi kami via WhatsApp. Ceritakan kondisi kiriman yang bermasalah dan kami bantu jelaskan prosedur yang perlu Anda lakukan berdasarkan polis yang berlaku.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Konsultasi Klaim via WhatsApp
              </a>
              <Link href="/asuransi-kargo" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                📦 Lihat Produk Kargo →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            Pertanyaan Seputar Klaim Asuransi Kargo
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
                { href: "/asuransi-kargo", icon: "📦", judul: "Semua Produk Asuransi Kargo", desc: "Kargo darat, udara, dan marine cargo" },
                { href: "/artikel/asuransi-kargo-umkm-jogja", icon: "🛵", judul: "Asuransi Kargo untuk UMKM Jogja", desc: "Panduan khusus untuk pelaku UMKM Yogyakarta" },
                { href: "/asuransi-kargo/pengiriman-barang", icon: "🚛", judul: "Asuransi Pengiriman Barang Darat", desc: "Proteksi kargo via truk dan kereta api" },
                { href: "/asuransi-kargo/ekspedisi-umkm", icon: "📮", judul: "Kargo Ekspedisi UMKM", desc: "Solusi proteksi pengiriman via kurir" },
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
              Ada Kiriman yang Bermasalah<br />dan Butuh Panduan Klaim?
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
              Hubungi kami sekarang. Ceritakan situasinya dan kami bantu jelaskan prosedur yang tepat berdasarkan polis yang berlaku.
            </p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi Klaim Kargo via WhatsApp
            </a>
          </div>
        </section>

    </>
  );
}
