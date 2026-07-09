// app/artikel/asuransi-kargo-umkm-jogja/page.tsx
// TARGET KEYWORD: "asuransi kargo UMKM Jogja", "asuransi pengiriman barang usaha kecil Yogyakarta"
// INTENT: Informational + Commercial — pemilik toko online / UMKM yang pernah rugi karena paket rusak/hilang
// SILO: Kargo cluster → /ekspedisi-umkm, /pengiriman-barang + cross-link artikel UMKM

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kargo untuk UMKM di Jogja – Proteksi Pengiriman Barang | Asuransi Jogja",
  description:
    "Panduan lengkap asuransi kargo untuk UMKM dan toko online di Yogyakarta. Bedanya asuransi ekspedisi standar vs polis kargo khusus, estimasi premi, cara klaim, dan tips Open Cover untuk pengiriman rutin. Mulai Rp 50 ribu per pengiriman.",
  keywords:
    "asuransi kargo UMKM jogja, asuransi pengiriman barang yogyakarta, proteksi paket toko online jogja, asuransi ekspedisi UMKM DIY, open cover kargo jogja, asuransi kerajinan jogja pengiriman",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-kargo-umkm-jogja",
  },
  openGraph: {
    title: "Asuransi Kargo untuk UMKM di Jogja – Proteksi Pengiriman Barang",
    description:
      "Asuransi ekspedisi standar tidak cukup. Pelajari perbedaannya dengan polis kargo khusus UMKM, estimasi biaya, dan cara klaim yang benar.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-kargo-umkm-jogja",
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
          name: "Asuransi Kargo untuk UMKM di Jogja",
          item: "https://asuransijogja.biz.id/artikel/asuransi-kargo-umkm-jogja",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Asuransi Kargo untuk UMKM di Jogja – Proteksi Pengiriman Barang",
      description:
        "Panduan lengkap asuransi kargo untuk UMKM di Yogyakarta: perbedaan dengan asuransi ekspedisi standar, estimasi premi, Open Cover, dan cara klaim.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Praktisi Asuransi" },
      publisher: {
        "@type": "Organization",
        name: "Asuransi Jogja",
        url: "https://asuransijogja.biz.id",
      },
      datePublished: "2025-04-20",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apakah asuransi bawaan ekspedisi (JNE, J&T, Sicepat) sudah cukup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tidak selalu. Asuransi standar ekspedisi umumnya hanya menanggung kehilangan total, dengan nilai ganti rugi maksimal 10× tarif kirim atau nilai yang dideklarasikan — mana yang lebih rendah. Kerusakan parsial, cacat kemasan, atau barang basah sering kali tidak ditanggung. Untuk barang bernilai di atas Rp 500 ribu per pengiriman, polis kargo terpisah memberikan perlindungan yang jauh lebih komprehensif.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa biaya asuransi kargo untuk pengiriman Rp 1 juta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estimasi premi asuransi kargo untuk pengiriman senilai Rp 1 juta berkisar Rp 1.000–3.000 (rate 0,1–0,3%). Ini adalah biaya yang sangat terjangkau dibanding risiko kehilangan atau kerusakan penuh. Untuk pengiriman rutin, Open Cover (satu polis tahunan untuk semua pengiriman) jauh lebih efisien.",
          },
        },
        {
          "@type": "Question",
          name: "Apa itu Open Cover kargo dan apakah cocok untuk UMKM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Open Cover adalah polis kargo yang menanggung semua pengiriman selama satu periode (biasanya 1 tahun) dengan satu polis dan satu premi tahunan. Premi dihitung berdasarkan estimasi total nilai pengiriman setahun. Sangat cocok untuk UMKM yang mengirim lebih dari 10 paket per bulan — jauh lebih efisien dan mudah dikelola dibanding asuransi per pengiriman.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana cara klaim asuransi kargo jika barang rusak saat pengiriman?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Langkah klaim: (1) Jangan terima paket dalam kondisi rusak tanpa membuat catatan keberatan (nota keberatan) kepada kurir di tempat. (2) Dokumentasikan kerusakan dengan foto lengkap — kondisi luar kemasan dan isi barang. (3) Laporkan ke konsultan asuransi dalam 24–48 jam. (4) Isi formulir klaim dan lampirkan invoice, bukti pengiriman, foto kerusakan, dan nota keberatan. Proses klaim umumnya selesai dalam 5–14 hari kerja.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const perbandinganAsuransi = [
  {
    aspek: "Cakupan Risiko",
    ekspedisiStandar: "Kehilangan total saja",
    polisKhusus: "Kehilangan, kerusakan, cacat, basah, pencurian sebagian",
    unggul: true,
  },
  {
    aspek: "Nilai Ganti Rugi",
    ekspedisiStandar: "Maks. 10× tarif kirim atau nilai deklarasi (mana lebih rendah)",
    polisKhusus: "100% nilai barang sesuai invoice (dikurangi deductible)",
    unggul: true,
  },
  {
    aspek: "Proses Klaim",
    ekspedisiStandar: "Via CS ekspedisi — lambat, sering ditolak dengan alasan prosedural",
    polisKhusus: "Via konsultan yang mendampingi — lebih cepat dan adil",
    unggul: true,
  },
  {
    aspek: "Barang yang Ditanggung",
    ekspedisiStandar: "Semua barang yang dikirim via ekspedisi tersebut",
    polisKhusus: "Semua moda (darat, udara, laut) dengan satu polis",
    unggul: true,
  },
  {
    aspek: "Biaya Premi",
    ekspedisiStandar: "Gratis atau Rp 1.000–5.000 per resi",
    polisKhusus: "Rp 50–300 ribu per pengiriman / atau Open Cover tahunan",
    unggul: false,
  },
  {
    aspek: "Bukti Klaim",
    ekspedisiStandar: "Nota keberatan + resi + identitas",
    polisKhusus: "Invoice + resi + foto kerusakan + nota keberatan",
    unggul: false,
  },
  {
    aspek: "Cocok untuk Barang Nilai Tinggi",
    ekspedisiStandar: "Tidak — batas ganti rugi sangat terbatas",
    polisKhusus: "Ya — tidak ada batasan nilai per pengiriman",
    unggul: true,
  },
];

