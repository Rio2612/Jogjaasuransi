import type { Metadata } from "next";
import Link from "next/link";
import PropertyLayout from "@/components/properti/PropertyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Hotel & Guest House Jogja – Proteksi Properti Wisata DIY | Asuransi Jogja",
  description:
    "Asuransi properti untuk hotel, guest house, dan resort di Yogyakarta. PAR komprehensif, kebakaran, banjir, gempa Merapi, business interruption, hingga public liability tamu. Konsultasi gratis.",
  keywords:
    "asuransi hotel jogja, asuransi penginapan jogja, asuransi guest house yogyakarta, asuransi properti wisata jogja, asuransi hotel bintang yogyakarta, asuransi resort DIY, asuransi business interruption hotel, asuransi public liability hotel jogja, asuransi kebakaran hotel yogyakarta",
  alternates: {
    canonical: "https://asuransijogja.biz.id/asuransi-properti/hotel-vila",
  },
  openGraph: {
    title: "Asuransi Hotel & Guest House Jogja – Proteksi Properti Wisata DIY",
    description:
      "Solusi asuransi lengkap untuk hotel, guest house, resort, dan penginapan skala besar di Yogyakarta. Konsultasi gratis dengan konsultan lokal.",
    url: "https://asuransijogja.biz.id/asuransi-properti/hotel-vila",
    type: "website",
  },
};

