import type { Metadata } from "next";
import Link from "next/link";
import PropertyLayout from "@/components/properti/PropertyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Vila & Homestay Jogja – Properti Wisata Airbnb DIY",
  description:
    "Asuransi properti khusus vila dan homestay di Yogyakarta. Proteksi kebakaran, banjir, gempa Merapi, kerusakan tamu, hingga liability. Cocok untuk host Airbnb & Tiket.com. Konsultasi gratis.",
  keywords:
    "asuransi vila jogja, asuransi homestay yogyakarta, asuransi airbnb jogja, asuransi properti wisata yogyakarta, asuransi vila kaliurang, asuransi homestay sleman, proteksi properti sewa harian jogja",
  alternates: {
    canonical: "https://asuransijogja.biz.id/asuransi-properti/vila-homestay",
  },
  openGraph: {
    title: "Asuransi Vila & Homestay Jogja – Proteksi Properti Wisata Airbnb",
    description:
      "Lindungi vila dan homestay Anda di Yogyakarta dari kebakaran, banjir, gempa, hingga kerusakan tamu. Konsultasi gratis.",
    url: "https://asuransijogja.biz.id/asuransi-properti/vila-homestay",
    type: "website",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og/og-properti.png", width: 1200, height: 630, alt: "Asuransi Vila & Homestay Jogja – Proteksi Properti Wisata Airbnb" }],
  },
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const risikoVila = [
  {
    icon: "🔥",
    label: "Kebakaran & FLEXAS",
    desc: "Tamu yang tidak familiar dengan kompor gas, pemanas air, atau instalasi listrik lokal meningkatkan risiko kebakaran. Pergantian tamu setiap 1–3 hari membuat pengawasan lebih sulit dibanding hunian tetap.",
  },
  {
    icon: "🌋",
    label: "Gempa & Erupsi Merapi",
    desc: "Vila di kawasan Kaliurang, Pakem, dan Cangkringan berada kurang dari 20 km dari puncak Merapi. Gempa tektonik dan erupsi vulkanik adalah risiko riil yang tidak boleh diabaikan pemilik properti di zona ini.",
  },
  {
    icon: "🌊",
    label: "Banjir & Lahar Dingin",
    desc: "Sungai Boyong, Gendol, dan Kuning yang berhulu di Merapi bisa membawa lahar dingin saat hujan lebat pasca-erupsi. Vila di sepanjang daerah aliran sungai ini masuk zona risiko tinggi.",
  },
  {
    icon: "💥",
    label: "Kerusakan oleh Tamu",
    desc: "Perabot rusak, kaca pecah, kolam renang kotor, atau AC dirusak adalah risiko operasional harian yang dihadapi setiap host. Beberapa produk menyediakan perluasan khusus untuk kerusakan yang disebabkan penghuni sementara.",
  },
  {
    icon: "⚡",
    label: "Gangguan Usaha (Business Interruption)",
    desc: "Jika vila terpaksa tutup karena kebakaran atau bencana, pendapatan sewa harian berhenti — sementara cicilan KPR, gaji cleaning service, dan tagihan tetap berjalan. BI cover bisa menggantikan kehilangan omzet selama masa perbaikan.",
  },
  {
    icon: "👤",
    label: "Tanggung Jawab Tamu Cedera",
    desc: "Tamu yang tergelincir di kolam renang, terpeleset di tangga licin, atau kesetrum dari instalasi listrik bisa mengajukan tuntutan hukum ke pemilik properti. Public Liability adalah jaring pengaman yang wajib dimiliki host.",
  },
];

