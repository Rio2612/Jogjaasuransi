// app/artikel/syarat-asuransi-tender-pemerintah-diy/page.tsx
// TARGET KEYWORD: "syarat asuransi tender pemerintah DIY", "dokumen asuransi CAR tender yogyakarta"
// INTENT: Navigational + Commercial — kontraktor yang sedang persiapan tender
// SILO: Engineering cluster → mendukung /asuransi-engineering/contractor-all-risk/

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Syarat Asuransi Tender Pemerintah DIY 2026 – Dokumen CAR yang Wajib Ada | Asuransi Jogja",
  description:
    "Panduan lengkap dokumen asuransi yang wajib dilampirkan dalam tender pemerintah DIY 2026. Contractor All Risk (CAR), Surety Bond, dan endorsement khusus. Proses cepat 1–3 hari kerja.",
  keywords:
    "syarat asuransi tender pemerintah DIY, dokumen CAR tender yogyakarta, asuransi wajib kontraktor pemerintah, certificate of insurance tender DIY, asuransi CAR APBD yogyakarta",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/syarat-asuransi-tender-pemerintah-diy",
  },
  openGraph: {
    title: "Syarat Asuransi Tender Pemerintah DIY 2026",
    description: "Dokumen asuransi CAR dan Surety Bond yang wajib ada saat mengikuti tender APBN/APBD di Yogyakarta.",
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
        { "@type": "ListItem", position: 3, name: "Syarat Asuransi Tender Pemerintah DIY", item: "https://asuransijogja.biz.id/artikel/syarat-asuransi-tender-pemerintah-diy" },
      ],
    },
    {
      "@type": "Article",
      headline: "Syarat Asuransi Tender Pemerintah DIY 2026",
      description: "Dokumen asuransi yang wajib dilampirkan dalam tender pemerintah DIY — CAR, Surety Bond, dan endorsement khusus.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Konsultan Asuransi Kerugian" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2026-02-01",
      dateModified: "2026-06-01",
      mainEntityOfPage: "https://asuransijogja.biz.id/artikel/syarat-asuransi-tender-pemerintah-diy",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Dokumen asuransi apa yang wajib ada saat tender pemerintah?",
          acceptedAnswer: { "@type": "Answer", text: "Dokumen asuransi yang umumnya wajib dalam tender pemerintah DIY: Certificate of Insurance CAR, Schedule of Insurance, Jaminan Penawaran (Bid Bond) dari perusahaan surety/asuransi, dan endorsement Principal Clause jika disyaratkan." },
        },
        {
          "@type": "Question",
          name: "Berapa lama proses mendapatkan polis CAR untuk tender?",
          acceptedAnswer: { "@type": "Answer", text: "Dengan dokumen proyek yang lengkap, polis CAR dan Certificate of Insurance dapat terbit dalam 1–3 hari kerja. Untuk proyek di atas Rp 10 miliar yang memerlukan survei, prosesnya 3–7 hari kerja." },
        },
        {
          "@type": "Question",
          name: "Apakah Jaminan Penawaran (Bid Bond) termasuk asuransi?",
          acceptedAnswer: { "@type": "Answer", text: "Jaminan Penawaran bisa diterbitkan oleh perusahaan asuransi umum (dalam bentuk Surety Bond) atau bank (dalam bentuk bank garansi). Keduanya diterima dalam tender pemerintah. Surety Bond dari asuransi umumnya lebih cepat prosesnya dan tidak memblokir plafon kredit bank." },
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "Cara Menyiapkan Dokumen Asuransi untuk Tender Pemerintah DIY",
      description: "Langkah-langkah menyiapkan dokumen asuransi CAR dan Surety Bond untuk mengikuti tender proyek pemerintah di Yogyakarta.",
      totalTime: "P3D",
      step: [
        { "@type": "HowToStep", position: 1, name: "Baca Dokumen RKS dengan Teliti", text: "Identifikasi semua persyaratan asuransi dalam Rencana Kerja dan Syarat-Syarat (RKS). Catat jenis asuransi, nilai minimum, dan endorsement yang diminta." },
        { "@type": "HowToStep", position: 2, name: "Hubungi Konsultan Asuransi", text: "Hubungi konsultan asuransi dengan informasi: nama proyek, nilai HPS, durasi proyek, dan persyaratan asuransi dari RKS. Konsultan akan menyiapkan penawaran." },
        { "@type": "HowToStep", position: 3, name: "Review dan Bayar Premi", text: "Review penawaran premi, pastikan cakupan sesuai RKS, lakukan pembayaran. Polis dan Certificate of Insurance diterbitkan dalam 1–3 hari kerja." },
        { "@type": "HowToStep", position: 4, name: "Lampirkan di Dokumen Penawaran", text: "Lampirkan Certificate of Insurance dan dokumen pendukung dalam amplop dokumen kualifikasi atau penawaran sesuai petunjuk dokumen tender." },
      ],
    },
  ],
};