const jenisPolisKargo = [
  {
    jenis: "Per Pengiriman (Single Shipment)",
    icon: "📦",
    deskripsi:
      "Satu polis untuk satu pengiriman tertentu. Cocok untuk pengiriman nilai tinggi yang tidak rutin — furnitur, peralatan elektronik, atau kerajinan custom bernilai besar.",
    cocokUntuk: "Pengiriman < 5 kali per bulan, atau barang bernilai > Rp 5 juta per kiriman",
    estimasiPremi: "Rp 50 rb – Rp 500 rb per pengiriman",
    warna: "border-blue-200 bg-blue-50/40",
  },
  {
    jenis: "Open Cover (Tahunan)",
    icon: "📋",
    deskripsi:
      "Satu polis menanggung semua pengiriman selama setahun. Premi dihitung dari estimasi total nilai pengiriman tahunan. Lebih hemat dan tidak perlu urus asuransi per pengiriman.",
    cocokUntuk: "Pengiriman > 10 kali per bulan, atau omzet pengiriman > Rp 50 juta per tahun",
    estimasiPremi: "0,10–0,25% dari total nilai pengiriman setahun",
    warna: "border-gold/30 bg-gold/4",
    recommended: true,
  },
  {
    jenis: "Kargo Udara & Laut",
    icon: "✈️",
    deskripsi:
      "Untuk pengiriman antar pulau via udara atau laut — kerajinan ke Bali, produk kuliner ke Kalimantan, atau ekspor ke luar negeri. Menggunakan klausul ICC (Institute Cargo Clauses) internasional.",
    cocokUntuk: "Ekspor, pengiriman antar pulau via kapal/pesawat, atau barang > Rp 10 juta",
    estimasiPremi: "0,15–0,40% dari nilai barang + freight",
    warna: "border-green-200 bg-green-50/40",
  },
];

