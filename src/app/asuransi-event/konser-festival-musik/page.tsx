import type { Metadata } from "next";
import Link from "next/link";
import EventLayout from "@/components/event/EventLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Konser & Festival Musik Jogja – Paket 4-in-1",
  description: "Paket asuransi lengkap untuk konser dan festival musik di Yogyakarta: Public Liability, Event Cancellation, Personal Accident, dan Property All Risk — sesuai standar rider artis internasional.",
  keywords: "asuransi konser jogja, asuransi festival musik yogyakarta, event cancellation insurance indonesia, asuransi kecelakaan diri artis, asuransi alat musik dan peralatan event, public liability event musik, asuransi promotor konser, artist rider insurance indonesia",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-event/konser-festival-musik" },
  openGraph: {
    title: "Asuransi Konser & Festival Musik Jogja – Paket 4-in-1",
    description: "Paket asuransi lengkap untuk konser dan festival musik di Yogyakarta: Public Liability, Event Cancellation, Personal Accident, dan Property All Risk — sesuai standar rider artis internasional.",
    url: "https://asuransijogja.biz.id/asuransi-event/konser-festival-musik",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi Konser & Festival Musik Jogja – Paket 4-in-1" }],
  },
};

const empatPilar = [
  {
    icon: "🤝",
    name: "Public Liability",
    sub: "Tanggung Jawab Hukum Pihak Ketiga",
    desc: "Menanggung klaim penonton, pengunjung, atau masyarakat sekitar venue atas cedera badan atau kerusakan properti yang timbul akibat penyelenggaraan event — termasuk biaya pembelaan hukum.",
  },
  {
    icon: "🎫",
    name: "Event Cancellation",
    sub: "Asuransi Pembatalan Acara",
    desc: "Mengganti kerugian finansial (biaya artis, sewa venue, produksi, promosi) jika event batal, ditunda, atau dipersingkat akibat sebab di luar kendali — cuaca ekstrem, bencana alam, sakit/kecelakaan artis utama, hingga force majeure.",
  },
  {
    icon: "🩹",
    name: "Personal Accident",
    sub: "Asuransi Kecelakaan Diri",
    desc: "Santunan meninggal dunia, cacat tetap, dan biaya pengobatan bagi artis serta seluruh personel pendamping (kru teknis, manajemen, tim produksi) akibat kecelakaan selama periode event.",
  },
  {
    icon: "🎸",
    name: "Property All Risk",
    sub: "Alat Musik, Peralatan & Barang Bawaan",
    desc: "Ganti rugi atas kehilangan, pencurian, atau kerusakan alat musik, peralatan teknis (sound, lighting, rigging), koper/bagasi, merchandise, dan barang pribadi artis serta kru selama event berlangsung.",
  },
];

const skenarioKlaim = [
  { icon: "⛈️", skenario: "Panggung utama rusak diterjang angin kencang menjelang show", akibat: "Event dibatalkan mendadak → kerugian biaya artis, venue, dan produksi yang sudah dikeluarkan" },
  { icon: "🌋", skenario: "Aktivitas vulkanik menyebabkan penutupan ruang udara", akibat: "Artis internasional gagal terbang ke Yogyakarta → event batal H-1" },
  { icon: "🎸", skenario: "Gitar dan keyboard vintage rusak saat proses bongkar-muat panggung", akibat: "Kerugian penggantian alat musik senilai puluhan hingga ratusan juta rupiah" },
  { icon: "🏗️", skenario: "Kru rigging terjatuh saat memasang instalasi lighting di atas panggung", akibat: "Cedera serius → santunan pengobatan dan kompensasi kecelakaan kerja" },
  { icon: "🎒", skenario: "Koper berisi kostum panggung dan merchandise hilang dari area backstage", akibat: "Kerugian properti + potensi keterlambatan jadwal tampil" },
  { icon: "🤕", skenario: "Penonton pingsan akibat desak-desakan di area festival", akibat: "Klaim biaya medis dan potensi gugatan hukum terhadap penyelenggara" },
];