const dokumenWajib = [
  {
    no: "1",
    dokumen: "Certificate of Insurance (CoI) CAR",
    kapan: "Saat penandatanganan kontrak / pencairan termin pertama",
    detail: "Bukti bahwa polis CAR sudah aktif dan menanggung proyek sesuai nilai dan periode kontrak. Harus mencantumkan nama proyek, nilai pertanggungan, periode, dan limit TPL.",
    wajib: true,
  },
  {
    no: "2",
    dokumen: "Schedule of Insurance",
    kapan: "Bersamaan dengan CoI",
    detail: "Lampiran polis yang merinci nilai pertanggungan Section I dan II, deductible, periode jaminan, dan nama tertanggung. Beberapa pemilik proyek mensyaratkan ini secara terpisah.",
    wajib: true,
  },
  {
    no: "3",
    dokumen: "Jaminan Penawaran (Bid Bond)",
    kapan: "Saat memasukkan dokumen penawaran",
    detail: "Surety Bond atau bank garansi senilai 1–3% dari nilai HPS (Harga Perkiraan Sendiri). Berlaku selama proses lelang hingga penandatanganan kontrak.",
    wajib: true,
  },
  {
    no: "4",
    dokumen: "Jaminan Pelaksanaan (Performance Bond)",
    kapan: "Saat penandatanganan kontrak",
    detail: "Surety Bond senilai 5% dari nilai kontrak. Menjamin kontraktor akan menyelesaikan pekerjaan sesuai spesifikasi dan jadwal kontrak.",
    wajib: true,
  },
  {
    no: "5",
    dokumen: "Endorsement Principal Clause",
    kapan: "Bersamaan dengan polis CAR",
    detail: "Memperluas perlindungan CAR sehingga juga melindungi kepentingan pemilik proyek (owner). Sering disyaratkan dalam kontrak BUMN dan beberapa instansi pemerintah.",
    wajib: false,
  },
  {
    no: "6",
    dokumen: "Endorsement Waiver of Subrogation",
    kapan: "Bersamaan dengan polis CAR",
    detail: "Perusahaan asuransi melepaskan hak subrogasi terhadap pemilik proyek. Artinya jika ada klaim akibat kelalaian owner, perusahaan asuransi tidak bisa menuntut owner.",
    wajib: false,
  },
  {
    no: "7",
    dokumen: "Jaminan Uang Muka (Advance Payment Bond)",
    kapan: "Saat pencairan uang muka",
    detail: "Jika kontrak memberikan uang muka kepada kontraktor, pemilik proyek biasanya mensyaratkan jaminan uang muka senilai uang muka yang diterima.",
    wajib: false,
  },
];

