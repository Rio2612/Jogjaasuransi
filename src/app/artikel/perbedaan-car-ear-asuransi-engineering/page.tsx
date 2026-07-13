// app/artikel/perbedaan-car-ear-asuransi-engineering/page.tsx
// TARGET KEYWORD: "perbedaan CAR dan EAR", "bedanya contractor all risk dan erection all risk"
// INTENT: Informational — user sedang research, belum tahu harus beli yang mana
// SILO: Engineering cluster → mendukung keduanya /contractor-all-risk/ dan /erection-all-risk/

import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Perbedaan CAR dan EAR dalam Asuransi Engineering – Mana yang Tepat?",
  description:
    "Penjelasan lengkap perbedaan Contractor All Risk (CAR) dan Erection All Risk (EAR). Kapan harus pakai CAR, kapan EAR, dan kapan Combined CAR/EAR. Dilengkapi tabel perbandingan dan contoh proyek nyata.",
  keywords:
    "perbedaan CAR dan EAR, bedanya contractor all risk erection all risk, kapan pakai CAR kapan EAR, asuransi engineering jogja, combined CAR EAR yogyakarta",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/perbedaan-car-ear-asuransi-engineering",
  },
  openGraph: {
    title: "Perbedaan CAR dan EAR dalam Asuransi Engineering",
    description: "Kapan harus pakai CAR, kapan EAR? Tabel perbandingan lengkap dan contoh proyek nyata di Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel/perbedaan-car-ear-asuransi-engineering",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Perbedaan CAR dan EAR dalam Asuransi Engineering" }],
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
        { "@type": "ListItem", position: 3, name: "Perbedaan CAR dan EAR", item: "https://asuransijogja.biz.id/artikel/perbedaan-car-ear-asuransi-engineering" },
      ],
    },
    {
      "@type": "Article",
      headline: "Perbedaan CAR dan EAR dalam Asuransi Engineering",
      description: "Penjelasan lengkap perbedaan Contractor All Risk dan Erection All Risk — kapan pakai yang mana dan pilihan Combined CAR/EAR.",
      author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Praktisi Asuransi" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-02-15",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa perbedaan utama antara CAR dan EAR?",
          acceptedAnswer: { "@type": "Answer", text: "CAR (Contractor All Risk) untuk pekerjaan konstruksi sipil — gedung, jalan, jembatan — yang melibatkan material bangunan. EAR (Erection All Risk) untuk pekerjaan pemasangan mesin, struktur baja, dan instalasi MEP yang melibatkan proses lifting, assembly, dan commissioning." },
        },
        {
          "@type": "Question",
          name: "Kapan sebaiknya menggunakan Combined CAR/EAR?",
          acceptedAnswer: { "@type": "Answer", text: "Combined CAR/EAR digunakan untuk proyek yang menggabungkan pekerjaan sipil dan pemasangan mesin dalam satu kontrak — misalnya pembangunan pabrik baru yang mencakup konstruksi gedung sekaligus pemasangan mesin produksi." },
        },
        {
          "@type": "Question",
          name: "Apakah proyek MEP termasuk CAR atau EAR?",
          acceptedAnswer: { "@type": "Answer", text: "Tergantung konteksnya. Pekerjaan MEP sebagai bagian dari konstruksi gedung umumnya tercakup dalam CAR. Namun pemasangan mesin besar, trafo HV, atau instalasi sistem pendingin berskala industri yang dilakukan sebagai pekerjaan terpisah lebih tepat menggunakan EAR." },
        },
      ],
    },
  ],
};

