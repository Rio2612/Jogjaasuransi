import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Mobil Listrik (EV) di Jogja – Premi, Klaim & Pilihan Terbaik",
  description:
    "Panduan lengkap asuransi kendaraan listrik di Yogyakarta. Tarif OJK untuk EV, cakupan baterai, perbedaan dengan asuransi konvensional, dan cara klaim. Konsultasi gratis.",
  keywords:
    "asuransi mobil listrik, asuransi EV Indonesia, premi asuransi kendaraan listrik OJK, asuransi Wuling EV, asuransi BYD, asuransi mobil listrik Jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/asuransi-mobil-listrik" },
  openGraph: {
    title: "Asuransi Mobil Listrik (EV) — Panduan Lengkap 2026",
    description:
      "Tarif OJK khusus EV, cakupan baterai, own risk, dan panduan memilih asuransi kendaraan listrik yang tepat.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-mobil-listrik",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi Mobil Listrik (EV) — Panduan Lengkap 2026" }],
  },
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Mobil Listrik (EV) di Jogja – Premi, Klaim & Pilihan Terbaik",
  description:
    "Panduan lengkap asuransi kendaraan listrik di Yogyakarta berdasarkan tarif OJK terbaru.",
  url: "https://asuransijogja.biz.id/artikel/asuransi-mobil-listrik",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  author: { "@type": "Person", name: "Rio Mardiansyah", url: "https://asuransijogja.biz.id" },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Jogja",
    url: "https://asuransijogja.biz.id",
  },
  mainEntityOfPage: "https://asuransijogja.biz.id/artikel/asuransi-mobil-listrik",
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah baterai kendaraan listrik yang rusak ditanggung asuransi?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tergantung penyebab kerusakannya. Baterai EV yang rusak akibat kecelakaan atau benturan fisik umumnya ditanggung oleh asuransi All Risk. Namun kerusakan baterai akibat pemakaian normal (wear and tear), degradasi kapasitas, atau cacat produksi biasanya tidak ditanggung dan merupakan tanggung jawab garansi manufaktur.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah premi asuransi mobil listrik lebih mahal dari mobil BBM?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ya, sedikit lebih tinggi. OJK menetapkan tarif batas atas asuransi EV sekitar 10% lebih tinggi dari kendaraan konvensional di kategori harga yang sama. Ini mencerminkan biaya perbaikan komponen EV yang lebih mahal, terutama sistem baterai dan drivetrain elektrik.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa own risk (OR) untuk kendaraan listrik?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Own Risk untuk kendaraan listrik adalah Rp 500.000 per kejadian klaim, lebih tinggi dari kendaraan konvensional yang Rp 300.000 per kejadian. Ini ditetapkan oleh OJK dalam SE No.6/SEOJK.05/2017.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Wuling Air EV, BYD, dan Hyundai Ioniq bisa diasuransikan All Risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ya, semua merek kendaraan listrik yang terdaftar legal di Indonesia bisa diasuransikan All Risk. Tarif mengikuti kategori harga kendaraan dan wilayah plat nomor, sama seperti kendaraan konvensional — hanya tarifnya sedikit lebih tinggi mengacu regulasi OJK untuk EV.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah charging station pribadi di rumah bisa ditanggung asuransi?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Charging station (home charger / EVSE) yang terpasang di rumah umumnya tidak masuk dalam cakupan asuransi kendaraan. Perlindungannya lebih tepat dimasukkan ke dalam asuransi properti (kebakaran/asuransi isi bangunan) atau asuransi elektronik terpisah.",
      },
    },
  ],
};

const perbedaanEVKonvensional = [
  { aspek: "Tarif premi All Risk", konvensional: "2,53%–3,82% (Kat 1–5, Wil III)", ev: "2,78%–4,20% (~10% lebih tinggi)" },
  { aspek: "Tarif premi TLO", konvensional: "0,20%–0,65%", ev: "0,24%–0,78%" },
  { aspek: "Own Risk per kejadian", konvensional: "Rp 300.000", ev: "Rp 500.000" },
  { aspek: "Biaya perbaikan", konvensional: "Relatif terjangkau", ev: "Lebih mahal (komponen impor)" },
  { aspek: "Ketersediaan bengkel rekanan", konvensional: "Sangat banyak", ev: "Masih terbatas (authorized only)" },
  { aspek: "Cakupan baterai rusak karena kecelakaan", konvensional: "N/A", ev: "Ditanggung All Risk" },
  { aspek: "Cakupan degradasi baterai", konvensional: "N/A", ev: "Tidak ditanggung (garansi pabrikan)" },
];

