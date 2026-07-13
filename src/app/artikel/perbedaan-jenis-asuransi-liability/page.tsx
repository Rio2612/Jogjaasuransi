// app/artikel/perbedaan-jenis-asuransi-liability/page.tsx
// TARGET KEYWORD: "perbedaan jenis asuransi liability", "public liability employer liability indonesia"
// INTENT: Informational — pemilik bisnis yang bingung memilih antara jenis-jenis liability
// SILO: Liability cluster → /public-liability, /employer-liability, /product-liability, /limbah-b3

import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Perbedaan Jenis Asuransi Liability – Public, Employer, Product & Limbah B3",
  description:
    "Penjelasan lengkap perbedaan Public Liability, Employer Liability, Product Liability, dan Limbah B3 Liability. Kapan masing-masing dibutuhkan, contoh kasus nyata, dan panduan memilih untuk bisnis di Yogyakarta.",
  keywords:
    "perbedaan jenis asuransi liability, public liability employer liability indonesia, product liability jogja, asuransi tanggung gugat yogyakarta, liability insurance usaha DIY",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/perbedaan-jenis-asuransi-liability",
  },
  openGraph: {
    title: "Perbedaan Jenis Asuransi Liability – Public, Employer, Product & Limbah B3",
    description:
      "Bingung memilih antara Public Liability, Employer Liability, dan Product Liability? Panduan lengkap beserta contoh kasus nyata di Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel/perbedaan-jenis-asuransi-liability",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Perbedaan Jenis Asuransi Liability – Public, Employer, Product & Limbah B3" }],
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
          name: "Perbedaan Jenis Asuransi Liability",
          item: "https://asuransijogja.biz.id/artikel/perbedaan-jenis-asuransi-liability",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Perbedaan Jenis Asuransi Liability – Public, Employer, Product & Limbah B3",
      description: "Panduan lengkap perbedaan empat jenis asuransi liability dan kapan masing-masing dibutuhkan untuk bisnis di Yogyakarta.",
      author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Praktisi Asuransi" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-04-25",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa perbedaan Public Liability dan Employer Liability?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Public Liability melindungi dari tuntutan pihak ketiga di luar perusahaan — pelanggan, pengunjung, atau warga sekitar yang mengalami cedera atau kerugian akibat operasional bisnis. Employer Liability melindungi dari tuntutan karyawan atau ahli waris yang merasa ganti rugi BPJS Ketenagakerjaan tidak memadai atas kecelakaan kerja.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah BPJS Ketenagakerjaan sudah cukup tanpa Employer Liability?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tidak selalu. BPJS Ketenagakerjaan menanggung biaya pengobatan dan santunan standar. Namun jika keluarga korban menuntut ganti rugi lebih besar melalui jalur hukum — misalnya untuk kehilangan penghasilan jangka panjang atau biaya rehabilitasi — tuntutan tersebut bisa jauh melebihi manfaat BPJS. Employer Liability menutupi gap ini.",
          },
        },
        {
          "@type": "Question",
          name: "Kapan bisnis di Yogyakarta perlu Product Liability?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Product Liability dibutuhkan ketika bisnis memproduksi atau mendistribusikan produk yang bisa menyebabkan cedera atau kerugian jika cacat atau tidak sesuai label. Relevan untuk: produsen makanan dan minuman, pabrik garmen dan tekstil, UMKM kosmetik, dan distributor produk impor.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const jenisLiability = [
  {
    id: "public",
    icon: "👥",
    nama: "Public Liability",
    subNama: "General Third Party Liability",
    deskripsi: "Melindungi bisnis dari tuntutan hukum pihak ketiga — pelanggan, pengunjung, atau warga sekitar — yang mengalami cedera tubuh atau kerusakan properti akibat operasional bisnis Anda.",
    siapYangMenuntut: "Pihak ketiga di luar perusahaan (pelanggan, pengunjung, warga)",
    apaYangDitanggung: [
      "Biaya pengobatan pihak ketiga yang cedera di tempat usaha",
      "Ganti rugi kerusakan properti pihak ketiga",
      "Biaya hukum dan pengacara untuk membela tuntutan",
      "Kompensasi kehilangan penghasilan pihak yang cedera",
    ],
    tidakDitanggung: [
      "Cedera karyawan sendiri (→ Employer Liability)",
      "Kerusakan produk yang dijual (→ Product Liability)",
      "Polusi yang disengaja",
    ],
    cocokUntuk: ["Restoran, kafe, hotel, pusat perbelanjaan", "Kontraktor proyek konstruksi", "Event organizer dan tempat hiburan", "Kantor dengan banyak tamu"],
    estimasiPremi: "Rp 500 rb – Rp 10 juta/tahun",
    href: "/asuransi-liability/public-liability",
    warna: "border-blue-200 bg-blue-50/40",
    warnaBadge: "bg-blue-50 text-blue-700 border-blue-200",
    contohKasus: "Pelanggan terpeleset di lantai basah restoran dan patah kaki. Tuntutan Rp 120 juta untuk biaya pengobatan dan kehilangan penghasilan selama masa pemulihan.",
  },
  {
    id: "employer",
    icon: "👷",
    nama: "Employer Liability",
    subNama: "Employer's Liability / Workmen's Compensation",
    deskripsi: "Melindungi perusahaan dari tuntutan hukum karyawan atau ahli waris atas kecelakaan kerja atau penyakit akibat kerja — di atas batas manfaat yang ditanggung BPJS Ketenagakerjaan.",
    siapYangMenuntut: "Karyawan atau ahli waris karyawan perusahaan",
    apaYangDitanggung: [
      "Tuntutan hukum karyawan atas kecelakaan kerja",
      "Selisih ganti rugi di atas manfaat BPJS",
      "Penyakit akibat paparan kerja jangka panjang",
      "Biaya hukum untuk menghadapi gugatan perburuhan",
    ],
    tidakDitanggung: [
      "Tuntutan pihak ketiga di luar karyawan (→ Public Liability)",
      "Cedera yang disengaja atau akibat kelalaian berat karyawan sendiri",
      "Pelanggaran yang sudah ditanggung BPJS secara penuh",
    ],
    cocokUntuk: ["Kontraktor dan proyek konstruksi", "Pabrik dan industri manufaktur", "Perusahaan dengan pekerja lapangan", "UMKM dengan > 10 karyawan produksi"],
    estimasiPremi: "Rp 500 rb – Rp 8 juta/tahun",
    href: "/asuransi-liability/employer-liability",
    warna: "border-amber-200 bg-amber-50/40",
    warnaBadge: "bg-amber-50 text-amber-700 border-amber-200",
    contohKasus: "Pekerja pabrik tangan kanannya terkena mesin press. BPJS membayar Rp 85 juta. Keluarga menuntut total Rp 400 juta. Employer Liability menanggung selisih Rp 315 juta.",
  },
  {
    id: "product",
    icon: "📦",
    nama: "Product Liability",
    subNama: "Products Liability Insurance",
    deskripsi: "Melindungi produsen, distributor, atau pengecer dari tuntutan hukum konsumen yang mengalami cedera atau kerugian akibat produk yang cacat, berbahaya, atau tidak sesuai klaim.",
    siapYangMenuntut: "Konsumen atau pengguna produk",
    apaYangDitanggung: [
      "Cedera konsumen akibat produk cacat",
      "Keracunan makanan atau reaksi alergi produk",
      "Kerusakan properti konsumen akibat produk",
      "Biaya penarikan produk (product recall) — dengan perluasan",
    ],
    tidakDitanggung: [
      "Kerusakan pada produk itu sendiri (→ bukan liability)",
      "Kecurangan atau pemalsuan produk yang disengaja",
      "Pelanggaran kontrak murni tanpa unsur cedera",
    ],
    cocokUntuk: ["Produsen makanan, minuman, dan kuliner kemasan", "Pabrik garmen dan tekstil", "Produsen kosmetik dan perawatan tubuh", "Importir dan distributor produk konsumen"],
    estimasiPremi: "Rp 1 juta – Rp 15 juta/tahun",
    href: "/asuransi-liability/product-liability",
    warna: "border-green-200 bg-green-50/40",
    warnaBadge: "bg-green-50 text-green-700 border-green-200",
    contohKasus: "Oleh-oleh bakpia dari Jogja menyebabkan 12 konsumen keracunan. Tuntutan ganti rugi biaya rumah sakit dan kompensasi Rp 180 juta. Product Liability menanggung penuh.",
  },
  {
    id: "b3",
    icon: "⚠️",
    nama: "Liability Limbah B3",
    subNama: "Environmental / Pollution Liability",
    deskripsi: "Melindungi perusahaan dari tuntutan hukum dan biaya remediasi akibat pencemaran lingkungan dari limbah Bahan Berbahaya dan Beracun (B3) — baik yang disengaja maupun tidak.",
    siapYangMenuntut: "Warga terdampak, komunitas sekitar, atau instansi pemerintah (KLHK, DLH)",
    apaYangDitanggung: [
      "Tuntutan warga atas pencemaran tanah atau air",
      "Biaya remediasi dan pembersihan lingkungan",
      "Denda regulasi lingkungan (dengan batasan tertentu)",
      "Biaya hukum menghadapi gugatan lingkungan",
    ],
    tidakDitanggung: [
      "Pencemaran yang dilakukan dengan sengaja",
      "Denda pidana (tidak bisa diasuransikan secara hukum)",
      "Pencemaran yang sudah diketahui sebelum polis terbit",
    ],
    cocokUntuk: ["Pabrik dengan limbah cair atau padat B3", "Rumah sakit (limbah medis)", "Bengkel otomotif dan industri logam", "Usaha laundry dan dry cleaning skala besar"],
    estimasiPremi: "Rp 2 juta – Rp 25 juta/tahun",
    href: "/asuransi-liability/limbah-b3",
    warna: "border-red-200 bg-red-50/40",
    warnaBadge: "bg-red-50 text-red-700 border-red-200",
    contohKasus: "Limbah cair pabrik tekstil di Sleman mencemari sungai dan sawah warga. KLHK memerintahkan remediasi + ganti rugi petani Rp 850 juta. Tanpa asuransi, perusahaan bangkrut.",
  },
];

