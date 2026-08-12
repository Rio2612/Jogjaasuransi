// app/artikel/perbedaan-all-risk-tlo/page.tsx
// TARGET KEYWORD: "perbedaan all risk dan TLO", "asuransi mobil all risk vs TLO yogyakarta"
// INTENT: Informational + Commercial Investigation — calon pembeli asuransi kendaraan yang bingung memilih
// SILO: Kendaraan cluster → /mobil, /dump-truk-niaga + cross-link artikel kalkulator premi mobil

import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Perbedaan Asuransi All Risk dan TLO – Mana yang Lebih Tepat untuk Mobil Anda?",
  description:
    "Penjelasan lengkap perbedaan asuransi mobil All Risk (Comprehensive) vs TLO (Total Loss Only). Tabel perbandingan, simulasi premi untuk mobil di Yogyakarta, kapan pilih mana, dan contoh kasus klaim nyata.",
  keywords:
    "perbedaan all risk dan TLO, asuransi mobil all risk vs TLO yogyakarta, comprehensive vs TLO asuransi kendaraan, pilih all risk atau TLO jogja, premi asuransi mobil all risk yogyakarta",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/perbedaan-all-risk-tlo",
  },
  openGraph: {
    title: "Perbedaan Asuransi All Risk dan TLO – Mana yang Lebih Tepat untuk Mobil Anda?",
    description:
      "All Risk vs TLO — tabel perbandingan lengkap, simulasi premi, dan panduan memilih berdasarkan kondisi nyata pemilik mobil di Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel/perbedaan-all-risk-tlo",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og/og-kendaraan.png", width: 1200, height: 630, alt: "Perbedaan Asuransi All Risk dan TLO – Mana yang Lebih Tepat untuk Mobil Anda?" }],
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
          name: "Perbedaan All Risk dan TLO",
          item: "https://asuransijogja.biz.id/artikel/perbedaan-all-risk-tlo",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Perbedaan Asuransi All Risk dan TLO – Mana yang Lebih Tepat untuk Mobil Anda?",
      description: "Panduan lengkap perbedaan asuransi kendaraan All Risk dan TLO dengan tabel perbandingan, simulasi premi, dan panduan memilih.",
      author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Praktisi Asuransi" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-05-20",
      dateModified: "2026-08-12",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa perbedaan utama antara asuransi All Risk dan TLO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All Risk (Comprehensive) menanggung semua jenis kerusakan — dari lecet ringan, tabrakan, banjir, hingga kehilangan total. TLO (Total Loss Only) hanya menanggung jika mobil hilang dicuri atau rusak lebih dari 75% dari nilai kendaraan. Kerusakan parsial seperti penyok atau pecah kaca tidak ditanggung TLO.",
          },
        },
        {
          "@type": "Question",
          name: "Kapan sebaiknya memilih TLO dibanding All Risk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TLO lebih cocok untuk: mobil berusia di atas 8–10 tahun, mobil dengan nilai pasar di bawah Rp 150 juta, kendaraan niaga atau operasional yang risikonya tinggi dan selisih premi signifikan, atau pemilik yang hanya ingin proteksi dari kehilangan total. All Risk lebih cocok untuk mobil baru, mobil kredit (biasanya diwajibkan leasing), dan mobil yang sering digunakan di area padat.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah asuransi All Risk menanggung kerusakan akibat banjir di Yogyakarta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tidak secara standar. Banjir adalah risiko perluasan yang harus ditambahkan secara eksplisit dalam polis. Untuk kendaraan di Yogyakarta — terutama di kawasan Bantul, Kulon Progo, atau area sekitar sungai — perluasan banjir sangat dianjurkan. Tambahan premi sekitar Rp 50–200 ribu per tahun tergantung nilai kendaraan.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const tabelPerbandingan = [
  {
    aspek: "Definisi",
    allRisk: "Menanggung semua risiko kecuali yang secara eksplisit dikecualikan",
    tlo: "Hanya menanggung kehilangan total atau kerusakan ≥ 75% nilai kendaraan",
  },
  {
    aspek: "Kerusakan Kecil (lecet, penyok ringan)",
    allRisk: "✓ Ditanggung",
    tlo: "✕ Tidak ditanggung",
    highlight: true,
  },
  {
    aspek: "Kerusakan Sedang (tabrakan, kaca pecah)",
    allRisk: "✓ Ditanggung",
    tlo: "✕ Tidak ditanggung",
    highlight: true,
  },
  {
    aspek: "Kerusakan Berat (tabrak total, rusak parah)",
    allRisk: "✓ Ditanggung",
    tlo: "✓ Ditanggung (jika ≥ 75% nilai)",
  },
  {
    aspek: "Kehilangan (pencurian)",
    allRisk: "✓ Ditanggung",
    tlo: "✓ Ditanggung",
  },
  {
    aspek: "Kerusakan akibat Banjir",
    allRisk: "Perluasan — tidak otomatis",
    tlo: "✕ Tidak ditanggung (bahkan sebagai perluasan)",
  },
  {
    aspek: "Kerusakan akibat Gempa Bumi",
    allRisk: "Perluasan — tidak otomatis",
    tlo: "✕ Tidak ditanggung",
  },
  {
    aspek: "Tanggung Jawab Pihak Ketiga (TPL)",
    allRisk: "Perluasan tersedia",
    tlo: "Perluasan tersedia (terbatas)",
  },
  {
    aspek: "Estimasi Rate Premi",
    allRisk: "1,5–3,5% dari harga kendaraan/tahun",
    tlo: "0,2–0,8% dari harga kendaraan/tahun",
  },
  {
    aspek: "Cocok untuk Usia Kendaraan",
    allRisk: "0–10 tahun (optimal 0–7 tahun)",
    tlo: "> 7–10 tahun atau kendaraan niaga",
  },
  {
    aspek: "Wajib untuk KKB/Leasing?",
    allRisk: "Ya — hampir semua leasing mensyaratkan All Risk",
    tlo: "Tidak diterima leasing untuk kendaraan baru",
  },
];

