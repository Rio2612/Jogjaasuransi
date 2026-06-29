import type { Metadata } from "next";
import Link from "next/link";
import KargoLayout from "@/components/kargo/KargoLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kargo UMKM & Ekspedisi Jogja – Penjual Online | Asuransi Jogja",
  description: "Asuransi kargo khusus UMKM dan penjual online di Yogyakarta. Lindungi produk batik, kerajinan, makanan, dan kiriman marketplace dari kerusakan dan kehilangan. Premi terjangkau.",
  keywords: "asuransi kargo UMKM jogja, asuransi pengiriman online yogyakarta, asuransi penjual marketplace jogja, asuransi toko online yogyakarta, asuransi kiriman batik jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-kargo/ekspedisi-umkm" },
  openGraph: {
    title: "Asuransi Kargo UMKM Jogja – Penjual Online & Pengrajin",
    url: "https://asuransijogja.biz.id/asuransi-kargo/ekspedisi-umkm",
  },
};

const masalahUmkm = [
  { icon: "😰", masalah: "Barang rusak, pembeli komplain, toko dapat bintang 1", solusi: "Klaim asuransi menanggung penggantian — reputasi toko tetap terjaga" },
  { icon: "📦", masalah: "Paket hilang di ekspedisi, ganti rugi hanya 10× ongkir", solusi: "Asuransi kargo menanggung 100% nilai barang yang hilang" },
  { icon: "💸", masalah: "Modal sudah keluar, barang rusak, tidak ada uang pengganti", solusi: "Klaim cair sebelum perlu beli stok baru — cashflow tetap aman" },
  { icon: "🤷", masalah: "Tidak tahu cara klaim ke ekspedisi, proses berbelit", solusi: "Pak Rio dampingi seluruh proses klaim — tanpa biaya tambahan" },
];

const platformMarketplace = [
  { icon: "🛒", nama: "Tokopedia & Shopee", tip: "Aktifkan proteksi pengiriman di marketplace, tapi ketahui batasannya — nilai proteksi sering di bawah harga jual actual" },
  { icon: "📱", nama: "Instagram & WhatsApp Shop", tip: "Penjualan langsung tanpa perlindungan bawaan — asuransi kargo mandiri sangat diperlukan" },
  { icon: "🌐", nama: "Website & Toko Online Sendiri", tip: "Tidak ada perlindungan default dari platform — sepenuhnya tanggung jawab penjual" },
  { icon: "🏪", nama: "Lazada & Bukalapak", tip: "Cek ulang syarat klaim proteksi pengiriman bawaan — banyak barang tertentu dikecualikan" },
];

const produkJogjaUnggulan = [
  { icon: "🧵", label: "Batik Tulis & Cap", harga: "Rp 200rb – 5jt/lembar", risiko: "Tinggi — rentan noda air dan kerutan permanen" },
  { icon: "🥈", label: "Perak Kotagede", harga: "Rp 100rb – 20jt/item", risiko: "Sangat Tinggi — mudah bengkok dan nilainya besar" },
  { icon: "🏺", label: "Gerabah Kasongan", harga: "Rp 50rb – 2jt/item", risiko: "Sangat Tinggi — rapuh, mudah pecah saat guncangan" },
  { icon: "🪆", label: "Wayang & Kerajinan", harga: "Rp 150rb – 10jt/item", risiko: "Tinggi — ornamen halus rentan patah dan lecet" },
  { icon: "🍫", label: "Bakpia & Oleh-oleh", harga: "Rp 30rb – 200rb/kotak", risiko: "Sedang — kemasan mudah penyok, produk bisa hancur" },
  { icon: "🪑", label: "Mebel & Furniture", harga: "Rp 500rb – 50jt/item", risiko: "Tinggi — besar, berat, banyak sudut rentan lecet" },
];

const caraMulai = [
  { step:"01", icon:"💬", label:"Konsultasi via WA", desc:"Ceritakan jenis produk, nilai kiriman, dan frekuensi pengiriman per bulan kepada Pak Rio" },
  { step:"02", icon:"📊", label:"Analisis Kebutuhan", desc:"Kami tentukan klausul yang tepat dan premi yang paling efisien untuk profil pengiriman Anda" },
  { step:"03", icon:"📄", label:"Polis Terbit", desc:"Polis kargo terbit dengan cepat — bisa per kiriman (open cover) atau per periode" },
  { step:"04", icon:"🛡️", label:"Kirim dengan Tenang", desc:"Setiap paket terlindungi — fokus ke produk dan pelayanan, bukan khawatir kiriman rusak" },
];

