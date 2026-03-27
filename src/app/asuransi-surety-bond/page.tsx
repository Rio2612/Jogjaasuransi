import type { Metadata } from "next";
import Link from "next/link";
import SuretyLayout from "@/components/surety/SuretyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Surety Bond Jogja – Jaminan Tender, Pelaksanaan & Uang Muka | Asuransi Jogja",
  description: "Konsultan Surety Bond di Yogyakarta. Jaminan Penawaran, Jaminan Pelaksanaan, Jaminan Uang Muka, dan Jaminan Pemeliharaan untuk tender pemerintah dan swasta DIY. Proses cepat 1–2 hari.",
  keywords: "surety bond jogja, jaminan penawaran yogyakarta, jaminan pelaksanaan jogja, jaminan uang muka yogyakarta, surety bond tender pemerintah DIY, bank garansi jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-surety-bond" },
  openGraph: {
    title: "Surety Bond Jogja – Jaminan Tender & Kontrak Konstruksi",
    description: "Proses cepat 1–2 hari kerja. Jaminan Penawaran, Pelaksanaan, Uang Muka, dan Pemeliharaan untuk kontraktor dan vendor di Yogyakarta.",
    url: "https://asuransijogja.biz.id/asuransi-surety-bond",
  },
};

const clusters = [
  {
    href: "/asuransi-surety-bond/jaminan-penawaran",
    icon: "📋", batik: "◈",
    kode: "Bid Bond",
    title: "Jaminan Penawaran",
    subtitle: "Bid Bond · Syarat Ikut Tender",
    desc: "Jaminan bahwa peserta tender serius dan siap melaksanakan kontrak jika memenangkan lelang. Wajib dilampirkan pada dokumen penawaran tender pemerintah maupun swasta.",
    tags: ["Tender APBN/APBD", "Lelang Swasta", "e-Procurement", "LPSE DIY"],
    nilai: "1–3% dari nilai penawaran",
  },
  {
    href: "/asuransi-surety-bond/jaminan-pelaksanaan",
    icon: "🏗️", batik: "❖",
    kode: "Performance Bond",
    title: "Jaminan Pelaksanaan",
    subtitle: "Performance Bond · Garansi Kontrak",
    desc: "Perlindungan bagi pemilik proyek bahwa kontraktor akan menyelesaikan pekerjaan sesuai spesifikasi, mutu, dan tenggat waktu yang telah disepakati dalam kontrak.",
    tags: ["Konstruksi Gedung", "Infrastruktur", "Pengadaan Barang", "Jasa Konsultansi"],
    nilai: "5% dari nilai kontrak",
  },
  {
    href: "/asuransi-surety-bond/jaminan-uang-muka",
    icon: "💰", batik: "⬡",
    kode: "Advance Payment Bond",
    title: "Jaminan Uang Muka",
    subtitle: "Advance Payment Bond",
    desc: "Jaminan pengembalian uang muka kepada pemilik proyek apabila kontraktor gagal melaksanakan pekerjaan setelah menerima pembayaran uang muka dari kontrak.",
    tags: ["Uang Muka Kontrak", "Proyek Pemerintah", "Proyek EPC", "Infrastruktur"],
    nilai: "Senilai uang muka diterima",
  },
  {
    href: "/asuransi-surety-bond/jaminan-pemeliharaan",
    icon: "🛡️", batik: "✦",
    kode: "Maintenance Bond",
    title: "Jaminan Pemeliharaan",
    subtitle: "Maintenance Bond · Masa Garansi",
    desc: "Jaminan bahwa kontraktor akan memperbaiki cacat atau kerusakan yang ditemukan dalam masa pemeliharaan setelah pekerjaan selesai dan diserahterimakan.",
    tags: ["Masa Pemeliharaan", "Serah Terima", "Garansi Pekerjaan", "Defect Liability"],
    nilai: "5% dari nilai kontrak",
  },
];

