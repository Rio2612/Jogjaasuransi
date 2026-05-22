import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cara Klaim Asuransi Liability: Panduan Langkah demi Langkah | Asuransi Jogja",
  description:
    "Panduan lengkap cara mengajukan klaim asuransi liability di Indonesia. Dokumen yang dibutuhkan, langkah pelaporan, hingga tips agar klaim tidak ditolak. Konsultasi gratis.",
  keywords:
    "cara klaim asuransi liability, prosedur klaim public liability, dokumen klaim asuransi tanggung jawab, klaim employer liability, klaim liability ditolak, proses klaim asuransi bisnis jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-liability" },
  openGraph: {
    title: "Cara Klaim Asuransi Liability: Panduan Lengkap",
    url: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-liability",
  },
};

const langkahKlaim = [
  {
    no: "01",
    judul: "Jangan Akui Kesalahan Dulu",
    isi: "Ini langkah paling kritis dan paling sering dilanggar. Saat insiden terjadi, jangan pernah mengatakan 'maaf, itu salah saya' atau mengakui kelalaian secara verbal maupun tertulis kepada pihak yang dirugikan — sebelum berkomunikasi dengan perusahaan asuransi. Pengakuan spontan bisa melemahkan posisi hukum Anda secara signifikan.",
    warning: "Hindari: menandatangani dokumen apapun dari pihak penggugat sebelum konsultasi dengan insurer.",
  },
  {
    no: "02",
    judul: "Dokumentasikan Insiden Segera",
    isi: "Dalam 1–2 jam setelah insiden, kumpulkan semua bukti: foto/video kondisi TKP dari berbagai sudut, identitas dan nomor telepon saksi mata, data korban (nama, alamat, kondisi cedera), dan kondisi area/peralatan yang terlibat. Semakin cepat dokumentasi dilakukan, semakin kuat posisi Anda.",
    warning: "Jangan membersihkan atau mengubah kondisi TKP sebelum dokumentasi lengkap.",
  },
  {
    no: "03",
    judul: "Laporkan ke Broker/Agen dalam 3×24 Jam",
    isi: "Hampir semua polis liability mewajibkan pelaporan awal dalam 3×24 jam setelah insiden diketahui. Hubungi broker atau agen asuransi Anda via WhatsApp atau telepon — cukup laporan awal, detail lengkap menyusul. Keterlambatan pelaporan adalah alasan umum penolakan klaim.",
    warning: "Batas waktu pelaporan awal biasanya 3×24 jam — cek polis Anda.",
  },
  {
    no: "04",
    judul: "Siapkan Dokumen Klaim",
    isi: "Setelah laporan awal diterima, insurer akan meminta paket dokumen lengkap. Siapkan secepat mungkin karena kelengkapan dokumen menentukan kecepatan proses klaim. Daftar dokumen standar ada di bagian bawah artikel ini.",
    warning: "Dokumen tidak lengkap adalah penyebab klaim berlarut-larut nomor satu.",
  },
  {
    no: "05",
    judul: "Proses Investigasi oleh Loss Adjuster",
    isi: "Insurer akan menugaskan loss adjuster independen untuk menginvestigasi klaim. Kooperasilah sepenuhnya — berikan akses ke lokasi, dokumen operasional, dan personel yang relevan. Loss adjuster bukan musuh; tugasnya menilai klaim secara objektif.",
    warning: "Jangan sembunyikan informasi dari loss adjuster — ini bisa dianggap fraud.",
  },
  {
    no: "06",
    judul: "Negosiasi dan Pembayaran",
    isi: "Setelah investigasi selesai, insurer akan menentukan besaran ganti rugi berdasarkan fakta dan ketentuan polis. Jika ada sengketa nilai, Anda berhak mengajukan keberatan dengan bukti pendukung. Proses pembayaran biasanya 14–30 hari kerja setelah persetujuan.",
    warning: "Libatkan broker Anda dalam negosiasi — mereka tahu cara mengadvokasi kepentingan Anda.",
  },
];

