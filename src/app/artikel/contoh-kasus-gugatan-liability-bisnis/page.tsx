import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contoh Kasus Gugatan Liability Bisnis di Indonesia | Asuransi Jogja",
  description:
    "Kumpulan studi kasus nyata gugatan liability terhadap hotel, restoran, kontraktor, dan UMKM di Indonesia. Pelajari risiko hukum bisnis Anda dan cara melindunginya.",
  keywords:
    "contoh kasus gugatan liability, studi kasus asuransi liability indonesia, gugatan hotel tamu cedera, kasus keracunan makanan restoran, tanggung jawab hukum bisnis, klaim asuransi liability, contoh klaim public liability indonesia",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/contoh-kasus-gugatan-liability-bisnis" },
  openGraph: {
    title: "Contoh Kasus Gugatan Liability Bisnis di Indonesia",
    url: "https://asuransijogja.biz.id/artikel/contoh-kasus-gugatan-liability-bisnis",
  },
};

const kasusHotel = [
  {
    judul: "Tamu Terpeleset di Area Kolam Renang Hotel Bintang 3",
    lokasi: "Yogyakarta",
    kronologi:
      "Seorang tamu hotel terpeleset di lantai basah area kolam renang yang tidak diberi tanda peringatan. Tamu tersebut mengalami patah tulang pinggul dan harus menjalani operasi serta fisioterapi selama 4 bulan.",
    tuntutan:
      "Keluarga tamu mengajukan gugatan perdata senilai Rp 650 juta mencakup biaya medis, kehilangan penghasilan selama pemulihan, dan kompensasi moral.",
    pelajaran:
      "Hotel tidak memiliki asuransi Public Liability. Pengelola harus membayar dari kas sendiri dan hampir kehilangan izin operasional akibat proses hukum yang berlarut.",
    produk: { label: "Public Liability", href: "/asuransi-liability/public-liability" },
  },
];

const kasusRestoran = [
  {
    judul: "Keracunan Massal di Acara Pernikahan — Katering Lokal",
    lokasi: "Sleman, D.I. Yogyakarta",
    kronologi:
      "Sebuah usaha katering menyajikan hidangan untuk acara pernikahan dengan 200 tamu. Sekitar 85 tamu mengalami keracunan makanan akibat ayam yang tidak dimasak sempurna. Puluhan orang harus dirawat inap.",
    tuntutan:
      "Penyelenggara acara dan keluarga yang menikah mengajukan gugatan gabungan senilai Rp 1,2 miliar. Dinas Kesehatan juga menjatuhkan sanksi administratif dan pencabutan sertifikat laik hygiene.",
    pelajaran:
      "Usaha katering tanpa asuransi harus menanggung biaya hukum dan ganti rugi yang jauh melebihi keuntungan setahun. Usaha tutup permanen.",
    produk: { label: "Public Liability + Product Liability", href: "/asuransi-liability/public-liability" },
  },
];

const kasusKontraktor = [
  {
    judul: "Puing Konstruksi Jatuh Menimpa Kendaraan Warga",
    lokasi: "Kota Yogyakarta",
    kronologi:
      "Material scaffolding proyek renovasi gedung komersial jatuh ke jalan publik dan menghancurkan atap dua kendaraan yang parkir. Salah satu kendaraan adalah mobil dinas perusahaan tetangga.",
    tuntutan:
      "Pemilik kendaraan pertama menuntut Rp 180 juta (total loss), perusahaan tetangga menuntut Rp 350 juta untuk kerugian operasional selama kendaraan dinas tidak bisa digunakan.",
    pelajaran:
      "Kontraktor sudah memiliki asuransi CAR (Contractor All Risk) untuk bangunan, tetapi tidak punya Public Liability — sehingga tuntutan pihak ketiga tidak ter-cover.",
    produk: { label: "Public Liability", href: "/asuransi-liability/public-liability" },
  },
];

