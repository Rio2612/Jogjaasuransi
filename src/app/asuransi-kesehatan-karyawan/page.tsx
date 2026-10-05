import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PenawaranKesehatanModal from "@/components/kesehatan/PenawaranKesehatanModal";
import { KONTAK } from "@/lib/data";

const URL = "https://asuransijogja.biz.id/asuransi-kesehatan-karyawan";

export const metadata: Metadata = {
  title: "Asuransi Kesehatan Karyawan Jogja – Paket, Cara Klaim & RS Rekanan",
  description:
    "Asuransi kesehatan karyawan untuk perusahaan di Yogyakarta (Simas Sehat Corporate, PT Asuransi Sinar Mas). Pilihan paket rawat inap & rawat jalan, cashless di RS rekanan Jogja. Minta penawaran gratis.",
  keywords:
    "asuransi kesehatan karyawan jogja, asuransi kesehatan corporate yogyakarta, asuransi karyawan jogja, simas sehat corporate, asuransi kesehatan kelompok jogja, rs rekanan asuransi jogja",
  alternates: { canonical: URL },
  openGraph: {
    title: "Asuransi Kesehatan Karyawan Jogja",
    description:
      "Biaya berobat karyawan ditanggung sesuai paket. Cashless di RS rekanan Jogja atau reimbursement. Minta penawaran gratis.",
    url: URL,
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
  },
};

const paketInap = [
  { plan: "IPS500", kamar: "Rp500 rb", icu: "Rp2,5 jt", rs: "Rp25,3 jt", besar: "Rp15,2 jt", kecil: "Rp3,8 jt", amb: "Rp510 rb" },
  { plan: "IPS750", kamar: "Rp750 rb", icu: "Rp3,75 jt", rs: "Rp37,5 jt", besar: "Rp22,5 jt", kecil: "Rp5,6 jt", amb: "Rp750 rb" },
  { plan: "IPS1000", kamar: "Rp1 jt", icu: "Rp5 jt", rs: "Rp50 jt", besar: "Rp30 jt", kecil: "Rp7,5 jt", amb: "Rp1 jt" },
];

const paketJalan = [
  { plan: "OPS45", umum: "Rp45 rb", spes: "Rp135 rb", obat: "Rp1,1 jt", lab: "Rp750 rb", total: "Rp3,6 jt" },
  { plan: "OPS70", umum: "Rp70 rb", spes: "Rp210 rb", obat: "Rp1,68 jt", lab: "Rp1,14 jt", total: "Rp5,6 jt" },
  { plan: "OPS100", umum: "Rp100 rb", spes: "Rp300 rb", obat: "Rp2,26 jt", lab: "Rp1,66 jt", total: "Rp8 jt" },
];

const rsRekanan = [
  { wilayah: "Kota Yogyakarta", rs: "Bethesda, Bethesda Lempuyangwangi, RS Mata Dr. YAP, Happyland Medical Center, Ludira Husada Tama, Panti Rapih, PKU Muhammadiyah Yogya, Siloam" },
  { wilayah: "Sleman", rs: "Hermina Yogya, JIH, Sardjito, Condong Catur, Gramedika 10, RS Islam PDHI, Panti Nugroho, Panti Rini, PKU Gamping, UGM, UII, Sadewa, Charitas Klepu, Sakina Idaman" },
  { wilayah: "Bantul", rs: "Nur Hidayah, PKU Muhammadiyah Bantul, Rajawali Citra, St. Elisabeth" },
  { wilayah: "Kulon Progo", rs: "Kharisma Paramedika" },
];

