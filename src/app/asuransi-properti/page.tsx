import type { Metadata } from "next";
import Link from "next/link";
import PropertyLayout from "@/components/properti/PropertyLayout";
import KalkulatorProperti from "@/components/properti/KalkulatorProperti";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Properti Jogja – Perlindungan Rumah, Ruko & Gedung | Asuransi Jogja",
  description: "Konsultan asuransi properti di Yogyakarta. Lindungi rumah, kos, ruko, dan aset properti Anda dari kebakaran, banjir, gempa, hingga risiko kejahatan. Konsultasi gratis.",
  keywords: "asuransi properti jogja, asuransi kebakaran yogyakarta, asuransi rumah jogja, property all risk jogja, asuransi kos yogyakarta",
  openGraph: {
    title: "Asuransi Properti Jogja – Lindungi Aset Anda",
    description: "Solusi perlindungan properti lengkap di Yogyakarta. Kebakaran, PAR, banjir, gempa, hingga risiko kejahatan.",
    url: "https://asuransijogja.com/asuransi-properti",
  },
};

const clusters = [
  {
    href: "/asuransi-properti/kebakaran",
    icon: "🔥",
    batik: "✦",
    title: "Asuransi Kebakaran",
    subtitle: "Rumah · Kos · Ruko",
    desc: "Perlindungan dari kebakaran, petir, ledakan, dan asap untuk hunian dan bangunan komersial Anda di Yogyakarta.",
    tags: ["Rumah Tinggal", "Kos-kosan Jogja", "Ruko & Toko"],
  },
  {
    href: "/asuransi-properti/property-all-risk",
    icon: "🏢",
    batik: "◆",
    title: "Property All Risk",
    subtitle: "PAR – Proteksi Komprehensif",
    desc: "Perlindungan menyeluruh untuk properti komersial dan industri dari semua risiko fisik yang tidak dikecualikan.",
    tags: ["Gedung Kantor", "Hotel & Vila", "Pabrik & Gudang"],
  },
  {
    href: "/asuransi-properti/hotel-vila",
    icon: "🏨",
    batik: "❁",
    title: "Hotel & Vila Wisata",
    subtitle: "Properti Pariwisata Yogyakarta",
    desc: "Solusi asuransi lengkap untuk hotel, vila, guest house, dan homestay di destinasi wisata Yogyakarta.",
    tags: ["Hotel Bintang", "Vila & Resort", "Guest House", "Homestay"],
  },
  {
    href: "/asuransi-properti/banjir-gempa",
    icon: "🌋",
    batik: "❋",
    title: "Perluasan Banjir & Gempa",
    subtitle: "Risiko Katastrofe Yogyakarta",
    desc: "Jaminan tambahan kritis untuk properti di Yogyakarta dari banjir, gempa bumi, dan letusan Gunung Merapi.",
    tags: ["Banjir & Bandang", "Gempa Bumi", "Letusan Merapi"],
  },
];

const whyItems = [
  { icon: "🏛️", title: "Paham Risiko Lokal Jogja", desc: "10+ tahun melayani klien di Yogyakarta. Kami memahami betul risiko banjir Kali Code, gempa, dan kondisi bangunan lokal." },
  { icon: "🎯", title: "Analisis Kebutuhan Tepat", desc: "Bukan sekadar jual polis — kami analisis nilai bangunan, risiko, dan kebutuhan Anda sebelum merekomendasikan produk." },
  { icon: "🤝", title: "Pendampingan Klaim Penuh", desc: "Dari pengajuan dokumen hingga dana cair, kami dampingi tanpa biaya tambahan. Berpihak 100% pada kepentingan Anda." },
  { icon: "📋", title: "Produk dari Asuransi Terpercaya", desc: "Bermitra dengan perusahaan asuransi kerugian berlisensi OJK. Polis resmi, klaim terjamin, proses transparan." },
];

