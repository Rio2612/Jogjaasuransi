import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pentingnya Asuransi di Dunia Usaha Yogyakarta – Panduan UMKM & Korporasi",
  description: "Mengapa asuransi bisnis penting untuk usaha di Yogyakarta? Risiko yang mengancam UMKM, jenis asuransi wajib untuk usaha, dan cara memulai proteksi bisnis Anda.",
  keywords: "asuransi bisnis jogja, asuransi usaha yogyakarta, asuransi UMKM jogja, pentingnya asuransi perusahaan, proteksi bisnis yogyakarta, asuransi kerugian usaha jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/pentingnya-asuransi-dunia-usaha-jogja" },
  openGraph: {
    title: "Pentingnya Asuransi di Dunia Usaha Yogyakarta",
    url: "https://asuransijogja.biz.id/artikel/pentingnya-asuransi-dunia-usaha-jogja",
  },
};

const risikoUsaha = [
  { icon: "🔥", risiko: "Kebakaran & Bencana Alam", dampak: "Aset fisik — bangunan, peralatan, stok barang — bisa lenyap dalam hitungan jam. Yogyakarta adalah zona gempa dan banjir aktif.", solusi: "Asuransi Properti / Property All Risk" },
  { icon: "🚗", risiko: "Kecelakaan Kendaraan Operasional", dampak: "Kendaraan usaha yang rusak atau menabrak pihak lain bisa menimbulkan biaya perbaikan dan tuntutan hukum yang besar.", solusi: "Asuransi Kendaraan / Fleet Insurance" },
  { icon: "👷", risiko: "Kecelakaan Karyawan", dampak: "Karyawan yang cedera di tempat kerja bisa menuntut ganti rugi. Tanpa proteksi, biaya pengobatan dan kompensasi jadi tanggungan perusahaan.", solusi: "Employer Liability Insurance" },
  { icon: "📦", risiko: "Kerusakan Barang dalam Pengiriman", dampak: "Barang yang rusak atau hilang saat pengiriman — dari vendor ke gudang, atau ke pelanggan — adalah risiko yang sering diremehkan UMKM.", solusi: "Asuransi Kargo / Marine Cargo" },
  { icon: "⚙️", risiko: "Kerusakan Mesin Produksi", dampak: "Mesin yang rusak mendadak bisa menghentikan seluruh proses produksi — pesanan terlambat, pelanggan kecewa, pendapatan berhenti.", solusi: "Machinery Breakdown Insurance" },
  { icon: "🤝", risiko: "Tuntutan Pihak Ketiga", dampak: "Pelanggan yang terluka di toko, produk yang menyebabkan kerugian, atau kegiatan usaha yang merusak properti sekitar bisa berujung tuntutan hukum.", solusi: "Public Liability / Product Liability" },
];

const sektorJogja = [
  { icon: "🏨", sektor: "Hotel & Hospitality", risiko: "Kebakaran, tamu yang cedera, kerusakan properti tamu", produk: "PAR + Public Liability + Employer Liability" },
  { icon: "🍽️", sektor: "Restoran & Kafe", risiko: "Kebakaran dapur, keracunan makanan, cedera karyawan", produk: "Kebakaran + Public Liability + Product Liability" },
  { icon: "🏭", sektor: "Pabrik & Manufaktur", risiko: "Kerusakan mesin, kecelakaan pekerja, limbah produksi", produk: "MB + Employer Liability + PAR + Limbah B3" },
  { icon: "🏗️", sektor: "Kontraktor & Konstruksi", risiko: "Kerusakan proyek, kecelakaan pekerja, tuntutan pemilik proyek", produk: "CAR + Employer Liability + Surety Bond" },
  { icon: "🚚", sektor: "Logistik & Ekspedisi", risiko: "Kecelakaan kendaraan, kerusakan kargo, kehilangan muatan", produk: "Fleet Insurance + Kargo + Public Liability" },
  { icon: "🛋️", sektor: "Toko & Ritel", risiko: "Kebakaran, pencurian, kecelakaan pengunjung", produk: "Kebakaran + Risiko Kejahatan + Public Liability" },
];

const mitosVsFakta = [
  { mitos: "\"Usaha saya masih kecil, belum butuh asuransi\"", fakta: "Justru UMKM yang paling rentan — tidak punya cadangan modal besar untuk menutup kerugian mendadak. Satu kebakaran kecil bisa mengakhiri usaha yang dibangun bertahun-tahun." },
  { mitos: "\"Premi asuransi terlalu mahal\"", fakta: "Dibandingkan risiko yang ditanggung, premi asuransi sangat terjangkau. Asuransi kebakaran untuk ruko senilai Rp 500 juta bisa di bawah Rp 2 juta per tahun." },
  { mitos: "\"Klaim asuransi susah, pasti ditolak\"", fakta: "Klaim ditolak biasanya karena kesalahan prosedur atau dokumen tidak lengkap — bukan karena perusahaan asuransi mencari alasan menolak. Dengan konsultan yang tepat, klaim bisa berjalan lancar." },
  { mitos: "\"Sudah ada BPJS, tidak perlu asuransi lagi\"", fakta: "BPJS Ketenagakerjaan menanggung kecelakaan kerja pekerja. Tapi asuransi bisnis menanggung aset, operasional, dan tanggung jawab hukum perusahaan — dua hal yang berbeda." },
];

