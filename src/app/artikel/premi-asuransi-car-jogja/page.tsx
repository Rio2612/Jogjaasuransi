// app/artikel/premi-asuransi-car-jogja/page.tsx
// TARGET KEYWORD: "premi asuransi CAR jogja", "harga asuransi contractor all risk yogyakarta"
// INTENT: Commercial — kontraktor yang aktif mencari harga sebelum beli
// SILO: Engineering cluster → mendukung /asuransi-engineering/contractor-all-risk/

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Premi Asuransi CAR Jogja 2025 – Berapa Biaya Contractor All Risk? | Asuransi Jogja",
  description:
    "Panduan lengkap premi asuransi Contractor All Risk (CAR) di Yogyakarta 2025. Estimasi biaya 0,15–0,5% nilai kontrak, faktor penentu rate, perbandingan Section I dan II, dan cara mendapatkan penawaran terbaik.",
  keywords:
    "premi asuransi CAR jogja, biaya contractor all risk yogyakarta, harga asuransi konstruksi jogja, rate CAR proyek gedung, premi CAR 2025 yogyakarta",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/premi-asuransi-car-jogja",
  },
  openGraph: {
    title: "Premi Asuransi CAR Jogja 2025 – Berapa Biaya Contractor All Risk?",
    description:
      "Estimasi biaya CAR untuk proyek konstruksi di Yogyakarta. Rate, faktor penentu premi, dan cara mendapatkan penawaran terbaik.",
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
        { "@type": "ListItem", position: 3, name: "Premi Asuransi CAR Jogja", item: "https://asuransijogja.biz.id/artikel/premi-asuransi-car-jogja" },
      ],
    },
    {
      "@type": "Article",
      headline: "Premi Asuransi CAR Jogja 2025 – Berapa Biaya Contractor All Risk?",
      description: "Panduan lengkap premi asuransi Contractor All Risk di Yogyakarta: estimasi biaya, faktor penentu rate, dan cara mendapatkan penawaran terbaik.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Konsultan Asuransi Kerugian" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-01-15",
      dateModified: "2025-06-01",
      mainEntityOfPage: "https://asuransijogja.biz.id/artikel/premi-asuransi-car-jogja",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa premi CAR untuk proyek Rp 1 miliar?",
          acceptedAnswer: { "@type": "Answer", text: "Estimasi premi CAR untuk proyek Rp 1 miliar berkisar Rp 1,5–5 juta per tahun (rate 0,15–0,5%). Rate dipengaruhi jenis pekerjaan, lokasi, limit TPL, dan durasi proyek." },
        },
        {
          "@type": "Question",
          name: "Apa yang mempengaruhi besar kecilnya premi CAR?",
          acceptedAnswer: { "@type": "Answer", text: "Faktor utama penentu premi CAR: nilai kontrak, jenis pekerjaan (sipil vs MEP vs infrastruktur), lokasi proyek, durasi, limit TPL Section II, deductible, dan track record klaim kontraktor." },
        },
        {
          "@type": "Question",
          name: "Apakah premi CAR bisa dinegosiasi?",
          acceptedAnswer: { "@type": "Answer", text: "Ya, premi CAR bisa lebih efisien jika kontraktor memiliki track record klaim bersih, memilih deductible lebih tinggi, atau mengambil beberapa polis sekaligus. Konsultan independen membantu mendapatkan rate terbaik dari beberapa perusahaan asuransi." },
        },
      ],
    },
  ],
};

const tabelPremi = [
  { nilai: "Rp 100 juta", min: "Rp 150.000", max: "Rp 500.000", catatan: "Proyek kecil: renovasi, ruko, rumah tinggal" },
  { nilai: "Rp 500 juta", min: "Rp 750.000", max: "Rp 2.500.000", catatan: "Proyek menengah: ruko besar, gudang, kos" },
  { nilai: "Rp 1 miliar", min: "Rp 1.500.000", max: "Rp 5.000.000", catatan: "Proyek hotel bintang, kampus, perkantoran" },
  { nilai: "Rp 5 miliar", min: "Rp 7.500.000", max: "Rp 25.000.000", catatan: "Proyek rumah sakit, pusat perbelanjaan" },
  { nilai: "Rp 10 miliar", min: "Rp 15.000.000", max: "Rp 50.000.000", catatan: "Proyek infrastruktur, gedung besar" },
  { nilai: "Rp 50 miliar", min: "Rp 75.000.000", max: "Rp 200.000.000", catatan: "Proyek skala besar — perlu negosiasi khusus" },
];