const kawasanVila = [
  {
    zona: "Kaliurang & Pakem (Sleman Utara)",
    risiko: ["Erupsi Merapi", "Lahar dingin", "Gempa"],
    unggulan: "Vila dengan pemandangan gunung, banyak diminati wisatawan alam",
    rekomendasi: "PAR + perluasan gempa/vulkanik + banjir lahar",
    levelColor: "bg-red-100 text-red-700",
    level: "Risiko Tinggi",
  },
  {
    zona: "Prambanan & Kalasan (Sleman Timur)",
    risiko: ["Gempa tektonik", "Banjir musiman"],
    unggulan: "Dekat candi Prambanan, populer wisata budaya",
    rekomendasi: "Kebakaran + perluasan gempa + banjir",
    levelColor: "bg-orange-100 text-orange-700",
    level: "Risiko Sedang-Tinggi",
  },
  {
    zona: "Parangtritis & Sanden (Bantul Selatan)",
    risiko: ["Angin pantai", "Gempa", "Tsunami (potensi)"],
    unggulan: "Vila tepi pantai, sunset views, wisata alam Selatan",
    rekomendasi: "PAR + gempa + angin topan",
    levelColor: "bg-orange-100 text-orange-700",
    level: "Risiko Sedang-Tinggi",
  },
  {
    zona: "Prawirotaman & Kota Yogyakarta",
    risiko: ["Kebakaran kawasan padat", "Banjir genangan"],
    unggulan: "Homestay artistik, dekat Malioboro, segmen backpacker & couple",
    rekomendasi: "Kebakaran + perluasan banjir + public liability",
    levelColor: "bg-yellow-100 text-yellow-700",
    level: "Risiko Sedang",
  },
  {
    zona: "Gunungkidul (Wonosari & sekitarnya)",
    risiko: ["Gempa tektonik", "Angin kencang"],
    unggulan: "Vila konsep alam terbuka, pantai tersembunyi, glamping",
    rekomendasi: "Kebakaran + perluasan gempa + angin topan",
    levelColor: "bg-yellow-100 text-yellow-700",
    level: "Risiko Sedang",
  },
];

const paketProduk = [
  {
    icon: "🌿",
    title: "Homestay & Penginapan Kecil (1–5 Kamar)",
    badge: "Paling Populer",
    badgeColor: "bg-green-100 text-green-800",
    produk: [
      "Asuransi Kebakaran bangunan + isi (perabot, elektronik, linen)",
      "Perluasan gempa bumi — wajib untuk DIY",
      "Perluasan banjir sesuai zona risiko lokasi",
      "Personal Accident untuk penghuni sementara",
    ],
    premi: "Mulai ~Rp 450.000 / tahun",
    rekomendasi:
      "Cocok untuk homestay artistik di Prawirotaman, guesthouse Kota Yogya, dan penginapan keluarga kecil di kawasan semi-rural.",
  },
  {
    icon: "🏡",
    title: "Vila Mandiri (6–15 Kamar / Satu Kompleks)",
    badge: "Direkomendasikan",
    badgeColor: "bg-gold/15 text-amber-800",
    produk: [
      "Property All Risk komprehensif untuk bangunan + isi",
      "Perluasan gempa, banjir, angin topan, dan letusan vulkanik",
      "Public Liability — perlindungan jika tamu cedera",
      "Asuransi isi bangunan: furnitur, kolam renang, peralatan dapur",
      "Opsi Business Interruption untuk kehilangan pendapatan",
    ],
    premi: "Mulai ~Rp 1.200.000 / tahun",
    rekomendasi:
      "Ideal untuk vila dengan kolam renang, di kawasan Kaliurang, Pakem, Prambanan, atau tepi pantai Bantul.",
  },
  {
    icon: "🏰",
    title: "Vila Premium & Resort Butik (15+ Kamar / Multi-Unit)",
    badge: "Korporasi",
    badgeColor: "bg-navy/10 text-navy",
    produk: [
      "Property All Risk dengan nilai pertanggungan tinggi",
      "Business Interruption (BI) — penggantian omzet selama perbaikan",
      "Public & Products Liability komprehensif",
      "Asuransi uang dan surat berharga",
      "Employer's Liability untuk karyawan operasional",
      "Perluasan bencana alam lengkap (gempa, banjir, vulkanik, tsunami)",
    ],
    premi: "Berdasarkan penilaian risiko",
    rekomendasi:
      "Untuk resort butik, vila multi-unit dengan pengelolaan profesional, atau properti yang dikelola operator wisata.",
  },
];