const alurTender = [
  { step: "01", icon: "📢", label: "Pengumuman Tender", desc: "Pemilik proyek mengumumkan lelang melalui LPSE atau media pengadaan" },
  { step: "02", icon: "📋", label: "Jaminan Penawaran", desc: "Peserta melampirkan Bid Bond sebagai syarat dokumen penawaran" },
  { step: "03", icon: "🏆", label: "Penetapan Pemenang", desc: "Panitia mengevaluasi dan menetapkan pemenang tender" },
  { step: "04", icon: "📝", label: "Tanda Tangan Kontrak", desc: "Pemenang menandatangani kontrak dan menyerahkan Performance Bond" },
  { step: "05", icon: "💳", label: "Jaminan Uang Muka", desc: "Kontraktor menyerahkan Advance Payment Bond sebelum menerima uang muka" },
  { step: "06", icon: "🏗️", label: "Pelaksanaan Proyek", desc: "Proyek berjalan — Performance Bond aktif selama masa pelaksanaan" },
  { step: "07", icon: "✅", label: "Serah Terima", desc: "Pekerjaan selesai, Performance Bond digantikan Maintenance Bond" },
  { step: "08", icon: "🛡️", label: "Masa Pemeliharaan", desc: "Maintenance Bond aktif hingga akhir masa garansi pekerjaan" },
];

const mengapaSurety = [
  { icon: "⚡", title: "Proses Lebih Cepat dari Bank", desc: "Surety bond dari perusahaan asuransi umumnya lebih cepat diproses dibanding bank garansi — bisa 1–2 hari kerja dengan dokumen lengkap." },
  { icon: "💰", title: "Tidak Memblokir Modal", desc: "Bank garansi mengharuskan setoran tunai sebagai agunan. Surety bond tidak — modal kontraktor tetap bebas untuk membiayai proyek." },
  { icon: "📊", title: "Limit Sesuai Kapasitas", desc: "Limit surety bond ditetapkan berdasarkan kapasitas finansial dan track record kontraktor — bukan sekadar nilai aset yang dijaminkan." },
  { icon: "🤝", title: "Diterima Semua Pemilik Proyek", desc: "Surety bond dari perusahaan asuransi berizin OJK diterima di semua proyek pemerintah dan sebagian besar proyek swasta besar." },
];

const regulasiAcuan = [
  { kode: "Perpres 16/2018", topik: "Pengadaan Barang/Jasa Pemerintah", poin: "Mengatur jenis jaminan yang wajib dalam setiap tahap pengadaan — Bid Bond, Performance Bond, Advance Payment Bond, dan Maintenance Bond" },
  { kode: "Perpres 12/2021", topik: "Perubahan Perpres 16/2018", poin: "Memperbarui ketentuan pengadaan termasuk persyaratan jaminan dalam kontrak pengadaan pemerintah pusat dan daerah" },
  { kode: "Permen PUPR 14/2020", topik: "Standar dan Pedoman Pengadaan Jasa Konstruksi", poin: "Mengatur nilai dan bentuk jaminan khusus untuk proyek jasa konstruksi yang dibiayai APBN/APBD" },
];