const kasusKaryawan = [
  {
    judul: "Pekerja Pabrik Kehilangan Jari Akibat Mesin Tanpa Pengaman",
    lokasi: "Bantul, D.I. Yogyakarta",
    kronologi:
      "Seorang operator mesin di pabrik furnitur mengalami kecelakaan kerja — tiga jari tangannya terpotong mesin serut yang tidak dilengkapi pelindung standar. Karyawan kehilangan kemampuan bekerja secara permanen.",
    tuntutan:
      "Keluarga karyawan menggugat Rp 950 juta atas dasar kelalaian pengusaha tidak menyediakan APD (Alat Pelindung Diri) dan pengaman mesin yang layak. BPJS Ketenagakerjaan hanya menanggung Rp 120 juta — jauh di bawah tuntutan.",
    pelajaran:
      "Gap antara BPJS (Rp 120 juta) dan tuntutan aktual (Rp 950 juta) sebesar Rp 830 juta harus ditanggung pengusaha. Ini persis gap yang ditutup Employer Liability.",
    produk: { label: "Employer Liability", href: "/asuransi-liability/employer-liability" },
  },
];

const kasusLingkungan = [
  {
    judul: "Bocornya Tangki Kimia Mencemari Sumur Warga",
    lokasi: "Kabupaten Sleman",
    kronologi:
      "Tangki penyimpanan bahan kimia industri tekstil bocor dan meresap ke dalam tanah, mencemari 12 sumur warga di sekitar pabrik. Air sumur berwarna dan berbau, tidak bisa digunakan untuk makan-minum selama 8 bulan.",
    tuntutan:
      "Warga mengajukan gugatan class action senilai Rp 2,3 miliar mencakup biaya air bersih alternatif, kerugian kesehatan, penurunan nilai tanah, dan biaya remediasi sumur. KLHK juga mengeluarkan perintah pemulihan lingkungan.",
    pelajaran:
      "Tanpa asuransi Environmental Liability, pabrik harus menanggung seluruh biaya remediasi + ganti rugi warga + denda regulator sekaligus — hampir setara nilai aset perusahaan.",
    produk: { label: "Liability Limbah B3", href: "/asuransi-liability/limbah-b3" },
  },
];

const kasusUMKM = [
  {
    judul: "Produk Skincare UMKM Menyebabkan Alergi Massal",
    lokasi: "Yogyakarta (via marketplace online)",
    kronologi:
      "Sebuah brand skincare lokal yang dijual di marketplace menggunakan bahan pengawet tidak terstandarisasi. Lebih dari 200 konsumen melaporkan reaksi alergi parah — kemerahan, pembengkakan, hingga luka. Kasus viral di media sosial.",
    tuntutan:
      "Konsumen mengajukan gugatan kolektif melalui YLKI senilai Rp 1,5 miliar. BPOM mencabut izin edar. Marketplace memblokir akun penjual. Toko offline ikut tutup akibat kehilangan kepercayaan.",
    pelajaran:
      "UMKM yang menjual produk via online perlu Product Liability — karena jangkauan konsumen yang luas membuat potensi gugatan massal jauh lebih besar dibanding toko konvensional.",
    produk: { label: "Product Liability", href: "/asuransi-liability/product-liability" },
  },
];

const semuaKasus = [
  { kategori: "🏨 Hotel & Hospitality", kasus: kasusHotel },
  { kategori: "🍽️ Restoran & Katering", kasus: kasusRestoran },
  { kategori: "🏗️ Kontraktor & Konstruksi", kasus: kasusKontraktor },
  { kategori: "👷 Karyawan & Kecelakaan Kerja", kasus: kasusKaryawan },
  { kategori: "🌿 Lingkungan & Limbah B3", kasus: kasusLingkungan },
  { kategori: "📦 UMKM & Produk Online", kasus: kasusUMKM },
];

