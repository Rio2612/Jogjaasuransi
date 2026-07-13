// app/artikel/perbedaan-surety-bond-bank-garansi/page.tsx
// TARGET: "perbedaan surety bond dan bank garansi", "surety bond vs bank garansi"
// INTENT: Informational — kontraktor yang belum paham bedanya, sedang evaluasi pilihan
// SILO: Surety Bond cluster → mendukung /asuransi-surety-bond/

import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Perbedaan Surety Bond dan Bank Garansi – Mana yang Lebih Menguntungkan Kontraktor?",
  description:
    "Penjelasan lengkap perbedaan Surety Bond (dari perusahaan asuransi) dan Bank Garansi. Proses, agunan, biaya, dan mana yang lebih cocok untuk kontraktor di Yogyakarta. Edukasi dari praktisi asuransi independen.",
  keywords:
    "perbedaan surety bond bank garansi, surety bond vs bank garansi kontraktor, jaminan tender asuransi atau bank, keuntungan surety bond untuk kontraktor, bank garansi vs surety bond DIY",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/perbedaan-surety-bond-bank-garansi",
  },
  openGraph: {
    title: "Perbedaan Surety Bond dan Bank Garansi – Mana yang Tepat?",
    description:
      "Perbandingan mendalam Surety Bond vs Bank Garansi dari sisi proses, agunan, biaya, dan penerimaan di tender pemerintah DIY.",
    url: "https://asuransijogja.biz.id/artikel/perbedaan-surety-bond-bank-garansi",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Perbedaan Surety Bond dan Bank Garansi – Mana yang Tepat?" }],
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
        { "@type": "ListItem", position: 3, name: "Perbedaan Surety Bond dan Bank Garansi", item: "https://asuransijogja.biz.id/artikel/perbedaan-surety-bond-bank-garansi" },
      ],
    },
    {
      "@type": "Article",
      headline: "Perbedaan Surety Bond dan Bank Garansi – Mana yang Lebih Menguntungkan Kontraktor?",
      description: "Perbandingan mendalam antara Surety Bond dari perusahaan asuransi dan Bank Garansi dari bank — dari sisi proses, agunan, biaya, dan fleksibilitas.",
      author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Praktisi Asuransi" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-04-15",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa perbedaan utama surety bond dan bank garansi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Surety bond diterbitkan perusahaan asuransi berdasarkan analisis kapasitas dan track record kontraktor, tanpa memblokir dana atau plafon kredit. Bank garansi diterbitkan bank dan umumnya memerlukan agunan atau setoran tunai (cash collateral) yang memblokir dana perusahaan selama jaminan aktif.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah surety bond diterima di tender pemerintah seperti bank garansi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Berdasarkan Perpres No. 12 Tahun 2021, Jaminan Penawaran, Jaminan Pelaksanaan, Jaminan Uang Muka, dan Jaminan Pemeliharaan bisa berbentuk surety bond dari perusahaan asuransi berizin OJK atau bank garansi dari bank. Keduanya setara secara hukum pengadaan.",
          },
        },
        {
          "@type": "Question",
          name: "Mengapa surety bond lebih menguntungkan dari sisi likuiditas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bank garansi memblokir dana di rekening atau mengurangi plafon kredit, sehingga modal kerja kontraktor berkurang. Surety bond tidak memblokir dana apapun — kontraktor tetap bisa menggunakan seluruh modal kerja untuk membiayai proyek.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const tabelPerbandingan = [
  {
    aspek: "Diterbitkan oleh",
    surety: "Perusahaan asuransi umum berizin OJK",
    bank: "Bank umum atau bank syariah",
  },
  {
    aspek: "Dasar penilaian",
    surety: "Kapasitas finansial, track record, dan kualifikasi teknis kontraktor",
    bank: "Nilai agunan / aset yang bisa dijaminkan atau plafon kredit yang tersedia",
  },
  {
    aspek: "Agunan / jaminan",
    surety: "Umumnya tidak memerlukan agunan fisik — berbasis analisis kelayakan",
    bank: "Umumnya mensyaratkan agunan (deposito, tanah/bangunan) atau memblokir plafon kredit",
  },
  {
    aspek: "Dampak ke likuiditas",
    surety: "Tidak ada — modal kerja kontraktor tetap utuh dan bebas digunakan",
    bank: "Ada — dana terblokir atau plafon kredit berkurang selama jaminan aktif",
  },
  {
    aspek: "Proses pengajuan",
    surety: "Dokumen perusahaan dikirim digital, analisis dilakukan perusahaan surety",
    bank: "Proses administrasi bank yang lebih formal dan umumnya membutuhkan kunjungan langsung",
  },
  {
    aspek: "Estimasi waktu terbit",
    surety: "Relatif lebih fleksibel tergantung kelengkapan dokumen dan kebijakan perusahaan surety",
    bank: "Bervariasi tergantung kebijakan bank dan kelengkapan persyaratan",
  },
  {
    aspek: "Biaya / premi",
    surety: "Dihitung berdasarkan nilai dan durasi jaminan — umumnya kompetitif",
    bank: "Provisi dan biaya administrasi yang ditetapkan masing-masing bank",
  },
  {
    aspek: "Penerimaan di tender pemerintah",
    surety: "Diterima — setara dengan bank garansi berdasarkan Perpres 12/2021",
    bank: "Diterima — sudah lama menjadi instrumen standar pengadaan",
  },
  {
    aspek: "Fleksibilitas limit",
    surety: "Limit ditetapkan berdasarkan kapasitas kontraktor — bisa multi-proyek tanpa blokir",
    bank: "Limit terikat dengan fasilitas kredit yang dimiliki di bank tersebut",
  },
  {
    aspek: "Cocok untuk",
    surety: "Kontraktor yang ingin menjaga likuiditas dan mengerjakan banyak proyek sekaligus",
    bank: "Kontraktor dengan aset agunan besar atau yang sudah memiliki fasilitas kredit di bank",
  },
];

