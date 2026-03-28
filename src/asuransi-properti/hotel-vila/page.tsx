import type { Metadata } from "next";
import Link from "next/link";
import PropertyLayout from "@/components/properti/PropertyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Hotel & Vila Jogja – Properti Wisata DIY | Asuransi Jogja",
  description: "Asuransi properti untuk hotel, vila, guest house, dan homestay di Yogyakarta. PAR, kebakaran, banjir, gempa, hingga asuransi liability tamu. Konsultasi gratis.",
  keywords: "asuransi hotel jogja, asuransi vila yogyakarta, asuransi penginapan jogja, asuransi guest house yogyakarta, asuransi properti wisata jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-properti/hotel-vila" },
  openGraph: { title: "Asuransi Hotel & Vila Jogja – Properti Wisata DIY", url: "https://asuransijogja.biz.id/asuransi-properti/hotel-vila" },
};

const risikoHotel = [
  { icon: "🔥", label: "Kebakaran & FLEXAS", desc: "Dapur hotel, instalasi listrik, dan kepadatan operasional meningkatkan risiko kebakaran dibanding properti biasa." },
  { icon: "🌊", label: "Banjir & Gempa Merapi", desc: "Banyak vila di Sleman berada di zona lereng Merapi. Hotel di pusat kota rentan banjir saat hujan ekstrem." },
  { icon: "👤", label: "Tanggung Jawab Tamu", desc: "Tamu yang cedera di area hotel — kolam renang, tangga, restoran — adalah risiko liability yang wajib diantisipasi." },
  { icon: "🛁", label: "Kerusakan Fasilitas", desc: "Vandalisasi, kerusakan perabot kamar, dan kehilangan peralatan adalah risiko harian operasional hotel." },
  { icon: "⚡", label: "Gangguan Usaha", desc: "Kebakaran atau bencana yang memaksa hotel tutup bisa menghentikan pemasukan berminggu-minggu hingga berbulan-bulan." },
  { icon: "🔒", label: "Kejahatan & Pencurian", desc: "Properti wisata dengan tamu bergantian setiap hari rentan terhadap pencurian barang dan penyalahgunaan fasilitas." },
];

const paketProduk = [
  {
    icon: "🏨", title: "Hotel Bintang 1–3 & Guest House",
    produk: ["Asuransi Kebakaran + perluasan banjir/gempa", "Property All Risk untuk bangunan & isi", "Public Liability untuk tamu & pengunjung"],
    rekomendasi: "Paket paling umum untuk hotel kelas menengah dan guest house di kawasan Malioboro, Prawirotaman, dan Sleman.",
  },
  {
    icon: "🏩", title: "Hotel Bintang 4–5 & Resort",
    produk: ["Property All Risk komprehensif", "Business Interruption (BI) / gangguan usaha", "Public & Products Liability", "Asuransi uang & surat berharga"],
    rekomendasi: "Untuk hotel premium dan resort dengan nilai aset tinggi dan standar pelayanan tamu kelas atas.",
  },
  {
    icon: "🌿", title: "Vila & Homestay Wisata",
    produk: ["Asuransi Kebakaran bangunan & isi", "Perluasan risiko banjir dan gempa bumi", "Personal Accident untuk penghuni"],
    rekomendasi: "Cocok untuk vila di Kaliurang, Sleman Utara, dan kawasan wisata alam sekitar Yogyakarta.",
  },
];

const checklist = [
  "Nilai bangunan hotel (termasuk biaya konstruksi dan renovasi)",
  "Nilai isi: furnitur, elektronik, peralatan dapur, linen, dan aset operasional",
  "Perkiraan omset tahunan (untuk Business Interruption)",
  "Jumlah kamar dan kapasitas tamu",
  "Fasilitas tambahan: kolam renang, restoran, spa, ballroom",
  "Lokasi dan zona risiko (banjir, lereng Merapi, dll)",
];

