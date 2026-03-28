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
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
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
              <p className="text-base leading-relaxed text-[#64748B]">{f.desc}</p>
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
              <div className="text-xs text-[#64748B] md:text-right">{n.catatan}</div>
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
                  <p className="text-xs text-[#64748B] leading-relaxed">{p.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Jaminan Lainnya</p>
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
    </SuretyLayout>
  );
}