const perbedaanHost = [
  {
    aspek: "Status Properti",
    hunianTetap: "Penghuni dikenal, risiko terprediksi",
    vilaHomestay: "Tamu berganti setiap hari, risiko lebih tinggi",
  },
  {
    aspek: "Jenis Asuransi",
    hunianTetap: "Kebakaran standar sudah cukup",
    vilaHomestay: "Butuh PAR atau kebakaran + perluasan lengkap",
  },
  {
    aspek: "Liability Tamu",
    hunianTetap: "Tidak wajib",
    vilaHomestay: "Public Liability sangat dianjurkan",
  },
  {
    aspek: "Business Interruption",
    hunianTetap: "Tidak relevan",
    vilaHomestay: "Penting untuk menjaga arus kas",
  },
  {
    aspek: "Nilai Isi Bangunan",
    hunianTetap: "Milik sendiri, mudah diestimasi",
    vilaHomestay: "Termasuk furnitur operasional + peralatan tamu",
  },
];

const prosesItems = [
  {
    step: "01",
    icon: "💬",
    label: "Konsultasi Risiko Lokasi",
    desc: "Ceritakan alamat vila/homestay, jumlah kamar, fasilitas, dan platform booking yang digunakan (Airbnb, Tiket.com, dll)",
  },
  {
    step: "02",
    icon: "📋",
    label: "Analisis & Rekomendasi",
    desc: "Kami analisis profil risiko lokasi, hitung nilai pertanggungan yang tepat, dan rekomendasikan produk dari perusahaan asuransi terpercaya",
  },
  {
    step: "03",
    icon: "📄",
    label: "Penawaran Resmi",
    desc: "Terima perbandingan penawaran dari beberapa insurer berlisensi OJK, lengkap dengan penjelasan klausul pengecualian",
  },
  {
    step: "04",
    icon: "✅",
    label: "Polis Terbit & Aktif",
    desc: "Dokumen polis resmi terbit dalam 1–3 hari kerja. Properti Anda langsung terlindungi.",
  },
];