const simulasiPremi = [
  {
    kendaraan: "Toyota Avanza 2023 (baru)",
    nilaiKendaraan: "Rp 230 juta",
    premiAllRisk: "Rp 3,45–8 juta",
    premiTLO: "Rp 460 rb–1,84 juta",
    rekomendasiType: "All Risk",
    alasan: "Kendaraan baru dengan nilai tinggi — kerusakan kecil sekalipun sudah signifikan. Leasing umumnya mewajibkan All Risk.",
    warna: "border-blue-200 bg-blue-50/30",
  },
  {
    kendaraan: "Honda Jazz 2018 (5 tahun)",
    nilaiKendaraan: "Rp 170 juta",
    premiAllRisk: "Rp 2,55–5,95 juta",
    premiTLO: "Rp 340 rb–1,36 juta",
    rekomendasiType: "All Risk",
    alasan: "Masih dalam rentang optimal All Risk. Mobil 5 tahun di area perkotaan Jogja yang padat — risiko baret dan tabrakan ringan masih tinggi.",
    warna: "border-blue-200 bg-blue-50/30",
  },
  {
    kendaraan: "Toyota Kijang Innova 2013 (10 tahun)",
    nilaiKendaraan: "Rp 210 juta",
    premiAllRisk: "Rp 3,15–7,35 juta",
    premiTLO: "Rp 420 rb–1,68 juta",
    rekomendasiType: "TLO atau Pertimbangkan",
    alasan: "Mobil 10 tahun — beberapa insurer All Risk sudah menolak atau rate sangat tinggi. TLO lebih ekonomis. Pertimbangkan All Risk hanya jika kondisi mobil prima dan sering diparkir di area risiko tinggi.",
    warna: "border-amber-200 bg-amber-50/30",
  },
  {
    kendaraan: "Daihatsu Gran Max Pick-Up 2019 (niaga)",
    nilaiKendaraan: "Rp 130 juta",
    premiAllRisk: "Rp 2,6–5,2 juta",
    premiTLO: "Rp 260 rb–1,04 juta",
    rekomendasiType: "TLO",
    alasan: "Kendaraan niaga/operasional dengan frekuensi penggunaan tinggi — rate All Risk sangat mahal. TLO lebih efisien: lindungi dari risiko terbesar (kehilangan) dengan premi jauh lebih terjangkau.",
    warna: "border-green-200 bg-green-50/30",
  },
];

