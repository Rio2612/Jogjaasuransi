import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Perbedaan All Risk dan TLO: Mana yang Tepat untuk Mobil Anda?",
  description:
    "Penjelasan lengkap perbedaan asuransi All Risk dan TLO untuk kendaraan bermotor. Simulasi premi, skenario klaim, dan panduan memilih berdasarkan tarif resmi OJK.",
  keywords:
    "perbedaan all risk dan TLO, all risk vs TLO mobil, asuransi comprehensive vs TLO, pilih all risk atau TLO, premi all risk TLO OJK",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/perbedaan-all-risk-tlo" },
  openGraph: {
    title: "Perbedaan All Risk dan TLO: Panduan Lengkap 2025",
    description:
      "Bingung pilih All Risk atau TLO? Artikel ini menjelaskan perbedaan, simulasi premi, dan skenario klaim secara jujur — berdasarkan tarif resmi OJK.",
    url: "https://asuransijogja.biz.id/artikel/perbedaan-all-risk-tlo",
  },
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Perbedaan All Risk dan TLO: Mana yang Tepat untuk Mobil Anda?",
  description:
    "Penjelasan lengkap perbedaan asuransi All Risk dan TLO untuk kendaraan bermotor berdasarkan tarif OJK.",
  url: "https://asuransijogja.biz.id/artikel/perbedaan-all-risk-tlo",
  datePublished: "2025-05-01",
  dateModified: "2025-05-01",
  author: { "@type": "Person", name: "Rio MD", url: "https://asuransijogja.biz.id" },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Jogja",
    url: "https://asuransijogja.biz.id",
  },
  mainEntityOfPage: "https://asuransijogja.biz.id/artikel/perbedaan-all-risk-tlo",
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah All Risk otomatis lebih baik dari TLO?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tidak selalu. All Risk memberikan perlindungan lebih luas, tetapi preminya lebih tinggi. Untuk mobil berusia di atas 7 tahun dengan nilai pasar rendah, premi All Risk bisa mendekati 5–8% dari nilai kendaraan per tahun — tidak ekonomis dibanding risiko yang ditanggung. TLO lebih masuk akal untuk kendaraan tua dengan nilai rendah.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah asuransi All Risk cover kecelakaan ringan dan goresan?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ya. All Risk (Comprehensive) menanggung kerusakan fisik mulai dari goresan ringan, penyok, hingga rusak parah akibat kecelakaan. Namun setiap klaim dikenakan Own Risk (risiko sendiri) sebesar Rp 300.000 per kejadian untuk kendaraan konvensional, atau Rp 500.000 untuk kendaraan listrik.",
      },
    },
    {
      "@type": "Question",
      name: "TLO bisa klaim lecet atau penyok tidak?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tidak. TLO (Total Loss Only) hanya menanggung kerugian jika kendaraan hilang akibat pencurian, atau jika kerusakan akibat kecelakaan melebihi 75% dari nilai kendaraan. Kerusakan ringan seperti lecet, penyok, dan goresan tidak ditanggung oleh polis TLO.",
      },
    },
    {
      "@type": "Question",
      name: "Mobil kredit wajib pakai All Risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sebagian besar bank dan lembaga pembiayaan mewajibkan asuransi All Risk selama masa kredit berlangsung. Ini karena kendaraan menjadi jaminan kredit, sehingga kreditur ingin pastikan aset terlindungi secara penuh.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa perbedaan premi All Risk vs TLO untuk mobil seharga Rp 300 juta?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Mengacu tarif OJK untuk Wilayah III (Yogyakarta), mobil seharga Rp 300 juta masuk Kategori 3. Estimasi premi All Risk sekitar 1,79%–2,69% = Rp 5,37–8,07 juta/tahun. Premi TLO sekitar 0,29%–0,44% = Rp 870.000–1,32 juta/tahun. Selisihnya cukup besar — pilihan bergantung pada usia mobil dan intensitas pemakaian.",
      },
    },
  ],
};

