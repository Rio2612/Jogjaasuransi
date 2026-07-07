// app/artikel/asuransi-rumah-tinggal-jogja/page.tsx
// TARGET KEYWORD: "asuransi rumah tinggal jogja", "asuransi kebakaran rumah yogyakarta"
// INTENT: Informational + Commercial — pemilik rumah yang baru sadar pentingnya proteksi hunian
// SILO: Properti cluster → /kebakaran, /banjir-gempa, /property-all-risk

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Rumah Tinggal di Jogja – Panduan Proteksi Hunian dari Kebakaran & Gempa | Asuransi Jogja",
  description:
    "Panduan lengkap asuransi rumah tinggal di Yogyakarta: jenis perlindungan, estimasi premi, cara klaim, dan mengapa perluasan gempa wajib untuk DIY. Mulai dari Rp 150 ribu per tahun untuk rumah Rp 300 juta.",
  keywords:
    "asuransi rumah tinggal jogja, asuransi kebakaran rumah yogyakarta, asuransi gempa bumi rumah DIY, proteksi hunian yogyakarta, premi asuransi rumah jogja, asuransi banjir rumah yogyakarta",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-rumah-tinggal-jogja",
  },
  openGraph: {
    title: "Asuransi Rumah Tinggal di Jogja – Panduan Proteksi Hunian",
    description:
      "Rumah di Yogyakarta berisiko gempa, banjir, dan kebakaran. Panduan memilih asuransi rumah yang tepat dengan estimasi biaya nyata.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-rumah-tinggal-jogja",
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
          "@type": "ListItem", position: 3,
          name: "Asuransi Rumah Tinggal di Jogja",
          item: "https://asuransijogja.biz.id/artikel/asuransi-rumah-tinggal-jogja",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Asuransi Rumah Tinggal di Jogja – Panduan Proteksi Hunian dari Kebakaran & Gempa",
      description: "Panduan lengkap asuransi rumah tinggal di Yogyakarta termasuk estimasi premi, jenis perlindungan, dan cara klaim.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Praktisi Asuransi" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-05-10",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa premi asuransi rumah tinggal di Yogyakarta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Premi asuransi kebakaran rumah di Yogyakarta mulai dari sekitar Rp 150–500 ribu per tahun untuk rumah dengan nilai bangunan Rp 300 juta (rate 0,05–0,15%). Dengan perluasan gempa bumi, premi naik sekitar 50–100%. Untuk rumah senilai Rp 500 juta dengan perluasan gempa dan banjir, estimasi premi Rp 500 ribu–1,5 juta per tahun.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah asuransi kebakaran rumah otomatis menanggung gempa bumi di Yogyakarta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tidak. Polis kebakaran standar tidak menanggung gempa bumi. Mengingat sejarah gempa Yogyakarta 2006 yang merusak ratusan ribu rumah, perluasan gempa bumi sangat dianjurkan untuk semua hunian di DIY. Tambahan premi untuk perluasan gempa sekitar Rp 100–300 ribu per tahun tergantung nilai rumah.",
          },
        },
        {
          "@type": "Question",
          name: "Apa yang perlu diasuransikan — bangunan atau isi rumah?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Idealnya keduanya. Bangunan (struktur, dinding, atap) diasuransikan terpisah dari isi rumah (perabot, elektronik, pakaian). Nilai pertanggungan bangunan dihitung dari biaya membangun ulang — bukan harga jual rumah. Isi rumah dihitung dari nilai barang yang ada di dalam. Keduanya bisa dimuat dalam satu polis.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const risikoPerWilayah = [
  {
    wilayah: "Kota Yogyakarta",
    risikoUtama: ["Kebakaran (kepadatan bangunan tinggi)", "Petir", "Gempa bumi (zona aktif)"],
    risikoTambahan: ["Banjir lokal (Kali Code & Winongo)", "RSMD (kawasan ramai)"],
    rekomendasiPerluasan: "Kebakaran + Gempa Bumi + Banjir (untuk lokasi dekat sungai)",
    levelRisiko: "Tinggi",
    warnaLevel: "bg-red-100 text-red-700 border-red-200",
    warna: "border-red-200 bg-red-50/30",
  },
  {
    wilayah: "Sleman",
    risikoUtama: ["Gempa bumi (dekat sesar Opak)", "Lahar hujan (lereng Merapi bagian utara)", "Kebakaran"],
    risikoTambahan: ["Banjir (Sleman tengah-selatan)", "Angin kencang"],
    rekomendasiPerluasan: "Kebakaran + Gempa + Banjir wajib. Lahar untuk lokasi < 10 km dari Merapi",
    levelRisiko: "Sangat Tinggi",
    warnaLevel: "bg-red-100 text-red-700 border-red-200",
    warna: "border-red-200 bg-red-50/40",
  },
  {
    wilayah: "Bantul",
    risikoUtama: ["Gempa bumi (episentrum 2006 di Bantul)", "Banjir (bantaran Kali Progo)", "Kebakaran"],
    risikoTambahan: ["Gelombang pasang untuk pesisir selatan", "Tanah amblas"],
    rekomendasiPerluasan: "Kebakaran + Gempa wajib. Banjir untuk lokasi < 2 km dari Progo/pantai",
    levelRisiko: "Sangat Tinggi",
    warnaLevel: "bg-red-100 text-red-700 border-red-200",
    warna: "border-amber-200 bg-amber-50/30",
  },
  {
    wilayah: "Kulon Progo",
    risikoUtama: ["Gempa bumi", "Banjir (dataran rendah)", "Kebakaran"],
    risikoTambahan: ["Gelombang pasang (pesisir selatan)", "Angin kencang"],
    rekomendasiPerluasan: "Kebakaran + Gempa. Banjir sangat dianjurkan untuk dataran rendah",
    levelRisiko: "Tinggi",
    warnaLevel: "bg-amber-100 text-amber-700 border-amber-200",
    warna: "border-blue-200 bg-blue-50/30",
  },
  {
    wilayah: "Gunung Kidul",
    risikoUtama: ["Kebakaran", "Gempa bumi", "Kekeringan (risiko kebakaran lahan)"],
    risikoTambahan: ["Tanah longsor (perbukitan)", "Petir"],
    rekomendasiPerluasan: "Kebakaran + Gempa. Risiko banjir relatif rendah kecuali lembah tertentu",
    levelRisiko: "Menengah",
    warnaLevel: "bg-blue-100 text-blue-700 border-blue-200",
    warna: "border-green-200 bg-green-50/30",
  },
];

