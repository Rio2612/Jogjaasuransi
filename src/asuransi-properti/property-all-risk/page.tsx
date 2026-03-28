import type { Metadata } from "next";
import Link from "next/link";
import PropertyLayout from "@/components/properti/PropertyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Property All Risk (PAR) Jogja – Perlindungan Properti Komersial | Asuransi Jogja",
  description: "Asuransi Property All Risk (PAR) di Yogyakarta untuk gedung kantor, hotel, pabrik, dan fasilitas komersial. Perlindungan komprehensif dari semua risiko fisik. Konsultasi gratis.",
  keywords: "property all risk jogja, PAR asuransi yogyakarta, asuransi gedung komersial jogja, asuransi pabrik yogyakarta, asuransi hotel jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-properti/property-all-risk" },
};

const coverageItems = [
  { icon: "🔥", label: "Kebakaran & FLEXAS", desc: "Semua risiko FLEXAS termasuk kebakaran, petir, ledakan, pesawat jatuh, dan asap" },
  { icon: "🌊", label: "Banjir & Genangan", desc: "Kerusakan akibat banjir, genangan air, dan meluapnya saluran air" },
  { icon: "🌋", label: "Gempa & Tsunami", desc: "Risiko gempa bumi, letusan gunung berapi, dan tsunami" },
  { icon: "💨", label: "Angin Topan & Badai", desc: "Kerusakan akibat angin kencang, badai, puting beliung, dan hujan es" },
  { icon: "🚧", label: "Kerusuhan & Huru-hara", desc: "Kerusakan akibat kerusuhan massa, huru-hara, dan sabotase" },
  { icon: "🔧", label: "Kerusakan Fisik Lainnya", desc: "Berbagai kerusakan fisik bangunan yang tidak dikecualikan dalam polis" },
];

const targetPasar = [
  { icon: "🏢", label: "Gedung Kantor", desc: "Gedung perkantoran bertingkat, ruko kantor, dan co-working space" },
  { icon: "🏨", label: "Hotel & Penginapan", desc: "Hotel, guest house, vila, dan homestay — sektor pariwisata Yogyakarta" },
  { icon: "🏭", label: "Pabrik & Manufaktur", desc: "Fasilitas produksi, gudang bahan baku, dan area operasional pabrik" },
  { icon: "🏫", label: "Sekolah & Kampus", desc: "Gedung pendidikan, asrama mahasiswa, dan fasilitas kampus" },
  { icon: "🏥", label: "Klinik & Rumah Sakit", desc: "Fasilitas kesehatan dari klinik kecil hingga rumah sakit" },
  { icon: "🛍️", label: "Pusat Perbelanjaan", desc: "Mal, supermarket, pasar modern, dan pusat perdagangan" },
];

const parVsKebakaran = [
  { aspek: "Cakupan Risiko", kebakaran: "Hanya FLEXAS (5 risiko)", par: "Semua risiko kecuali yang dikecualikan" },
  { aspek: "Banjir & Gempa", kebakaran: "Perlu ditambahkan (add-on)", par: "Sudah termasuk dalam paket" },
  { aspek: "Kerusuhan", kebakaran: "Tidak dijamin", par: "Bisa dimasukkan" },
  { aspek: "Cocok untuk", kebakaran: "Properti residensial sederhana", par: "Properti komersial & industri" },
  { aspek: "Premi", kebakaran: "Lebih rendah", par: "Lebih tinggi, coverage lebih luas" },
];

