import Link from "next/link";

// Highlight 1 artikel representatif dari setiap cluster produk (Kendaraan, Properti,
// Engineering, Liability, Surety Bond) — dipilih dari topik yang paling banyak dicari.
const ARTIKEL_HIGHLIGHT = [
  {
    slug: "cara-klaim-asuransi-mobil",
    icon: "🚗",
    kategori: "Kendaraan",
    judul: "Cara Klaim Asuransi Mobil: Panduan Lengkap Step-by-Step",
    ringkasan: "Kecelakaan atau kerusakan mobil bisa sangat stres. Tapi dengan mengetahui prosedur klaim yang benar, proses ganti rugi bisa berjalan lancar dan cepat.",
    menit: "8 menit",
  },
  {
    slug: "asuransi-rumah-tinggal-jogja",
    icon: "🏡",
    kategori: "Properti",
    judul: "Asuransi Rumah Tinggal di Jogja: Panduan Lengkap untuk Pemilik Hunian",
    ringkasan: "Rumah adalah aset terbesar bagi kebanyakan orang. Ketahui cara melindungi hunian Anda dari kebakaran, banjir, gempa bumi, dan risiko lainnya.",
    menit: "8 menit",
  },
  {
    slug: "perbedaan-car-ear-asuransi-engineering",
    icon: "🏗️",
    kategori: "Engineering",
    judul: "Perbedaan CAR dan EAR: Panduan Memilih Asuransi Engineering yang Tepat",
    ringkasan: "Contractor All Risk (CAR) dan Erection All Risk (EAR) seringkali tertukar. Padahal keduanya punya cakupan berbeda untuk proyek Anda.",
    menit: "9 menit",
  },
  {
    slug: "perbedaan-jenis-asuransi-liability",
    icon: "🛡️",
    kategori: "Liability",
    judul: "Jenis-Jenis Asuransi Liability: Public, Product, Employer, dan Limbah B3",
    ringkasan: "Asuransi liability punya banyak varian. Masing-masing menanggung risiko yang berbeda. Pahami perbedaannya agar bisnis Anda terlindungi.",
    menit: "9 menit",
  },
  {
    slug: "cara-mengurus-jaminan-penawaran-jogja",
    icon: "📄",
    kategori: "Surety Bond",
    judul: "Cara Mengurus Jaminan Penawaran (Bid Bond) untuk Tender di Jogja",
    ringkasan: "Jaminan penawaran wajib untuk mengikuti lelang proyek pemerintah maupun swasta. Pelajari syarat, dokumen, dan proses pengurusannya.",
    menit: "7 menit",
  },
  {
    slug: "cara-menghitung-nilai-asuransi",
    icon: "🧮",
    kategori: "Panduan",
    judul: "Cara Menghitung Nilai Asuransi yang Tepat (Avoid Underinsurance)",
    ringkasan: "Banyak pemegang polis rugi besar bukan karena tidak punya asuransi, tapi karena nilai pertanggungannya terlalu kecil.",
    menit: "9 menit",
  },
];

export default function ArtikelPreview() {
  return (
    <section className="py-[5.5rem] px-[5vw] bg-cream">
      <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Edukasi Asuransi</div>
          <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">
            Artikel &amp; Panduan<br />untuk Keputusan yang Tepat
          </h2>
          <p className="text-[0.95rem] leading-[1.8] text-[#64748B] max-w-[560px] mt-3">
            Pahami asuransi sebelum membeli — cara klaim, perbedaan produk, dan tips praktis dari pengalaman 10+ tahun konsultan asuransi kerugian di Yogyakarta.
          </p>
        </div>
        <Link
          href="/artikel"
          className="inline-flex items-center gap-2 bg-navy text-white font-semibold text-[0.92rem] px-5 py-2.5 rounded-full hover:bg-navy2 transition-all no-underline whitespace-nowrap group"
        >
          Lihat Semua Artikel
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ARTIKEL_HIGHLIGHT.map(a => (
          <Link key={a.slug} href={`/artikel/${a.slug}`} className="no-underline group">
            <article className="border border-black/8 rounded-card p-6 h-full bg-white hover:shadow-[0_12px_40px_rgba(13,33,55,0.1)] hover:-translate-y-1.5 hover:border-gold/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{a.icon}</span>
                <span className="bg-gold/10 border border-gold/20 text-gold text-[0.72rem] font-bold px-2 py-0.5 rounded-full">{a.kategori}</span>
              </div>
              <h3 className="font-heading text-navy font-bold text-[0.98rem] leading-[1.35] mb-2 group-hover:text-gold transition-colors">{a.judul}</h3>
              <p className="text-[0.82rem] leading-relaxed text-[#64748B] mb-4 line-clamp-3">{a.ringkasan}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-[#94A3B8]">⏱ {a.menit} baca</span>
                <span className="text-gold text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">Baca →</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
