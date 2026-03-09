import type { Metadata } from "next";
import Link from "next/link";
import EngineeringLayout from "@/components/engineering/EngineeringLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Machinery Breakdown Jogja – Kerusakan Mesin Industri | Asuransi Jogja",
  description: "Asuransi Machinery Breakdown di Yogyakarta untuk mesin produksi, kompresor, genset, dan peralatan industri. Perlindungan dari kerusakan mendadak saat beroperasi. Konsultasi gratis.",
  keywords: "machinery breakdown jogja, asuransi mesin rusak yogyakarta, asuransi kerusakan mesin jogja, machine breakdown insurance DIY, asuransi genset yogyakarta, asuransi mesin pabrik jogja",
  openGraph: {
    title: "Asuransi Machinery Breakdown Jogja – Kerusakan Mesin Industri",
    url: "https://asuransijogja.com/asuransi-engineering/machinery-breakdown",
  },
};

const bedaMBvsKebakaran = [
  { aspek: "Penyebab Kerusakan", kebakaran: "Kebakaran dari luar yang merusak mesin", mb: "Kerusakan dari dalam mesin itu sendiri" },
  { aspek: "Contoh Kejadian", kebakaran: "Mesin terbakar karena kebakaran pabrik", mb: "Korsleting internal, bearing aus, piston pecah" },
  { aspek: "Frekuensi", kebakaran: "Jarang terjadi, dampak masif", mb: "Lebih sering terjadi, dampak per-mesin" },
  { aspek: "Biaya Perbaikan", kebakaran: "Biasanya diganti total (total loss)", mb: "Perbaikan komponen atau penggantian parsial" },
];

const penyebabKerusakan = [
  { icon: "⚡", label: "Korsleting & Kegagalan Listrik", desc: "Lonjakan tegangan (voltage surge), korsleting pada motor listrik, dan kerusakan akibat pemadaman listrik mendadak yang sering terjadi di kawasan industri" },
  { icon: "🔩", label: "Kegagalan Komponen Internal", desc: "Bearing aus, gear patah, piston retak, atau shaft bengkok akibat kelelahan material setelah jam operasional panjang" },
  { icon: "🌡️", label: "Overheat & Kegagalan Pendingin", desc: "Sistem pendingin mesin yang tidak berfungsi menyebabkan suhu berlebih — kerusakan paling umum pada mesin produksi non-stop" },
  { icon: "💧", label: "Masuknya Air & Kontaminan", desc: "Air atau pelumas yang terkontaminasi masuk ke sistem mesin menyebabkan kerusakan komponen presisi secara cepat" },
  { icon: "🤷", label: "Kesalahan Operator", desc: "Kesalahan pengoperasian yang tidak disengaja — beban berlebih, pengaturan parameter salah, atau prosedur startup yang keliru" },
  { icon: "🔄", label: "Vibrasi & Misalignment", desc: "Ketidaksejajaran poros, fondasi yang tidak rata, atau imbalance pada komponen berputar mempercepat keausan mesin" },
];

const mesinaYangDijamin = [
  { icon: "🏭", label: "Mesin Produksi & Manufaktur", contoh: "Mesin cetak offset, mesin jahit industri, line produksi otomatis, mesin CNC, dan mesin press" },
  { icon: "❄️", label: "Sistem Pendingin & HVAC", contoh: "Chiller, kompresor AC sentral, cooling tower, dan sistem refrigerasi industri" },
  { icon: "⚡", label: "Genset & Sistem Kelistrikan", contoh: "Generator listrik cadangan, trafo distribusi, UPS industri, dan panel switchgear" },
  { icon: "💧", label: "Pompa & Kompresor", contoh: "Pompa air industri, pompa bahan kimia, kompresor udara, dan pompa hidrolik" },
  { icon: "🔄", label: "Konveyor & Material Handling", contoh: "Belt conveyor, crane overhead, forklift elektrik, dan elevator kargo" },
  { icon: "🖨️", label: "Mesin Cetak & Percetakan", contoh: "Mesin offset, digital printing industri, mesin finishing, dan binding machine" },
];

const dampakBisnis = [
  { icon: "⏸️", title: "Produksi Berhenti", desc: "Satu mesin utama rusak bisa menghentikan seluruh lini produksi — seluruh target produksi berantakan dalam hitungan jam" },
  { icon: "💰", title: "Biaya Perbaikan Besar", desc: "Spare part mesin impor, jasa teknisi spesialis, dan waktu tunggu pengiriman komponen bisa menelan ratusan juta rupiah" },
  { icon: "🏃", title: "Kehilangan Kontrak", desc: "Ketidakmampuan memenuhi order karena mesin rusak bisa berujung pada penalti kontrak dan kehilangan klien jangka panjang" },
  { icon: "👷", title: "Dampak ke Karyawan", desc: "Produksi berhenti artinya karyawan tidak bisa bekerja — biaya overhead tetap berjalan walau mesin tidak beroperasi" },
];

const biayaOverhaulTipikal = [
  { mesin: "Chiller / AC Sentral", biaya: "Rp 50 – 300 juta", keterangan: "Tergantung kapasitas dan jenis kerusakan kompresor" },
  { mesin: "Genset 100 – 500 kVA", biaya: "Rp 30 – 200 juta", keterangan: "Overhaul mesin diesel, alternator, dan panel kontrol" },
  { mesin: "Mesin CNC / Produksi", biaya: "Rp 20 – 500 juta", keterangan: "Sangat bervariasi tergantung merek dan ketersediaan suku cadang" },
  { mesin: "Kompresor Industri", biaya: "Rp 15 – 100 juta", keterangan: "Penggantian piston, valve, bearing, dan sistem pendingin" },
];

