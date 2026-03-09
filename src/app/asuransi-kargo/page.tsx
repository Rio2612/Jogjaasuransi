import type { Metadata } from "next";
import Link from "next/link";
import KargoLayout from "@/components/kargo/KargoLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kargo Jogja – Pengiriman Barang, Ekspor Impor & UMKM | Asuransi Jogja",
  description: "Konsultan asuransi kargo dan pengiriman barang di Yogyakarta. Lindungi kiriman Anda via darat, laut, dan udara. Marine cargo, inland transit, asuransi ekspedisi UMKM. Konsultasi gratis.",
  keywords: "asuransi kargo jogja, asuransi pengiriman barang yogyakarta, marine cargo jogja, asuransi ekspedisi yogyakarta, asuransi kargo UMKM jogja, inland transit insurance yogyakarta",
  openGraph: {
    title: "Asuransi Kargo Jogja – Darat, Laut & Udara",
    description: "Proteksi pengiriman barang Anda dari risiko kerusakan, kehilangan, dan keterlambatan. Melayani UMKM hingga perusahaan ekspor-impor di Yogyakarta.",
    url: "https://asuransijogja.com/asuransi-kargo",
  },
};

const clusters = [
  {
    href: "/asuransi-kargo/pengiriman-barang",
    icon: "📦", batik: "◈",
    title: "Asuransi Pengiriman Barang",
    subtitle: "Inland Transit · Darat & Kereta",
    desc: "Perlindungan barang selama proses pengiriman via jalur darat — truk, pickup, kereta api — dari gudang pengirim hingga tangan penerima.",
    tags: ["Pengiriman Darat", "Kereta Api", "Last Mile", "Antar Kota"],
  },
  {
    href: "/asuransi-kargo/kargo-udara-laut",
    icon: "✈️", batik: "❖",
    title: "Kargo Udara & Laut",
    subtitle: "Marine Cargo · Air Freight",
    desc: "Proteksi komprehensif untuk muatan kapal dan pengiriman udara — ekspor, impor, maupun kargo domestik antarpulau.",
    tags: ["Ekspor Impor", "Kargo Kapal", "Air Freight", "Antarpulau"],
  },
  {
    href: "/asuransi-kargo/ekspedisi-umkm",
    icon: "🛍️", batik: "⬡",
    title: "Kargo & Ekspedisi UMKM",
    subtitle: "Pelaku Usaha Kecil Menengah Jogja",
    desc: "Solusi asuransi kargo terjangkau untuk UMKM, penjual online, pengrajin batik, dan produsen kerajinan Jogja yang mengirim produk ke seluruh Indonesia.",
    tags: ["UMKM Jogja", "Penjual Online", "Batik & Kerajinan", "Marketplace"],
  },
];

const faktaRisiko = [
  { icon: "📊", angka: "15–20%", label: "Klaim Tahunan", desc: "Rata-rata klaim kerusakan dan kehilangan kargo di Indonesia setiap tahun dari total pengiriman aktif" },
  { icon: "🔥", angka: "No.1", label: "Penyebab Kerusakan", desc: "Kesalahan penanganan (handling) adalah penyebab utama kerusakan kargo — lebih sering dari kecelakaan angkutan" },
  { icon: "💰", angka: "Rp Miliaran", label: "Potensi Kerugian", desc: "Satu pengiriman kontainer berisi barang elektronik atau mesin bernilai puluhan hingga ratusan juta rupiah" },
  { icon: "📋", angka: "Tanpa Asuransi", label: "Tanggung Jawab Terbatas", desc: "Ekspedisi hanya menanggung kerugian maksimal 10x ongkos kirim tanpa asuransi kargo tambahan" },
];

const klausulJaminan = [
  {
    kode: "ICC-A", nama: "Institute Cargo Clause A", level: "All Risks",
    levelColor: "bg-green-100 text-green-800",
    desc: "Perlindungan terluas — menjamin semua risiko fisik kecuali yang dikecualikan. Cocok untuk barang bernilai tinggi.",
    cocok: "Barang elektronik, mesin, perhiasan, barang seni"
  },
  {
    kode: "ICC-B", nama: "Institute Cargo Clause B", level: "Named Perils",
    levelColor: "bg-yellow-100 text-yellow-800",
    desc: "Menjamin risiko utama: kebakaran, ledakan, kapal tenggelam, tabrakan kendaraan, gempa, dan air laut masuk.",
    cocok: "Barang industri, raw material, produk manufaktur"
  },
  {
    kode: "ICC-C", nama: "Institute Cargo Clause C", level: "Basic Cover",
    levelColor: "bg-orange-100 text-orange-800",
    desc: "Jaminan dasar untuk risiko besar saja: kebakaran, ledakan, kapal karam, dan tabrakan. Premi paling ekonomis.",
    cocok: "Komoditas curah, barang tidak mudah rusak, pengiriman volume besar"
  },
];

