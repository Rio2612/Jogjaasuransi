import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kendaraan Jogja – Praktisi Independen, Premi OJK, Klaim Mudah",
  description:
    "Layanan asuransi kendaraan bermotor di Yogyakarta oleh praktisi asuransi independen berpengalaman 8 tahun. Mobil, truk, armada fleet. Tarif OJK, klaim didampingi. Konsultasi gratis.",
  keywords:
    "asuransi kendaraan Jogja, asuransi mobil Yogyakarta, praktisi asuransi kendaraan Yogyakarta, asuransi mobil plat AB, asuransi kendaraan wilayah III, asuransi mobil Sleman Bantul",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/asuransi-kendaraan-jogja" },
  openGraph: {
    title: "Asuransi Kendaraan Jogja – Praktisi Independen Terpercaya",
    description:
      "Praktisi asuransi kendaraan bermotor di Yogyakarta. Tarif OJK transparan, klaim didampingi penuh, tersedia untuk plat AB dan seluruh wilayah DIY.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-kendaraan-jogja",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og/og-kendaraan.png", width: 1200, height: 630, alt: "Asuransi Kendaraan Jogja – Praktisi Independen Terpercaya" }],
  },
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Kendaraan Jogja – Praktisi Independen, Premi OJK, Klaim Mudah",
  description: "Panduan dan layanan asuransi kendaraan bermotor di Yogyakarta oleh praktisi independen.",
  url: "https://asuransijogja.biz.id/artikel/asuransi-kendaraan-jogja",
  datePublished: "2025-05-01",
  dateModified: "2026-08-12",
  author: { "@type": "Person", name: "Rio Mardiansyah", url: "https://asuransijogja.biz.id" },
  publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
  mainEntityOfPage: "https://asuransijogja.biz.id/artikel/asuransi-kendaraan-jogja",
};

const schemaLocalBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InsuranceAgency"],
  name: "Asuransi Jogja",
  description: "Praktisi asuransi kerugian independen di Yogyakarta, spesialis asuransi kendaraan bermotor.",
  url: "https://asuransijogja.biz.id",
  telephone: "+628131556592",
  email: "rio@asuransijogja.biz.id",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yogyakarta",
    addressRegion: "Daerah Istimewa Yogyakarta",
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: -7.7971, longitude: 110.3688 },
  areaServed: [
    { "@type": "City", name: "Kota Yogyakarta" },
    { "@type": "City", name: "Sleman" },
    { "@type": "City", name: "Bantul" },
    { "@type": "City", name: "Gunungkidul" },
    { "@type": "City", name: "Kulon Progo" },
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa tarif premi asuransi mobil plat AB (Yogyakarta)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plat AB (Yogyakarta/DIY) termasuk Wilayah III dalam pengelompokan tarif OJK. Untuk asuransi All Risk, tarifnya berkisar 1,05%–2,69% dari nilai kendaraan per tahun tergantung kategori harga. Untuk TLO, tarifnya 0,20%–0,51% per tahun. Tarif ini merupakan tarif referensi OJK SE No.6/SEOJK.05/2017.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada praktisi asuransi kendaraan independen di Jogja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Asuransi Jogja dikelola oleh praktisi asuransi independen yang beroperasi di Yogyakarta dengan pengalaman 8 tahun. Sebagai praktisi independen (bukan agen terikat satu perusahaan), kami bisa membandingkan produk dari berbagai perusahaan asuransi dan merekomendasikan yang paling sesuai untuk kebutuhan Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah praktisi asuransi di Jogja bisa membantu proses klaim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Kami mendampingi klien dari awal pengajuan klaim hingga dana ganti rugi cair — tanpa biaya tambahan. Termasuk membantu persiapan dokumen, komunikasi dengan perusahaan asuransi, dan memastikan klaim tidak ditolak karena alasan prosedural.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa asuransi kendaraan untuk area Sleman, Bantul, dan Gunung Kidul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tentu. Layanan kami mencakup seluruh wilayah Daerah Istimewa Yogyakarta — Kota Yogyakarta, Sleman, Bantul, Gunungkidul, dan Kulon Progo. Untuk penilaian awal dan konsultasi bisa dilakukan via WhatsApp tanpa perlu tatap muka.",
      },
    },
  ],
};