const kasusKonkret = [
  {
    skenario: "Kontraktor kecil ikut 3 tender sekaligus",
    icon: "🏗️",
    surety: "Bisa mengurus 3 Jaminan Penawaran terpisah tanpa harus memiliki agunan — selama limit surety mencukupi dan kapasitas finansial memadai.",
    bank: "Harus memiliki dana atau plafon kredit yang cukup untuk menanggung ketiga jaminan sekaligus, atau memilih mana yang diprioritaskan.",
    rekomendasi: "surety",
  },
  {
    skenario: "Kontraktor dengan aset properti besar dan fasilitas kredit bank",
    icon: "🏢",
    surety: "Tetap bisa digunakan, namun keuntungan utama (tanpa blokir modal) kurang terasa jika aset memang besar.",
    bank: "Proses bisa lebih familiar karena sudah memiliki hubungan dengan bank. Namun tetap memblokir plafon kredit.",
    rekomendasi: "keduanya",
  },
  {
    skenario: "Proyek besar nilai kontrak di atas Rp 50 miliar",
    icon: "🏛️",
    surety: "Tersedia, namun perlu analisis lebih mendalam dari perusahaan surety. Limit jaminan untuk nilai besar memerlukan track record dan kapasitas finansial yang kuat.",
    bank: "Beberapa pemilik proyek besar atau BUMN tertentu masih lebih familiar dengan bank garansi untuk nilai besar.",
    rekomendasi: "konsultasikan",
  },
  {
    skenario: "Kontraktor baru dengan track record minimal",
    icon: "🆕",
    surety: "Perusahaan surety akan mengevaluasi lebih ketat. Mungkin perlu agunan atau jaminan tambahan untuk tahap awal sampai track record terbentuk.",
    bank: "Bank juga akan berhati-hati untuk kontraktor baru tanpa track record. Agunan fisik biasanya menjadi syarat utama.",
    rekomendasi: "konsultasikan",
  },
];