const tabelPerbandingan = [
  { aspek: "Definisi", car: "Perlindungan proyek konstruksi sipil dari awal hingga serah terima", ear: "Perlindungan pemasangan mesin dan instalasi dari erection hingga commissioning" },
  { aspek: "Jenis Pekerjaan Utama", car: "Pekerjaan sipil: gedung, jalan, jembatan, bendungan, drainase", ear: "Erection / instalasi: mesin, struktur baja, panel HV, pressure vessel" },
  { aspek: "Material yang Ditanggung", car: "Beton, bata, besi beton, kayu, material bangunan konvensional", ear: "Mesin, baja profil, komponen elektronik, peralatan industri" },
  { aspek: "Fase Kritis", car: "Pengecoran pondasi, struktur, pemasangan atap, finishing", ear: "Lifting & rigging, assembly, cold commissioning, hot commissioning" },
  { aspek: "Risiko Dominan", car: "Hujan deras, banjir, gempa bumi, keruntuhan bekisting", ear: "Jatuh saat lifting, salah assembly, kegagalan saat uji coba" },
  { aspek: "Section II (TPL)", car: "Tersedia — kerusakan properti & cedera warga sekitar proyek", ear: "Tersedia — namun lebih terfokus pada risiko selama erection" },
  { aspek: "Maintenance Period", car: "12 bulan setelah serah terima (Provisional Handover)", ear: "12 bulan setelah selesai commissioning / Mechanical Completion" },
  { aspek: "Estimasi Premi", car: "0,15 – 0,5% dari nilai kontrak / tahun", ear: "0,2 – 0,6% dari nilai kontrak" },
  { aspek: "Wajib Tender?", car: "Ya — hampir semua tender pemerintah mensyaratkan CAR", ear: "Kondisional — tergantung kontrak EPC atau proyek industri" },
  { aspek: "Perluasan Tersedia", car: "Principal Clause, Waiver of Subrogation, ALOP", ear: "DSU (Delay in Start-Up), ALOP, Marine Cargo untuk komponen impor" },
];

const contohProyek = [
  {
    proyek: "Pembangunan Hotel 4 Lantai di Sleman",
    jenis: "CAR",
    alasan: "Pekerjaan didominasi konstruksi sipil — pondasi, struktur beton, dinding, atap. MEP standar (listrik, plumbing) umumnya termasuk dalam cakupan CAR karena merupakan bagian dari pekerjaan bangunan.",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    proyek: "Pemasangan Mesin Produksi Garmen di Pabrik Bantul",
    jenis: "EAR",
    alasan: "Pekerjaan sepenuhnya berupa instalasi mesin jahit industri, conveyor, dan sistem kontrol. Tidak ada pekerjaan sipil — gedung pabrik sudah berdiri. Proses lifting dan commissioning mesin adalah risiko utama.",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    proyek: "Pembangunan Pabrik Baru di Kulon Progo (EPC)",
    jenis: "Combined CAR/EAR",
    alasan: "Kontrak mencakup pembangunan gedung pabrik sekaligus pemasangan mesin produksi. Satu polis Combined CAR/EAR lebih efisien dan menghindari celah perlindungan antara fase sipil dan fase erection mesin.",
    badge: "bg-green-50 text-green-700 border-green-100",
  },
  {
    proyek: "Renovasi dan Upgrade Chiller Rumah Sakit Jogja",
    jenis: "EAR",
    alasan: "Pekerjaan renovasi minor (sipil) dikombinasikan dengan pemasangan chiller baru berkapasitas besar. Nilai dan risiko utama ada di instalasi chiller — termasuk pressure test dan commissioning. EAR lebih tepat.",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    proyek: "Pembangunan Jembatan Akses Kawasan Industri",
    jenis: "CAR",
    alasan: "Pekerjaan sipil murni — pondasi tiang pancang, abutment beton, deck baja, aspal. Meski ada elemen struktur baja, pekerjaan ini tetap masuk kategori konstruksi sipil yang di-cover CAR.",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    proyek: "Instalasi Panel Listrik HV/LV dan Trafo Baru",
    jenis: "EAR",
    alasan: "Instalasi komponen listrik bertegangan tinggi murni masuk kategori EAR. Risiko utama ada di saat commissioning dan pengujian beban — jika terjadi flashover atau kerusakan saat energize pertama kali, nilainya bisa sangat besar.",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
  },
];

const kapanCombined = [
  "Kontrak EPC (Engineering, Procurement & Construction) yang mencakup sipil dan mekanikal dalam satu nilai kontrak",
  "Proyek pembangunan pabrik baru di mana gedung dan mesin dikerjakan oleh kontraktor yang sama",
  "Proyek perluasan fasilitas yang melibatkan penambahan bangunan sekaligus penambahan kapasitas mesin",
  "Proyek dengan batas yang tidak jelas antara pekerjaan sipil dan pemasangan mesin (misalnya pondasi khusus untuk mesin berat)",
];