const dokumenStandar = [
  {
    kategori: "Dokumen Umum (Semua Jenis Liability)",
    items: [
      "Formulir klaim yang diisi lengkap (disediakan insurer)",
      "Salinan polis asuransi liability yang berlaku",
      "Laporan kronologi insiden — tertulis, detail, bertanda tangan",
      "Foto dan/atau video dokumentasi TKP",
      "Data identitas pihak ketiga yang mengklaim kerugian",
      "Laporan polisi (jika insiden melibatkan pelanggaran hukum)",
    ],
  },
  {
    kategori: "Dokumen Tambahan — Public Liability",
    items: [
      "Rekam medis dan tagihan rumah sakit korban",
      "Surat keterangan dokter tentang diagnosis dan prognosis cedera",
      "Bukti kepemilikan properti yang rusak (jika ada kerusakan barang)",
      "Daftar saksi mata beserta pernyataan tertulis mereka",
      "Rekaman CCTV lokasi kejadian (jika tersedia)",
    ],
  },
  {
    kategori: "Dokumen Tambahan — Employer Liability",
    items: [
      "Laporan kecelakaan kerja internal (form K3 perusahaan)",
      "Laporan Jamsostek/BPJS Ketenagakerjaan tentang insiden",
      "Kontrak kerja karyawan yang bersangkutan",
      "Catatan medis dan surat rujukan dari dokter perusahaan",
      "Bukti pembayaran gaji dan THR (untuk klaim kehilangan penghasilan)",
      "Sertifikat pelatihan K3 karyawan (jika ada)",
    ],
  },
  {
    kategori: "Dokumen Tambahan — Product Liability",
    items: [
      "Sampel produk yang menjadi objek klaim (jika memungkinkan)",
      "Sertifikat BPOM/SNI/izin edar produk",
      "Catatan produksi batch produk yang bermasalah",
      "Bukti pembelian produk oleh konsumen (nota/invoice)",
      "Hasil uji laboratorium produk (jika sudah ada)",
    ],
  },
];

const alasanDitolak = [
  {
    icon: "⏰",
    alasan: "Terlambat Melaporkan",
    penjelasan: "Melewati batas waktu pelaporan yang tercantum di polis (biasanya 3×24 jam untuk laporan awal, 14–30 hari untuk klaim formal).",
    solusi: "Segera hubungi broker setelah insiden, bahkan jika detail belum lengkap.",
  },
  {
    icon: "📄",
    alasan: "Dokumen Tidak Lengkap",
    penjelasan: "Klaim terhenti karena tertanggung tidak bisa menyediakan dokumen yang diminta dalam batas waktu yang ditentukan.",
    solusi: "Simpan semua dokumen operasional bisnis secara teratur — kontrak, izin, laporan K3, dsb.",
  },
  {
    icon: "🚫",
    alasan: "Insiden Termasuk Pengecualian",
    penjelasan: "Kejadian yang diklaim ternyata masuk kategori pengecualian dalam polis — misalnya tindakan disengaja, perang, atau risiko yang secara eksplisit dikecualikan.",
    solusi: "Baca dan pahami klausul pengecualian polis sebelum insiden terjadi.",
  },
  {
    icon: "💬",
    alasan: "Pengakuan Kesalahan Sepihak",
    penjelasan: "Tertanggung sudah mengakui kelalaian atau membuat perjanjian ganti rugi dengan pihak ketiga tanpa persetujuan insurer.",
    solusi: "Jangan buat pernyataan atau perjanjian apapun tanpa konsultasi insurer terlebih dahulu.",
  },
  {
    icon: "📋",
    alasan: "Aktivitas di Luar Cakupan Polis",
    penjelasan: "Insiden terjadi dalam konteks kegiatan bisnis yang tidak didaftarkan atau tidak tercakup dalam deskripsi usaha di polis.",
    solusi: "Pastikan deskripsi usaha dan lingkup operasi di polis selalu diperbarui jika ada perubahan.",
  },
];