const faqItems = [
  { q: "Apa saja yang dijamin asuransi properti?", a: "Tergantung produk yang dipilih. Asuransi kebakaran menjamin risiko FLEXAS (Fire, Lightning, Explosion, Aircraft impact, Smoke). Property All Risk menjamin hampir semua risiko fisik kecuali yang dikecualikan. Perluasan tersedia untuk banjir, gempa, angin topan, dan risiko lainnya." },
  { q: "Apakah bangunan kos dan ruko bisa diasuransikan?", a: "Ya. Bangunan kos, ruko, toko, gudang, kantor, maupun properti komersial lainnya dapat diasuransikan. Premi dihitung berdasarkan jenis konstruksi, luas bangunan, nilai properti, dan risiko lokasi." },
  { q: "Apakah isi bangunan (perabot, elektronik) ikut terlindungi?", a: "Bisa, dengan menambahkan jaminan isi bangunan (contents) dalam polis Anda. Nilai pertanggungan isi ditetapkan terpisah dari nilai bangunan." },
  { q: "Berapa lama proses penerbitan polis properti?", a: "Properti standar seperti rumah tinggal biasanya 1–2 hari kerja setelah dokumen lengkap. Untuk properti komersial atau PAR, umumnya 3–5 hari kerja setelah survei." },
];

