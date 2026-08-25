import type { Metadata } from "next";
import Link from "next/link";
import EventLayout from "@/components/event/EventLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Event Motocross & Grasstrack Jogja – Pembalap, Panitia, Penonton",
  description: "Paket asuransi untuk event motocross dan grasstrack di Yogyakarta: Personal Accident pembalap, Public Liability penonton, Personal Accident panitia/marshal, dan Property peralatan. Sesuai konteks regulasi KIS/IMI.",
  keywords: "asuransi event motocross jogja, asuransi grasstrack yogyakarta, asuransi kecelakaan diri pembalap, KIS IMI asuransi, public liability event balap motor, asuransi panitia motocross, asuransi marshal balap",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-event/motocross-grasstrack" },
  openGraph: {
    title: "Asuransi Event Motocross & Grasstrack Jogja – Pembalap, Panitia, Penonton",
    description: "Paket asuransi untuk event motocross dan grasstrack di Yogyakarta: Personal Accident pembalap, Public Liability penonton, Personal Accident panitia/marshal, dan Property peralatan.",
    url: "https://asuransijogja.biz.id/asuransi-event/motocross-grasstrack",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi Event Motocross & Grasstrack Jogja" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransijogja.biz.id" },
        { "@type": "ListItem", position: 2, name: "Asuransi Event", item: "https://asuransijogja.biz.id/asuransi-event" },
        { "@type": "ListItem", position: 3, name: "Motocross & Grasstrack", item: "https://asuransijogja.biz.id/asuransi-event/motocross-grasstrack" },
      ],
    },
    {
      "@type": "Product",
      name: "Asuransi Event Motocross & Grasstrack",
      description: "Paket asuransi untuk event motocross dan grasstrack — Personal Accident pembalap, Public Liability, Personal Accident panitia/marshal, dan Property.",
      brand: { "@type": "Organization", name: "Asuransi Jogja" },
    },
  ],
};

const empatPilar = [
  {
    icon: "🏍️",
    name: "Personal Accident Pembalap",
    sub: "Wajib · Terkait Konteks KIS/IMI",
    desc: "Santunan meninggal dunia, cacat tetap, dan biaya pengobatan bagi setiap pembalap terdaftar. Komponen paling krusial — risiko cedera pembalap jauh lebih tinggi dan lebih sering terjadi dibanding jenis risiko event lain.",
  },
  {
    icon: "🚧",
    name: "Public Liability",
    sub: "Tanggung Jawab Hukum Pihak Ketiga",
    desc: "Menanggung klaim penonton atau masyarakat sekitar sirkuit atas cedera atau kerusakan properti akibat insiden di lintasan — termasuk biaya pembelaan hukum jika terjadi gugatan.",
  },
  {
    icon: "🚩",
    name: "Personal Accident Panitia & Marshal",
    sub: "Sering Terlewat, Padahal Berisiko",
    desc: "Santunan kecelakaan bagi petugas bendera, marshal, dan kru teknis yang bertugas dekat lintasan aktif — kelompok yang risikonya kerap luput dari perhatian penyelenggara.",
  },
  {
    icon: "⛺",
    name: "Property (Opsional)",
    sub: "Peralatan & Perlengkapan Panitia",
    desc: "Ganti rugi atas kerusakan tenda, sound system, timing system, dan barrier lintasan milik panitia — akibat cuaca ekstrem atau insiden di area event.",
  },
];

const skenarioKlaim = [
  { icon: "🏍️", skenario: "Pembalap terjatuh di tikungan tajam saat melibas lintasan berlumpur", akibat: "Cedera patah tulang → santunan biaya pengobatan dan kompensasi kecelakaan" },
  { icon: "🚧", skenario: "Motor keluar lintasan dan menabrak pembatas dekat area penonton", akibat: "Penonton cedera → klaim liability dan potensi gugatan hukum ke panitia" },
  { icon: "🚩", skenario: "Marshal bendera tertabrak saat mengevakuasi pembalap yang jatuh di tikungan", akibat: "Cedera petugas → santunan Personal Accident panitia" },
  { icon: "⛺", skenario: "Tenda posko P3K dan tenda panitia roboh diterjang angin kencang", akibat: "Kerugian peralatan → klaim property" },
  { icon: "⏱️", skenario: "Alat timing/finish line rusak akibat hujan deras saat race berlangsung", akibat: "Kerugian peralatan panitia → klaim property" },
  { icon: "💨", skenario: "Penonton di pinggir lintasan terkena percikan kerikil dari motor yang melintas", akibat: "Klaim biaya medis ringan terhadap penyelenggara" },
];

