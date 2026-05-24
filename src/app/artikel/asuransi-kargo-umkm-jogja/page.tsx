// app/artikel/asuransi-kargo-umkm-jogja/page.tsx
// TARGET: "asuransi kargo UMKM jogja", "asuransi pengiriman barang yogyakarta"
// INTENT: Local + Commercial — UMKM batik, kerajinan, kuliner yang sering kirim barang
// SILO: Kargo cluster → mendukung /asuransi-kargo/ dan /asuransi-kargo/ekspedisi-umkm/

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kargo untuk UMKM Jogja – Proteksi Pengiriman Batik, Kerajinan & Produk Lokal | Asuransi Jogja",
  description:
    "Panduan asuransi kargo untuk UMKM di Yogyakarta. Proteksi pengiriman produk batik, kerajinan, kuliner, dan furnitur dari risiko rusak dan hilang. Syarat, cara klaim, dan tips memilih polis kargo yang tepat.",
  keywords:
    "asuransi kargo UMKM jogja, asuransi pengiriman barang yogyakarta, asuransi kiriman batik jogja, proteksi pengiriman ekspedisi DIY, asuransi kargo ekspedisi yogyakarta, asuransi barang kiriman UMKM",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-kargo-umkm-jogja",
  },
  openGraph: {
    title: "Asuransi Kargo untuk UMKM Jogja – Proteksi Pengiriman Produk Lokal",
    description:
      "Panduan asuransi kargo untuk pelaku UMKM Yogyakarta: batik, kerajinan, kuliner, furnitur. Syarat, cara klaim, dan tips polis kargo yang tepat.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-kargo-umkm-jogja",
    type: "article",
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
        { "@type": "ListItem", position: 3, name: "Asuransi Kargo UMKM Jogja", item: "https://asuransijogja.biz.id/artikel/asuransi-kargo-umkm-jogja" },
      ],
    },
    {
      "@type": "Article",
      headline: "Asuransi Kargo untuk UMKM Jogja – Proteksi Pengiriman Batik, Kerajinan & Produk Lokal",
      description: "Panduan lengkap asuransi kargo untuk UMKM Yogyakarta yang aktif mengirim produk ke seluruh Indonesia.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Konsultan Asuransi Kerugian" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-05-01",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apakah UMKM di Yogyakarta perlu asuransi kargo?",
          acceptedAnswer: { "@type": "Answer", text: "Ya, terutama jika secara rutin mengirim produk bernilai tinggi seperti batik premium, kerajinan perak, furnitur, atau produk elektronik. Asuransi kargo menanggung risiko kerusakan dan kehilangan barang selama pengiriman yang tidak ditanggung oleh ekspedisi." },
        },
        {
          "@type": "Question",
          name: "Apakah jaminan dari ekspedisi sudah cukup?",
          acceptedAnswer: { "@type": "Answer", text: "Tidak cukup untuk barang bernilai tinggi. Ganti rugi dari ekspedisi umumnya terbatas — banyak yang hanya mengganti maksimal 10 kali ongkir atau nilai yang dideklarasikan di formulir pengiriman, bukan nilai sebenarnya barang." },
        },
        {
          "@type": "Question",
          name: "Berapa premi asuransi kargo untuk UMKM?",
          acceptedAnswer: { "@type": "Answer", text: "Premi kargo darat berkisar 0,15–0,3% dari nilai barang per pengiriman. Untuk barang senilai Rp 5 juta, premi asuransi sekitar Rp 7.500–15.000 per pengiriman. Ada juga produk open cover (polis terbuka) yang lebih efisien untuk UMKM yang sering kirim." },
        },
      ],
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const sektorUMKMJogja = [
  {
    icon: "🎭",
    sektor: "Batik & Tekstil",
    produk: "Batik tulis, batik cap, kain, dan pakaian jadi",
    risiko: "Noda, sobek, basah terkena air hujan, dan kerusakan warna akibat penanganan kasar",
    nilaiKirim: "Rp 1 juta – Rp 50 juta per pengiriman",
    urgensi: "Tinggi — batik premium sangat sensitif dan sulit diperbaiki",
  },
  {
    icon: "🥈",
    sektor: "Kerajinan Perak & Logam",
    produk: "Perhiasan perak, ornamen tembaga, kerajinan logam Kotagede",
    risiko: "Pecah, penyok, kehilangan komponen kecil, dan pencurian",
    nilaiKirim: "Rp 5 juta – Rp 100 juta per pengiriman",
    urgensi: "Sangat Tinggi — nilai per satuan tinggi, sulit diganti",
  },
  {
    icon: "🪑",
    sektor: "Furnitur & Mebel",
    produk: "Kursi, meja, lemari, dan dekorasi kayu dari pengrajin Klaten/Jepara",
    risiko: "Goresan, retak, pecah, dan kerusakan finishing selama transit",
    nilaiKirim: "Rp 2 juta – Rp 200 juta per pengiriman",
    urgensi: "Tinggi — kerusakan permukaan sulit diperbaiki dan menurunkan nilai jual",
  },
  {
    icon: "🎨",
    sektor: "Lukisan & Kerajinan Seni",
    produk: "Lukisan kanvas, patung, gerabah Kasongan, dan kerajinan bambu",
    risiko: "Retak, robek, remuk, dan kerusakan permanen yang tidak bisa diperbaiki",
    nilaiKirim: "Rp 500 ribu – Rp 50 juta per karya",
    urgensi: "Sangat Tinggi — karya seni unik tidak bisa diganti dengan yang identik",
  },
  {
    icon: "🍫",
    sektor: "Makanan & Oleh-oleh Premium",
    produk: "Cokelat Monggo, bakpia premium, dan oleh-oleh khas Jogja",
    risiko: "Meleleh karena suhu, remuk, basi, dan kerusakan kemasan",
    nilaiKirim: "Rp 200 ribu – Rp 5 juta per pengiriman",
    urgensi: "Sedang — volume tinggi tapi nilai per pengiriman lebih kecil",
  },
  {
    icon: "💻",
    sektor: "Elektronik & Gadget Bekas",
    produk: "Laptop refurbished, HP, kamera, dan peralatan elektronik dari toko online Jogja",
    risiko: "Kerusakan akibat benturan, konslet karena basah, dan kehilangan",
    nilaiKirim: "Rp 1 juta – Rp 20 juta per pengiriman",
    urgensi: "Tinggi — klaim sering terjadi, ekspedisi membatasi tanggung jawab",
  },
];

