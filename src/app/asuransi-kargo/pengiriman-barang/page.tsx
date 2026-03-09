import type { Metadata } from "next";
import Link from "next/link";
import KargoLayout from "@/components/kargo/KargoLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Pengiriman Barang Darat Jogja – Inland Transit | Asuransi Jogja",
  description: "Asuransi pengiriman barang via darat di Yogyakarta. Inland transit untuk truk, pickup, dan kereta api. Proteksi dari gudang pengirim hingga tangan penerima. Cocok untuk UMKM dan bisnis logistik.",
  keywords: "asuransi pengiriman barang jogja, inland transit yogyakarta, asuransi kargo darat jogja, asuransi truk barang yogyakarta, asuransi kereta barang jogja",
  openGraph: {
    title: "Asuransi Pengiriman Barang Darat Jogja – Inland Transit",
    url: "https://asuransijogja.com/asuransi-kargo/pengiriman-barang",
  },
};

const risikoPerjalanan = [
  { icon: "🚧", label: "Kecelakaan Kendaraan", desc: "Truk terguling, tabrakan, atau terperosok — barang yang dibawa ikut rusak meski kemasan tidak terbuka" },
  { icon: "🔥", label: "Kebakaran Kendaraan", desc: "Kebakaran pada truk atau gudang transit bisa menghanguskan seluruh muatan dalam hitungan menit" },
  { icon: "🌊", label: "Banjir & Bencana Jalan", desc: "Banjir bandang, longsor, dan jalan ambles adalah risiko nyata pada jalur pengiriman di Jawa dan Sumatera" },
  { icon: "🦹", label: "Pencurian & Perampokan", desc: "Pencurian muatan, pembobolan kontainer, dan perampokan truk masih menjadi ancaman nyata di jalur pengiriman" },
  { icon: "💧", label: "Air & Kelembaban", desc: "Kebocoran atap gudang transit, hujan masuk, atau kondensasi dapat merusak barang sensitif" },
  { icon: "⚠️", label: "Kesalahan Penanganan", desc: "Barang pecah, terjatuh, atau salah tumpuk saat bongkar muat di gudang transit adalah risiko paling umum" },
];

const jenisBarang = [
  { icon: "👗", label: "Tekstil & Fashion", detail: "Batik, pakaian jadi, kain, dan aksesori fashion — produk unggulan UMKM Yogyakarta" },
  { icon: "🏺", label: "Kerajinan & Seni", detail: "Gerabah, wayang, ukiran kayu, perak Kotagede, dan produk kerajinan tangan bernilai tinggi" },
  { icon: "📱", label: "Elektronik & Gadget", detail: "Laptop, ponsel, kamera, dan aksesori elektronik yang sangat sensitif terhadap guncangan" },
  { icon: "🍫", label: "Makanan & Minuman", detail: "Produk UMKM pangan Jogja — gudeg, bakpia, minuman herbal, dan produk oleh-oleh" },
  { icon: "🔧", label: "Mesin & Spare Part", detail: "Komponen mesin, peralatan industri, dan suku cadang yang bernilai tinggi" },
  { icon: "🪑", label: "Furniture & Mebel", detail: "Mebel kayu jati, rotan, dan produk home living yang rawan kerusakan saat pengiriman" },
];

const prosesKlaim = [
  { step:"01", icon:"📸", label:"Dokumentasi Segera", desc:"Foto kerusakan barang sebelum dipindahkan. Jangan tanda tangani resi penerimaan tanpa catatan kerusakan." },
  { step:"02", icon:"📋", label:"Lapor dalam 3x24 Jam", desc:"Hubungi Pak Rio segera. Keterlambatan pelaporan dapat mempengaruhi proses klaim." },
  { step:"03", icon:"📄", label:"Siapkan Dokumen", desc:"Invoice, surat jalan, foto kerusakan, dan polis asuransi — semua harus tersedia." },
  { step:"04", icon:"✅", label:"Klaim Diproses", desc:"Surveyor akan melakukan penilaian kerugian. Dengan dokumen lengkap, ganti rugi cair 7–14 hari kerja." },
];