const faqItems = [
  {
    q: "Apa bedanya surety bond dan bank garansi?",
    a: "Keduanya adalah instrumen jaminan untuk pengadaan, tapi berbeda mekanisme. Bank garansi diterbitkan bank dan umumnya memerlukan setoran tunai (cash collateral) sebagai agunan. Surety bond diterbitkan perusahaan asuransi berdasarkan analisis kapasitas kontraktor — tanpa blokir modal. Keduanya diterima di proyek pemerintah sesuai Perpres 16/2018."
  },
  {
    q: "Berapa lama proses penerbitan surety bond?",
    a: "Dengan dokumen lengkap, surety bond bisa terbit dalam 1–2 hari kerja. Dokumen yang dibutuhkan: akta perusahaan, NPWP, laporan keuangan terakhir, dan dokumen kontrak atau undangan tender. Hubungi Pak Rio segera untuk proses yang lebih cepat."
  },
  {
    q: "Apakah surety bond bisa dipakai untuk tender LPSE Yogyakarta?",
    a: "Ya, surety bond dari perusahaan asuransi yang terdaftar dan berizin OJK diterima di semua LPSE termasuk LPSE Pemerintah Provinsi DIY, Kota Yogyakarta, Kabupaten Sleman, Bantul, Kulon Progo, dan Gunung Kidul."
  },
  {
    q: "Berapa nilai jaminan yang harus disiapkan untuk tender?",
    a: "Jaminan Penawaran (Bid Bond) umumnya 1–3% dari nilai penawaran. Jaminan Pelaksanaan (Performance Bond) 5% dari nilai kontrak. Jaminan Uang Muka senilai uang muka yang diterima. Jaminan Pemeliharaan 5% dari nilai kontrak. Nilai pasti mengacu pada dokumen pengadaan masing-masing proyek."
  },
  {
    q: "Kontraktor kecil/UMKM apakah bisa menggunakan surety bond?",
    a: "Ya, surety bond tersedia untuk semua skala kontraktor — dari kontraktor kecil kualifikasi K1/K2 hingga kontraktor besar. Limit dan persyaratan disesuaikan dengan kualifikasi dan kapasitas finansial kontraktor."
  },
];

