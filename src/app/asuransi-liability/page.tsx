import type { Metadata } from "next";
import Link from "next/link";
import LiabilityLayout from "@/components/liability/LiabilityLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Liability Jogja – Tanggung Jawab Hukum Bisnis",
  description:
    "Asuransi liability di Yogyakarta untuk hotel, restoran, tempat wisata, dan industri. Public Liability, Employer Liability, Product Liability, hingga Pencemaran Limbah B3. Konsultasi gratis.",
  keywords:
    "asuransi liability jogja, public liability yogyakarta, asuransi tanggung jawab hukum jogja, employer liability yogyakarta, asuransi limbah b3 jogja, product liability indonesia, ganti rugi pihak ketiga, asuransi tanggung gugat, indemnity insurance jogja, professional indemnity yogyakarta, biaya pengacara asuransi, polis liability bisnis",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-liability" },
  openGraph: {
    title: "Asuransi Liability Jogja – Tanggung Jawab Hukum Bisnis",
    url: "https://asuransijogja.biz.id/asuransi-liability",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi Liability Jogja – Tanggung Jawab Hukum Bisnis" }],
  },
};

const clusters = [
  {
    href: "/asuransi-liability/public-liability",
    icon: "🤝", batik: "◈",
    title: "Public Liability",
    subtitle: "Tamu · Pengunjung · Pihak Ketiga",
    desc: "Perlindungan jika bisnis Anda menyebabkan cedera atau kerugian pada orang lain — tamu hotel, pengunjung toko, pelanggan restoran, dan pihak ketiga lainnya.",
    tags: ["Hotel & Vila", "Restoran & Kafe", "Tempat Wisata", "Pusat Perbelanjaan"],
  },
  {
    href: "/asuransi-liability/employer-liability",
    icon: "👷", batik: "❖",
    title: "Employer Liability",
    subtitle: "Tanggung Jawab ke Karyawan",
    desc: "Proteksi hukum dan finansial jika karyawan mengalami kecelakaan atau penyakit akibat pekerjaan di lingkungan bisnis Anda. Menutup gap di atas limit BPJS Ketenagakerjaan.",
    tags: ["Kontraktor", "Pabrik & Industri", "Hospitality", "Properti Komersial"],
  },
  {
    href: "/asuransi-liability/product-liability",
    icon: "📦", batik: "◉",
    title: "Product Liability",
    subtitle: "Cacat Produk · Keamanan Konsumen",
    desc: "Perlindungan jika produk yang Anda jual atau produksi menyebabkan cedera atau kerugian pada konsumen — dari makanan & minuman, alat elektronik, hingga produk kosmetik.",
    tags: ["Produsen & UMKM", "F&B & Kuliner", "E-Commerce", "Importir Produk"],
  },
  {
    href: "/asuransi-liability/limbah-b3",
    icon: "⚗️", batik: "⬡",
    title: "Liability Limbah B3 & Pencemaran",
    subtitle: "Environmental Liability",
    desc: "Perlindungan terhadap tuntutan hukum akibat pencemaran lingkungan, kebocoran bahan kimia berbahaya, dan kewajiban pemulihan lingkungan.",
    tags: ["Industri Kimia", "Rumah Sakit", "Laundry Industri", "Bengkel & Otomotif"],
  },
];

const mengapaLiability = [
  {
    icon: "⚖️",
    title: "Tuntutan Hukum Meningkat",
    desc: "Kesadaran hukum masyarakat Indonesia semakin tinggi. Kasus gugatan terhadap bisnis atas cedera pihak ketiga terus meningkat setiap tahunnya.",
  },
  {
    icon: "💰",
    title: "Biaya Gugatan Sangat Besar",
    desc: "Satu kasus gugatan serius bisa menelan ratusan juta hingga miliaran rupiah — biaya pengacara, ganti rugi, dan biaya pemulihan.",
  },
  {
    icon: "🏛️",
    title: "Kewajiban Hukum Bisnis",
    desc: "Beberapa sektor seperti konstruksi, rumah sakit, dan pengelola limbah B3 secara hukum diwajibkan memiliki asuransi liability.",
  },
  {
    icon: "🌿",
    title: "Regulasi Lingkungan Ketat",
    desc: "UU Perlindungan Lingkungan Hidup mengatur kewajiban pemulihan lingkungan — biayanya bisa sangat besar tanpa proteksi asuransi.",
  },
];

