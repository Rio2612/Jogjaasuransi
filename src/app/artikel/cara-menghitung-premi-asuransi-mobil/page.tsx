import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cara Menghitung Premi Asuransi Mobil Berdasarkan Tarif OJK 2025",
  description:
    "Panduan lengkap cara menghitung premi asuransi kendaraan bermotor berdasarkan tarif referensi OJK SE No.6/SEOJK.05/2017. Rumus, kategori, wilayah, dan contoh perhitungan nyata.",
  keywords:
    "cara menghitung premi asuransi mobil, rumus premi asuransi kendaraan OJK, kalkulator premi asuransi mobil, tarif OJK asuransi kendaraan 2025, cara hitung asuransi all risk",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/cara-menghitung-premi-asuransi-mobil" },
  openGraph: {
    title: "Cara Menghitung Premi Asuransi Mobil — Rumus OJK Lengkap",
    description: "Pelajari rumus, kategori harga, dan wilayah tarif OJK untuk menghitung sendiri estimasi premi asuransi kendaraan Anda sebelum membeli polis.",
    url: "https://asuransijogja.biz.id/artikel/cara-menghitung-premi-asuransi-mobil",
  },
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Menghitung Premi Asuransi Mobil Berdasarkan Tarif OJK 2025",
  description: "Panduan rumus dan cara perhitungan premi asuransi kendaraan bermotor berdasarkan tarif resmi OJK.",
  url: "https://asuransijogja.biz.id/artikel/cara-menghitung-premi-asuransi-mobil",
  datePublished: "2025-05-01",
  dateModified: "2025-05-01",
  author: { "@type": "Person", name: "Rio MD", url: "https://asuransijogja.biz.id" },
  publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
  mainEntityOfPage: "https://asuransijogja.biz.id/artikel/cara-menghitung-premi-asuransi-mobil",
};

const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cara Menghitung Premi Asuransi Mobil OJK",
  description: "Langkah-langkah menghitung estimasi premi asuransi kendaraan bermotor berdasarkan tarif referensi OJK.",
  step: [
    { "@type": "HowToStep", name: "Tentukan nilai kendaraan", text: "Gunakan harga pasar kendaraan saat ini, bukan harga beli. Cek di dealer atau marketplace kendaraan bekas untuk referensi harga." },
    { "@type": "HowToStep", name: "Tentukan kategori harga", text: "Masukkan nilai kendaraan ke dalam 5 kategori OJK berdasarkan rentang harga (≤125 jt, 125-200 jt, 200-400 jt, 400-800 jt, >800 jt)." },
    { "@type": "HowToStep", name: "Tentukan wilayah plat kendaraan", text: "Identifikasi apakah kendaraan masuk Wilayah I (Sumatera), Wilayah II (Jakarta, Jabar, Banten), atau Wilayah III (Jawa Tengah, DIY, Jatim, Bali, Kalimantan, Sulawesi, dll)." },
    { "@type": "HowToStep", name: "Pilih tarif sesuai jenis perlindungan", text: "Ambil tarif All Risk atau TLO dari tabel OJK sesuai kombinasi kategori dan wilayah yang sudah ditentukan." },
    { "@type": "HowToStep", name: "Hitung premi", text: "Kalikan nilai kendaraan dengan persentase tarif OJK. Hasilnya adalah estimasi premi tahunan sebelum diskon dan biaya tambahan." },
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah tarif OJK berlaku sama untuk semua perusahaan asuransi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tarif OJK adalah tarif referensi (batas bawah dan batas atas). Perusahaan asuransi tidak boleh menetapkan premi di luar rentang ini. Dalam praktiknya, perusahaan sering memberikan diskon yang membuat premi aktual bisa lebih rendah dari tarif batas bawah OJK, terutama untuk klien korporasi atau volume besar.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja komponen biaya selain premi dalam polis asuransi kendaraan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Selain premi utama, ada beberapa komponen biaya yang mungkin dikenakan: bea materai polis (Rp 10.000), biaya polis administrasi (bervariasi), premi perluasan banjir/gempa (jika ditambahkan), dan premi perluasan TPL/tanggung jawab pihak ketiga (jika ditambahkan). Semua komponen ini harus tercantum transparan dalam ilustrasi premi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah premi bisa dicicil bulanan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sebagian besar polis asuransi kendaraan dibayar sekaligus untuk periode satu tahun. Beberapa perusahaan menawarkan opsi cicilan bulanan, tapi biasanya ada biaya tambahan. Untuk periode lebih pendek (6 bulan atau 3 bulan), premi dihitung secara pro-rata dari premi tahunan.",
      },
    },
    {
      "@type": "Question",
      name: "Mengapa premi yang ditawarkan berbeda-beda untuk mobil yang sama?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perbedaan premi antar perusahaan asuransi untuk kendaraan yang sama bisa disebabkan oleh: posisi dalam rentang tarif OJK (masing-masing perusahaan menetapkan tarif sendiri dalam rentang yang diizinkan), kebijakan diskon internal, cakupan manfaat tambahan yang berbeda, dan kualitas layanan bengkel rekanan. Inilah mengapa penting membandingkan penawaran dari beberapa perusahaan sekaligus.",
      },
    },
  ],
};