export default function PropertyAllRiskPage() {
  return (
    <PropertyLayout breadcrumbs={[
      { label: "Asuransi Properti", href: "/asuransi-properti" },
      { label: "Property All Risk (PAR)" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-10 right-[5vw] text-gold/5 font-heading text-[7rem] leading-none select-none hidden lg:block">◆◆◆</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-properti" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Properti</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Property All Risk · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Property All Risk<br /><em className="not-italic text-gold">Perlindungan Menyeluruh</em><br />untuk Properti Komersial
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[520px] mb-8">
            PAR (Property All Risk) adalah standar perlindungan tertinggi untuk aset properti komersial dan industri. Menjamin semua risiko kerusakan fisik — kecuali yang secara eksplisit dikecualikan dalam polis.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi PAR Sekarang</a>
            <a href="#coverage" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Coverage →</a>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
            {[{num:"All Risk",lbl:"Prinsip Jaminan"},{num:"Komersial",lbl:"Target Properti"},{num:"Gratis",lbl:"Konsultasi & Analisis"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* APA ITU PAR */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Tentang PAR</div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy mb-4">Apa Itu Prinsip<br />All Risk?</h2>
            <p className="text-sm leading-relaxed text-[#64748B] mb-4">
              Berbeda dengan asuransi kebakaran yang hanya menjamin risiko yang <strong className="text-navy">disebutkan (named perils)</strong>, Property All Risk menggunakan prinsip sebaliknya: semua kerugian dijamin <strong className="text-navy">kecuali</strong> yang secara eksplisit dikecualikan dalam polis.
            </p>
            <p className="text-sm leading-relaxed text-[#64748B] mb-6">
              Ini berarti cakupan PAR jauh lebih luas — termasuk risiko yang mungkin tidak terpikirkan sebelumnya, selama tidak termasuk dalam daftar pengecualian.
            </p>
            <div className="bg-navy rounded-xl p-5 text-white">
              <div className="font-heading text-gold text-sm font-semibold mb-2">🏛️ Catatan Penting untuk Yogyakarta</div>
              <p className="text-xs leading-relaxed text-white/75">
                Yogyakarta berada di zona aktif gempa dan sekitar 30 km dari Gunung Merapi. Untuk properti komersial, PAR dengan perluasan gempa dan vulkanik adalah pilihan paling bijak untuk melindungi investasi bisnis Anda.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-card p-6 border border-black/6">
            <div className="font-heading text-navy font-bold text-base mb-4 pb-3 border-b border-black/8">PAR vs Asuransi Kebakaran Biasa</div>
            <div className="flex flex-col gap-0">
              {parVsKebakaran.map((r, i) => (
                <div key={r.aspek} className={`grid grid-cols-[100px_1fr_1fr] gap-2 py-2.5 text-xs ${i < parVsKebakaran.length-1 ? "border-b border-black/5" : ""}`}>
                  <span className="font-semibold text-navy">{r.aspek}</span>
                  <span className="text-red-500/80">{r.kebakaran}</span>
                  <span className="text-green-700 font-medium">{r.par}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-black/8 text-[0.7rem]">
              <span className="text-[#64748B]">Aspek</span>
              <span className="text-red-500 font-semibold">Kebakaran</span>
              <span className="text-green-700 font-semibold">PAR ✓</span>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cakupan Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Apa Saja yang<br />Dijamin PAR?</h2>
          <p className="text-base text-[#64748B] max-w-[480px] mx-auto mt-3">Cakupan berikut umumnya tersedia dalam polis PAR standard — detail pengecualian tergantung perusahaan asuransi</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {coverageItems.map(c => (
            <div key={c.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{c.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-4xl mx-auto bg-gold/8 border border-gold/20 rounded-xl p-5">
          <p className="text-sm text-navy2">
            <strong className="text-gold">⚠️ Pengecualian Umum PAR:</strong> Keausan normal, cacat bawaan, kesalahan desain, perang, nuklir, dan kerugian non-fisik (seperti kehilangan profit). Kami akan menjelaskan semua pengecualian secara rinci sebelum Anda memutuskan membeli.
          </p>
        </div>
      </section>

      {/* TARGET PASAR */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Untuk Siapa?</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">PAR Cocok untuk<br />Properti Komersial Anda</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {targetPasar.map(t => (
            <div key={t.label} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{t.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{t.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-properti/kebakaran" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔥 Asuransi Kebakaran →</Link>
            <Link href="/asuransi-properti/banjir-gempa" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🌊 Perluasan Banjir & Gempa →</Link>
            <Link href="/asuransi-properti/hotel-vila" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏨 Hotel & Vila Wisata →</Link>
            <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
            <Link href="/asuransi-properti" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Properti</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Properti Komersial Anda<br />Butuh Perlindungan Terbaik</h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis soal Property All Risk — kami bantu analisis risiko, hitung kebutuhan pertanggungan, dan cari penawaran terbaik.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
            💬 Konsultasi PAR via WhatsApp
          </a>
        </div>
      </section>
    </PropertyLayout>
  );
}
