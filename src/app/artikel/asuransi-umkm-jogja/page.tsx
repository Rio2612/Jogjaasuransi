import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Panduan Lengkap Asuransi untuk UMKM di Yogyakarta | Asuransi Jogja",
  description:
    "Panduan lengkap asuransi UMKM Jogja: jenis asuransi yang wajib dimiliki, estimasi premi, dan cara klaim. Dari asuransi toko, kendaraan niaga, liability, hingga kargo pengiriman.",
  keywords:
    "asuransi umkm jogja, asuransi toko yogyakarta, asuransi usaha kecil menengah jogja, proteksi bisnis umkm yogyakarta, asuransi warung jogja, asuransi pedagang jogja, asuransi bisnis kecil yogyakarta, jenis asuransi untuk umkm",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/asuransi-umkm-jogja" },
  openGraph: {
    title: "Panduan Lengkap Asuransi untuk UMKM di Yogyakarta",
    url: "https://asuransijogja.biz.id/artikel/asuransi-umkm-jogja",
  },
};

const risikoUMKM = [
  { icon: "🔥", risiko: "Kebakaran Toko / Gudang", dampak: "Aset habis terbakar dalam hitungan jam, tanpa asuransi = mulai dari nol", frekuensi: "Sering" },
  { icon: "🌊", risiko: "Banjir & Kerusakan Cuaca", dampak: "Jogja bagian selatan dan bantaran sungai rentan banjir tahunan", frekuensi: "Musiman" },
  { icon: "🚗", risiko: "Kecelakaan Kendaraan Niaga", dampak: "Motor/mobil operasional rusak, pengiriman terhenti, klaim BPKB diblokir", frekuensi: "Sering" },
  { icon: "⚖️", risiko: "Gugatan Konsumen / Pelanggan", dampak: "Produk bermasalah atau pelanggan cedera di toko bisa berujung tuntutan hukum", frekuensi: "Meningkat" },
  { icon: "📦", risiko: "Kerusakan Barang Pengiriman", dampak: "Kiriman hilang atau rusak, tuntutan pembeli, reputasi toko online hancur", frekuensi: "Sering" },
  { icon: "🏥", risiko: "Kecelakaan Karyawan", dampak: "Karyawan cedera saat kerja, BPJS tidak cukup, pengusaha wajib tanggung selisihnya", frekuensi: "Sedang" },
];

const paketAsuransiUMKM = [
  {
    level: "Paket Dasar",
    cocok: "Warung, toko kelontong, UMKM pemula",
    icon: "🌱",
    warna: "border-green-200 bg-green-50",
    warnaLabel: "bg-green-100 text-green-800",
    items: [
      { nama: "Asuransi Kebakaran Toko", deskripsi: "Perlindungan gedung + isi toko dari kebakaran, petir, ledakan", estimasiPremi: "Rp 500rb–2 jt/tahun", href: "/asuransi-properti/kebakaran" },
      { nama: "Asuransi Kendaraan Niaga", deskripsi: "Motor/mobil operasional untuk pengiriman dan mobilitas bisnis", estimasiPremi: "Rp 800rb–3 jt/tahun", href: "/asuransi-kendaraan/mobil" },
    ],
    totalEstimasi: "Rp 1,3–5 juta/tahun",
  },
  {
    level: "Paket Berkembang",
    cocok: "Toko online aktif, kuliner, jasa, retailer",
    icon: "📈",
    warna: "border-blue-200 bg-blue-50",
    warnaLabel: "bg-blue-100 text-blue-800",
    items: [
      { nama: "Asuransi Kebakaran / PAR", deskripsi: "Perlindungan lebih luas termasuk banjir, gempa, dan kerusakan lain", estimasiPremi: "Rp 1–4 jt/tahun", href: "/asuransi-properti/property-all-risk" },
      { nama: "Asuransi Kargo Pengiriman", deskripsi: "Barang yang dikirim terlindungi dari risiko hilang dan kerusakan", estimasiPremi: "Rp 500rb–2 jt/tahun", href: "/asuransi-kargo/ekspedisi-umkm" },
      { nama: "Product Liability (opsional)", deskripsi: "Perlindungan dari gugatan konsumen atas produk yang dijual", estimasiPremi: "Rp 2–6 jt/tahun", href: "/asuransi-liability/product-liability" },
    ],
    totalEstimasi: "Rp 3,5–12 juta/tahun",
  },
  {
    level: "Paket Mapan",
    cocok: "Café, workshop, toko dengan karyawan & pengunjung",
    icon: "🏆",
    warna: "border-gold/30 bg-gold/5",
    warnaLabel: "bg-gold/15 text-navy",
    items: [
      { nama: "Property All Risk", deskripsi: "Perlindungan komprehensif aset fisik bisnis Anda", estimasiPremi: "Rp 2–6 jt/tahun", href: "/asuransi-properti/property-all-risk" },
      { nama: "Public Liability", deskripsi: "Perlindungan dari tuntutan pelanggan yang cedera di tempat usaha", estimasiPremi: "Rp 2–8 jt/tahun", href: "/asuransi-liability/public-liability" },
      { nama: "Employer Liability", deskripsi: "Perlindungan dari tuntutan karyawan yang kecelakaan saat bekerja", estimasiPremi: "Rp 2–7 jt/tahun", href: "/asuransi-liability/employer-liability" },
      { nama: "Asuransi Kargo", deskripsi: "Pengiriman barang bisnis ke pelanggan terlindungi", estimasiPremi: "Rp 500rb–2 jt/tahun", href: "/asuransi-kargo/ekspedisi-umkm" },
    ],
    totalEstimasi: "Rp 6,5–23 juta/tahun",
  },
];