// ─── SCHEMA ──────────────────────────────────────────────────────────────────
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Produk asuransi apa yang paling dibutuhkan pemilik hotel di Yogyakarta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Setidaknya ada tiga lapisan perlindungan yang dibutuhkan: (1) Property All Risk atau asuransi kebakaran dengan perluasan banjir dan gempa untuk melindungi bangunan dan isi; (2) Public Liability untuk menanggung tuntutan hukum jika tamu cedera di properti Anda; dan (3) Business Interruption untuk menjaga arus kas jika hotel terpaksa tutup karena klaim. Untuk hotel bintang 4–5 dan resort, ketiga lapisan ini adalah standar minimum.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah properti hotel wajib memiliki asuransi Public Liability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secara hukum di Indonesia belum ada kewajiban formal, namun secara praktis Public Liability adalah keharusan bagi setiap properti wisata yang menerima tamu umum. Jika tamu tergelincir di kolam renang, tersengat listrik dari instalasi yang tidak standar, atau mengalami kecelakaan di area hotel — Anda sebagai pemilik bisa dituntut secara hukum. Biaya pengacara, biaya pengobatan, dan ganti rugi yang diputuskan pengadilan bisa mencapai ratusan juta rupiah.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu Business Interruption dan seberapa penting untuk hotel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business Interruption (BI) adalah perluasan yang menjamin kehilangan pendapatan operasional hotel selama periode penutupan akibat klaim yang dijamin polis. Jika hotel terpaksa tutup 3 bulan karena kebakaran, BI akan menanggung hilangnya omzet kamar, restoran, dan fasilitas lain — sementara biaya tetap seperti gaji karyawan, cicilan, dan tagihan tetap berjalan. Untuk hotel yang mengandalkan occupancy rate tinggi, BI adalah perlindungan krusial.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa estimasi premi asuransi untuk hotel bintang 2 di Yogyakarta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Premi dihitung berdasarkan nilai bangunan, isi, fasilitas, dan perluasan yang dipilih. Sebagai gambaran kasar: hotel bintang 2 dengan nilai bangunan Rp 3 miliar, perluasan banjir dan gempa, tanpa BI — estimasi premi berkisar Rp 3–5 juta per tahun. Dengan penambahan Public Liability dan BI, biaya total bisa Rp 8–15 juta per tahun tergantung limit pertanggungan. Hubungi kami untuk kalkulasi yang akurat.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah perabot dan perlengkapan kamar hotel bisa ikut diasuransikan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Nilai isi bangunan — termasuk furnitur kamar, linen, elektronik (TV, AC, kulkas minibar), peralatan dapur dan restoran, dekorasi, serta aset operasional lainnya — dapat diasuransikan sebagai bagian dari polis properti hotel. Nilai isi dihitung dan diasuransikan terpisah dari nilai bangunan. Untuk hotel yang baru direnovasi dengan furnitur premium, nilai isi bisa mencapai 30–50% dari nilai bangunan.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara mengklaim jika tamu cedera di area hotel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jika terjadi insiden yang melibatkan cedera tamu: (1) Prioritaskan penanganan medis korban; (2) Dokumentasikan kejadian dengan foto/video kondisi lokasi; (3) Buat berita acara kejadian; (4) Laporkan ke perusahaan asuransi dalam 3×24 jam melalui konsultan; (5) Jangan membuat pernyataan pengakuan kesalahan sebelum berkonsultasi dengan konsultan asuransi — ini bisa mempengaruhi proses klaim liability.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah asuransi hotel berlaku selama proses renovasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kondisi ini perlu dikomunikasikan ke perusahaan asuransi. Renovasi berskala besar bisa mempengaruhi validitas polis PAR karena mengubah struktur bangunan. Solusinya adalah menginformasikan rencana renovasi ke konsultan asuransi sebelum pekerjaan dimulai, sehingga bisa diatur endorsement atau cakupan tambahan selama masa konstruksi, seperti Contractor All Risk (CAR).",
      },
    },
    {
      "@type": "Question",
      name: "Apakah hotel bintang 1 dan guest house kecil juga perlu asuransi properti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, justru properti skala kecil yang paling rentan secara finansial. Pemilik guest house kecil umumnya tidak memiliki cadangan dana besar untuk menanggung kerusakan properti senilai ratusan juta rupiah. Satu kebakaran bisa menghapus seluruh aset yang dibangun bertahun-tahun. Premi asuransi untuk guest house kecil sangat terjangkau — mulai dari beberapa ratus ribu per tahun.",
      },
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const risikoHotel = [
  {
    icon: "🔥",
    label: "Kebakaran Operasional",
    desc: "Dapur hotel, laundry, instalasi listrik yang dibebani perangkat tamu, dan kepadatan operasional 24 jam secara signifikan meningkatkan probabilitas kebakaran dibanding properti biasa yang tidak beroperasi terus-menerus.",
  },
  {
    icon: "🌊",
    label: "Banjir & Gempa Merapi",
    desc: "Banyak hotel dan vila populer di Yogyakarta berada di kawasan yang secara geologis berisiko: lereng Merapi di Sleman, bantaran sungai di pusat kota, dan zona seismik aktif Bantul. Properti wisata justru cenderung dibangun di lokasi yang indah — yang sering berkorelasi dengan risiko alam lebih tinggi.",
  },
  {
    icon: "👤",
    label: "Tanggung Jawab kepada Tamu",
    desc: "Kolam renang licin, tangga tanpa pegangan memadai, lift bermasalah, atau instalasi listrik tidak standar — semua bisa menjadi dasar tuntutan hukum tamu yang cedera. Sebagai pemilik properti komersial, Anda bertanggung jawab secara hukum atas keselamatan tamu selama menginap.",
  },
  {
    icon: "🛁",
    label: "Kerusakan Fasilitas & Vandalisasi",
    desc: "Pergantian tamu setiap hari membawa risiko kerusakan perabot, pecahnya fasilitas kamar, kebocoran air akibat penyalahgunaan, dan vandalisme. Akumulasi kerugian kecil-kecil ini bisa menjadi beban besar tanpa perlindungan yang tepat.",
  },
  {
    icon: "⚡",
    label: "Gangguan Usaha (Business Interruption)",
    desc: "Kebakaran, bencana alam, atau kerusakan besar yang memaksa hotel tutup menghentikan seluruh pemasukan — sementara gaji karyawan, cicilan KPR, tagihan listrik, dan biaya operasional tetap berjalan. Business Interruption coverage adalah jaring pengaman finansial yang sangat kritis.",
  },
  {
    icon: "🔒",
    label: "Pencurian & Kehilangan Aset",
    desc: "Properti wisata dengan tamu bergantian adalah target potensial pencurian aset. Kehilangan elektronik kamar, perhiasan tamu yang ditempatkan di loker, atau uang tunai di brankas bisa menjadi risiko finansial yang tidak kecil.",
  },
];