const batasGantiEkspedisi = [
  {
    ekspedisi: "Ekspedisi Umum (tanpa asuransi tambahan)",
    batas: "Maksimal 10× ongkos kirim",
    contoh: "Ongkir Rp 50.000 → ganti rugi maks Rp 500.000",
    catatan: "Jauh di bawah nilai barang sesungguhnya untuk produk bernilai tinggi",
  },
  {
    ekspedisi: "Asuransi dari ekspedisi (jika ada)",
    batas: "Biasanya 0,2–0,3% dari nilai deklarasi",
    contoh: "Barang Rp 5 juta → premi Rp 10.000–15.000",
    catatan: "Nilai deklarasi harus diisi manual saat pengiriman, sering dilupakan",
  },
  {
    ekspedisi: "Asuransi Kargo Independen (polis dari konsultan)",
    batas: "Penuh sesuai nilai barang yang diasuransikan",
    contoh: "Barang Rp 5 juta → ganti rugi hingga Rp 5 juta",
    catatan: "Lebih komprehensif, klaim lebih mudah diproses dengan bantuan konsultan",
  },
];

const jenisPolisKargo = [
  {
    jenis: "Per Pengiriman (Voyage Policy)",
    cocokUntuk: "UMKM yang pengirimannya tidak rutin atau volume kiriman tidak menentu",
    cara: "Setiap pengiriman dibuatkan sertifikat asuransi tersendiri dengan nilai dan tujuan yang spesifik",
    kelebihan: "Fleksibel, hanya bayar premi saat ada pengiriman",
    kekurangan: "Proses per pengiriman, kurang efisien untuk volume tinggi",
  },
  {
    jenis: "Open Cover (Polis Terbuka)",
    cocokUntuk: "UMKM yang mengirim rutin dengan volume tinggi — paling direkomendasikan untuk toko online aktif",
    cara: "Satu polis menanggung semua pengiriman dalam periode tertentu (biasanya 1 tahun) hingga batas nilai tertentu",
    kelebihan: "Efisien, tidak perlu proses per pengiriman, premi lebih hemat",
    kekurangan: "Perlu pencatatan pengiriman yang tertib untuk keperluan klaim",
  },
  {
    jenis: "Annual Cargo (Polis Tahunan)",
    cocokUntuk: "Bisnis dengan volume pengiriman sangat besar dan rutin — biasanya distributor atau eksportir",
    cara: "Premi dihitung berdasarkan estimasi total nilai pengiriman per tahun",
    kelebihan: "Paling efisien untuk volume besar, administrasi paling sederhana",
    kekurangan: "Perlu estimasi volume tahunan yang akurat di awal",
  },
];