const barangBerisiko = [
  {
    kategori: "Kerajinan & Seni",
    contoh: "Batik, kerajinan perak Kotagede, wayang, gerabah Kasongan",
    risiko: "Pecah, retak, cacat permukaan, luntur warna",
    rekomendasi: "Open Cover dengan ICC(B) atau ICC(C) + perluasan kerusakan parsial",
    icon: "🎨",
  },
  {
    kategori: "Elektronik & Gadget",
    contoh: "Handphone bekas, aksesoris elektronik, spare part",
    risiko: "Rusak akibat benturan, komponen lepas, layar pecah",
    rekomendasi: "Single shipment ICC(A) all risk untuk nilai tinggi",
    icon: "📱",
  },
  {
    kategori: "Makanan & Minuman",
    contoh: "Bakpia, gudeg kaleng, kopi, oleh-oleh Jogja",
    risiko: "Hancur, bocor, tumpah, kedaluwarsa akibat keterlambatan",
    rekomendasi: "Kargo dengan klausul perishable goods + batas waktu pengiriman",
    icon: "🍱",
  },
  {
    kategori: "Fashion & Tekstil",
    contoh: "Batik, kemeja, tas kulit, sepatu",
    risiko: "Basah, kotor, kusut parah, cacat akibat tekanan",
    rekomendasi: "ICC(B) untuk perlindungan menengah, Open Cover untuk volume tinggi",
    icon: "👗",
  },
  {
    kategori: "Furnitur & Dekorasi",
    contoh: "Meja, kursi, lampu, dekorasi kayu",
    risiko: "Patah, retak, goresan, cat terkelupas",
    rekomendasi: "ICC(A) all risk dengan packing requirement ketat",
    icon: "🪑",
  },
  {
    kategori: "Mesin & Spare Part",
    contoh: "Spare part industri, peralatan bengkel, komponen elektronik",
    risiko: "Korosi, bengkok, retak, komponen hilang",
    rekomendasi: "ICC(A) + klausul rust & oxidation untuk komponen logam",
    icon: "⚙️",
  },
];

const langkahKlaim = [
  {
    no: "01",
    ikon: "🚫",
    judul: "Jangan Langsung Terima Paket Rusak",
    detail:
      "Jika paket tiba dalam kondisi rusak — kemasan penyok, basah, atau terbuka — jangan tanda tangan tanda terima tanpa membuat catatan. Minta kurir untuk mencatat kondisi paket di resi atau buat nota keberatan tertulis. Ini bukti krusial untuk klaim.",
    warna: "bg-red-50 border-red-200",
    warnaNo: "bg-red-100 text-red-700",
  },
  {
    no: "02",
    ikon: "📸",
    judul: "Dokumentasikan Kerusakan Segera",
    detail:
      "Foto kondisi luar kemasan dari semua sisi sebelum dibuka. Setelah dibuka, foto kondisi isi barang secara detail. Video pendek sangat membantu. Jangan buang kemasan rusak — bisa diminta saat survei klaim.",
    warna: "bg-amber-50 border-amber-200",
    warnaNo: "bg-amber-100 text-amber-700",
  },
  {
    no: "03",
    ikon: "📞",
    judul: "Laporkan ke Konsultan dalam 24–48 Jam",
    detail:
      "Hubungi kami via WhatsApp segera setelah menerima laporan dari pembeli atau menemukan kerusakan. Pelaporan tepat waktu adalah syarat klaim — keterlambatan melapor bisa menjadi alasan penolakan klaim.",
    warna: "bg-blue-50 border-blue-200",
    warnaNo: "bg-blue-100 text-blue-700",
  },
  {
    no: "04",
    ikon: "📄",
    judul: "Siapkan Dokumen Klaim",
    detail:
      "Dokumen yang dibutuhkan: invoice / faktur barang, bukti pengiriman (resi / airway bill), foto kerusakan, nota keberatan dari kurir, dan deskripsi kejadian. Semakin lengkap dokumen, semakin cepat proses klaim.",
    warna: "bg-purple-50 border-purple-200",
    warnaNo: "bg-purple-100 text-purple-700",
  },
  {
    no: "05",
    ikon: "✅",
    judul: "Dana Klaim Cair",
    detail:
      "Setelah dokumen lengkap dan klaim diverifikasi, dana ganti rugi ditransfer ke rekening tertanggung. Proses umumnya 5–14 hari kerja untuk klaim kargo standar. Kami pantau proses ini dan update Anda secara berkala.",
    warna: "bg-green-50 border-green-200",
    warnaNo: "bg-green-100 text-green-700",
  },
];

