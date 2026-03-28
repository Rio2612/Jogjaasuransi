import type { Metadata } from "next";
import Link from "next/link";
import LiabilityLayout from "@/components/liability/LiabilityLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Liability Limbah B3 & Pencemaran Lingkungan Jogja | Asuransi Jogja",
  description: "Asuransi environmental liability dan limbah B3 di Yogyakarta. Perlindungan dari tuntutan pencemaran lingkungan, kebocoran bahan kimia, dan kewajiban pemulihan. Konsultasi gratis.",
  keywords: "asuransi limbah b3 jogja, environmental liability yogyakarta, asuransi pencemaran lingkungan jogja, pollution liability yogyakarta, asuransi industri kimia jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-liability/limbah-b3" },
};

const definisiB3 = [
  { icon: "☣️", label: "Beracun (Toxic)", desc: "Bahan yang dapat menyebabkan kematian atau sakit serius jika tertelan, terhirup, atau kontak kulit" },
  { icon: "🔥", label: "Mudah Terbakar (Flammable)", desc: "Pelarut organik, bahan bakar industri, dan cairan kimia dengan titik bakar rendah" },
  { icon: "💥", label: "Reaktif (Reactive)", desc: "Bahan yang tidak stabil dan dapat meledak atau melepas gas beracun jika bereaksi" },
  { icon: "⚡", label: "Korosif (Corrosive)", desc: "Asam kuat, basa kuat, dan bahan yang dapat merusak jaringan hidup dan logam" },
];

const risikoTertanggung = [
  { icon: "🌊", label: "Pencemaran Air Tanah & Sungai", desc: "Kebocoran tangki penyimpanan, rembesan dari landfill, atau pembuangan limbah cair ilegal yang mencemari sumber air" },
  { icon: "💨", label: "Emisi Udara Berbahaya", desc: "Kebocoran gas beracun, asap industri berlebih, atau emisi VOC yang berdampak pada kesehatan masyarakat sekitar" },
  { icon: "🏭", label: "Kontaminasi Tanah", desc: "Tumpahan bahan kimia, bocornya pipa, atau pembuangan limbah B3 yang mencemari lahan sekitar fasilitas" },
  { icon: "🏘️", label: "Dampak ke Komunitas", desc: "Tuntutan warga sekitar atas gangguan kesehatan, kerusakan properti, atau penurunan nilai tanah akibat pencemaran" },
  { icon: "🌱", label: "Kewajiban Pemulihan", desc: "Biaya membersihkan area tercemar, meremediasi tanah, dan memulihkan ekosistem sesuai perintah regulator" },
  { icon: "⚖️", label: "Gugatan & Denda Regulator", desc: "Denda KLHK, sanksi administratif, dan biaya pembelaan hukum atas pelanggaran regulasi lingkungan" },
];

const regulasiTerkait = [
  { kode: "UU 32/2009", nama: "Perlindungan & Pengelolaan Lingkungan Hidup", poin: "Pelaku usaha bertanggung jawab atas kerusakan lingkungan yang ditimbulkan dan wajib melakukan pemulihan" },
  { kode: "PP 22/2021", nama: "Pengelolaan Limbah B3", poin: "Mengatur tata cara pengelolaan, penyimpanan, dan pengangkutan limbah B3 serta sanksi pelanggarannya" },
  { kode: "PermenLHK P.56/2015", nama: "Tata Cara & Persyaratan Teknis Pengelolaan LB3", poin: "Standar teknis fasilitas penyimpanan sementara (TPS) dan persyaratan manifes limbah B3" },
];

const industiTarget = [
  { icon: "🏥", label: "Rumah Sakit & Klinik", desc: "Limbah medis infeksius, bahan kimia lab, obat kadaluarsa, dan cairan tubuh pasien" },
  { icon: "🔧", label: "Bengkel & Industri Otomotif", desc: "Oli bekas, aki, cairan rem, cat berbasis solvent, dan bahan kimia perawatan kendaraan" },
  { icon: "👗", label: "Laundry & Tekstil Industri", desc: "Detergen kimia keras, pewarna tekstil, dan air limbah yang mengandung logam berat" },
  { icon: "🏭", label: "Pabrik & Manufaktur", desc: "Berbagai limbah proses produksi tergantung jenis industri — logam berat, pelarut, asam/basa" },
  { icon: "🖨️", label: "Percetakan & Packaging", desc: "Tinta berbasis solvent, pelat cetak, dan limbah proses finishing produk" },
  { icon: "🌿", label: "Pertanian & Perkebunan", desc: "Wadah pestisida, pupuk kimia berlebih, dan pencemaran akibat penggunaan agrokimia" },
];

export default function LimbahB3Page() {
  return (
    <LiabilityLayout breadcrumbs={[
      { label: "Asuransi Liability", href: "/asuransi-liability" },
      { label: "Liability Limbah B3" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">⚗️</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-liability" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Liability</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Environmental Liability · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Liability<br /><em className="not-italic text-gold">Limbah B3 & Pencemaran</em><br />Lingkungan
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[520px] mb-8">
            Satu insiden kebocoran bahan kimia atau pembuangan limbah B3 yang tidak sesuai prosedur bisa menimbulkan tuntutan miliaran rupiah — dari warga sekitar, pemerintah, maupun KLHK. Asuransi environmental liability adalah proteksi terakhir Anda.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#risiko" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Risiko Tertanggung →</a>
          </div>
        </div>
      </section>

      {/* APA ITU B3 */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Definisi</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Apa itu Limbah B3?</h2>
          <p className="text-base text-[#64748B] max-w-[500px] mx-auto mt-3">B3 = Bahan Berbahaya dan Beracun. Sesuai PP 22/2021, limbah yang mengandung sifat-sifat berikut dikategorikan sebagai limbah B3 dan diatur secara ketat</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {definisiB3.map(d=>(
            <div key={d.label} className="bg-white rounded-card p-5 text-center border border-black/6">
              <div className="text-3xl mb-2">{d.icon}</div>
              <div className="font-heading text-navy font-bold text-sm mb-2">{d.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RISIKO TERTANGGUNG */}
      <section id="risiko" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cakupan Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Risiko yang Dijamin<br />Environmental Liability</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {risikoTertanggung.map(r=>(
            <div key={r.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{r.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REGULASI */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Landasan Hukum</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Regulasi yang Mengikat<br />Pengelola Limbah B3</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {regulasiTerkait.map(r=>(
            <div key={r.kode} className="bg-white rounded-card p-6 border border-black/6 grid grid-cols-[90px_1fr] gap-4 items-start">
              <div className="bg-navy rounded-lg p-2 text-center"><div className="font-heading text-gold text-[0.78rem] font-bold leading-tight">{r.kode}</div></div>
              <div><div className="font-heading text-navy font-bold text-[0.95rem] mb-1">{r.nama}</div><p className="text-base leading-relaxed text-[#64748B]">{r.poin}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRI TARGET */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Industri Sasaran</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Siapa yang Wajib<br />Memiliki Perlindungan Ini?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {industiTarget.map(i=>(
            <div key={i.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{i.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{i.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-liability/public-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
            <Link href="/asuransi-liability/employer-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏢 Property All Risk →</Link>
            <Link href="/asuransi-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Liability</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Kelola Limbah B3 dengan Aman,<br />Bisnis Anda Terlindungi Penuh</h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis analisis risiko lingkungan — kami bantu identifikasi potensi liabilitas dan produk yang paling sesuai.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Environmental Liability</a>
        </div>
      </section>
    </LiabilityLayout>
  );
}
