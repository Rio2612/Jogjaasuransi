import type { Metadata } from "next";
import Link from "next/link";
import SuretyLayout from "@/components/surety/SuretyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jaminan Penawaran (Bid Bond) Jogja – Syarat Tender LPSE DIY | Asuransi Jogja",
  description: "Jaminan Penawaran (Bid Bond) di Yogyakarta untuk tender pemerintah LPSE DIY, Kota Yogyakarta, Sleman, Bantul. Proses cepat 1 hari. Nilai 1–3% dari penawaran. Konsultasi gratis.",
  keywords: "jaminan penawaran jogja, bid bond yogyakarta, surety bond tender LPSE DIY, jaminan penawaran tender pemerintah yogyakarta, bid bond kontraktor jogja, jaminan ikut tender DIY",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-surety-bond/jaminan-penawaran" },
  openGraph: { title: "Jaminan Penawaran (Bid Bond) Jogja – LPSE DIY", url: "https://asuransijogja.biz.id/asuransi-surety-bond/jaminan-penawaran" },
};

const fungsiUtama = [
  { icon: "✅", label: "Bukti Keseriusan Peserta", desc: "Menjamin bahwa peserta tender sungguh-sungguh berniat mengikuti lelang dan sanggup melaksanakan kontrak jika menang" },
  { icon: "🛡️", label: "Proteksi Pemilik Proyek", desc: "Jika pemenang tender mengundurkan diri atau menolak menandatangani kontrak, pemilik proyek mendapat kompensasi dari jaminan" },
  { icon: "📋", label: "Syarat Dokumen Wajib", desc: "Tanpa Bid Bond yang valid, dokumen penawaran dinyatakan tidak lengkap dan otomatis gugur dari proses evaluasi" },
  { icon: "⚖️", label: "Dasarkan pada Perpres", desc: "Kewajiban Jaminan Penawaran diatur dalam Perpres 16/2018 dan perubahannya untuk semua pengadaan pemerintah" },
];

const nilaiJaminan = [
  { jenis: "Pengadaan Barang & Jasa Lainnya", nilai: "1–3%", catatan: "Dari nilai Harga Perkiraan Sendiri (HPS)" },
  { jenis: "Jasa Konstruksi", nilai: "1–3%", catatan: "Dari nilai HPS atau nilai penawaran peserta" },
  { jenis: "Pengadaan Swasta", nilai: "1–5%", catatan: "Ditentukan oleh pemilik proyek dalam dokumen tender" },
];

const dokumenDiperlukan = [
  "Undangan tender / dokumen pengadaan dari panitia",
  "Akta pendirian perusahaan dan perubahannya",
  "NPWP dan NIB (Nomor Induk Berusaha) perusahaan",
  "Laporan keuangan perusahaan (2 tahun terakhir)",
  "SBU (Sertifikat Badan Usaha) yang masih berlaku",
  "KTP direktur / pengurus yang berwenang",
];

const periksaSebelumTender = [
  { poin: "Masa berlaku Bid Bond", detail: "Pastikan masa berlaku jaminan mencakup seluruh proses evaluasi tender — biasanya 30–90 hari sejak penutupan penawaran" },
  { poin: "Nama penerima jaminan", detail: "Nama pemilik proyek atau panitia pengadaan harus tercantum persis sesuai dokumen tender" },
  { poin: "Nama dan nilai proyek", detail: "Nama paket pekerjaan dan nilai jaminan harus sesuai dengan yang tercantum dalam dokumen pengadaan" },
  { poin: "Keaslian dokumen", detail: "Beberapa panitia melakukan verifikasi langsung ke penerbit — pastikan surety bond dapat dikonfirmasi kebenarannya" },
];