const faq = [
  { q: "Apakah semua karyawan harus di paket yang sama?", a: "Tidak selalu. Paket bisa dikelompokkan per golongan, misalnya staf dan manajer. Kami konfirmasikan ke asuransi sesuai kebutuhan Anda." },
  { q: "Kenapa premi tidak ditampilkan di sini?", a: "Premi bergantung pada jumlah peserta, komposisi pria/wanita/anak, dan ketentuan minimal peserta dari asuransi. Karena itu kami kirim penawaran khusus setelah menerima data perusahaan Anda." },
  { q: "Perlu surat rujukan untuk ke dokter spesialis?", a: "Umumnya perlu rujukan dokter umum. Pengecualian: dokter anak (di bawah 6 tahun), mata, kulit, kandungan (bukan kehamilan), tulang, dan THT." },
  { q: "Bisa ganti paket di tengah tahun?", a: "Bisa, premi tambahan dihitung prorata. Ketentuan rinci mengikuti polis." },
  { q: "Penyakit yang sudah ada sebelum daftar bagaimana?", a: "Untuk peserta baru, penyakit kronis yang sudah ada sebelumnya baru ditanggung setelah masa tunggu 12 bulan." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        {/* HERO */}
        <section className="bg-navy px-[5vw] py-14 text-white md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
              Asuransi Kesehatan Karyawan · Yogyakarta
            </p>
            <h1 className="font-heading text-3xl font-bold leading-tight md:text-5xl">
              Karyawan Sakit, Biaya Berobat Tidak Jadi Beban
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80">
              Asuransi kesehatan kelompok untuk perusahaan di Jogja. Biaya rawat inap dan rawat jalan
              karyawan, pasangan, dan anak ditanggung sesuai paket yang Anda pilih. Anggaran perusahaan
              jadi lebih mudah diperkirakan.
            </p>
            <div className="mt-7">
              <PenawaranKesehatanModal />
            </div>
          </div>
        </section>

        {/* DISCLAIMER PRODUK */}
        <section className="bg-cream px-[5vw] py-6">
          <p className="mx-auto max-w-4xl rounded-card border border-gold/40 bg-white px-4 py-3 text-sm text-[#475569]">
            <strong className="text-navy">Tentang produk:</strong> Simas Sehat Corporate diterbitkan oleh{" "}
            <strong>PT Asuransi Sinar Mas</strong>, yang mengembangkan produk ini sejak 1990. Asuransi Jogja
            membantu konsultasi dan pengajuan penawaran. Halaman ini hanya ringkasan; manfaat, syarat, dan
            pengecualian yang berlaku mengikuti polis.
          </p>
        </section>

        {/* APA ITU */}
        <section className="bg-white px-[5vw] py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-navy">Cara kerjanya, singkat saja</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { t: "1. Perusahaan memilih paket", d: "Ada dua bagian: rawat inap (menginap di RS) dan rawat jalan (berobat tanpa menginap)." },
                { t: "2. Premi dibayar per orang per tahun", d: "Besarnya bergantung pada paket, jumlah peserta, dan usia/jenis kelamin peserta." },
                { t: "3. Karyawan berobat", d: "Pakai kartu di RS rekanan (cashless), atau bayar dulu lalu klaim (reimbursement)." },
              ].map((x) => (
                <div key={x.t} className="rounded-card border border-black/10 bg-cream p-5">
                  <h3 className="font-heading font-bold text-navy">{x.t}</h3>
                  <p className="mt-2 text-sm text-[#475569]">{x.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-[#475569]">
              Angka di belakang nama paket menunjukkan besar manfaatnya. IPS1000 berarti biaya kamar
              maksimal Rp1.000.000 per hari. OPS100 berarti dokter umum maksimal Rp100.000 per kunjungan.
            </p>
          </div>
        </section>

        {/* DITANGGUNG */}
        <section className="bg-cream px-[5vw] py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-navy">Apa saja yang ditanggung?</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-card bg-white p-5">
                <h3 className="font-heading font-bold text-navy">Rawat inap</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#475569]">
                  <li>Kamar, ICU, operasi, dokter, obat, dan tes penunjang</li>
                  <li>Ambulans</li>
                  <li>Perawatan 30 hari sebelum dan 30 hari sesudah menginap</li>
                  <li>Operasi kecil tanpa menginap (one day surgery)</li>
                  <li>Batas klaim per tahun tidak terbatas</li>
                </ul>
              </div>
              <div className="rounded-card bg-white p-5">
                <h3 className="font-heading font-bold text-navy">Rawat jalan</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#475569]">
                  <li>Dokter umum dan spesialis</li>
                  <li>Obat resep, lab, dan tes diagnostik atas permintaan dokter</li>
                  <li>Fisioterapi</li>
                  <li>Imunisasi dasar anak (untuk anak yang diasuransikan)</li>
                  <li>Vitamin hanya jika diperlukan medis dan dianjurkan dokter; suplemen tidak ditanggung</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#475569]">Berlaku di seluruh dunia, 24 jam sehari.</p>
          </div>
        </section>

        {/* PAKET */}
        <section id="paket" className="scroll-mt-24 bg-white px-[5vw] py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-navy">Contoh pilihan paket</h2>
            <p className="mt-2 text-sm text-[#475569]">
              Tersedia juga paket lain (rawat inap IPS300, IPS1200, IPS1500; rawat jalan OPS30, OPS90, OPS125).
            </p>

            <h3 className="mt-6 font-heading font-bold text-navy">Rawat inap (batas per perawatan)</h3>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    {["Paket", "Kamar/hari", "ICU/hari", "Biaya RS", "Operasi besar", "Operasi kecil", "Ambulans"].map((h) => (
                      <th key={h} className="px-3 py-2 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paketInap.map((p) => (
                    <tr key={p.plan} className="border-b border-black/10">
                      <td className="px-3 py-2 font-bold text-navy">{p.plan}</td>
                      <td className="px-3 py-2">{p.kamar}</td>
                      <td className="px-3 py-2">{p.icu}</td>
                      <td className="px-3 py-2">{p.rs}</td>
                      <td className="px-3 py-2">{p.besar}</td>
                      <td className="px-3 py-2">{p.kecil}</td>
                      <td className="px-3 py-2">{p.amb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-8 font-heading font-bold text-navy">Rawat jalan</h3>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    {["Paket", "Dokter umum/kunjungan", "Spesialis/kunjungan", "Obat/tahun", "Lab/tahun", "Batas total/tahun"].map((h) => (
                      <th key={h} className="px-3 py-2 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paketJalan.map((p) => (
                    <tr key={p.plan} className="border-b border-black/10">
                      <td className="px-3 py-2 font-bold text-navy">{p.plan}</td>
                      <td className="px-3 py-2">{p.umum}</td>
                      <td className="px-3 py-2">{p.spes}</td>
                      <td className="px-3 py-2">{p.obat}</td>
                      <td className="px-3 py-2">{p.lab}</td>
                      <td className="px-3 py-2">{p.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-card bg-cream p-5 text-center">
              <p className="font-heading font-bold text-navy">Berapa premi untuk perusahaan Anda?</p>
              <p className="mx-auto mt-1 max-w-xl text-sm text-[#475569]">
                Premi bergantung pada jumlah peserta dan ada ketentuan minimal dari asuransi. Kirim data
                perusahaan Anda, kami siapkan penawarannya.
              </p>
              <div className="mt-4">
                <PenawaranKesehatanModal label="Minta Penawaran Premi" />
              </div>
            </div>
          </div>
        </section>

        {/* KLAIM */}
        <section id="klaim" className="scroll-mt-24 bg-cream px-[5vw] py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-navy">Cashless atau bayar dulu?</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-card bg-white p-5">
                <h3 className="font-heading font-bold text-navy">Cashless (RS rekanan)</h3>
                <p className="mt-2 text-sm text-[#475569]">
                  Tunjukkan kartu peserta di RS rekanan, tagihan diselesaikan asuransi. Jika ada biaya di
                  luar jaminan, selisihnya dibayar sendiri di tempat.
                </p>
              </div>
              <div className="rounded-card bg-white p-5">
                <h3 className="font-heading font-bold text-navy">Reimbursement</h3>
                <p className="mt-2 text-sm text-[#475569]">
                  Bayar dulu, lalu kirim kuitansi asli dan berkas klaim. Dana cair 14 hari kerja (rawat
                  inap) atau 7 hari kerja (rawat jalan) setelah berkas lengkap. Berkas paling lambat
                  dikirim 90 hari setelah tanggal kuitansi.
                </p>
              </div>
            </div>
            <h3 className="mt-6 font-heading font-bold text-navy">Kenapa tagihan kadang melebihi jaminan?</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#475569]">
              <li>Biaya non-medis (telepon, koran, dan sejenisnya) tidak ditanggung</li>
              <li>Naik kelas kamar di tengah perawatan</li>
              <li>Hasil pemeriksaan akhir ternyata penyakit yang dikecualikan polis</li>
              <li>Batas manfaat peserta sudah habis</li>
            </ul>
          </div>
        </section>

        {/* RS */}
        <section id="rs-rekanan" className="scroll-mt-24 bg-white px-[5vw] py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-navy">RS rekanan di Jogja dan sekitarnya</h2>
            <div className="mt-5 space-y-3">
              {rsRekanan.map((r) => (
                <div key={r.wilayah} className="rounded-card border border-black/10 bg-cream p-4">
                  <h3 className="font-heading text-sm font-bold text-navy">{r.wilayah}</h3>
                  <p className="mt-1 text-sm text-[#475569]">{r.rs}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#475569]">
              Tersedia juga satu klinik dan dua apotek rekanan. Secara nasional ada sekitar 430 RS rekanan.
              Daftar bisa berubah, jadi konfirmasi dulu sebelum berobat.
            </p>
          </div>
        </section>

        {/* SYARAT */}
        <section className="bg-cream px-[5vw] py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-navy">Syarat yang perlu diketahui</h2>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[#475569]">
              <li>Usia karyawan dan pasangan 18–60 tahun; anak maksimal 3 orang, usia 0–25 tahun</li>
              <li>Penyakit kronis yang sudah ada sebelum daftar (peserta baru) ditanggung setelah masa tunggu 12 bulan</li>
              <li>Ada ketentuan jumlah minimal peserta dari asuransi</li>
              <li>Syarat dan pengecualian lengkap mengikuti polis</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white px-[5vw] py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-navy">Pertanyaan yang sering diajukan</h2>
            <div className="mt-5 divide-y divide-black/10">
              {faq.map((f) => (
                <details key={f.q} className="group py-3">
                  <summary className="cursor-pointer list-none font-semibold text-navy">{f.q}</summary>
                  <p className="mt-2 text-sm text-[#475569]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA AKHIR */}
        <section className="bg-navy px-[5vw] py-12 text-center text-white">
          <h2 className="font-heading text-2xl font-bold">Ingin tahu paket yang cocok untuk perusahaan Anda?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/80">
            Kirim jumlah karyawan dan paket yang diminati. Penawaran dikirim via WhatsApp atau email.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <PenawaranKesehatanModal />
            <Link
              href={`https://wa.me/${KONTAK.wa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-white/25 px-6 py-3 text-sm font-bold text-white no-underline hover:border-gold/60"
            >
              Tanya via WhatsApp
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
                  }