const kasusNyata = [
  {
    judul: "Kerajinan Perak Kotagede Rusak dalam Pengiriman ke Surabaya",
    nilai: "Rp 28 juta",
    moda: "Darat — ekspedisi reguler",
    kronologi:
      "Set perhiasan perak senilai Rp 28 juta dikirim ke pembeli di Surabaya menggunakan ekspedisi reguler. Paket tiba dalam kondisi kemasan penyok parah dan beberapa item retak. Pembeli menolak menerima.",
    asuransiEkspedisi: "Ekspedisi menawarkan ganti rugi Rp 500 ribu (10× tarif kirim) — ditolak penjual.",
    polisKhusus:
      "Penjual memiliki Open Cover kargo. Klaim diajukan dengan foto kerusakan dan invoice. Dana Rp 26,5 juta cair dalam 12 hari (dikurangi deductible Rp 1,5 juta).",
    pelajaran:
      "Selisih ganti rugi antara asuransi ekspedisi (Rp 500 ribu) vs polis kargo khusus (Rp 26,5 juta) adalah Rp 26 juta — hampir seluruh nilai barang.",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    judul: "Batik Premium Terkena Air Hujan saat Transit di Gudang Ekspedisi",
    nilai: "Rp 12 juta",
    moda: "Darat — pengiriman antar kota",
    kronologi:
      "12 lembar batik tulis premium senilai Rp 1 juta per lembar rusak karena atap gudang transit ekspedisi bocor saat hujan lebat. Batik basah dan warnanya luntur.",
    asuransiEkspedisi: "Ekspedisi menolak klaim dengan alasan 'force majeure' (hujan).",
    polisKhusus:
      "Polis kargo ICC(B) menanggung kerusakan akibat air hujan di luar kontrol pengirim. Klaim Rp 11 juta disetujui setelah survei dan foto dilampirkan.",
    pelajaran:
      "Banyak ekspedisi menolak klaim dengan alasan force majeure atau 'di luar tanggung jawab'. Polis kargo independen tidak punya konflik kepentingan seperti itu.",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
  },
];

const tipsPackaging = [
  {
    tip: "Gunakan kardus double wall untuk barang pecah belah",
    detail: "Kardus single wall tidak cukup untuk melindungi keramik, kaca, dan kerajinan rapuh. Double wall memberikan lapisan perlindungan ganda yang signifikan mengurangi kerusakan akibat benturan.",
  },
  {
    tip: "Foto kondisi barang dan kemasan sebelum diserahkan ke kurir",
    detail: "Dokumentasi sebelum pengiriman adalah bukti penting bahwa barang dalam kondisi baik saat diserahkan. Tanpa ini, ekspedisi bisa berargumen kerusakan terjadi sebelum pengiriman.",
  },
  {
    tip: "Deklarasikan nilai barang yang akurat, bukan diremehkan",
    detail: "Mendeklarasikan nilai Rp 100 ribu untuk barang Rp 5 juta agar hemat premi adalah kesalahan mahal. Ganti rugi dihitung berdasarkan nilai yang dideklarasikan — bukan nilai sebenarnya.",
  },
  {
    tip: "Gunakan bubble wrap minimal 3 lapis untuk barang elektronik",
    detail: "Standar packing elektronik: bungkus item dengan bubble wrap, masukkan dalam styrofoam, lalu dalam kardus dengan isian void fill. Packing yang kurang memadai bisa menjadi alasan penolakan klaim.",
  },
];

