import type { Metadata } from "next";
import Link from "next/link";
import PropertyLayout from "@/components/properti/PropertyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kebakaran Jogja – Rumah, Kos, Ruko | Asuransi Jogja",
  description: "Asuransi kebakaran di Yogyakarta untuk rumah tinggal, kos-kosan, dan ruko. Premi terjangkau, klaim mudah, pendampingan penuh. Konsultasi gratis.",
  keywords: "asuransi kebakaran jogja, asuransi kebakaran rumah yogyakarta, asuransi kebakaran kos jogja, asuransi kebakaran ruko yogyakarta",
};

const produkItems = [
  {
    icon: "🏡", title: "Asuransi Kebakaran Rumah Tinggal",
    desc: "Rumah adalah investasi terbesar kebanyakan keluarga. Satu kejadian kebakaran bisa melenyapkan aset seumur hidup dalam hitungan jam.",
    manfaat: [
      "Penggantian kerugian akibat kebakaran, petir, ledakan, dan asap",
      "Pilihan pertanggungan bangunan saja atau bangunan + isi rumah",
      "Tersedia perluasan banjir dan gempa bumi untuk kawasan rawan",
      "Premi sangat terjangkau, mulai dari Rp 100 ribuan per tahun",
    ],
    cocok: "Pemilik rumah tinggal, debitur KPR, pemilik properti yang dikontrakkan",
  },
  {
    icon: "🏘️", title: "Asuransi Kebakaran Kos-kosan Jogja",
    desc: "Yogyakarta adalah kota pelajar dengan ribuan unit kos aktif. Sebagai pemilik kos, Anda bertanggung jawab atas keselamatan bangunan yang ditempati penghuni.",
    manfaat: [
      "Pertanggungan bangunan kos dari kebakaran dan risiko FLEXAS",
      "Fleksibel untuk kos skala kecil (1–5 kamar) hingga besar (20+ kamar)",
      "Bisa digabung dengan asuransi isi/perabot kos",
      "Khusus kawasan Jogja: tersedia tambahan jaminan gempa dan angin ribut",
    ],
    cocok: "Pemilik kos di Sleman, Bantul, Kota Yogyakarta, dan sekitarnya",
  },
  {
    icon: "🏪", title: "Asuransi Kebakaran Ruko & Bangunan Komersial",
    desc: "Ruko adalah jantung bisnis Anda. Kebakaran tidak hanya merusak bangunan, tapi juga menghentikan operasional dan menimbulkan kerugian usaha yang besar.",
    manfaat: [
      "Jaminan bangunan ruko, stok barang, dan peralatan usaha",
      "Tersedia perluasan business interruption",
      "Proteksi untuk rangkaian ruko (kavling) dalam satu polis",
      "Penanganan klaim prioritas untuk bisnis yang tidak bisa berhenti lama",
    ],
    cocok: "Pemilik ruko, toko, minimarket, bengkel, restoran, dan usaha komersial lainnya",
  },
];

const flexasItems = [
  { icon: "🔥", label: "Fire", desc: "Kebakaran akibat apa pun kecuali yang dikecualikan" },
  { icon: "⚡", label: "Lightning", desc: "Sambaran petir langsung pada bangunan" },
  { icon: "💥", label: "Explosion", desc: "Ledakan gas, tabung LPG, atau instalasi" },
  { icon: "✈️", label: "Aircraft", desc: "Jatuhnya pesawat atau benda dari udara" },
  { icon: "💨", label: "Smoke", desc: "Kerusakan akibat asap dari kebakaran" },
];

const prosesItems = [
  { step: "01", icon: "💬", label: "Konsultasi", desc: "Ceritakan jenis properti, lokasi, dan kebutuhan Anda" },
  { step: "02", icon: "📋", label: "Survei & Analisis", desc: "Kami bantu hitung nilai bangunan dan analisis risiko lokasi" },
  { step: "03", icon: "📄", label: "Penawaran Resmi", desc: "Terima penawaran dari beberapa perusahaan asuransi terpercaya" },
  { step: "04", icon: "✅", label: "Polis Terbit", desc: "Dokumen lengkap, polis resmi terbit dalam 1–2 hari kerja" },
];