const modaAngkutan = [
  { icon: "🚛", label: "Darat", detail: "Truk, pickup, kontainer darat, kereta barang — risiko kecelakaan, terguling, pencurian" },
  { icon: "🚢", label: "Laut", detail: "Kapal feeder, RoRo, bulk carrier — risiko badai, kecelakaan kapal, tumpahan air laut" },
  { icon: "✈️", label: "Udara", detail: "Air freight domestik & internasional — risiko kerusakan selama handling di bandara" },
  { icon: "🔄", label: "Multimodal", detail: "Kombinasi darat-laut-udara — barang dilindungi sepanjang seluruh perjalanan" },
];

const faqItems = [
  {
    q: "Apakah ekspedisi sudah menanggung barang yang rusak?",
    a: "Tanggung jawab ekspedisi berdasarkan regulasi umumnya sangat terbatas — biasanya hanya 10x ongkos kirim. Jika barang Anda senilai Rp 5 juta dan ongkir Rp 50.000, ekspedisi hanya wajib ganti Rp 500.000. Asuransi kargo tambahan menutup seluruh nilai barang."
  },
  {
    q: "UMKM dan penjual online, apakah perlu asuransi kargo?",
    a: "Sangat perlu, terutama untuk kiriman barang bernilai di atas Rp 500.000. Premi asuransi kargo sangat terjangkau — bisa mulai dari 0,1% nilai barang. Satu klaim berhasil sudah menutup biaya premi puluhan pengiriman."
  },
  {
    q: "Apa perbedaan ICC-A, ICC-B, dan ICC-C?",
    a: "Ketiganya adalah standar polis kargo internasional. ICC-A paling luas (all risks), ICC-B cakupan menengah, ICC-C paling dasar. Pemilihan tergantung jenis barang, nilai kiriman, dan moda angkutan yang digunakan."
  },
  {
    q: "Berapa lama proses klaim asuransi kargo?",
    a: "Proses klaim kargo dimulai dengan pelaporan segera setelah barang diterima dalam kondisi rusak atau hilang. Dokumentasi penting: foto kerusakan, surat jalan, bukti nilai barang. Dengan dokumen lengkap, klaim ringan bisa selesai 7–14 hari kerja."
  },
];