export default function MachineryBreakdownPage() {
  return (
    <EngineeringLayout breadcrumbs={[
      { label: "Asuransi Engineering", href: "/asuransi-engineering" },
      { label: "Machinery Breakdown (MB)" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">🔧</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-engineering" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Engineering</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Machinery Breakdown · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Machinery<br /><em className="not-italic text-gold">Breakdown (MB)</em><br />Mesin Rusak, Bisnis Jalan Terus
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Mesin produksi tidak pernah rusak di waktu yang tepat. Tapi dengan Machinery Breakdown Insurance, biaya perbaikan tak terduga tidak harus mengganggu arus kas dan kelangsungan bisnis Anda.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi MB Sekarang</a>
            <a href="#mesin" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Cek Mesin yang Dijamin →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"Semua",lbl:"Kerusakan Mendadak"},{num:"Bukan",lbl:"Hanya Kebakaran"},{num:"Gratis",lbl:"Analisis Kebutuhan"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* PERBEDAAN MB vs KEBAKARAN */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Kenapa Perlu MB?</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Asuransi Kebakaran Tidak Cukup —<br />Ini Bedanya dengan MB</h2>
          <p className="text-sm text-[#64748B] max-w-[500px] mx-auto mt-3">Banyak pemilik pabrik mengira mesinnya sudah terlindungi karena ada asuransi kebakaran. Kenyataannya, 90% kerusakan mesin bukan disebabkan kebakaran.</p>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left p-4 font-heading font-semibold text-xs rounded-tl-xl">Aspek</th>
                <th className="text-left p-4 font-heading font-semibold text-xs">Asuransi Kebakaran</th>
                <th className="text-left p-4 font-heading font-semibold text-xs rounded-tr-xl text-gold">Machinery Breakdown</th>
              </tr>
            </thead>
            <tbody>
              {bedaMBvsKebakaran.map((b, i)=>(
                <tr key={b.aspek} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                  <td className="p-4 font-semibold text-navy text-xs">{b.aspek}</td>
                  <td className="p-4 text-[#64748B] text-xs leading-relaxed">{b.kebakaran}</td>
                  <td className="p-4 text-navy2 text-xs leading-relaxed font-medium">{b.mb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 max-w-4xl mx-auto bg-gold/8 border border-gold/20 rounded-xl p-5">
          <p className="text-sm text-navy2"><strong className="text-gold">💡 Solusi Terbaik:</strong> Kombinasikan asuransi kebakaran (untuk risiko eksternal) dengan Machinery Breakdown (untuk risiko internal mesin). Keduanya saling melengkapi dan menutup seluruh risiko kerusakan mesin industri Anda.</p>
        </div>
      </section>

      {/* PENYEBAB KERUSAKAN */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Penyebab Kerusakan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">6 Penyebab Utama<br />Kerusakan Mesin Industri</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {penyebabKerusakan.map(p=>(
            <div key={p.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{p.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DAMPAK BISNIS */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Dampak Bisnis</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Apa yang Terjadi Ketika<br />Mesin Utama Tiba-Tiba Rusak?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {dampakBisnis.map(d=>(
            <div key={d.title} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{d.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{d.title}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MESIN YANG DIJAMIN */}
      <section id="mesin" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cakupan Mesin</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Mesin & Peralatan<br />yang Dapat Dijamin MB</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {mesinaYangDijamin.map(m=>(
            <div key={m.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{m.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{m.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{m.contoh}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BIAYA OVERHAUL */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Referensi Biaya</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Estimasi Biaya Perbaikan<br />Mesin Industri Umum</h2>
          <p className="text-sm text-[#64748B] max-w-[460px] mx-auto mt-2">Angka di bawah adalah estimasi pasar — biaya aktual sangat bergantung pada kondisi dan ketersediaan suku cadang</p>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {biayaOverhaulTipikal.map(b=>(
            <div key={b.mesin} className="bg-white rounded-card p-5 border border-black/5 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 items-center">
              <div className="font-heading text-navy font-bold text-sm">{b.mesin}</div>
              <div className="hidden md:block text-gold/30">|</div>
              <div>
                <div className="font-heading text-gold font-bold text-base">{b.biaya}</div>
                <div className="text-xs text-[#64748B] mt-0.5">{b.keterangan}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-3xl mx-auto bg-navy rounded-xl p-6 text-white">
          <div className="font-heading text-gold text-sm font-semibold mb-2">📊 Premi vs Biaya Perbaikan</div>
          <p className="text-xs leading-relaxed text-white/75">Premi Machinery Breakdown biasanya berkisar <strong className="text-gold">0,3–0,8% dari nilai mesin per tahun</strong>. Untuk mesin senilai Rp 500 juta, premi sekitar Rp 1,5–4 juta per tahun. Satu kali kejadian kerusakan serius sudah bisa menutup biaya premi puluhan tahun ke depan.</p>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-engineering/contractor-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏗️ Contractor All Risk →</Link>
            <Link href="/asuransi-engineering/erection-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚙️ Erection All Risk →</Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏭 Property All Risk →</Link>
            <Link href="/asuransi-liability/employer-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
            <Link href="/asuransi-engineering" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Engineering</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Mesin Rusak Tak Terduga —<br />Biaya Perbaikan Sudah Tertanggung</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis Machinery Breakdown — kami bantu inventarisir mesin, hitung nilai pertanggungan, dan pilih polis yang tepat untuk industri Anda.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi MB via WhatsApp</a>
        </div>
      </section>
    </EngineeringLayout>
  );
}