const tahapanProses = [
  {
    tahap: "H-7 sebelum batas upload",
    aksi: "Baca RKS",
    desc: "Baca seluruh Rencana Kerja dan Syarat-Syarat (RKS) dengan teliti. Identifikasi semua klausal asuransi — jenis, nilai minimum, endorsement khusus, dan format dokumen yang diterima.",
    tips: "Tandai semua ketentuan asuransi dengan highlighter — sering tersebar di beberapa bagian RKS",
  },
  {
    tahap: "H-5",
    aksi: "Hubungi Konsultan",
    desc: "Hubungi konsultan asuransi dengan informasi: nama dan nomor paket tender, nilai HPS, lokasi proyek, durasi, dan persyaratan asuransi dari RKS. Sertakan dokumen RKS jika memungkinkan.",
    tips: "Semakin lengkap informasi, semakin akurat penawaran premi yang Anda terima",
  },
  {
    tahap: "H-4",
    aksi: "Terima & Review Penawaran",
    desc: "Review penawaran premi dari beberapa perusahaan asuransi. Pastikan cakupan sesuai RKS — nilai pertanggungan, endorsement, nama tertanggung, dan format CoI yang diminta.",
    tips: "Jangan hanya bandingkan harga — pastikan endorsement yang diminta RKS sudah termasuk",
  },
  {
    tahap: "H-3",
    aksi: "Bayar Premi & Proses Polis",
    desc: "Lakukan pembayaran premi. Polis CAR dan Certificate of Insurance diterbitkan dalam 1–3 hari kerja untuk proyek standar. Koordinasikan dengan konsultan untuk proyek yang membutuhkan survei.",
    tips: "Minta draft CoI terlebih dahulu untuk dikonfirmasi sebelum polis resmi terbit",
  },
  {
    tahap: "H-1",
    aksi: "Terima & Cek Dokumen",
    desc: "Terima polis dan Certificate of Insurance. Cek ulang: nama tertanggung, nilai pertanggungan, periode, nomor proyek, dan semua endorsement yang diminta RKS sudah tercantum.",
    tips: "Kesalahan kecil seperti nama proyek yang berbeda bisa menjadi alasan dokumen ditolak panitia",
  },
  {
    tahap: "Hari H",
    aksi: "Upload / Lampirkan",
    desc: "Lampirkan Certificate of Insurance, Schedule of Insurance, dan dokumen Surety Bond dalam amplop dokumen penawaran atau upload di SPSE sesuai petunjuk paket tender.",
    tips: "Simpan salinan semua dokumen — diperlukan kembali saat penandatanganan kontrak",
  },
];

const kesalahanUmum = [
  {
    icon: "⚠️",
    kesalahan: "Terlambat Mengurus Asuransi",
    dampak: "Dokumen tidak siap sebelum batas upload, tidak bisa ikut tender",
    solusi: "Urus minimal H-5 sebelum batas pemasukan dokumen. Untuk proyek besar, H-10.",
  },
  {
    icon: "❌",
    kesalahan: "Nilai Pertanggungan Tidak Sesuai HPS",
    dampak: "Dokumen ditolak panitia karena tidak memenuhi syarat minimum",
    solusi: "Gunakan nilai HPS atau nilai kontrak yang tercantum dalam RKS sebagai dasar sum insured.",
  },
  {
    icon: "❌",
    kesalahan: "Endorsement yang Diminta Tidak Terpenuhi",
    dampak: "Polis dianggap tidak memenuhi syarat kontrak meski sudah bayar premi",
    solusi: "Baca RKS dengan teliti dan komunikasikan semua endorsement yang diminta ke konsultan.",
  },
  {
    icon: "❌",
    kesalahan: "Nama Tertanggung Salah",
    dampak: "CoI ditolak karena nama perusahaan berbeda dengan dokumen penawaran",
    solusi: "Konfirmasi nama tertanggung yang benar sebelum polis terbit — sesuaikan dengan akta perusahaan.",
  },
  {
    icon: "❌",
    kesalahan: "Periode Polis Lebih Pendek dari Durasi Proyek",
    dampak: "Proyek tidak terlindungi di periode akhir, bisa melanggar kontrak",
    solusi: "Periode polis harus sama atau lebih panjang dari durasi kontrak termasuk masa pemeliharaan.",
  },
];