const tabelPerbandingan = [
  { aspek: "Pihak yang Menuntut", public: "Pelanggan / pengunjung / warga", employer: "Karyawan / ahli waris", product: "Konsumen produk", b3: "Warga terdampak / KLHK" },
  { aspek: "Pemicu Klaim", public: "Cedera atau kerugian di tempat usaha", employer: "Kecelakaan / penyakit kerja", product: "Produk cacat atau berbahaya", b3: "Pencemaran lingkungan" },
  { aspek: "Hubungan dengan Penuntut", public: "Tamu / orang luar", employer: "Hubungan kerja", product: "Konsumen / pembeli", b3: "Pihak terdampak lingkungan" },
  { aspek: "Estimasi Premi", public: "Rp 500 rb–10 juta/thn", employer: "Rp 500 rb–8 juta/thn", product: "Rp 1–15 juta/thn", b3: "Rp 2–25 juta/thn" },
  { aspek: "Wajib Regulasi?", public: "Tidak (kecuali proyek tertentu)", employer: "Tidak (BPJS wajib, ini tambahan)", product: "Tidak (dianjurkan ekspor)", b3: "PP No. 22/2021 (industri tertentu)" },
  { aspek: "Bisa Digabung?", public: "Ya — sering digabung dengan Employer", employer: "Ya — sering digabung dengan Public", product: "Ya — bisa paket dengan Public", b3: "Berdiri sendiri" },
];