export default function CaraKlaimLiabilityPage() {
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
            <span className="text-navy font-semibold">Cara Klaim Asuransi Liability</span>
          </div>
        </div>

        {/* HERO */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 80% 40%, rgba(200,150,62,0.12) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              <span className="text-[0.5rem] text-gold">◆</span>Panduan Klaim · Asuransi Liability
            </div>
            <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.2] mb-4">
              Cara Klaim Asuransi Liability:<br /><em className="not-italic text-gold">Panduan Langkah demi Langkah</em><br />agar Tidak Ditolak
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px]">
              Banyak klaim liability yang gagal bukan karena risikonya tidak ter-cover — melainkan karena prosedur yang salah di menit-menit pertama setelah insiden. Panduan ini memastikan Anda tidak melakukan kesalahan fatal itu.
            </p>
            <div className="flex gap-6 mt-8 pt-6 border-t border-white/10 text-sm text-white/50">
              <span>📅 Diperbarui Mei 2025</span>
              <span>⏱️ 7 menit membaca</span>
              <span>✅ 6 langkah klaim</span>
            </div>
          </div>
        </section>

        {/* PERINGATAN PENTING */}
        <section className="py-8 px-[5vw] bg-red-50 border-b border-red-100">
          <div className="max-w-[750px] mx-auto flex gap-4 items-start">
            <span className="text-3xl flex-shrink-0">⚠️</span>
            <div>
              <div className="font-heading text-red-800 font-bold text-[1rem] mb-1">Hal Pertama yang Harus Anda Lakukan Saat Insiden Terjadi</div>
              <p className="text-sm leading-[1.8] text-red-700">
                <strong>JANGAN akui kesalahan</strong>, JANGAN tanda tangani apapun, dan <strong>SEGERA hubungi broker/agen asuransi Anda</strong> — bahkan sebelum menghubungi pengacara. Tiga tindakan ini di 30 menit pertama menentukan 80% keberhasilan klaim Anda.
              </p>
            </div>
          </div>
        </section>

        {/* 6 LANGKAH */}
        <section className="py-14 px-[5vw] bg-white">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Prosedur Klaim</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-10">6 Langkah Klaim Asuransi Liability<br />yang Benar</h2>
            <div className="flex flex-col gap-6">
              {langkahKlaim.map((l) => (
                <div key={l.no} className="grid grid-cols-[56px_1fr] gap-5 items-start">
                  <div className="bg-navy rounded-xl h-14 w-14 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-gold font-bold text-lg">{l.no}</span>
                  </div>
                  <div className="bg-cream rounded-card p-6 border border-black/6">
                    <div className="font-heading text-navy font-bold text-[1rem] mb-2">{l.judul}</div>
                    <p className="text-base leading-[1.8] text-[#64748B] mb-3">{l.isi}</p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800">
                      ⚡ {l.warning}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOKUMEN */}
        <section className="py-14 px-[5vw] bg-cream">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Dokumen Klaim</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-3">Dokumen yang Dibutuhkan<br />untuk Setiap Jenis Liability</h2>
            <p className="text-base text-[#64748B] mb-8">Siapkan dokumen-dokumen ini jauh sebelum insiden terjadi — jangan tunggu sampai dibutuhkan mendadak.</p>
            <div className="flex flex-col gap-5">
              {dokumenStandar.map((d) => (
                <div key={d.kategori} className="bg-white rounded-card border border-black/7 overflow-hidden">
                  <div className="bg-navy px-5 py-3">
                    <div className="font-heading text-gold2 font-semibold text-sm">{d.kategori}</div>
                  </div>
                  <ul className="p-5 flex flex-col gap-2">
                    {d.items.map((item) => (
                      <li key={item} className="flex gap-3 items-start text-sm text-[#64748B] leading-relaxed">
                        <span className="text-green-600 flex-shrink-0 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gold/8 border border-gold/20 rounded-xl p-5">
              <p className="text-sm text-navy2 leading-relaxed">
                <strong className="text-gold">💡 Tips:</strong> Buat folder khusus (fisik dan digital) untuk dokumen-dokumen ini. Ketika insiden terjadi, kondisi mental Anda sedang tertekan — folder siap pakai akan menghemat waktu dan meminimalkan kesalahan.
              </p>
            </div>
          </div>
        </section>

        {/* ALASAN KLAIM DITOLAK */}
        <section className="py-14 px-[5vw] bg-white">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Hindari Ini</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-8">5 Alasan Utama Klaim Liability<br />Ditolak Perusahaan Asuransi</h2>
            <div className="flex flex-col gap-4">
              {alasanDitolak.map((a) => (
                <div key={a.alasan} className="bg-cream rounded-card p-6 border border-black/6 grid grid-cols-[44px_1fr] gap-4 items-start">
                  <span className="text-3xl">{a.icon}</span>
                  <div>
                    <div className="font-heading text-navy font-bold text-[0.95rem] mb-1">{a.alasan}</div>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-2">{a.penjelasan}</p>
                    <div className="text-xs text-green-700 font-semibold">✅ Solusi: {a.solusi}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-14 px-[5vw] bg-cream">
          <div className="max-w-[750px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Timeline Klaim</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-8">Berapa Lama Proses Klaim<br />Asuransi Liability?</h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/20" />
              {[
                { waktu: "Hari 1", label: "Insiden terjadi", detail: "Dokumentasi, hubungi broker, laporan awal" },
                { waktu: "Hari 1–3", label: "Laporan awal ke insurer", detail: "Insurer menerima notifikasi, membuka file klaim" },
                { waktu: "Hari 3–7", label: "Pengiriman dokumen lengkap", detail: "Tertanggung mengumpulkan dan mengirim semua dokumen" },
                { waktu: "Hari 7–21", label: "Investigasi loss adjuster", detail: "Survei lokasi, wawancara, review dokumen" },
                { waktu: "Hari 21–45", label: "Keputusan klaim", detail: "Insurer menyampaikan keputusan: disetujui / negosiasi / ditolak" },
                { waktu: "Hari 45–75", label: "Pembayaran", detail: "Transfer ganti rugi kepada tertanggung atau langsung ke pihak ketiga" },
              ].map((t, i) => (
                <div key={i} className="grid grid-cols-[48px_1fr] gap-4 mb-6 last:mb-0 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gold border-2 border-white z-10 mt-1" />
                  </div>
                  <div className="pb-2">
                    <div className="text-xs font-bold text-gold tracking-widest uppercase mb-0.5">{t.waktu}</div>
                    <div className="font-heading text-navy font-semibold text-[0.95rem]">{t.label}</div>
                    <p className="text-sm text-[#64748B] mt-0.5">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-navy rounded-xl p-5">
              <p className="text-sm text-white/80 leading-relaxed">
                <strong className="text-gold">Catatan:</strong> Timeline di atas untuk klaim tanpa sengketa. Jika ada gugatan hukum yang masuk ke pengadilan, proses bisa memakan waktu 3–18 bulan. Biaya pembelaan hukum selama proses berlangsung tetap ditanggung polis.
              </p>
            </div>
          </div>
        </section>

        {/* CTA + INTERNAL LINKS */}
        <section className="py-14 px-[5vw] bg-white">
          <div className="max-w-[750px] mx-auto">
            <div className="bg-gold/6 border border-gold/20 rounded-[20px] p-8 text-center mb-8">
              <h2 className="font-heading text-navy text-[1.4rem] mb-3">Belum Punya Asuransi Liability?</h2>
              <p className="text-base text-[#64748B] max-w-[460px] mx-auto mb-6">Jangan tunggu sampai ada insiden. Konsultasi gratis — kami bantu pilih polis yang tepat dan pastikan proses klaim mudah bila dibutuhkan.</p>
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Gratis via WhatsApp</a>
            </div>

            <div className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Artikel & Produk Terkait</div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
              <Link href="/asuransi-liability/employer-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
              <Link href="/asuransi-liability/product-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📦 Product Liability →</Link>
              <Link href="/artikel/contoh-kasus-gugatan-liability-bisnis" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚖️ Contoh Kasus Gugatan →</Link>
              <Link href="/asuransi-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Liability</Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