const miskonsepsi = [
  {
    salah: "Surety Bond hanya untuk kontraktor besar",
    benar: "Surety Bond tersedia untuk semua kualifikasi kontraktor — dari K1/K2 hingga B2. Limit yang diberikan disesuaikan dengan kapasitas finansial dan kualifikasi teknis masing-masing perusahaan.",
  },
  {
    salah: "Bank Garansi lebih aman bagi pemilik proyek",
    benar: "Dari perspektif pemilik proyek (obligee), keduanya memberikan perlindungan yang setara secara hukum. Yang berbeda hanya mekanisme penerbitannya, bukan kekuatan jaminannya.",
  },
  {
    salah: "Proses Surety Bond selalu lebih lama",
    benar: "Kecepatan proses bergantung pada kelengkapan dokumen dan kebijakan masing-masing perusahaan surety maupun bank. Konsultasikan kebutuhan Anda untuk mendapat gambaran waktu yang realistis.",
  },
  {
    salah: "Surety Bond tidak bisa digunakan di semua tender pemerintah",
    benar: "Berdasarkan Perpres 12/2021, surety bond dari perusahaan asuransi berizin OJK diterima di seluruh tender pengadaan pemerintah — dari LPSE Provinsi DIY hingga kabupaten/kota.",
  },
];

const pertimbanganMemilih = [
  {
    icon: "💰",
    kondisi: "Utamakan likuiditas modal kerja",
    rekomendasi: "Surety Bond",
    alasan: "Tidak ada blokir dana atau pengurangan plafon kredit. Seluruh modal kerja tetap bisa digunakan untuk membiayai proyek.",
  },
  {
    icon: "📋",
    kondisi: "Ikut banyak tender sekaligus",
    rekomendasi: "Surety Bond",
    alasan: "Bisa mengurus beberapa jaminan paralel selama masih dalam batas limit kapasitas surety, tanpa harus memiliki agunan untuk setiap jaminan.",
  },
  {
    icon: "🏦",
    kondisi: "Sudah punya fasilitas kredit di bank tertentu",
    rekomendasi: "Evaluasi keduanya",
    alasan: "Jika plafon kredit masih longgar dan tidak mengganggu operasional, bank garansi bisa menjadi pilihan tambahan — terutama jika pemilik proyek tertentu lebih familiar dengannya.",
  },
  {
    icon: "🤝",
    kondisi: "Pemilik proyek mensyaratkan format tertentu",
    rekomendasi: "Ikuti persyaratan RKS",
    alasan: "Selalu baca RKS dengan teliti. Jika RKS menyebutkan keduanya diterima, Anda bebas memilih. Jika hanya menyebut salah satu, ikuti yang diminta.",
  },
];

