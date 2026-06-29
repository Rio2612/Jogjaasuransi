// app/artikel/asuransi-vila-homestay-jogja/page.tsx
// TARGET KEYWORD: "asuransi vila jogja", "asuransi homestay yogyakarta", "asuransi hotel jogja"
// INTENT: Commercial Investigation — pemilik properti penginapan dari skala kos hingga hotel butik
// SILO: Properti cluster → /vila-homestay, /hotel-vila, /kebakaran + cross-link Liability
// CATATAN: Halaman ini menggantikan /asuransi-properti/vila-homestay dan /asuransi-properti/hotel-vila
//          sebagai satu artikel definitif. Kedua halaman produk tersebut link ke sini sebagai panduan lengkap.

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Vila, Homestay & Hotel di Jogja – Panduan Lengkap Pemilik Properti Penginapan | Asuransi Jogja",
  description:
    "Panduan lengkap asuransi untuk pemilik properti penginapan di Yogyakarta: homestay rumahan, vila privat, guest house, hingga hotel butik. Proteksi bangunan, isi, kehilangan pendapatan sewa, dan tanggung jawab tamu. Polis rumah biasa tidak cukup.",
  keywords:
    "asuransi vila jogja, asuransi homestay yogyakarta, asuransi hotel boutique DIY, asuransi guest house jogja, proteksi properti penginapan yogyakarta, asuransi airbnb jogja, insurance villa yogyakarta",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-vila-homestay-jogja",
  },
  openGraph: {
    title: "Asuransi Vila, Homestay & Hotel di Jogja – Panduan Lengkap Pemilik Properti Penginapan",
    description:
      "Dari homestay 2 kamar hingga hotel butik 20 kamar — panduan memilih asuransi yang tepat untuk bisnis penginapan di Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-vila-homestay-jogja",
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
          name: "Asuransi Vila, Homestay & Hotel di Jogja",
          item: "https://asuransijogja.biz.id/artikel/asuransi-vila-homestay-jogja",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Asuransi Vila, Homestay & Hotel di Jogja – Panduan Lengkap Pemilik Properti Penginapan",
      description:
        "Panduan lengkap asuransi untuk semua skala properti penginapan di Yogyakarta — dari homestay rumahan hingga hotel butik.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Konsultan Asuransi Kerugian" },
      publisher: {
        "@type": "Organization",
        name: "Asuransi Jogja",
        url: "https://asuransijogja.biz.id",
      },
      datePublished: "2025-05-15",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apakah asuransi rumah biasa cukup untuk homestay atau vila yang disewakan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tidak. Polis asuransi rumah tinggal standar mengecualikan penggunaan komersial. Jika properti disewakan tanpa deklarasi yang benar kepada insurer, klaim bisa ditolak penuh — meski polis aktif. Vila, homestay, dan hotel memerlukan polis dengan endorsement komersial atau polis khusus hospitality.",
          },
        },
        {
          "@type": "Question",
          name: "Apa itu Loss of Rent dan apakah pemilik homestay memerlukannya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Loss of Rent menanggung kehilangan pendapatan sewa jika properti tidak bisa disewakan akibat kerusakan yang tertanggung — misalnya kebakaran yang memerlukan renovasi 3 bulan. Untuk pemilik yang mengandalkan pendapatan sewa sebagai penghasilan utama, ini sangat dianjurkan. Premi tambahan hanya Rp 500 ribu–2 juta per tahun tergantung nilai pendapatan.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah hotel butik di Yogyakarta perlu asuransi yang berbeda dari homestay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, skalanya berbeda. Hotel butik dengan lebih dari 10 kamar umumnya memerlukan Property All Risk (bukan sekadar kebakaran), Business Interruption yang lebih besar, Public Liability dengan limit lebih tinggi (Rp 1–5 miliar), dan Employer Liability untuk staf. Namun prinsip perlindungannya sama — bangunan, isi, pendapatan, dan tanggung jawab kepada tamu.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah listing di Airbnb atau Traveloka mempengaruhi klaim asuransi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bisa mempengaruhi jika tidak dideklarasikan. Status penggunaan properti sebagai short-term rental via platform digital mengubah klasifikasi dari hunian ke komersial. Beritahu insurer bahwa properti digunakan untuk bisnis sewa — ini penting dilakukan sejak awal agar klaim tidak ditolak dengan alasan 'penggunaan tidak sesuai yang dideklarasikan'.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana jika tamu merusak properti — ditanggung asuransi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kerusakan yang disengaja (vandalisme) bisa ditanggung jika ada klausul RSMD dalam polis. Kerusakan tidak sengaja oleh tamu umumnya tidak dicakup polis properti standar — lebih tepat diselesaikan melalui deposit tamu atau proteksi host dari platform (AirCover, dll). Beberapa insurer menawarkan endorsement 'accidental damage' — diskusikan opsi ini dengan konsultan.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const segmenProperti = [
  {
    id: "homestay",
    icon: "🏠",
    nama: "Homestay Rumahan",
    rentang: "1–5 kamar disewakan",
    nilaiProperti: "Rp 300 juta – Rp 1,5 miliar",
    pendapatan: "Rp 3–20 juta/bulan",
    contoh: "Kamar kos bergaya, rumah kampung disewakan per malam, rumah heritage Kotagede",
    warna: "border-blue-200 bg-blue-50/30",
    warnaBadge: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "vila",
    icon: "🏊",
    nama: "Vila Privat",
    rentang: "Disewa utuh, umumnya dengan kolam renang",
    nilaiProperti: "Rp 1–8 miliar",
    pendapatan: "Rp 15–150 juta/bulan",
    contoh: "Villa private pool di Sleman, vila sawah di Bantul, vila lereng Merapi",
    warna: "border-gold/30 bg-gold/4",
    warnaBadge: "bg-gold/15 text-amber-700 border-amber-200",
  },
  {
    id: "hotel",
    icon: "🏨",
    nama: "Guest House & Hotel Butik",
    rentang: "6–50 kamar, operasional profesional",
    nilaiProperti: "Rp 2–20 miliar",
    pendapatan: "Rp 30–300 juta/bulan",
    contoh: "Guest house Prawirotaman, hotel butik Malioboro, penginapan heritage Kotagede",
    warna: "border-purple-200 bg-purple-50/30",
    warnaBadge: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

const lapisanPerlindungan = [
  {
    no: "01",
    icon: "🏡",
    nama: "Bangunan & Struktur",
    deskripsi: "Perlindungan terhadap kerusakan fisik bangunan akibat kebakaran, petir, ledakan, dan — sangat penting untuk DIY — gempa bumi serta banjir sebagai perluasan.",
    wajib: ["Homestay", "Vila", "Hotel"],
    nilaiDasar: "Biaya rekonstruksi bangunan — bukan harga jual atau NJOP",
    tipPenting: "Untuk DIY, perluasan gempa bumi WAJIB. Gempa 2006 merusak lebih dari 150.000 bangunan di Bantul dan Sleman.",
    warna: "border-navy/15 bg-navy/3",
  },
  {
    no: "02",
    icon: "🛋️",
    nama: "Isi & Perlengkapan Tamu",
    deskripsi: "Melindungi semua furnitur, elektronik, linen, peralatan dapur, dekorasi, dan perlengkapan operasional yang disediakan untuk tamu.",
    wajib: ["Homestay", "Vila", "Hotel"],
    nilaiDasar: "Inventarisasi semua barang — gunakan replacement cost, bukan harga beli dulu",
    tipPenting: "Vila premium dengan furnitur desainer atau antik perlu penilaian khusus. Foto setiap ruangan sebagai dokumentasi.",
    warna: "border-blue-200 bg-blue-50/20",
  },
  {
    no: "03",
    icon: "💰",
    nama: "Kehilangan Pendapatan (Loss of Rent)",
    deskripsi: "Menanggung pendapatan sewa yang hilang selama properti tidak bisa beroperasi akibat kerusakan yang tertanggung — dari hari pertama tutup hingga siap beroperasi kembali.",
    wajib: ["Vila", "Hotel"],
    dianjurkan: ["Homestay"],
    nilaiDasar: "Rata-rata pendapatan per bulan × estimasi durasi perbaikan (umumnya 1–12 bulan)",
    tipPenting: "Untuk vila dengan pendapatan Rp 50 juta/bulan dan perbaikan 3 bulan — Loss of Rent menyelamatkan Rp 150 juta. Premi tambahannya hanya Rp 1–3 juta/tahun.",
    warna: "border-gold/30 bg-gold/4",
  },
  {
    no: "04",
    icon: "🛡️",
    nama: "Public Liability (Tanggung Jawab kepada Tamu)",
    deskripsi: "Melindungi pemilik dari tuntutan hukum tamu yang mengalami cedera atau kerugian di properti — terpeleset, kecelakaan di kolam renang, atau kerusakan barang tamu.",
    wajib: ["Vila", "Hotel"],
    dianjurkan: ["Homestay"],
    nilaiDasar: "Limit liability: Homestay Rp 250–500 juta. Vila Rp 500 juta–2 miliar. Hotel Rp 1–5 miliar.",
    tipPenting: "Kolam renang meningkatkan eksposur liability secara signifikan. Vila pool tanpa Public Liability adalah risiko finansial yang sangat besar.",
    warna: "border-green-200 bg-green-50/20",
  },
  {
    no: "05",
    icon: "👷",
    nama: "Employer Liability",
    deskripsi: "Melindungi dari tuntutan hukum karyawan (cleaning service, resepsionis, teknisi) atas kecelakaan kerja di atas manfaat BPJS Ketenagakerjaan.",
    wajib: ["Hotel"],
    dianjurkan: ["Vila"],
    nilaiDasar: "Sesuai jumlah karyawan tetap dan paruh waktu",
    tipPenting: "Wajib untuk hotel dengan karyawan tetap. Relevan untuk vila yang menggunakan cleaning service dan maintenance rutin.",
    warna: "border-amber-200 bg-amber-50/20",
  },
];

const rekomendasiPerSegmen = [
  {
    segmen: "Homestay Rumahan",
    icon: "🏠",
    warna: "border-blue-200 bg-blue-50/40",
    warnaHeader: "bg-blue-700",
    polisWajib: [
      "Asuransi Kebakaran (bangunan + isi)",
      "Perluasan Gempa Bumi — wajib untuk DIY",
    ],
    polisDianjurkan: [
      "Perluasan Banjir (jika dekat sungai/dataran rendah)",
      "Loss of Rent jika pendapatan sewa kritis",
      "Public Liability ringan (limit Rp 250–500 juta)",
    ],
    estimasiPremi: "Rp 1–5 juta/tahun",
    contohHitung: "Homestay 3 kamar di Prawirotaman, nilai bangunan + isi Rp 800 juta, pendapatan Rp 8 juta/bulan → estimasi premi lengkap Rp 2–4 juta/tahun",
  },
  {
    segmen: "Vila Privat (dengan/tanpa kolam)",
    icon: "🏊",
    warna: "border-gold/30 bg-gold/5",
    warnaHeader: "bg-amber-600",
    polisWajib: [
      "Property All Risk (bangunan + isi + fasilitas outdoor)",
      "Perluasan Gempa Bumi + Banjir",
      "Public Liability limit Rp 1–2 miliar (wajib jika ada kolam)",
      "Loss of Rent",
    ],
    polisDianjurkan: [
      "Employer Liability (jika ada staff tetap)",
      "RSMD — Riot, Strike, Malicious Damage",
      "Accidental Damage endorsement untuk kerusakan tidak sengaja tamu",
    ],
    estimasiPremi: "Rp 5–20 juta/tahun",
    contohHitung: "Vila pool privat di Sleman, nilai Rp 3 miliar, pendapatan Rp 60 juta/bulan → estimasi premi lengkap Rp 8–15 juta/tahun",
  },
  {
    segmen: "Guest House & Hotel Butik",
    icon: "🏨",
    warna: "border-purple-200 bg-purple-50/40",
    warnaHeader: "bg-purple-700",
    polisWajib: [
      "Property All Risk (bangunan + seluruh isi operasional)",
      "Perluasan Gempa + Banjir",
      "Business Interruption / Loss of Revenue",
      "Public Liability limit Rp 1–5 miliar",
      "Employer Liability (untuk semua karyawan)",
    ],
    polisDianjurkan: [
      "Product Liability jika ada restoran atau F&B",
      "Money Insurance (untuk pengelolaan kas)",
      "Electronic Equipment Insurance (CCTV, sistem reservasi)",
      "Fidelity Guarantee (proteksi dari penggelapan karyawan)",
    ],
    estimasiPremi: "Rp 10–50 juta/tahun",
    contohHitung: "Hotel butik 20 kamar di kawasan Prawirotaman, nilai properti Rp 8 miliar, revenue Rp 150 juta/bulan → estimasi premi lengkap Rp 18–35 juta/tahun",
  },
];

const perbedaanRumahVsKomersial = [
  { aspek: "Status di Polis", rumah: "Hunian (residential)", komersial: "Komersial / hospitality" },
  { aspek: "Penghuni", rumah: "Pemilik + keluarga", komersial: "Tamu berbeda-beda setiap hari" },
  { aspek: "Risiko Kerusakan", rumah: "Rendah — penghuni merawat", komersial: "Lebih tinggi — tamu tidak selalu merawat" },
  { aspek: "Cakupan Standar", rumah: "Kebakaran + perluasan", komersial: "Butuh endorsement komersial atau polis PAR" },
  { aspek: "Kehilangan Pendapatan", rumah: "Tidak relevan", komersial: "Sangat relevan — Loss of Rent / BI" },
  { aspek: "Liability Tamu", rumah: "Terbatas", komersial: "Tinggi — Public Liability wajib" },
  { aspek: "Jika Salah Dideklarasikan", rumah: "N/A", komersial: "Klaim bisa DITOLAK PENUH" },
];

const kasusNyata = [
  {
    judul: "Vila Pool Sleman — Gempa + Kehilangan Pendapatan 4 Bulan",
    segmen: "Vila Privat",
    nilai: "Rp 920 juta",
    kronologi: "Gempa bumi merusak struktur vila premium. Kolam renang retak, bangunan butuh renovasi besar selama 4 bulan. Vila tidak bisa beroperasi — kehilangan pendapatan Rp 70 juta/bulan.",
    tanpaPerlindunganLengkap: "Property All Risk menanggung kerusakan Rp 640 juta. Tanpa Loss of Rent, kehilangan pendapatan 4 bulan = Rp 280 juta ditanggung sendiri.",
    denganPerlindunganLengkap: "Dengan Loss of Rent: total klaim Rp 920 juta tertanggung penuh. Premi Loss of Rent tambahan hanya Rp 1,5–2 juta/tahun.",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    judul: "Hotel Butik Prawirotaman — Tamu Cedera, Dituntut Rp 1,4 Miliar",
    segmen: "Hotel Butik",
    nilai: "Tuntutan Rp 1,4 miliar",
    kronologi: "Tamu terpeleset di kamar mandi hotel karena lantai licin tanpa karpet anti-slip. Mengalami cedera tulang belakang. Keluarga menuntut Rp 1,4 miliar untuk biaya pengobatan, rehabilitasi, dan kehilangan penghasilan jangka panjang.",
    tanpaPerlindunganLengkap: "Tanpa Public Liability, pemilik hotel menghadapi proses hukum sendirian. Bahkan jika akhirnya menang di pengadilan, biaya pengacara bisa mencapai ratusan juta.",
    denganPerlindunganLengkap: "Public Liability menanggung biaya pengacara, negosiasi, dan penyelesaian Rp 1,1 miliar. Hotel tetap beroperasi tanpa gangguan finansial berarti.",
    badge: "bg-red-50 text-red-700 border-red-100",
  },
  {
    judul: "Homestay Kotagede — Kebakaran Dapur, Polis Ditolak",
    segmen: "Homestay",
    nilai: "Rp 180 juta (klaim ditolak)",
    kronologi: "Kebakaran dari dapur homestay merusak satu bangunan senilai Rp 180 juta. Pemilik mengajukan klaim ke polis asuransi rumah tinggal yang sudah dimilikinya.",
    tanpaPerlindunganLengkap: "Insurer menolak klaim dengan alasan 'penggunaan properti tidak sesuai yang dideklarasikan' — polis diterbitkan sebagai hunian pribadi, bukan properti komersial. Pemilik tidak mendapat ganti rugi apapun.",
    denganPerlindunganLengkap: "Jika dideklarasikan sebagai homestay komersial sejak awal: premi lebih tinggi Rp 300–500 ribu/tahun, tapi klaim Rp 180 juta akan diproses normal.",
    badge: "bg-gray-50 text-gray-700 border-gray-200",
  },
];

const tipsAirbnbOTA = [
  {
    no: "1",
    judul: "Deklarasikan penggunaan komersial sejak polis terbit",
    detail: "Ini yang paling penting dan paling sering terlewat. Beritahu insurer secara eksplisit bahwa properti digunakan sebagai homestay / vila sewa. Perubahan ini tidak selalu menaikkan premi secara signifikan, tapi melindungi Anda dari penolakan klaim.",
  },
  {
    no: "2",
    judul: "Proteksi platform (AirCover, dll) bukan pengganti polis properti",
    detail: "AirCover dari Airbnb dan proteksi serupa dari platform lain memiliki banyak pengecualian dan batasan nilai. Anggap ini sebagai pelengkap — bukan pengganti. Polis properti yang komprehensif tetap diperlukan.",
  },
  {
    no: "3",
    judul: "Hitung Loss of Rent dari pendapatan aktual, bukan maksimum",
    detail: "Gunakan rata-rata pendapatan 12 bulan terakhir sebagai dasar nilai pertanggungan Loss of Rent — bukan angka optimistis. Overinsurance Loss of Rent tidak menguntungkan; underinsurance membuat ganti rugi tidak mencukupi.",
  },
  {
    no: "4",
    judul: "Pasang dan dokumentasikan perangkat keselamatan",
    detail: "Detektor asap, alat pemadam ringan, rambu keselamatan kolam, dan karpet anti-slip kamar mandi. Ini menurunkan risiko klaim dan bisa menurunkan premi. Yang lebih penting: mencegah insiden yang tidak perlu terjadi.",
  },
  {
    no: "5",
    judul: "Review polis setiap kali ada perubahan properti atau pendapatan signifikan",
    detail: "Renovasi besar, penambahan kolam renang, atau kenaikan tarif yang signifikan mengubah profil risiko dan nilai pertanggungan. Review tahunan dengan konsultan memastikan tidak ada gap perlindungan.",
  },
];

const faqItems = [
  {
    q: "Apa perbedaan Property All Risk (PAR) dan asuransi kebakaran untuk properti penginapan?",
    a: "Asuransi kebakaran menanggung risiko yang secara eksplisit disebutkan (kebakaran, petir, ledakan, asap) plus perluasan yang dipilih. Property All Risk menanggung semua risiko kecuali yang secara eksplisit dikecualikan — cakupannya jauh lebih luas. Untuk vila dan hotel butik dengan nilai properti besar dan fasilitas beragam, PAR lebih dianjurkan karena memberikan perlindungan lebih komprehensif terhadap kejadian-kejadian yang tidak terduga.",
  },
  {
    q: "Apakah pool villa perlu persyaratan khusus dari insurer?",
    a: "Beberapa insurer menerapkan persyaratan kondisi (warranty) untuk kolam renang sebagai syarat polis — misalnya kewajiban ada pagar pengaman, rambu kedalaman, dan perawatan berkala. Pelanggaran warranty ini bisa menjadi alasan penolakan klaim terkait kolam. Tanyakan kepada kami persyaratan spesifik insurer yang Anda pilih sebelum polis terbit.",
  },
  {
    q: "Bagaimana cara menentukan nilai pertanggungan yang tepat untuk hotel butik?",
    a: "Nilai pertanggungan harus mencerminkan biaya rekonstruksi total — bangunan, instalasi M&E, furnitur, peralatan dapur, sistem IT, dan seluruh perlengkapan operasional. Untuk hotel dengan aset di atas Rp 5 miliar, kami sarankan penilaian oleh surveyor profesional agar nilai pertanggungan akurat dan tidak ada risiko underinsurance.",
  },
  {
    q: "Berapa lama masa tunggu (waiting period) Business Interruption / Loss of Rent?",
    a: "Sebagian besar polis BI/Loss of Rent memiliki masa tunggu (excess period) antara 3–14 hari setelah insiden sebelum manfaat mulai dibayar. Artinya kehilangan pendapatan di hari-hari awal ditanggung sendiri. Pilih excess period yang paling sesuai dengan kemampuan cash flow — excess lebih pendek berarti premi lebih tinggi.",
  },
  {
    q: "Apakah polis properti penginapan bisa mencakup barang milik tamu yang rusak atau hilang?",
    a: "Tidak secara standar. Polis properti pemilik menanggung aset milik pemilik. Barang milik tamu yang hilang atau rusak di properti Anda secara teknis bisa menjadi klaim Public Liability jika ada kelalaian dari pihak pemilik. Pastikan limit Public Liability memadai, dan informasikan kepada tamu untuk menggunakan asuransi perjalanan mereka sendiri untuk barang bawaan.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ArtikelAsuransiVilaHomestayJogja() {
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
            <span className="text-navy font-semibold">Asuransi Vila, Homestay & Hotel Jogja</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)" }}
          />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-properti/vila-homestay" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🏡 Vila & Homestay
              </Link>
              <Link href="/asuransi-properti/hotel-vila" className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors">
                🏨 Hotel & Vila Komersial
              </Link>
              <Link href="/asuransi-liability/public-liability" className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors">
                🛡️ Public Liability
              </Link>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Asuransi Vila, Homestay &<br />
              Hotel di Jogja —{" "}
              <em className="not-italic text-gold">Panduan Lengkap<br />
              untuk Semua Skala</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px] mb-6">
              Dari homestay 2 kamar hingga hotel butik 30 kamar — properti yang disewakan kepada tamu memiliki risiko yang berbeda dari rumah tinggal biasa. Polis yang salah bukan hanya tidak efektif; klaim Anda bisa ditolak penuh karena kesalahan deklarasi.
            </p>
            <div className="flex gap-3 text-xs text-white/40 flex-wrap">
              <span>✍️ Rio MD — Konsultan Asuransi Kerugian</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 10 menit</span>
            </div>
          </div>
        </section>

        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead + peringatan */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-5">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Aturan Dasar:</strong> Properti yang disewakan kepada tamu — apapun skalanya — adalah properti <strong>komersial</strong>. Polis asuransi rumah tinggal biasa <strong>tidak valid</strong> untuk penggunaan ini. Deklarasikan penggunaan yang benar kepada insurer sejak awal, atau risiko ditolaknya klaim di saat paling membutuhkan.
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-10 flex gap-3">
            <span className="text-lg flex-shrink-0">⚠️</span>
            <p className="text-sm text-red-700 leading-relaxed">
              <strong>Listing di Airbnb, Traveloka, atau platform OTA lainnya:</strong> Status penggunaan properti Anda sudah berubah ke komersial. Pastikan insurer mengetahui ini sebelum ada klaim — bukan setelahnya.
            </p>
          </div>

          {/* Navigasi segmen */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Panduan ini Mencakup 3 Segmen Properti Penginapan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {segmenProperti.map((s) => (
              <div key={s.id} className={`rounded-card p-4 border ${s.warna}`}>
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-heading font-bold text-navy text-sm mb-1">{s.nama}</div>
                <div className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full border inline-block mb-2 ${s.warnaBadge}`}>{s.rentang}</div>
                <div className="text-[0.65rem] text-[#94A3B8] mb-1">Nilai: {s.nilaiProperti}</div>
                <div className="text-[0.65rem] text-[#94A3B8] mb-2">Pendapatan: {s.pendapatan}</div>
                <p className="text-[0.65rem] text-[#64748B] leading-snug italic">{s.contoh}</p>
              </div>
            ))}
          </div>

          {/* Mengapa berbeda */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Perbedaan Mendasar: Rumah Tinggal vs Properti Komersial
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[30%]">Aspek</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[35%]">🏠 Rumah Tinggal</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold rounded-tr-xl w-[35%]">🏡 Vila / Homestay / Hotel</th>
                </tr>
              </thead>
              <tbody>
                {perbedaanRumahVsKomersial.map((row, i) => (
                  <tr key={row.aspek} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 font-semibold text-navy text-xs align-top">{row.aspek}</td>
                    <td className="p-3.5 text-[#64748B] text-sm leading-relaxed align-top">{row.rumah}</td>
                    <td className={`p-3.5 text-sm leading-relaxed align-top ${row.aspek === "Jika Salah Dideklarasikan" ? "text-red-600 font-bold" : "text-navy2 font-medium"}`}>
                      {row.komersial}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 5 Lapisan perlindungan */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            5 Lapisan Perlindungan — dan Siapa yang Membutuhkan Masing-masing
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Perlindungan optimal terdiri dari beberapa lapisan yang saling melengkapi.
            Skala properti menentukan lapisan mana yang wajib dan mana yang dianjurkan:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {lapisanPerlindungan.map((l) => (
              <div key={l.no} className={`rounded-card p-5 border ${l.warna}`}>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-navy/8 flex items-center justify-center text-xs font-bold text-navy mb-1">
                      {l.no}
                    </div>
                    <div className="text-xl text-center">{l.icon}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-heading font-bold text-navy text-[0.95rem] mb-1">{l.nama}</div>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-3">{l.deskripsi}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {l.wajib?.map((s) => (
                        <span key={s} className="text-[0.6rem] font-bold px-2 py-0.5 rounded-full bg-navy text-white">
                          ✓ Wajib: {s}
                        </span>
                      ))}
                      {l.dianjurkan?.map((s) => (
                        <span key={s} className="text-[0.6rem] font-bold px-2 py-0.5 rounded-full bg-gold/15 text-amber-700 border border-gold/30">
                          + Dianjurkan: {s}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="bg-white/60 rounded-lg p-2.5 border border-black/6">
                        <div className="text-[0.6rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-0.5">Dasar nilai</div>
                        <p className="text-xs text-navy2">{l.nilaiDasar}</p>
                      </div>
                      <div className="bg-gold/6 rounded-lg p-2.5 border border-gold/15">
                        <div className="text-[0.6rem] font-bold uppercase tracking-wide text-gold mb-0.5">💡 Tips</div>
                        <p className="text-xs text-navy2">{l.tipPenting}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rekomendasi per segmen */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Rekomendasi Polis per Segmen — Beserta Estimasi Biaya
          </h2>
          <div className="flex flex-col gap-5 mb-10">
            {rekomendasiPerSegmen.map((r) => (
              <div key={r.segmen} className={`rounded-card border overflow-hidden ${r.warna}`}>
                <div className={`px-5 py-3 flex items-center gap-2.5 ${r.warnaHeader}`}>
                  <span className="text-xl">{r.icon}</span>
                  <span className="font-heading font-bold text-white text-[0.95rem]">{r.segmen}</span>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-2">Polis Wajib / Sangat Dianjurkan</p>
                      <ul className="flex flex-col gap-1.5">
                        {r.polisWajib.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-navy font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                            <span className="text-xs text-navy2 leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#94A3B8] mb-2">Tambahan Dianjurkan</p>
                      <ul className="flex flex-col gap-1.5">
                        {r.polisDianjurkan.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-gold font-bold text-xs flex-shrink-0 mt-0.5">+</span>
                            <span className="text-xs text-[#64748B] leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3.5 border border-black/6 flex flex-col sm:flex-row gap-3">
                    <div className="flex-shrink-0">
                      <div className="text-[0.65rem] text-[#94A3B8] uppercase tracking-wide font-semibold mb-0.5">Estimasi premi</div>
                      <div className="font-heading font-bold text-navy text-lg">{r.estimasiPremi}</div>
                    </div>
                    <div className="sm:border-l sm:border-black/10 sm:pl-3">
                      <div className="text-[0.65rem] text-[#94A3B8] uppercase tracking-wide font-semibold mb-0.5">Contoh perhitungan</div>
                      <p className="text-xs text-[#64748B] leading-relaxed">{r.contohHitung}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kasus Nyata */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            3 Kasus Nyata dari Properti Penginapan di Yogyakarta
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Tiga skenario berikut menggambarkan konsekuensi nyata dari perlindungan yang lengkap vs tidak lengkap:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {kasusNyata.map((k) => (
              <div key={k.judul} className={`rounded-card p-5 border ${k.badge}`}>
                <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                  <span className="font-heading font-bold text-navy text-sm">{k.judul}</span>
                  <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${k.badge}`}>{k.segmen}</span>
                  <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${k.badge}`}>{k.nilai}</span>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed mb-3">{k.kronologi}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                    <div className="text-[0.65rem] font-bold uppercase tracking-wide text-amber-600 mb-1">⚠️ Tanpa perlindungan lengkap</div>
                    <p className="text-xs text-[#64748B] leading-relaxed">{k.tanpaPerlindunganLengkap}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                    <div className="text-[0.65rem] font-bold uppercase tracking-wide text-green-600 mb-1">✅ Dengan perlindungan lengkap</div>
                    <p className="text-xs text-[#64748B] leading-relaxed">{k.denganPerlindunganLengkap}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips platform digital */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            5 Tips Penting untuk Pemilik yang Listing di Platform Digital
          </h2>
          <div className="flex flex-col gap-3 mb-10">
            {tipsAirbnbOTA.map((t) => (
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
              Ingin review atau upgrade polis properti penginapan Anda?
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-4">
              Ceritakan skala dan kondisi properti Anda — kami evaluasi apakah perlindungan yang ada sudah memadai, dan rekomendasikan yang perlu ditambah. Gratis, tanpa komitmen.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all"
              >
                💬 Konsultasi via WA — Gratis
              </a>
              <Link
                href="/asuransi-properti/vila-homestay"
                className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all"
              >
                🏡 Produk Vila & Homestay →
              </Link>
              <Link
                href="/asuransi-properti/hotel-vila"
                className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all"
              >
                🏨 Produk Hotel & Vila →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            Pertanyaan yang Sering Diajukan Pemilik Properti Penginapan
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
            <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">Produk & Artikel Terkait</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/asuransi-properti/vila-homestay", icon: "🏡", judul: "Produk Asuransi Vila & Homestay", desc: "Detail cakupan, cara daftar, dan estimasi premi" },
                { href: "/asuransi-properti/hotel-vila", icon: "🏨", judul: "Produk Asuransi Hotel & Guest House", desc: "Untuk properti penginapan skala menengah ke atas" },
                { href: "/asuransi-properti/kebakaran", icon: "🔥", judul: "Asuransi Kebakaran", desc: "Perlindungan dasar bangunan dari api dan petir" },
                { href: "/asuransi-properti/banjir-gempa", icon: "🌊", judul: "Perluasan Banjir & Gempa", desc: "Wajib untuk semua properti di wilayah DIY" },
                { href: "/asuransi-liability/public-liability", icon: "🛡️", judul: "Public Liability", desc: "Proteksi dari tuntutan tamu yang cedera di properti" },
                { href: "/artikel/asuransi-rumah-tinggal-jogja", icon: "🏠", judul: "Asuransi Rumah Tinggal Jogja", desc: "Untuk properti yang ditempati sendiri, bukan disewakan" },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group"
                >
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

        {/* ── CTA Bottom ── */}
        <section className="py-16 px-[5vw] bg-navy text-center relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)" }}
          />
          <div className="relative z-10">
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
              Lindungi Bisnis Penginapan Anda<br />
              dengan Perlindungan yang Tepat
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
              Dari homestay hingga hotel butik — kami susun paket perlindungan yang sesuai skala dan kebutuhan spesifik properti Anda di Yogyakarta.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
              >
                💬 Konsultasi via WhatsApp
              </a>
              <Link
                href="/asuransi-properti/vila-homestay"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                🏡 Vila & Homestay
              </Link>
              <Link
                href="/asuransi-properti/hotel-vila"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                🏨 Hotel & Vila
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