export default function ArtikelGugatanLiabilityPage() {
  return (
    <>
      <Header />
      <div className="pt-[68px]">
        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B]">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Contoh Kasus Gugatan Liability</span>
          </div>
        </div>

        {/* ARTICLE HEADER */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 80% 40%, rgba(200,150,62,0.12) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              <span className="text-[0.5rem] text-gold">◆</span>Edukasi Asuransi · Studi Kasus
            </div>
            <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.2] mb-4">
              Contoh Nyata Gugatan Liability<br /><em className="not-italic text-gold">yang Menimpa Bisnis</em> di Indonesia
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px]">
              Kumpulan studi kasus riil dan skenario berdasarkan kejadian nyata — hotel, restoran, kontraktor, hingga UMKM online. Pelajari bagaimana satu insiden bisa mengguncang bisnis tanpa asuransi liability yang tepat.
            </p>
            <div className="flex gap-6 mt-8 pt-6 border-t border-white/10 text-sm text-white/50">
              <span>📅 Diperbarui Mei 2025</span>
              <span>⏱️ 8 menit membaca</span>
              <span>🔖 6 studi kasus</span>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-12 px-[5vw] bg-white">
          <div className="max-w-[750px] mx-auto">
            <div className="bg-gold/6 border border-gold/20 rounded-xl p-6 mb-8">
              <p className="text-sm leading-[1.85] text-navy2">
                <strong className="text-gold">Catatan Redaksi:</strong> Kasus-kasus berikut merupakan representasi dari insiden yang umum terjadi di industri masing-masing di Indonesia, termasuk beberapa kasus yang telah terdokumentasi di media lokal. Nama dan detail spesifik disamarkan untuk keperluan privasi. Tujuan artikel ini adalah edukasi — membantu pelaku usaha memahami risiko nyata yang mereka hadapi.
              </p>
            </div>
            <p className="text-base leading-[1.85] text-[#64748B] mb-4">
              Banyak pelaku usaha di Yogyakarta yang baru menyadari pentingnya <Link href="/asuransi-liability" className="text-gold hover:text-gold2 transition-colors no-underline font-semibold">asuransi liability</Link> setelah menghadapi gugatan hukum secara langsung. Pada titik itu, seringkali sudah terlambat — biaya hukum sudah menguras kas, reputasi rusak, dan operasional terganggu.
            </p>
            <p className="text-base leading-[1.85] text-[#64748B]">
              Artikel ini mengumpulkan 6 studi kasus dari berbagai sektor bisnis — masing-masing dengan kronologi, nilai tuntutan, dan pelajaran yang bisa diterapkan sekarang.
            </p>
          </div>
        </section>

        {/* KASUS-KASUS */}
        {semuaKasus.map((grup, gi) => (
          <section key={gi} className={`py-12 px-[5vw] ${gi % 2 === 0 ? "bg-cream" : "bg-white"}`}>
            <div className="max-w-[750px] mx-auto">
              <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-6">{grup.kategori}</div>
              {grup.kasus.map((k, ki) => (
                <article key={ki} className="bg-white rounded-[18px] border border-black/7 overflow-hidden mb-6 last:mb-0">
                  <div className="bg-navy px-6 py-4">
                    <h2 className="font-heading text-white text-[1.1rem] leading-tight">{k.judul}</h2>
                    <div className="text-gold2/70 text-xs mt-1">📍 {k.lokasi}</div>
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-2">Kronologi</div>
                      <p className="text-base leading-[1.8] text-[#64748B]">{k.kronologi}</p>
                    </div>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-2">⚠️ Tuntutan & Dampak</div>
                      <p className="text-sm leading-[1.75] text-red-800">{k.tuntutan}</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                      <div className="text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">💡 Pelajaran</div>
                      <p className="text-sm leading-[1.75] text-amber-900">{k.pelajaran}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-black/5">
                      <span className="text-xs text-[#64748B]">Produk yang sesuai:</span>
                      <Link href={k.produk.href} className="bg-gold/10 border border-gold/25 text-navy font-semibold text-xs px-4 py-2 rounded-full hover:bg-gold/20 hover:border-gold/50 transition-all no-underline">
                        🛡️ {k.produk.label} →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* RINGKASAN BIAYA */}
        <section className="py-14 px-[5vw] bg-navy">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-4">Ringkasan Biaya</div>
            <h2 className="font-heading text-white text-[clamp(1.5rem,2.5vw,2rem)] mb-6">Berapa Biaya Gugatan vs Premi Asuransi?</h2>
            <div className="overflow-hidden rounded-card border border-white/10">
              <div className="grid grid-cols-3 bg-white/5 px-5 py-3 text-xs font-bold tracking-widest uppercase text-gold2/60">
                <span>Sektor</span><span className="text-center">Nilai Tuntutan</span><span className="text-right">Est. Premi/Tahun</span>
              </div>
              {[
                { sektor: "Hotel (kolam renang)", tuntutan: "Rp 650 juta", premi: "Rp 8–15 juta" },
                { sektor: "Katering & Restoran", tuntutan: "Rp 1,2 miliar", premi: "Rp 5–12 juta" },
                { sektor: "Kontraktor", tuntutan: "Rp 530 juta", premi: "Rp 7–20 juta" },
                { sektor: "Pabrik (Employer)", tuntutan: "Rp 950 juta", premi: "Rp 10–25 juta" },
                { sektor: "Industri (Lingkungan)", tuntutan: "Rp 2,3 miliar", premi: "Rp 15–40 juta" },
                { sektor: "UMKM Produk Online", tuntutan: "Rp 1,5 miliar", premi: "Rp 4–10 juta" },
              ].map((r, i) => (
                <div key={i} className={`grid grid-cols-3 px-5 py-3.5 border-t border-white/5 items-center ${i % 2 === 0 ? "bg-white/3" : ""}`}>
                  <span className="text-sm text-white/80">{r.sektor}</span>
                  <span className="text-sm text-red-400 text-center font-semibold">{r.tuntutan}</span>
                  <span className="text-sm text-green-400 text-right font-semibold">{r.premi}</span>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-xs mt-4 leading-relaxed">*Estimasi premi bersifat indikatif dan bergantung pada skala bisnis, limit pertanggungan, dan profil risiko. Hubungi kami untuk penawaran spesifik.</p>
          </div>
        </section>

        {/* KESIMPULAN + INTERNAL LINKS */}
        <section className="py-14 px-[5vw] bg-white">
          <div className="max-w-[750px] mx-auto">
            <h2 className="font-heading text-navy text-[1.4rem] mb-4">Kesimpulan: Asuransi Liability Bukan Opsi, Ini Kebutuhan</h2>
            <p className="text-base leading-[1.85] text-[#64748B] mb-4">
              Dari keenam kasus di atas, pola yang sama terulang: bisnis yang tidak memiliki <Link href="/asuransi-liability" className="text-gold hover:text-gold2 transition-colors no-underline font-semibold">asuransi liability</Link> harus menanggung biaya hukum yang jauh melebihi pendapatan tahunan mereka. Beberapa bahkan harus tutup permanen.
            </p>
            <p className="text-base leading-[1.85] text-[#64748B] mb-8">
              Sebaliknya, dengan premi yang relatif terjangkau, pemegang polis cukup melaporkan insiden — dan seluruh proses hukum, biaya pengacara, serta pembayaran ganti rugi ditangani oleh perusahaan asuransi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 rounded-xl p-5 no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-heading text-navy font-semibold text-sm group-hover:text-gold transition-colors mb-1">Asuransi Public Liability</div>
                <p className="text-xs text-[#64748B]">Untuk hotel, restoran, tempat wisata, dan bisnis yang berinteraksi langsung dengan publik</p>
              </Link>
              <Link href="/asuransi-liability/employer-liability" className="bg-cream border border-black/8 rounded-xl p-5 no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                <div className="text-2xl mb-2">👷</div>
                <div className="font-heading text-navy font-semibold text-sm group-hover:text-gold transition-colors mb-1">Asuransi Employer Liability</div>
                <p className="text-xs text-[#64748B]">Untuk kontraktor, pabrik, dan semua bisnis yang mempekerjakan karyawan dengan risiko kerja</p>
              </Link>
              <Link href="/asuransi-liability/product-liability" className="bg-cream border border-black/8 rounded-xl p-5 no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                <div className="text-2xl mb-2">📦</div>
                <div className="font-heading text-navy font-semibold text-sm group-hover:text-gold transition-colors mb-1">Asuransi Product Liability</div>
                <p className="text-xs text-[#64748B]">Untuk produsen, UMKM, dan importir yang memasarkan produk fisik kepada konsumen</p>
              </Link>
              <Link href="/asuransi-liability/limbah-b3" className="bg-cream border border-black/8 rounded-xl p-5 no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                <div className="text-2xl mb-2">⚗️</div>
                <div className="font-heading text-navy font-semibold text-sm group-hover:text-gold transition-colors mb-1">Liability Limbah B3</div>
                <p className="text-xs text-[#64748B]">Untuk industri yang menghasilkan atau mengelola bahan berbahaya dan beracun</p>
              </Link>
            </div>

            <div className="bg-navy rounded-xl p-6 text-center">
              <p className="text-white/80 text-sm mb-4">Tidak yakin produk mana yang paling sesuai untuk bisnis Anda? Kami bantu analisis risiko secara gratis — tanpa tekanan untuk membeli.</p>
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Gratis via WhatsApp</a>
            </div>
          </div>
        </section>

        {/* ARTIKEL TERKAIT */}
        <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Artikel Terkait</div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/artikel/pentingnya-asuransi-dunia-usaha-jogja" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏢 Asuransi untuk Dunia Usaha Jogja →</Link>
              <Link href="/asuransi-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛡️ Semua Produk Liability →</Link>
              <Link href="/asuransi-properti/hotel-vila" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏨 Asuransi Hotel & Vila →</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