const sektorTarget = [
  { icon: "🏆", label: "Event Resmi IMI (Kejurda/Kejurnas)", detail: "Kejuaraan daerah maupun nasional di bawah naungan IMI — PA pembalap umumnya terkait KIS, liability & PA panitia sering jadi celah" },
  { icon: "🏁", label: "Grasstrack Komunitas", detail: "Event informal yang diselenggarakan klub atau komunitas motor — biasanya belum memiliki proteksi apa pun" },
  { icon: "🎪", label: "Panitia Penyelenggara Sirkuit Sementara", detail: "Pengelola lahan/sirkuit dadakan yang bertanggung jawab penuh atas keselamatan area selama event berlangsung" },
  { icon: "🏍️", label: "Klub Motor & Latihan Uji Coba Track", detail: "Sesi latihan atau uji coba lintasan di luar jadwal kompetisi resmi, tetap membawa risiko cedera serupa" },
  { icon: "🤝", label: "Sponsor & Brand Pendukung Event", detail: "Pihak yang ingin memastikan namanya tidak terseret masalah hukum jika terjadi insiden di event yang disponsori" },
  { icon: "🏟️", label: "Pengelola Lokasi/Venue", detail: "Pemilik lahan yang menyewakan area untuk event motocross — perlu proteksi tanggung jawab hukum tambahan" },
];

