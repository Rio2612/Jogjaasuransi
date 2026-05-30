// app/artikel/premi-asuransi-car-jogja/page.tsx
// TARGET KEYWORD: "premi asuransi CAR Jogja", "berapa biaya asuransi contractor all risk yogyakarta"
// INTENT: Commercial Investigation — user sudah tahu butuh CAR, sekarang cari tahu berapa biayanya
// SILO: Engineering cluster → backbone link ke /contractor-all-risk + artikel kontraktor + tender DIY

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Berapa Premi Asuransi CAR di Jogja? Tabel Estimasi + Faktor Penentu | Asuransi Jogja",
  description:
    "Tabel estimasi premi Contractor All Risk (CAR) untuk berbagai skala proyek di Yogyakarta. Rate 0,15–0,5% dari nilai kontrak, faktor yang mempengaruhi harga, dan contoh perhitungan nyata proyek gedung, jalan, dan infrastruktur DIY.",
  keywords:
    "premi asuransi CAR jogja, biaya contractor all risk yogyakarta, rate CAR proyek gedung jogja, harga asuransi konstruksi DIY, kalkulator premi CAR yogyakarta, estimasi CAR proyek pemerintah jogja",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/premi-asuransi-car-jogja",
  },
  openGraph: {
    title: "Berapa Premi Asuransi CAR di Jogja? Tabel Estimasi + Faktor Penentu",
    description:
      "Tabel estimasi premi CAR untuk proyek Rp 500 juta hingga Rp 50 miliar di Yogyakarta, beserta faktor yang mempengaruhi rate dan contoh perhitungan nyata.",
    url: "https://asuransijogja.biz.id/artikel/premi-asuransi-car-jogja",
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
          name: "Berapa Premi Asuransi CAR di Jogja?",
          item: "https://asuransijogja.biz.id/artikel/premi-asuransi-car-jogja",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Berapa Premi Asuransi CAR di Jogja? Tabel Estimasi + Faktor Penentu",
      description:
        "Tabel estimasi premi Contractor All Risk untuk berbagai skala proyek di Yogyakarta, beserta faktor penentu rate dan contoh perhitungan nyata.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Konsultan Asuransi Kerugian" },
      publisher: {
        "@type": "Organization",
        name: "Asuransi Jogja",
        url: "https://asuransijogja.biz.id",
      },
      datePublished: "2025-03-20",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa premi CAR untuk proyek Rp 1 miliar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estimasi premi CAR untuk nilai kontrak Rp 1 miliar berkisar Rp 1,5 juta hingga Rp 5 juta per tahun (rate 0,15–0,5%). Rate terendah berlaku untuk proyek sipil standar dengan risiko normal di kawasan perkotaan Yogyakarta. Rate tertinggi berlaku untuk proyek di kawasan rawan bencana, pekerjaan bawah tanah, atau proyek dengan klausul perluasan (Gempa, Banjir, RSMD).",
          },
        },
        {
          "@type": "Question",
          name: "Apa yang dimaksud dengan nilai pertanggungan dalam asuransi CAR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nilai pertanggungan CAR (Sum Insured) harus mencerminkan total nilai proyek termasuk material, upah tenaga kerja, biaya overhead, dan profit kontraktor. Untuk proyek pemerintah, nilai pertanggungan minimal sama dengan nilai kontrak. Underinsurance (nilai pertanggungan lebih kecil dari nilai sebenarnya) dapat mengakibatkan klaim dibayar secara proporsional.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah premi CAR dibayar sekaligus atau bisa dicicil?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Umumnya premi CAR dibayar sekaligus di awal periode. Untuk proyek besar di atas Rp 10 miliar, beberapa perusahaan asuransi menerima pembayaran bertahap (umumnya 2 termin). Diskusikan kebutuhan ini saat konsultasi agar bisa diatur sejak awal proses underwriting.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah premi CAR bisa diklaim sebagai biaya proyek?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Premi asuransi CAR adalah biaya yang dapat dimasukkan dalam Rencana Anggaran Biaya (RAB) proyek sebagai komponen biaya tidak langsung (overhead). Dalam proyek pemerintah, biaya asuransi ini sudah diperhitungkan dalam komponen overhead yang menjadi bagian dari nilai kontrak.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana jika proyek diperpanjang? Apakah premi bertambah?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, perpanjangan masa berlaku polis CAR memerlukan pembayaran premi tambahan (additional premium) yang dihitung secara pro-rata dari sisa periode. Penting untuk segera mengajukan perpanjangan sebelum polis kedaluwarsa — jika dibiarkan lapse, proyek tidak terlindungi dan perpanjangan bisa lebih mahal atau memerlukan underwriting ulang.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

// Tabel estimasi premi per rentang nilai kontrak
const tabelEstimasi = [
  {
    nilaiKontrak: "Rp 100 – 500 juta",
    rateMin: "0,20%",
    rateMax: "0,50%",
    premiMin: "Rp 200 rb",
    premiMax: "Rp 2,5 juta",
    catatan: "Proyek kecil: renovasi, rumah tinggal, infrastruktur dasar",
    segmen: "Kecil",
    warna: "bg-cream",
  },
  {
    nilaiKontrak: "Rp 500 juta – Rp 2 miliar",
    rateMin: "0,18%",
    rateMax: "0,45%",
    premiMin: "Rp 900 rb",
    premiMax: "Rp 9 juta",
    catatan: "Ruko, gedung 2–3 lantai, jalan desa, drainase kota",
    segmen: "Menengah",
    warna: "bg-white",
  },
  {
    nilaiKontrak: "Rp 2 – 10 miliar",
    rateMin: "0,15%",
    rateMax: "0,40%",
    premiMin: "Rp 3 juta",
    premiMax: "Rp 40 juta",
    catatan: "Gedung 4–8 lantai, sekolah, puskesmas, jembatan standar",
    segmen: "Menengah-Atas",
    warna: "bg-cream",
  },
  {
    nilaiKontrak: "Rp 10 – 50 miliar",
    rateMin: "0,15%",
    rateMax: "0,35%",
    premiMin: "Rp 15 juta",
    premiMax: "Rp 175 juta",
    catatan: "Hotel, kampus, RS, infrastruktur jalan provinsi/nasional",
    segmen: "Besar",
    warna: "bg-white",
  },
  {
    nilaiKontrak: "Di atas Rp 50 miliar",
    rateMin: "Negosiasi",
    rateMax: "Negosiasi",
    premiMin: "—",
    premiMax: "—",
    catatan: "Rate ditentukan underwriter berdasarkan dokumen proyek lengkap",
    segmen: "Mega",
    warna: "bg-gold/4",
  },
];

// Faktor yang mempengaruhi rate
const faktorRate = [
  {
    faktor: "Jenis Pekerjaan",
    icon: "🏗️",
    pengaruh: "Naik / Turun Signifikan",
    warnaTag: "bg-amber-50 text-amber-700 border-amber-200",
    detail:
      "Pekerjaan sipil standar (pondasi, dinding, atap) = rate dasar. Pekerjaan bawah tanah, terowongan, atau di atas air = rate lebih tinggi. Pekerjaan finishing ringan = rate bisa lebih rendah.",
  },
  {
    faktor: "Lokasi Proyek",
    icon: "📍",
    pengaruh: "Naik hingga +30%",
    warnaTag: "bg-red-50 text-red-700 border-red-200",
    detail:
      "Proyek di kawasan rawan bencana seperti lereng Merapi (Sleman utara), pesisir selatan (Bantul, Kulon Progo), atau daerah subsidence di Kota Jogja akan mendapat loading rate dari underwriter.",
  },
  {
    faktor: "Masa Pelaksanaan",
    icon: "📅",
    pengaruh: "Proporsional dengan durasi",
    warnaTag: "bg-blue-50 text-blue-700 border-blue-200",
    detail:
      "Premi dihitung per periode (biasanya per tahun). Proyek lebih dari 12 bulan akan dikenai premi proporsional. Masa pemeliharaan biasanya sudah termasuk dalam paket, namun beberapa insurer mengenakan premi terpisah.",
  },
  {
    faktor: "Limit TPL (Section II)",
    icon: "🛡️",
    pengaruh: "Tambah Rp 500 rb – 5 juta",
    warnaTag: "bg-purple-50 text-purple-700 border-purple-200",
    detail:
      "Third Party Liability melindungi kontraktor jika ada kerusakan properti atau cedera warga sekitar proyek. Limit TPL yang lebih besar (Rp 500 juta vs Rp 2 miliar) akan meningkatkan premi secara proporsional.",
  },
  {
    faktor: "Perluasan Jaminan",
    icon: "➕",
    pengaruh: "Naik +10% hingga +50%",
    warnaTag: "bg-amber-50 text-amber-700 border-amber-200",
    detail:
      "Perluasan seperti jaminan Gempa Bumi, Banjir, RSMD (Riot, Strike, Malicious Damage), atau Waiver of Subrogation akan meningkatkan premi. Wajib dikonfirmasi apakah perluasan ini disyaratkan dalam kontrak.",
  },
  {
    faktor: "Track Record Kontraktor",
    icon: "📊",
    pengaruh: "Diskon hingga -15%",
    warnaTag: "bg-green-50 text-green-700 border-green-200",
    detail:
      "Kontraktor dengan riwayat klaim bersih atau yang sudah berlangganan polis CAR lebih dari 3 tahun di perusahaan yang sama biasanya mendapat No-Claim Discount (NCD) atau loyalty rate.",
  },
  {
    faktor: "Deductible (Risiko Sendiri)",
    icon: "⚖️",
    pengaruh: "Turun hingga -20%",
    warnaTag: "bg-green-50 text-green-700 border-green-200",
    detail:
      "Semakin besar deductible yang bersedia ditanggung sendiri oleh kontraktor, semakin rendah premi yang dibayar. Ini strategi yang baik untuk kontraktor besar dengan cash flow kuat.",
  },
  {
    faktor: "Nilai Pertanggungan vs Nilai Riil",
    icon: "🔢",
    pengaruh: "Naik jika dikoreksi naik",
    warnaTag: "bg-navy/8 text-navy border-navy/20",
    detail:
      "Underwriter akan mengevaluasi apakah nilai pertanggungan yang diajukan masuk akal. Jika terlalu rendah (underinsurance), insurer bisa meminta koreksi naik atau menolak polis.",
  },
];

// Contoh perhitungan nyata
const contohHitung = [
  {
    judul: "Pembangunan Gedung Kampus 5 Lantai di Sleman",
    nilaiKontrak: "Rp 12.000.000.000",
    durasi: "18 bulan",
    jenisKerja: "Sipil bertingkat — struktur beton, MEP standar",
    tpl: "Rp 1 miliar",
    perluasan: "Banjir & Gempa (kawasan Sleman)",
    rateApplied: "0,25% (termasuk perluasan dan TPL)",
    estimasiPremi: "Rp 30.000.000",
    catatanPremi: "Premi proporsional untuk 18 bulan (×1,5 dari rate tahunan). Sudah termasuk TPL Rp 1 M dan jaminan Gempa-Banjir. Masa pemeliharaan 12 bulan sudah termasuk.",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    badgeLabel: "🏛️ Sipil Bertingkat",
  },
  {
    judul: "Rehabilitasi Jalan Kabupaten di Kulon Progo",
    nilaiKontrak: "Rp 3.500.000.000",
    durasi: "6 bulan",
    jenisKerja: "Pekerjaan jalan — lapis pondasi, AC-WC, drainase",
    tpl: "Rp 500 juta",
    perluasan: "Tidak ada",
    rateApplied: "0,18% (risiko rendah, durasi pendek)",
    estimasiPremi: "Rp 3.150.000",
    catatanPremi: "Proyek jalan dengan durasi pendek dan risiko terbatas mendapat rate lebih rendah. Tanpa perluasan gempa/banjir karena pekerjaan di atas permukaan.",
    badge: "bg-green-50 text-green-700 border-green-100",
    badgeLabel: "🛣️ Infrastruktur Jalan",
  },
  {
    judul: "Pembangunan Hotel Boutique 4 Lantai di Kota Jogja",
    nilaiKontrak: "Rp 8.500.000.000",
    durasi: "14 bulan",
    jenisKerja: "Sipil bertingkat + MEP + finishing interior premium",
    tpl: "Rp 2 miliar",
    perluasan: "Gempa Bumi (wajib area Kota Jogja), RSMD",
    rateApplied: "0,38% (perluasan gempa + RSMD + TPL tinggi + kawasan padat)",
    estimasiPremi: "Rp 45.000.000",
    catatanPremi: "Rate lebih tinggi karena: (1) kawasan padat kota dengan risiko dampak ke pihak ketiga lebih besar, (2) perluasan gempa wajib, (3) pekerjaan MEP + finishing premium meningkatkan nilai restorasi jika terjadi klaim.",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    badgeLabel: "🏨 Hotel & Komersial",
  },
];

const komponenPromiDetail = [
  {
    komponen: "Section I — Material Damage",
    deskripsi: "Kerusakan fisik pekerjaan, material di lokasi, dan peralatan konstruksi milik kontraktor",
    wajib: true,
  },
  {
    komponen: "Section II — Third Party Liability (TPL)",
    deskripsi: "Kerusakan properti pihak ketiga atau cedera warga akibat pekerjaan konstruksi",
    wajib: true,
  },
  {
    komponen: "Perluasan: Gempa Bumi",
    deskripsi: "Kerusakan akibat gempa bumi — sangat dianjurkan untuk seluruh wilayah DIY",
    wajib: false,
  },
  {
    komponen: "Perluasan: Banjir & Genangan",
    deskripsi: "Kerusakan akibat banjir, luapan sungai, atau genangan air — relevan untuk lokasi di bantaran sungai",
    wajib: false,
  },
  {
    komponen: "Perluasan: RSMD",
    deskripsi: "Riot, Strike, Malicious Damage — kerusakan akibat kerusuhan, pemogokan, atau vandalisme",
    wajib: false,
  },
  {
    komponen: "Principal Clause",
    deskripsi: "Menambahkan nama pemilik proyek (owner) sebagai co-insured — wajib untuk proyek pemerintah",
    wajib: false,
  },
  {
    komponen: "Waiver of Subrogation",
    deskripsi: "Insurer melepas hak menuntut balik pihak lain — biasanya disyaratkan kontrak EPC",
    wajib: false,
  },
];

const faqItems = [
  {
    q: "Apakah premi CAR bisa dinegosiasi?",
    a: "Ya, sampai batas tertentu. Rate CAR ditentukan oleh underwriter berdasarkan profil risiko proyek — namun kontraktor dengan track record bersih, nilai deductible yang lebih besar, atau volume bisnis yang signifikan memiliki ruang negosiasi. Konsultan kami bernegosiasi langsung dengan underwriter atas nama klien, bukan sekadar meneruskan penawaran.",
  },
  {
    q: "Kenapa rate penawaran dari satu insurer bisa sangat berbeda dengan insurer lain?",
    a: "Setiap perusahaan asuransi memiliki appetite underwriting yang berbeda — ada yang lebih suka proyek infrastruktur, ada yang fokus ke gedung komersial. Selain itu, beberapa insurer menerapkan loading untuk lokasi tertentu (misalnya Kulon Progo bagian selatan) sementara yang lain tidak. Oleh karena itu kami selalu meminta penawaran dari beberapa insurer untuk mendapatkan kombinasi cakupan terbaik dengan premi paling kompetitif.",
  },
  {
    q: "Apakah premi CAR sudah termasuk jaminan alat berat?",
    a: "Tidak otomatis. Polis CAR standar mencakup Plant & Equipment milik kontraktor yang digunakan di lokasi proyek — namun biasanya dengan sub-limit tertentu. Untuk alat berat sewa atau dengan nilai tinggi (excavator, crane tower), disarankan menambah endorsement khusus atau polis Contractor's Plant & Equipment (CPE) terpisah.",
  },
  {
    q: "Bisakah premi CAR dikembalikan jika proyek selesai lebih awal?",
    a: "Bisa, dalam bentuk short-rate refund. Jika proyek selesai lebih awal dari periode polis, kontraktor dapat mengajukan pengembalian premi pro-rata (dikurangi biaya administrasi). Syaratnya: tidak ada klaim aktif, polis masih berlaku, dan diajukan sebelum polis berakhir.",
  },
  {
    q: "Apa perbedaan deductible per kejadian vs deductible agregat dalam polis CAR?",
    a: "Deductible per kejadian berarti setiap klaim individual dikurangi nilai deductible tersebut — misalnya deductible Rp 5 juta, dan ada 3 klaim masing-masing Rp 20 juta, maka setiap klaim dipotong Rp 5 juta. Deductible agregat membatasi total deductible dalam satu periode polis. Untuk proyek dengan banyak pekerjaan kecil, deductible agregat lebih menguntungkan kontraktor.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ArtikelPremiCAR() {
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
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Berapa Premi Asuransi CAR di Jogja?</span>
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
                href="/asuransi-engineering/contractor-all-risk"
                className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors"
              >
                🏗️ Contractor All Risk
              </Link>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/40 text-xs">Panduan Premi & Biaya</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Berapa Premi Asuransi CAR<br />
              di Jogja? —{" "}
              <em className="not-italic text-gold">Tabel Estimasi<br />
              + Faktor Penentu Rate</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px] mb-6">
              Rate CAR di Yogyakarta berkisar <strong className="text-gold2">0,15–0,5%</strong> dari nilai kontrak per
              tahun — tapi angka ini bisa berbeda signifikan tergantung jenis pekerjaan, lokasi proyek, dan perluasan
              yang diminta. Berikut panduan lengkap agar Anda bisa memperkirakan biaya sebelum konsultasi.
            </p>
            <div className="flex gap-3 text-xs text-white/40 flex-wrap">
              <span>✍️ Rio MD — Konsultan Asuransi Kerugian</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 7 menit</span>
            </div>
          </div>
        </section>

        {/* ── Konten Utama ── */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead Box */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Jawaban Cepat:</strong> Premi CAR untuk proyek{" "}
              <strong>Rp 1 miliar</strong> berkisar <strong>Rp 1,5 – 5 juta</strong>. Untuk proyek{" "}
              <strong>Rp 5 miliar</strong>, estimasinya <strong>Rp 7,5 – 25 juta</strong>. Angka
              ini adalah estimasi pasar — premi aktual ditentukan underwriter setelah mengevaluasi
              dokumen proyek spesifik Anda.
            </p>
          </div>

          {/* Disclaimer penting */}
          <div className="bg-navy/4 border border-navy/12 rounded-xl p-4 mb-10 flex gap-3">
            <span className="text-lg flex-shrink-0">📌</span>
            <p className="text-sm text-navy2 leading-relaxed">
              <strong>Catatan transparansi:</strong> Semua angka dalam artikel ini adalah{" "}
              <em>estimasi pasar berdasarkan pengalaman kami menangani proyek di Yogyakarta</em>.
              Premi resmi hanya dapat ditetapkan setelah underwriter mengevaluasi dokumen proyek
              (RAB, gambar teknis, schedule). Kami tidak menjamin angka di bawah ini berlaku untuk
              proyek Anda — gunakan sebagai acuan awal saja.
            </p>
          </div>

          {/* Tabel Estimasi Utama */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Tabel Estimasi Premi CAR Berdasarkan Nilai Kontrak
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Berikut rentang premi berdasarkan skala proyek, menggunakan rate pasar yang berlaku
            untuk jenis pekerjaan sipil standar di wilayah Yogyakarta:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[24%]">
                    Nilai Kontrak
                  </th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[14%]">
                    Rate Min
                  </th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[14%]">
                    Rate Maks
                  </th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[18%]">
                    Estimasi Premi
                  </th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold rounded-tr-xl">
                    Tipikal Proyek
                  </th>
                </tr>
              </thead>
              <tbody>
                {tabelEstimasi.map((row, i) => (
                  <tr key={i} className={row.warna}>
                    <td className="p-3.5 font-bold text-navy text-xs align-middle">{row.nilaiKontrak}</td>
                    <td className="p-3.5 text-[#64748B] text-sm align-middle">{row.rateMin}</td>
                    <td className="p-3.5 text-[#64748B] text-sm align-middle">{row.rateMax}</td>
                    <td className="p-3.5 align-middle">
                      {row.premiMin === "—" ? (
                        <span className="text-xs text-[#94A3B8] italic">Negosiasi langsung</span>
                      ) : (
                        <span className="text-navy2 font-semibold text-xs">
                          {row.premiMin} – {row.premiMax}
                        </span>
                      )}
                    </td>
                    <td className="p-3.5 text-[#64748B] text-xs align-middle leading-snug">
                      {row.catatan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#94A3B8] mb-3">
            * Estimasi untuk polis CAR tanpa perluasan Gempa/Banjir dan dengan limit TPL standar Rp 500 juta.
            Penambahan perluasan dan peningkatan limit TPL akan meningkatkan premi.
          </p>
          <p className="text-xs text-[#94A3B8] mb-10">
            ** Rate untuk proyek di atas Rp 50 miliar ditentukan case-by-case oleh underwriter.
          </p>

          {/* Komponen Polis */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Apa Saja yang Membentuk Premi CAR?
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Premi CAR bukan satu angka tunggal — melainkan akumulasi dari beberapa komponen dan
            perluasan yang dipilih. Memahami ini membantu Anda mengoptimalkan cakupan tanpa
            membayar lebih dari yang dibutuhkan:
          </p>
          <div className="flex flex-col divide-y divide-black/6 border border-black/8 rounded-card overflow-hidden mb-10">
            {komponenPromiDetail.map((k, i) => (
              <div key={i} className={`flex items-start gap-3.5 p-4 ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}>
                <div className="flex-shrink-0 mt-0.5">
                  {k.wajib ? (
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-navy text-white text-[0.6rem] font-bold">✓</span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gold/15 text-gold text-[0.65rem] font-bold border border-gold/30">+</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span className="font-semibold text-navy text-sm">{k.komponen}</span>
                    <span className={`text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full ${k.wajib ? "bg-navy/8 text-navy" : "bg-gold/12 text-amber-700"}`}>
                      {k.wajib ? "STANDAR" : "OPSIONAL"}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">{k.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Faktor Penentu Rate */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            8 Faktor yang Menentukan Rate CAR Anda
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Dua proyek dengan nilai kontrak yang sama bisa mendapat premi yang sangat berbeda.
            Ini adalah faktor-faktor yang paling berpengaruh pada rate yang ditetapkan underwriter:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {faktorRate.map((f, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-card p-4 hover:border-gold/30 transition-colors">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-xl flex-shrink-0">{f.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-heading font-bold text-navy text-sm">{f.faktor}</span>
                    </div>
                    <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${f.warnaTag}`}>
                      {f.pengaruh}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>

          {/* Contoh Perhitungan Nyata */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Contoh Perhitungan Nyata — 3 Proyek di Yogyakarta
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Berikut ilustrasi perhitungan premi berdasarkan profil proyek nyata yang pernah kami
            tangani di Yogyakarta. Nama proyek dan angka telah dibulatkan untuk kerahasiaan:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {contohHitung.map((c, i) => (
              <div key={i} className={`rounded-card p-5 border ${c.badge}`}>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${c.badge}`}>
                    {c.badgeLabel}
                  </span>
                  <span className="font-heading font-bold text-navy text-[0.95rem]">{c.judul}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Nilai Kontrak", val: c.nilaiKontrak },
                    { label: "Durasi Proyek", val: c.durasi },
                    { label: "Jenis Pekerjaan", val: c.jenisKerja },
                    { label: "Limit TPL", val: c.tpl },
                    { label: "Perluasan", val: c.perluasan },
                    { label: "Rate Applied", val: c.rateApplied },
                  ].map((item) => (
                    <div key={item.label}>
                      <span className="text-[0.65rem] text-[#94A3B8] uppercase tracking-wide font-semibold block">
                        {item.label}
                      </span>
                      <span className="text-xs text-navy2 leading-snug">{item.val}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/70 rounded-xl p-3.5 border border-black/6 flex items-start gap-3">
                  <div>
                    <div className="text-xs text-[#94A3B8] uppercase tracking-wide font-semibold mb-0.5">
                      Estimasi Premi
                    </div>
                    <div className="font-heading font-bold text-navy text-xl mb-2">{c.estimasiPremi}</div>
                    <p className="text-xs text-[#64748B] leading-relaxed">{c.catatanPremi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips hemat premi */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Tips Mengoptimalkan Biaya Premi CAR
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-5">
            Premi yang murah bukan selalu yang terbaik — tapi premi yang tepat untuk cakupan yang
            dibutuhkan adalah target yang bisa dicapai dengan strategi yang benar:
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {[
              {
                no: "1",
                judul: "Siapkan dokumen proyek selengkap mungkin sejak awal",
                detail: "Underwriter yang mendapat RAB detail, gambar teknis, dan schedule akurat akan memberikan rate lebih kompetitif dibanding proyek yang dokumennya kurang lengkap — karena risiko lebih terukur.",
              },
              {
                no: "2",
                judul: "Jangan ambil perluasan yang tidak disyaratkan kontrak",
                detail: "Gempa Bumi, RSMD, dan Waiver of Subrogation menambah premi. Cek dulu apakah klausul-klausul ini benar-benar diwajibkan dalam kontrak Anda. Jika tidak, cakupan standar sudah memadai.",
              },
              {
                no: "3",
                judul: "Pertimbangkan deductible lebih tinggi untuk proyek risiko rendah",
                detail: "Kontraktor dengan cash flow sehat dan proyek risiko rendah (finishing, renovasi ringan) bisa memilih deductible lebih besar untuk menekan premi — karena kemungkinan klaim kecil tetap ditanggung sendiri.",
              },
              {
                no: "4",
                judul: "Gunakan konsultan yang bernegosiasi langsung dengan underwriter",
                detail: "Tidak semua broker/agen memiliki akses negosiasi langsung. Kami di Asuransi Jogja bernegosiasi ke underwriter atas nama klien, bukan hanya meneruskan penawaran dari sistem.",
              },
              {
                no: "5",
                judul: "Konsolidasi proyek dalam Annual CAR jika volume tinggi",
                detail: "Kontraktor yang mengerjakan banyak proyek dalam setahun bisa mempertimbangkan Annual CAR atau Open Cover — satu polis untuk semua proyek dengan rate global yang lebih efisien.",
              },
            ].map((t) => (
              <div key={t.no} className="flex gap-3.5 bg-cream rounded-xl p-4 border border-black/5">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gold/15 border border-gold/25 flex items-center justify-center text-xs font-bold text-amber-700">
                  {t.no}
                </span>
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">{t.judul}</p>
                  <p className="text-xs text-[#64748B] leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">
              Ingin tahu estimasi premi untuk proyek Anda?
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-4">
              Ceritakan nilai kontrak, jenis pekerjaan, lokasi, dan durasi proyek Anda —
              kami siapkan estimasi premi dalam 1 hari kerja. Gratis, tanpa komitmen.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all"
              >
                💬 Minta Estimasi via WA
              </a>
              <Link
                href="/asuransi-engineering/contractor-all-risk"
                className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all"
              >
                🏗️ Halaman Produk CAR Lengkap →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            Pertanyaan Seputar Premi CAR
          </h2>
          <div className="flex flex-col divide-y divide-black/8 mb-10">
            {faqItems.map((f, i) => (
              <details key={i} className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  {f.q}
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#64748B] pb-3">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Internal Links */}
          <div className="border-t border-black/8 pt-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">
              Pelajari Lebih Lanjut
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/asuransi-engineering/contractor-all-risk",
                  icon: "🏗️",
                  judul: "Halaman Produk CAR",
                  desc: "Cakupan lengkap, cara klaim, dan syarat pengajuan polis CAR",
                },
                {
                  href: "/artikel/perbedaan-car-ear-asuransi-engineering",
                  icon: "⚙️",
                  judul: "CAR vs EAR — Apa Bedanya?",
                  desc: "Panduan memilih produk yang tepat untuk jenis proyek Anda",
                },
                {
                  href: "/artikel/syarat-asuransi-tender-pemerintah-diy",
                  icon: "📋",
                  judul: "Syarat Asuransi Tender Pemerintah DIY",
                  desc: "Semua jaminan yang dibutuhkan kontraktor dari penawaran hingga PHO",
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
                    <div className="text-xs text-[#64748B]">{a.desc}</div>
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
              Dapatkan Estimasi Premi CAR<br />
              untuk Proyek Anda — Gratis
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
              Kirim detail proyek ke kami via WhatsApp — nilai kontrak, lokasi, durasi, dan jenis
              pekerjaan. Estimasi premi siap dalam 1 hari kerja.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
              >
                💬 Minta Estimasi via WhatsApp
              </a>
              <Link
                href="/asuransi-engineering/contractor-all-risk"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                🏗️ Pelajari Produk CAR
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