export default function HotelVilaPage() {
  return (
    <PropertyLayout breadcrumbs={[
      { label: "Asuransi Properti", href: "/asuransi-properti" },
      { label: "Hotel & Vila" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">🏨</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-properti" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Properti</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Hotel & Vila · Wisata Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Hotel, Vila<br /><em className="not-italic text-gold">& Penginapan Wisata</em><br />di Yogyakarta
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[520px] mb-8">
            Yogyakarta menyambut jutaan wisatawan setiap tahun. Di balik keramaian itu ada risiko yang harus dikelola — kebakaran, bencana alam, hingga tanggung jawab terhadap tamu yang cedera di properti Anda.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#paket" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Paket Produk →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"10Jt+",lbl:"Wisatawan/Tahun ke DIY"},{num:"PAR",lbl:"Proteksi Terluas"},{num:"Gratis",lbl:"Konsultasi & Analisis"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-xl font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* RISIKO KHUSUS HOTEL */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Risiko Spesifik</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Risiko Unik yang<br />Dihadapi Properti Wisata</h2>
          <p className="text-base text-[#64748B] max-w-[480px] mx-auto mt-3">Hotel dan vila memiliki profil risiko berbeda dari properti biasa karena ada faktor tamu, operasional 24 jam, dan fasilitas kompleks</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {risikoHotel.map(r=>(
            <div key={r.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{r.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PAKET PRODUK */}
      <section id="paket" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Solusi Produk</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Paket Asuransi<br />Sesuai Jenis Properti Wisata</h2>
        </div>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {paketProduk.map(p=>(
            <div key={p.title} className="bg-cream rounded-card p-8 border border-black/6 grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 items-start">
              <div className="text-[3.5rem] text-center md:text-left">{p.icon}</div>
              <div>
                <div className="font-heading text-navy font-bold text-[1.2rem] mb-3">{p.title}</div>
                <ul className="flex flex-col gap-2 mb-4">
                  {p.produk.map(pr=>(
                    <li key={pr} className="flex gap-2 text-base text-navy2"><span className="text-gold font-bold flex-shrink-0">✓</span>{pr}</li>
                  ))}
                </ul>
                <div className="bg-white rounded-lg px-4 py-2.5 text-xs text-[#64748B] border border-black/5">
                  <strong className="text-navy">💡 Rekomendasi:</strong> {p.rekomendasi}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Persiapan</div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy mb-4">Data yang Perlu<br />Disiapkan</h2>
            <p className="text-sm leading-relaxed text-[#64748B] mb-5">Untuk mendapatkan penawaran yang akurat, siapkan informasi berikut sebelum konsultasi dengan Pak Rio:</p>
            <ul className="flex flex-col gap-3">
              {checklist.map(c=>(
                <li key={c} className="flex gap-2.5 text-sm text-navy2">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>{c}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy rounded-card p-7 text-white">
            <div className="text-3xl mb-3 text-center">🏛️</div>
            <div className="font-heading text-gold text-base font-semibold text-center mb-3">Liability Tamu Hotel</div>
            <p className="text-xs leading-relaxed text-white/75 text-center mb-5">
              Selain proteksi bangunan, hotel juga butuh <strong className="text-gold">asuransi Public Liability</strong> — perlindungan jika tamu cedera atau mengalami kerugian di area properti Anda.
            </p>
            <Link href="/asuransi-liability/public-liability" className="block text-center bg-gold text-navy py-3 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
              Pelajari Public Liability →
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-properti/property-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏢 Property All Risk →</Link>
            <Link href="/asuransi-properti/kebakaran" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔥 Asuransi Kebakaran →</Link>
            <Link href="/asuransi-properti/banjir-gempa" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🌊 Perluasan Banjir & Gempa →</Link>
            <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛡️ Public Liability →</Link>
            <Link href="/asuransi-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚖️ Semua Asuransi Liability →</Link>
            <Link href="/asuransi-properti" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Properti</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Sambut Tamu dengan Tenang,<br />Properti Terlindungi Penuh</h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis khusus properti wisata Yogyakarta — kami paham keunikan risiko hotel, vila, dan penginapan di DIY.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 WhatsApp Pak Rio Sekarang</a>
        </div>
      </section>
    </PropertyLayout>
  );
}