const cakupanKargo = [
  { icon: "✅", risiko: "Kerusakan fisik barang selama transit", catatan: "Retak, pecah, penyok, robek akibat penanganan pengiriman" },
  { icon: "✅", risiko: "Kehilangan barang (theft)", catatan: "Barang hilang selama dalam proses pengiriman" },
  { icon: "✅", risiko: "Kecelakaan kendaraan pengantar", catatan: "Kerusakan akibat kecelakaan truk, motor kurir, atau kendaraan pengangkut" },
  { icon: "✅", risiko: "Kebakaran selama transit", catatan: "Barang terbakar saat ada insiden kebakaran di gudang transit atau kendaraan" },
  { icon: "✅", risiko: "Bencana alam selama transit", catatan: "Banjir, longsor, atau bencana lain yang merusak kiriman" },
  { icon: "❌", risiko: "Kerusakan akibat pengemasan yang buruk", catatan: "Jika barang tidak dikemas dengan standar yang memadai, klaim bisa ditolak" },
  { icon: "❌", risiko: "Kerusakan karena sifat alami barang", catatan: "Makanan yang basi karena perjalanan lama, bukan karena insiden" },
  { icon: "❌", risiko: "Keterlambatan pengiriman", catatan: "Asuransi kargo tidak menanggung kerugian akibat keterlambatan" },
];

const syaratKlaim = [
  {
    syarat: "Laporkan segera setelah menerima barang",
    detail: "Saat barang diterima dalam kondisi rusak, jangan tanda tangani tanda terima tanpa catatan. Tulis 'diterima dengan kondisi rusak' dan foto kondisi barang sebelum membuka kemasan.",
  },
  {
    syarat: "Dokumentasikan kondisi kerusakan secara lengkap",
    detail: "Foto dari berbagai sudut — kondisi luar kemasan, kondisi dalam kemasan, dan kondisi barang yang rusak. Video lebih baik. Simpan kemasan asli karena bisa diminta loss adjuster.",
  },
  {
    syarat: "Simpan semua bukti pengiriman",
    detail: "Resi pengiriman, invoice, daftar isi kiriman, dan sertifikat asuransi kargo. Dokumen-dokumen ini diperlukan saat mengajukan klaim.",
  },
  {
    syarat: "Hubungi konsultan untuk panduan klaim",
    detail: "Hubungi kami segera setelah kerusakan diketahui. Kami bantu menjelaskan prosedur, dokumen yang dibutuhkan, dan cara berkomunikasi dengan perusahaan asuransi agar klaim berjalan lancar.",
  },
  {
    syarat: "Isi formulir klaim dengan lengkap",
    detail: "Formulir klaim berisi deskripsi kejadian, nilai kerugian, dan permintaan ganti rugi. Isi dengan teliti dan jujur — ketidakakuratan bisa menjadi alasan klaim ditolak.",
  },
];