const komponenNilaiRumah = [
  { komponen: "Bangunan (struktur utama)", deskripsi: "Pondasi, kolom, dinding, plat lantai, atap", caraHitung: "Luas bangunan × biaya konstruksi per m² (estimasi Rp 3–7 juta/m² tergantung spesifikasi)", contoh: "Rumah 100 m² × Rp 4 juta = Rp 400 juta" },
  { komponen: "Instalasi (M&E)", deskripsi: "Listrik, plumbing, AC, sistem keamanan", caraHitung: "Biasanya 15–25% dari nilai bangunan", contoh: "Rp 400 juta × 20% = Rp 80 juta" },
  { komponen: "Isi Rumah (Contents)", deskripsi: "Perabot, elektronik, pakaian, perhiasan", caraHitung: "Inventarisasi semua barang di dalam rumah", contoh: "Lemari, TV, kulkas, dll = Rp 80–200 juta tipikal" },
];

const tabelPremi = [
  { nilaiRumah: "Rp 200 juta", kebakaran: "Rp 100–300 rb", tambahGempa: "+Rp 80–200 rb", tambahBanjir: "+Rp 40–100 rb", totalLengkap: "Rp 220–600 rb/tahun" },
  { nilaiRumah: "Rp 500 juta", kebakaran: "Rp 250–750 rb", tambahGempa: "+Rp 200–500 rb", tambahBanjir: "+Rp 100–250 rb", totalLengkap: "Rp 550 rb–1,5 juta/tahun" },
  { nilaiRumah: "Rp 1 miliar", kebakaran: "Rp 500 rb–1,5 juta", tambahGempa: "+Rp 400 rb–1 juta", tambahBanjir: "+Rp 200–500 rb", totalLengkap: "Rp 1,1–3 juta/tahun" },
  { nilaiRumah: "Rp 2 miliar", kebakaran: "Rp 1–3 juta", tambahGempa: "+Rp 800 rb–2 juta", tambahBanjir: "+Rp 400 rb–1 juta", totalLengkap: "Rp 2,2–6 juta/tahun" },
];