const merekEV = [
  { merek: "Wuling Air EV", harga: "Rp 243–295 jt", kat: "Kategori 2", estimasiAR: "~Rp 6,7–8,7 jt/thn", estimasiTLO: "~Rp 580rb–1,3 jt/thn" },
  { merek: "BYD Dolphin", harga: "Rp 348–398 jt", kat: "Kategori 3", estimasiAR: "~Rp 9,7–11,1 jt/thn", estimasiTLO: "~Rp 835rb–1,2 jt/thn" },
  { merek: "Hyundai Ioniq 6", harga: "Rp 748–820 jt", kat: "Kategori 4", estimasiAR: "~Rp 9,9–11 jt/thn", estimasiTLO: "~Rp 1,8–2,5 jt/thn" },
  { merek: "BMW iX / EV Premium", harga: "> Rp 800 jt", kat: "Kategori 5", estimasiAR: "~Rp 9,3–13,8 jt/thn", estimasiTLO: "~Rp 1,9–6,2 jt/thn" },
];

const tipsEV = [
  {
    icon: "🔋",
    judul: "All Risk adalah pilihan wajib untuk EV",
    isi: "Komponen EV — terutama baterai, motor elektrik, dan sistem elektronik — jauh lebih mahal dari kendaraan konvensional. Satu kerusakan akibat kecelakaan bisa bernilai puluhan hingga ratusan juta. Risiko ini terlalu besar untuk tidak dilindungi.",
  },
  {
    icon: "🏭",
    judul: "Pastikan bengkel rekanan tersedia untuk merek Anda",
    isi: "Tidak semua bengkel rekanan asuransi mampu menangani kendaraan listrik. Sebelum membeli polis, tanyakan kepada praktisi apakah ada bengkel authorized merek EV Anda yang menjadi rekanan perusahaan asuransi tersebut.",
  },
  {
    icon: "📋",
    judul: "Baca klausul baterai dengan cermat",
    isi: "Polis EV sering memiliki klausul spesifik tentang baterai. Pastikan Anda memahami perbedaan antara: kerusakan baterai akibat kecelakaan (biasanya ditanggung) vs degradasi kapasitas normal (tidak ditanggung).",
  },
  {
    icon: "💧",
    judul: "Pertimbangkan perluasan banjir",
    isi: "Kendaraan listrik yang terendam banjir berisiko mengalami kerusakan sistem elektrikal yang sangat mahal. Di Yogyakarta yang memiliki beberapa area rawan banjir, perluasan jaminan banjir sangat disarankan untuk pemilik EV.",
  },
];