const keunggulan = [
  { icon: "🎯", judul: "Independen & Objektif", isi: "Tidak terikat satu perusahaan asuransi. Rekomendasi murni berdasarkan kebutuhan Anda, bukan target penjualan produk tertentu." },
  { icon: "📋", judul: "Tarif Resmi OJK", isi: "Seluruh premi mengacu tarif OJK SE No.6/SEOJK.05/2017 — transparan, dapat diverifikasi, tidak ada angka yang disembunyikan." },
  { icon: "🤝", judul: "Pendampingan Klaim", isi: "Dari pelaporan awal hingga ganti rugi cair, kami dampingi seluruh prosesnya — tanpa biaya tambahan apapun." },
  { icon: "⚡", judul: "Proses Cepat", isi: "Polis kendaraan standar bisa terbit dalam 1 hari kerja. Konsultasi bisa dimulai via WhatsApp kapan saja." },
  { icon: "🏙️", judul: "Berbasis di Yogyakarta", isi: "Kami memahami kondisi lokal: rute, area rawan banjir, bengkel rekanan yang tersedia di DIY, dan karakteristik risiko kendaraan di Jogja." },
  { icon: "📊", judul: "Komparasi Multi-Produk", isi: "Kami bandingkan penawaran dari beberapa perusahaan asuransi terpercaya sekaligus, sehingga Anda mendapatkan kombinasi harga dan manfaat terbaik." },
];

const produkKendaraan = [
  { href: "/asuransi-kendaraan/mobil", icon: "🚗", judul: "Asuransi Mobil", sub: "All Risk & TLO · BBM & Listrik", tags: ["All Risk", "TLO", "Mobil EV", "Plat AB"] },
  { href: "/asuransi-kendaraan/dump-truk-niaga", icon: "🚛", judul: "Kendaraan Niaga", sub: "Dump Truk, Tronton, Pickup", tags: ["Dump Truk", "Kendaraan Berat", "Proyek"] },
  { href: "/asuransi-kendaraan/armada-fleet", icon: "🚐", judul: "Armada / Fleet", sub: "5+ Unit · Polis Korporasi", tags: ["Fleet", "Perusahaan", "Logistik"] },
];

const wilayahLayanan = [
  { wilayah: "Kota Yogyakarta", kecamatan: "Gondokusuman, Mergangsan, Umbulharjo, Jetis, Gedongtengen, dan seluruh kecamatan Kota Jogja" },
  { wilayah: "Kabupaten Sleman", kecamatan: "Depok, Mlati, Gamping, Ngaglik, Godean, Seyegan, Kalasan, Berbah, dan seluruh kecamatan Sleman" },
  { wilayah: "Kabupaten Bantul", kecamatan: "Kasihan, Sewon, Banguntapan, Jetis, Imogiri, Pandak, dan seluruh kecamatan Bantul" },
  { wilayah: "Kabupaten Gunungkidul", kecamatan: "Wonosari, Playen, Patuk, dan seluruh kecamatan Gunungkidul" },
  { wilayah: "Kabupaten Kulon Progo", kecamatan: "Wates, Pengasih, Sentolo, dan seluruh kecamatan Kulon Progo" },
];