const faqItems = [
  {
    q: "Apakah pengiriman via marketplace (Tokopedia, Shopee) bisa diasuransikan dengan polis kargo independen?",
    a: "Bisa, terutama untuk pengiriman bernilai tinggi yang dilakukan di luar platform marketplace. Untuk pengiriman dalam platform, biasanya sudah ada proteksi bawaan dari marketplace, namun nilainya terbatas. Untuk produk premium, polis kargo independen memberikan perlindungan yang lebih komprehensif.",
  },
  {
    q: "Bagaimana cara mengklaim jika barang rusak saat diterima pembeli?",
    a: "Situasi ini perlu dikomunikasikan terlebih dahulu dengan pembeli — minta pembeli mendokumentasikan kondisi barang saat diterima (foto/video) dan tidak membuang kemasan. Selanjutnya hubungi kami untuk panduan langkah klaim. Prosedur pastinya bergantung pada polis yang berlaku.",
  },
  {
    q: "Apakah ada minimal nilai pengiriman untuk bisa diasuransikan?",
    a: "Secara teknis tidak ada nilai minimum yang baku, namun secara ekonomis asuransi kargo paling efektif untuk pengiriman bernilai di atas Rp 1–2 juta. Untuk pengiriman rutin dengan nilai kecil, produk open cover lebih efisien dari pada mengasuransikan per pengiriman.",
  },
  {
    q: "Apakah asuransi kargo menanggung seluruh nilai barang atau hanya sebagian?",
    a: "Jika nilai pertanggungan ditetapkan dengan benar sesuai nilai barang, klaim akan dibayar penuh (dikurangi deductible jika ada). Pastikan nilai yang diasuransikan mencakup harga pokok produksi ditambah keuntungan yang wajar, bukan sekadar harga beli bahan baku.",
  },
  {
    q: "Bagaimana dengan pengiriman antar pulau — apakah ada produk khususnya?",
    a: "Ada. Untuk pengiriman antar pulau yang menggunakan jalur laut, ada produk Marine Cargo Insurance yang dirancang untuk risiko perjalanan laut termasuk kerusakan akibat air laut, penumpukan di pelabuhan, dan risiko perjalanan yang lebih panjang. Konsultasikan rute pengiriman spesifik Anda.",
  },
  {
    q: "Apa yang dimaksud dengan 'pengemasan yang memadai' sebagai syarat klaim kargo?",
    a: "Standar pengemasan yang memadai berarti barang dikemas dengan material yang sesuai untuk melindungi dari risiko yang wajar selama pengiriman. Misalnya: bubble wrap untuk barang pecah belah, kardus double wall untuk barang berat, plastik waterproof untuk barang sensitif air. Pengemasan yang jelas-jelas tidak memadai bisa menjadi alasan klaim ditolak.",
  },
];