const perluasanPenting = [
  {
    nama: "Banjir & Genangan Air",
    icon: "🌊",
    tersediaAllRisk: true,
    tersediaTLO: false,
    relevansiDIY: "Sangat Tinggi",
    warnaRelevansi: "bg-red-100 text-red-700",
    penjelasan: "Kawasan Bantul, Kulon Progo, dan area sekitar Kali Code rawan banjir musiman. Kerusakan mesin akibat mobil menerjang banjir (water hammer) bisa mencapai Rp 30–80 juta. Tambahan premi Rp 50–200 ribu/tahun.",
  },
  {
    nama: "Gempa Bumi & Letusan Gunung Api",
    icon: "🌋",
    tersediaAllRisk: true,
    tersediaTLO: false,
    relevansiDIY: "Tinggi",
    warnaRelevansi: "bg-amber-100 text-amber-700",
    penjelasan: "DIY berada di zona seismik aktif. Kerusakan kendaraan akibat gempa atau material jatuh dari bangunan dapat diklaim jika ada perluasan ini. Sangat relevan untuk kendaraan yang diparkir di area bangunan tua.",
  },
  {
    nama: "Kerusuhan & RSMD",
    icon: "⚡",
    tersediaAllRisk: true,
    tersediaTLO: false,
    relevansiDIY: "Menengah",
    warnaRelevansi: "bg-blue-100 text-blue-700",
    penjelasan: "Riot, Strike, Malicious Damage — relevan untuk kendaraan yang diparkir di area publik atau kawasan demo. Tambahan premi kecil tapi memberikan ketenangan pikiran.",
  },
  {
    nama: "Tanggung Jawab Pihak Ketiga (TPL)",
    icon: "🛡️",
    tersediaAllRisk: true,
    tersediaTLO: true,
    relevansiDIY: "Sangat Tinggi",
    warnaRelevansi: "bg-red-100 text-red-700",
    penjelasan: "Menanggung kerusakan kendaraan atau properti orang lain, dan biaya pengobatan pihak ketiga jika Anda yang bersalah dalam kecelakaan. Sangat dianjurkan — klaim TPL bisa lebih mahal dari kerusakan kendaraan Anda sendiri.",
  },
];

const kapanPilihAllRisk = [
  "Kendaraan berusia kurang dari 7–8 tahun",
  "Kendaraan kredit (KKB) — hampir semua leasing mewajibkan All Risk",
  "Mobil baru atau dengan nilai pasar di atas Rp 200 juta",
  "Sering melewati area ramai dan padat (Malioboro, Jl. Kaliurang, kawasan wisata)",
  "Parkir di tempat terbuka atau area risiko tinggi",
  "Menginginkan ketenangan pikiran untuk kerusakan sekecil apapun",
];

const kapanPilihTLO = [
  "Kendaraan berusia di atas 8–10 tahun",
  "Mobil dengan nilai pasar di bawah Rp 150 juta",
  "Kendaraan niaga / operasional dengan frekuensi penggunaan sangat tinggi",
  "Anggaran terbatas — ingin proteksi kehilangan total dengan premi minimal",
  "Kendaraan yang sudah ada baret atau kerusakan kecil di berbagai tempat",
  "Mobil cadangan yang jarang digunakan — risiko harian rendah",
];

const kasusNyata = [
  {
    kasus: "All Risk Tepat Sasaran",
    judul: "Avanza Baru Tertabrak dari Belakang di Simpang Empat Sleman",
    kronologi: "Honda Avanza 2022 ditabrak kendaraan di belakang saat berhenti di lampu merah kawasan Sleman. Kerusakan bagian belakang: bumper, lampu, dan panel body — total perbaikan Rp 18,5 juta.",
    hasilKlaim: "All Risk menanggung penuh Rp 18,5 juta dikurangi deductible Rp 300 ribu. Mobil diperbaiki di bengkel rekanan insurer dalam 5 hari kerja.",
    jikaHanyaTLO: "TLO tidak menanggung — kerusakan Rp 18,5 juta hanya 8% dari nilai kendaraan, jauh di bawah ambang 75%. Pemilik harus bayar sendiri.",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    rekType: "All Risk",
  },
  {
    kasus: "TLO Tepat Sasaran",
    judul: "Kijang 2010 Hilang Dicuri dari Parkiran Bantul",
    kronologi: "Toyota Kijang Innova 2010 dengan nilai pasar Rp 160 juta hilang dicuri dari halaman rumah pemilik di Bantul. Pelaku tidak tertangkap.",
    hasilKlaim: "TLO menanggung kehilangan total Rp 152 juta (nilai aktual dikurangi penyusutan). Premi TLO yang dibayar pemilik selama 2 tahun hanya Rp 960 ribu — jauh lebih hemat dari All Risk.",
    jikaAllRisk: "All Risk juga menanggung kehilangan. Tapi premi All Risk untuk Kijang 2010 akan jauh lebih mahal — dan pemilik mungkin tidak menggunakannya karena mobil sudah 13 tahun.",
    badge: "bg-green-50 text-green-700 border-green-100",
    rekType: "TLO",
  },
  {
    kasus: "Kesalahan Umum",
    judul: "Mobil Masuk Banjir di Bantul — Klaim TLO Ditolak",
    kronologi: "Pemilik Honda Brio 2016 menerjang banjir di kawasan Bantul. Mesin mengalami water hammer — biaya perbaikan Rp 22 juta. Pemilik memiliki TLO tanpa perluasan banjir.",
    hasilKlaim: "TLO tidak menanggung kerusakan parsial dan tidak memiliki opsi perluasan banjir. Klaim ditolak — Rp 22 juta ditanggung sendiri.",
    jikaAllRiskDenganBanjir: "All Risk + perluasan banjir: Rp 22 juta ditanggung penuh. Premi perluasan banjir hanya tambahan Rp 75–120 ribu per tahun untuk mobil senilai Rp 175 juta.",
    badge: "bg-red-50 text-red-700 border-red-100",
    rekType: "Pelajaran",
  },
];