const tabelPerbandingan = [
  {
    aspek: "Kerusakan ringan (lecet, penyok)",
    allrisk: "✓ Ditanggung",
    tlo: "✗ Tidak ditanggung",
    positifAR: true,
  },
  {
    aspek: "Kecelakaan sedang–berat",
    allrisk: "✓ Ditanggung",
    tlo: "✗ Tidak ditanggung (kecuali >75% nilai)",
    positifAR: true,
  },
  {
    aspek: "Kehilangan akibat pencurian",
    allrisk: "✓ Ditanggung",
    tlo: "✓ Ditanggung",
    positifAR: false,
  },
  {
    aspek: "Kerusakan total (>75% nilai)",
    allrisk: "✓ Ditanggung",
    tlo: "✓ Ditanggung",
    positifAR: false,
  },
  {
    aspek: "Premi tahunan",
    allrisk: "Lebih tinggi (1,05%–3,82%)",
    tlo: "Lebih rendah (0,20%–0,65%)",
    positifAR: false,
  },
  {
    aspek: "Own Risk per kejadian",
    allrisk: "Rp 300.000 (konvensional) / Rp 500.000 (EV)",
    tlo: "Rp 300.000 (konvensional) / Rp 500.000 (EV)",
    positifAR: false,
  },
  {
    aspek: "Cocok untuk",
    allrisk: "Mobil baru, kredit, intensitas tinggi, EV",
    tlo: "Mobil tua (>7 thn), sudah lunas, pemakaian ringan",
    positifAR: false,
  },
];

const skenarioKlaim = [
  {
    skenario: "Goresan di parkiran mal",
    icon: "🏬",
    allrisk: "Ditanggung. Estimasi biaya perbaikan Rp 1–3 juta, dikurangi OR Rp 300rb.",
    tlo: "Tidak ditanggung. Anda bayar sendiri.",
    kesimpulan: "All Risk lebih menguntungkan untuk skenario ini.",
  },
  {
    skenario: "Kecelakaan, mobil rusak parah 80% nilai",
    icon: "💥",
    allrisk: "Ditanggung penuh sebagai total loss. Ganti rugi sesuai nilai pertanggungan.",
    tlo: "Ditanggung sebagai total loss (>75%). Ganti rugi sesuai nilai pertanggungan.",
    kesimpulan: "Keduanya menanggung skenario ini.",
  },
  {
    skenario: "Mobil hilang dicuri",
    icon: "🔓",
    allrisk: "Ditanggung. Proses klaim 14–30 hari setelah laporan polisi.",
    tlo: "Ditanggung. Proses klaim 14–30 hari setelah laporan polisi.",
    kesimpulan: "Keduanya menanggung skenario ini.",
  },
  {
    skenario: "Banjir merendam mesin (hydrolocking)",
    icon: "🌊",
    allrisk:
      "Ditanggung HANYA jika ada perluasan banjir dalam polis. Tanpa perluasan, tidak ditanggung.",
    tlo: "Tidak ditanggung (bukan total loss standar).",
    kesimpulan: "Butuh perluasan banjir eksplisit di polis All Risk.",
  },
];

const panduan = [
  {
    kondisi: "Mobil baru atau usia < 5 tahun",
    rekomendasi: "All Risk",
    alasan:
      "Nilai kendaraan masih tinggi, risiko kerusakan ringan lebih berdampak finansial. Premi relatif proporsional terhadap nilai aset.",
    icon: "🚗",
  },
  {
    kondisi: "Masih dalam cicilan/kredit",
    rekomendasi: "All Risk (wajib)",
    alasan:
      "Bank atau leasing umumnya mewajibkan All Risk selama masa kredit. Kendaraan sebagai jaminan harus terlindungi penuh.",
    icon: "🏦",
  },
  {
    kondisi: "Mobil listrik (EV)",
    rekomendasi: "All Risk sangat disarankan",
    alasan:
      "Biaya perbaikan komponen EV (baterai, motor listrik) sangat mahal. Risiko kerugian ringan pada EV bisa mencapai puluhan juta.",
    icon: "⚡",
  },
  {
    kondisi: "Mobil > 7 tahun, sudah lunas",
    rekomendasi: "TLO lebih ekonomis",
    alasan:
      "Premi All Risk mendekati 5–8% dari nilai kendaraan yang sudah rendah. TLO memberikan proteksi dasar (kehilangan/total loss) dengan biaya jauh lebih terjangkau.",
    icon: "📅",
  },
  {
    kondisi: "Parkir di area padat / kota besar",
    rekomendasi: "All Risk",
    alasan:
      "Risiko goresan, penyok, dan kerusakan ringan jauh lebih tinggi di area parkir padat. All Risk menanggung biaya yang berulang ini.",
    icon: "🏙️",
  },
  {
    kondisi: "Pemakaian ringan, disimpan di garasi",
    rekomendasi: "TLO bisa dipertimbangkan",
    alasan:
      "Frekuensi risiko kerusakan ringan rendah. Proteksi utama yang dibutuhkan adalah terhadap kehilangan, yang sudah ditanggung TLO.",
    icon: "🏠",
  },
];