const matriksJenisUsaha = [
  { usaha: "Restoran / Kafe", public: true, employer: false, product: true, b3: false, catatan: "Product Liability jika jual makanan kemasan" },
  { usaha: "Hotel / Villa", public: true, employer: true, product: false, b3: false, catatan: "Employer penting untuk karyawan housekeeping" },
  { usaha: "Pabrik Manufaktur", public: true, employer: true, product: true, b3: true, catatan: "B3 jika ada proses kimia atau limbah cair" },
  { usaha: "Kontraktor Konstruksi", public: true, employer: true, product: false, b3: false, catatan: "Public sudah termasuk Section II CAR" },
  { usaha: "Toko Retail / UMKM", public: true, employer: false, product: false, b3: false, catatan: "Product jika produksi sendiri" },
  { usaha: "Rumah Sakit / Klinik", public: true, employer: true, product: false, b3: true, catatan: "B3 untuk pengelolaan limbah medis" },
  { usaha: "Produsen Makanan", public: false, employer: true, product: true, b3: false, catatan: "Product Liability prioritas utama" },
  { usaha: "Event Organizer", public: true, employer: false, product: false, b3: false, catatan: "Public Liability per event atau tahunan" },
];

const faqItems = [
  {
    q: "Apakah Public Liability dan General Liability adalah hal yang sama?",
    a: "Pada dasarnya ya — di Indonesia istilah yang lebih umum digunakan adalah Public Liability atau Third Party Liability (TPL). Di pasar internasional lebih dikenal sebagai General Liability atau Commercial General Liability (CGL). Cakupannya serupa: melindungi dari tuntutan pihak ketiga atas cedera atau kerusakan properti.",
  },
  {
    q: "Apakah bisnis kecil (UMKM) benar-benar perlu asuransi liability?",
    a: "Ya, justru UMKM yang lebih rentan. Perusahaan besar punya tim hukum dan cadangan modal untuk menghadapi tuntutan. UMKM tidak. Satu tuntutan dari pelanggan yang cedera — meski terlihat kecil — bisa menguras tabungan bertahun-tahun jika tidak ada asuransi. Biayanya pun terjangkau: Public Liability untuk toko kecil bisa mulai Rp 500 ribu per tahun.",
  },
  {
    q: "Apakah Section II (TPL) dalam polis CAR sama dengan Public Liability?",
    a: "Serupa tapi tidak identik. Section II CAR adalah Third Party Liability yang berlaku khusus selama masa konstruksi proyek — hanya menanggung klaim yang timbul dari aktivitas pekerjaan konstruksi di lokasi proyek tersebut. Public Liability berdiri sendiri lebih luas dan berlaku untuk operasional bisnis secara umum di luar konteks proyek.",
  },
  {
    q: "Bagaimana jika satu insiden menimbulkan klaim Public Liability sekaligus Employer Liability?",
    a: "Ini bisa terjadi. Misalnya kecelakaan di pabrik yang melukai karyawan sekaligus tamu yang sedang berkunjung. Klaim karyawan masuk ke Employer Liability, klaim tamu masuk ke Public Liability. Jika keduanya ada dalam satu polis kombinasi, penanganannya lebih sederhana. Jika polis terpisah, masing-masing klaim ditangani oleh polis yang relevan.",
  },
  {
    q: "Apakah asuransi liability menanggung biaya pengacara jika saya digugat?",
    a: "Ya, dan ini salah satu manfaat yang sering tidak disadari. Hampir semua polis liability menanggung 'defense costs' — biaya pengacara, biaya pengadilan, dan biaya ahli yang diperlukan untuk membela tuntutan. Bahkan untuk klaim yang akhirnya tidak terbukti, biaya pengacara sudah cukup besar untuk membebani bisnis kecil.",
  },
];