const faqItems = [
  {
    q: "Apakah asuransi kargo menanggung barang yang hilang akibat pencurian oleh oknum ekspedisi?",
    a: "Ya, polis kargo all risk (ICC-A atau Institute Cargo Clauses A) menanggung kehilangan barang termasuk akibat pencurian, baik pencurian total maupun sebagian. Namun ada pengecualian standar: kehilangan yang disebabkan oleh kelalaian atau ketidakjujuran pengirim sendiri tidak ditanggung. Untuk barang bernilai tinggi, tambahkan klausul theft, pilferage & non-delivery (TPND) untuk perlindungan lebih spesifik.",
  },
  {
    q: "Apakah polis kargo menanggung return pengiriman jika pembeli menolak paket?",
    a: "Tergantung klausul polis. Polis kargo standar menanggung risiko selama perjalanan dari pengirim ke penerima. Perjalanan return (dari penerima kembali ke pengirim) perlu didaftarkan sebagai pengiriman terpisah atau ada klausul return voyage dalam polis. Konfirmasikan kebutuhan ini saat mengajukan polis.",
  },
  {
    q: "Berapa minimal nilai pengiriman agar asuransi kargo 'worth it'?",
    a: "Panduan praktis kami: untuk barang di atas Rp 500 ribu per pengiriman, asuransi kargo sudah sangat worth it mengingat premi hanya sekitar Rp 500–1.500 per pengiriman. Untuk barang di bawah Rp 200 ribu, asuransi ekspedisi standar mungkin sudah cukup. Yang paling penting bukan nilai per pengiriman, tapi apakah kerugian akibat satu kerusakan atau kehilangan bisa mengganggu cash flow usaha Anda secara signifikan.",
  },
  {
    q: "Apakah UMKM yang berjualan di marketplace (Tokopedia, Shopee) bisa mengajukan asuransi kargo?",
    a: "Ya. Status penjual di marketplace tidak mempengaruhi eligibilitas untuk mengajukan polis kargo. Yang diperlukan adalah bukti transaksi (screenshot pesanan + invoice) sebagai dokumen pendukung klaim. Beberapa UMKM marketplace dengan volume pengiriman tinggi bahkan menggunakan Open Cover untuk efisiensi — kami bisa bantu setup-nya.",
  },
  {
    q: "Bagaimana jika pembeli mengklaim barang rusak tapi sebenarnya tidak?",
    a: "Ini risiko yang dihadapi semua penjual online. Polis kargo yang baik mensyaratkan dokumentasi kondisi barang sebelum dikirim (foto pre-shipment) dan nota keberatan dari penerima saat terima barang. Jika pembeli mengklaim rusak tanpa ada catatan keberatan dari kurir dan kondisi kemasan baik, klaim umumnya tidak bisa diproses. Dokumentasi pre-shipment adalah perlindungan terbaik dari klaim palsu.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ArtikelAsuransiKargoUMKMJogja() {
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
          <div className="flex items-center gap-2 text-sm text-[#475569] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Asuransi Kargo untuk UMKM di Jogja</span>
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
                href="/asuransi-kargo"
                className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors"
              >
                📦 Asuransi Kargo
              </Link>
              <Link
                href="/asuransi-kargo/ekspedisi-umkm"
                className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors"
              >
                🚚 Ekspedisi UMKM
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan Praktis</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Asuransi Kargo untuk UMKM<br />
              di Jogja —{" "}
              <em className="not-italic text-gold">Bukan Sekadar<br />
              Asuransi Bawaan Ekspedisi</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px] mb-6">
              Asuransi standar JNE, J&T, atau SiCepat hanya mengganti maksimal{" "}
              <strong className="text-gold2">10× tarif kirim</strong>. Untuk kerajinan Kotagede
              senilai Rp 5 juta, itu berarti maksimal Rp 300 ribu. Polis kargo khusus
              menanggung nilai penuh — dengan premi mulai Rp 50 ribu per pengiriman.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio MD — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 7 menit</span>
            </div>
          </div>
        </section>

        {/* ── Konten ── */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead box */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Intinya:</strong> Asuransi bawaan ekspedisi cocok
              untuk barang murah. Untuk barang di atas{" "}
              <strong>Rp 500 ribu per pengiriman</strong>, polis kargo terpisah memberikan
              perlindungan yang jauh lebih nyata. UMKM dengan pengiriman rutin lebih hemat
              menggunakan <strong>Open Cover tahunan</strong> — satu polis untuk semua pengiriman.
            </p>
          </div>

          {/* Perbandingan */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Asuransi Ekspedisi Standar vs Polis Kargo Khusus — Apa Bedanya?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Banyak UMKM mengira asuransi bawaan ekspedisi sudah cukup. Berikut perbandingan
            nyata yang sering menjadi kejutan tidak menyenangkan saat klaim:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[28%]">
                    Aspek
                  </th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[36%]">
                    📮 Asuransi Bawaan Ekspedisi
                  </th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold rounded-tr-xl w-[36%]">
                    📦 Polis Kargo Khusus
                  </th>
                </tr>
              </thead>
              <tbody>
                {perbandinganAsuransi.map((row, i) => (
                  <tr key={row.aspek} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 font-semibold text-navy text-xs align-top">{row.aspek}</td>
                    <td className="p-3.5 text-[#475569] text-sm leading-relaxed align-top">
                      {row.ekspedisiStandar}
                    </td>
                    <td className={`p-3.5 text-sm leading-relaxed align-top ${row.unggul ? "text-navy2 font-medium" : "text-[#475569]"}`}>
                      {row.unggul && <span className="text-gold mr-1.5 font-bold">✓</span>}
                      {row.polisKhusus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5A6472] mb-10">
            * Ketentuan asuransi ekspedisi bervariasi antar perusahaan dan bisa berubah. Selalu
            baca syarat dan ketentuan sebelum mengandalkan perlindungan ekspedisi.
          </p>

          {/* Jenis Polis */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            3 Jenis Polis Kargo yang Relevan untuk UMKM
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Pilihan polis disesuaikan dengan frekuensi dan skala pengiriman usaha Anda:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {jenisPolisKargo.map((p) => (
              <div key={p.jenis} className={`rounded-card p-5 border relative ${p.warna}`}>
                {p.recommended && (
                  <div className="absolute -top-3 left-5">
                    <span className="bg-gold text-navy text-[0.65rem] font-bold px-3 py-1 rounded-full shadow-sm">
                      ⭐ Paling Direkomendasikan untuk UMKM Aktif
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-4 mt-1">
                  <span className="text-2xl flex-shrink-0">{p.icon}</span>
                  <div className="flex-1">
                    <div className="font-heading font-bold text-navy text-[0.95rem] mb-1">{p.jenis}</div>
                    <p className="text-sm text-[#475569] leading-relaxed mb-3">{p.deskripsi}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-white/60 rounded-lg p-3 border border-black/6">
                        <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1">
                          Cocok untuk
                        </div>
                        <p className="text-xs text-navy2 leading-snug">{p.cocokUntuk}</p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3 border border-black/6">
                        <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1">
                          Estimasi premi
                        </div>
                        <p className="text-sm font-bold text-navy">{p.estimasiPremi}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Barang berisiko tinggi */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Produk UMKM Jogja yang Paling Perlu Perlindungan Kargo
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Setiap jenis barang memiliki risiko pengiriman yang berbeda. Berikut panduan
            per kategori produk yang umum dikirim UMKM Yogyakarta:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {barangBerisiko.map((b) => (
              <div key={b.kategori} className="bg-white border border-black/8 rounded-card p-4 hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xl">{b.icon}</span>
                  <span className="font-heading font-bold text-navy text-sm">{b.kategori}</span>
                </div>
                <p className="text-xs text-[#475569] mb-2">{b.contoh}</p>
                <div className="mb-2">
                  <span className="text-[0.6rem] font-bold uppercase tracking-wide text-red-500">
                    Risiko utama:
                  </span>
                  <p className="text-xs text-[#475569] mt-0.5">{b.risiko}</p>
                </div>
                <div className="bg-cream rounded-lg p-2.5 border border-black/5">
                  <span className="text-[0.6rem] font-bold uppercase tracking-wide text-gold">
                    Rekomendasi:
                  </span>
                  <p className="text-xs text-navy2 mt-0.5 leading-snug">{b.rekomendasi}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cara klaim */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Cara Klaim Asuransi Kargo — 5 Langkah yang Benar
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Kesalahan dalam proses klaim — terutama di langkah pertama — adalah penyebab
            terbesar klaim kargo ditolak. Ikuti langkah berikut dengan cermat:
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {langkahKlaim.map((l) => (
              <div key={l.no} className={`rounded-xl p-4 border flex gap-4 ${l.warna}`}>
                <div className="flex-shrink-0 text-center">
                  <div className={`text-xs font-bold px-2 py-1 rounded-lg mb-1 ${l.warnaNo}`}>
                    {l.no}
                  </div>
                  <div className="text-xl">{l.ikon}</div>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">{l.judul}</p>
                  <p className="text-xs text-[#475569] leading-relaxed">{l.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-navy/4 border border-navy/12 rounded-xl p-4 mb-10 flex gap-3">
            <span className="text-lg flex-shrink-0">⚠️</span>
            <p className="text-sm text-navy2 leading-relaxed">
              <strong>Penting:</strong> Jangan pernah membuang kemasan rusak sebelum proses
              klaim selesai. Loss adjuster mungkin memerlukan kemasan sebagai bukti fisik
              kondisi saat tiba.
            </p>
          </div>

          {/* Tips packaging */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Tips Packaging yang Membantu Proses Klaim
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-5">
            Packing yang baik bukan hanya mencegah kerusakan — tapi juga memperkuat posisi
            Anda saat mengajukan klaim:
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {tipsPackaging.map((t, i) => (
              <div key={i} className="flex gap-3 bg-cream rounded-xl p-4 border border-black/5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center text-xs font-bold text-amber-700 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-navy text-sm mb-0.5">{t.tip}</p>
                  <p className="text-xs text-[#475569] leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Kasus Nyata */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Kasus Nyata — Perbedaan yang Sangat Signifikan
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Dua kasus berikut menggambarkan secara konkret mengapa polis kargo terpisah
            jauh lebih baik dari asuransi bawaan ekspedisi:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {kasusNyata.map((k) => (
              <div key={k.judul} className={`rounded-card p-5 border ${k.badge}`}>
                <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                  <span className="font-heading font-bold text-navy text-sm">{k.judul}</span>
                  <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${k.badge}`}>
                    Nilai: {k.nilai}
                  </span>
                  <span className="text-[0.65rem] text-[#5A6472]">via {k.moda}</span>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">{k.kronologi}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="bg-red-50 rounded-lg p-3.5 border border-red-100">
                    <div className="text-[0.65rem] font-bold uppercase tracking-wide text-red-500 mb-1">
                      ❌ Dengan Asuransi Ekspedisi
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">{k.asuransiEkspedisi}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3.5 border border-green-100">
                    <div className="text-[0.65rem] font-bold uppercase tracking-wide text-green-600 mb-1">
                      ✅ Dengan Polis Kargo Khusus
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">{k.polisKhusus}</p>
                  </div>
                </div>
                <div className="bg-navy/4 rounded-lg p-3 border border-navy/8">
                  <p className="text-xs text-navy2 leading-relaxed">
                    <strong>💡 Pelajaran:</strong> {k.pelajaran}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">
              Kirim lebih dari 10 paket per bulan?
            </div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              Open Cover adalah solusi paling efisien untuk Anda. Ceritakan estimasi
              volume dan nilai pengiriman per bulan — kami hitung premi tahunan yang
              paling hemat. Konsultasi gratis.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all"
              >
                💬 Konsultasi Open Cover via WA
              </a>
              <Link
                href="/asuransi-kargo/ekspedisi-umkm"
                className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all"
              >
                📦 Halaman Produk Kargo UMKM →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            Pertanyaan Seputar Asuransi Kargo UMKM
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
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Internal Links */}
          <div className="border-t border-black/8 pt-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">
              Produk & Artikel Terkait
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/asuransi-kargo/ekspedisi-umkm",
                  icon: "🚚",
                  judul: "Asuransi Kargo Ekspedisi UMKM",
                  desc: "Halaman produk lengkap dengan cara daftar dan klaim",
                },
                {
                  href: "/asuransi-kargo/pengiriman-barang",
                  icon: "📦",
                  judul: "Asuransi Pengiriman Barang",
                  desc: "Untuk pengiriman skala lebih besar dan kargo komersial",
                },
                {
                  href: "/asuransi-kargo/kargo-udara-laut",
                  icon: "✈️",
                  judul: "Asuransi Kargo Udara & Laut",
                  desc: "Untuk pengiriman antar pulau dan ekspor",
                },
                {
                  href: "/artikel/asuransi-umkm-jogja",
                  icon: "🏪",
                  judul: "Panduan Asuransi UMKM Jogja",
                  desc: "Semua jenis asuransi yang dibutuhkan UMKM dari A–Z",
                },
                {
                  href: "/artikel/cara-klaim-asuransi-kargo",
                  icon: "📋",
                  judul: "Cara Klaim Asuransi Kargo",
                  desc: "Panduan lengkap klaim dari pelaporan hingga dana cair",
                },
                {
                  href: "/asuransi-properti/kebakaran",
                  icon: "🔥",
                  judul: "Asuransi Kebakaran untuk UMKM",
                  desc: "Proteksi gudang dan tempat usaha dari kebakaran",
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
                    <div className="text-xs text-[#475569]">{a.desc}</div>
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
              Jangan Biarkan Satu Pengiriman<br />
              Merusak Cash Flow Usaha Anda
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
              Polis kargo khusus UMKM mulai dari Rp 50 ribu per pengiriman.
              Open Cover tahunan untuk pengiriman rutin jauh lebih hemat.
              Konsultasi gratis — ceritakan volume pengiriman Anda.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
              >
                💬 Konsultasi via WhatsApp
              </a>
              <Link
                href="/asuransi-kargo/ekspedisi-umkm"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                📦 Lihat Produk Kargo UMKM
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