export default function PerbedaanAllRiskTLOPage() {
  const wa = `https://wa.me/${KONTAK.wa}?text=${encodeURIComponent(
    "Halo Pak Rio, saya ingin konsultasi pilihan asuransi mobil All Risk vs TLO untuk kendaraan saya."
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
        <div className="flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-gold transition-colors no-underline">
            Beranda
          </Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">
            Artikel
          </Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Perbedaan All Risk dan TLO</span>
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
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[2px] uppercase text-gold2 bg-gold/10 border border-gold/25 px-3 py-1 rounded-full">
              Panduan Asuransi Kendaraan
            </span>
          </div>
          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.18] mb-4">
            Perbedaan All Risk dan TLO:<br />
            <em className="not-italic text-gold">Mana yang Tepat</em> untuk Mobil Anda?
          </h1>
          <p className="text-white/80 text-base leading-[1.85] max-w-[580px] mb-6">
            Dua jenis proteksi, dua filosofi perlindungan yang berbeda. Artikel ini menjelaskan
            perbedaan mendasar All Risk dan TLO, lengkap dengan simulasi premi berdasarkan tarif
            OJK, skenario klaim nyata, dan panduan memilih yang jujur — bukan sekadar teori.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>Oleh <strong className="text-white/75">Rio MD</strong> — Konsultan Asuransi Independen</span>
            <span>·</span>
            <span>10+ tahun pengalaman</span>
          </div>
        </div>
      </section>

      <article className="px-[5vw] max-w-[900px] mx-auto">

        {/* DEFINISI */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-6">
            Apa Itu All Risk dan TLO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gold/5 border border-gold/25 rounded-card p-6">
              <div className="text-2xl mb-3">⭐</div>
              <h3 className="font-heading text-navy font-bold text-lg mb-3">
                All Risk (Comprehensive)
              </h3>
              <p className="text-[0.95rem] leading-[1.78] text-[#64748B]">
                Menanggung <strong className="text-navy">hampir semua risiko kerusakan fisik</strong> pada
                kendaraan — mulai dari goresan ringan, penyok, kecelakaan, hingga kehilangan total
                akibat pencurian. Ini adalah perlindungan paling luas yang tersedia dalam asuransi
                kendaraan bermotor di Indonesia.
              </p>
              <div className="mt-4 pt-4 border-t border-gold/15">
                <p className="text-xs text-[#64748B]">
                  <strong className="text-navy">Tarif OJK Wilayah III (Yogyakarta):</strong> 1,05% – 2,69% dari
                  nilai kendaraan per tahun
                </p>
              </div>
            </div>
            <div className="bg-cream border border-black/8 rounded-card p-6">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="font-heading text-navy font-bold text-lg mb-3">
                TLO (Total Loss Only)
              </h3>
              <p className="text-[0.95rem] leading-[1.78] text-[#64748B]">
                Hanya menanggung dua kondisi: kendaraan{" "}
                <strong className="text-navy">hilang akibat pencurian</strong> atau kendaraan{" "}
                <strong className="text-navy">rusak melebihi 75% dari nilai pertanggungan</strong>.
                Kerusakan ringan, sedang, dan kejadian di bawah ambang 75% tidak ditanggung sama
                sekali.
              </p>
              <div className="mt-4 pt-4 border-t border-black/8">
                <p className="text-xs text-[#64748B]">
                  <strong className="text-navy">Tarif OJK Wilayah III (Yogyakarta):</strong> 0,20% – 0,44% dari
                  nilai kendaraan per tahun
                </p>
              </div>
            </div>
          </div>
          <div className="bg-navy/5 border border-navy/10 rounded-lg p-4 text-sm text-[#64748B] leading-relaxed">
            <strong className="text-navy">Catatan OJK:</strong> Tarif premi asuransi kendaraan bermotor
            di Indonesia diatur dalam Surat Edaran OJK No.6/SEOJK.05/2017. Tarif yang berlaku adalah
            tarif batas bawah dan batas atas — perusahaan asuransi tidak boleh menetapkan premi di luar
            rentang ini. Konsultan independen seperti Asuransi Jogja membantu Anda mendapatkan penawaran
            terbaik dalam rentang yang diizinkan.
          </div>
        </section>

        {/* TABEL PERBANDINGAN */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-2">
            Tabel Perbandingan Lengkap
          </h2>
          <p className="text-[#64748B] text-sm mb-8 leading-relaxed">
            Perbandingan aspek per aspek antara asuransi All Risk dan TLO berdasarkan ketentuan umum
            polis kendaraan bermotor Indonesia.
          </p>
          <div className="overflow-x-auto rounded-card border border-black/8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left py-3 px-4 font-semibold text-white/70 w-[35%]">Aspek</th>
                  <th className="text-center py-3 px-4 font-semibold text-gold">All Risk ⭐</th>
                  <th className="text-center py-3 px-4 font-semibold">TLO</th>
                </tr>
              </thead>
              <tbody>
                {tabelPerbandingan.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}>
                    <td className="py-3 px-4 font-semibold text-navy">{row.aspek}</td>
                    <td
                      className={`py-3 px-4 text-center text-xs leading-relaxed ${
                        row.positifAR ? "text-green-700 font-semibold" : "text-[#64748B]"
                      }`}
                    >
                      {row.allrisk}
                    </td>
                    <td className="py-3 px-4 text-center text-xs leading-relaxed text-[#64748B]">
                      {row.tlo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SIMULASI PREMI */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-2">
            Simulasi Premi: Berapa Selisih Nyatanya?
          </h2>
          <p className="text-[#64748B] text-sm mb-8 leading-relaxed">
            Berikut estimasi perbandingan premi All Risk vs TLO untuk tiga contoh harga kendaraan di
            Wilayah III (Yogyakarta), berdasarkan tarif referensi OJK.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { harga: "Rp 150 juta", kat: "Kategori 2", ar: "Rp 3,71–7,45 jt/thn", tlo: "Rp 660rb–1,32 jt/thn", selisih: "~Rp 3–6 jt" },
              { harga: "Rp 300 juta", kat: "Kategori 3", ar: "Rp 5,37–8,07 jt/thn", tlo: "Rp 870rb–1,32 jt/thn", selisih: "~Rp 4–7 jt" },
              { harga: "Rp 600 juta", kat: "Kategori 4", ar: "Rp 6,84–6,84 jt/thn", tlo: "Rp 1,38–1,5 jt/thn", selisih: "~Rp 5–5,5 jt" },
            ].map((sim) => (
              <div key={sim.harga} className="bg-white border border-black/8 rounded-card p-5">
                <div className="text-xs font-bold tracking-[1.5px] uppercase text-gold mb-1">{sim.kat}</div>
                <div className="font-heading text-navy text-xl font-bold mb-4">{sim.harga}</div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[#64748B]">All Risk</span>
                    <span className="text-navy font-semibold text-right">{sim.ar}</span>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[#64748B]">TLO</span>
                    <span className="text-navy font-semibold text-right">{sim.tlo}</span>
                  </div>
                  <div className="border-t border-black/8 pt-2 mt-1 flex justify-between items-center">
                    <span className="text-[#64748B] text-xs">Selisih premi</span>
                    <span className="text-gold font-bold">{sim.selisih}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#64748B] mt-4 leading-relaxed">
            * Estimasi berdasarkan tarif referensi OJK. Premi final ditentukan perusahaan asuransi
            setelah evaluasi. Untuk penawaran resmi, silakan{" "}
            <Link href="/asuransi-kendaraan" className="text-gold hover:underline">
              gunakan kalkulator premi kami
            </Link>{" "}
            atau hubungi konsultan.
          </p>
        </section>

        {/* SKENARIO KLAIM */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-2">
            Skenario Klaim: Apa yang Terjadi di Lapangan?
          </h2>
          <p className="text-[#64748B] text-sm mb-8 leading-relaxed">
            Teori sering berbeda dengan realita. Berikut analisis skenario klaim nyata dan apa yang
            ditanggung masing-masing jenis polis.
          </p>
          <div className="flex flex-col gap-5">
            {skenarioKlaim.map((s, i) => (
              <div key={i} className="border border-black/8 rounded-card overflow-hidden">
                <div className="bg-navy/5 px-5 py-3 flex items-center gap-3 border-b border-black/8">
                  <span className="text-xl">{s.icon}</span>
                  <span className="font-semibold text-navy text-sm">{s.skenario}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-black/8">
                    <div className="text-xs font-bold text-gold mb-2 uppercase tracking-wide">All Risk</div>
                    <p className="text-sm text-[#64748B] leading-relaxed">{s.allrisk}</p>
                  </div>
                  <div className="px-5 py-4">
                    <div className="text-xs font-bold text-[#64748B] mb-2 uppercase tracking-wide">TLO</div>
                    <p className="text-sm text-[#64748B] leading-relaxed">{s.tlo}</p>
                  </div>
                </div>
                <div className="bg-gold/5 border-t border-gold/15 px-5 py-3">
                  <p className="text-xs text-navy font-semibold">
                    💡 {s.kesimpulan}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PANDUAN MEMILIH */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-2">
            Panduan Praktis: Pilih Berdasarkan Kondisi Anda
          </h2>
          <p className="text-[#64748B] text-sm mb-8 leading-relaxed">
            Tidak ada jawaban universal. Yang tepat bergantung pada usia kendaraan, status cicilan,
            dan pola pemakaian Anda.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {panduan.map((p, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-card p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <div>
                  <div className="font-semibold text-navy text-sm mb-1">{p.kondisi}</div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-gold bg-gold/8 border border-gold/20 px-2 py-0.5 rounded-full mb-2">
                    → {p.rekomendasi}
                  </div>
                  <p className="text-sm text-[#64748B] leading-relaxed">{p.alasan}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OWN RISK */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Yang Sering Terlewat: Own Risk (Risiko Sendiri)
          </h2>
          <p className="text-[#64748B] leading-relaxed mb-6 text-sm">
            Baik All Risk maupun TLO memiliki klausul <strong className="text-navy">Own Risk (OR)</strong> —
            jumlah yang harus Anda tanggung sendiri untuk setiap kejadian klaim. Ini bukan premi
            tambahan, melainkan bagian dari kerugian yang tidak ditanggung asuransi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border border-black/8 rounded-card p-5">
              <div className="font-heading text-navy font-bold mb-3">Kendaraan Konvensional (BBM)</div>
              <div className="text-3xl font-bold text-gold mb-1">Rp 300.000</div>
              <div className="text-sm text-[#64748B]">per kejadian klaim (minimal)</div>
            </div>
            <div className="bg-white border border-black/8 rounded-card p-5">
              <div className="font-heading text-navy font-bold mb-3">Kendaraan Listrik (EV)</div>
              <div className="text-3xl font-bold text-gold mb-1">Rp 500.000</div>
              <div className="text-sm text-[#64748B]">per kejadian klaim (minimal)</div>
            </div>
          </div>
          <div className="mt-4 bg-navy/5 border border-navy/10 rounded-lg p-4 text-sm text-[#64748B] leading-relaxed">
            <strong className="text-navy">Contoh praktis:</strong> Jika kendaraan Anda lecet dan
            biaya perbaikan Rp 800.000, asuransi All Risk akan mengganti Rp 500.000 (Rp 800.000 –
            OR Rp 300.000). Untuk kerusakan di bawah OR, tidak worth it untuk diklaim karena bisa
            mempengaruhi premi renewal.
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
                <p className="text-sm text-[#64748B] leading-[1.78]">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-10 border-b border-black/8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">
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
              href="/asuransi-kendaraan"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🧮 Kalkulator Premi OJK →
            </Link>
            <Link
              href="/artikel/asuransi-mobil-listrik"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              ⚡ Asuransi Mobil Listrik →
            </Link>
            <Link
              href="/artikel/penyebab-klaim-asuransi-ditolak"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              ⚠️ Kenapa Klaim Bisa Ditolak? →
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
              <div className="font-heading text-white font-bold mb-1">Rio MD</div>
              <div className="text-gold2 text-xs mb-3">Konsultan Asuransi Kerugian Independen · Yogyakarta · 10+ Tahun Pengalaman</div>
              <p className="text-white/65 text-sm leading-relaxed">
                Sebagai konsultan independen, saya tidak terikat pada satu perusahaan asuransi
                manapun. Rekomendasi yang saya berikan murni berdasarkan analisis kebutuhan dan
                profil risiko klien — bukan target penjualan produk tertentu.
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
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Masih Ragu All Risk atau TLO?
          </h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">
            Konsultasikan kondisi kendaraan Anda secara gratis. Kami bantu analisis mana yang lebih
            menguntungkan — tanpa tekanan untuk membeli produk tertentu.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={wa}
              className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all"
            >
              💬 Konsultasi Gratis via WhatsApp
            </a>
            <Link
              href="/asuransi-kendaraan"
              className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all"
            >
              🧮 Hitung Estimasi Premi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