const faktorPenentuPremi = [
  {
    icon: "🏗️",
    faktor: "Jenis Pekerjaan",
    penjelasan: "Pekerjaan sipil murni (gedung, jalan) cenderung mendapatkan rate lebih rendah dibanding pekerjaan MEP (mekanikal-elektrikal-plumbing) atau pekerjaan berisiko tinggi seperti jembatan layang dan terowongan.",
    dampak: "Rate bisa berbeda 30–50% antar jenis pekerjaan",
  },
  {
    icon: "📍",
    faktor: "Lokasi Proyek",
    penjelasan: "Proyek di kawasan padat perkotaan Yogyakarta (Malioboro, Kota Gede) memiliki risiko TPL lebih tinggi karena kepadatan properti dan pejalan kaki. Proyek di pinggiran kota cenderung mendapatkan rate lebih rendah.",
    dampak: "Loading 10–25% untuk lokasi padat",
  },
  {
    icon: "📅",
    faktor: "Durasi Proyek",
    penjelasan: "Polis CAR dihitung per tahun. Proyek yang melewati satu tahun diperhitungkan secara proporsional. Proyek dengan durasi lebih panjang biasanya mendapatkan sedikit diskon karena spread risiko lebih baik.",
    dampak: "Proyek >18 bulan bisa dapat rate lebih efisien",
  },
  {
    icon: "🛡️",
    faktor: "Limit TPL Section II",
    penjelasan: "Semakin besar limit tanggung jawab pihak ketiga yang dipilih, semakin besar premi. Untuk proyek di area padat, limit TPL Rp 10–25 miliar sangat dianjurkan meski menambah biaya premi.",
    dampak: "Setiap Rp 10 miliar limit TPL menambah premi signifikan",
  },
  {
    icon: "💸",
    faktor: "Deductible (Own Risk)",
    penjelasan: "Deductible adalah bagian kerugian yang ditanggung sendiri per klaim. Memilih deductible lebih tinggi (misal Rp 25 juta vs Rp 5 juta) bisa mengurangi premi secara signifikan — cocok untuk kontraktor besar yang sanggup tanggung risiko kecil sendiri.",
    dampak: "Deductible lebih tinggi bisa pangkas premi 10–20%",
  },
  {
    icon: "📋",
    faktor: "Track Record Klaim",
    penjelasan: "Kontraktor dengan riwayat klaim bersih selama 3–5 tahun bisa mendapatkan No Claim Discount (NCD) atau experience rating adjustment dari perusahaan asuransi. Ini keuntungan nyata dari konsistensi manajemen risiko yang baik.",
    dampak: "NCD bisa mencapai 10–15% dari premi",
  },
];

const komponenPremi = [
  { komponen: "Premi Section I (Material Damage)", basis: "% dari nilai kontrak (sum insured)", keterangan: "Komponen utama — menanggung kerusakan fisik proyek" },
  { komponen: "Premi Section II (TPL)", basis: "% dari limit TPL yang dipilih", keterangan: "Menanggung klaim pihak ketiga — wajib untuk proyek perkotaan" },
  { komponen: "Biaya Polis & Administrasi", basis: "Flat per polis", keterangan: "Biaya penerbitan polis, materai, dan administrasi" },
  { komponen: "Biaya Survei (jika ada)", basis: "Tergantung perusahaan", keterangan: "Untuk proyek di atas nilai tertentu atau lokasi khusus" },
  { komponen: "Pajak Premi (PPN)", basis: "11% dari total premi", keterangan: "Wajib sesuai regulasi perpajakan Indonesia" },
];