const faqItems = [
  {
    q: "Apakah Certificate of Insurance sama dengan polis asuransi?",
    a: "Tidak sama, tapi keduanya terkait. Polis adalah kontrak lengkap antara tertanggung dan perusahaan asuransi — dokumennya tebal dan teknis. Certificate of Insurance (CoI) adalah ringkasan satu halaman yang membuktikan polis sudah aktif — inilah yang umumnya dilampirkan dalam dokumen tender.",
  },
  {
    q: "Bisakah menggunakan CoI dari proyek lain yang masih aktif?",
    a: "Tidak bisa. Setiap proyek memerlukan polis CAR tersendiri yang spesifik mencantumkan nama, lokasi, nilai, dan periode proyek tersebut. CoI dari proyek lain tidak akan diterima panitia tender.",
  },
  {
    q: "Apa bedanya Surety Bond dari asuransi vs bank garansi?",
    a: "Keduanya diterima dalam tender pemerintah. Surety Bond dari asuransi prosesnya lebih cepat (1–2 hari), tidak memblokir plafon kredit di bank, dan persyaratan administrasinya lebih fleksibel. Bank Garansi membutuhkan agunan dan memblokir plafon kredit, namun beberapa pemilik proyek BUMN masih lebih menyukainya.",
  },
  {
    q: "Apa yang terjadi jika tidak menang tender — apakah premi CAR bisa dikembalikan?",
    a: "Jaminan Penawaran (Bid Bond) akan dikembalikan atau dicairkan setelah proses tender selesai — tanpa biaya. Untuk polis CAR yang sudah dibeli sebelum pengumuman pemenang, premi umumnya tidak dikembalikan. Oleh karena itu, sebaiknya urus polis CAR setelah ditetapkan sebagai pemenang tender.",
  },
  {
    q: "Berapa lama proses mendapatkan dokumen asuransi untuk tender?",
    a: "Untuk proyek standar dengan dokumen lengkap: Jaminan Penawaran (Bid Bond) 1 hari, polis CAR dan CoI 1–3 hari kerja, Jaminan Pelaksanaan 1–2 hari setelah ada SPPBJ. Untuk proyek besar di atas Rp 10 miliar, proses mungkin memerlukan survei dan bisa 3–7 hari.",
  },
  {
    q: "Apakah konsultan asuransi bisa membantu memeriksa kesesuaian dokumen dengan RKS?",
    a: "Ya, ini justru salah satu layanan utama kami. Kami review persyaratan asuransi dalam RKS, memastikan polis yang diterbitkan memenuhi semua ketentuan, dan mempersiapkan seluruh dokumen yang diperlukan. Layanan ini gratis sebagai bagian dari konsultasi.",
  },
];