const langkahKlaim = [
  { no: "01", ikon: "📞", judul: "Laporkan dalam 3×24 Jam", detail: "Hubungi konsultan segera setelah kejadian. Jangan bersihkan atau perbaiki kerusakan sebelum dilaporkan dan disurveii — ini sering menjadi alasan penolakan klaim.", warna: "bg-red-50 border-red-200" },
  { no: "02", ikon: "📸", judul: "Dokumentasi Kerusakan", detail: "Foto semua bagian rumah yang rusak dari berbagai sudut. Catat daftar barang yang rusak atau hilang beserta estimasi nilai. Video juga sangat membantu.", warna: "bg-amber-50 border-amber-200" },
  { no: "03", ikon: "📄", judul: "Isi Formulir & Lampirkan Dokumen", detail: "Formulir klaim, polis asli, KTP pemilik, foto kerusakan, dan estimasi biaya perbaikan dari kontraktor. Konsultan membantu kelengkapan dokumen.", warna: "bg-blue-50 border-blue-200" },
  { no: "04", ikon: "🔍", judul: "Survei oleh Loss Adjuster", detail: "Loss adjuster dari insurer akan datang ke lokasi untuk menilai kerusakan. Konsultan kami mendampingi untuk memastikan penilaian adil dan akurat.", warna: "bg-purple-50 border-purple-200" },
  { no: "05", ikon: "✅", judul: "Persetujuan & Pembayaran", detail: "Setelah klaim disetujui, dana ditransfer ke rekening tertanggung dikurangi deductible. Proses 14–30 hari kerja untuk klaim standar.", warna: "bg-green-50 border-green-200" },
];

const faqItems = [
  {
    q: "Apakah rumah KPR wajib diasuransikan?",
    a: "Secara regulasi, bank wajib mensyaratkan asuransi kebakaran untuk properti yang dijadikan agunan KPR. Umumnya premi asuransi dimasukkan dalam cicilan KPR. Namun cakupan asuransi KPR bank seringkali terbatas — hanya kebakaran standar tanpa perluasan gempa. Untuk perlindungan lebih lengkap, Anda bisa menambah polis terpisah dari kami.",
  },
  {
    q: "Bagaimana cara menghitung nilai bangunan yang tepat untuk asuransi?",
    a: "Nilai bangunan untuk asuransi adalah biaya membangun ulang (replacement cost) — bukan harga pasar atau nilai jual. Cara praktis: kalikan luas bangunan (m²) dengan estimasi biaya konstruksi per m² di lokasi Anda. Di Yogyakarta, biaya konstruksi standar berkisar Rp 3–5 juta/m² untuk rumah sederhana, dan Rp 5–10 juta/m² untuk rumah menengah ke atas. Kami bantu menghitung jika Anda tidak yakin.",
  },
  {
    q: "Apakah pagar dan taman juga bisa diasuransikan?",
    a: "Pagar permanen umumnya bisa dimasukkan dalam nilai pertanggungan bangunan. Taman, tanaman, dan elemen lanskap biasanya tidak tercakup dalam polis kebakaran standar. Untuk aset outdoor yang ingin diasuransikan, diskusikan spesifik dengan konsultan karena cakupan bervariasi antar insurer.",
  },
  {
    q: "Rumah kos atau kontrakan — bisa diasuransikan oleh pemilik?",
    a: "Ya. Pemilik rumah kos atau kontrakan bisa mengasuransikan bangunannya. Yang perlu diperhatikan: deklarasikan kepada insurer bahwa properti disewakan, karena statusnya berbeda dari rumah yang ditempati sendiri. Beberapa insurer menerapkan rate berbeda untuk properti sewa. Untuk panduan lebih lengkap mengenai properti sewa, lihat artikel kami tentang asuransi kos di Jogja.",
  },
  {
    q: "Berapa lama masa berlaku polis asuransi rumah?",
    a: "Polis asuransi rumah umumnya berlaku 1 tahun dan dapat diperpanjang. Untuk KPR jangka panjang, beberapa insurer menawarkan polis long-term (5–10 tahun) dengan premi sekaligus yang lebih hemat. Kami bantu bandingkan opsi yang paling sesuai kebutuhan dan kondisi keuangan Anda.",
  },
];