const paketProduk = [
  {
    icon: "🏨",
    title: "Hotel Bintang 1–2 & Guest House",
    badge: "Paling Umum",
    badgeColor: "bg-blue-50 text-blue-800",
    produk: [
      "Asuransi Kebakaran bangunan + isi kamar & fasilitas",
      "Perluasan banjir — sesuai zona risiko lokasi hotel",
      "Perluasan gempa bumi — wajib untuk seluruh DIY",
      "Public Liability dasar untuk perlindungan klaim tamu",
      "Personal Accident untuk tamu dan karyawan",
    ],
    premi: "Estimasi mulai ~Rp 1,5–4 juta / tahun",
    rekomendasi:
      "Untuk hotel kelas menengah, guest house, dan penginapan budget di kawasan Malioboro, Prawirotaman, Seturan, dan Sleman Tengah.",
  },
  {
    icon: "🏩",
    title: "Hotel Bintang 3–4 & Boutique Resort",
    badge: "Direkomendasikan",
    badgeColor: "bg-gold/15 text-amber-800",
    produk: [
      "Property All Risk (PAR) komprehensif untuk bangunan & isi",
      "Perluasan banjir, gempa, angin topan, dan erupsi vulkanik",
      "Business Interruption (BI) — penggantian omzet selama penutupan",
      "Public Liability komprehensif — limit sesuai kapasitas tamu",
      "Asuransi uang & surat berharga untuk front office",
      "Employer's Liability untuk karyawan operasional",
    ],
    premi: "Estimasi mulai ~Rp 5–15 juta / tahun",
    rekomendasi:
      "Ideal untuk hotel bintang 3–4, boutique resort, dan properti wisata premium di kawasan Kaliurang, Prambanan, Prawirotaman, dan Bantul.",
  },
  {
    icon: "🏰",
    title: "Hotel Bintang 5 & Resort Mewah",
    badge: "Korporasi",
    badgeColor: "bg-navy/10 text-navy",
    produk: [
      "PAR dengan nilai pertanggungan tinggi (bangunan + ME + isi)",
      "Business Interruption dengan periode ganti rugi hingga 12 bulan",
      "Public & Products Liability limit besar",
      "Employer's Liability komprehensif seluruh staf",
      "Directors & Officers Liability (D&O) untuk manajemen",
      "Perluasan bencana alam lengkap termasuk tsunami & vulkanik",
      "Asuransi seni, koleksi, dan aset bernilai tinggi",
    ],
    premi: "Berdasarkan penilaian risiko individual",
    rekomendasi:
      "Untuk hotel bintang 5, resort mewah, dan properti dengan nilai aset di atas Rp 20 miliar yang memerlukan program asuransi terstruktur.",
  },
];

const checklist = [
  { ico: "🏗️", label: "Nilai bangunan (replacement cost, tidak termasuk tanah)" },
  { ico: "🛋️", label: "Nilai isi: furnitur, elektronik, linen, peralatan dapur & F&B" },
  { ico: "💰", label: "Estimasi omzet tahunan (untuk kalkulasi Business Interruption)" },
  { ico: "🛏️", label: "Jumlah kamar, kapasitas tamu, dan fasilitas tambahan" },
  { ico: "🏊", label: "Fasilitas khusus: kolam renang, spa, ballroom, restoran" },
  { ico: "📍", label: "Lokasi dan zona risiko bencana alam" },
  { ico: "👷", label: "Jumlah karyawan (untuk Employer's Liability)" },
  { ico: "📋", label: "Status kepemilikan: milik sendiri atau sewa jangka panjang" },
];

const perbedaanSkala = [
  {
    aspek: "Nilai Bangunan",
    kecil: "< Rp 2 Miliar",
    menengah: "Rp 2–10 Miliar",
    besar: "> Rp 10 Miliar",
  },
  {
    aspek: "Produk Utama",
    kecil: "Kebakaran + perluasan",
    menengah: "PAR + perluasan lengkap",
    besar: "PAR + BI + Liability komprehensif",
  },
  {
    aspek: "Business Interruption",
    kecil: "Opsional",
    menengah: "Sangat dianjurkan",
    besar: "Wajib",
  },
  {
    aspek: "Public Liability",
    kecil: "Limit Rp 1–2 miliar",
    menengah: "Limit Rp 2–5 miliar",
    besar: "Limit > Rp 5 miliar",
  },
  {
    aspek: "Premi Estimasi",
    kecil: "Rp 1,5–4 juta/tahun",
    menengah: "Rp 5–15 juta/tahun",
    besar: "Berdasarkan assessment",
  },
];