export default function AsuransiPropertiPage() {
  return (
    <PropertyLayout breadcrumbs={[{ label: "Asuransi Properti" }]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)"}} />
        {/* Ornamen batik sudut */}
        <div className="absolute top-8 right-[5vw] text-gold/8 font-heading text-[8rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>
            Asuransi Properti · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,4vw,3.8rem)] text-white leading-[1.15] mb-5">
            Lindungi Properti Anda<br />
            <em className="not-italic text-gold">dari Segala Risiko</em><br />
            di Yogyakarta
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Rumah, kos, ruko, hingga gedung komersial — semua aset properti Anda layak mendapat perlindungan yang tepat. Konsultan kami membantu memilih produk terbaik sesuai risiko nyata di lokasi Anda.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 hover:-translate-y-px transition-all no-underline">
              💬 Konsultasi Gratis
            </a>
            <a href="#kalkulator" className="border border-white/25 text-white px-7 py-3 rounded-lg font-medium text-sm hover:border-gold/60 transition-all no-underline">
              🧮 Hitung Estimasi Premi
            </a>
          </div>
        </div>
      </section>

      {/* KENAPA ASURANSI PROPERTI PENTING */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Penting?</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22] mb-6">
            Yogyakarta: Kota Budaya<br />dengan Risiko yang Nyata
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🌋", label: "Zona Aktif Merapi", desc: "Yogyakarta berada di kawasan rawan bencana vulkanik dan gempa bumi. Perlindungan properti dari risiko geologi adalah keharusan, bukan pilihan." },
              { icon: "🌊", label: "Rawan Banjir", desc: "Beberapa kawasan seperti bantaran Kali Code dan Kali Opak rentan banjir saat musim hujan deras. Perluasan jaminan banjir sangat direkomendasikan." },
              { icon: "🔥", label: "Risiko Kebakaran", desc: "Bangunan padat, instalasi listrik lama, dan aktivitas usaha meningkatkan risiko kebakaran. Mayoritas kerugian properti di Indonesia disebabkan kebakaran." },
            ].map(r => (
              <div key={r.label} className="bg-white rounded-card p-6 border border-black/6">
                <div className="text-3xl mb-3">{r.icon}</div>
                <div className="font-heading text-navy font-bold text-[1.1rem] mb-2">{r.label}</div>
                <p className="text-sm leading-relaxed text-[#64748B]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLUSTER CARDS */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Asuransi Properti</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
            Pilih Perlindungan<br />yang Tepat untuk Anda
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clusters.map(c => (
            <Link key={c.href} href={c.href} className="no-underline group">
              <div className="border border-black/8 rounded-card p-7 h-full hover:shadow-[0_12px_40px_rgba(13,33,55,0.1)] hover:-translate-y-1.5 hover:border-gold/30 transition-all relative overflow-hidden bg-white">
                <div className="absolute top-4 right-5 text-gold/10 font-heading text-[3.5rem] leading-none select-none">{c.batik}</div>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-[2rem] mb-3">{c.icon}</div>
                <div className="font-heading text-navy font-bold text-[1.15rem] mb-1">{c.title}</div>
                <div className="text-gold text-xs font-semibold mb-3">{c.subtitle}</div>
                <p className="text-sm leading-relaxed text-[#64748B] mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map(t => (
                    <span key={t} className="bg-gold/8 border border-gold/15 text-navy2 text-xs px-2.5 py-1 rounded-full font-medium">{t}</span>
                  ))}
                </div>
                <div className="mt-4 text-gold text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Pelajari lebih lanjut →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* KALKULATOR */}
      <KalkulatorProperti />

      {/* WHY CHOOSE US */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Keunggulan Kami</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
            Mengapa Pilih<br />Asuransi Jogja?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {whyItems.map(w => (
            <div key={w.title} className="bg-white rounded-card p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all border border-black/5">
              <div className="text-3xl mb-3">{w.icon}</div>
              <div className="font-heading text-navy font-bold text-[1.05rem] mb-2">{w.title}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Pertanyaan Seputar<br />Asuransi Properti</h2>
        </div>
        <div className="max-w-[700px] mx-auto">
          {faqItems.map((f, i) => (
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}
                <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-sm leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* KAITAN LIABILITY */}
      <section className="py-12 px-[5vw] bg-white">
        <div className="max-w-4xl mx-auto bg-gold/6 border border-gold/25 rounded-[20px] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Sinergi Produk</div>
            <h2 className="font-heading text-navy text-[1.5rem] mb-3">Properti + Liability =<br />Proteksi Bisnis Lengkap</h2>
            <p className="text-sm leading-relaxed text-[#64748B]">Asuransi properti melindungi bangunan dari kerusakan fisik. Asuransi liability melindungi dari tuntutan hukum tamu, karyawan, dan pihak ketiga. Keduanya saling melengkapi untuk pemilik hotel, ruko, dan properti komersial.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/asuransi-liability/public-liability" className="bg-white border border-black/8 rounded-xl p-4 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
              <span className="text-2xl">🤝</span>
              <div><div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">Public Liability</div><div className="text-xs text-[#64748B]">Perlindungan jika tamu cedera di properti Anda</div></div>
              <span className="ml-auto text-gold text-sm">→</span>
            </Link>
            <Link href="/asuransi-properti/hotel-vila" className="bg-white border border-black/8 rounded-xl p-4 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
              <span className="text-2xl">🏨</span>
              <div><div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">Asuransi Hotel & Vila Wisata</div><div className="text-xs text-[#64748B]">Solusi khusus properti pariwisata Yogyakarta</div></div>
              <span className="ml-auto text-gold text-sm">→</span>
            </Link>
            <Link href="/asuransi-liability" className="bg-white border border-black/8 rounded-xl p-4 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
              <span className="text-2xl">⚖️</span>
              <div><div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">Semua Asuransi Liability</div><div className="text-xs text-[#64748B]">Public, Employer, dan Environmental Liability</div></div>
              <span className="ml-auto text-gold text-sm">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="absolute bottom-4 left-[5vw] text-gold/6 font-heading text-[6rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-3">Mulai Sekarang</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Properti Anda Terlalu Berharga<br />untuk Tidak Dilindungi
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-[480px] mx-auto mb-8">
            Konsultasi gratis, analisis risiko lokasi, dan penawaran dari perusahaan asuransi terpercaya — semua tanpa biaya.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Chat WhatsApp Sekarang
            </a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all">
              ✉️ Kirim Email
            </a>
          </div>
        </div>
      </section>

    </PropertyLayout>
  );
}