const faqItems = [
  {
    q: "Apakah pemilik proyek bisa menolak surety bond dan hanya menerima bank garansi?",
    a: "Untuk proyek pemerintah (APBN/APBD), tidak bisa. Perpres 12/2021 secara tegas menyatakan bahwa jaminan bisa berbentuk bank garansi atau surety bond dari perusahaan asuransi berizin OJK — pemilik proyek tidak boleh membatasi hanya salah satunya. Untuk proyek swasta, pemilik proyek bisa menentukan format yang diinginkan dalam RKS.",
  },
  {
    q: "Apakah biaya (premi) surety bond selalu lebih murah dari bank garansi?",
    a: "Tidak selalu — perbandingan biaya bergantung pada banyak faktor termasuk kebijakan masing-masing perusahaan surety dan bank, nilai jaminan, durasi, dan profil kontraktor. Yang lebih penting untuk diperhatikan adalah dampak total terhadap biaya dan likuiditas, bukan hanya angka premi atau provisi semata.",
  },
  {
    q: "Bagaimana cara perusahaan surety membayar klaim jika kontraktor wanprestasi?",
    a: "Jika pemilik proyek mengajukan klaim (eksekusi jaminan) karena kontraktor wanprestasi dan klaim diverifikasi valid, perusahaan surety akan membayar kompensasi kepada pemilik proyek sesuai nilai jaminan. Selanjutnya, perusahaan surety berhak melakukan regres (penagihan kembali) kepada kontraktor atas dana yang telah dibayarkan.",
  },
  {
    q: "Apakah ada risiko kontraktor kehilangan aset jika klaim surety bond dicairkan?",
    a: "Secara prinsip, perusahaan surety memiliki hak regres terhadap kontraktor (principal) atas klaim yang dibayarkan. Artinya, meski tidak ada agunan fisik di awal, jika klaim terjadi, perusahaan surety akan menagih kembali dari kontraktor. Ini berbeda dengan klaim asuransi biasa — surety bond lebih mirip fasilitas kredit yang dijamin kapasitas kontraktor.",
  },
  {
    q: "Bagaimana jika limit surety saya tidak cukup untuk semua proyek yang sedang berjalan?",
    a: "Limit surety bisa ditingkatkan seiring berkembangnya track record dan kapasitas finansial perusahaan. Jika limit saat ini tidak mencukupi, ada beberapa opsi: kombinasikan dengan bank garansi untuk sebagian proyek, fokus pada proyek prioritas, atau konsultasikan dengan praktisi untuk strategi pengelolaan limit yang optimal.",
  },
];