const faktaUMKMJogja = [
  { angka: "270rb+", label: "UMKM aktif di DIY", sumber: "Dinas Koperasi DIY 2023" },
  { angka: "89%", label: "Belum punya asuransi usaha", sumber: "Survei OJK 2022" },
  { angka: "1 dari 5", label: "UMKM tutup akibat insiden fisik", sumber: "Estimasi industri" },
  { angka: "Rp 1–5 jt", label: "Premi asuransi dasar per tahun", sumber: "Rata-rata pasar" },
];

const faqUMKM = [
  {
    q: "UMKM saya kecil, apakah benar-benar perlu asuransi?",
    a: "Justru UMKM yang paling membutuhkan. Korporasi besar memiliki cadangan modal untuk bertahan dari insiden — UMKM tidak. Satu kebakaran, satu gugatan pelanggan, atau satu kecelakaan karyawan bisa menutup usaha kecil selamanya. Dengan premi mulai Rp 500rb/tahun, proteksinya tidak sebanding dengan risikonya.",
  },
  {
    q: "Apakah asuransi UMKM bisa dicicil atau bayar per bulan?",
    a: "Sebagian besar asuransi kerugian dibayar tahunan. Namun beberapa produk memiliki opsi pembayaran semesteran. Kami bisa membantu menemukan produk yang paling fleksibel sesuai arus kas bisnis Anda.",
  },
  {
    q: "Apakah toko online juga perlu asuransi?",
    a: "Ya, bahkan sangat perlu. Toko online memiliki dua risiko utama: kerusakan barang saat pengiriman (tutup dengan kargo) dan gugatan konsumen atas produk bermasalah (tutup dengan product liability). Jika ada gudang penyimpanan, asuransi properti juga diperlukan.",
  },
  {
    q: "Bagaimana kalau UMKM saya beroperasi dari rumah?",
    a: "Asuransi rumah tinggal standar biasanya TIDAK mencakup kerugian komersial. Jika Anda menjalankan bisnis dari rumah, perlu endorsement khusus atau polis terpisah untuk melindungi stok barang dan peralatan bisnis. Konsultasikan ke kami untuk solusi yang tepat.",
  },
];