const faqItems = [
  {
    q: "Apakah All Risk benar-benar menanggung 'semua risiko'?",
    a: "Tidak 100% — nama 'All Risk' sedikit menyesatkan. Polis All Risk menanggung semua risiko kecuali yang secara eksplisit dikecualikan dalam polis. Pengecualian standar yang perlu diperhatikan: keausan normal, kerusakan akibat pemakaian rutin, kerusakan mesin akibat oli kurang atau perawatan buruk, banjir/gempa (perlu perluasan), dan kerusakan yang disengaja. Bacalah klausul pengecualian dengan cermat sebelum polis terbit.",
  },
  {
    q: "Apakah bisa upgrade dari TLO ke All Risk di tengah periode?",
    a: "Bisa, tapi prosesnya tidak sederhana. Upgrade biasanya dilakukan saat renewal (perpanjangan). Upgrade di tengah periode memerlukan survei kondisi kendaraan, pembayaran premi pro-rata untuk selisih, dan persetujuan underwriter. Beberapa insurer tidak menerima upgrade mid-period — tergantung kebijakan masing-masing. Downgrade (All Risk ke TLO) lebih mudah.",
  },
  {
    q: "Bagaimana cara menghitung apakah All Risk 'worth it' untuk mobil saya?",
    a: "Rumus praktis: jika selisih premi All Risk dan TLO per tahun lebih kecil dari biaya satu kali perbaikan kerusakan sedang yang mungkin terjadi — All Risk worth it. Misalnya selisih premi Rp 2 juta/tahun, dan biaya perbaikan lecet/penyok sekali kira-kira Rp 3–5 juta — All Risk sudah balik modal jika terjadi satu insiden kecil per tahun. Faktor lain: seberapa sering Anda di jalanan dan seberapa padat area yang dilewati.",
  },
  {
    q: "Apakah perluasan banjir otomatis ada di All Risk?",
    a: "Tidak — ini salah kaprah yang sangat umum. Perluasan banjir, gempa, dan RSMD harus secara eksplisit diminta dan tercantum dalam polis. Saat membeli All Risk, selalu tanyakan: 'Apakah sudah termasuk perluasan banjir?' Untuk kendaraan di DIY, ini wajib ditambahkan mengingat risiko banjir di beberapa kawasan.",
  },
  {
    q: "Bagaimana jika kendaraan yang diasuransikan All Risk dijual?",
    a: "Polis bisa dipindahtangankan (cessie) ke pembeli baru dengan persetujuan insurer, atau Anda bisa meminta pengembalian premi pro-rata untuk sisa periode yang tidak terpakai. Untuk kendaraan kredit, polis biasanya atas nama leasing — proses pengalihan perlu koordinasi dengan leasing terlebih dahulu.",
  },
];

