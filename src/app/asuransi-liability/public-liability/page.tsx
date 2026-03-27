import type { Metadata } from "next";
import Link from "next/link";
import LiabilityLayout from "@/components/liability/LiabilityLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Public Liability Jogja – Hotel, Restoran & Wisata | Asuransi Jogja",
  description: "Asuransi Public Liability di Yogyakarta untuk hotel, restoran, tempat wisata, dan bisnis publik. Lindungi bisnis Anda dari tuntutan cedera tamu dan kerugian pihak ketiga.",
  keywords: "public liability jogja, asuransi tanggung jawab publik yogyakarta, asuransi tamu hotel jogja, asuransi restoran yogyakarta, liability wisata jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-liability/public-liability" },
};

const skenarioKlaim = [
  { icon: "🏊", skenario: "Tamu terpeleset di kolam renang hotel", akibat: "Patah tulang → tamu gugat hotel senilai Rp 500 juta untuk biaya medis + kerugian moral" },
  { icon: "🍽️", skenario: "Pengunjung keracunan makanan di restoran", akibat: "15 tamu sakit massal → gugatan kolektif + penutupan sementara oleh Dinas Kesehatan" },
  { icon: "🎡", skenario: "Wahana wisata mengalami kerusakan teknis", akibat: "Pengunjung cedera → tuntutan hukum + pencabutan izin operasional sementara" },
  { icon: "🏗️", skenario: "Puing bangunan konstruksi menimpa mobil warga", akibat: "Kerusakan kendaraan + cidera orang → gugatan ganti rugi material dan immaterial" },
  { icon: "🔥", skenario: "Kebakaran toko menjalar ke toko sebelah", akibat: "Kerugian properti tetangga → tuntutan ganti rugi atas kelalaian pengelolaan api" },
  { icon: "🚶", skenario: "Pengunjung tersandung display barang di toko", akibat: "Cedera kepala → tuntutan atas desain toko yang tidak aman" },
];

const yangDijamin = [
  { icon: "💊", label: "Biaya Medis Pihak Ketiga", desc: "Penggantian biaya perawatan, rawat inap, dan rehabilitasi korban yang mengalami cedera di area bisnis Anda" },
  { icon: "⚖️", label: "Ganti Rugi Hukum", desc: "Pembayaran kompensasi kepada pihak ketiga atas putusan pengadilan atau settlement di luar pengadilan" },
  { icon: "👨‍💼", label: "Biaya Pembelaan Hukum", desc: "Honorarium pengacara, biaya pengadilan, dan biaya investigasi insiden yang timbul dari gugatan" },
  { icon: "🏢", label: "Kerusakan Properti Pihak Ketiga", desc: "Ganti rugi atas kerusakan barang milik pengunjung atau pihak ketiga akibat kelalaian operasional" },
];

const sektorTarget = [
  { icon: "🏨", label: "Hotel & Penginapan", detail: "Kolam renang, lobi, restoran hotel, gym, spa — area berpotensi tinggi cedera tamu" },
  { icon: "🍽️", label: "Restoran & Kafe", detail: "Keracunan makanan, terpeleset lantai basah, dan kerusakan properti pengunjung" },
  { icon: "🎭", label: "Tempat Wisata & Event", detail: "Wahana, panggung, area parkir, dan jalur wisata yang dikunjungi publik" },
  { icon: "🛍️", label: "Pusat Perbelanjaan & Retail", detail: "Pengunjung terjatuh, tertimpa display, atau cedera di eskalator dan lift" },
  { icon: "🏋️", label: "Gym & Fasilitas Olahraga", detail: "Cedera saat menggunakan peralatan gym, kolam renang, atau lapangan olahraga" },
  { icon: "🏗️", label: "Kontraktor & Proyek", detail: "Dampak konstruksi ke warga sekitar: debu, kebisingan, keretakan bangunan tetangga" },
];

export default function PublicLiabilityPage() {
  return (
    <LiabilityLayout breadcrumbs={[
      { label: "Asuransi Liability", href: "/asuransi-liability" },
      { label: "Public Liability" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">🤝</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-liability" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Liability</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Public Liability · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Public Liability<br /><em className="not-italic text-gold">Wisata, Hotel & Bisnis</em><br />di Jogja
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Setiap hari Anda menyambut tamu, pelanggan, dan pengunjung. Di balik keramaian itu tersimpan risiko — satu insiden cedera atau kerusakan properti bisa berujung tuntutan hukum senilai ratusan juta rupiah.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#skenario" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Contoh Kasus →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"Rp Miliar",lbl:"Potensi Gugatan"},{num:"Biaya",lbl:"Pengacara Tercover"},{num:"Gratis",lbl:"Analisis Risiko"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* YANG DIJAMIN */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cakupan Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Apa yang Dijamin<br />Public Liability?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {yangDijamin.map(y=>(
            <div key={y.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{y.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{y.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{y.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKENARIO KLAIM NYATA */}
      <section id="skenario" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Contoh Kasus</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Skenario Nyata yang<br />Bisa Menimpa Bisnis Anda</h2>
          <p className="text-base text-[#64748B] max-w-[480px] mx-auto mt-3">Semua skenario ini adalah kejadian riil yang telah menyebabkan gugatan hukum terhadap pelaku usaha di Indonesia</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {skenarioKlaim.map(s=>(
            <div key={s.skenario} className="bg-cream rounded-card p-6 border border-black/6">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-heading text-navy font-bold text-[0.95rem] mb-2">{s.skenario}</div>
              <div className="bg-red-50 border border-red-100 rounded-lg px-3 py-2 text-xs text-red-700 leading-relaxed">⚠️ {s.akibat}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-4xl mx-auto bg-navy rounded-xl p-6 text-white">
          <p className="text-sm leading-relaxed text-white/80">
            <strong className="text-gold">Dengan asuransi Public Liability:</strong> semua biaya gugatan, ganti rugi, dan biaya pengacara di atas ditanggung oleh polis — bukan dari kas bisnis Anda. Operasional bisnis tetap berjalan tanpa gangguan finansial.
          </p>
        </div>
      </section>

      {/* SEKTOR TARGET */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Untuk Siapa?</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Bisnis yang Paling<br />Membutuhkan Public Liability</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {sektorTarget.map(s=>(
            <div key={s.label} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{s.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-liability/employer-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
            <Link href="/asuransi-liability/limbah-b3" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚗️ Liability Limbah B3 →</Link>
            <Link href="/asuransi-properti/hotel-vila" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏨 Asuransi Hotel & Vila →</Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏢 Property All Risk →</Link>
            <Link href="/asuransi-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Liability</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Bisnis Anda Menyambut Publik —<br />Liability Harus Terlindungi</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis analisis risiko Public Liability untuk bisnis Anda di Yogyakarta. Kami bantu tentukan limit yang tepat.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Public Liability</a>
        </div>
      </section>
    </LiabilityLayout>
  );
}