export default function AsuransiKargoPage() {
  return (
    <KargoLayout breadcrumbs={[{ label: "Asuransi Kargo" }]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)"}} />
        {/* Ornamen aksara Jawa */}
        <div className="absolute top-8 right-[5vw] text-gold/6 font-heading text-[8rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>Asuransi Kargo · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,4vw,3.8rem)] text-white leading-[1.15] mb-5">
            Asuransi Kargo Jogja<br /><em className="not-italic text-gold">Darat, Laut & Udara</em><br />Aman Sampai Tujuan
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[530px] mb-8">
            Dari batik Malioboro hingga mesin industri — setiap barang yang dikirim mengandung risiko. Kerusakan, kehilangan, dan pencurian bisa terjadi di mana saja dalam perjalanan. Asuransi kargo memastikan nilai bisnis Anda tetap terlindungi.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 hover:-translate-y-px transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#klausul" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">ICC-A, B & C →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"ICC A/B/C",lbl:"Standar Internasional"},{num:"4 Moda",lbl:"Darat·Laut·Udara·Multi"},{num:"Gratis",lbl:"Konsultasi & Analisis"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* FAKTA RISIKO */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Fakta Risiko</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Mengapa Barang Kiriman<br />Perlu Diasuransikan?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {faktaRisiko.map(f=>(
            <div key={f.label} className="bg-white rounded-card p-6 border border-black/5 text-center hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-2">{f.icon}</div>
              <div className="font-heading text-gold text-xl font-bold mb-1">{f.angka}</div>
              <div className="font-heading text-navy font-bold text-sm mb-2">{f.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLUSTER CARDS */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Kargo</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Pilih Perlindungan<br />Sesuai Kebutuhan Pengiriman</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clusters.map(c=>(
            <Link key={c.href} href={c.href} className="no-underline group">
              <div className="border border-black/8 rounded-card p-7 h-full hover:shadow-[0_12px_40px_rgba(13,33,55,0.1)] hover:-translate-y-1.5 hover:border-gold/30 transition-all relative overflow-hidden bg-white">
                <div className="absolute top-4 right-5 text-gold/10 font-heading text-[3.5rem] leading-none select-none">{c.batik}</div>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-[2rem] mb-3">{c.icon}</div>
                <div className="font-heading text-navy font-bold text-[1.15rem] mb-1">{c.title}</div>
                <div className="text-gold text-xs font-semibold mb-3">{c.subtitle}</div>
                <p className="text-sm leading-relaxed text-[#64748B] mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.tags.map(t=><span key={t} className="bg-gold/8 border border-gold/15 text-navy2 text-xs px-2.5 py-1 rounded-full font-medium">{t}</span>)}
                </div>
                <div className="text-gold text-sm font-semibold group-hover:gap-2 transition-all">Pelajari lebih lanjut →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MODA ANGKUTAN */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Moda Angkutan</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Barang Anda Dikirim<br />dengan Apa pun — Kami Cover</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {modaAngkutan.map(m=>(
            <div key={m.label} className="bg-white rounded-card p-6 text-center border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-3">{m.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{m.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KLAUSUL ICC */}
      <section id="klausul" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Standar Internasional</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Mengenal Klausul ICC —<br />Standar Polis Kargo Dunia</h2>
          <p className="text-sm text-[#64748B] max-w-[500px] mx-auto mt-3">Institute Cargo Clauses (ICC) adalah standar internasional yang digunakan hampir seluruh perusahaan asuransi kargo di dunia</p>
        </div>
        <div className="flex flex-col gap-5 max-w-3xl mx-auto">
          {klausulJaminan.map(k=>(
            <div key={k.kode} className="bg-cream rounded-card p-7 border border-black/6 grid grid-cols-1 md:grid-cols-[90px_1fr] gap-5 items-start">
              <div className="text-center">
                <div className="bg-navy text-gold font-heading font-bold text-lg w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-2">{k.kode}</div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${k.levelColor}`}>{k.level}</span>
              </div>
              <div>
                <div className="font-heading text-navy font-bold text-[1.1rem] mb-2">{k.nama}</div>
                <p className="text-sm leading-relaxed text-[#64748B] mb-3">{k.desc}</p>
                <div className="bg-white rounded-lg px-3 py-2 text-xs text-[#64748B] border border-black/5">
                  <strong className="text-navy">Cocok untuk:</strong> {k.cocok}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-3xl mx-auto bg-navy rounded-xl p-6 text-white">
          <div className="font-heading text-gold text-sm font-semibold mb-2">💡 Rekomendasi dari Pak Rio</div>
          <p className="text-xs leading-relaxed text-white/75">Untuk pengiriman barang bernilai tinggi seperti elektronik, kerajinan seni, dan mesin industri, <strong className="text-gold">ICC-A selalu menjadi pilihan terbaik</strong>. Selisih premi antara ICC-A dan ICC-C sering kali hanya 0,05–0,1% — sangat kecil dibanding manfaat perlindungannya yang jauh lebih luas.</p>
        </div>
      </section>

      {/* SINERGI DENGAN PRODUK LAIN */}
      <section className="py-12 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto bg-gold/6 border border-gold/25 rounded-[20px] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Sinergi</div>
            <h2 className="font-heading text-navy text-[1.5rem] mb-3">Kargo + Kendaraan +<br />Liability = Proteksi Logistik</h2>
            <p className="text-sm leading-relaxed text-[#64748B]">Bisnis pengiriman dan logistik membutuhkan proteksi berlapis — kendaraan pengangkut, muatan di dalam, dan tanggung jawab terhadap pihak ketiga jika terjadi kecelakaan.</p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { href:"/asuransi-kendaraan/dump-truk-niaga", icon:"🚛", title:"Asuransi Truk & Kendaraan Niaga", sub:"Proteksi kendaraan pengangkut kargo" },
              { href:"/asuransi-kendaraan/armada-fleet", icon:"🚐", title:"Asuransi Armada Fleet", sub:"Satu polis untuk armada logistik" },
              { href:"/asuransi-liability/public-liability", icon:"🤝", title:"Public Liability", sub:"Tanggung jawab ke pihak ketiga" },
              { href:"/asuransi-properti/property-all-risk", icon:"🏭", title:"Asuransi Gudang (PAR)", sub:"Proteksi gudang penyimpanan kargo" },
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
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Pertanyaan Seputar<br />Asuransi Kargo</h2>
        </div>
        <div className="max-w-[700px] mx-auto">
          {faqItems.map((f,i)=>(
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}<span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-sm leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="absolute bottom-4 right-[5vw] text-gold/6 font-heading text-[6rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Setiap Kiriman Berharga<br />Layak Mendapat Perlindungan</h2>
          <p className="text-white/60 text-sm max-w-[480px] mx-auto mb-8">Konsultasi gratis — kami bantu pilih klausul, hitung premi, dan urus polis kargo terbaik untuk bisnis Anda di Yogyakarta.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </KargoLayout>
  );
}