const kategoriOJK = [
  { kat: "Kategori 1", rentang: "≤ Rp 125 juta", contoh: "Daihatsu Ayla, Honda Brio, Suzuki Ignis" },
  { kat: "Kategori 2", rentang: "> Rp 125 jt – Rp 200 jt", contoh: "Toyota Avanza, Honda Mobilio, Wuling Almaz" },
  { kat: "Kategori 3", rentang: "> Rp 200 jt – Rp 400 jt", contoh: "Toyota Fortuner lama, Honda CR-V, Mitsubishi Xpander" },
  { kat: "Kategori 4", rentang: "> Rp 400 jt – Rp 800 jt", contoh: "Toyota Alphard, BMW 3 Series, Mercedes C-Class" },
  { kat: "Kategori 5", rentang: "> Rp 800 juta", contoh: "Lamborghini, Porsche, kendaraan mewah premium" },
];

const tarifWilayahIII = [
  { kat: "Kategori 1", ar: "2,53%", tlo: "0,51%", arEV: "2,78%", tloEV: "0,56%" },
  { kat: "Kategori 2", ar: "2,69%", tlo: "0,44%", arEV: "2,96%", tloEV: "0,48%" },
  { kat: "Kategori 3", ar: "1,79%", tlo: "0,29%", arEV: "1,97%", tloEV: "0,35%" },
  { kat: "Kategori 4", ar: "1,14%", tlo: "0,23%", arEV: "1,25%", tloEV: "0,27%" },
  { kat: "Kategori 5", ar: "1,05%", tlo: "0,20%", arEV: "1,16%", tloEV: "0,24%" },
];

const contohHitung = [
  {
    label: "Contoh 1: Toyota Avanza 2022 — Plat AB Jogja",
    nilai: 215_000_000,
    wilayah: "Wilayah III",
    kat: "Kategori 3",
    tarif: 1.79,
    tarifTLO: 0.29,
    hasilAR: 3_848_500,
    hasilTLO: 623_500,
    color: "gold",
  },
  {
    label: "Contoh 2: Honda Brio 2021 — Plat B Jakarta",
    nilai: 145_000_000,
    wilayah: "Wilayah II",
    kat: "Kategori 2",
    tarif: 2.47,
    tarifTLO: 0.44,
    hasilAR: 3_581_500,
    hasilTLO: 638_000,
    color: "blue",
  },
  {
    label: "Contoh 3: Toyota Fortuner 2023 — Plat AB Jogja",
    nilai: 560_000_000,
    wilayah: "Wilayah III",
    kat: "Kategori 4",
    tarif: 1.14,
    tarifTLO: 0.23,
    hasilAR: 6_384_000,
    hasilTLO: 1_288_000,
    color: "green",
  },
];