export default function JaminanPenawaranPage() {
  return (
    <SuretyLayout breadcrumbs={[
      { label: "Surety Bond", href: "/asuransi-surety-bond" },
      { label: "Jaminan Penawaran" }
    ]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Beranda\", \"item\": \"https://asuransijogja.biz.id\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Surety Bond\", \"item\": \"https://asuransijogja.biz.id/asuransi-surety-bond\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Jaminan Penawaran\", \"item\": \"https://asuransijogja.biz.id/asuransi-surety-bond/jaminan-penawaran\"}]}" }}
      />

      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">📋</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-surety-bond" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Surety Bond</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Bid Bond · LPSE Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Jaminan Penawaran<br /><em className="not-italic text-gold">(Bid Bond) Jogja</em><br />Syarat Ikut Tender Pemerintah
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[520px] mb-8">
            Setiap tender pemerintah di DIY — dari LPSE Provinsi hingga kabupaten — mensyaratkan Jaminan Penawaran yang valid. Tanpa dokumen ini, penawaran Anda otomatis gugur sebelum dievaluasi.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Proses Bid Bond Sekarang</a>
            <a href="#dokumen" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Dokumen yang Diperlukan →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"1 Hari",lbl:"Proses Penerbitan"},{num:"1–3%",lbl:"Dari Nilai Penawaran"},{num:"Gratis",lbl:"Konsultasi"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/60 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Fungsi Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Mengapa Bid Bond<br />Wajib Ada di Dokumen Penawaran?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {fungsiUtama.map(f=>(
            <div key={f.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{f.label}</div>
              <p className="text-base leading-relaxed text-[#475569]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-[5vw] bg-white">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Nilai Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Berapa Nilai Bid Bond<br />yang Harus Disiapkan?</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {nilaiJaminan.map(n=>(
            <div key={n.jenis} className="bg-cream rounded-card p-5 border border-black/5 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-3 items-center">
              <div className="font-heading text-navy font-bold text-sm">{n.jenis}</div>
              <div className="font-heading text-gold text-xl font-bold">{n.nilai}</div>
              <div className="text-xs text-[#475569] md:text-right">{n.catatan}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-2xl mx-auto bg-gold/8 border border-gold/20 rounded-xl p-4">
          <p className="text-sm text-navy2"><strong className="text-gold">💡 Catatan:</strong> Nilai pasti Jaminan Penawaran selalu mengacu pada dokumen pengadaan yang diterbitkan panitia. Pastikan membaca syarat tender dengan seksama sebelum mengurus jaminan.</p>
        </div>
      </section>

      <section id="dokumen" className="py-16 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Persyaratan</div>
            <h2 className="font-heading text-[clamp(1.5rem,2.2vw,2rem)] text-navy mb-4">Dokumen yang<br />Perlu Disiapkan</h2>
            <ul className="flex flex-col gap-3">
              {dokumenDiperlukan.map(d=>(
                <li key={d} className="flex gap-2.5 text-base text-navy2 leading-relaxed">
                  <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>{d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Checklist</div>
            <h2 className="font-heading text-[clamp(1.5rem,2.2vw,2rem)] text-navy mb-4">Periksa Sebelum<br />Serahkan ke Panitia</h2>
            <ul className="flex flex-col gap-3">
              {periksaSebelumTender.map(p=>(
                <li key={p.poin} className="bg-white rounded-xl p-4 border border-black/5">
                  <div className="font-semibold text-navy text-sm mb-1">☑ {p.poin}</div>
                  <p className="text-xs text-[#475569] leading-relaxed">{p.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">Jaminan Lainnya</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-surety-bond/jaminan-pelaksanaan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏗️ Jaminan Pelaksanaan →</Link>
            <Link href="/asuransi-surety-bond/jaminan-uang-muka" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">💰 Jaminan Uang Muka →</Link>
            <Link href="/asuransi-surety-bond/jaminan-pemeliharaan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛡️ Jaminan Pemeliharaan →</Link>
            <Link href="/asuransi-engineering/contractor-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏗️ CAR – Proteksi Proyek →</Link>
            <Link href="/asuransi-surety-bond" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Surety Bond</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Deadline Tender Mendekat?<br />Bid Bond Bisa Terbit Hari Ini</h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">Hubungi Pak Rio sekarang — siapkan dokumen, kami proses Bid Bond tercepat untuk tender Anda di Yogyakarta.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Proses Bid Bond via WhatsApp</a>
        </div>
      </section>

      {/* PENJELASAN LENGKAP, STUDI KASUS & ESTIMASI PREMI */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Panduan Lengkap</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.6vw,2.2rem)] text-navy leading-[1.25] mb-5">Memahami Jaminan Penawaran (Bid Bond) untuk Tender DIY</h2>
          <div className="text-base leading-[1.85] text-[#475569] space-y-4">
            <p>Jaminan Penawaran (Bid Bond) adalah syarat administrasi wajib untuk mengikuti lelang/tender proyek pemerintah maupun swasta di Yogyakarta, baik melalui LPSE DIY, Kota Yogyakarta, Sleman, maupun Bantul. Nilainya umumnya 1–3% dari nilai penawaran dan diterbitkan sebagai surety bond dari perusahaan asuransi/penjaminan.</p>
            <p>Tanpa bid bond yang valid, dokumen penawaran kontraktor otomatis gugur secara administrasi, terlepas seberapa kompetitif harga yang diajukan. Karena itu kecepatan proses penerbitan menjadi krusial, terutama jika deadline submission tender sangat ketat.</p>
            <p>Sebagai konsultan independen, kami membantu kontraktor membandingkan beberapa penerbit jaminan untuk mendapatkan proses tercepat (umumnya 1 hari kerja) dengan biaya penjaminan paling kompetitif.</p>
          </div>

          <div className="bg-white border border-black/8 rounded-card p-6 mt-8">
            <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">📖 Studi Kasus: Kontraktor Hampir Gugur Tender karena Bid Bond Terlambat</div>
            <p className="text-sm leading-relaxed text-[#475569]">Seorang kontraktor kecil di Sleman mengajukan penawaran untuk proyek pembangunan jalan desa senilai Rp 1,2 miliar namun baru menyadari kebutuhan bid bond 2 hari sebelum deadline submission. Melalui proses ekspres, jaminan penawaran senilai 2% dari nilai penawaran (Rp 24 juta nilai jaminan, premi sekitar Rp 600.000) berhasil diterbitkan dalam 1 hari kerja, sehingga dokumen penawaran tetap lengkap dan kontraktor lolos tahap administrasi tender.</p>
          </div>

          <div className="mt-8">
            <div className="font-heading text-navy font-bold text-[1.05rem] mb-3">🧮 Estimasi Biaya Jaminan Penawaran (Ilustrasi)</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-black/8 rounded-card overflow-hidden bg-white">
                <thead><tr className="bg-navy text-white"><th className="p-3 text-left font-semibold">Nilai Penawaran Proyek</th><th className="p-3 text-left font-semibold">Nilai Jaminan (2%)</th><th className="p-3 text-left font-semibold">Estimasi Premi</th></tr></thead>
                <tbody>
                  <tr><td className="p-3 border-t border-black/8">Rp 500.000.000</td><td className="p-3 border-t border-black/8">Rp 10.000.000</td><td className="p-3 border-t border-black/8">Rp 250.000 – Rp 400.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Rp 1.500.000.000</td><td className="p-3 border-t border-black/8">Rp 30.000.000</td><td className="p-3 border-t border-black/8">Rp 750.000 – Rp 1.200.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Rp 5.000.000.000</td><td className="p-3 border-t border-black/8">Rp 100.000.000</td><td className="p-3 border-t border-black/8">Rp 2.500.000 – Rp 4.000.000</td></tr>
                  
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#5A6472] mt-2">*Estimasi premi bersifat indikatif berdasarkan pola tarif acuan OJK dan komponen risiko umum untuk ilustrasi — bukan penawaran resmi. Premi final ditentukan setelah survei dan underwriting oleh perusahaan asuransi.</p>
          </div>

          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-black/8">
            <div className="w-11 h-11 rounded-full bg-navy text-gold flex items-center justify-center font-heading font-bold flex-shrink-0">RM</div>
            <div>
              <div className="text-sm font-semibold text-navy">Ditinjau oleh Rio Mardiansyah</div>
              <div className="text-xs text-[#475569]">Praktisi Asuransi Independen · 8 Tahun Pengalaman · Berbasis di Yogyakarta</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/asuransi-surety-bond" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📄 Semua Produk Surety Bond →</Link>
            <Link href="/artikel/cara-mengurus-jaminan-penawaran-jogja" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📋 Cara Mengurus Bid Bond →</Link>
            <Link href="/artikel/syarat-asuransi-tender-pemerintah-diy" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏛️ Syarat Tender Pemerintah DIY →</Link>
            <Link href="/artikel/jaminan-pelaksanaan-pemeliharaan-uang-muka" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📄 Siklus Jaminan Setelah Menang Tender →</Link>
          </div>
        </div>
      </section>

    </SuretyLayout>
  );
}