export default function ArtikelSyaratTender() {
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
            <span className="text-navy font-semibold">Syarat Asuransi Tender Pemerintah DIY</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-engineering/contractor-all-risk" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🏗️ Contractor All Risk
              </Link>
              <Link href="/asuransi-surety-bond" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                📋 Surety Bond
              </Link>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/40 text-xs">Panduan Tender</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Syarat Asuransi Tender<br /><em className="not-italic text-gold">Pemerintah DIY 2026</em> —<br />Dokumen yang Wajib Disiapkan
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Tidak sedikit kontraktor yang gugur di tahap administrasi tender hanya karena dokumen asuransi tidak lengkap atau tidak sesuai. Panduan ini membantu Anda menyiapkan semua dokumen asuransi yang benar sebelum batas waktu.
            </p>
            <div className="flex gap-3 text-xs text-white/40 flex-wrap">
              <span>✍️ Rio MD — Konsultan Asuransi Kerugian</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2026</span>
              <span>·</span>
              <span>⏱️ Baca 7 menit</span>
            </div>
          </div>
        </section>

        {/* Konten */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Penting:</strong> Berdasarkan Perpres No. 12 Tahun 2021 tentang Pengadaan Barang/Jasa Pemerintah, kontraktor yang memenangkan tender <strong>wajib menyerahkan bukti asuransi CAR</strong> sebelum pencairan termin pertama. Jaminan Penawaran (Bid Bond) juga wajib dilampirkan saat pemasukan dokumen penawaran.
            </p>
          </div>

          {/* Dokumen Wajib */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Daftar Lengkap Dokumen Asuransi untuk Tender Pemerintah
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Berikut semua dokumen asuransi yang mungkin disyaratkan dalam tender pemerintah DIY. Dokumen yang wajib ada hampir di semua paket, dan dokumen yang bersifat kondisional tergantung persyaratan kontrak spesifik.
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {dokumenWajib.map((d) => (
              <div key={d.no} className={`rounded-card p-5 border ${d.wajib ? "bg-white border-navy/10" : "bg-cream border-black/6"}`}>
                <div className="flex items-start gap-4">
                  <div className={`font-heading font-bold text-xs w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${d.wajib ? "bg-navy text-gold" : "bg-[#64748B]/20 text-[#64748B]"}`}>
                    {d.no}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-heading text-navy font-bold text-sm">{d.dokumen}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${d.wajib ? "bg-green-100 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                        {d.wajib ? "✓ Umum Wajib" : "◎ Kondisional"}
                      </span>
                    </div>
                    <div className="text-xs text-gold font-semibold mb-1.5">📅 {d.kapan}</div>
                    <p className="text-sm text-[#64748B] leading-relaxed">{d.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Proses */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Timeline: Cara Menyiapkan Dokumen Asuransi Sebelum Tender
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Ini panduan hari demi hari yang kami rekomendasikan agar dokumen asuransi Anda siap tepat waktu tanpa ada yang terlewat.
          </p>
          <div className="flex flex-col gap-4 mb-4">
            {tahapanProses.map((t, i) => (
              <div key={t.tahap} className="bg-cream rounded-card p-5 border border-black/5 grid grid-cols-[auto_1fr] gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-navy text-gold font-heading font-bold text-xs px-3 py-1.5 rounded-full whitespace-nowrap">{t.tahap}</div>
                  {i < tahapanProses.length - 1 && <div className="w-px h-full bg-navy/10 flex-1" />}
                </div>
                <div className="pb-2">
                  <div className="font-heading text-navy font-bold text-sm mb-1">{t.aksi}</div>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-2">{t.desc}</p>
                  <div className="bg-gold/8 border border-gold/15 rounded-lg px-3 py-1.5 text-xs text-navy2">
                    💡 {t.tips}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-navy rounded-xl p-5 text-white mb-10">
            <p className="text-sm text-white/80">
              <strong className="text-gold">⚡ Butuh dokumen URGENT?</strong> Kami bisa proses Jaminan Penawaran dalam <strong className="text-gold">1 hari kerja</strong> dan CoI CAR dalam <strong className="text-gold">1–2 hari kerja</strong> dengan dokumen yang lengkap. Hubungi kami sekarang via WhatsApp.
            </p>
          </div>

          {/* Kesalahan Umum */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            5 Kesalahan Dokumen Asuransi yang Sering Membuat Kontraktor Gugur
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Berdasarkan pengalaman kami mendampingi kontraktor di Yogyakarta, berikut kesalahan yang paling sering terjadi dan cara menghindarinya:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {kesalahanUmum.map((k) => (
              <div key={k.kesalahan} className="bg-white rounded-card p-5 border border-red-100">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{k.icon}</span>
                  <div>
                    <div className="font-heading text-navy font-bold text-sm mb-1">{k.kesalahan}</div>
                    <div className="text-xs text-red-600 font-semibold mb-2">Dampak: {k.dampak}</div>
                    <div className="text-xs text-[#64748B] bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                      ✓ Solusi: {k.solusi}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Mau Dokumen Tender Siap dalam 1–3 Hari?</div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-4">
              Ceritakan paket tender Anda kepada kami — nama proyek, nilai HPS, dan persyaratan RKS. Kami siapkan semua dokumen asuransi yang dibutuhkan.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Konsultasi Tender via WA
              </a>
              <Link href="/asuransi-surety-bond" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                📋 Lihat Produk Surety Bond →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            FAQ Asuransi Tender Pemerintah
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

          {/* Internal links */}
          <div className="border-t border-black/8 pt-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">Baca Juga</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/asuransi-engineering/contractor-all-risk", icon: "🏗️", judul: "Asuransi CAR Yogyakarta", desc: "Cakupan polis, kalkulator premi, dan cara klaim CAR" },
                { href: "/asuransi-surety-bond/jaminan-penawaran", icon: "📋", judul: "Jaminan Penawaran (Bid Bond)", desc: "Surety Bond untuk ikut tender pemerintah dan swasta" },
                { href: "/asuransi-surety-bond/jaminan-pelaksanaan", icon: "🤝", judul: "Jaminan Pelaksanaan", desc: "Performance Bond wajib saat penandatanganan kontrak" },
                { href: "/artikel/premi-asuransi-car-jogja", icon: "💰", judul: "Berapa Premi CAR Jogja?", desc: "Tabel estimasi premi dan faktor penentu rate CAR" },
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
              Jangan Sampai Gugur Administrasi<br />karena Dokumen Asuransi Kurang
            </h2>
            <p className="text-white/75 text-sm max-w-[420px] mx-auto mb-8">
              Hubungi kami sekarang — kami siapkan semua dokumen asuransi untuk tender Anda dalam 1–3 hari kerja.
            </p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Siapkan Dokumen Tender via WhatsApp
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