export default function AsuransiSuretyBondPage() {
  return (
    <SuretyLayout breadcrumbs={[{ label: "Surety Bond" }]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)"}} />
        <div className="absolute top-8 right-[5vw] text-gold/6 font-heading text-[8rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>Surety Bond · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,4vw,3.8rem)] text-white leading-[1.15] mb-5">
            Surety Bond Jogja<br /><em className="not-italic text-gold">Jaminan Tender & Kontrak</em><br />Proses Cepat 1–2 Hari
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[530px] mb-8">
            Tender pemerintah di DIY mensyaratkan jaminan di setiap tahapnya. Tanpa surety bond yang tepat waktu, kesempatan proyek bisa hilang begitu saja. Kami bantu kontraktor Yogyakarta mendapatkan semua jenis jaminan dengan proses cepat dan tanpa blokir modal.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 hover:-translate-y-px transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#jenis" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">4 Jenis Jaminan →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              {num:"4 Jenis",lbl:"Bid · Performance · AP · Maintenance"},
              {num:"1–2 Hari",lbl:"Proses Penerbitan"},
              {num:"Gratis",lbl:"Konsultasi & Review"},
            ].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA SURETY */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Keunggulan</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Mengapa Surety Bond<br />Lebih Menguntungkan dari Bank Garansi?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {mengapaSurety.map(m=>(
            <div key={m.title} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{m.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{m.title}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 JENIS JAMINAN */}
      <section id="jenis" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">4 Jenis Jaminan</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Semua Tahap Tender<br />Tersedia di Satu Tempat</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {clusters.map(c=>(
            <Link key={c.href} href={c.href} className="no-underline group">
              <div className="border border-black/8 rounded-card p-7 h-full hover:shadow-[0_12px_40px_rgba(13,33,55,0.1)] hover:-translate-y-1.5 hover:border-gold/30 transition-all relative overflow-hidden bg-white">
                <div className="absolute top-4 right-5 text-gold/10 font-heading text-[3.5rem] leading-none select-none">{c.batik}</div>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[2rem]">{c.icon}</span>
                  <div>
                    <div className="bg-gold/10 border border-gold/20 text-gold text-[0.75rem] font-bold px-2 py-0.5 rounded-full tracking-wider inline-block mb-1">{c.kode}</div>
                    <div className="font-heading text-navy font-bold text-[1.15rem] leading-tight">{c.title}</div>
                    <div className="text-[#64748B] text-xs mt-0.5">{c.subtitle}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[#64748B] mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {c.tags.map(t=><span key={t} className="bg-gold/8 border border-gold/15 text-navy2 text-xs px-2.5 py-1 rounded-full font-medium">{t}</span>)}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-[#64748B]">Nilai: <span className="font-semibold text-navy">{c.nilai}</span></div>
                  <div className="text-gold text-sm font-semibold group-hover:translate-x-1 transition-transform">→</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ALUR TENDER */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Alur Pengadaan</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Jaminan Dibutuhkan<br />di Setiap Tahap Tender</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {alurTender.map((a)=>(
            <div key={a.step} className="bg-white rounded-card p-5 border border-black/5 relative">
              <div className="absolute top-4 right-4 font-heading text-[2rem] font-bold text-navy/6">{a.step}</div>
              <div className="text-2xl mb-2">{a.icon}</div>
              <div className="font-heading text-navy font-bold text-[0.9rem] mb-1.5">{a.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REGULASI */}
      <section className="py-14 px-[5vw] bg-white">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Landasan Hukum</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Regulasi yang Mengatur<br />Jaminan Pengadaan di Indonesia</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {regulasiAcuan.map(r=>(
            <div key={r.kode} className="bg-cream rounded-card p-6 border border-black/5 grid grid-cols-[90px_1fr] gap-4 items-start">
              <div className="bg-navy rounded-lg p-2 text-center"><div className="font-heading text-gold text-[0.75rem] font-bold leading-tight">{r.kode}</div></div>
              <div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1">{r.topik}</div>
                <p className="text-base leading-relaxed text-[#64748B]">{r.poin}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SINERGI */}
      <section className="py-12 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto bg-gold/6 border border-gold/25 rounded-[20px] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Paket Kontraktor Lengkap</div>
            <h2 className="font-heading text-navy text-[1.5rem] mb-3">Surety Bond + CAR +<br />Liability = Kontraktor Siap</h2>
            <p className="text-base leading-relaxed text-[#64748B]">Kontraktor profesional tidak hanya butuh jaminan tender — proyek juga perlu dilindungi dari risiko konstruksi, kecelakaan pekerja, dan tuntutan pihak ketiga. Kami layani semua kebutuhan asuransi kontraktor dalam satu pintu.</p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { href:"/asuransi-engineering/contractor-all-risk", icon:"🏗️", title:"Contractor All Risk (CAR)", sub:"Proteksi fisik proyek dari awal hingga selesai" },
              { href:"/asuransi-engineering/erection-all-risk", icon:"⚙️", title:"Erection All Risk (EAR)", sub:"Pemasangan mesin dan struktur baja" },
              { href:"/asuransi-liability/employer-liability", icon:"👷", title:"Employer Liability", sub:"Kecelakaan kerja pekerja dan subkontraktor" },
              { href:"/asuransi-kendaraan/dump-truk-niaga", icon:"🚛", title:"Kendaraan Proyek & Dump Truk", sub:"Alat berat dan kendaraan operasional proyek" },
            ].map(l=>(
              <Link key={l.href} href={l.href} className="bg-white border border-black/8 rounded-xl p-3.5 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
                <span className="text-xl">{l.icon}</span>
                <div><div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">{l.title}</div><div className="text-xs text-[#64748B]">{l.sub}</div></div>
                <span className="ml-auto text-gold text-sm">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Pertanyaan Seputar<br />Surety Bond</h2>
        </div>
        <div className="max-w-[700px] mx-auto">
          {faqItems.map((f,i)=>(
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}<span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-base leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="absolute bottom-4 left-[5vw] text-gold/6 font-heading text-[6rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Tender Besok, Jaminan<br />Bisa Terbit Hari Ini</h2>
          <p className="text-white/60 text-sm max-w-[480px] mx-auto mb-8">Konsultasi gratis surety bond — kami bantu tentukan jenis jaminan, nilai, dan proses penerbitan paling cepat untuk proyek Anda di Yogyakarta.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </SuretyLayout>
  );
}
