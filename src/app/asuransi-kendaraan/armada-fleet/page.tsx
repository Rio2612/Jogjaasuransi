import type { Metadata } from "next";
import Link from "next/link";
import KendaraanLayout from "@/components/kendaraan/KendaraanLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Armada Fleet Jogja – Kendaraan Perusahaan | Asuransi Jogja",
  description: "Asuransi fleet / armada kendaraan perusahaan di Yogyakarta. Satu polis untuk banyak unit, premi lebih efisien, pengelolaan terpusat. Untuk bisnis logistik, kontraktor, dan korporasi.",
  keywords: "asuransi fleet jogja, asuransi armada kendaraan yogyakarta, asuransi kendaraan perusahaan jogja, fleet insurance yogyakarta, asuransi operasional bisnis jogja",
};

const keunggulanFleet = [
  { icon: "💰", title: "Premi Lebih Efisien", desc: "Volume banyak = negosiasi lebih kuat. Premi per unit fleet umumnya lebih rendah dibanding polis satuan." },
  { icon: "📋", title: "Satu Polis, Banyak Unit", desc: "Tidak perlu kelola puluhan polis terpisah. Satu kontrak, satu renewal date, satu tagihan — jauh lebih praktis." },
  { icon: "📊", title: "Laporan Terpusat", desc: "Data klaim, status polis, dan history per unit tersedia dalam satu laporan yang memudahkan manajemen risiko perusahaan." },
  { icon: "🔄", title: "Fleksibel Tambah/Kurang Unit", desc: "Unit baru bisa ditambahkan sewaktu-waktu. Unit yang dijual bisa dikeluarkan dari polis tanpa mengganggu unit lain." },
  { icon: "🤝", title: "Account Manager Khusus", desc: "Klien fleet mendapat layanan prioritas — satu kontak langsung dengan Pak Rio untuk semua kebutuhan asuransi." },
  { icon: "⚡", title: "Klaim Diprioritaskan", desc: "Klaim armada ditangani dengan SLA khusus agar kendaraan cepat kembali beroperasi dan bisnis tidak terganggu." },
];

const segmenBisnis = [
  { icon: "🚛", label: "Perusahaan Logistik & Ekspedisi", detail: "Armada truk, pickup, dan kendaraan pengiriman untuk bisnis logistik lokal maupun antarkota" },
  { icon: "🏗️", label: "Kontraktor & Proyek", detail: "Dump truk, tronton, dan kendaraan proyek yang digunakan di lokasi konstruksi" },
  { icon: "🏭", label: "Pabrik & Manufaktur", detail: "Kendaraan operasional pabrik, forklift, dan armada distribusi produk" },
  { icon: "🏨", label: "Hotel & Pariwisata", detail: "Shuttle bus, minibus wisata, dan kendaraan antar-jemput tamu di Yogyakarta" },
  { icon: "🏥", label: "Rumah Sakit & Klinik", detail: "Ambulans, kendaraan operasional, dan antar-jemput pasien" },
  { icon: "🏫", label: "Sekolah & Universitas", detail: "Bus antar-jemput siswa, kendaraan operasional kampus, dan shuttle mahasiswa" },
];

const prosesFleet = [
  { step: "01", icon: "📋", label: "Data Armada", desc: "Kirimkan data seluruh unit: merk, tipe, tahun, plat, dan nilai kendaraan" },
  { step: "02", icon: "🔍", label: "Analisis Risiko", desc: "Kami analisis profil risiko armada, rute operasional, dan history klaim (jika ada)" },
  { step: "03", icon: "📊", label: "Komparasi Penawaran", desc: "Dapatkan penawaran dari beberapa perusahaan asuransi terpercaya sekaligus" },
  { step: "04", icon: "✅", label: "Polis & Kelola", desc: "Polis terbit, kami bantu kelola selama masa pertanggungan termasuk klaim" },
];

export default function ArmadaFleetPage() {
  return (
    <KendaraanLayout breadcrumbs={[
      { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
      { label: "Armada / Fleet" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">🚐</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-kendaraan" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Kendaraan</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Armada Fleet · Korporasi Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Armada<br /><em className="not-italic text-gold">Fleet Kendaraan</em><br />Perusahaan Anda
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Punya 5 unit atau lebih kendaraan operasional? Saatnya beralih ke asuransi fleet — satu polis, lebih hemat, lebih mudah dikelola, dan klaim ditangani prioritas.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Diskusi Kebutuhan Fleet</a>
            <a href="#segmen" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Cocok untuk Bisnis Apa? →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"5+",lbl:"Unit Minimum"},{num:"Hemat",lbl:"Premi per Unit"},{num:"Prioritas",lbl:"Penanganan Klaim"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-xl font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* KEUNGGULAN FLEET */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Keunggulan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Mengapa Pilih<br />Asuransi Fleet?</h2>
          <p className="text-sm text-[#64748B] max-w-[480px] mx-auto mt-3">Dibanding mengurus polis satuan satu per satu, asuransi fleet menawarkan efisiensi waktu, biaya, dan pengelolaan yang jauh lebih baik</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {keunggulanFleet.map(k=>(
            <div key={k.title} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{k.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{k.title}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{k.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEGMEN BISNIS */}
      <section id="segmen" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Untuk Siapa?</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Asuransi Fleet Cocok<br />untuk Bisnis Anda</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {segmenBisnis.map(s=>(
            <div key={s.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{s.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROSES */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Alur Kerja</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Mudah Dimulai,<br />Mudah Dikelola</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {prosesFleet.map(p=>(
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
            <Link href="/asuransi-kendaraan/mobil" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚗 Asuransi Mobil →</Link>
            <Link href="/asuransi-kendaraan/dump-truk-niaga" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚛 Dump Truk & Niaga →</Link>
            <Link href="/asuransi-kendaraan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Kendaraan</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <div className="text-5xl mb-4">🚐</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Kelola Armada Lebih Cerdas<br />dengan Satu Polis Fleet</h2>
          <p className="text-white/60 text-sm max-w-[480px] mx-auto mb-8">Hubungi Pak Rio sekarang. Kirimkan data armada Anda dan kami siapkan penawaran fleet terbaik dalam 1 hari kerja.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Diskusi Fleet via WhatsApp</a>
        </div>
      </section>
    </KendaraanLayout>
  );
}