function formatRp(n: number) {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

const langkahHitung = [
  { step: "1", judul: "Tentukan Nilai Kendaraan", desc: "Gunakan harga pasar kendaraan saat ini (bukan harga beli). Untuk kendaraan baru, gunakan OTR. Untuk bekas, cek harga di marketplace atau dealer." },
  { step: "2", judul: "Tentukan Kategori Harga", desc: "Masukkan nilai kendaraan ke dalam salah satu dari 5 kategori OJK berdasarkan tabel di atas." },
  { step: "3", judul: "Tentukan Wilayah Plat", desc: "Identifikasi wilayah plat kendaraan: Wilayah I (Sumatera), II (Jakarta/Jabar/Banten), atau III (Jateng, DIY, Jatim, Bali, Kalimantan, Sulawesi, dll)." },
  { step: "4", judul: "Ambil Tarif dari Tabel OJK", desc: "Gunakan tabel tarif OJK sesuai jenis perlindungan (All Risk atau TLO), kategori, dan wilayah yang sudah ditentukan." },
  { step: "5", judul: "Hitung Premi", desc: "Premi = Nilai Kendaraan × Tarif ÷ 100. Hasil ini adalah estimasi premi tahunan sebelum diskon dan biaya tambahan." },
];

export default function CaraHitungPremiPage() {
  const wa = `https://wa.me/${KONTAK.wa}?text=${encodeURIComponent(
    "Halo Pak Rio, saya ingin menghitung estimasi premi asuransi kendaraan saya."
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* BREADCRUMB */}
      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-sm text-[#475569]">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Cara Menghitung Premi Asuransi Mobil</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)" }} />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">🧮</div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[2px] uppercase text-gold2 bg-gold/10 border border-gold/25 px-3 py-1 rounded-full">
              Panduan · Rumus Premi OJK
            </span>
          </div>
          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.18] mb-4">
            Cara Menghitung Premi<br />
            <em className="not-italic text-gold">Asuransi Mobil</em><br />
            Berdasarkan Tarif OJK
          </h1>
          <p className="text-white/80 text-base leading-[1.85] max-w-[580px] mb-6">
            Sebelum membeli polis, sangat penting memahami bagaimana premi dihitung. Artikel ini menjelaskan rumus, kategori harga, sistem wilayah, dan simulasi nyata — sehingga Anda bisa memverifikasi sendiri kewajaran penawaran yang diterima.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>Oleh <strong className="text-white/75">Rio MD</strong> — Praktisi Asuransi Independen</span>
            <span>·</span>
            <span>Yogyakarta</span>
          </div>
        </div>
      </section>

      <article className="px-[5vw] max-w-[900px] mx-auto">

        {/* DASAR REGULASI */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Dasar Regulasi: OJK SE No.6/SEOJK.05/2017
          </h2>
          <p className="text-[#475569] leading-relaxed text-sm mb-5">
            Premi asuransi kendaraan bermotor di Indonesia diatur dalam{" "}
            <strong className="text-navy">Surat Edaran OJK No.6/SEOJK.05/2017 tentang Penetapan Tarif Premi Referensi dan Ketentuan Biaya Akuisisi pada Lini Usaha Asuransi Kendaraan Bermotor</strong>. Regulasi ini menetapkan:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              { icon: "📊", judul: "Tarif Batas Bawah & Atas", isi: "Setiap kategori dan wilayah memiliki rentang tarif minimum dan maksimum. Perusahaan asuransi tidak boleh menetapkan premi di luar rentang ini." },
              { icon: "🗺️", judul: "3 Wilayah Tarif", isi: "Indonesia dibagi menjadi 3 wilayah dengan tarif berbeda berdasarkan karakteristik risiko di masing-masing daerah." },
              { icon: "💰", judul: "5 Kategori Harga", isi: "Kendaraan dikelompokkan dalam 5 kategori berdasarkan nilai kendaraan, dari ≤Rp 125 juta hingga >Rp 800 juta." },
            ].map((k, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-card p-5 text-center">
                <div className="text-2xl mb-2">{k.icon}</div>
                <div className="font-heading text-navy font-bold text-sm mb-2">{k.judul}</div>
                <p className="text-xs text-[#475569] leading-relaxed">{k.isi}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RUMUS */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-6">
            Rumus Dasar Perhitungan Premi
          </h2>
          <div className="bg-navy rounded-card p-8 text-center mb-6">
            <div className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-3">Formula Premi Tahunan</div>
            <div className="font-heading text-white text-[clamp(1.2rem,2vw,1.5rem)] mb-2">
              Premi = Nilai Kendaraan × Tarif OJK (%)
            </div>
            <div className="text-gold/70 text-sm">÷ 100</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: "Nilai Kendaraan", desc: "Harga pasar kendaraan saat ini. Untuk baru = OTR. Untuk bekas = harga pasar aktual.", icon: "🚗" },
              { label: "Tarif OJK (%)", desc: "Persentase dari tabel OJK sesuai kategori, wilayah, dan jenis perlindungan (All Risk/TLO).", icon: "📊" },
              { label: "Hasil = Premi/Tahun", desc: "Angka yang dihasilkan adalah estimasi premi tahunan sebelum diskon dan biaya tambahan.", icon: "💰" },
            ].map((v, i) => (
              <div key={i} className="bg-cream border border-black/8 rounded-card p-4 text-center">
                <div className="text-xl mb-2">{v.icon}</div>
                <div className="font-semibold text-navy text-sm mb-1">{v.label}</div>
                <p className="text-xs text-[#475569] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LANGKAH PERHITUNGAN */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-8">
            Langkah-Langkah Menghitung Premi
          </h2>
          <div className="flex flex-col gap-4">
            {langkahHitung.map((l, i) => (
              <div key={i} className="flex gap-4 bg-white border border-black/8 rounded-card p-5">
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center flex-shrink-0 font-heading font-bold text-gold text-sm">{l.step}</div>
                <div>
                  <div className="font-heading text-navy font-bold text-sm mb-1">{l.judul}</div>
                  <p className="text-xs text-[#475569] leading-relaxed">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KATEGORI OJK */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            5 Kategori Harga Kendaraan OJK
          </h2>
          <div className="overflow-x-auto rounded-card border border-black/8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy/5 border-b border-black/8">
                  <th className="text-left py-3 px-4 font-semibold text-navy">Kategori</th>
                  <th className="text-left py-3 px-4 font-semibold text-navy">Rentang Harga</th>
                  <th className="text-left py-3 px-4 font-semibold text-navy">Contoh Kendaraan</th>
                </tr>
              </thead>
              <tbody>
                {kategoriOJK.map((k, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cream/40"}>
                    <td className="py-3 px-4 font-bold text-navy text-xs">{k.kat}</td>
                    <td className="py-3 px-4 text-xs text-gold font-semibold">{k.rentang}</td>
                    <td className="py-3 px-4 text-xs text-[#475569]">{k.contoh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TABEL TARIF WILAYAH III */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-2">
            Tabel Tarif OJK — Wilayah III (Yogyakarta & Sekitarnya)
          </h2>
          <p className="text-[#475569] text-sm mb-6 leading-relaxed">
            Tarif batas bawah untuk Wilayah III yang mencakup Jawa Tengah, DIY, Jawa Timur, Bali, dan sebagian besar luar Jawa:
          </p>
          <div className="overflow-x-auto rounded-card border border-black/8 mb-3">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left py-3 px-3 font-semibold text-white/70">Kategori</th>
                  <th className="text-center py-3 px-3 font-semibold text-gold">All Risk BBM</th>
                  <th className="text-center py-3 px-3 font-semibold text-gold/70">All Risk EV</th>
                  <th className="text-center py-3 px-3 font-semibold">TLO BBM</th>
                  <th className="text-center py-3 px-3 font-semibold text-white/70">TLO EV</th>
                </tr>
              </thead>
              <tbody>
                {tarifWilayahIII.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cream/40"}>
                    <td className="py-3 px-3 font-semibold text-navy">{r.kat}</td>
                    <td className="py-3 px-3 text-center text-gold font-bold">{r.ar}</td>
                    <td className="py-3 px-3 text-center text-gold/70">{r.arEV}</td>
                    <td className="py-3 px-3 text-center text-[#475569]">{r.tlo}</td>
                    <td className="py-3 px-3 text-center text-[#475569]/70">{r.tloEV}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#475569]">* Tarif batas bawah OJK SE No.6/SEOJK.05/2017. Tarif batas atas sekitar 20–40% lebih tinggi dari angka di atas. Praktisi independen membantu Anda mendapatkan penawaran dalam rentang yang kompetitif.</p>
        </section>

        {/* CONTOH PERHITUNGAN */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-2">
            Contoh Perhitungan Nyata
          </h2>
          <p className="text-[#475569] text-sm mb-8 leading-relaxed">
            Tiga simulasi perhitungan premi menggunakan tarif batas bawah OJK untuk kendaraan konvensional (BBM):
          </p>
          <div className="flex flex-col gap-6">
            {contohHitung.map((c, i) => (
              <div key={i} className="border border-black/8 rounded-card overflow-hidden">
                <div className="bg-navy/5 px-5 py-3 border-b border-black/8">
                  <span className="font-semibold text-navy text-sm">{c.label}</span>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 text-sm">
                    <div><div className="text-xs text-[#475569] mb-1">Nilai Kendaraan</div><div className="font-bold text-navy">{formatRp(c.nilai)}</div></div>
                    <div><div className="text-xs text-[#475569] mb-1">Wilayah</div><div className="font-bold text-navy">{c.wilayah}</div></div>
                    <div><div className="text-xs text-[#475569] mb-1">Kategori OJK</div><div className="font-bold text-navy">{c.kat}</div></div>
                    <div><div className="text-xs text-[#475569] mb-1">Tarif All Risk</div><div className="font-bold text-gold">{c.tarif}%</div></div>
                  </div>
                  <div className="bg-navy rounded-lg p-4 flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 text-center">
                      <div className="text-white/60 text-xs mb-1">All Risk — {formatRp(c.nilai)} × {c.tarif}%</div>
                      <div className="font-heading text-gold text-xl font-bold">{formatRp(c.hasilAR)}</div>
                      <div className="text-white/50 text-xs">per tahun</div>
                    </div>
                    <div className="w-px bg-white/10 hidden sm:block" />
                    <div className="flex-1 text-center">
                      <div className="text-white/60 text-xs mb-1">TLO — {formatRp(c.nilai)} × {c.tarifTLO}%</div>
                      <div className="font-heading text-white text-xl font-bold">{formatRp(c.hasilTLO)}</div>
                      <div className="text-white/50 text-xs">per tahun</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gold/5 border border-gold/20 rounded-lg p-4 text-sm text-[#475569]">
            <strong className="text-navy">Ingin hitung kendaraan Anda sendiri?</strong>{" "}
            <Link href="/asuransi-kendaraan" className="text-gold hover:underline font-semibold">
              Gunakan kalkulator premi OJK interaktif kami
            </Link>{" "}
            yang sudah mencakup semua wilayah, kategori, jenis kendaraan, dan periode asuransi.
          </div>
        </section>

        {/* FAKTOR LAIN */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Faktor Lain yang Mempengaruhi Premi Final
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed mb-6">Rumus OJK menghasilkan estimasi dasar. Premi final yang ditawarkan perusahaan asuransi bisa berbeda karena beberapa faktor tambahan:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🌊", faktor: "Perluasan jaminan", isi: "Menambahkan perluasan banjir (+0,05–0,20%), gempa bumi (+0,05–0,15%), atau SRCC akan menambah premi." },
              { icon: "🛡️", faktor: "Tanggung jawab pihak ketiga (TPL)", isi: "Proteksi kerugian pihak ketiga akibat kendaraan Anda. Biasanya ditambahkan dengan biaya Rp 50.000–300.000/tahun." },
              { icon: "🎁", faktor: "Diskon volume/loyalitas", isi: "Untuk fleet, klien lama, atau renewal tanpa klaim, perusahaan asuransi sering memberikan diskon 5–15%." },
              { icon: "🔍", faktor: "Kondisi kendaraan (survei)", isi: "Untuk kendaraan bekas, hasil survei bisa mempengaruhi tarif atau syarat polis (pengecualian kerusakan pre-existing)." },
            ].map((f, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-card p-5 flex gap-3">
                <span className="text-xl flex-shrink-0">{f.icon}</span>
                <div>
                  <div className="font-semibold text-navy text-sm mb-1">{f.faktor}</div>
                  <p className="text-xs text-[#475569] leading-relaxed">{f.isi}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-8">Pertanyaan yang Sering Diajukan</h2>
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
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">Artikel & Halaman Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-kendaraan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🧮 Kalkulator Premi OJK Interaktif →</Link>
            <Link href="/artikel/perbedaan-all-risk-tlo" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚖️ All Risk vs TLO →</Link>
            <Link href="/asuransi-kendaraan/mobil" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚗 Asuransi Mobil Jogja →</Link>
            <Link href="/artikel/asuransi-mobil-listrik" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚡ Premi Asuransi Mobil Listrik →</Link>
          </div>
        </section>

        {/* AUTHOR BOX */}
        <section className="py-10">
          <div className="bg-navy rounded-card p-6 flex gap-5 items-start">
            <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 font-heading font-bold text-gold text-lg">R</div>
            <div>
              <div className="font-heading text-white font-bold mb-1">Rio MD</div>
              <div className="text-gold2 text-xs mb-3">Praktisi Asuransi Independen · Yogyakarta · 8 Tahun Pengalaman</div>
              <p className="text-white/65 text-sm leading-relaxed">
                Memahami cara kerja tarif OJK memberi Anda daya tawar yang lebih baik saat membeli polis. Sebagai praktisi independen, saya membantu klien memverifikasi kewajaran penawaran yang diterima dan memastikan mereka tidak membayar lebih dari yang seharusnya.
              </p>
            </div>
          </div>
        </section>
        <div className="pb-8 text-xs text-[#5A6472] leading-relaxed border-t border-black/5 pt-6">
          Tarif dalam artikel ini mengacu OJK SE No.6/SEOJK.05/2017. Tarif referensi dapat berubah sewaktu-waktu sesuai kebijakan OJK. Premi final ditetapkan perusahaan asuransi dan dapat berbeda dari estimasi dalam artikel ini.
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Ingin Estimasi Premi<br />yang Lebih Akurat?
          </h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">
            Gunakan kalkulator interaktif kami atau konsultasikan langsung dengan Pak Rio untuk mendapatkan perbandingan penawaran dari beberapa perusahaan asuransi sekaligus.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/asuransi-kendaraan" className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">🧮 Buka Kalkulator Premi OJK</Link>
            <a href={wa} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi via WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