const tipsHematPremi = [
  { tip: "Bandingkan dari Beberapa Perusahaan Asuransi", desc: "Rate CAR bisa berbeda 20–40% antar perusahaan asuransi untuk risiko yang sama. Konsultan independen seperti kami membandingkan dari banyak perusahaan sekaligus — tanpa biaya tambahan." },
  { tip: "Pilih Deductible yang Lebih Tinggi", desc: "Jika proyek Anda memiliki tim K3 yang kuat dan jarang klaim, pilih deductible lebih tinggi untuk memotong premi. Strategi ini cocok untuk kontraktor besar yang mengelola risiko sendiri." },
  { tip: "Manfaatkan Track Record Klaim Bersih", desc: "Dokumentasikan riwayat klaim Anda. Jika tidak ada klaim selama 3 tahun terakhir, Anda berhak meminta NCD atau rate yang lebih kompetitif saat perpanjangan." },
  { tip: "Annual Policy untuk Multi-Proyek", desc: "Kontraktor yang mengerjakan banyak proyek dalam setahun bisa menggunakan Annual CAR atau Open Cover — satu polis untuk semua proyek, premi lebih efisien per proyek." },
  { tip: "Sesuaikan Nilai Pertanggungan dengan Tepat", desc: "Under-insured (nilai pertanggungan terlalu kecil) berisiko saat klaim. Over-insured (terlalu besar) hanya membuang premi. Review nilai kontrak yang tepat bersama konsultan." },
];