export default function EventMotocrossPage() {
  return (
    <EventLayout breadcrumbs={[
      { label: "Asuransi Event", href: "/asuransi-event" },
      { label: "Motocross & Grasstrack" }
    ]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">🏍️</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-event" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Event</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Motocross & Grasstrack · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Event<br /><em className="not-italic text-gold">Motocross &amp; Grasstrack</em>
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[540px] mb-8">
            Pembalap, marshal, dan penonton berkumpul di satu lintasan dengan risiko cedera yang nyata. Kami bantu panitia menyiapkan proteksi menyeluruh — baik untuk event resmi IMI maupun grasstrack komunitas.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#pilar" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Cakupan →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"4",lbl:"Proteksi dalam 1 Paket"},{num:"KIS-Aware",lbl:"Sesuai Konteks IMI"},{num:"Gratis",lbl:"Analisis Risiko"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/60 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTEKS REGULASI — EEAT credibility block */}
      <section className="py-10 px-[5vw] bg-white border-b border-black/6">
        <div className="max-w-3xl mx-auto bg-cream border border-black/8 rounded-card p-6 flex gap-4 items-start">
          <span className="text-2xl flex-shrink-0">📋</span>
          <div>
            <div className="font-heading text-navy font-bold text-sm mb-1.5">Kenapa Ini Relevan untuk Panitia</div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Dalam konteks regulasi Ikatan Motor Indonesia (IMI), pembalap yang berlaga di event resmi memerlukan Kartu Izin Start (KIS) yang terkait dengan bukti asuransi kecelakaan diri — dan asuransi menjadi salah satu poin yang diperiksa sebelum perlombaan dimulai. Untuk event grasstrack komunitas yang tidak berada di bawah naungan IMI, kewajiban ini tidak otomatis berlaku — sehingga proteksi seringkali belum tersedia sama sekali, padahal risikonya setara.
            </p>
          </div>
        </div>
      </section>

      {/* 4 PILAR PROTEKSI */}
      <section id="pilar" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Paket Proteksi</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Empat Proteksi yang<br />Relevan untuk Event Motocross</h2>
          <p className="text-base text-[#475569] max-w-[520px] mx-auto mt-3">Disusun berdasarkan pihak-pihak yang paling berisiko di lintasan: pembalap, penonton, dan panitia/marshal.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {empatPilar.map(p=>(
            <div key={p.name} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1.05rem]">{p.name}</div>
              <div className="text-gold text-xs font-semibold mb-2">{p.sub}</div>
              <p className="text-base leading-relaxed text-[#475569]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKENARIO KLAIM NYATA */}
      <section id="skenario" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Contoh Kasus</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Risiko Nyata di Setiap<br />Sudut Lintasan</h2>
          <p className="text-base text-[#475569] max-w-[520px] mx-auto mt-3">Motocross dan grasstrack punya kepadatan risiko cedera fisik yang jauh lebih tinggi dibanding jenis event pada umumnya</p>
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
            <strong className="text-gold">Dengan paket ini:</strong> pembalap tertanggung Personal Accident, penonton dan pihak ketiga tertanggung lewat Public Liability, marshal/panitia yang bertugas dekat lintasan tertanggung PA terpisah, dan peralatan panitia terlindungi Property — satu paket menutup seluruh titik risiko di area event.
          </p>
        </div>
      </section>

      {/* SEKTOR TARGET */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Untuk Siapa?</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Penyelenggara Event yang<br />Paling Membutuhkan Paket Ini</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {sektorTarget.map(s=>(
            <div key={s.label} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{s.label}</div>
              <p className="text-base leading-relaxed text-[#475569]">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-event/konser-festival-musik" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🎤 Konser & Festival Musik →</Link>
            <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
            <Link href="/artikel/syarat-dokumen-asuransi-event-musik-jogja" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📝 Syarat & Data Pengajuan Event →</Link>
            <Link href="/asuransi-event" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Event</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Lintasan Aman,<br />Panitia Tenang</h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis untuk menyusun paket asuransi motocross/grasstrack sesuai skala event dan jumlah peserta Anda.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Asuransi Motocross</a>
        </div>
      </section>

      {/* PENJELASAN LENGKAP, STUDI KASUS & ESTIMASI PREMI */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Panduan Lengkap</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.6vw,2.2rem)] text-navy leading-[1.25] mb-5">Asuransi Event Motocross untuk Panitia di Yogyakarta</h2>
          <div className="text-base leading-[1.85] text-[#475569] space-y-4">
            <p>Dibanding jenis event pada umumnya, motocross dan grasstrack punya karakteristik risiko yang khas: kecelakaan bukan kemungkinan langka, melainkan sesuatu yang lazim terjadi di setiap sesi lomba. Pembalap melaju di lintasan tanah dengan tikungan tajam dan lompatan, seringkali berdekatan dengan area penonton yang hanya dibatasi pembatas sederhana.</p>
            <p>Untuk event resmi di bawah naungan IMI, sebagian risiko pembalap sudah tercakup lewat mekanisme KIS. Namun cakupan itu umumnya spesifik untuk pembalap terdaftar — belum tentu menjangkau marshal, panitia, atau penonton. Untuk event grasstrack komunitas yang berjalan tanpa naungan IMI, proteksi ini seringkali tidak ada sama sekali, meski risikonya identik.</p>
            <p>Bagi panitia, menyiapkan paket ini bukan hanya soal kepatuhan — tapi juga perlindungan finansial jika terjadi insiden yang menimbulkan tuntutan biaya pengobatan atau gugatan hukum, yang jika tidak diantisipasi bisa jauh melebihi anggaran penyelenggaraan event itu sendiri.</p>
          </div>

          <div className="bg-white border border-black/8 rounded-card p-6 mt-8">
            <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">📖 Studi Kasus: Event Grasstrack Komunitas di Kawasan Sleman</div>
            <p className="text-sm leading-relaxed text-[#475569]">Sebuah event grasstrack yang diselenggarakan klub motor lokal mengalami insiden ketika seorang pembalap terjatuh dan mengalami cedera saat melintasi tikungan berlumpur. Karena panitia telah menyiapkan Personal Accident untuk seluruh peserta terdaftar, biaya pengobatan pembalap tertanggung tanpa membebani kas panitia — sementara Public Liability tetap siaga menutup potensi klaim dari penonton yang berada di sekitar area insiden.</p>
          </div>

          <div className="mt-8">
            <div className="font-heading text-navy font-bold text-[1.05rem] mb-3">🧮 Estimasi Premi Paket Event Motocross (Ilustrasi, per Event)</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-black/8 rounded-card overflow-hidden bg-white">
                <thead><tr className="bg-navy text-white"><th className="p-3 text-left font-semibold">Skala Event</th><th className="p-3 text-left font-semibold">Peserta & Cakupan</th><th className="p-3 text-left font-semibold">Estimasi Premi/Event</th></tr></thead>
                <tbody>
                  <tr><td className="p-3 border-t border-black/8">Grasstrack komunitas (± 50–100 pembalap, 1 hari)</td><td className="p-3 border-t border-black/8">PA santunan Rp 10 jt/orang</td><td className="p-3 border-t border-black/8">Rp 4.000.000 – Rp 7.500.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Motocross Kejurda (± 150–300 pembalap, 1–2 hari)</td><td className="p-3 border-t border-black/8">PA santunan Rp 25 jt/orang</td><td className="p-3 border-t border-black/8">Rp 15.000.000 – Rp 30.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Motocross Kejurnas (± 300–500 pembalap, 2–3 hari)</td><td className="p-3 border-t border-black/8">PA santunan Rp 50 jt/orang</td><td className="p-3 border-t border-black/8">Rp 40.000.000 – Rp 90.000.000</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#5A6472] mt-2">*Estimasi bersifat indikatif untuk ilustrasi, dihitung dari jumlah peserta terdaftar dan limit santunan per komponen. Bukan tarif tetap acuan OJK — premi final ditentukan penuh melalui underwriting: profil lintasan, jumlah peserta aktual, rencana keamanan/medis, dan nilai pertanggungan yang dipilih. Bukan penawaran resmi.</p>
          </div>

          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-black/8">
            <div className="w-11 h-11 rounded-full bg-navy text-gold flex items-center justify-center font-heading font-bold flex-shrink-0">RM</div>
            <div>
              <div className="text-sm font-semibold text-navy">Ditinjau oleh Rio Mardiansyah</div>
              <div className="text-xs text-[#475569]">Praktisi Asuransi Independen · 8 Tahun Pengalaman · Berbasis di Yogyakarta</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/asuransi-event" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🎪 Semua Asuransi Event →</Link>
            <Link href="/asuransi-event/konser-festival-musik" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🎤 Konser & Festival Musik →</Link>
            <Link href="/asuransi-liability/public-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
          </div>
        </div>
      </section>

    </EventLayout>
  );
}