const sektorJogja = [
  { icon: "🏨", label: "Hotel & Penginapan", desc: "Risiko cedera tamu di kolam renang, restoran, tangga, dan fasilitas umum hotel" },
  { icon: "🍽️", label: "Restoran & F&B", desc: "Keracunan makanan, cedera pengunjung, dan kerusakan properti pelanggan" },
  { icon: "🎭", label: "Tempat Wisata & Event", desc: "Kecelakaan pengunjung di wahana, panggung runtuh, dan insiden keramaian" },
  { icon: "🏗️", label: "Kontraktor & Proyek", desc: "Kerusakan properti tetangga, cedera pekerja, dan polusi debu konstruksi" },
  { icon: "🏥", label: "Klinik & Rumah Sakit", desc: "Medical malpractice, infeksi nosokomial, dan kesalahan tindakan medis" },
  { icon: "🏭", label: "Pabrik & Industri", desc: "Pencemaran limbah, kecelakaan pekerja, dan dampak operasional ke komunitas sekitar" },
];

// RISK CALCULATOR DATA
const risikoMatrix = [
  { sektor: "Hotel berbintang (kolam renang + restoran)", skor: 9, rekomendasi: "Public Liability + Employer Liability" },
  { sektor: "Kontraktor proyek konstruksi", skor: 10, rekomendasi: "Employer Liability + Public Liability" },
  { sektor: "Pabrik dengan limbah kimia", skor: 10, rekomendasi: "Employer Liability + Liability Limbah B3" },
  { sektor: "Restoran / Kafe", skor: 7, rekomendasi: "Public Liability + Product Liability" },
  { sektor: "Toko Retail / E-Commerce", skor: 6, rekomendasi: "Public Liability + Product Liability" },
  { sektor: "Klinik / Apotek", skor: 8, rekomendasi: "Public Liability + Product Liability" },
];

const faqItems = [
  {
    q: "Apa itu asuransi liability dan apa bedanya dengan asuransi properti?",
    a: "Asuransi properti melindungi aset fisik Anda (bangunan, isi). Asuransi liability melindungi Anda dari kewajiban hukum — jika bisnis Anda menyebabkan kerugian atau cedera pada pihak lain. Keduanya berbeda dan saling melengkapi.",
  },
  {
    q: "Apakah hotel di Jogja wajib punya asuransi liability?",
    a: "Meskipun belum ada regulasi nasional yang mewajibkan semua hotel, banyak hotel berbintang menjadikannya syarat standar operasional. Hotel dengan fasilitas kolam renang, spa, dan restoran sangat disarankan memiliki public liability.",
  },
  {
    q: "Apa yang dimaksud dengan 'pihak ketiga' dalam konteks liability?",
    a: "Pihak ketiga adalah siapa pun di luar pemegang polis dan perusahaan asuransi — bisa tamu hotel, pengunjung toko, kontraktor sub yang cedera di lokasi Anda, atau warga sekitar yang terdampak aktivitas bisnis Anda.",
  },
  {
    q: "Apakah asuransi liability mencakup biaya pengacara?",
    a: "Ya, sebagian besar polis liability mencakup biaya pembelaan hukum (legal defense cost) selain ganti rugi kepada pihak ketiga. Beberapa polis mencakupnya di dalam limit, sebagian lagi menyediakan sebagai tambahan di luar limit.",
  },
  {
    q: "Berapa limit pertanggungan yang ideal untuk bisnis saya?",
    a: "Limit pertanggungan bergantung pada omset bisnis, jumlah pengunjung/karyawan, dan tingkat risiko operasional. Sebagai panduan umum: bisnis dengan omset Rp 1–5 miliar per tahun umumnya memerlukan limit Rp 1–5 miliar. Konsultasikan kebutuhan spesifik Anda kepada kami secara gratis.",
  },
  {
    q: "Apakah asuransi liability menanggung kejadian yang disengaja?",
    a: "Tidak. Asuransi liability hanya menanggung kerugian yang bersifat tidak disengaja (accidental) atau akibat kelalaian (negligence). Tindakan yang dilakukan dengan sengaja atau disengaja merupakan pengecualian standar dalam semua polis liability.",
  },
  {
    q: "Apa beda public liability dan employer liability?",
    a: "Public liability melindungi bisnis Anda dari tuntutan pihak ketiga seperti tamu, pengunjung, atau warga umum. Employer liability melindungi dari tuntutan karyawan Anda sendiri yang mengalami kecelakaan atau penyakit akibat kerja. Banyak bisnis membutuhkan keduanya.",
  },
  {
    q: "Apakah UMKM perlu asuransi liability?",
    a: "Ya, justru UMKM sangat rentan karena tidak memiliki cadangan finansial besar seperti korporasi. Satu gugatan serius bisa mengancam kelangsungan usaha. Polis liability untuk UMKM biasanya lebih terjangkau dari yang dibayangkan — mulai dari beberapa juta rupiah per tahun.",
  },
  {
    q: "Bagaimana cara mengajukan klaim asuransi liability?",
    a: "Segera dokumentasikan insiden (foto, saksi, laporan medis/kepolisian jika ada), laporkan ke kami via WhatsApp dalam 3×24 jam, dan hindari mengakui kesalahan secara sepihak sebelum proses klaim berjalan. Kami akan mendampingi seluruh proses dari awal hingga pembayaran.",
  },
  {
    q: "Apakah ada masa tunggu (waiting period) dalam asuransi liability?",
    a: "Umumnya tidak ada masa tunggu — perlindungan aktif segera setelah polis terbit dan premi dibayarkan. Namun untuk polis environmental liability (limbah B3), beberapa penanggung menerapkan retroactive date yang perlu diperhatikan.",
  },
];