export default function ArtikelPerbedaanSuretyBondBankGaransi() {
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
            <span className="text-navy font-semibold">Perbedaan Surety Bond dan Bank Garansi</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-surety-bond" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                📋 Surety Bond
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Perbandingan & Edukasi</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Surety Bond vs Bank Garansi —<br /><em className="not-italic text-gold">Mana yang Lebih Tepat</em><br />untuk Kontraktor?
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Keduanya sama-sama diterima di tender pemerintah. Tapi mekanismenya sangat berbeda — dan perbedaan itu berdampak langsung pada likuiditas dan fleksibilitas operasional kontraktor. Artikel ini menjelaskan secara objektif tanpa memihak.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio Mardiansyah — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 7 menit</span>
            </div>
          </div>
        </section>

        {/* Konten */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Ringkasan */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Ringkasan:</strong> Surety bond diterbitkan perusahaan asuransi — tidak membutuhkan agunan fisik dan tidak memblokir modal kerja. Bank garansi diterbitkan bank — umumnya memerlukan agunan atau memblokir plafon kredit. Keduanya diterima di tender pemerintah berdasarkan <strong>Perpres No. 12 Tahun 2021</strong>. Pilihan tergantung kondisi dan kebutuhan masing-masing kontraktor.
            </p>
          </div>

          {/* Pengertian Dasar */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Memahami Keduanya dari Dasar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <div className="bg-white rounded-card p-6 border border-black/8">
              <div className="text-3xl mb-3">🏛️</div>
              <div className="font-heading text-navy font-bold text-base mb-3">Bank Garansi</div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                Instrumen jaminan yang diterbitkan oleh bank atas permintaan nasabah (kontraktor). Bank bertindak sebagai penjamin kepada pihak ketiga (pemilik proyek) bahwa jika nasabah wanprestasi, bank akan membayar sejumlah nilai yang dijaminkan.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                Mekanisme penerbitannya mirip dengan kredit bank — bank mengevaluasi kemampuan bayar nasabah dan umumnya mensyaratkan agunan berupa deposito, tanah, atau bangunan senilai jaminan yang diminta.
              </p>
            </div>
            <div className="bg-white rounded-card p-6 border border-gold/20">
              <div className="text-3xl mb-3">📋</div>
              <div className="font-heading text-navy font-bold text-base mb-3">Surety Bond</div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                Instrumen jaminan yang diterbitkan perusahaan asuransi (perusahaan surety) atas permintaan kontraktor (principal). Berbeda dengan asuransi biasa, surety bond melibatkan tiga pihak: principal (kontraktor), obligee (pemilik proyek), dan surety (perusahaan asuransi).
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                Perusahaan surety mengevaluasi kapasitas finansial, kualifikasi teknis, dan track record kontraktor — bukan nilai agunan. Secara prinsip lebih mirip dengan fasilitas kredit yang dijamin oleh kapasitas dan reputasi kontraktor.
              </p>
            </div>
          </div>

          {/* Tabel Perbandingan */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Perbandingan Lengkap: 10 Aspek Kunci
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Berikut perbandingan mendalam dari berbagai aspek yang relevan untuk kontraktor di Yogyakarta:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[28%]">Aspek</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[36%]">🏛️ Bank Garansi</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold rounded-tr-xl w-[36%]">📋 Surety Bond</th>
                </tr>
              </thead>
              <tbody>
                {tabelPerbandingan.map((row, i) => (
                  <tr key={row.aspek} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 font-semibold text-navy text-xs align-top">{row.aspek}</td>
                    <td className="p-3.5 text-[#475569] text-sm leading-relaxed align-top">{row.bank}</td>
                    <td className="p-3.5 text-navy2 text-sm leading-relaxed align-top font-medium">{row.surety}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5A6472] mb-10">* Perbandingan bersifat umum. Kebijakan spesifik berbeda antar bank dan perusahaan surety.</p>

          {/* Aspek Likuiditas — Poin Terkuat */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Aspek Paling Kritis: Dampak terhadap Likuiditas
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-5">
            Ini adalah perbedaan yang paling dirasakan langsung oleh kontraktor dalam operasional sehari-hari. Mari kita ilustrasikan dengan skenario konkret:
          </p>
          <div className="bg-cream rounded-card p-6 border border-black/8 mb-5">
            <div className="font-heading text-navy font-bold text-sm mb-4">📌 Skenario: Kontraktor dengan Modal Kerja Rp 2 Miliar</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <div className="font-semibold text-red-700 text-sm mb-2">🏛️ Jika pakai Bank Garansi</div>
                <p className="text-xs text-red-800 leading-relaxed mb-2">
                  Untuk mendapatkan bank garansi senilai Rp 100 juta, bank meminta setoran deposito Rp 100 juta sebagai jaminan.
                </p>
                <p className="text-xs text-red-800 leading-relaxed">
                  Modal kerja efektif yang tersisa: <strong>Rp 1,9 miliar</strong>. Jika ada 3 proyek aktif, masing-masing Rp 100 juta, modal efektif berkurang menjadi <strong>Rp 1,7 miliar</strong>.
                </p>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <div className="font-semibold text-green-700 text-sm mb-2">📋 Jika pakai Surety Bond</div>
                <p className="text-xs text-green-800 leading-relaxed mb-2">
                  Jaminan Penawaran senilai Rp 100 juta diterbitkan berdasarkan kapasitas perusahaan — tidak ada dana yang diblokir.
                </p>
                <p className="text-xs text-green-800 leading-relaxed">
                  Modal kerja efektif yang tersisa: <strong>Rp 2 miliar</strong> — penuh. Bisa digunakan seluruhnya untuk membiayai proyek yang sedang berjalan.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-navy rounded-xl p-5 text-white mb-10">
            <p className="text-sm text-white/80">
              <strong className="text-gold">💡 Implikasi Praktis:</strong> Bagi kontraktor yang mengerjakan banyak proyek sekaligus, perbedaan likuiditas ini sangat signifikan. Modal yang tidak terblokir bisa diputar untuk biaya mobilisasi, material, dan upah tenaga kerja proyek-proyek aktif.
            </p>
          </div>

          {/* Kasus Konkret */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Kasus Konkret: Pilih yang Mana?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Tidak ada jawaban universal. Pilihan terbaik bergantung pada kondisi spesifik kontraktor. Berikut analisis untuk beberapa skenario umum:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {kasusKonkret.map((k) => (
              <div key={k.skenario} className="bg-white rounded-card border border-black/8 overflow-hidden">
                <div className="bg-cream px-5 py-3 flex items-center gap-3 border-b border-black/6">
                  <span className="text-2xl">{k.icon}</span>
                  <span className="font-heading text-navy font-bold text-sm">{k.skenario}</span>
                  <span className={`ml-auto text-xs font-bold px-2.5 py-1 rounded-full ${
                    k.rekomendasi === "surety" ? "bg-gold/15 text-gold" :
                    k.rekomendasi === "keduanya" ? "bg-blue-50 text-blue-700" :
                    "bg-amber-50 text-amber-700"
                  }`}>
                    {k.rekomendasi === "surety" ? "→ Surety Bond" :
                     k.rekomendasi === "keduanya" ? "→ Evaluasi keduanya" :
                     "→ Konsultasikan"}
                  </span>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-semibold text-[#475569] mb-1.5">Bank Garansi:</div>
                    <p className="text-xs text-[#475569] leading-relaxed">{k.bank}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy mb-1.5">Surety Bond:</div>
                    <p className="text-xs text-navy2 leading-relaxed">{k.surety}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Miskonsepsi */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            4 Miskonsepsi yang Perlu Diluruskan
          </h2>
          <div className="flex flex-col gap-4 mb-10">
            {miskonsepsi.map((m, i) => (
              <div key={i} className="rounded-card border border-black/8 overflow-hidden">
                <div className="bg-red-50 border-b border-red-100 px-5 py-3 flex gap-2 items-start">
                  <span className="text-red-500 font-bold text-sm flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-red-700 text-sm leading-relaxed">{m.salah}</span>
                </div>
                <div className="bg-green-50 px-5 py-3 flex gap-2 items-start">
                  <span className="text-green-600 font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-[#475569] text-sm leading-relaxed">{m.benar}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pertimbangan Memilih */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Panduan Memilih Berdasarkan Kondisi Anda
          </h2>
          <div className="flex flex-col gap-4 mb-6">
            {pertimbanganMemilih.map((p) => (
              <div key={p.kondisi} className="bg-cream rounded-card p-5 border border-black/6 grid grid-cols-[auto_1fr] gap-4 items-start">
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <div className="text-xs text-[#475569] mb-0.5">Kondisi:</div>
                  <div className="font-heading text-navy font-bold text-sm mb-1">{p.kondisi}</div>
                  <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 text-gold text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                    → {p.rekomendasi}
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">{p.alasan}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Tidak Yakin Mana yang Lebih Tepat?</div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              Ceritakan kondisi perusahaan dan jenis tender yang sedang dipersiapkan. Kami bantu analisis dan rekomendasikan mana yang lebih sesuai — tanpa biaya konsultasi.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Konsultasi via WhatsApp
              </a>
              <Link href="/asuransi-surety-bond" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                📋 Lihat Semua Produk Surety Bond →
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
                { href: "/asuransi-surety-bond", icon: "📋", judul: "Semua Produk Surety Bond", desc: "Bid Bond, Performance Bond, Advance Payment, Maintenance" },
                { href: "/artikel/cara-mengurus-jaminan-penawaran-jogja", icon: "✅", judul: "Cara Mengurus Jaminan Penawaran", desc: "Syarat, dokumen, dan alur pengajuan Bid Bond" },
                { href: "/artikel/syarat-surety-bond-kontraktor-diy", icon: "📄", judul: "Syarat Surety Bond Kontraktor DIY", desc: "Dokumen dan kualifikasi yang perlu disiapkan" },
                { href: "/artikel/syarat-asuransi-tender-pemerintah-diy", icon: "🏛️", judul: "Syarat Asuransi Tender Pemerintah DIY", desc: "Semua dokumen asuransi yang wajib ada di tender" },
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
              Konsultasikan Kebutuhan Jaminan<br />Tender Anda Sekarang
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
              Kami bantu analisis kondisi perusahaan dan rekomendasikan instrumen jaminan yang paling sesuai — surety bond, bank garansi, atau kombinasi keduanya.
            </p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </section>

    </>
  );
}
