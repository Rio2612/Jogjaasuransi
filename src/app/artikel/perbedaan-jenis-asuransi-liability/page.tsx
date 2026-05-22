import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Perbedaan Public, Employer, dan Product Liability – Mana yang Anda Butuhkan? | Asuransi Jogja",
  description:
    "Penjelasan lengkap perbedaan public liability, employer liability, dan product liability. Panduan memilih asuransi tanggung jawab hukum yang tepat untuk bisnis Anda di Yogyakarta.",
  keywords:
    "perbedaan public liability employer liability, perbandingan asuransi liability, public vs employer liability, product liability vs public liability, jenis asuransi liability indonesia, memilih asuransi liability bisnis",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/perbedaan-jenis-asuransi-liability" },
  openGraph: {
    title: "Perbedaan Public, Employer & Product Liability – Panduan Memilih",
    url: "https://asuransijogja.biz.id/artikel/perbedaan-jenis-asuransi-liability",
  },
};

const perbandinganDetail = [
  {
    aspek: "Siapa yang dilindungi?",
    public: "Bisnis Anda dari tuntutan orang luar (tamu, pengunjung, warga sekitar)",
    employer: "Bisnis Anda dari tuntutan karyawan sendiri yang cedera/sakit akibat kerja",
    product: "Bisnis Anda dari tuntutan konsumen atas produk yang menyebabkan kerugian",
  },
  {
    aspek: "Di mana insiden terjadi?",
    public: "Di lokasi operasional bisnis Anda (gedung, area parkir, fasilitas umum)",
    employer: "Di tempat kerja maupun di lapangan saat menjalankan tugas",
    product: "Di mana pun konsumen menggunakan produk Anda — termasuk di rumah mereka",
  },
  {
    aspek: "Siapa pihak penggugat?",
    public: "Pihak ketiga: tamu hotel, pengunjung toko, warga sekitar, kontraktor tamu",
    employer: "Karyawan Anda sendiri atau keluarganya",
    product: "Konsumen produk Anda, bisa individu atau gugatan kolektif (class action)",
  },
  {
    aspek: "Apa yang dijamin?",
    public: "Biaya medis korban, ganti rugi properti, biaya pengacara, kompensasi",
    employer: "Gap di atas BPJS, biaya medis, ganti rugi cacat/meninggal, biaya hukum",
    product: "Biaya medis konsumen, ganti rugi kerugian, biaya recall, biaya hukum",
  },
  {
    aspek: "Dasar hukum utama",
    public: "KUHPerdata Pasal 1365 (perbuatan melawan hukum)",
    employer: "UU No.13/2003 Ketenagakerjaan + PP 44/2015 BPJS",
    product: "UU No.8/1999 Perlindungan Konsumen",
  },
  {
    aspek: "Wajib dimiliki?",
    public: "Direkomendasikan kuat; beberapa sektor diwajibkan kontrak",
    employer: "Sangat dianjurkan; wajib di sektor konstruksi dan industri berat",
    product: "Dianjurkan; wajib jika ekspor ke negara-negara tertentu (UE, AS)",
  },
];

const kombinasiRekomendasi = [
  {
    profil: "Hotel & Resort",
    icon: "🏨",
    kombinasi: ["Public Liability", "Employer Liability"],
    alasan: "Tamu yang cedera di fasilitas (public) + karyawan yang kecelakaan saat bekerja (employer). Bisnis dengan banyak pengunjung DAN banyak karyawan membutuhkan keduanya.",
    href: "/asuransi-liability/public-liability",
  },
  {
    profil: "Restoran & Katering",
    icon: "🍽️",
    kombinasi: ["Public Liability", "Product Liability"],
    alasan: "Pengunjung yang cedera di restoran (public) + konsumen yang keracunan produk makanan/katering (product). Risiko dari dua arah yang berbeda.",
    href: "/asuransi-liability/public-liability",
  },
  {
    profil: "Pabrik & Manufaktur",
    icon: "🏭",
    kombinasi: ["Employer Liability", "Product Liability", "Limbah B3"],
    alasan: "Karyawan yang kecelakaan (employer) + konsumen yang dirugikan produk cacat (product) + pencemaran lingkungan akibat proses produksi (B3). Proteksi terlengkap.",
    href: "/asuransi-liability/employer-liability",
  },
  {
    profil: "Kontraktor Konstruksi",
    icon: "🏗️",
    kombinasi: ["Public Liability", "Employer Liability"],
    alasan: "Warga sekitar yang terdampak konstruksi (public) + pekerja yang kecelakaan di lapangan (employer). Sektor dengan risiko fisik paling tinggi.",
    href: "/asuransi-liability/employer-liability",
  },
  {
    profil: "UMKM & Toko Online",
    icon: "📦",
    kombinasi: ["Product Liability"],
    alasan: "Konsumen yang dirugikan produk adalah risiko utama. Jika memiliki toko fisik, tambahkan Public Liability untuk pengunjung.",
    href: "/asuransi-liability/product-liability",
  },
  {
    profil: "Klinik & Rumah Sakit",
    icon: "🏥",
    kombinasi: ["Public Liability", "Employer Liability", "Product Liability"],
    alasan: "Pasien yang dirugikan layanan (public) + tenaga medis yang terpapar risiko kerja (employer) + produk/obat yang digunakan (product). Salah satu sektor paling kompleks.",
    href: "/asuransi-liability/public-liability",
  },
];

