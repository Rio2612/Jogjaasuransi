import type { Metadata } from "next";
import Link from "next/link";
import KendaraanLayout from "@/components/kendaraan/KendaraanLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Dump Truk & Kendaraan Niaga Jogja | Asuransi Jogja",
  description: "Asuransi kendaraan niaga berat di Yogyakarta. Dump truk, tronton, truk mixer, truk ekspedisi. All Risk & TLO untuk kendaraan proyek dan logistik. Konsultasi gratis.",
  keywords: "asuransi dump truk jogja, asuransi truk yogyakarta, asuransi kendaraan niaga jogja, asuransi tronton yogyakarta, asuransi kendaraan proyek jogja",
};

const jenisKendaraan = [
  { icon: "🚛", label: "Dump Truk", desc: "Kendaraan pengangkut material lepas seperti pasir, batu, dan tanah. Sangat umum di proyek konstruksi Jogja dan sekitarnya." },
  { icon: "🚚", label: "Tronton & Truk Besar", desc: "Kendaraan logistik pengangkut peti kemas, mesin industri, dan barang berat jarak jauh lintas kota." },
  { icon: "🔧", label: "Truk Mixer Beton", desc: "Kendaraan pengangkut beton siap pakai (readymix). Risiko kerusakan tinggi akibat beban berat dan operasional intensif." },
  { icon: "🚐", label: "Pickup & Light Truck", desc: "Kendaraan niaga ringan untuk pengiriman barang, sayur-mayur, dan usaha kecil menengah di pasar lokal Yogyakarta." },
  { icon: "⛏️", label: "Kendaraan Alat Berat", desc: "Excavator, bulldozer, forklift, dan kendaraan proyek non-jalan raya. Membutuhkan polis khusus contractor's plant & machinery." },
  { icon: "🚌", label: "Bus & Angkutan Umum", desc: "Bus pariwisata, angkutan kota, dan shuttle. Yogyakarta sebagai kota wisata memiliki armada angkutan yang besar." },
];

const risikoKhusus = [
  { icon: "⚠️", label: "Beban Kerja Ekstrem", desc: "Kendaraan niaga beroperasi jauh lebih intensif dari kendaraan pribadi — risiko kerusakan mesin dan komponen jauh lebih tinggi." },
  { icon: "🛣️", label: "Rute Berisiko", desc: "Jalanan proyek, tambang, dan medan berat meningkatkan risiko kecelakaan, terguling, dan kerusakan body kendaraan." },
  { icon: "💰", label: "Nilai Kendaraan Tinggi", desc: "Dump truk baru berharga Rp 500 juta – 2 miliar. Tanpa asuransi, satu kecelakaan bisa mengancam kelangsungan bisnis." },
  { icon: "👷", label: "Tanggung Jawab Pihak Ketiga", desc: "Kecelakaan kendaraan berat berpotensi menyebabkan kerugian besar pada pihak ketiga — wajib dilindungi dengan TPL." },
];

const dokumenDibutuhkan = [
  "STNK asli kendaraan",
  "BPKB asli (untuk kendaraan atas nama perusahaan: akta pendirian)",
  "Foto kendaraan tampak depan, belakang, kiri, kanan",
  "Data spesifikasi kendaraan (tahun, merk, tipe, kapasitas muatan)",
  "KTP / NPWP pemilik atau penanggung jawab perusahaan",
];

export default function DumpTrukPage() {
  return (
    <KendaraanLayout breadcrumbs={[
      { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
      { label: "Dump Truk & Kendaraan Niaga" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">🚛</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-kendaraan" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Kendaraan</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Kendaraan Niaga · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Dump Truk<br /><em className="not-italic text-gold">& Kendaraan Niaga</em><br />di Yogyakarta
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Kendaraan niaga adalah aset utama bisnis Anda. Satu unit dump truk rusak bisa menghentikan seluruh operasional proyek. Lindungi armada niaga Anda dengan polis yang tepat dan premi yang kompetitif.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#jenis" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Jenis Kendaraan →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"All Risk",lbl:"& TLO Tersedia"},{num:"B2B",lbl:"Layanan Korporasi"},{num:"Gratis",lbl:"Konsultasi & Survei"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* JENIS KENDARAAN */}
      <section id="jenis" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cakupan Kendaraan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Kendaraan Niaga Apa<br />yang Bisa Diasuransikan?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {jenisKendaraan.map(j=>(
            <div key={j.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{j.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{j.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{j.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RISIKO KHUSUS */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Kenapa Penting?</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Risiko Kendaraan Niaga<br />Jauh Lebih Tinggi</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {risikoKhusus.map(r=>(
            <div key={r.label} className="bg-cream rounded-card p-6 border border-black/6">
              <div className="text-2xl mb-2">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{r.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-3xl mx-auto bg-navy rounded-xl p-6 text-white">
          <div className="font-heading text-gold text-sm font-semibold mb-2">💡 Rekomendasi dari Pak Rio</div>
          <p className="text-xs leading-relaxed text-white/75">
            Untuk kendaraan niaga yang digunakan operasional harian, Yanti sarankan <strong className="text-gold">All Risk + perluasan Tanggung Jawab Pihak Ketiga (TPL)</strong>. Jika kendaraan sudah berusia di atas 8 tahun dan harga pasarnya rendah, TLO bisa menjadi pilihan ekonomis yang masuk akal.
          </p>
        </div>
      </section>

      {/* DOKUMEN */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Persyaratan</div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy mb-4">Dokumen yang<br />Dibutuhkan</h2>
            <p className="text-sm leading-relaxed text-[#64748B] mb-5">Proses pengajuan asuransi kendaraan niaga cukup mudah. Siapkan dokumen berikut dan kami bantu prosesnya.</p>
            <ul className="flex flex-col gap-3">
              {dokumenDibutuhkan.map(d=>(
                <li key={d} className="flex gap-2.5 text-sm text-navy2">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>{d}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy rounded-card p-7 text-white">
            <div className="text-4xl mb-4 text-center">🤝</div>
            <div className="font-heading text-gold text-base font-semibold text-center mb-3">Layanan Korporasi</div>
            <p className="text-xs leading-relaxed text-white/75 text-center mb-5">Punya lebih dari 3 unit kendaraan niaga? Kami melayani pengurusan polis korporasi dengan harga lebih efisien dan pengelolaan terpusat.</p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="block text-center bg-gold text-navy py-3 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">💬 Diskusi Kebutuhan Armada</a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-kendaraan/mobil" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚗 Asuransi Mobil →</Link>
            <Link href="/asuransi-kendaraan/armada-fleet" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚐 Armada / Fleet →</Link>
            <Link href="/asuransi-kendaraan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Kendaraan</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Armada Berjalan,<br />Bisnis Tidak Boleh Berhenti</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis soal asuransi kendaraan niaga — kami bantu pilih produk terbaik sesuai jenis kendaraan dan anggaran Anda.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Kendaraan Niaga</a>
        </div>
      </section>
    </KendaraanLayout>
  );
}