const sektorTarget = [
  { icon: "🌏", label: "Festival Musik Internasional", detail: "Event multi-hari dengan line-up artis mancanegara — umumnya mewajibkan bukti asuransi sesuai rider kontrak" },
  { icon: "🎤", label: "Konser Tunggal Artis Besar", detail: "Konser artis nasional maupun luar negeri dengan kapasitas penonton menengah hingga besar" },
  { icon: "🎪", label: "Festival Musik Lokal & Komunitas", detail: "Event musik indie, jazz, atau budaya berskala menengah yang tetap membawa risiko liability dan properti" },
  { icon: "🏢", label: "Event Korporat dengan Hiburan Musik", detail: "Gala dinner, product launch, atau acara perusahaan yang menghadirkan performer profesional" },
  { icon: "💍", label: "Wedding dengan Performer Ternama", detail: "Pernikahan yang mengundang musisi atau band profesional dengan nilai kontrak dan peralatan tinggi" },
  { icon: "🏟️", label: "Pengelola Venue & Promotor", detail: "Gedung pertunjukan, stadion, dan promotor yang rutin menyelenggarakan event musik" },
];

export default function EventKonserMusikPage() {
  return (
    <EventLayout breadcrumbs={[
      { label: "Asuransi Event", href: "/asuransi-event" },
      { label: "Konser & Festival Musik" }
    ]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Beranda\", \"item\": \"https://asuransijogja.biz.id\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Asuransi Event\", \"item\": \"https://asuransijogja.biz.id/asuransi-event\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Konser & Festival Musik\", \"item\": \"https://asuransijogja.biz.id/asuransi-event/konser-festival-musik\"}]}" }}
      />

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">🎪</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-event" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Event</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Paket 4-in-1 · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Konser<br />&amp; <em className="not-italic text-gold">Festival Musik</em><br />di Yogyakarta
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[540px] mb-8">
            Kontrak artis internasional umumnya mensyaratkan bukti proteksi lengkap sebelum naik panggung — Public Liability, Event Cancellation, Personal Accident, dan Property All Risk. Kami bantu promotor dan EO di Yogyakarta memenuhi keempatnya dalam satu paket.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#pilar" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Cakupan →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"4",lbl:"Proteksi dalam 1 Paket"},{num:"Rider-Ready",lbl:"Sesuai Standar Artis"},{num:"Gratis",lbl:"Analisis Risiko"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/60 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 PILAR PROTEKSI */}
      <section id="pilar" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Paket 4-in-1</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Empat Proteksi yang<br />Wajib Ada di Setiap Event Musik</h2>
          <p className="text-base text-[#475569] max-w-[520px] mx-auto mt-3">Susunan ini mengikuti pola persyaratan asuransi yang lazim tercantum dalam rider kontrak artis untuk festival musik internasional.</p>
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
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Risiko Nyata di Setiap<br />Tahap Penyelenggaraan Event</h2>
          <p className="text-base text-[#475569] max-w-[520px] mx-auto mt-3">Yogyakarta berada di dekat kawasan vulkanik aktif dan menjadi tuan rumah berbagai festival musik skala besar — dua faktor yang membuat proteksi menyeluruh semakin relevan</p>
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
            <strong className="text-gold">Dengan paket 4-in-1:</strong> setiap skenario di atas masuk dalam salah satu dari empat jaminan — liability untuk klaim pihak ketiga, cancellation untuk kerugian pembatalan, personal accident untuk cedera personel, dan property untuk alat musik serta peralatan. Kas produksi Anda tetap aman.
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
            <Link href="/artikel/syarat-dokumen-asuransi-event-musik-jogja" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📝 Syarat & Data yang Dibutuhkan →</Link>
            <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏢 Property All Risk →</Link>
            <Link href="/asuransi-event" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Event</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Event Musik Anda Layak<br />Tampil Tanpa Cemas</h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis untuk menyusun paket asuransi event sesuai skala acara dan persyaratan rider artis Anda.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Asuransi Event</a>
        </div>
      </section>

      {/* PENJELASAN LENGKAP, STUDI KASUS & ESTIMASI PREMI */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Panduan Lengkap</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.6vw,2.2rem)] text-navy leading-[1.25] mb-5">Asuransi Konser & Festival Musik untuk Promotor di Yogyakarta</h2>
          <div className="text-base leading-[1.85] text-[#475569] space-y-4">
            <p>Menyelenggarakan konser atau festival musik melibatkan banyak pihak dalam waktu singkat — artis, kru teknis, ribuan penonton, dan peralatan bernilai tinggi — semuanya berkumpul di satu lokasi selama beberapa hari. Kepadatan risiko ini jauh berbeda dari bisnis yang beroperasi rutin sepanjang tahun.</p>
            <p>Karena itu, kontrak artis untuk festival musik berskala internasional hampir selalu mencantumkan klausul kewajiban asuransi bagi promotor — mencakup keempat jenis proteksi di atas dalam jumlah yang lazim untuk event sejenis. Tanpa bukti polis yang sesuai, negosiasi kontrak dengan agensi artis internasional bisa tertunda atau bahkan gagal.</p>
            <p>Yogyakarta secara khusus memiliki dua karakteristik yang membuat paket ini relevan: statusnya sebagai kota tujuan festival musik yang aktif, dan lokasinya yang berdekatan dengan kawasan gunung berapi aktif — faktor yang perlu diperhitungkan khususnya dalam komponen Event Cancellation.</p>
          </div>

          <div className="bg-white border border-black/8 rounded-card p-6 mt-8">
            <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">📖 Studi Kasus: Festival Musik Multi-Hari di Kawasan Sleman</div>
            <p className="text-sm leading-relaxed text-[#475569]">Sebuah festival musik dua hari dengan line-up artis nasional dan mancanegara mengalami penundaan hari pertama akibat cuaca ekstrem yang merusak sebagian struktur panggung. Karena promotor telah memiliki Event Cancellation dan Property All Risk, biaya perbaikan panggung dan sebagian kerugian pendapatan tiket hari pertama tertutup polis — sementara Public Liability tetap siaga menutup potensi klaim penonton yang berada di area saat insiden terjadi.</p>
          </div>

          <div className="mt-8">
            <div className="font-heading text-navy font-bold text-[1.05rem] mb-3">🧮 Estimasi Premi Paket Event Musik (Ilustrasi, per Event)</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-black/8 rounded-card overflow-hidden bg-white">
                <thead><tr className="bg-navy text-white"><th className="p-3 text-left font-semibold">Skala Event</th><th className="p-3 text-left font-semibold">Cakupan</th><th className="p-3 text-left font-semibold">Estimasi Premi/Event</th></tr></thead>
                <tbody>
                  <tr><td className="p-3 border-t border-black/8">Event korporat / wedding dengan performer (± 2.000–5.000 penonton, 1 hari)</td><td className="p-3 border-t border-black/8">Liability Rp 1–2 M</td><td className="p-3 border-t border-black/8">Rp 19.000.000 – Rp 39.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Festival musik skala menengah (± 5.000 penonton, 1–2 hari)</td><td className="p-3 border-t border-black/8">Liability Rp 2 M</td><td className="p-3 border-t border-black/8">Rp 29.000.000 – Rp 52.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Festival musik besar / internasional (± 10.000–20.000 penonton, 2–3 hari)</td><td className="p-3 border-t border-black/8">Liability Rp 5–10 M</td><td className="p-3 border-t border-black/8">Rp 105.000.000 – Rp 235.000.000</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#5A6472] mt-2">*Estimasi bersifat indikatif untuk ilustrasi. Berbeda dari asuransi kendaraan, event insurance tidak memiliki tarif tetap acuan OJK — premi final ditentukan penuh melalui underwriting: profil risiko venue, riwayat pembatalan/reputasi artis, rencana keamanan, musim, dan nilai pertanggungan aktual. Bukan penawaran resmi.</p>
          </div>

          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-black/8">
            <div className="w-11 h-11 rounded-full bg-navy text-gold flex items-center justify-center font-heading font-bold flex-shrink-0">RM</div>
            <div>
              <div className="text-sm font-semibold text-navy">Ditinjau oleh Rio Mardiansyah</div>
              <div className="text-xs text-[#475569]">Praktisi Asuransi Independen · 8 Tahun Pengalaman · Berbasis di Yogyakarta</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/artikel/syarat-dokumen-asuransi-event-musik-jogja" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📝 Syarat & Data yang Dibutuhkan →</Link>
            <Link href="/asuransi-event" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🎪 Semua Asuransi Event →</Link>
            <Link href="/asuransi-liability/public-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏢 Property All Risk →</Link>
          </div>
        </div>
      </section>

    </EventLayout>
  );
}