export default function AsuransiKendaraanJogjaPage() {
  const wa = `https://wa.me/${KONTAK.wa}?text=${encodeURIComponent(
    "Halo Pak Rio, saya ingin konsultasi asuransi kendaraan di Yogyakarta."
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* BREADCRUMB */}
      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-sm text-[#475569]">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Asuransi Kendaraan Jogja</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)" }} />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">🏙️</div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[2px] uppercase text-gold2 bg-gold/10 border border-gold/25 px-3 py-1 rounded-full">
              Lokal · Yogyakarta · Praktisi Independen
            </span>
          </div>
          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.18] mb-4">
            Asuransi Kendaraan di Jogja:<br />
            <em className="not-italic text-gold">Praktisi Independen</em>,<br />
            Tarif OJK, Klaim Didampingi
          </h1>
          <p className="text-white/80 text-base leading-[1.85] max-w-[580px] mb-6">
            Mencari praktisi asuransi kendaraan terpercaya di Yogyakarta? Kami adalah praktisi independen — tidak terikat satu perusahaan asuransi manapun — yang membantu pemilik kendaraan di seluruh DIY menemukan perlindungan terbaik sesuai kebutuhan dan anggaran.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6 max-w-sm">
            {[{ num: "8+", lbl: "Tahun Pengalaman" }, { num: "DIY", lbl: "Area Layanan" }, { num: "Gratis", lbl: "Konsultasi" }].map(s => (
              <div key={s.lbl} className="text-center">
                <div className="font-heading text-gold text-xl font-bold">{s.num}</div>
                <div className="text-white/60 text-xs">{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href={wa} className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all">💬 Konsultasi via WhatsApp</a>
            <Link href="/asuransi-kendaraan" className="border border-white/25 text-white px-6 py-3 rounded-lg text-sm no-underline hover:border-gold/60 transition-all">🧮 Hitung Premi Sekarang</Link>
          </div>
        </div>
      </section>

      <article className="px-[5vw] max-w-[900px] mx-auto">

        {/* KONTEKS LOKAL */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Mengapa Asuransi Kendaraan Penting di Yogyakarta?
          </h2>
          <p className="text-[#475569] leading-relaxed text-sm mb-6">
            Yogyakarta adalah salah satu kota dengan kepadatan kendaraan bermotor tertinggi di Indonesia, terutama sepeda motor. Kondisi lalu lintas yang padat — khususnya di kawasan Malioboro, Jalan Kaliurang, Ring Road, dan area kampus — meningkatkan risiko kecelakaan secara signifikan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            {[
              { icon: "🚦", judul: "Kepadatan Lalu Lintas", isi: "Persimpangan padat, jalanan sempit di area Kota Jogja, dan campuran kendaraan berat-ringan di jalan utama meningkatkan risiko kecelakaan ringan hingga sedang." },
              { icon: "🌊", isi: "Beberapa wilayah Sleman dan Bantul rawan banjir musiman dari Kali Code, Kali Progo, dan Kali Opak. Perluasan banjir dalam polis sangat relevan untuk kendaraan di area ini.", judul: "Risiko Banjir Musiman" },
              { icon: "🌋", judul: "Debu Abu Vulkanik", isi: "Aktivitas Gunung Merapi berpotensi menyebabkan hujan abu yang merusak lapisan bodi dan komponen eksterior kendaraan. Beberapa polis memiliki klausul khusus untuk ini." },
              { icon: "🏍️", judul: "Kepadatan Sepeda Motor", isi: "Yogyakarta memiliki rasio sepeda motor per kapita yang sangat tinggi. Interaksi antara motor dan mobil di persimpangan sering menjadi penyebab klaim kecelakaan ringan." },
            ].map((k, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-card p-5">
                <div className="text-2xl mb-3">{k.icon}</div>
                <div className="font-heading text-navy font-bold text-sm mb-2">{k.judul}</div>
                <p className="text-xs text-[#475569] leading-relaxed">{k.isi}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TARIF OJK WILAYAH III */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Tarif OJK untuk Plat AB dan Wilayah III
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed mb-6">
            Kendaraan berplat AB (Yogyakarta/DIY) masuk dalam <strong className="text-navy">Wilayah III</strong> pengelompokan tarif OJK — bersama dengan kendaraan dari Jawa Tengah, Jawa Timur, Bali, Kalimantan, Sulawesi, Maluku, dan Papua. Wilayah III memiliki tarif referensi yang sedikit lebih rendah dibanding Wilayah I dan II.
          </p>
          <div className="overflow-x-auto rounded-card border border-black/8 mb-4">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left py-3 px-4 font-semibold text-white/70">Kategori Harga</th>
                  <th className="text-center py-3 px-4 font-semibold text-gold">All Risk (Wil. III)</th>
                  <th className="text-center py-3 px-4 font-semibold">TLO (Wil. III)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { kat: "Kategori 1 (≤ Rp 125 jt)", ar: "2,53%", tlo: "0,51%" },
                  { kat: "Kategori 2 (> Rp 125 jt – Rp 200 jt)", ar: "2,69%", tlo: "0,44%" },
                  { kat: "Kategori 3 (> Rp 200 jt – Rp 400 jt)", ar: "1,79%", tlo: "0,29%" },
                  { kat: "Kategori 4 (> Rp 400 jt – Rp 800 jt)", ar: "1,14%", tlo: "0,23%" },
                  { kat: "Kategori 5 (> Rp 800 jt)", ar: "1,05%", tlo: "0,20%" },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cream/40"}>
                    <td className="py-3 px-4 font-semibold text-navy">{r.kat}</td>
                    <td className="py-3 px-4 text-center text-gold font-semibold">{r.ar}</td>
                    <td className="py-3 px-4 text-center text-[#475569]">{r.tlo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#475569]">
            * Tarif batas bawah berdasarkan OJK SE No.6/SEOJK.05/2017 untuk kendaraan konvensional. Tarif EV sekitar 10% lebih tinggi. Tarif ini merupakan batas minimum — perusahaan asuransi bisa menawarkan di bawah tarif batas atas dengan diskon khusus.{" "}
            <Link href="/asuransi-kendaraan" className="text-gold hover:underline">Gunakan kalkulator kami</Link> untuk estimasi lengkap.
          </p>
        </section>

        {/* PRODUK TERSEDIA — ringkas, detail lengkap ada di halaman produk masing-masing */}
        <section className="py-10 border-b border-black/8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">Produk yang Kami Layani</p>
          <div className="flex gap-3 flex-wrap">
            {produkKendaraan.map((p) => (
              <Link key={p.href} href={p.href} className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">
                {p.icon} {p.judul} →
              </Link>
            ))}
          </div>
        </section>

        {/* PRAKTISI INDEPENDEN VS ALTERNATIF LAIN — angle unik, tidak ada di halaman produk */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Praktisi Independen vs Agen Tunggal vs Beli Online — Bedanya Apa?
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed mb-6">
            Calon klien di Jogja sering bingung memilih dari mana membeli polis. Ketiganya sama-sama sah, tapi cakupan bantuan yang Anda dapat sangat berbeda:
          </p>
          <div className="overflow-x-auto rounded-card border border-black/8">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left py-3 px-4 font-semibold text-white/70">Aspek</th>
                  <th className="text-center py-3 px-4 font-semibold text-gold">Praktisi Independen</th>
                  <th className="text-center py-3 px-4 font-semibold">Agen Tunggal</th>
                  <th className="text-center py-3 px-4 font-semibold">Beli Online</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspek: "Pilihan Produk", indie: "Bisa bandingkan beberapa perusahaan asuransi", agen: "Hanya 1 perusahaan asuransi", online: "Terbatas pada mitra platform" },
                  { aspek: "Pendampingan Klaim", indie: "Didampingi langsung dari lapor sampai cair", agen: "Tergantung kesediaan agen", online: "Umumnya self-service via aplikasi" },
                  { aspek: "Rekomendasi Bengkel Rekanan", indie: "Tahu bengkel yang benar-benar cocok di DIY", agen: "Sesuai daftar 1 perusahaan saja", online: "Tidak selalu ada panduan lokal" },
                  { aspek: "Kontak Saat Ada Masalah", indie: "Satu nomor WhatsApp, respons langsung", agen: "Tergantung jam kerja agen", online: "Call center umum, tidak personal" },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cream/40"}>
                    <td className="py-3 px-4 font-semibold text-navy">{r.aspek}</td>
                    <td className="py-3 px-4 text-center text-gold font-medium">{r.indie}</td>
                    <td className="py-3 px-4 text-center text-[#475569]">{r.agen}</td>
                    <td className="py-3 px-4 text-center text-[#475569]">{r.online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-8">
            Mengapa Memilih Praktisi Independen di Jogja?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {keunggulan.map((k, i) => (
              <div key={i} className="flex gap-4 bg-white border border-black/8 rounded-card p-5">
                <span className="text-2xl flex-shrink-0">{k.icon}</span>
                <div>
                  <div className="font-heading text-navy font-bold text-sm mb-1">{k.judul}</div>
                  <p className="text-xs text-[#475569] leading-relaxed">{k.isi}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WILAYAH LAYANAN */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Area Layanan di Daerah Istimewa Yogyakarta
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed mb-6">
            Kami melayani klien di seluruh kabupaten dan kota di DIY. Konsultasi awal bisa dilakukan secara online via WhatsApp tanpa perlu tatap muka.
          </p>
          <div className="flex flex-col divide-y divide-black/6 border border-black/8 rounded-card overflow-hidden">
            {wilayahLayanan.map((w, i) => (
              <div key={i} className={`flex flex-col sm:flex-row sm:items-start gap-2 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-cream/40"}`}>
                <div className="font-semibold text-navy text-sm min-w-[180px]">📍 {w.wilayah}</div>
                <div className="text-xs text-[#475569]">{w.kecamatan}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-8">Pertanyaan yang Sering Diajukan</h2>
          <div className="flex flex-col divide-y divide-black/8">
            {schemaFAQ.mainEntity.map((faq, i) => (
              <div key={i} className="py-5">
                <h3 className="font-semibold text-navy text-[0.95rem] mb-2">{faq.name}</h3>
                <p className="text-sm text-[#475569] leading-[1.78]">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-10 border-b border-black/8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">Artikel & Halaman Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-kendaraan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚗 Semua Produk Asuransi Kendaraan →</Link>
            <Link href="/artikel/perbedaan-all-risk-tlo" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚖️ All Risk vs TLO →</Link>
            <Link href="/artikel/asuransi-mobil-banjir" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🌊 Asuransi Mobil Kena Banjir →</Link>
            <Link href="/artikel/bengkel-rekanan-asuransi-jogja" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔧 Bengkel Rekanan di Jogja →</Link>
            <Link href="/artikel/cara-klaim-asuransi-mobil" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📋 Cara Klaim Asuransi Mobil →</Link>
          </div>
        </section>

        {/* AUTHOR BOX */}
        <section className="py-10">
          <div className="bg-navy rounded-card p-6 flex gap-5 items-start">
            <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 font-heading font-bold text-gold text-lg">R</div>
            <div>
              <div className="font-heading text-white font-bold mb-1">Rio Mardiansyah</div>
              <div className="text-gold2 text-xs mb-3">Praktisi Asuransi Independen · Berbasis di Yogyakarta · 8 Tahun Pengalaman</div>
              <p className="text-white/65 text-sm leading-relaxed">
                Saya telah membantu ratusan pemilik kendaraan di Yogyakarta dan sekitarnya menemukan perlindungan asuransi yang tepat — mulai dari mobil pribadi, dump truk proyek, hingga armada puluhan unit. Tidak ada biaya konsultasi, tidak ada tekanan untuk membeli produk tertentu.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Siap Konsultasi Asuransi<br />Kendaraan di Jogja?
          </h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">
            Ceritakan kebutuhan Anda — jenis kendaraan, usia, dan anggaran. Kami analisis dan carikan pilihan terbaik dari beberapa perusahaan asuransi terpercaya.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={wa} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 WhatsApp Pak Rio Sekarang</a>
            <Link href="/asuransi-kendaraan" className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all">🧮 Hitung Premi Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