export default function ArtikelPerbedaanJenisLiability() {
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
            <span className="text-navy font-semibold">Perbedaan Jenis Asuransi Liability</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-liability" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🛡️ Asuransi Liability
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Perbandingan Produk</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Perbedaan Jenis Asuransi Liability —<br />
              <em className="not-italic text-gold">Public, Employer,<br />Product & Limbah B3</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Semua disebut "asuransi liability" — tapi masing-masing melindungi dari tuntutan yang berbeda, dari pihak yang berbeda. Salah pilih produk berarti klaim Anda tidak tertanggung saat dibutuhkan.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio Mardiansyah — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 8 menit</span>
            </div>
          </div>
        </section>

        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Perbedaan Utama:</strong>{" "}
              <strong>Public Liability</strong> = tuntutan dari pelanggan/pengunjung.{" "}
              <strong>Employer Liability</strong> = tuntutan dari karyawan.{" "}
              <strong>Product Liability</strong> = tuntutan dari konsumen produk.{" "}
              <strong>Limbah B3</strong> = tuntutan akibat pencemaran lingkungan.
              Keempatnya bisa dibutuhkan oleh satu bisnis sekaligus — atau hanya satu dua saja, tergantung jenis usaha.
            </p>
          </div>

          {/* 4 Kartu Produk */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            4 Jenis Asuransi Liability — Penjelasan Lengkap
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Berikut penjelasan masing-masing jenis, termasuk siapa yang bisa menuntut, apa yang ditanggung, dan contoh kasus nyata:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {jenisLiability.map((p) => (
              <div key={p.id} className={`rounded-card p-5 border ${p.warna}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/70 border border-black/8 flex items-center justify-center text-xl shadow-sm">
                    {p.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                      <span className="font-heading font-bold text-navy text-[0.95rem]">{p.nama}</span>
                      <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full border ${p.warnaBadge}`}>{p.subNama}</span>
                    </div>
                    <p className="text-sm text-[#475569] leading-relaxed mb-4">{p.deskripsi}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1.5">Yang ditanggung</p>
                        <ul className="flex flex-col gap-1">
                          {p.apaYangDitanggung.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-gold flex-shrink-0 font-bold text-xs mt-0.5">✓</span>
                              <span className="text-xs text-navy2">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1.5">Tidak ditanggung</p>
                        <ul className="flex flex-col gap-1">
                          {p.tidakDitanggung.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-red-400 flex-shrink-0 font-bold text-xs mt-0.5">✕</span>
                              <span className="text-xs text-[#475569]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white/60 rounded-xl p-3.5 border border-black/6 mb-3">
                      <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1">Contoh kasus</p>
                      <p className="text-xs text-navy2 leading-relaxed">{p.contohKasus}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <span className="text-[0.65rem] text-[#5A6472] uppercase tracking-wide font-semibold">Estimasi premi: </span>
                        <span className="text-xs font-bold text-navy">{p.estimasiPremi}</span>
                      </div>
                      <Link href={p.href} className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold2 transition-colors no-underline">
                        Halaman produk lengkap →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabel perbandingan */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Tabel Perbandingan Ringkas
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3 font-heading font-semibold text-xs rounded-tl-xl w-[22%]">Aspek</th>
                  <th className="text-left p-3 font-heading font-semibold text-xs w-[19%]">👥 Public</th>
                  <th className="text-left p-3 font-heading font-semibold text-xs text-gold2 w-[19%]">👷 Employer</th>
                  <th className="text-left p-3 font-heading font-semibold text-xs w-[19%]">📦 Product</th>
                  <th className="text-left p-3 font-heading font-semibold text-xs text-gold3 rounded-tr-xl w-[21%]">⚠️ Limbah B3</th>
                </tr>
              </thead>
              <tbody>
                {tabelPerbandingan.map((row, i) => (
                  <tr key={row.aspek} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3 font-semibold text-navy text-xs align-top">{row.aspek}</td>
                    <td className="p-3 text-[#475569] text-xs leading-snug align-top">{row.public}</td>
                    <td className="p-3 text-navy2 text-xs leading-snug align-top">{row.employer}</td>
                    <td className="p-3 text-[#475569] text-xs leading-snug align-top">{row.product}</td>
                    <td className="p-3 text-[#475569] text-xs leading-snug align-top">{row.b3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5A6472] mb-10">* Estimasi premi tergantung skala usaha, omzet, limit liability, dan profil risiko spesifik.</p>

          {/* Matriks jenis usaha */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Jenis Usaha Anda Butuh Liability Apa?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-5">
            Gunakan tabel referensi cepat ini berdasarkan jenis bisnis:
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-cream border-b-2 border-black/8">
                  <th className="text-left p-3 font-heading font-semibold text-xs text-navy w-[28%]">Jenis Usaha</th>
                  <th className="text-center p-3 font-heading font-semibold text-xs text-navy w-[12%]">Public</th>
                  <th className="text-center p-3 font-heading font-semibold text-xs text-navy w-[12%]">Employer</th>
                  <th className="text-center p-3 font-heading font-semibold text-xs text-navy w-[12%]">Product</th>
                  <th className="text-center p-3 font-heading font-semibold text-xs text-navy w-[12%]">B3</th>
                  <th className="text-left p-3 font-heading font-semibold text-xs text-navy w-[24%]">Catatan</th>
                </tr>
              </thead>
              <tbody>
                {matriksJenisUsaha.map((row, i) => (
                  <tr key={row.usaha} className={`border-b border-black/5 ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}>
                    <td className="p-3 font-semibold text-navy text-xs">{row.usaha}</td>
                    {[row.public, row.employer, row.product, row.b3].map((val, j) => (
                      <td key={j} className="p-3 text-center">
                        {val
                          ? <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-navy text-white text-[0.6rem] font-bold">✓</span>
                          : <span className="text-black/15">—</span>
                        }
                      </td>
                    ))}
                    <td className="p-3 text-[0.65rem] text-[#5A6472] leading-snug">{row.catatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Tidak yakin kombinasi mana yang tepat untuk bisnis Anda?</div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              Ceritakan jenis usaha, jumlah karyawan, dan apakah ada produksi sendiri — kami rekomendasikan kombinasi liability yang paling efisien.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Konsultasi via WA — Gratis
              </a>
              <Link href="/asuransi-liability" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                🛡️ Lihat Semua Produk Liability →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">Pertanyaan yang Sering Membingungkan</h2>
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
                { href: "/asuransi-liability/public-liability", icon: "👥", judul: "Public Liability", desc: "Detail cakupan, estimasi premi, dan cara klaim" },
                { href: "/asuransi-liability/employer-liability", icon: "👷", judul: "Employer Liability", desc: "Perlindungan dari tuntutan hukum tenaga kerja" },
                { href: "/asuransi-liability/product-liability", icon: "📦", judul: "Product Liability", desc: "Proteksi produsen dari tuntutan konsumen" },
                { href: "/asuransi-liability/limbah-b3", icon: "⚠️", judul: "Liability Limbah B3", desc: "Perlindungan dari gugatan pencemaran lingkungan" },
                { href: "/artikel/cara-klaim-asuransi-liability", icon: "📋", judul: "Cara Klaim Asuransi Liability", desc: "Panduan step-by-step dari laporan hingga dana cair" },
                { href: "/artikel/contoh-kasus-gugatan-liability-bisnis", icon: "⚖️", judul: "Contoh Kasus Gugatan Liability", desc: "Kasus nyata gugatan dan bagaimana asuransi menanganinya" },
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
              Bisnis Anda Butuh Perlindungan Liability —<br />Mulai dari yang Paling Relevan
            </h2>
            <p className="text-white/75 text-sm max-w-[420px] mx-auto mb-8">
              Konsultasi gratis dengan Rio Mardiansyah. Kami analisis risiko bisnis Anda dan rekomendasikan kombinasi liability yang paling efisien.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
                💬 Konsultasi via WhatsApp
              </a>
              <Link href="/asuransi-liability" className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all">
                🛡️ Lihat Semua Produk Liability
              </Link>
            </div>
          </div>
        </section>

    </>
  );
}
