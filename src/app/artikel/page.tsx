import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Artikel Edukasi Asuransi – Tips & Panduan untuk Anda",
  description: "Artikel dan panduan asuransi dari konsultan Yogyakarta. Pelajari cara klaim, bengkel rekanan, cara menghitung nilai asuransi, dan pentingnya asuransi untuk dunia usaha.",
  keywords: "artikel asuransi jogja, edukasi asuransi yogyakarta, tips asuransi, cara klaim asuransi mobil, nilai asuransi, asuransi usaha yogyakarta",
  alternates: { canonical: "https://asuransijogja.com/artikel" },
  openGraph: {
    title: "Artikel Edukasi Asuransi – Asuransi Jogja",
    description: "Panduan dan tips asuransi dari konsultan berpengalaman di Yogyakarta.",
    url: "https://asuransijogja.com/artikel",
  },
};

const ARTIKEL = [
  {
    slug: "cara-klaim-asuransi-mobil",
    icon: "🚗",
    kategori: "Kendaraan",
    judul: "Cara Klaim Asuransi Mobil: Panduan Lengkap Step-by-Step",
    ringkasan: "Kecelakaan atau kerusakan mobil bisa sangat stres. Tapi dengan mengetahui prosedur klaim yang benar, proses ganti rugi bisa berjalan lancar dan cepat. Simak panduan lengkapnya.",
    menit: "8 menit",
  },
  {
    slug: "bengkel-rekanan-asuransi-jogja",
    icon: "🔧",
    kategori: "Kendaraan",
    judul: "Bengkel Rekanan Asuransi di Jogja: Panduan Memilih & Daftar Lengkap",
    ringkasan: "Salah satu penentu kepuasan klaim kendaraan adalah bengkel rekanan. Pelajari cara memilih bengkel rekanan yang tepat dan apa yang perlu diketahui sebelum membawa kendaraan.",
    menit: "6 menit",
  },
  {
    slug: "pentingnya-asuransi-dunia-usaha-jogja",
    icon: "🏢",
    kategori: "Bisnis",
    judul: "Pentingnya Asuransi di Dunia Usaha Yogyakarta",
    ringkasan: "Yogyakarta adalah kota dengan ekosistem bisnis yang dinamis. Namun banyak pelaku usaha UMKM dan korporasi belum memiliki proteksi yang memadai. Mengapa asuransi bisnis itu penting?",
    menit: "7 menit",
  },
  {
    slug: "cara-menghitung-nilai-asuransi",
    icon: "🧮",
    kategori: "Panduan",
    judul: "Cara Menghitung Nilai Asuransi yang Tepat (Avoid Underinsurance)",
    ringkasan: "Banyak pemegang polis rugi besar bukan karena tidak punya asuransi, tapi karena nilai pertanggungannya terlalu kecil. Pelajari cara menghitung nilai asuransi yang benar.",
    menit: "9 menit",
  },
];

const schemaArtikelList = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Artikel Edukasi Asuransi – Asuransi Jogja",
  "url": "https://asuransijogja.com/artikel",
  "description": "Kumpulan artikel dan panduan asuransi dari konsultan asuransi kerugian di Yogyakarta.",
  "publisher": { "@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.com" },
};

export default function ArtikelIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikelList) }} />

      {/* HERO */}
      <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10 max-w-2xl">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-3">Edukasi Asuransi</div>
          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.2] mb-4">
            Artikel &amp; Panduan<br /><em className="not-italic text-gold">Asuransi untuk Anda</em>
          </h1>
          <p className="text-white/65 text-sm leading-[1.85] max-w-[480px]">
            Pahami asuransi sebelum membeli. Artikel berikut ditulis berdasarkan pengalaman 10+ tahun konsultan asuransi kerugian di Yogyakarta.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-xs text-[#64748B]">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Artikel</span>
        </div>
      </div>

      {/* ARTIKEL GRID */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTIKEL.map(a => (
            <Link key={a.slug} href={`/artikel/${a.slug}`} className="no-underline group">
              <article className="border border-black/8 rounded-card p-7 h-full hover:shadow-[0_12px_40px_rgba(13,33,55,0.1)] hover:-translate-y-1.5 hover:border-gold/30 transition-all relative overflow-hidden bg-white">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{a.icon}</span>
                  <span className="bg-gold/10 border border-gold/20 text-gold text-[0.68rem] font-bold px-2.5 py-1 rounded-full">{a.kategori}</span>
                </div>
                <h2 className="font-heading text-navy font-bold text-[1.05rem] leading-[1.35] mb-3 group-hover:text-gold transition-colors">{a.judul}</h2>
                <p className="text-sm leading-relaxed text-[#64748B] mb-4">{a.ringkasan}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8]">⏱ {a.menit} baca</span>
                  <span className="text-gold text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">Baca →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5vw] bg-cream text-center">
        <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-navy mb-3">Masih Ada Pertanyaan?</h2>
        <p className="text-sm text-[#64748B] max-w-[440px] mx-auto mb-6">Konsultasi langsung dengan Pak Rio — gratis, tanpa tekanan, dan mendapat rekomendasi yang benar-benar sesuai kebutuhan Anda.</p>
        <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Gratis via WhatsApp</a>
      </section>
    </>
  );
}