export default function AsuransiLiabilityPage() {
  return (
    <LiabilityLayout breadcrumbs={[{ label: "Asuransi Liability" }]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)" }} />
        <div className="absolute top-8 right-[5vw] text-gold/6 font-heading text-[8rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>Asuransi Liability · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,4vw,3.8rem)] text-white leading-[1.15] mb-5">
            Lindungi Bisnis Anda<br /><em className="not-italic text-gold">dari Tuntutan Hukum</em><br />Pihak Ketiga
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[540px] mb-8">
            Yogyakarta dikunjungi jutaan wisatawan setiap tahun. Hotel, restoran, tempat wisata, dan bisnis apa pun yang berinteraksi dengan publik menanggung risiko <strong className="text-gold2">tanggung gugat</strong> yang nyata — satu insiden bisa berujung gugatan miliaran rupiah.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 hover:-translate-y-px transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#cluster" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Produk →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{ num: "4", lbl: "Jenis Liability" }, { num: "B2B", lbl: "Fokus Bisnis Jogja" }, { num: "Gratis", lbl: "Analisis Risiko" }].map(s => (
              <div key={s.lbl}><div className="font-heading text-gold text-xl font-bold">{s.num}</div><div className="text-white/60 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA LIABILITY */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Penting?</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy">Satu Tuntutan Hukum<br />Bisa Menghancurkan Bisnis</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {mengapaLiability.map(m => (
            <div key={m.title} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{m.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{m.title}</div>
              <p className="text-base leading-relaxed text-[#475569]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLUSTER CARDS — 4 produk */}
      <section id="cluster" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Liability</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy">Pilih Proteksi<br />Sesuai Profil Bisnis Anda</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {clusters.map(c => (
            <Link key={c.href} href={c.href} className="no-underline group">
              <div className="border border-black/8 rounded-card p-7 h-full hover:shadow-[0_12px_40px_rgba(13,33,55,0.1)] hover:-translate-y-1.5 hover:border-gold/30 transition-all relative overflow-hidden bg-white">
                <div className="absolute top-4 right-5 text-gold/10 font-heading text-[3.5rem] leading-none select-none">{c.batik}</div>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-[2rem] mb-3">{c.icon}</div>
                <div className="font-heading text-navy font-bold text-[1.15rem] mb-1">{c.title}</div>
                <div className="text-gold text-xs font-semibold mb-3">{c.subtitle}</div>
                <p className="text-sm leading-relaxed text-[#475569] mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.tags.map(t => <span key={t} className="bg-gold/8 border border-gold/15 text-navy2 text-xs px-2.5 py-1 rounded-full font-medium">{t}</span>)}
                </div>
                <div className="text-gold text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Pelajari lebih lanjut →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* RISK MATRIX — Kalkulator Risiko Sederhana */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Panduan Cepat</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Seberapa Tinggi Risiko<br />Bisnis Anda?</h2>
          <p className="text-base text-[#475569] max-w-[500px] mx-auto mt-3">Lihat peta risiko berdasarkan sektor — dan rekomendasi produk liability yang paling sesuai</p>
        </div>
        <div className="max-w-3xl mx-auto overflow-hidden rounded-card border border-black/8 bg-white">
          <div className="grid grid-cols-[1fr_80px_1fr] text-xs font-bold tracking-widest uppercase text-[#5A6472] border-b border-black/6 px-5 py-3 bg-cream">
            <span>Sektor Bisnis</span><span className="text-center">Risiko</span><span>Rekomendasi Produk</span>
          </div>
          {risikoMatrix.map((r, i) => (
            <div key={i} className={`grid grid-cols-[1fr_80px_1fr] items-center px-5 py-4 border-b border-black/4 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}>
              <span className="text-sm font-medium text-navy">{r.sektor}</span>
              <div className="flex justify-center">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${r.skor >= 9 ? "bg-red-100 text-red-700" : r.skor >= 7 ? "bg-orange-100 text-orange-700" : "bg-yellow-100 text-yellow-700"}`}>
                  {r.skor >= 9 ? "🔴 Kritis" : r.skor >= 7 ? "🟠 Tinggi" : "🟡 Sedang"}
                </span>
              </div>
              <span className="text-xs text-[#475569] leading-snug">{r.rekomendasi}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-[#475569] mb-4">Tidak yakin sektor Anda masuk kategori mana? Hubungi kami untuk analisis risiko gratis.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline inline-block">💬 Analisis Risiko Gratis</a>
        </div>
      </section>

      {/* SEKTOR JOGJA */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Sektor di Yogyakarta</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy">Siapa yang Paling<br />Butuh Asuransi Liability?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {sektorJogja.map(s => (
            <div key={s.label} className="bg-cream rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{s.label}</div>
              <p className="text-base leading-relaxed text-[#475569]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ARTIKEL EDUKASI — Internal Link ke Artikel */}
      <section className="py-12 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-4">Pelajari Lebih Dalam</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/artikel/contoh-kasus-gugatan-liability-bisnis" className="bg-white border border-black/8 rounded-xl p-5 no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
              <div className="text-2xl mb-2">⚖️</div>
              <div className="font-heading text-navy font-semibold text-sm group-hover:text-gold transition-colors mb-1">Contoh Nyata Gugatan Liability Bisnis di Indonesia</div>
              <p className="text-xs text-[#475569] leading-relaxed">Kasus hotel, restoran, dan kontraktor yang pernah digugat — dan bagaimana asuransi menutup kerugiannya.</p>
            </Link>
            <Link href="/artikel/pentingnya-asuransi-dunia-usaha-jogja" className="bg-white border border-black/8 rounded-xl p-5 no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
              <div className="text-2xl mb-2">🏢</div>
              <div className="font-heading text-navy font-semibold text-sm group-hover:text-gold transition-colors mb-1">Pentingnya Asuransi untuk Dunia Usaha di Jogja</div>
              <p className="text-xs text-[#475569] leading-relaxed">Panduan lengkap proteksi bisnis dari risiko hukum, operasional, dan aset fisik di Yogyakarta.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* KAITAN PROPERTI */}
      <section className="py-12 px-[5vw] bg-white">
        <div className="max-w-4xl mx-auto bg-gold/6 border border-gold/25 rounded-[20px] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Sinergi Produk</div>
            <h2 className="font-heading text-navy text-[1.5rem] mb-3">Liability + Properti =<br />Proteksi Bisnis yang Lengkap</h2>
            <p className="text-base leading-relaxed text-[#475569]">Asuransi properti melindungi bangunan Anda. Asuransi liability melindungi bisnis Anda dari tuntutan pihak luar. Keduanya bekerja bersama untuk perlindungan total.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/asuransi-properti/hotel-vila" className="bg-white border border-black/8 rounded-xl p-4 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
              <span className="text-2xl">🏨</span>
              <div><div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">Asuransi Hotel & Vila</div><div className="text-xs text-[#475569]">Proteksi properti wisata Anda</div></div>
              <span className="ml-auto text-gold text-sm">→</span>
            </Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-white border border-black/8 rounded-xl p-4 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
              <span className="text-2xl">🏢</span>
              <div><div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">Property All Risk (PAR)</div><div className="text-xs text-[#475569]">Perlindungan fisik bangunan komersial</div></div>
              <span className="ml-auto text-gold text-sm">→</span>
            </Link>
            <Link href="/asuransi-properti" className="bg-white border border-black/8 rounded-xl p-4 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
              <span className="text-2xl">🏠</span>
              <div><div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">Semua Asuransi Properti</div><div className="text-xs text-[#475569]">Kebakaran, banjir, gempa bumi</div></div>
              <span className="ml-auto text-gold text-sm">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — 10 pertanyaan, lebih dalam */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy">Pertanyaan Seputar<br />Asuransi Liability</h2>
        </div>
        <div className="max-w-[700px] mx-auto">
          {faqItems.map((f, i) => (
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}<span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-base leading-[1.78] text-[#475569] pb-4">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-[#475569] mb-3">Masih ada pertanyaan? Konsultasikan langsung dengan kami — gratis.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline inline-block">💬 Tanya via WhatsApp</a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
        <div className="absolute bottom-4 left-[5vw] text-gold/6 font-heading text-[6rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Bisnis Terlindungi,<br />Tamu & Karyawan Terjamin</h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis analisis risiko liability bisnis Anda di Yogyakarta — bersama praktisi asuransi berpengalaman 8 tahun.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </LiabilityLayout>
  );
}