const faqItems = [
  {
    q: "Apakah asuransi rumah tinggal biasa cukup untuk vila yang disewakan harian?",
    a: "Tidak. Polis asuransi kebakaran standar untuk hunian biasanya memiliki klausul yang membatasi atau membatalkan jaminan jika properti digunakan untuk kegiatan komersial atau disewakan kepada pihak ketiga. Vila dan homestay yang disewakan harian memerlukan produk khusus atau endorsement komersial. Konsultasikan status properti Anda agar polis yang Anda beli benar-benar valid saat klaim.",
  },
  {
    q: "Apakah kerusakan yang disebabkan tamu bisa diklaim?",
    a: "Tergantung produk yang dipilih. Asuransi kebakaran standar umumnya tidak menjamin kerusakan akibat ulah penghuni. Beberapa produk PAR atau asuransi khusus properti sewa menyediakan perluasan 'tenant's damage' atau 'malicious damage'. Diskusikan kebutuhan ini saat konsultasi agar kami bisa merekomendasikan produk yang tepat.",
  },
  {
    q: "Berapa estimasi premi untuk vila kecil dengan 3 kamar di Kaliurang?",
    a: "Untuk bangunan beton (Kelas 1) dengan nilai bangunan Rp 600 juta, perluasan gempa dan banjir, estimasi premi sekitar Rp 900.000 – Rp 1.200.000 per tahun. Angka ini sangat terjangkau dibanding pendapatan sewa harian yang bisa mencapai jutaan rupiah per bulan. Gunakan kalkulator kami atau hubungi langsung untuk estimasi lebih akurat.",
  },
  {
    q: "Apakah platform sewa (Airbnb, Tiket.com) sudah menyediakan proteksi asuransi?",
    a: "Airbnb menyediakan AirCover yang mencakup kerusakan properti hingga nilai tertentu, namun cakupannya terbatas dan tidak setara dengan polis asuransi properti yang komprehensif. Tiket.com dan platform lokal lainnya umumnya tidak menyediakan proteksi properti untuk host. Asuransi properti mandiri tetap diperlukan sebagai perlindungan utama.",
  },
  {
    q: "Bagaimana cara mendaftarkan asuransi untuk vila yang dikelola operator pihak ketiga?",
    a: "Polis tetap diterbitkan atas nama pemilik properti (sebagai tertanggung utama). Jika ada operator atau manajemen properti, bisa ditambahkan sebagai tertanggung tambahan. Proses sama — hubungi kami dengan dokumen kepemilikan dan data properti.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function VilaHomestayPage() {
  return (
    <PropertyLayout
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Vila & Homestay" },
      ]}
    >
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
          🌿
        </div>
        <div className="relative z-10 max-w-3xl">
          <Link
            href="/asuransi-properti"
            className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline"
          >
            ← Asuransi Properti
          </Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Vila & Homestay · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Vila &amp; Homestay
            <br />
            <em className="not-italic text-gold">Properti Wisata Sewa Harian</em>
            <br />
            di Yogyakarta
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[540px] mb-8">
            Vila dan homestay memiliki profil risiko berbeda dari hunian biasa — ada tamu
            asing setiap hari, operasional tanpa jeda, dan potensi klaim dari tamu yang
            cedera. Pastikan properti sewa Anda dilindungi produk yang tepat, bukan polis
            rumah tinggal biasa.
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
              { num: "3 Paket", lbl: "Sesuai Skala Properti" },
              { num: "PAR Ready", lbl: "Proteksi Terluas" },
              { num: "Gratis", lbl: "Analisis Risiko Lokasi" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-heading text-gold text-xl font-bold">{s.num}</div>
                <div className="text-white/60 text-xs mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENGAPA PERLU ASURANSI KHUSUS ──────────────────────────────── */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
              Penting Dipahami
            </div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
              Asuransi Rumah Tinggal Biasa
              <br />
              Tidak Cukup untuk Vila Sewa
            </h2>
          </div>
          <div className="bg-white rounded-card p-6 border border-black/6 mb-6">
            <div className="font-heading text-navy font-bold text-base mb-4 pb-3 border-b border-black/8">
              Perbedaan Vila/Homestay Sewa vs Hunian Tetap
            </div>
            <div className="flex flex-col gap-0">
              {perbedaanHost.map((r, i) => (
                <div
                  key={r.aspek}
                  className={`grid grid-cols-[120px_1fr_1fr] gap-3 py-3 text-xs ${
                    i < perbedaanHost.length - 1 ? "border-b border-black/5" : ""
                  }`}
                >
                  <span className="font-semibold text-navy">{r.aspek}</span>
                  <span className="text-[#475569]">{r.hunianTetap}</span>
                  <span className="text-gold font-medium">{r.vilaHomestay}</span>
                </div>
              ))}
              <div className="grid grid-cols-[120px_1fr_1fr] gap-3 mt-3 pt-3 border-t border-black/8 text-[0.7rem]">
                <span className="text-[#5A6472]">Aspek</span>
                <span className="text-[#475569] font-semibold">Hunian Tetap</span>
                <span className="text-gold font-semibold">Vila / Homestay ✓</span>
              </div>
            </div>
          </div>
          <div className="bg-navy rounded-xl p-5 text-white">
            <div className="font-heading text-gold text-sm font-semibold mb-2">
              ⚠️ Risiko Polis Tidak Valid
            </div>
            <p className="text-xs leading-relaxed text-white/75">
              Banyak polis kebakaran residensial memiliki klausul yang{" "}
              <strong className="text-gold">membatalkan jaminan</strong> jika properti
              digunakan untuk kegiatan komersial termasuk penyewaan harian. Artinya, jika
              Anda mengklaim kebakaran pada vila yang ternyata terdaftar di Airbnb tanpa
              endorsement komersial, klaim bisa ditolak sepenuhnya. Konsultasikan status
              properti Anda sebelum membeli polis.
            </p>
          </div>
        </div>
      </section>

      {/* ── RISIKO SPESIFIK ─────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Risiko Spesifik
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            6 Risiko yang Wajib
            <br />
            Diantisipasi Pemilik Vila di Jogja
          </h2>
          <p className="text-base text-[#475569] max-w-[480px] mx-auto mt-3">
            Vila dan homestay memiliki eksposur risiko yang jauh lebih kompleks dibanding
            properti hunian biasa
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {risikoVila.map((r) => (
            <div
              key={r.label}
              className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">
                {r.label}
              </div>
              <p className="text-base leading-relaxed text-[#475569]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PAKET PRODUK ────────────────────────────────────────────────── */}
      <section id="paket" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Solusi Produk
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Paket Asuransi
            <br />
            Sesuai Skala Vila Anda
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
                <ul className="flex flex-col gap-2 mb-4">
                  {p.produk.map((pr) => (
                    <li key={pr} className="flex gap-2 text-base text-navy2">
                      <span className="text-gold font-bold flex-shrink-0">✓</span>
                      {pr}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="bg-gold/8 border border-gold/20 rounded-lg px-4 py-2.5 text-xs text-navy2 flex-1">
                    <strong className="text-navy">💡 Cocok untuk:</strong> {p.rekomendasi}
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

      {/* ── PETA KAWASAN VILA ───────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Peta Risiko
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Rekomendasi Produk
            <br />
            Berdasarkan Kawasan Vila di DIY
          </h2>
          <p className="text-base text-[#475569] max-w-[500px] mx-auto mt-3">
            Profil risiko berbeda di setiap kawasan — lokasi menentukan jenis perluasan
            yang paling relevan untuk properti Anda
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {kawasanVila.map((z) => (
            <div
              key={z.zona}
              className="bg-cream rounded-card p-6 border border-black/6 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center"
            >
              <div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1">
                  📍 {z.zona}
                </div>
                <p className="text-xs text-[#475569]">{z.unggulan}</p>
              </div>
              <div className="hidden lg:block text-gold/40 text-xl text-center">|</div>
              <div className="flex flex-wrap gap-1.5">
                {z.risiko.map((r) => (
                  <span
                    key={r}
                    className="bg-red-50 border border-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full"
                  >
                    {r}
                  </span>
                ))}
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${z.levelColor}`}
                >
                  {z.level}
                </span>
              </div>
              <div className="hidden lg:block text-gold text-xl text-center">→</div>
              <div className="bg-gold/8 border border-gold/20 rounded-lg p-3">
                <div className="text-xs text-[#475569] mb-1 font-semibold">
                  Rekomendasi:
                </div>
                <div className="text-xs text-navy2 font-medium">{z.rekomendasi}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-[#475569] mb-4">
            Tidak yakin zona risiko vila Anda? Konsultasi gratis dengan Pak Rio.
          </p>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm inline-block no-underline hover:bg-gold2 transition-all"
          >
            💬 Cek Risiko Lokasi Saya
          </a>
        </div>
      </section>

      {/* ── PROSES ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Alur
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Dari Konsultasi
            <br />
            Hingga Polis Aktif
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {prosesItems.map((p) => (
            <div
              key={p.step}
              className="bg-white rounded-card p-6 text-center border border-black/5 relative"
            >
              <div className="absolute top-4 right-5 font-heading text-[2rem] font-bold text-navy/8">
                {p.step}
              </div>
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">
                {p.label}
              </div>
              <p className="text-base leading-relaxed text-[#475569]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            FAQ
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Pertanyaan Seputar
            <br />
            Asuransi Vila &amp; Homestay
          </h2>
        </div>
        <div className="max-w-[700px] mx-auto">
          {faqItems.map((f, i) => (
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}
                <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-base leading-[1.78] text-[#475569] pb-4">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── INTERNAL LINKS ──────────────────────────────────────────────── */}
      <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">
            Produk &amp; Artikel Terkait
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/asuransi-properti"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🏠 Semua Asuransi Properti →
            </Link>
            <Link
              href="/asuransi-properti/property-all-risk"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🏢 Property All Risk (PAR) →
            </Link>
            <Link
              href="/asuransi-properti/kebakaran"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🔥 Asuransi Kebakaran →
            </Link>
            <Link
              href="/asuransi-properti/banjir-gempa"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🌊 Perluasan Banjir &amp; Gempa →
            </Link>
            <Link
              href="/asuransi-liability/public-liability"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🛡️ Public Liability →
            </Link>
            <Link
              href="/artikel/asuransi-vila-homestay-jogja"
              className="bg-gold/10 border border-gold/30 text-gold font-semibold text-sm px-4 py-2 rounded-full hover:bg-gold/20 transition-colors no-underline"
            >
              📖 Panduan Lengkap Asuransi Vila Jogja →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-5xl mb-4">🌿</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Tamu Boleh Berganti,
            <br />
            Aset Anda Harus Terlindungi
          </h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">
            Konsultasi gratis khusus pemilik vila dan homestay di Yogyakarta. Analisis
            risiko lokasi, rekomendasi produk yang tepat, dan pendampingan klaim jika
            diperlukan — semuanya tanpa biaya.
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