export default function ArtikelPerbedaanAllRiskTLO() {
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
            <span className="text-navy font-semibold">Perbedaan All Risk dan TLO</span>
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
              <Link href="/asuransi-kendaraan" className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors">
                🚙 Asuransi Kendaraan
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Perbandingan Produk</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Perbedaan All Risk dan TLO —<br />
              <em className="not-italic text-gold">Mana yang Lebih Tepat<br />untuk Mobil Anda?</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              All Risk dan TLO bukan soal mana yang "lebih bagus" — tapi mana yang{" "}
              <em>lebih tepat untuk kondisi kendaraan dan kebiasaan berkendara Anda</em>.
              Artikel ini membantu Anda memutuskan berdasarkan data nyata, bukan asumsi.
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

        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Jawaban Singkat:</strong>{" "}
              <strong>All Risk</strong> menanggung semua kerusakan — dari lecet ringan hingga kehilangan.{" "}
              <strong>TLO</strong> hanya menanggung kehilangan atau kerusakan ≥ 75% nilai kendaraan.
              Pilih All Risk untuk mobil baru atau kendaraan kredit. Pilih TLO untuk mobil tua (&gt;8 tahun) atau kendaraan niaga dengan anggaran terbatas.
            </p>
          </div>

          {/* Tabel utama */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Tabel Perbandingan Lengkap: All Risk vs TLO
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[34%]">Aspek</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold w-[33%]">✓ All Risk (Comprehensive)</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tr-xl w-[33%]">TLO (Total Loss Only)</th>
                </tr>
              </thead>
              <tbody>
                {tabelPerbandingan.map((row, i) => (
                  <tr key={row.aspek} className={`${i % 2 === 0 ? "bg-cream" : "bg-white"} ${row.highlight ? "border-l-2 border-gold/40" : ""}`}>
                    <td className="p-3.5 font-semibold text-navy text-xs align-top">{row.aspek}</td>
                    <td className={`p-3.5 text-sm leading-relaxed align-top ${row.allRisk.startsWith("✓") ? "text-navy2 font-medium" : "text-[#475569]"}`}>
                      {row.allRisk}
                    </td>
                    <td className={`p-3.5 text-sm leading-relaxed align-top ${row.tlo.startsWith("✓") ? "text-navy2 font-medium" : row.tlo.startsWith("✕") ? "text-red-500" : "text-[#475569]"}`}>
                      {row.tlo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5A6472] mb-10">
            * Rate premi sesuai Surat Edaran OJK tentang penetapan tarif premi asuransi kendaraan bermotor. Rate aktual tergantung wilayah, usia kendaraan, dan penggunaan.
          </p>

          {/* Simulasi premi nyata */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Simulasi Premi untuk 4 Jenis Kendaraan di Yogyakarta
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Angka konkret membantu lebih dari teori. Berikut simulasi premi berdasarkan kendaraan yang umum di Yogyakarta:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {simulasiPremi.map((s) => (
              <div key={s.kendaraan} className={`rounded-card p-5 border ${s.warna}`}>
                <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                  <div>
                    <div className="font-heading font-bold text-navy text-[0.95rem] mb-0.5">{s.kendaraan}</div>
                    <div className="text-xs text-[#5A6472]">Nilai kendaraan: {s.nilaiKendaraan}</div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ${
                    s.rekomendasiType === "All Risk" ? "bg-blue-100 text-blue-700" :
                    s.rekomendasiType === "TLO" ? "bg-green-100 text-green-700" :
                    "bg-amber-100 text-amber-700"
                  }`}>
                    → {s.rekomendasiType}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white/60 rounded-xl p-3 border border-black/6">
                    <div className="text-[0.65rem] font-bold uppercase tracking-wide text-gold mb-1">Premi All Risk / tahun</div>
                    <div className="font-heading font-bold text-navy text-sm">{s.premiAllRisk}</div>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3 border border-black/6">
                    <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1">Premi TLO / tahun</div>
                    <div className="font-heading font-bold text-navy text-sm">{s.premiTLO}</div>
                  </div>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">{s.alasan}</p>
              </div>
            ))}
          </div>

          {/* Kapan pilih mana */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Panduan Cepat: Kapan Pilih All Risk, Kapan TLO?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-blue-50/50 border border-blue-200 rounded-card p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[0.6rem] font-bold">✓</span>
                Pilih All Risk jika…
              </p>
              <ul className="flex flex-col gap-2">
                {kapanPilihAllRisk.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold text-xs flex-shrink-0 mt-0.5">→</span>
                    <span className="text-xs text-navy2 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50/50 border border-green-200 rounded-card p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-green-700 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center text-[0.6rem] font-bold">✓</span>
                Pilih TLO jika…
              </p>
              <ul className="flex flex-col gap-2">
                {kapanPilihTLO.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 font-bold text-xs flex-shrink-0 mt-0.5">→</span>
                    <span className="text-xs text-navy2 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Perluasan penting */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Perluasan yang Wajib Dipertimbangkan untuk Kendaraan di DIY
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-5">
            Baik All Risk maupun TLO memiliki pengecualian standar. Perluasan berikut sangat
            relevan untuk kondisi spesifik Yogyakarta:
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {perluasanPenting.map((p) => (
              <div key={p.nama} className="bg-white border border-black/8 rounded-card p-4 hover:border-gold/30 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{p.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                      <span className="font-heading font-bold text-navy text-sm">{p.nama}</span>
                      <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full ${p.warnaRelevansi}`}>
                        Relevansi DIY: {p.relevansiDIY}
                      </span>
                      <span className={`text-[0.6rem] px-2 py-0.5 rounded-full ${p.tersediaAllRisk ? "bg-blue-50 text-blue-600 border border-blue-200" : "bg-gray-50 text-gray-400"}`}>
                        {p.tersediaAllRisk ? "✓ All Risk" : "✕ All Risk"}
                      </span>
                      <span className={`text-[0.6rem] px-2 py-0.5 rounded-full ${p.tersediaTLO ? "bg-green-50 text-green-600 border border-green-200" : "bg-gray-50 text-gray-400"}`}>
                        {p.tersediaTLO ? "✓ TLO" : "✕ TLO"}
                      </span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">{p.penjelasan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kasus Nyata */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            3 Kasus Nyata — All Risk, TLO, dan Pelajaran dari Kesalahan
          </h2>
          <div className="flex flex-col gap-4 mb-10">
            {kasusNyata.map((k) => (
              <div key={k.judul} className={`rounded-card p-5 border ${k.badge}`}>
                <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                  <span className={`text-[0.65rem] font-bold px-2.5 py-1 rounded-full border ${k.badge}`}>
                    {k.kasus}
                  </span>
                  <span className="font-heading font-bold text-navy text-sm">{k.judul}</span>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed mb-3">{k.kronologi}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white/70 rounded-lg p-3 border border-black/6">
                    <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1">
                      ✅ Hasil Klaim
                    </div>
                    <p className="text-xs text-navy2 leading-relaxed font-medium">
                      {k.hasilKlaim || k.hasilKlaim}
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                    <div className="text-[0.65rem] font-bold uppercase tracking-wide text-amber-600 mb-1">
                      💡 {k.rekType === "Pelajaran" ? "Dengan All Risk + Banjir" : k.rekType === "All Risk" ? "Jika Hanya TLO" : "Jika All Risk"}
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {k.jikaHanyaTLO || k.jikaAllRisk || k.jikaAllRiskDenganBanjir}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">
              Masih ragu All Risk atau TLO untuk kendaraan Anda?
            </div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              Ceritakan merek, tahun, dan penggunaan kendaraan Anda — kami rekomendasikan produk yang paling tepat beserta estimasi premi. Gratis, tanpa tekanan.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Minta Rekomendasi via WA
              </a>
              <Link href="/asuransi-kendaraan/mobil" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                🚗 Halaman Produk Asuransi Mobil →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">Pertanyaan yang Sering Diajukan</h2>
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
            <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Produk & Artikel Terkait</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/asuransi-kendaraan/mobil", icon: "🚗", judul: "Asuransi Mobil", desc: "Halaman produk — cakupan, premi, cara daftar" },
                { href: "/asuransi-kendaraan/dump-truk-niaga", icon: "🚛", judul: "Asuransi Dump Truk & Niaga", desc: "TLO dan All Risk untuk kendaraan komersial" },
                { href: "/asuransi-kendaraan/armada-fleet", icon: "🚌", judul: "Asuransi Armada & Fleet", desc: "Proteksi untuk banyak kendaraan sekaligus" },
                { href: "/artikel/cara-klaim-asuransi-mobil", icon: "📋", judul: "Cara Klaim Asuransi Mobil", desc: "Panduan step-by-step dari laporan hingga klaim cair" },
                { href: "/artikel/cara-menghitung-premi-asuransi-mobil", icon: "💰", judul: "Cara Menghitung Premi Asuransi Mobil", desc: "Formula dan simulasi premi berbagai jenis kendaraan" },
                { href: "/artikel/asuransi-mobil-banjir", icon: "🌊", judul: "Asuransi Mobil dari Banjir", desc: "Khusus: perluasan banjir untuk kendaraan di DIY" },
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
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)" }} />
          <div className="relative z-10">
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
              Dapatkan Rekomendasi yang Tepat<br />untuk Kendaraan Anda di Jogja
            </h2>
            <p className="text-white/75 text-sm max-w-[420px] mx-auto mb-8">
              Ceritakan merek, tahun, dan bagaimana kendaraan Anda digunakan — kami rekomendasikan All Risk atau TLO beserta perluasan yang paling relevan untuk wilayah Anda.
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

    </>
  );
}