export default function ArtikelPremiCAR() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }} />
      <Header />
      <div className="pt-[68px]">

        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Premi Asuransi CAR Jogja</span>
          </div>
        </div>

        {/* Hero Artikel */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-engineering/contractor-all-risk" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🏗️ Contractor All Risk
              </Link>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/40 text-xs">Panduan Biaya & Premi</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Premi Asuransi CAR Jogja 2025 —<br /><em className="not-italic text-gold">Berapa Biaya Contractor All Risk?</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Pertanyaan pertama setiap kontraktor sebelum membeli asuransi CAR adalah: <em className="text-gold2 not-italic">berapa preminya?</em> Panduan ini menjawab secara lengkap dan transparan — termasuk tabel estimasi, faktor penentu rate, dan strategi mendapatkan premi paling efisien.
            </p>
            <div className="flex gap-3 text-xs text-white/40 flex-wrap">
              <span>✍️ Rio MD — Konsultan Asuransi Kerugian</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 6 menit</span>
            </div>
          </div>
        </section>

        {/* Konten Utama */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Ringkasan:</strong> Premi asuransi Contractor All Risk (CAR) di Yogyakarta berkisar antara <strong>0,15% hingga 0,5% dari nilai kontrak per tahun</strong>. Untuk proyek senilai Rp 1 miliar, estimasi premi sekitar Rp 1,5 – 5 juta per tahun. Besaran premi dipengaruhi oleh jenis pekerjaan, lokasi, limit TPL, deductible, dan track record klaim kontraktor.
            </p>
          </div>

          {/* Section 1: Tabel Estimasi */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Tabel Estimasi Premi CAR Berdasarkan Nilai Proyek
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Berikut estimasi premi CAR untuk berbagai skala proyek konstruksi di Yogyakarta. Angka ini menggunakan rate pasar 0,15–0,5% sebagai panduan awal sebelum mendapatkan penawaran resmi dari perusahaan asuransi.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm mb-2">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl">Nilai Kontrak</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs">Premi Min/Tahun</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold">Premi Maks/Tahun</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tr-xl">Contoh Proyek</th>
                </tr>
              </thead>
              <tbody>
                {tabelPremi.map((row, i) => (
                  <tr key={row.nilai} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 font-bold text-navy text-sm">{row.nilai}</td>
                    <td className="p-3.5 text-[#64748B] text-sm">{row.min}</td>
                    <td className="p-3.5 text-gold font-bold text-sm">{row.max}</td>
                    <td className="p-3.5 text-[#64748B] text-xs leading-relaxed">{row.catatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#94A3B8] mb-10">
            * Estimasi berdasarkan rate pasar 0,15–0,5%. Premi aktual ditentukan perusahaan asuransi setelah review dokumen proyek dan bisa lebih rendah dari estimasi ini.
          </p>

          {/* Section 2: Komponen Premi */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Komponen yang Membentuk Total Premi CAR
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Premi yang Anda bayar bukan hanya satu angka — ada beberapa komponen yang dijumlahkan. Memahami ini membantu Anda membandingkan penawaran antar perusahaan asuransi secara setara.
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {komponenPremi.map((k, i) => (
              <div key={k.komponen} className="bg-cream rounded-xl p-4 border border-black/6 grid grid-cols-[auto_1fr] gap-4 items-start">
                <div className="bg-navy text-gold font-heading font-bold text-xs w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                <div>
                  <div className="font-heading text-navy font-bold text-sm mb-0.5">{k.komponen}</div>
                  <div className="text-xs text-gold font-medium mb-0.5">{k.basis}</div>
                  <div className="text-xs text-[#64748B]">{k.keterangan}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 3: Faktor Penentu */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            6 Faktor Utama yang Menentukan Besar Premi CAR Anda
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Dua proyek dengan nilai kontrak yang sama bisa mendapatkan premi yang sangat berbeda. Ini karena underwriter perusahaan asuransi mengevaluasi enam faktor risiko berikut:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {faktorPenentuPremi.map((f, i) => (
              <div key={f.faktor} className="border border-black/8 rounded-card p-6 bg-white">
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-heading text-navy font-bold text-base">{i + 1}. {f.faktor}</h3>
                      <span className="bg-gold/10 border border-gold/20 text-gold text-xs font-semibold px-2.5 py-0.5 rounded-full">{f.dampak}</span>
                    </div>
                    <p className="text-[#64748B] text-sm leading-relaxed">{f.penjelasan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4: Tips Hemat */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            5 Strategi Mendapatkan Premi CAR Paling Efisien
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Premi CAR bisa berbeda signifikan tergantung strategi pengadaan dan negosiasi yang Anda lakukan. Berikut cara-cara yang terbukti efektif:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {tipsHematPremi.map((t, i) => (
              <div key={t.tip} className="bg-cream rounded-xl p-5 border border-black/6">
                <div className="flex gap-3 items-start">
                  <div className="bg-gold text-navy font-heading font-bold text-xs w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                  <div>
                    <div className="font-heading text-navy font-bold text-sm mb-1.5">{t.tip}</div>
                    <p className="text-[#64748B] text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 5: Contoh Kalkulasi */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Contoh Kalkulasi Nyata: Proyek Hotel Rp 3 Miliar di Sleman
          </h2>
          <div className="bg-navy rounded-card p-6 text-white mb-10">
            <div className="text-gold font-heading font-semibold text-sm mb-4">📋 Skenario Proyek</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-sm">
              {[
                { label: "Jenis Proyek", val: "Pembangunan Hotel Melati 3 lantai" },
                { label: "Nilai Kontrak", val: "Rp 3.000.000.000" },
                { label: "Lokasi", val: "Sleman, DIY (area semi-padat)" },
                { label: "Durasi", val: "18 bulan" },
                { label: "Limit TPL", val: "Rp 10 miliar" },
                { label: "Deductible", val: "Rp 10 juta per klaim" },
              ].map(item => (
                <div key={item.label} className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/50 text-xs">{item.label}</span>
                  <span className="text-white text-xs font-semibold">{item.val}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gold/20 pt-4">
              <div className="font-heading text-gold text-sm font-semibold mb-3">💰 Estimasi Komponen Premi</div>
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex justify-between"><span className="text-white/65">Section I — Material Damage (rate 0,25%)</span><span className="text-white font-semibold">Rp 7.500.000</span></div>
                <div className="flex justify-between"><span className="text-white/65">Section II — TPL Rp 10M (flat approx)</span><span className="text-white font-semibold">Rp 3.500.000</span></div>
                <div className="flex justify-between"><span className="text-white/65">Biaya polis & administrasi</span><span className="text-white font-semibold">Rp 500.000</span></div>
                <div className="flex justify-between border-t border-white/15 pt-2 mt-1"><span className="text-white/65">Sub-total premi</span><span className="text-white font-semibold">Rp 11.500.000</span></div>
                <div className="flex justify-between"><span className="text-white/65">PPN 11%</span><span className="text-white font-semibold">Rp 1.265.000</span></div>
                <div className="flex justify-between border-t border-gold/30 pt-2 mt-1"><span className="text-gold font-bold">Total Premi / Tahun</span><span className="text-gold font-bold text-sm">Rp 12.765.000</span></div>
              </div>
              <p className="text-white/40 text-xs mt-4">* Angka ini adalah simulasi. Premi aktual ditentukan underwriter setelah review dokumen proyek lengkap.</p>
            </div>
          </div>

          {/* CTA inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Hitung Estimasi Premi Proyek Anda</div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-4">
              Gunakan kalkulator premi CAR kami atau konsultasikan langsung untuk mendapatkan penawaran resmi dari beberapa perusahaan asuransi terkemuka.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Konsultasi Gratis via WA
              </a>
              <Link href="/asuransi-engineering/contractor-all-risk#kalkulator" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                🧮 Buka Kalkulator CAR →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            Pertanyaan Umum tentang Premi CAR
          </h2>
          <div className="flex flex-col divide-y divide-black/8 mb-10">
            {[
              { q: "Berapa premi CAR untuk proyek Rp 1 miliar?", a: "Estimasi premi CAR untuk proyek Rp 1 miliar berkisar Rp 1,5–5 juta per tahun (rate 0,15–0,5%). Rate dipengaruhi jenis pekerjaan, lokasi, limit TPL yang diambil, dan masa pemeliharaan. Hubungi kami untuk penawaran resmi dengan dokumen proyek." },
              { q: "Apakah premi CAR termasuk dalam biaya overhead proyek?", a: "Ya, premi asuransi CAR umumnya dimasukkan sebagai bagian dari biaya umum dan overhead proyek dalam RAB. Ini adalah biaya yang wajar dan dapat dibebankan ke nilai proyek sesuai kesepakatan kontrak." },
              { q: "Apakah premi CAR bisa dicicil?", a: "Beberapa perusahaan asuransi mengizinkan pembayaran premi secara bertahap (triwulanan atau semesteran) untuk proyek berdurasi lebih dari 12 bulan. Namun persyaratan dan kebijakan setiap perusahaan asuransi berbeda. Hubungi kami untuk informasi lebih lanjut." },
              { q: "Apa yang terjadi jika proyek selesai lebih cepat dari jadwal?", a: "Jika proyek selesai lebih cepat dari periode polis, Anda bisa mengajukan pengembalian premi (return of premium) secara proporsional untuk sisa periode yang tidak terpakai. Ini berlaku selama tidak ada klaim selama periode berjalan." },
            ].map((f, i) => (
              <details key={i} className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  {f.q}
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#64748B] pb-3">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Internal links */}
          <div className="border-t border-black/8 pt-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">Baca Juga</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/asuransi-engineering/contractor-all-risk", icon: "🏗️", judul: "Halaman Produk CAR Lengkap", desc: "Cakupan polis, kalkulator premi, dan cara klaim" },
                { href: "/artikel/syarat-asuransi-tender-pemerintah-diy", icon: "📋", judul: "Syarat Asuransi Tender Pemerintah DIY", desc: "Dokumen asuransi yang wajib ada untuk ikut tender" },
                { href: "/artikel/perbedaan-car-ear-asuransi-engineering", icon: "🔍", judul: "Perbedaan CAR dan EAR", desc: "Kapan pakai CAR dan kapan pakai EAR?" },
                { href: "/artikel/asuransi-kontraktor-proyek-jogja", icon: "📄", judul: "Panduan Asuransi Kontraktor Jogja", desc: "Semua jenis asuransi yang dibutuhkan kontraktor DIY" },
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
              Siap Mendapatkan Penawaran<br />Premi CAR Terbaik?
            </h2>
            <p className="text-white/75 text-sm max-w-[420px] mx-auto mb-8">
              Konsultasi gratis — ceritakan proyek Anda, kami bandingkan penawaran dari beberapa perusahaan asuransi terkemuka dan rekomendasikan yang paling efisien.
            </p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi Premi CAR via WhatsApp
            </a>
          </div>
        </section>
      </div>
    
    </>
  );
}