const faqItems = [
  {
    q: "Apakah pekerjaan MEP (Mekanikal-Elektrikal-Plumbing) masuk CAR atau EAR?",
    a: "Tergantung konteksnya. Pekerjaan MEP sebagai bagian dari konstruksi gedung — misalnya instalasi listrik, AC split, dan plumbing standar — umumnya tercakup dalam CAR. Namun instalasi sistem besar seperti chiller sentral, trafo HV, atau mesin pendingin industri yang dilakukan sebagai pekerjaan terpisah lebih tepat menggunakan EAR.",
  },
  {
    q: "Bisakah satu proyek memiliki polis CAR dan EAR sekaligus?",
    a: "Bisa, namun lebih efisien menggunakan satu polis Combined CAR/EAR untuk proyek yang menggabungkan keduanya. Dengan Combined policy, tidak ada celah perlindungan antara fase sipil dan fase erection, dan premi biasanya lebih efisien dibanding dua polis terpisah.",
  },
  {
    q: "Apakah pemasangan struktur baja gudang masuk CAR atau EAR?",
    a: "Ini area abu-abu. Secara teknis, pemasangan struktur baja adalah proses erection — sehingga seharusnya EAR. Namun jika struktur baja adalah bagian dari pekerjaan konstruksi gedung yang lebih besar, bisa masuk CAR dengan endorsement yang tepat. Konsultasikan spesifik proyek Anda kepada kami untuk rekomendasi yang tepat.",
  },
  {
    q: "Apa perbedaan 'Mechanical Completion' dan 'Provisional Handover' dalam konteks asuransi?",
    a: "Mechanical Completion adalah titik di mana instalasi selesai secara teknis dan siap untuk commissioning — umumnya menjadi akhir periode EAR utama. Provisional Handover adalah serah terima fisik pekerjaan dari kontraktor ke owner — menjadi awal dari Maintenance Period dalam CAR. Kedua milestone ini penting untuk menentukan transisi periode perlindungan asuransi.",
  },
  {
    q: "Apakah kontraktor yang mengerjakan proyek bangunan dan sekaligus pemasangan lift harus ambil dua polis?",
    a: "Tidak harus. Combined CAR/EAR bisa mencakup keduanya dalam satu polis. Namun jika subkontraktor lift berbeda dengan kontraktor sipil utama, perlu dipastikan siapa yang bertanggung jawab atas asuransi dan bagaimana pembagian cakupannya. Kami bantu analisis struktur kontrak untuk rekomendasi yang tepat.",
  },
];