const schemaArtikel = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pentingnya Asuransi di Dunia Usaha Yogyakarta",
  "description": "Panduan risiko usaha di Yogyakarta dan jenis asuransi bisnis yang dibutuhkan UMKM dan korporasi.",
  "url": "https://asuransijogja.biz.id/artikel/pentingnya-asuransi-dunia-usaha-jogja",
  "author": { "@type": "Person", "name": "Rio Mardiansyah" },
  "publisher": { "@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.biz.id" },
  "inLanguage": "id-ID",
};

export default function PentingnyaAsuransiUsahaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }} />

      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-xs text-[#64748B] flex-wrap">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Pentingnya Asuransi Dunia Usaha Jogja</span>
        </div>
      </div>

      <article className="max-w-[760px] mx-auto px-[5vw] py-14">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gold/10 border border-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full">🏢 Bisnis</span>
            <span className="text-[#94A3B8] text-xs">⏱ 7 menit baca</span>
          </div>
          <h1 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] text-navy leading-[1.2] mb-4">
            Pentingnya Asuransi di<br />Dunia Usaha Yogyakarta
          </h1>
          <p className="text-[#64748B] text-lg leading-[1.85]">
            Yogyakarta adalah salah satu kota dengan ekosistem bisnis paling dinamis di Indonesia — dari warung makan hingga hotel bintang, dari kontraktor lokal hingga pabrik manufaktur. Namun di balik pertumbuhan itu, banyak pelaku usaha belum memiliki proteksi memadai terhadap risiko yang bisa datang kapan saja.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-6">6 Risiko Utama yang Mengancam Usaha di Yogyakarta</h2>
          <div className="flex flex-col gap-4">
            {risikoUsaha.map(r => (
              <div key={r.risiko} className="bg-cream rounded-xl p-5 border border-black/5 grid grid-cols-[auto_1fr] gap-4">
                <span className="text-3xl">{r.icon}</span>
                <div>
                  <div className="font-heading text-navy font-bold text-[1rem] mb-1">{r.risiko}</div>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-2">{r.dampak}</p>
                  <div className="text-xs font-semibold text-gold">→ Solusi: {r.solusi}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-2">Sektor Usaha di Jogja &amp; Kebutuhan Asuransinya</h2>
          <p className="text-sm text-[#64748B] mb-6">Setiap jenis usaha memiliki profil risiko yang berbeda. Berikut pemetaan umum untuk sektor-sektor dominan di Yogyakarta:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sektorJogja.map(s => (
              <div key={s.sektor} className="bg-white rounded-xl p-5 border border-black/7">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">{s.sektor}</div>
                <div className="text-xs text-[#64748B] leading-relaxed mb-2"><strong>Risiko dominan:</strong> {s.risiko}</div>
                <div className="text-xs font-medium text-gold">{s.produk}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-6">Mitos vs Fakta Asuransi Bisnis</h2>
          <div className="flex flex-col gap-4">
            {mitosVsFakta.map((m, i) => (
              <div key={i} className="rounded-xl border border-black/7 overflow-hidden">
                <div className="bg-red-50 border-b border-black/5 px-5 py-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Mitos</span>
                  <p className="text-sm text-red-800 font-medium mt-1 italic">{m.mitos}</p>
                </div>
                <div className="bg-white px-5 py-3">
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wider">Fakta</span>
                  <p className="text-sm text-navy2 leading-relaxed mt-1">{m.fakta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 p-6 bg-cream rounded-xl border border-black/6">
          <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-properti" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏠 Asuransi Properti →</Link>
            <Link href="/asuransi-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛡️ Asuransi Liability →</Link>
            <Link href="/asuransi-engineering" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚙️ Asuransi Engineering →</Link>
            <Link href="/artikel/cara-menghitung-nilai-asuransi" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🧮 Cara Hitung Nilai Asuransi →</Link>
          </div>
        </section>

        <div className="bg-navy rounded-[20px] p-8 text-center">
          <h3 className="font-heading text-white text-[1.4rem] mb-3">Audit Proteksi Bisnis Anda — Gratis</h3>
          <p className="text-white/85 text-sm mb-6 max-w-[420px] mx-auto">Pak Rio siap membantu mengidentifikasi risiko bisnis Anda dan merekomendasikan proteksi yang tepat dan efisien secara biaya.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Bisnis via WhatsApp</a>
        </div>
      </article>
    </>
  );
}