const tipsPengiriman = [
  "Selalu cantumkan nilai barang yang sesungguhnya saat deklarasi — undervalue mempengaruhi ganti rugi",
  "Gunakan kemasan yang sesuai standar — polis dapat menolak klaim jika kemasan tidak memadai",
  "Simpan semua dokumen pengiriman: invoice, surat jalan, foto barang sebelum dikirim",
  "Pilih klausul ICC-A untuk barang senilai di atas Rp 5 juta per kiriman",
  "Asuransikan atas nama pengirim atau penerima — sesuaikan dengan siapa yang menanggung risiko",
];

export default function PengirimanBarangPage() {
  return (
    <KargoLayout breadcrumbs={[
      { label: "Asuransi Kargo", href: "/asuransi-kargo" },
      { label: "Pengiriman Barang Darat" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">📦</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-kargo" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Kargo</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Inland Transit · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Pengiriman<br /><em className="not-italic text-gold">Barang Darat</em><br />dari Jogja ke Seluruh Indonesia
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Produk UMKM Jogja — batik, kerajinan, makanan, dan furniture — setiap hari dikirim ke ribuan pembeli di seluruh Indonesia. Setiap perjalanan membawa risiko yang hanya bisa diselesaikan dengan asuransi kargo yang tepat.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#jenis-barang" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Cek Jenis Barang →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"Door to Door",lbl:"Proteksi Penuh"},{num:"ICC-A",lbl:"All Risks Tersedia"},{num:"Gratis",lbl:"Analisis Kebutuhan"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* RISIKO PERJALANAN */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Risiko Nyata</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Apa yang Bisa Terjadi<br />Selama Pengiriman?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {risikoPerjalanan.map(r=>(
            <div key={r.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{r.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JENIS BARANG */}
      <section id="jenis-barang" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk UMKM Jogja</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Jenis Barang yang Sering<br />Dikirim dari Yogyakarta</h2>
          <p className="text-sm text-[#64748B] max-w-[460px] mx-auto mt-3">Semua jenis barang di bawah ini dapat diasuransikan dengan polis inland transit — termasuk barang rapuh dan bernilai tinggi</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {jenisBarang.map(j=>(
            <div key={j.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{j.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{j.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{j.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIPS PENGIRIMAN */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Tips Pengirim</div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy mb-4">Agar Klaim Lancar<br />Jika Terjadi Masalah</h2>
            <ul className="flex flex-col gap-3">
              {tipsPengiriman.map(t=>(
                <li key={t} className="flex gap-2.5 text-sm text-navy2 leading-relaxed">
                  <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-navy rounded-card p-6 text-white">
              <div className="font-heading text-gold text-sm font-semibold mb-2">🏛️ Tanggung Jawab Ekspedisi vs Asuransi</div>
              <p className="text-xs leading-relaxed text-white/75 mb-3">Ekspedisi hanya bertanggung jawab maksimal <strong className="text-gold">10× ongkos kirim</strong>. Untuk kiriman Rp 10.000.000 dengan ongkir Rp 100.000, ekspedisi hanya ganti Rp 1.000.000. Sisanya menjadi kerugian Anda.</p>
              <p className="text-xs leading-relaxed text-white/75">Dengan asuransi kargo, <strong className="text-gold">100% nilai barang terlindungi</strong>.</p>
            </div>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy p-5 rounded-card font-bold text-sm text-center no-underline hover:bg-gold2 transition-all">
              💬 Konsultasi Asuransi Pengiriman
            </a>
          </div>
        </div>
      </section>

      {/* PROSES KLAIM */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Proses Klaim</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Barang Rusak? Begini<br />Cara Mengajukan Klaim</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {prosesKlaim.map(p=>(
            <div key={p.step} className="bg-cream rounded-card p-6 text-center border border-black/5 relative">
              <div className="absolute top-4 right-5 font-heading text-[2rem] font-bold text-navy/8">{p.step}</div>
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{p.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-kargo/kargo-udara-laut" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">✈️ Kargo Udara & Laut →</Link>
            <Link href="/asuransi-kargo/ekspedisi-umkm" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛍️ Kargo UMKM →</Link>
            <Link href="/asuransi-kendaraan/dump-truk-niaga" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚛 Asuransi Truk Niaga →</Link>
            <Link href="/asuransi-kargo" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Kargo</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Produk Jogja Anda<br />Layak Terlindungi Sampai Tujuan</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis — kami bantu pilih klausul, hitung premi, dan urus polis pengiriman barang terbaik untuk bisnis Anda.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 WhatsApp Pak Rio Sekarang</a>
        </div>
      </section>
    </KargoLayout>
  );
}