export default function ArtikelPerbedaanCARvsEAR() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }} />

        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#475569] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Perbedaan CAR dan EAR</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-engineering" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                ⚙️ Asuransi Engineering
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Perbandingan Produk</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Perbedaan CAR dan EAR —<br /><em className="not-italic text-gold">Mana yang Tepat</em><br />untuk Proyek Anda?
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              CAR dan EAR sama-sama disebut "asuransi engineering" — namun keduanya dirancang untuk risiko yang sangat berbeda. Salah pilih produk bukan hanya membuang premi, tapi bisa membuat klaim Anda ditolak.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio Mardiansyah — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 6 menit</span>
            </div>
          </div>
        </section>

        {/* Konten */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Jawaban Singkat:</strong> Gunakan <strong>CAR</strong> untuk proyek konstruksi sipil (gedung, jalan, jembatan). Gunakan <strong>EAR</strong> untuk pemasangan mesin dan instalasi industri. Gunakan <strong>Combined CAR/EAR</strong> untuk proyek EPC yang mencakup keduanya dalam satu kontrak.
            </p>
          </div>

          {/* Tabel Perbandingan */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Tabel Perbandingan Lengkap: CAR vs EAR
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Berikut perbandingan mendalam antara kedua produk dari berbagai aspek yang relevan untuk pengambilan keputusan:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[28%]">Aspek</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[36%]">🏗️ CAR</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold rounded-tr-xl w-[36%]">⚙️ EAR</th>
                </tr>
              </thead>
              <tbody>
                {tabelPerbandingan.map((row, i) => (
                  <tr key={row.aspek} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 font-semibold text-navy text-xs align-top">{row.aspek}</td>
                    <td className="p-3.5 text-[#475569] text-sm leading-relaxed align-top">{row.car}</td>
                    <td className="p-3.5 text-navy2 text-sm leading-relaxed font-medium align-top">{row.ear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5A6472] mb-10">* Rate adalah estimasi pasar. Premi aktual ditentukan underwriter berdasarkan dokumen proyek spesifik.</p>

          {/* Contoh Proyek Nyata */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Contoh Nyata: Proyek Ini Pakai CAR atau EAR?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Teori seringkali tidak sejelas praktik. Berikut contoh proyek nyata di Yogyakarta dan penjelasan mengapa menggunakan produk tertentu:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {contohProyek.map((c) => (
              <div key={c.proyek} className="bg-white rounded-card p-5 border border-black/8">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="font-heading text-navy font-bold text-sm">{c.proyek}</span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${c.badge}`}>
                        {c.jenis === "Combined CAR/EAR" ? "⚡ Combined CAR/EAR" : c.jenis === "CAR" ? "🏗️ CAR" : "⚙️ EAR"}
                      </span>
                    </div>
                    <p className="text-sm text-[#475569] leading-relaxed">{c.alasan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kapan Combined */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Kapan Menggunakan Combined CAR/EAR?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-5">
            Combined CAR/EAR adalah satu polis yang menanggung pekerjaan sipil dan erection mesin sekaligus. Ini pilihan terbaik ketika:
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {kapanCombined.map((k, i) => (
              <div key={i} className="flex gap-3 items-start bg-cream rounded-xl p-4 border border-black/5">
                <span className="text-gold font-bold flex-shrink-0">✓</span>
                <p className="text-sm text-navy2 leading-relaxed">{k}</p>
              </div>
            ))}
          </div>
          <div className="bg-navy rounded-xl p-5 text-white mb-10">
            <p className="text-sm text-white/80">
              <strong className="text-gold">💡 Keuntungan Combined CAR/EAR:</strong> Tidak ada celah perlindungan antara fase sipil dan fase erection. Satu polis, satu premi, satu certificate of insurance — lebih mudah untuk keperluan kontrak dan tender.
            </p>
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Masih bingung harus pilih yang mana?</div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              Ceritakan jenis proyek Anda kepada kami — kami analisis dan rekomendasikan produk yang paling tepat secara gratis.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Tanya Gratis via WA
              </a>
              <Link href="/asuransi-engineering" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                ⚙️ Lihat Semua Produk Engineering →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            Pertanyaan yang Sering Membingungkan
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
                { href: "/asuransi-engineering/contractor-all-risk", icon: "🏗️", judul: "Halaman Produk CAR", desc: "Cakupan lengkap, kalkulator premi, cara klaim CAR" },
                { href: "/asuransi-engineering/erection-all-risk", icon: "⚙️", judul: "Halaman Produk EAR", desc: "Cakupan EAR, kalkulator, dan FAQ commissioning" },
                { href: "/artikel/premi-asuransi-car-jogja", icon: "💰", judul: "Berapa Premi CAR Jogja?", desc: "Tabel estimasi premi dan faktor penentu rate" },
                { href: "/artikel/asuransi-kontraktor-proyek-jogja", icon: "📄", judul: "Panduan Asuransi Kontraktor", desc: "Semua jenis asuransi yang dibutuhkan kontraktor" },
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
              Konsultasikan Proyek Anda —<br />Kami Rekomendasikan yang Tepat
            </h2>
            <p className="text-white/75 text-sm max-w-[420px] mx-auto mb-8">
              Gratis, tanpa tekanan. Ceritakan jenis proyek dan kami bantu pilih antara CAR, EAR, atau Combined CAR/EAR yang paling sesuai dan efisien.
            </p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi via WhatsApp
            </a>
          </div>
        </section>

    </>
  );
}