export default function EkspedisiUmkmPage() {
  return (
    <KargoLayout breadcrumbs={[
      { label: "Asuransi Kargo", href: "/asuransi-kargo" },
      { label: "Ekspedisi & UMKM" }
    ]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Beranda\", \"item\": \"https://asuransijogja.biz.id\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Asuransi Kargo\", \"item\": \"https://asuransijogja.biz.id/asuransi-kargo\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Ekspedisi & UMKM\", \"item\": \"https://asuransijogja.biz.id/asuransi-kargo/ekspedisi-umkm\"}]}" }}
      />


      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">🛍️</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-kargo" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Kargo</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>UMKM & Penjual Online · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Kargo<br /><em className="not-italic text-gold">UMKM & Toko Online</em><br />Yogyakarta
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[520px] mb-8">
            Ratusan UMKM Jogja mengirim batik, kerajinan, dan produk lokal ke seluruh Indonesia setiap hari. Satu kiriman rusak atau hilang bisa merusak reputasi toko yang dibangun bertahun-tahun. Asuransi kargo adalah investasi kecil dengan manfaat besar.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#produk-jogja" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Produk Jogja Apa Saja →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"UMKM",lbl:"Fokus Pelaku Usaha Lokal"},{num:"Terjangkau",lbl:"Premi Mulai 0,1%"},{num:"Gratis",lbl:"Konsultasi"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MASALAH vs SOLUSI */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Masalah Nyata</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Situasi yang Sering<br />Dihadapi Penjual Online</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {masalahUmkm.map(m=>(
            <div key={m.masalah} className="bg-white rounded-card p-6 border border-black/6">
              <div className="text-3xl mb-3">{m.icon}</div>
              <div className="bg-red-50 border border-red-100 rounded-lg px-3 py-2 text-xs text-red-700 mb-3">⚠️ {m.masalah}</div>
              <div className="bg-green-50 border border-green-100 rounded-lg px-3 py-2 text-xs text-green-800">✓ {m.solusi}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUK JOGJA */}
      <section id="produk-jogja" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Unggulan Jogja</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Produk Lokal yang Wajib<br />Diasuransikan saat Dikirim</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {produkJogjaUnggulan.map(p=>(
            <div key={p.label} className="bg-cream rounded-card p-6 border border-black/6">
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{p.label}</div>
              <div className="text-xs text-[#64748B] mb-2"><span className="font-semibold text-navy">Harga:</span> {p.harga}</div>
              <div className={`text-xs font-bold px-2.5 py-1 rounded-full inline-block ${p.risiko.includes("Sangat")?"bg-red-100 text-red-700":p.risiko.includes("Tinggi")?"bg-orange-100 text-orange-700":"bg-yellow-100 text-yellow-700"}`}>
                Risiko {p.risiko}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARKETPLACE */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Catatan Platform</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Proteksi Bawaan Marketplace<br />Tidak Selalu Cukup</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {platformMarketplace.map(p=>(
            <div key={p.nama} className="bg-white rounded-card p-5 border border-black/5 flex gap-4">
              <span className="text-2xl flex-shrink-0">{p.icon}</span>
              <div><div className="font-heading text-navy font-bold text-sm mb-1">{p.nama}</div><p className="text-base leading-relaxed text-[#64748B]">{p.tip}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* CARA MULAI */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mulai Sekarang</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">4 Langkah Mudah<br />Dapat Asuransi Kargo</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {caraMulai.map(c=>(
            <div key={c.step} className="bg-cream rounded-card p-6 text-center border border-black/5 relative">
              <div className="absolute top-4 right-5 font-heading text-[2rem] font-bold text-navy/8">{c.step}</div>
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{c.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-kargo/pengiriman-barang" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📦 Pengiriman Barang Darat →</Link>
            <Link href="/asuransi-kargo/kargo-udara-laut" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">✈️ Kargo Udara & Laut →</Link>
            <Link href="/asuransi-kendaraan/armada-fleet" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚐 Armada Fleet →</Link>
            <Link href="/asuransi-kargo" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Kargo</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <div className="text-5xl mb-4">🏺</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Produk Asli Jogja<br />Layak Sampai dengan Sempurna</h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis asuransi kargo untuk UMKM — kami paham kebutuhan pengrajin dan penjual online Yogyakarta.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Kargo UMKM</a>
        </div>
      </section>

      {/* PENJELASAN LENGKAP, STUDI KASUS & ESTIMASI PREMI */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Panduan Lengkap</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.6vw,2.2rem)] text-navy leading-[1.25] mb-5">Asuransi Kargo untuk UMKM & Penjual Online di Yogyakarta</h2>
          <div className="text-base leading-[1.85] text-[#475569] space-y-4">
            <p>Pelaku UMKM dan penjual online di Yogyakarta — penjual batik, kerajinan, makanan kemasan — mengandalkan jasa ekspedisi pihak ketiga untuk mengirim produk ke pembeli marketplace. Sayangnya, ganti rugi standar dari jasa ekspedisi sering terbatas (misalnya hanya 10x ongkos kirim), jauh dari nilai barang sebenarnya jika hilang atau rusak.</p>
            <p>Asuransi kargo khusus UMKM mengisi gap ini dengan menanggung nilai barang sesungguhnya, bukan hanya nilai ongkos kirim, dengan premi yang dirancang terjangkau untuk skala pengiriman kecil-menengah harian/bulanan.</p>
            <p>Skema ini sangat relevan bagi penjual dengan volume kiriman tinggi dan nilai barang per paket yang signifikan, misalnya elektronik kecil, kerajinan perak, atau produk fashion bernilai menengah-tinggi.</p>
          </div>

          <div className="bg-white border border-black/8 rounded-card p-6 mt-8">
            <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">📖 Studi Kasus: Kerajinan Perak Hilang Saat Pengiriman ke Marketplace</div>
            <p className="text-sm leading-relaxed text-[#475569]">Seorang penjual kerajinan perak Kotagede mengirim pesanan senilai Rp 8 juta ke pembeli di Jakarta melalui ekspedisi reguler. Paket dinyatakan hilang di tengah jalan oleh pihak ekspedisi, yang hanya bersedia mengganti sebesar ongkos kirim (sekitar Rp 150.000) sesuai kebijakan standar mereka. Karena penjual sudah mendaftarkan pengiriman tersebut dalam polis asuransi kargo UMKM, selisih kerugian nilai barang sebesar hampir Rp 7,85 juta dapat diklaim dan cair dalam waktu sekitar 2 minggu.</p>
          </div>

          <div className="mt-8">
            <div className="font-heading text-navy font-bold text-[1.05rem] mb-3">🧮 Estimasi Premi Kargo UMKM (Ilustrasi, per Pengiriman)</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-black/8 rounded-card overflow-hidden bg-white">
                <thead><tr className="bg-navy text-white"><th className="p-3 text-left font-semibold">Nilai Barang per Kiriman</th><th className="p-3 text-left font-semibold">Estimasi Premi</th></tr></thead>
                <tbody>
                  <tr><td className="p-3 border-t border-black/8">Rp 1.000.000</td><td className="p-3 border-t border-black/8">Rp 5.000 – Rp 8.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Rp 5.000.000</td><td className="p-3 border-t border-black/8">Rp 25.000 – Rp 40.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Rp 15.000.000</td><td className="p-3 border-t border-black/8">Rp 75.000 – Rp 120.000</td></tr>
                  
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#94A3B8] mt-2">*Estimasi premi bersifat indikatif berdasarkan pola tarif acuan OJK dan komponen risiko umum untuk ilustrasi — bukan penawaran resmi. Premi final ditentukan setelah survei dan underwriting oleh perusahaan asuransi.</p>
          </div>

          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-black/8">
            <div className="w-11 h-11 rounded-full bg-navy text-gold flex items-center justify-center font-heading font-bold flex-shrink-0">RM</div>
            <div>
              <div className="text-sm font-semibold text-navy">Ditinjau oleh Rio Mardiansyah</div>
              <div className="text-xs text-[#64748B]">Konsultan Asuransi Kerugian Independen · 10+ Tahun Pengalaman · Berbasis di Yogyakarta</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/asuransi-kargo" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📦 Semua Produk Kargo →</Link>
            <Link href="/artikel/asuransi-kargo-umkm-jogja" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛵 Panduan Kargo UMKM →</Link>
            <Link href="/artikel/cara-klaim-asuransi-kargo" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📋 Cara Klaim Kargo →</Link>
          </div>
        </div>
      </section>

    </KargoLayout>
  );
}