export default function KebakeranPage() {
  return (
    <PropertyLayout breadcrumbs={[
      { label: "Asuransi Properti", href: "/asuransi-properti" },
      { label: "Asuransi Kebakaran" }
    ]}>
      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">🔥</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-properti" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Properti</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Asuransi Kebakaran · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Kebakaran<br /><em className="not-italic text-gold">Rumah, Kos & Ruko</em><br />di Jogja
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Satu kejadian kebakaran cukup untuk menghapus aset yang dibangun bertahun-tahun. Dengan asuransi kebakaran, properti Anda terlindungi dan bisnis Anda tetap berjalan.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#produk" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Produk →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"FLEXAS",lbl:"Jaminan Dasar"},{num:"1–2 Hari",lbl:"Proses Polis"},{num:"Gratis",lbl:"Konsultasi"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-xl font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEXAS */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Jaminan Dasar</div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Standar FLEXAS —<br />5 Risiko yang Selalu Dijamin</h2>
            <p className="text-sm text-[#64748B] max-w-[480px] mx-auto mt-3">Setiap polis asuransi kebakaran minimal menjamin 5 risiko utama ini sesuai standar AAUI</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {flexasItems.map(f => (
              <div key={f.label} className="bg-white rounded-card p-5 text-center border border-black/6 hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-2">{f.icon}</div>
                <div className="font-heading text-navy font-bold text-sm mb-1">{f.label}</div>
                <p className="text-xs text-[#64748B] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gold/8 border border-gold/20 rounded-xl p-5">
            <p className="text-sm text-navy2 leading-relaxed">
              <strong className="text-gold">💡 Tips Pak Rio:</strong> Jaminan dasar FLEXAS sering belum mencakup risiko banjir dan gempa yang relevan di Yogyakarta. Kami selalu rekomendasikan analisis risiko lokasi sebelum memilih produk.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUK */}
      <section id="produk" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Kami</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Solusi untuk Setiap<br />Jenis Properti Anda</h2>
        </div>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {produkItems.map(p => (
            <div key={p.title} className="bg-cream rounded-card p-8 border border-black/6 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 items-start">
              <div className="text-center md:text-left">
                <div className="text-[3.5rem]">{p.icon}</div>
              </div>
              <div>
                <div className="font-heading text-navy font-bold text-[1.2rem] mb-2">{p.title}</div>
                <p className="text-sm leading-relaxed text-[#64748B] mb-4">{p.desc}</p>
                <ul className="flex flex-col gap-2 mb-4">
                  {p.manfaat.map(m => (
                    <li key={m} className="flex gap-2 text-sm text-navy2"><span className="text-gold flex-shrink-0 font-bold">✓</span>{m}</li>
                  ))}
                </ul>
                <div className="bg-white rounded-lg px-4 py-2.5 text-xs text-[#64748B] border border-black/5">
                  <strong className="text-navy">Cocok untuk:</strong> {p.cocok}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROSES */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Alur</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Proses Mudah,<br />Polis Cepat Terbit</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {prosesItems.map(p => (
            <div key={p.step} className="bg-white rounded-card p-6 text-center border border-black/5 relative">
              <div className="absolute top-4 right-5 font-heading text-[2rem] font-bold text-navy/8">{p.step}</div>
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{p.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-properti/banjir-gempa" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🌊 Perluasan Banjir & Gempa →</Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏢 Property All Risk (PAR) →</Link>
            <Link href="/asuransi-properti" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Properti</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Properti Anda Layak<br />Mendapat Perlindungan Terbaik</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis, analisis risiko, penawaran terbaik dari asuransi terpercaya — tanpa biaya apapun.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
            💬 WhatsApp Pak Rio Sekarang
          </a>
        </div>
      </section>
    </PropertyLayout>
  );
}