export default function AsuransiUMKMJogjaPage() {
  return (
    <>
      <Header />
      <div className="pt-[68px]">

        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Panduan Asuransi UMKM Jogja</span>
          </div>
        </div>

        {/* HERO */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 80% 40%, rgba(200,150,62,0.12) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              <span className="text-[0.5rem] text-gold">◆</span>Panduan UMKM · Yogyakarta
            </div>
            <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.2] mb-4">
              Panduan Lengkap Asuransi<br /><em className="not-italic text-gold">untuk UMKM di Yogyakarta</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px]">
              89% UMKM di Indonesia belum memiliki asuransi usaha. Satu insiden saja — kebakaran, gugatan pelanggan, atau karyawan kecelakaan — bisa mengakhiri usaha yang sudah dibangun bertahun-tahun. Panduan ini membantu Anda mulai dari mana.
            </p>
            <div className="flex gap-6 mt-8 pt-6 border-t border-white/10 text-sm text-white/50">
              <span>📅 Diperbarui Mei 2025</span>
              <span>⏱️ 8 menit membaca</span>
              <span>🎯 Untuk UMKM Jogja</span>
            </div>
          </div>
        </section>

        {/* FAKTA UMKM JOGJA */}
        <section className="py-10 px-[5vw] bg-gold/8 border-b border-gold/15">
          <div className="max-w-[750px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
            {faktaUMKMJogja.map(f => (
              <div key={f.angka} className="text-center">
                <div className="font-heading text-navy text-[1.8rem] font-bold">{f.angka}</div>
                <div className="text-navy2 text-xs font-semibold mt-0.5">{f.label}</div>
                <div className="text-[#94A3B8] text-[0.7rem] mt-0.5">{f.sumber}</div>
              </div>
            ))}
          </div>
        </section>

        {/* RISIKO UMKM */}
        <section className="py-14 px-[5vw] bg-white">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Peta Risiko</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-8">6 Risiko Terbesar<br />yang Mengancam UMKM Anda</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {risikoUMKM.map(r => (
                <div key={r.risiko} className="bg-cream rounded-card p-5 border border-black/6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{r.icon}</span>
                      <span className="font-heading text-navy font-bold text-[0.9rem]">{r.risiko}</span>
                    </div>
                    <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${r.frekuensi === "Sering" ? "bg-red-100 text-red-700" : r.frekuensi === "Meningkat" ? "bg-orange-100 text-orange-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {r.frekuensi}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">{r.dampak}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAKET REKOMENDASI */}
        <section className="py-14 px-[5vw] bg-cream">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Rekomendasi Paket</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-3">Paket Asuransi Sesuai<br />Skala Bisnis Anda</h2>
            <p className="text-base text-[#64748B] mb-8">Pilih paket yang paling mendekati kondisi bisnis Anda — atau konsultasikan untuk paket yang benar-benar custom.</p>
            <div className="flex flex-col gap-6">
              {paketAsuransiUMKM.map(paket => (
                <div key={paket.level} className={`rounded-[18px] border overflow-hidden ${paket.warna}`}>
                  <div className="px-6 py-4 flex items-center justify-between border-b border-black/5">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{paket.icon}</span>
                      <div>
                        <div className="font-heading text-navy font-bold text-[1.05rem]">{paket.level}</div>
                        <div className="text-xs text-[#64748B]">Cocok untuk: {paket.cocok}</div>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${paket.warnaLabel}`}>Est. {paket.totalEstimasi}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col gap-3">
                      {paket.items.map(item => (
                        <div key={item.nama} className="bg-white rounded-xl p-4 border border-black/5 flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex-1">
                            <Link href={item.href} className="font-semibold text-navy text-sm hover:text-gold transition-colors no-underline">{item.nama} →</Link>
                            <p className="text-xs text-[#64748B] mt-0.5">{item.deskripsi}</p>
                          </div>
                          <span className="text-xs font-bold text-gold flex-shrink-0">{item.estimasiPremi}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#94A3B8] mt-4 text-center">*Estimasi premi bersifat indikatif. Premi aktual bergantung pada nilai aset, lokasi, dan profil risiko spesifik bisnis Anda.</p>
          </div>
        </section>

        {/* KAPAN HARUS MULAI */}
        <section className="py-14 px-[5vw] bg-white">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Timing yang Tepat</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-6">Kapan UMKM Harus Mulai<br />Membeli Asuransi?</h2>
            <div className="bg-navy rounded-xl p-6 mb-6">
              <p className="text-white/90 text-base leading-[1.85]">
                <strong className="text-gold">Jawabannya: sekarang, bukan saat omset sudah besar.</strong> Justru di fase awal bisnis risiko paling besar — modal terbatas, cadangan nol, dan satu insiden bisa mengakhiri segalanya. Semakin dini Anda memiliki proteksi, semakin tenang Anda bertumbuh.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { fase: "Baru Buka", tips: "Minimal asuransi kebakaran untuk aset/stok. Premi Rp 500rb/tahun sudah ada proteksi dasar." },
                { fase: "Sudah Punya Karyawan", tips: "Tambahkan employer liability. Satu kecelakaan kerja tanpa asuransi bisa lebih mahal dari gaji setahun." },
                { fase: "Punya Pelanggan & Pengunjung", tips: "Tambahkan public liability dan/atau product liability. Risiko gugatan meningkat seiring skala bisnis." },
              ].map(f => (
                <div key={f.fase} className="bg-cream rounded-card p-5 border border-black/6">
                  <div className="font-heading text-gold text-sm font-bold mb-2">{f.fase}</div>
                  <p className="text-sm text-[#64748B] leading-relaxed">{f.tips}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-[5vw] bg-cream">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-8">Pertanyaan Umum<br />UMKM tentang Asuransi</h2>
            {faqUMKM.map((f, i) => (
              <details key={i} className="border-b border-black/8 group">
                <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                  {f.q}<span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-base leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA + INTERNAL LINKS */}
        <section className="py-14 px-[5vw] bg-navy">
          <div className="max-w-[750px] mx-auto text-center">
            <h2 className="font-heading text-white text-[clamp(1.5rem,2.5vw,2rem)] mb-3">Konsultasi Paket Asuransi<br />untuk UMKM Anda</h2>
            <p className="text-white/70 text-sm max-w-[420px] mx-auto mb-6">Ceritakan skala dan jenis usaha Anda — kami bantu susun paket perlindungan yang tepat dan efisien dari sisi biaya.</p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all mb-8">💬 Konsultasi Gratis via WhatsApp</a>
            <div className="border-t border-white/10 pt-8 text-left">
              <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Produk yang Relevan untuk UMKM</div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/asuransi-properti/kebakaran" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">🔥 Asuransi Kebakaran →</Link>
                <Link href="/asuransi-kargo/ekspedisi-umkm" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">📦 Kargo Ekspedisi →</Link>
                <Link href="/asuransi-liability/public-liability" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
                <Link href="/asuransi-liability/product-liability" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">🛍️ Product Liability →</Link>
                <Link href="/asuransi-kendaraan/mobil" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">🚗 Kendaraan Niaga →</Link>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