const prosesItems = [
  {
    step: "01",
    icon: "💬",
    label: "Konsultasi Awal",
    desc: "Ceritakan jenis hotel, lokasi, jumlah kamar, fasilitas, dan kebutuhan spesifik. Pak Rio akan merekomendasikan struktur perlindungan yang tepat.",
  },
  {
    step: "02",
    icon: "🔍",
    label: "Survei & Risk Assessment",
    desc: "Survei kondisi fisik bangunan, sistem keamanan kebakaran (APAR, sprinkler, hydrant), fasilitas berisiko (kolam renang, dapur), dan profil risiko lokasi.",
  },
  {
    step: "03",
    icon: "📋",
    label: "Penawaran dari Multi-Insurer",
    desc: "Kami bandingkan penawaran dari beberapa perusahaan asuransi berlisensi OJK — bukan hanya satu. Anda memilih yang paling sesuai nilai dan cakupannya.",
  },
  {
    step: "04",
    icon: "✅",
    label: "Polis Aktif & Pendampingan",
    desc: "Polis resmi terbit. Kami dampingi selama masa polis — termasuk pembaruan nilai pertanggungan dan pendampingan klaim penuh jika diperlukan.",
  },
];

const faqItems = [
  {
    q: "Produk asuransi apa yang paling dibutuhkan pemilik hotel di Yogyakarta?",
    a: "Ada tiga lapisan perlindungan minimum: (1) Property All Risk atau kebakaran + perluasan banjir & gempa untuk bangunan dan isi; (2) Public Liability untuk menanggung tuntutan hukum jika tamu cedera; dan (3) Business Interruption untuk menjaga arus kas jika hotel terpaksa tutup. Untuk hotel bintang 3 ke atas, ketiga lapisan ini adalah standar yang tidak bisa dikurangi.",
  },
  {
    q: "Apakah properti hotel wajib memiliki asuransi Public Liability?",
    a: "Secara hukum belum ada kewajiban formal, namun secara praktis Public Liability adalah keharusan bagi setiap properti yang menerima tamu umum. Jika tamu tergelincir di kolam renang atau mengalami kecelakaan di area hotel — Anda bisa dituntut secara hukum. Biaya pengacara, pengobatan, dan ganti rugi yang diputuskan pengadilan bisa mencapai ratusan juta hingga miliaran rupiah.",
  },
  {
    q: "Apa itu Business Interruption dan seberapa penting untuk hotel?",
    a: "Business Interruption (BI) menjamin kehilangan pendapatan hotel selama penutupan akibat klaim yang dijamin polis. Jika hotel tutup 3 bulan karena kebakaran, BI menanggung hilangnya omzet — sementara biaya tetap seperti gaji karyawan, cicilan, dan tagihan terus berjalan. Untuk hotel yang mengandalkan occupancy rate tinggi, BI adalah proteksi yang sangat kritis.",
  },
  {
    q: "Berapa estimasi premi asuransi untuk hotel bintang 2 di Yogyakarta?",
    a: "Sebagai gambaran kasar: hotel bintang 2 dengan nilai bangunan Rp 3 miliar, perluasan banjir dan gempa, tanpa BI — estimasi premi Rp 3–5 juta per tahun. Dengan Public Liability dan BI, total bisa Rp 8–15 juta per tahun tergantung limit pertanggungan. Hubungi kami untuk kalkulasi akurat sesuai properti Anda.",
  },
  {
    q: "Apakah perabot dan perlengkapan kamar hotel bisa ikut diasuransikan?",
    a: "Ya. Nilai isi bangunan — furnitur kamar, linen, elektronik, peralatan dapur dan restoran, dekorasi, dan aset operasional lainnya — dapat diasuransikan sebagai bagian dari polis properti hotel. Nilai isi dihitung dan diasuransikan terpisah dari nilai bangunan. Untuk hotel yang baru direnovasi dengan furnitur premium, nilai isi bisa mencapai 30–50% dari nilai bangunan.",
  },
  {
    q: "Bagaimana cara mengklaim jika tamu cedera di area hotel?",
    a: "Prioritaskan penanganan medis korban terlebih dahulu. Dokumentasikan kondisi lokasi kejadian dengan foto/video. Buat berita acara kejadian yang detail. Laporkan ke konsultan asuransi dalam 3×24 jam. Jangan membuat pernyataan pengakuan kesalahan sebelum berkonsultasi — ini bisa mempengaruhi proses klaim liability. Konsultan kami mendampingi seluruh proses.",
  },
  {
    q: "Apakah asuransi hotel berlaku selama proses renovasi?",
    a: "Renovasi berskala besar perlu dikomunikasikan ke perusahaan asuransi karena mengubah struktur bangunan yang dilindungi. Informasikan rencana renovasi sebelum pekerjaan dimulai. Solusinya bisa berupa endorsement khusus atau tambahan Contractor All Risk (CAR) selama masa konstruksi agar tidak ada celah perlindungan.",
  },
  {
    q: "Apakah guest house dan hotel kecil juga perlu asuransi properti?",
    a: "Ya, justru properti skala kecil yang paling rentan secara finansial. Pemilik guest house umumnya tidak punya cadangan dana besar untuk menanggung kerusakan ratusan juta rupiah. Satu kebakaran bisa menghapus semua yang dibangun bertahun-tahun. Premi asuransi untuk guest house kecil sangat terjangkau — mulai dari beberapa ratus ribu per tahun.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HotelVilaPage() {
  return (
    <PropertyLayout
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Hotel & Vila" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)",
          }}
        />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">
          🏨
        </div>
        <div className="relative z-10 max-w-3xl">
          <Link
            href="/asuransi-properti"
            className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline"
          >
            ← Asuransi Properti
          </Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Hotel &amp; Vila · Wisata Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Hotel
            <br />
            <em className="not-italic text-gold">&amp; Guest House Wisata</em>
            <br />
            di Yogyakarta
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[540px] mb-8">
            Yogyakarta menyambut 10+ juta wisatawan setiap tahun. Di balik keramaian
            itu ada risiko yang harus dikelola dengan cermat — kebakaran operasional,
            gempa dan banjir, hingga tuntutan hukum dari tamu yang cedera di properti
            Anda. Satu polis yang tepat bisa menyelamatkan bisnis Anda.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline"
            >
              💬 Konsultasi Gratis
            </a>
            <a
              href="#paket"
              className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline"
            >
              Lihat Paket Produk →
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
            {[
              { num: "10Jt+", lbl: "Wisatawan/Tahun ke DIY" },
              { num: "3 Lapis", lbl: "Perlindungan Hotel" },
              { num: "Gratis", lbl: "Konsultasi & Analisis Risiko" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-heading text-gold text-xl font-bold">{s.num}</div>
                <div className="text-white/45 text-xs mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 LAPIS PERLINDUNGAN ─────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
              Kerangka Perlindungan
            </div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
              3 Lapis Perlindungan
              <br />
              yang Wajib Dimiliki Hotel
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                icon: "🏗️",
                judul: "Proteksi Aset Fisik",
                produk: "PAR / Asuransi Kebakaran",
                desc: "Melindungi bangunan dan isi hotel dari kerusakan fisik — kebakaran, banjir, gempa, angin, vandalisasi, dan risiko fisik lainnya.",
                wajib: true,
              },
              {
                num: "02",
                icon: "👤",
                judul: "Proteksi Kewajiban Hukum",
                produk: "Public Liability",
                desc: "Melindungi dari tuntutan hukum tamu, pengunjung, atau pihak ketiga yang mengalami cedera atau kerugian di properti hotel Anda.",
                wajib: true,
              },
              {
                num: "03",
                icon: "💰",
                judul: "Proteksi Pendapatan Usaha",
                produk: "Business Interruption",
                desc: "Menjamin kehilangan omzet selama hotel terpaksa tutup akibat klaim yang dijamin — agar bisnis tetap bisa membayar gaji dan kewajiban.",
                wajib: false,
              },
            ].map((l) => (
              <div
                key={l.num}
                className="bg-white rounded-card p-6 border border-black/6 relative overflow-hidden"
              >
                <div className="absolute top-4 right-5 font-heading text-[3rem] font-bold text-navy/6">
                  {l.num}
                </div>
                <div className="text-3xl mb-3">{l.icon}</div>
                <div className="font-heading text-navy font-bold text-[1rem] mb-1">
                  {l.judul}
                </div>
                <div className="text-gold text-xs font-semibold mb-3">{l.produk}</div>
                <p className="text-sm leading-[1.75] text-[#64748B] mb-4">{l.desc}</p>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    l.wajib
                      ? "bg-red-50 text-red-700"
                      : "bg-gold/10 text-amber-800"
                  }`}
                >
                  {l.wajib ? "⚠️ Wajib" : "✓ Sangat Dianjurkan"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RISIKO SPESIFIK ──────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Risiko Spesifik
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            6 Risiko Unik yang Dihadapi
            <br />
            Properti Wisata di Yogyakarta
          </h2>
          <p className="text-base text-[#64748B] max-w-[500px] mx-auto mt-3">
            Hotel dan vila memiliki profil risiko yang jauh lebih kompleks dari properti
            biasa karena faktor tamu, operasional 24 jam, dan fasilitas yang beragam
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {risikoHotel.map((r) => (
            <div
              key={r.label}
              className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">
                {r.label}
              </div>
              <p className="text-base leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PAKET PRODUK ─────────────────────────────────────────────────── */}
      <section id="paket" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Solusi Produk
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Paket Asuransi Sesuai
            <br />
            Skala & Kelas Hotel Anda
          </h2>
        </div>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {paketProduk.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-card p-8 border border-black/6 grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 items-start"
            >
              <div className="text-[3.5rem] text-center md:text-left">{p.icon}</div>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-3">
                  <div className="font-heading text-navy font-bold text-[1.2rem]">
                    {p.title}
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${p.badgeColor}`}
                  >
                    {p.badge}
                  </span>
                </div>
                <ul className="flex flex-col gap-2 mb-5">
                  {p.produk.map((pr) => (
                    <li key={pr} className="flex gap-2 text-base text-navy2">
                      <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>
                      {pr}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="bg-gold/8 border border-gold/20 rounded-lg px-4 py-2.5 text-xs text-navy2 flex-1">
                    <strong className="text-navy">💡 Cocok untuk:</strong>{" "}
                    {p.rekomendasi}
                  </div>
                  <div className="bg-cream border border-black/8 rounded-lg px-4 py-2.5 text-xs text-navy flex items-center gap-1 font-semibold whitespace-nowrap">
                    <span className="text-gold">◆</span> {p.premi}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PERBANDINGAN SKALA ───────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Panduan Memilih
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Rekomendasi Berdasarkan
            <br />
            Skala Properti
          </h2>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse text-sm min-w-[560px]">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">
                  Aspek
                </th>
                <th className="text-left px-4 py-3 font-semibold">
                  Hotel Kecil / Guest House
                </th>
                <th className="text-left px-4 py-3 font-semibold">Hotel Menengah</th>
                <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold">
                  Hotel Besar / Resort
                </th>
              </tr>
            </thead>
            <tbody>
              {perbedaanSkala.map((r, i) => (
                <tr key={r.aspek} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                  <td className="px-4 py-3 font-semibold text-navy">{r.aspek}</td>
                  <td className="px-4 py-3 text-[#475569]">{r.kecil}</td>
                  <td className="px-4 py-3 text-[#475569]">{r.menengah}</td>
                  <td className="px-4 py-3 text-green-700 font-medium">{r.besar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CHECKLIST & LIABILITY ─────────────────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
              Persiapan Konsultasi
            </div>
            <h2 className="font-heading text-[clamp(1.4rem,2vw,2rem)] text-navy mb-4">
              Data yang Perlu Disiapkan
              <br />
              untuk Penawaran Akurat
            </h2>
            <p className="text-sm leading-relaxed text-[#64748B] mb-5">
              Semakin lengkap data yang Anda berikan, semakin akurat penawaran yang bisa
              kami siapkan. Tidak perlu semuanya siap sebelum konsultasi — kami bisa
              bantu memandu prosesnya.
            </p>
            <ul className="flex flex-col gap-3">
              {checklist.map((c) => (
                <li key={c.label} className="flex gap-3 text-sm text-navy2 items-start">
                  <span className="text-xl flex-shrink-0 leading-tight">{c.ico}</span>
                  <span className="leading-snug">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-navy rounded-card p-6 text-white">
              <div className="font-heading text-gold text-base font-semibold mb-3">
                ⚖️ Mengapa Public Liability Tidak Bisa Diabaikan?
              </div>
              <p className="text-xs leading-relaxed text-white/75 mb-4">
                Sebagai pemilik properti komersial, Anda memiliki kewajiban hukum
                (duty of care) untuk memastikan keselamatan tamu. Jika tamu cedera
                karena kelalaian fasilitas — kolam renang licin, lift bermasalah,
                instalasi listrik tidak standar — Anda bisa dituntut dan diwajibkan
                membayar ganti rugi yang nilainya bisa jauh melebihi premi asuransi
                selama puluhan tahun.
              </p>
              <Link
                href="/asuransi-liability/public-liability"
                className="block text-center bg-gold text-navy py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all"
              >
                Pelajari Public Liability →
              </Link>
            </div>
            <div className="bg-white rounded-card p-6 border border-black/6">
              <div className="font-heading text-navy text-base font-semibold mb-3">
                💼 Employer&apos;s Liability untuk Karyawan Hotel
              </div>
              <p className="text-xs leading-relaxed text-[#64748B] mb-4">
                Hotel adalah bisnis padat karya. Karyawan yang mengalami kecelakaan
                kerja — koki terluka di dapur, housekeeping terpeleset — berhak atas
                kompensasi yang menjadi tanggung jawab pengusaha. Employer&apos;s Liability
                melindungi Anda dari tuntutan karyawan yang mengalami insiden kerja.
              </p>
              <Link
                href="/asuransi-liability/employer-liability"
                className="block text-center border border-navy/20 text-navy py-2.5 rounded-lg font-semibold text-sm no-underline hover:border-gold hover:text-gold transition-all"
              >
                Pelajari Employer&apos;s Liability →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROSES ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Alur Konsultasi
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Dari Konsultasi Hingga
            <br />
            Polis Aktif Melindungi Hotel
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {prosesItems.map((p) => (
            <div
              key={p.step}
              className="bg-cream rounded-card p-6 text-center border border-black/5 relative"
            >
              <div className="absolute top-4 right-5 font-heading text-[2rem] font-bold text-navy/8">
                {p.step}
              </div>
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">
                {p.label}
              </div>
              <p className="text-base leading-relaxed text-[#64748B]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            FAQ
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Pertanyaan Seputar
            <br />
            Asuransi Hotel &amp; Vila
          </h2>
          <p className="text-base text-[#64748B] max-w-[500px] mx-auto mt-3">
            Pertanyaan yang paling sering diajukan pemilik hotel dan properti wisata
            di Yogyakarta
          </p>
        </div>
        <div className="max-w-[740px] mx-auto">
          {faqItems.map((f, i) => (
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}
                <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-base leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="max-w-[740px] mx-auto mt-8 bg-navy rounded-xl p-6 text-center">
          <div className="font-heading text-white text-base font-semibold mb-2">
            Punya Pertanyaan Spesifik tentang Hotel Anda?
          </div>
          <p className="text-white/70 text-sm mb-4">
            Konsultasi gratis dengan Pak Rio — spesialis asuransi properti wisata Yogyakarta.
          </p>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all"
          >
            💬 Tanya via WhatsApp
          </a>
        </div>
      </section>

      {/* ── INTERNAL LINKS ───────────────────────────────────────────────── */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">
            Produk &amp; Artikel Terkait
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/asuransi-properti/property-all-risk"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🏢 Property All Risk →
            </Link>
            <Link
              href="/asuransi-properti/kebakaran"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🔥 Asuransi Kebakaran →
            </Link>
            <Link
              href="/asuransi-properti/banjir-gempa"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🌊 Perluasan Banjir &amp; Gempa →
            </Link>
            <Link
              href="/asuransi-properti/vila-homestay"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🌿 Vila &amp; Homestay →
            </Link>
            <Link
              href="/asuransi-liability/public-liability"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🛡️ Public Liability →
            </Link>
            <Link
              href="/asuransi-liability/employer-liability"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              👷 Employer&apos;s Liability →
            </Link>
            <Link
              href="/artikel/asuransi-vila-homestay-jogja"
              className="bg-gold/10 border border-gold/30 text-gold font-semibold text-sm px-4 py-2 rounded-full hover:bg-gold/20 transition-colors no-underline"
            >
              📖 Panduan Asuransi Vila Jogja →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-5xl mb-4">🏨</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Sambut Tamu dengan Tenang,
            <br />
            Properti Terlindungi Penuh
          </h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">
            Konsultasi gratis khusus properti wisata Yogyakarta — kami memahami keunikan
            risiko hotel, vila, dan penginapan di DIY dan siap merekomendasikan solusi
            yang paling efisien untuk bisnis Anda.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
            >
              💬 WhatsApp Pak Rio Sekarang
            </a>
            <a
              href={`mailto:${KONTAK.email}`}
              className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all"
            >
              ✉️ Kirim Email
            </a>
          </div>
        </div>
      </section>
    </PropertyLayout>
  );
}