export default function ArtikelAsuransiRumahTinggalJogja() {
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
            <span className="text-navy font-semibold">Asuransi Rumah Tinggal di Jogja</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-properti" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🏠 Asuransi Properti
              </Link>
              <Link href="/asuransi-properti/kebakaran" className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors">
                🔥 Kebakaran
              </Link>
              <Link href="/asuransi-properti/banjir-gempa" className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors">
                🌊 Banjir & Gempa
              </Link>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Asuransi Rumah Tinggal<br />di Jogja —{" "}
              <em className="not-italic text-gold">Panduan Proteksi<br />Hunian yang Benar</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px] mb-6">
              Yogyakarta adalah kota dengan risiko gempa tinggi, banjir musiman, dan kepadatan bangunan yang membuat risiko kebakaran mudah merambat. Rumah Anda bisa terlindungi mulai dari{" "}
              <strong className="text-gold2">Rp 150 ribu per tahun</strong>.
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
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Yang Perlu Anda Tahu:</strong> Polis kebakaran standar <strong>tidak menanggung gempa bumi</strong>. Untuk hunian di DIY, perluasan Gempa Bumi adalah <strong>wajib</strong> — bukan opsional. Ingat Gempa 2006 yang merusak lebih dari 150.000 rumah di Bantul dan Sleman. Tambahan premi hanya Rp 80–300 ribu per tahun.
            </p>
          </div>

          {/* Mengapa penting */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Mengapa Rumah di Yogyakarta Perlu Perlindungan Lebih?
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-4">
            Yogyakarta bukan sekadar kota wisata — ini adalah salah satu kota dengan profil risiko bencana paling kompleks di Jawa. Terletak di zona pertemuan lempeng tektonik aktif, kawasan sekitar Sesar Opak membentang dari Bantul hingga Prambanan. Gempa 2006 dengan magnitudo 5,9 SR merusak lebih dari 150.000 rumah dan menewaskan lebih dari 5.700 jiwa — semua dalam 57 detik.
          </p>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Selain gempa, kepadatan bangunan di kawasan Kota Yogyakarta membuat risiko kebakaran sangat tinggi — satu percikan api di gang sempit bisa merambat ke puluhan rumah. Sementara dataran rendah Bantul dan Kulon Progo rutin mengalami banjir setiap musim hujan. Kombinasi risiko ini membuat asuransi rumah bukan sekadar pengeluaran tambahan — ini perlindungan dasar.
          </p>

          {/* Risiko per wilayah */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Profil Risiko per Wilayah di DIY
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-5">
            Rekomendasi perluasan berbeda-beda tergantung lokasi rumah Anda:
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {risikoPerWilayah.map((r) => (
              <div key={r.wilayah} className={`rounded-card p-5 border ${r.warna}`}>
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <span className="font-heading font-bold text-navy text-[0.95rem]">📍 {r.wilayah}</span>
                    <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full border ${r.warnaLevel}`}>{r.levelRisiko}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-1">Risiko utama</p>
                    <ul className="flex flex-col gap-0.5">
                      {r.risikoUtama.map((item, i) => (
                        <li key={i} className="text-xs text-navy2 flex items-center gap-1.5">
                          <span className="text-red-400 font-bold">•</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-1">Risiko tambahan</p>
                    <ul className="flex flex-col gap-0.5">
                      {r.risikoTambahan.map((item, i) => (
                        <li key={i} className="text-xs text-[#64748B] flex items-center gap-1.5">
                          <span className="text-amber-400 font-bold">•</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/60 rounded-lg p-2.5 border border-black/6">
                    <p className="text-[0.6rem] font-bold uppercase tracking-wide text-gold mb-1">Rekomendasi</p>
                    <p className="text-xs text-navy2 leading-snug">{r.rekomendasiPerluasan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cara menghitung nilai */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Cara Menentukan Nilai Pertanggungan yang Tepat
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-5">
            Kesalahan terbesar pemilik rumah adalah mengasuransikan berdasarkan harga beli atau NJOP — bukan biaya membangun ulang. Jika terjadi kerusakan total, Anda membutuhkan dana untuk membangun ulang — bukan untuk membeli tanah baru.
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {komponenNilaiRumah.map((k, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-card p-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-navy/8 flex items-center justify-center text-xs font-bold text-navy">{i + 1}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-navy text-sm mb-1">{k.komponen}</div>
                    <p className="text-xs text-[#64748B] mb-2">{k.deskripsi}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="bg-cream rounded-lg p-2.5">
                        <p className="text-[0.6rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-0.5">Cara hitung</p>
                        <p className="text-xs text-navy2">{k.caraHitung}</p>
                      </div>
                      <div className="bg-gold/8 rounded-lg p-2.5">
                        <p className="text-[0.6rem] font-bold uppercase tracking-wide text-gold mb-0.5">Contoh</p>
                        <p className="text-xs text-navy2 font-medium">{k.contoh}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-navy/4 border border-navy/12 rounded-xl p-4 mb-10 flex gap-3">
            <span className="text-lg flex-shrink-0">💡</span>
            <p className="text-sm text-navy2 leading-relaxed">
              <strong>Hindari underinsurance:</strong> Jika nilai pertanggungan lebih rendah dari nilai sebenarnya, klaim dibayar secara proporsional. Contoh: rumah Rp 500 juta diasuransikan Rp 300 juta (60%) — jika rusak Rp 200 juta, klaim yang dibayar hanya Rp 120 juta (60% dari kerugian).
            </p>
          </div>

          {/* Tabel premi */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Estimasi Premi Asuransi Rumah di Yogyakarta
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3 font-heading font-semibold text-xs rounded-tl-xl w-[20%]">Nilai Rumah</th>
                  <th className="text-left p-3 font-heading font-semibold text-xs w-[20%]">🔥 Kebakaran Saja</th>
                  <th className="text-left p-3 font-heading font-semibold text-xs w-[20%]">+ Gempa Bumi</th>
                  <th className="text-left p-3 font-heading font-semibold text-xs w-[20%]">+ Banjir</th>
                  <th className="text-left p-3 font-heading font-semibold text-xs text-gold rounded-tr-xl w-[20%]">Total Lengkap</th>
                </tr>
              </thead>
              <tbody>
                {tabelPremi.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3 font-bold text-navy text-xs">{row.nilaiRumah}</td>
                    <td className="p-3 text-[#64748B] text-xs">{row.kebakaran}</td>
                    <td className="p-3 text-[#64748B] text-xs">{row.tambahGempa}</td>
                    <td className="p-3 text-[#64748B] text-xs">{row.tambahBanjir}</td>
                    <td className="p-3 text-navy2 font-semibold text-xs">{row.totalLengkap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#94A3B8] mb-10">* Estimasi untuk bangunan konstruksi permanen kelas I–II di wilayah DIY. Rate aktual ditentukan insurer berdasarkan konstruksi, lokasi, dan riwayat klaim.</p>

          {/* Cara klaim */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Cara Klaim Asuransi Rumah — 5 Langkah
          </h2>
          <div className="flex flex-col gap-3 mb-10">
            {langkahKlaim.map((l) => (
              <div key={l.no} className={`rounded-xl p-4 border flex gap-4 ${l.warna}`}>
                <div className="flex-shrink-0 text-center min-w-[36px]">
                  <div className="text-[0.65rem] font-bold text-center mb-1 text-[#94A3B8]">{l.no}</div>
                  <div className="text-xl">{l.ikon}</div>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">{l.judul}</p>
                  <p className="text-xs text-[#64748B] leading-relaxed">{l.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Berapa premi untuk rumah Anda?</div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-4">
              Beritahu lokasi, luas, dan perkiraan nilai bangunan rumah Anda — kami hitung estimasi premi lengkap dengan rekomendasi perluasan sesuai wilayah dalam 1 hari kerja.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Minta Estimasi via WA
              </a>
              <Link href="/asuransi-properti/kebakaran" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                🔥 Produk Asuransi Kebakaran →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">Pertanyaan Seputar Asuransi Rumah di Jogja</h2>
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
                { href: "/asuransi-properti/kebakaran", icon: "🔥", judul: "Asuransi Kebakaran", desc: "Detail cakupan, estimasi premi, dan cara daftar" },
                { href: "/asuransi-properti/banjir-gempa", icon: "🌊", judul: "Asuransi Banjir & Gempa", desc: "Perluasan wajib untuk hunian di DIY" },
                { href: "/asuransi-properti/property-all-risk", icon: "🏢", judul: "Property All Risk", desc: "Perlindungan paling komprehensif untuk properti" },
                { href: "/artikel/asuransi-vila-homestay-jogja", icon: "🏡", judul: "Asuransi Vila & Homestay Jogja", desc: "Khusus properti sewa dan bisnis penginapan" },
                { href: "/artikel/asuransi-umkm-jogja", icon: "🏪", judul: "Asuransi UMKM Jogja", desc: "Jika rumah juga digunakan untuk usaha" },
                { href: "/artikel/cara-menghitung-nilai-asuransi", icon: "🔢", judul: "Cara Menghitung Nilai Asuransi", desc: "Panduan menentukan nilai pertanggungan yang tepat" },
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
              Rumah Anda Layak Terlindungi —<br />Mulai dari Rp 150 Ribu per Tahun
            </h2>
            <p className="text-white/75 text-sm max-w-[420px] mx-auto mb-8">
              Jangan tunggu sampai kebakaran atau gempa terjadi. Konsultasi gratis dengan Rio MD — kami bantu pilihkan perlindungan yang tepat untuk lokasi dan nilai rumah Anda.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
                💬 Konsultasi via WhatsApp
              </a>
              <Link href="/asuransi-properti/kebakaran" className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all">
                🔥 Lihat Produk Kebakaran
              </Link>
              <Link href="/asuransi-properti/banjir-gempa" className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all">
                🌊 Perluasan Banjir & Gempa
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