export default function ArtikelAsuransiKargoUMKMJogja() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <div className="pt-[68px]">

        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Asuransi Kargo UMKM Jogja</span>
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
              <Link href="/asuransi-kargo/ekspedisi-umkm" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🛵 Ekspedisi UMKM
              </Link>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/40 text-xs">Panduan UMKM Jogja</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Asuransi Kargo untuk UMKM Jogja —<br /><em className="not-italic text-gold">Proteksi Pengiriman</em><br />Batik, Kerajinan & Produk Lokal
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Yogyakarta adalah pusat UMKM kreatif terbesar di Indonesia. Setiap hari, ribuan paket batik, kerajinan perak, dan produk lokal dikirim ke seluruh negeri. Tapi berapa banyak yang benar-benar terlindungi jika terjadi kerusakan atau kehilangan di jalan?
            </p>
            <div className="flex gap-3 text-xs text-white/40 flex-wrap">
              <span>✍️ Rio MD — Konsultan Asuransi Kerugian</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 8 menit</span>
            </div>
          </div>
        </section>

        {/* Konten */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Ringkasan */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Yang perlu dipahami:</strong> Ganti rugi dari ekspedisi umumnya sangat terbatas — banyak hanya menanggung maksimal 10× ongkos kirim. Untuk produk UMKM Yogyakarta yang bernilai tinggi seperti batik premium atau kerajinan perak, ini jauh dari cukup. Asuransi kargo independen menanggung <strong>nilai penuh barang</strong> sesuai yang diasuransikan.
            </p>
          </div>

          {/* Realita Ganti Rugi Ekspedisi */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Kenapa Jaminan Ekspedisi Saja Tidak Cukup?
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Banyak pelaku UMKM merasa aman karena menganggap ekspedisi bertanggung jawab penuh atas kiriman. Faktanya, tanggung jawab ekspedisi sangat terbatas secara regulasi:
          </p>
          <div className="flex flex-col gap-4 mb-8">
            {batasGantiEkspedisi.map((b, i) => (
              <div key={i} className={`rounded-card p-5 border ${i === 2 ? "bg-white border-gold/20" : "bg-cream border-black/6"}`}>
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                  <span className="font-heading text-navy font-bold text-sm">{b.ekspedisi}</span>
                  {i === 2 && <span className="bg-gold/15 text-gold text-xs font-bold px-2.5 py-1 rounded-full">Direkomendasikan</span>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  <div>
                    <div className="text-xs text-[#64748B] mb-0.5">Batas ganti rugi:</div>
                    <div className="font-semibold text-navy text-sm">{b.batas}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B] mb-0.5">Contoh:</div>
                    <div className="text-sm text-[#64748B]">{b.contoh}</div>
                  </div>
                </div>
                <div className={`mt-3 text-xs leading-relaxed ${i === 2 ? "text-gold" : "text-[#64748B]"}`}>
                  ℹ️ {b.catatan}
                </div>
              </div>
            ))}
          </div>

          {/* Sektor UMKM */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Sektor UMKM Jogja yang Paling Perlu Asuransi Kargo
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Tidak semua pengiriman memiliki urgensi yang sama. Berikut analisis per sektor UMKM di Yogyakarta:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {sektorUMKMJogja.map((s) => (
              <div key={s.sektor} className="bg-white rounded-card p-5 border border-black/8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{s.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                      <span className="font-heading text-navy font-bold text-base">{s.sektor}</span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        s.urgensi.includes("Sangat") ? "bg-red-50 text-red-700 border border-red-100" :
                        s.urgensi.includes("Tinggi") ? "bg-amber-50 text-amber-700 border border-amber-100" :
                        "bg-blue-50 text-blue-700 border border-blue-100"
                      }`}>
                        ⚡ Urgensi: {s.urgensi}
                      </span>
                    </div>
                    <div className="text-xs text-[#64748B] mb-2">Produk: <span className="text-navy font-medium">{s.produk}</span></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      <div className="bg-red-50/50 rounded-lg p-3">
                        <div className="text-xs font-semibold text-red-700 mb-1">⚠️ Risiko Utama</div>
                        <div className="text-xs text-[#64748B] leading-relaxed">{s.risiko}</div>
                      </div>
                      <div className="bg-cream rounded-lg p-3">
                        <div className="text-xs font-semibold text-navy mb-1">💰 Nilai Kirim Tipikal</div>
                        <div className="text-xs text-[#64748B] leading-relaxed">{s.nilaiKirim}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Jenis Polis */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Jenis Polis Kargo: Mana yang Cocok untuk UMKM?
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Ada tiga jenis polis kargo yang umumnya tersedia. Pilihannya bergantung pada frekuensi dan volume pengiriman UMKM Anda:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {jenisPolisKargo.map((j, i) => (
              <div key={j.jenis} className={`rounded-card p-6 border ${i === 1 ? "bg-white border-gold/20" : "bg-cream border-black/6"}`}>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="font-heading text-navy font-bold text-base">{j.jenis}</span>
                  {i === 1 && <span className="bg-gold/15 text-gold text-xs font-bold px-2.5 py-1 rounded-full">Paling populer untuk UMKM aktif</span>}
                </div>
                <div className="text-xs text-gold font-semibold mb-2">✓ Cocok untuk: {j.cocokUntuk}</div>
                <p className="text-sm text-[#64748B] leading-relaxed mb-3">{j.cara}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-green-700 mb-1">✓ Kelebihan</div>
                    <div className="text-xs text-[#64748B]">{j.kelebihan}</div>
                  </div>
                  <div className="bg-red-50/50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-red-600 mb-1">✗ Kekurangan</div>
                    <div className="text-xs text-[#64748B]">{j.kekurangan}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cakupan Polis */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Apa yang Ditanggung dan Tidak Ditanggung Asuransi Kargo
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Memahami batas cakupan sama pentingnya dengan memahami manfaatnya. Berikut panduan umum — detail spesifik selalu mengacu pada polis masing-masing:
          </p>
          <div className="flex flex-col gap-2.5 mb-10">
            {cakupanKargo.map((c, i) => (
              <div key={i} className={`flex gap-3 items-start rounded-xl p-4 border ${c.icon === "✅" ? "bg-green-50/50 border-green-100" : "bg-red-50/40 border-red-100"}`}>
                <span className="text-lg flex-shrink-0 mt-0.5">{c.icon}</span>
                <div>
                  <div className="font-semibold text-navy text-sm">{c.risiko}</div>
                  <div className="text-xs text-[#64748B] mt-0.5">{c.catatan}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Syarat Klaim */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Syarat dan Cara Agar Klaim Kargo Berjalan Lancar
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Klaim kargo yang ditolak hampir selalu disebabkan oleh hal-hal yang sebenarnya bisa diantisipasi sejak awal. Berikut panduan dari kami sebagai konsultan:
          </p>
          <div className="flex flex-col gap-4 mb-6">
            {syaratKlaim.map((s, i) => (
              <div key={i} className="bg-cream rounded-card p-5 border border-black/6 grid grid-cols-[auto_1fr] gap-4">
                <div className="bg-navy text-gold font-heading font-bold text-xs w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</div>
                <div>
                  <div className="font-heading text-navy font-bold text-sm mb-1">{s.syarat}</div>
                  <p className="text-sm text-[#64748B] leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-navy rounded-xl p-5 text-white mb-10">
            <p className="text-sm text-white/80">
              <strong className="text-gold">💡 Catatan dari Konsultan:</strong> Sebagai konsultan asuransi independen, kami bisa membantu menjelaskan prosedur klaim, dokumen yang perlu disiapkan, dan cara berkomunikasi yang tepat dengan perusahaan asuransi. Kami tidak menggantikan proses formal klaim, namun bisa memastikan Anda memahami prosesnya dengan benar.
            </p>
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Mau Konsultasi Polis Kargo untuk UMKM Anda?</div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-4">
              Ceritakan jenis produk, frekuensi pengiriman, dan tujuan utama pengiriman. Kami bantu rekomendasikan jenis polis yang paling efisien.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Konsultasi Kargo via WhatsApp
              </a>
              <Link href="/asuransi-kargo/ekspedisi-umkm" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                📦 Lihat Produk Kargo UMKM →
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
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#64748B] pb-3">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Internal Links */}
          <div className="border-t border-black/8 pt-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">Baca Juga</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/asuransi-kargo", icon: "📦", judul: "Semua Produk Asuransi Kargo", desc: "Kargo darat, udara, dan marine cargo" },
                { href: "/asuransi-kargo/ekspedisi-umkm", icon: "🛵", judul: "Kargo Ekspedisi untuk UMKM", desc: "Proteksi pengiriman via kurir dan ekspedisi" },
                { href: "/asuransi-kargo/pengiriman-barang", icon: "🚛", judul: "Asuransi Pengiriman Barang", desc: "Kargo darat untuk pengiriman antar kota" },
                { href: "/artikel/asuransi-umkm-jogja", icon: "🏪", judul: "Panduan Asuransi UMKM Jogja", desc: "Semua jenis asuransi yang dibutuhkan UMKM" },
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
              Produk UMKM Anda Layak<br />Mendapat Perlindungan yang Setara Nilainya
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
              Konsultasi gratis — ceritakan jenis produk dan pola pengiriman Anda. Kami bantu temukan polis kargo yang paling efisien untuk UMKM Yogyakarta Anda.
            </p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi Asuransi Kargo via WhatsApp
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