const manaYangPertama = [
  {
    pertanyaan: "Bisnis saya berinteraksi langsung dengan tamu/pelanggan di lokasi?",
    jawaban: "→ Prioritaskan Public Liability",
    icon: "🤝",
  },
  {
    pertanyaan: "Saya mempekerjakan karyawan dengan risiko kerja fisik?",
    jawaban: "→ Prioritaskan Employer Liability",
    icon: "👷",
  },
  {
    pertanyaan: "Saya memproduksi atau menjual produk fisik kepada konsumen?",
    jawaban: "→ Prioritaskan Product Liability",
    icon: "📦",
  },
  {
    pertanyaan: "Operasional saya menghasilkan limbah berbahaya?",
    jawaban: "→ Prioritaskan Liability Limbah B3",
    icon: "⚗️",
  },
];

export default function PerbedaanLiabilityPage() {
  return (
    <>
      <Header />
      <div className="pt-[68px]">

        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Perbedaan Jenis Asuransi Liability</span>
          </div>
        </div>

        {/* HERO */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 80% 40%, rgba(200,150,62,0.12) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              <span className="text-[0.5rem] text-gold">◆</span>Panduan Memilih · Asuransi Liability
            </div>
            <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.2] mb-4">
              Perbedaan Public, Employer,<br />dan <em className="not-italic text-gold">Product Liability</em> —<br />Mana yang Bisnis Anda Butuhkan?
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px]">
              Ketiga jenis asuransi ini sering tertukar — padahal masing-masing melindungi dari risiko yang sama sekali berbeda. Panduan ini membantu Anda memilih dengan tepat tanpa harus jadi ahli asuransi.
            </p>
            <div className="flex gap-6 mt-8 pt-6 border-t border-white/10 text-sm text-white/50">
              <span>📅 Diperbarui Mei 2025</span>
              <span>⏱️ 6 menit membaca</span>
            </div>
          </div>
        </section>

        {/* RINGKASAN CEPAT */}
        <section className="py-12 px-[5vw] bg-cream">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-4">Ringkasan Cepat</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🤝", jenis: "Public Liability", inti: "Melindungi dari tuntutan ORANG LAIN yang dirugikan di bisnis Anda", warna: "border-blue-200 bg-blue-50" },
                { icon: "👷", jenis: "Employer Liability", inti: "Melindungi dari tuntutan KARYAWAN Anda sendiri yang kecelakaan kerja", warna: "border-orange-200 bg-orange-50" },
                { icon: "📦", jenis: "Product Liability", inti: "Melindungi dari tuntutan KONSUMEN atas produk yang Anda jual/produksi", warna: "border-green-200 bg-green-50" },
              ].map((r) => (
                <div key={r.jenis} className={`rounded-card p-5 border ${r.warna}`}>
                  <div className="text-3xl mb-2">{r.icon}</div>
                  <div className="font-heading text-navy font-bold text-[0.95rem] mb-2">{r.jenis}</div>
                  <p className="text-xs leading-[1.7] text-[#64748B]">{r.inti}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TABEL PERBANDINGAN */}
        <section className="py-14 px-[5vw] bg-white">
          <div className="max-w-[900px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Perbandingan Detail</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-8">Tabel Perbandingan Lengkap<br />3 Jenis Liability</h2>
            <div className="overflow-x-auto rounded-card border border-black/8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-navy">
                    <th className="px-4 py-3 text-left text-gold2 font-heading font-semibold text-xs w-[22%]">Aspek</th>
                    <th className="px-4 py-3 text-left text-white font-heading font-semibold text-xs w-[26%]">🤝 Public Liability</th>
                    <th className="px-4 py-3 text-left text-white font-heading font-semibold text-xs w-[26%]">👷 Employer Liability</th>
                    <th className="px-4 py-3 text-left text-white font-heading font-semibold text-xs w-[26%]">📦 Product Liability</th>
                  </tr>
                </thead>
                <tbody>
                  {perbandinganDetail.map((p, i) => (
                    <tr key={p.aspek} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                      <td className="px-4 py-4 font-semibold text-navy text-xs border-r border-black/5 align-top">{p.aspek}</td>
                      <td className="px-4 py-4 text-[#64748B] leading-relaxed align-top border-r border-black/5">{p.public}</td>
                      <td className="px-4 py-4 text-[#64748B] leading-relaxed align-top border-r border-black/5">{p.employer}</td>
                      <td className="px-4 py-4 text-[#64748B] leading-relaxed align-top">{p.product}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PANDUAN CEPAT MEMILIH */}
        <section className="py-14 px-[5vw] bg-cream">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Panduan Cepat</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-6">Jawab 4 Pertanyaan Ini<br />untuk Menentukan Pilihan</h2>
            <div className="flex flex-col gap-3">
              {manaYangPertama.map((m) => (
                <div key={m.pertanyaan} className="bg-white rounded-card p-5 border border-black/6 flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{m.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-navy mb-1">{m.pertanyaan}</p>
                    <p className="text-sm text-gold font-bold">{m.jawaban}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-navy rounded-xl p-5">
              <p className="text-sm text-white/80 leading-relaxed">
                <strong className="text-gold">Jika lebih dari satu jawaban "ya"</strong>, bisnis Anda membutuhkan lebih dari satu jenis liability. Jangan kuatir — kombinasi polis seringkali lebih hemat dari membeli satu per satu.
              </p>
            </div>
          </div>
        </section>

        {/* REKOMENDASI PER SEKTOR */}
        <section className="py-14 px-[5vw] bg-white">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Rekomendasi per Sektor</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-8">Kombinasi Liability yang Tepat<br />untuk Setiap Jenis Bisnis</h2>
            <div className="flex flex-col gap-4">
              {kombinasiRekomendasi.map((k) => (
                <div key={k.profil} className="bg-cream rounded-card p-6 border border-black/6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{k.icon}</span>
                    <div className="flex-1">
                      <div className="font-heading text-navy font-bold text-[1rem] mb-2">{k.profil}</div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {k.kombinasi.map(tag => (
                          <span key={tag} className="bg-gold/10 border border-gold/20 text-navy text-xs px-2.5 py-1 rounded-full font-semibold">{tag}</span>
                        ))}
                      </div>
                      <p className="text-sm text-[#64748B] leading-relaxed">{k.alasan}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + INTERNAL LINKS */}
        <section className="py-14 px-[5vw] bg-navy">
          <div className="max-w-[750px] mx-auto text-center">
            <h2 className="font-heading text-white text-[clamp(1.5rem,2.5vw,2rem)] mb-3">Masih Bingung Harus Pilih yang Mana?</h2>
            <p className="text-white/70 text-sm max-w-[460px] mx-auto mb-8">Ceritakan jenis bisnis dan profil risiko Anda — kami bantu rekomendasikan kombinasi yang paling efisien secara biaya.</p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all mb-8">💬 Konsultasi Gratis</a>
            <div className="border-t border-white/10 pt-8 text-left">
              <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Pelajari Lebih Lanjut</div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/asuransi-liability/public-liability" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
                <Link href="/asuransi-liability/employer-liability" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
                <Link href="/asuransi-liability/product-liability" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">📦 Product Liability →</Link>
                <Link href="/asuransi-liability/limbah-b3" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">⚗️ Limbah B3 →</Link>
                <Link href="/artikel/cara-klaim-asuransi-liability" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">📋 Cara Klaim →</Link>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