export default function AsuransiMobilListrikPage() {
  const wa = `https://wa.me/${KONTAK.wa}?text=${encodeURIComponent(
    "Halo Pak Rio, saya ingin konsultasi asuransi untuk kendaraan listrik (EV) saya."
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* BREADCRUMB */}
      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-sm text-[#475569]">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Asuransi Mobil Listrik</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">⚡</div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[2px] uppercase text-gold2 bg-gold/10 border border-gold/25 px-3 py-1 rounded-full">
              Panduan EV · Asuransi Kendaraan Listrik
            </span>
          </div>
          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.18] mb-4">
            Asuransi Mobil Listrik (EV):<br />
            <em className="not-italic text-gold">Premi, Klaim & Hal Penting</em><br />
            yang Harus Anda Tahu
          </h1>
          <p className="text-white/80 text-base leading-[1.85] max-w-[580px] mb-6">
            Kendaraan listrik berkembang pesat di Indonesia, termasuk di Yogyakarta. Tapi asuransi
            EV punya aturan main yang berbeda — tarif OJK tersendiri, klausul baterai khusus, dan
            keterbatasan bengkel rekanan. Panduan ini menjelaskan semuanya secara jujur.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>Oleh <strong className="text-white/75">Rio Mardiansyah</strong> — Praktisi Asuransi Independen</span>
            <span>·</span>
            <span>8 tahun pengalaman</span>
          </div>
        </div>
      </section>

      <article className="px-[5vw] max-w-[900px] mx-auto">

        {/* KENAPA BERBEDA */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Mengapa Asuransi EV Berbeda dari Kendaraan Konvensional?
          </h2>
          <p className="text-[#475569] leading-relaxed mb-6 text-sm">
            OJK secara eksplisit membedakan tarif asuransi kendaraan listrik dari kendaraan
            berbahan bakar minyak. Ada tiga alasan utama yang menjadi dasar perbedaan ini:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: "💰",
                judul: "Biaya komponen lebih tinggi",
                isi: "Baterai, motor elektrik, inverter, dan sistem kontrol EV jauh lebih mahal dari komponen mesin BBM konvensional. Satu modul baterai pengganti bisa bernilai Rp 50–200 juta.",
              },
              {
                icon: "🔧",
                judul: "Bengkel rekanan masih terbatas",
                isi: "Tidak semua bengkel rekanan asuransi mampu menangani EV. Mayoritas membutuhkan bengkel authorized merek — menambah kompleksitas proses klaim.",
              },
              {
                icon: "⚡",
                judul: "Risiko elektrikal spesifik",
                isi: "Kendaraan listrik rentan terhadap risiko yang tidak ada pada BBM: thermal runaway baterai, water ingress pada sistem elektrikal tegangan tinggi, dan kerusakan modul kontrol.",
              },
            ].map((k, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-card p-5">
                <div className="text-2xl mb-3">{k.icon}</div>
                <div className="font-heading text-navy font-bold text-sm mb-2">{k.judul}</div>
                <p className="text-xs text-[#475569] leading-relaxed">{k.isi}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TARIF OJK EV */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-2">
            Tarif OJK untuk Kendaraan Listrik
          </h2>
          <p className="text-[#475569] text-sm mb-8 leading-relaxed">
            Berdasarkan SE OJK No.6/SEOJK.05/2017, tarif asuransi EV ditetapkan sekitar 10% lebih
            tinggi dari kendaraan konvensional di kategori harga yang sama. Berikut perbandingan
            tarif untuk Wilayah III (Yogyakarta dan Jawa Tengah/Timur/Bali):
          </p>
          <div className="overflow-x-auto rounded-card border border-black/8 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left py-3 px-4 font-semibold text-white/70">Aspek</th>
                  <th className="text-center py-3 px-4 font-semibold">BBM (Konvensional)</th>
                  <th className="text-center py-3 px-4 font-semibold text-gold">EV (Listrik)</th>
                </tr>
              </thead>
              <tbody>
                {perbedaanEVKonvensional.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}>
                    <td className="py-3 px-4 font-semibold text-navy text-xs">{row.aspek}</td>
                    <td className="py-3 px-4 text-center text-xs text-[#475569]">{row.konvensional}</td>
                    <td className="py-3 px-4 text-center text-xs text-gold font-semibold">{row.ev}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ESTIMASI PREMI PER MEREK */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-2">
            Estimasi Premi per Merek EV Populer
          </h2>
          <p className="text-[#475569] text-sm mb-8 leading-relaxed">
            Berikut estimasi premi All Risk dan TLO untuk beberapa merek EV populer di Indonesia,
            berdasarkan tarif OJK Wilayah III. Estimasi ini sebelum diskon dan negosiasi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {merekEV.map((m, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-card p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-heading text-navy font-bold">{m.merek}</div>
                    <div className="text-xs text-[#475569]">{m.harga} · {m.kat}</div>
                  </div>
                  <span className="text-lg">⚡</span>
                </div>
                <div className="flex flex-col gap-2 text-sm border-t border-black/8 pt-3">
                  <div className="flex justify-between">
                    <span className="text-[#475569]">All Risk (est.)</span>
                    <span className="text-navy font-semibold">{m.estimasiAR}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#475569]">TLO (est.)</span>
                    <span className="text-navy font-semibold">{m.estimasiTLO}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#475569] mt-4 leading-relaxed">
            * Estimasi mengacu tarif OJK Wilayah III. Harga kendaraan berdasarkan kisaran pasar 2026.
            Premi final tergantung perusahaan asuransi dan kondisi kendaraan.{" "}
            <Link href="/asuransi-kendaraan" className="text-gold hover:underline">
              Gunakan kalkulator kami
            </Link>{" "}
            untuk estimasi lebih akurat.
          </p>
        </section>

        {/* CAKUPAN BATERAI */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Pertanyaan Paling Penting: Baterai EV Ditanggung Asuransi?
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed mb-6">
            Ini pertanyaan yang paling sering diajukan pemilik EV — dan jawabannya bergantung pada
            penyebab kerusakan baterai:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div className="bg-green-700/7 border border-green-700/15 rounded-card p-5">
              <div className="font-semibold text-green-700 text-sm mb-3">✓ Ditanggung Asuransi</div>
              <ul className="flex flex-col gap-2 text-sm text-[#475569]">
                {[
                  "Kerusakan baterai akibat benturan/kecelakaan",
                  "Kerusakan sistem elektrikal akibat banjir (dengan perluasan)",
                  "Baterai terbakar akibat kecelakaan",
                  "Kerusakan modul pengisian karena kecelakaan",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-700 font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-600/7 border border-red-600/15 rounded-card p-5">
              <div className="font-semibold text-red-700 text-sm mb-3">✗ Tidak Ditanggung Asuransi</div>
              <ul className="flex flex-col gap-2 text-sm text-[#475569]">
                {[
                  "Degradasi kapasitas baterai karena usia/pemakaian",
                  "Kerusakan sel baterai karena overcharging (kelalaian)",
                  "Cacat produksi baterai (tanggung jawab garansi pabrikan)",
                  "Kerusakan software/firmware sistem baterai",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-700 font-bold flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-navy/5 border border-navy/10 rounded-lg p-4 text-sm text-[#475569]">
            <strong className="text-navy">Catatan penting:</strong> Garansi baterai pabrikan (umumnya 8 tahun
            atau 160.000 km) dan asuransi kendaraan adalah dua instrumen berbeda yang saling melengkapi.
            Pabrikan menanggung cacat produksi dan degradasi di luar normal; asuransi menanggung kerusakan
            akibat kejadian eksternal.
          </div>
        </section>

        {/* TIPS */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-8">
            Tips Memilih Asuransi untuk Pemilik EV
          </h2>
          <div className="flex flex-col gap-5">
            {tipsEV.map((t, i) => (
              <div key={i} className="flex gap-4 bg-white border border-black/8 rounded-card p-5">
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <div>
                  <div className="font-heading text-navy font-bold mb-2">{t.judul}</div>
                  <p className="text-sm text-[#475569] leading-relaxed">{t.isi}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-8">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="flex flex-col divide-y divide-black/8">
            {schemaFAQ.mainEntity.map((faq, i) => (
              <div key={i} className="py-5">
                <h3 className="font-semibold text-navy text-[0.95rem] mb-2">{faq.name}</h3>
                <p className="text-sm text-[#475569] leading-[1.78]">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-10 border-b border-black/8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">
            Artikel & Halaman Terkait
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/asuransi-kendaraan/mobil"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🚗 Panduan Lengkap Asuransi Mobil →
            </Link>
            <Link
              href="/artikel/perbedaan-all-risk-tlo"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              ⚖️ All Risk vs TLO: Perbedaan Lengkap →
            </Link>
            <Link
              href="/artikel/asuransi-mobil-banjir"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🌊 Asuransi Mobil Kena Banjir →
            </Link>
            <Link
              href="/asuransi-kendaraan"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🧮 Kalkulator Premi OJK →
            </Link>
          </div>
        </section>

        {/* AUTHOR BOX */}
        <section className="py-10">
          <div className="bg-navy rounded-card p-6 flex gap-5 items-start">
            <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 font-heading font-bold text-gold text-lg">
              R
            </div>
            <div>
              <div className="font-heading text-white font-bold mb-1">Rio Mardiansyah</div>
              <div className="text-gold2 text-xs mb-3">Praktisi Asuransi Independen · Yogyakarta · 8 Tahun Pengalaman</div>
              <p className="text-white/65 text-sm leading-relaxed">
                Saya membantu pemilik kendaraan listrik di Yogyakarta memilih produk asuransi yang
                tepat — termasuk memastikan ada bengkel rekanan yang mampu menangani EV merek Anda.
                Konsultasi sepenuhnya gratis dan tanpa komitmen.
              </p>
            </div>
          </div>
        </section>

      </article>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-4xl mb-4">⚡</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Punya Kendaraan Listrik?<br />Pastikan Perlindungannya Tepat
          </h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">
            Konsultasikan kebutuhan asuransi EV Anda secara gratis. Kami bantu pilih produk yang
            benar-benar melindungi aset kendaraan listrik Anda.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={wa}
              className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all"
            >
              💬 Konsultasi Asuransi EV Gratis
            </a>
            <Link
              href="/asuransi-kendaraan"
              className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all"
            >
              🧮 Hitung Estimasi Premi EV
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
