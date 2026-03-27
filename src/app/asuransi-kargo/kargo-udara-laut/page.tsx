import type { Metadata } from "next";
import Link from "next/link";
import KargoLayout from "@/components/kargo/KargoLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kargo Udara & Laut Jogja – Marine Cargo & Air Freight | Asuransi Jogja",
  description: "Asuransi marine cargo dan air freight di Yogyakarta. Proteksi ekspor impor, kargo kapal antarpulau, dan pengiriman udara internasional. Klausul ICC-A tersedia. Konsultasi gratis.",
  keywords: "marine cargo jogja, asuransi kargo laut yogyakarta, air freight insurance jogja, asuransi ekspor impor yogyakarta, asuransi kargo kapal jogja, ICC-A marine cargo",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-kargo/kargo-udara-laut" },
  openGraph: {
    title: "Asuransi Kargo Udara & Laut Jogja – Marine Cargo & Air Freight",
    url: "https://asuransijogja.biz.id/asuransi-kargo/kargo-udara-laut",
  },
};

const risikoLaut = [
  { icon: "🌊", label: "Badai & Gelombang Tinggi", desc: "Cuaca ekstrem di laut lepas bisa merusak muatan meski kontainer terkunci rapat" },
  { icon: "🚢", label: "Kapal Kandas & Karam", desc: "Kecelakaan kapal menyebabkan seluruh muatan ikut tenggelam atau rusak parah" },
  { icon: "💧", label: "Air Laut Masuk (Seawater)", desc: "Kebocoran dek atau palka kapal menyebabkan barang basah — terutama merusak elektronik dan tekstil" },
  { icon: "🔥", label: "Kebakaran di Kapal", desc: "Api di ruang mesin atau palka kargo dapat menghanguskan muatan dalam hitungan jam" },
  { icon: "⚓", label: "General Average", desc: "Jika muatan dikorbankan untuk keselamatan kapal, pemilik kargo wajib ikut menanggung kerugian bersama" },
  { icon: "🦹", label: "Pembajakan & Pencurian", desc: "Risiko pembajakan dan pencurian muatan masih ada di jalur pelayaran tertentu di perairan Indonesia" },
];

const risikoUdara = [
  { icon: "✈️", label: "Kecelakaan Pesawat", desc: "Risiko paling ekstrem — muatan biasanya musnah total namun frekuensinya sangat rendah" },
  { icon: "💨", label: "Turbulensi & Guncangan", desc: "Guncangan keras selama penerbangan dapat merusak barang rapuh meski kemasan masih utuh" },
  { icon: "🏗️", label: "Penanganan di Bandara", desc: "Kerusakan terbanyak terjadi saat bongkar muat di terminal kargo bandara — barang dijatuhkan atau tertukar" },
  { icon: "⏱️", label: "Keterlambatan & Delay", desc: "Kargo tertahan di bea cukai atau delay penerbangan — beberapa produk sensitif waktu bisa mengalami kerugian" },
];

const jalurUnggulan = [
  { rute: "Jogja → Jakarta", moda: "Udara & Darat", waktu: "1–2 hari", produk: "Batik premium, perhiasan, elektronik" },
  { rute: "Jogja → Surabaya", moda: "Darat & Kereta", waktu: "1 hari", produk: "Furniture, kerajinan, makanan olahan" },
  { rute: "Jogja → Makassar", moda: "Laut via Surabaya", waktu: "3–5 hari", produk: "Raw material, mebel, produk industri" },
  { rute: "Jogja → Luar Negeri", moda: "Udara Internasional", waktu: "2–7 hari", produk: "Produk ekspor: batik, kerajinan, herbal" },
];

export default function KargoUdaraLautPage() {
  return (
    <KargoLayout breadcrumbs={[
      { label: "Asuransi Kargo", href: "/asuransi-kargo" },
      { label: "Kargo Udara & Laut" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">✈️</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-kargo" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Kargo</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Marine Cargo & Air Freight · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Kargo<br /><em className="not-italic text-gold">Udara & Laut</em><br />Ekspor, Impor & Antarpulau
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Produk ekspor Yogyakarta — batik tulis, perak Kotagede, dan kerajinan ukir — semakin diminati pasar internasional. Setiap pengiriman lintas negara dan lintas pulau menyimpan risiko yang jauh lebih besar dari pengiriman darat biasa.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#jalur" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Jalur Pengiriman →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"ICC-A",lbl:"All Risks Tersedia"},{num:"Ekspor",lbl:"& Impor Cover"},{num:"Gratis",lbl:"Konsultasi"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-xl font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* RISIKO LAUT */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Risiko Laut</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Risiko Kargo<br />di Jalur Pelayaran</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {risikoLaut.map(r=>(
            <div key={r.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{r.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RISIKO UDARA */}
      <section className="py-14 px-[5vw] bg-white">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Risiko Udara</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Risiko Kargo<br />di Jalur Udara</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {risikoUdara.map(r=>(
            <div key={r.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{r.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JALUR UNGGULAN */}
      <section id="jalur" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Rute Pengiriman</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Jalur Pengiriman Utama<br />dari Yogyakarta</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {jalurUnggulan.map(j=>(
            <div key={j.rute} className="bg-white rounded-card p-5 border border-black/6 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_1fr] gap-3 items-center">
              <div className="font-heading text-navy font-bold text-[0.95rem]">📍 {j.rute}</div>
              <span className="hidden md:block text-gold/40 text-sm">|</span>
              <div className="text-xs text-[#64748B]"><span className="font-semibold text-navy">Moda:</span> {j.moda}<br /><span className="font-semibold text-navy">Estimasi:</span> {j.waktu}</div>
              <div className="bg-gold/8 border border-gold/15 rounded-lg px-3 py-2 text-xs text-navy2">{j.produk}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-3xl mx-auto bg-navy rounded-xl p-6 text-white text-center">
          <div className="font-heading text-gold text-sm font-semibold mb-2">🌏 Asuransi Kargo Ekspor Internasional</div>
          <p className="text-xs leading-relaxed text-white/75 mb-4">Produk ekspor Yogyakarta seperti batik, perak, dan kerajinan semakin diminati pasar Eropa, Amerika, dan Asia. Kami bantu urus polis kargo internasional sesuai persyaratan buyer dan Incoterms yang disepakati.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="inline-block bg-gold text-navy px-6 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">Konsultasi Kargo Ekspor</a>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-kargo/pengiriman-barang" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📦 Pengiriman Barang Darat →</Link>
            <Link href="/asuransi-kargo/ekspedisi-umkm" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛍️ Kargo UMKM →</Link>
            <Link href="/asuransi-kendaraan/armada-fleet" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚐 Armada Fleet →</Link>
            <Link href="/asuransi-kargo" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Kargo</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Ekspor Jogja ke Seluruh Dunia —<br />Terlindungi Penuh</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Urus asuransi marine cargo dan air freight bersama konsultan berpengalaman. Konsultasi gratis, premi kompetitif.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Marine Cargo</a>
        </div>
      </section>
    </KargoLayout>
  );
}
