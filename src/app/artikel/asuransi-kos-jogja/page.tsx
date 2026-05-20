import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rumah Kos Anda Belum Diasuransikan? Ini Risikonya yang Sering Diabaikan Pemilik Kos di Jogja",
  description:
    "Panduan lengkap asuransi kos-kosan di Yogyakarta. Pelajari risiko nyata pemilik kos, jenis perlindungan yang tepat, cara klaim, dan estimasi premi. Konsultasi gratis dengan konsultan lokal.",
  keywords:
    "asuransi kos jogja, asuransi kos-kosan yogyakarta, asuransi kebakaran kos sleman, proteksi properti kos jogja, asuransi bangunan kos",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/asuransi-kos-jogja" },
  openGraph: {
    title: "Rumah Kos Anda Belum Diasuransikan? Ini Risikonya yang Sering Diabaikan Pemilik Kos di Jogja",
    description:
      "Panduan lengkap asuransi kos-kosan di Yogyakarta. Risiko nyata, jenis perlindungan, cara klaim, estimasi premi.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-kos-jogja",
    type: "article",
  },
};

const schemaArtikel = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Rumah Kos Anda Belum Diasuransikan? Ini Risikonya yang Sering Diabaikan Pemilik Kos di Jogja",
  description:
    "Panduan lengkap asuransi kos-kosan di Yogyakarta untuk pemilik properti pasif.",
  url: "https://asuransijogja.biz.id/artikel/asuransi-kos-jogja",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  author: { "@type": "Person", "name": "Rio MD" },
  publisher: {
    "@type": "Organization",
    "name": "Asuransi Jogja",
    "url": "https://asuransijogja.biz.id",
  },
  mainEntityOfPage: "https://asuransijogja.biz.id/artikel/asuransi-kos-jogja",
};

export default function ArtikelAsuransiKosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }}
      />

      {/* HERO */}
      <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 85% 45%, rgba(200,150,62,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-gold/80 mb-4 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline text-white/50">
              Beranda
            </Link>
            <span className="text-gold/40">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline text-white/50">
              Artikel
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold2 font-semibold">Asuransi Kos Jogja</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>
            Properti · Panduan Pemilik Kos
          </div>

          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.18] mb-5">
            Rumah Kos Anda Belum Diasuransikan?{" "}
            <em className="not-italic text-gold">
              Ini Risikonya yang Sering Diabaikan
            </em>{" "}
            Pemilik Kos di Jogja
          </h1>

          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>✍️ Rio MD – Konsultan Asuransi Kerugian</span>
            <span>·</span>
            <span>⏱ 8 menit baca</span>
          </div>
        </div>
      </section>

      {/* ARTIKEL BODY */}
      <article className="py-16 px-[5vw] bg-white">
        <div className="max-w-[780px] mx-auto">

          {/* INTRO */}
          <p className="text-lg leading-[1.85] text-[#475569] mb-6">
            Yogyakarta adalah kota yang tidak pernah kehabisan mahasiswa. Setiap tahun, puluhan ribu
            pelajar dari seluruh Indonesia datang ke kota ini untuk menimba ilmu di UGM, UNY, UII,
            dan ratusan kampus lainnya. Konsekuensinya? Bisnis kos-kosan di Jogja adalah salah satu
            bisnis properti pasif paling menjanjikan di Pulau Jawa.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Namun ada satu hal yang sering luput dari perhatian para pemilik kos: <strong className="text-navy">proteksi atas
            bangunan itu sendiri.</strong> Banyak pemilik kos yang sudah sangat cermat dalam memilih
            kontraktor, menentukan harga sewa, atau memasang CCTV — tapi lupa bahwa satu insiden
            kebakaran saja bisa menghapus nilai aset puluhan hingga ratusan juta rupiah dalam
            hitungan jam.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Artikel ini ditulis khusus untuk Anda yang memiliki atau sedang merencanakan bisnis
            kos-kosan di Yogyakarta. Kami akan membahas risiko nyata, jenis asuransi yang tepat,
            cara kerja klaim, dan berapa kira-kira premi yang perlu Anda siapkan.
          </p>

          {/* SECTION 1 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Kenapa Kos-kosan di Jogja Lebih Berisiko dari yang Anda Kira
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Sebagian besar pemilik kos menganggap risiko kerusakan bangunan itu kecil karena
            bangunan terlihat kokoh. Padahal ada beberapa faktor risiko spesifik yang melekat pada
            properti kos-kosan di Yogyakarta:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                ico: "⚡",
                judul: "Beban Listrik Berlebih",
                isi: "Puluhan penghuni yang setiap harinya menggunakan AC, laptop, charger, dan peralatan elektronik lain secara bersamaan menciptakan risiko korsleting yang sangat tinggi. Ini adalah penyebab kebakaran nomor satu pada bangunan kos di perkotaan.",
              },
              {
                ico: "🌊",
                judul: "Banjir di Kawasan Padat",
                isi: "Beberapa kawasan kos favorit mahasiswa di Jogja — seperti sekitar Seturan, Demangan, Gejayan, dan area bantaran sungai — rentan terhadap banjir saat curah hujan tinggi. Kerusakan akibat air bisa merembet ke instalasi, dinding, hingga pondasi.",
              },
              {
                ico: "🌋",
                judul: "Risiko Gempa Bumi",
                isi: "Yogyakarta masih dalam zona aktif seismik. Gempa 2006 membuktikan betapa cepatnya bangunan bisa runtuh. Bangunan kos yang sudah berumur lebih dari 10 tahun perlu mendapat perhatian khusus soal risiko ini.",
              },
              {
                ico: "🔥",
                judul: "Kebakaran dari Penghuni",
                isi: "Kompor, lilin, atau rokok yang tidak dimatikan dengan benar oleh penghuni bisa berujung pada kebakaran. Sebagai pemilik, Anda bertanggung jawab atas bangunan — terlepas siapa yang menjadi penyebabnya.",
              },
              {
                ico: "💧",
                judul: "Kebocoran dan Rembesan",
                isi: "Kos dengan banyak kamar mandi menghadapi risiko kebocoran pipa yang lebih tinggi. Kerusakan struktural akibat air yang merembes perlahan bisa sangat mahal jika dibiarkan tanpa perlindungan.",
              },
              {
                ico: "🏚️",
                judul: "Kerusakan oleh Penghuni",
                isi: "Meskipun bukan risiko utama dalam polis standar, beberapa produk menawarkan perluasan untuk kerusakan akibat penghuni (tenant's liability) yang bisa menjadi nilai tambah bagi pemilik kos.",
              },
            ].map((r) => (
              <div
                key={r.judul}
                className="bg-cream rounded-[14px] p-5 border border-black/5"
              >
                <div className="text-2xl mb-2">{r.ico}</div>
                <div className="font-heading text-navy font-bold text-[1rem] mb-1">
                  {r.judul}
                </div>
                <p className="text-sm leading-[1.7] text-[#64748B]">{r.isi}</p>
              </div>
            ))}
          </div>

          {/* SECTION 2 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Jenis Asuransi yang Tepat untuk Pemilik Kos di Yogyakarta
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Tidak semua produk asuransi cocok untuk kos-kosan. Berikut adalah produk-produk yang
            relevan dan perlu Anda pertimbangkan:
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            1. Asuransi Kebakaran (Fire Insurance)
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Ini adalah fondasi perlindungan properti kos. Asuransi kebakaran standar menjamin
            kerugian akibat <strong className="text-navy">FLEXAS</strong> — singkatan dari:{" "}
            <em>Fire</em> (kebakaran), <em>Lightning</em> (petir), <em>Explosion</em> (ledakan),
            <em> Aircraft impact</em> (kejatuhan pesawat), dan <em>Smoke</em> (asap).
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Untuk kos-kosan, asuransi kebakaran bisa mencakup bangunan saja, atau bisa ditambah
            dengan isi bangunan (perabot, AC, water heater, dan lain-lain yang menjadi inventaris
            kos). Premi untuk kos dengan konstruksi beton permanen (Kelas 1) umumnya lebih rendah
            dibanding bangunan semi-permanen.
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            2. Perluasan Risiko: Banjir dan Gempa Bumi
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Asuransi kebakaran standar <strong className="text-navy">tidak</strong> otomatis
            menjamin banjir dan gempa bumi. Keduanya adalah perluasan (rider) yang perlu ditambahkan
            secara eksplisit ke dalam polis.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Mengingat posisi geografis Yogyakarta yang dekat dengan Gunung Merapi dan beberapa
            kawasan rawan banjir, kedua perluasan ini <strong className="text-navy">sangat
            direkomendasikan</strong> untuk pemilik kos di Jogja. Biaya surcharge-nya relatif
            terjangkau jika dibandingkan dengan potensi kerugian yang bisa ditimbulkan.
          </p>
          <div className="bg-gold/8 border border-gold/25 rounded-[14px] p-5 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">💡</span>
              <div>
                <div className="font-semibold text-navy mb-1">Tips dari Konsultan</div>
                <p className="text-sm leading-[1.75] text-[#475569]">
                  Pemilik kos di kawasan Sleman (dekat lereng Merapi) dan kawasan bantaran sungai
                  seperti Code dan Winongo <strong>wajib</strong> menambahkan perluasan banjir dan
                  gempa. Jangan tunggu musim hujan untuk sadar pentingnya proteksi ini. Baca lebih
                  lanjut tentang{" "}
                  <Link
                    href="/asuransi-properti/banjir-gempa"
                    className="text-gold font-semibold hover:underline"
                  >
                    perluasan asuransi banjir dan gempa untuk properti di Jogja
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            3. Property All Risk (PAR) — untuk Kos Skala Besar
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Jika Anda memiliki kos dengan lebih dari 20 kamar, atau kos yang dilengkapi fasilitas
            premium seperti kolam renang, coworking space, atau rooftop — pertimbangkan{" "}
            <Link
              href="/asuransi-properti/property-all-risk"
              className="text-gold font-semibold hover:underline"
            >
              Property All Risk (PAR)
            </Link>
            . Produk ini memberikan perlindungan lebih komprehensif dengan prinsip "all risk
            except..." — semua risiko dijamin kecuali yang dikecualikan secara eksplisit dalam polis.
          </p>

          {/* CTA INLINE */}
          <div className="bg-navy rounded-[18px] p-7 mb-10 text-center">
            <div className="font-heading text-white text-[1.2rem] font-bold mb-2">
              Tidak Yakin Produk Mana yang Tepat?
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-[420px] mx-auto">
              Konsultasi langsung dengan Pak Rio — konsultan asuransi kerugian lokal di Yogyakarta.
              Gratis, tanpa tekanan, dan rekomendasi berdasarkan kondisi kos Anda yang sebenarnya.
            </p>
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all"
            >
              💬 Konsultasi Gratis via WhatsApp
            </a>
          </div>

          {/* SECTION 3 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Berapa Premi Asuransi Kos di Yogyakarta?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Premi asuransi kebakaran untuk kos-kosan dihitung berdasarkan beberapa faktor utama:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">Faktor Penentu</th>
                  <th className="text-left px-4 py-3 font-semibold">Keterangan</th>
                  <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold">Dampak pada Premi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kelas Konstruksi", "Beton/bata (Kelas 1), semi-permanen (Kelas 2), kayu/bambu (Kelas 3)", "Kelas 1 paling murah"],
                  ["Nilai Bangunan", "Harga penggantian bangunan (bukan harga tanah)", "Makin tinggi nilai, premi makin besar"],
                  ["Luas Bangunan", "Total luas bangunan yang diasuransikan", "Berpengaruh pada nilai pertanggungan"],
                  ["Perluasan Risiko", "Penambahan jaminan banjir, gempa, angin topan", "Menambah premi sekitar 7–15%"],
                  ["Isi Bangunan", "Perabot, AC, water heater, inventaris kos", "Opsional, nilai terpisah dari bangunan"],
                ].map(([f, k, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-navy">{f}</td>
                    <td className="px-4 py-3 text-[#64748B]">{k}</td>
                    <td className="px-4 py-3 text-[#64748B]">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Sebagai gambaran kasar: kos-kosan beton (Kelas 1) dengan nilai bangunan{" "}
            <strong className="text-navy">Rp 500 juta</strong> tanpa perluasan bisa memiliki estimasi
            premi tahunan sekitar <strong className="text-navy">Rp 525.000 – Rp 600.000 per tahun.</strong>{" "}
            Angka ini sangat kecil jika dibandingkan pendapatan sewa bulanan kos yang bisa mencapai
            puluhan juta rupiah.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Untuk mendapat estimasi yang lebih akurat sesuai kondisi kos Anda, gunakan{" "}
            <Link
              href="/asuransi-properti#kalkulator"
              className="text-gold font-semibold hover:underline"
            >
              kalkulator premi asuransi properti kami
            </Link>{" "}
            atau langsung konsultasikan ke kami.
          </p>

          {/* SECTION 4 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Apa yang Dicakup dan Tidak Dicakup Asuransi Kos?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Memahami klausul pengecualian sama pentingnya dengan memahami manfaat polis. Berikut
            gambaran umum apa yang biasanya dijamin dan tidak dijamin:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="border border-green-600/20 bg-green-600/5 rounded-[14px] p-5">
              <h4 className="font-heading text-green-800 font-bold mb-3 flex items-center gap-2">
                <span>✓</span> Biasanya Dijamin
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Kerusakan bangunan akibat kebakaran",
                  "Sambaran petir dan ledakan",
                  "Kerusakan akibat asap",
                  "Banjir (dengan perluasan)",
                  "Gempa bumi (dengan perluasan)",
                  "Angin topan / badai (dengan perluasan)",
                  "Kerusakan akibat pesawat jatuh",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="text-green-700 font-bold flex-shrink-0 mt-0.5">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-600/20 bg-red-600/5 rounded-[14px] p-5">
              <h4 className="font-heading text-red-700 font-bold mb-3 flex items-center gap-2">
                <span>✗</span> Biasanya Tidak Dijamin
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Banjir dan gempa (jika tidak ditambahkan)",
                  "Keausan dan penyusutan normal bangunan",
                  "Kerusakan akibat rayap dan hama",
                  "Perang dan kerusuhan (kecuali ada rider)",
                  "Kerugian akibat penipuan penghuni",
                  "Kerusakan sengaja oleh pemilik",
                  "Kehilangan pendapatan sewa",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">✗</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gold/8 border border-gold/25 rounded-[14px] p-5 mb-8">
            <p className="text-sm leading-[1.75] text-[#475569]">
              <strong className="text-navy">Catatan penting:</strong> Salah satu keluhan tersering
              pemilik kos yang mengalami klaim adalah tidak tahu bahwa banjir atau gempa tidak
              otomatis dijamin. Konsultan kami selalu memastikan semua klausul pengecualian
              dijelaskan secara transparan sebelum polis diterbitkan.
            </p>
          </div>

          {/* SECTION 5 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Bagaimana Cara Mengajukan Klaim Asuransi Kos?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Banyak pemilik kos yang ragu membeli asuransi karena khawatir proses klaimnya rumit.
            Kenyataannya, klaim bisa berjalan lancar jika prosedurnya dipahami sejak awal.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {[
              {
                no: "01",
                judul: "Laporkan Kejadian Sesegera Mungkin",
                isi: "Hubungi konsultan atau perusahaan asuransi maksimal 3×24 jam setelah kejadian. Keterlambatan pelaporan bisa menjadi alasan klaim ditolak.",
              },
              {
                no: "02",
                judul: "Dokumentasikan Kerusakan",
                isi: "Foto dan video kondisi bangunan dari berbagai sudut sebelum ada pembersihan atau perbaikan. Ini adalah bukti utama yang akan diverifikasi oleh adjustor.",
              },
              {
                no: "03",
                judul: "Kumpulkan Dokumen Pendukung",
                isi: "Polis asuransi, KTP, sertifikat bangunan (IMB/PBG), foto kerusakan, dan laporan kepolisian (untuk kebakaran atau kejahatan). Konsultan kami akan membantu menyiapkan daftar dokumen yang lengkap.",
              },
              {
                no: "04",
                judul: "Proses Survei oleh Adjustor",
                isi: "Perusahaan asuransi akan mengirim loss adjustor untuk memverifikasi kerusakan. Hadiri proses ini dan pastikan konsultan Anda ikut mendampingi.",
              },
              {
                no: "05",
                judul: "Persetujuan dan Pencairan",
                isi: "Setelah survei dan dokumen lengkap, perusahaan asuransi akan mengeluarkan surat persetujuan klaim. Dana ganti rugi dicairkan ke rekening Anda.",
              },
            ].map((step) => (
              <div
                key={step.no}
                className="flex gap-4 items-start border border-black/6 rounded-[14px] p-5 bg-white hover:border-gold/30 transition-colors"
              >
                <div className="font-heading text-gold text-[1.8rem] font-bold leading-none flex-shrink-0 w-12">
                  {step.no}
                </div>
                <div>
                  <div className="font-heading text-navy font-bold text-[1rem] mb-1">
                    {step.judul}
                  </div>
                  <p className="text-sm leading-[1.7] text-[#64748B]">{step.isi}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Baca juga panduan lengkap kami tentang{" "}
            <Link
              href="/artikel/cara-klaim-asuransi-mobil"
              className="text-gold font-semibold hover:underline"
            >
              cara klaim asuransi
            </Link>{" "}
            untuk memahami prinsip dasar klaim yang berlaku di hampir semua produk asuransi kerugian.
          </p>

          {/* SECTION 6 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Perhitungan Nilai Pertanggungan yang Benar untuk Kos
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Kesalahan fatal yang sering dilakukan pemilik kos adalah <strong className="text-navy">
            underinsurance</strong> — menetapkan nilai pertanggungan terlalu rendah untuk menghemat
            premi. Ini justru berbahaya karena jika terjadi klaim, ganti rugi yang diterima akan
            proporsional dengan rasio antara nilai pertanggungan dan nilai sebenarnya.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Nilai pertanggungan yang benar untuk kos-kosan adalah{" "}
            <strong className="text-navy">biaya penggantian bangunan</strong> — yaitu berapa biaya
            yang dibutuhkan untuk membangun ulang bangunan tersebut dengan spesifikasi yang sama,
            bukan harga jual properti di pasar (yang sudah termasuk nilai tanah).
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Pelajari cara menghitung nilai pertanggungan yang tepat dalam artikel kami:{" "}
            <Link
              href="/artikel/cara-menghitung-nilai-asuransi"
              className="text-gold font-semibold hover:underline"
            >
              Cara Menghitung Nilai Asuransi yang Benar (Avoid Underinsurance)
            </Link>
            .
          </p>

          {/* SECTION 7 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Mengapa Pemilik Kos di Jogja Butuh Konsultan, Bukan Sekadar Agen
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Membeli asuransi langsung dari agen pemasaran memang mudah. Tapi ada perbedaan mendasar
            antara agen dan konsultan independen:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">Aspek</th>
                  <th className="text-left px-4 py-3 font-semibold">Agen Perusahaan Asuransi</th>
                  <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold">Konsultan Independen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pilihan Produk", "Hanya produk satu perusahaan", "Komparasi dari banyak perusahaan"],
                  ["Tujuan Utama", "Mencapai target penjualan", "Kepentingan terbaik klien"],
                  ["Penjelasan Polis", "Fokus pada manfaat", "Termasuk pengecualian penting"],
                  ["Saat Klaim", "Mewakili perusahaan asuransi", "Mendampingi dan membela klien"],
                  ["Biaya", "Gratis (dibayar perusahaan)", "Gratis (dari komisi produk terpilih)"],
                ].map(([a, b, c], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-navy">{a}</td>
                    <td className="px-4 py-3 text-[#64748B]">{b}</td>
                    <td className="px-4 py-3 text-green-700 font-medium">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Sebagai konsultan asuransi kerugian independen yang berbasis di Yogyakarta, kami di{" "}
            <Link href="/" className="text-gold font-semibold hover:underline">
              Asuransi Jogja
            </Link>{" "}
            tidak terikat pada satu perusahaan asuransi manapun. Rekomendasi kami murni berdasarkan
            kebutuhan dan kepentingan terbaik Anda — termasuk Anda yang memiliki kos-kosan.
          </p>

          {/* PENUTUP */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Kesimpulan: Kos Menghasilkan, Asuransi Melindungi
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Bisnis kos-kosan di Yogyakarta adalah aset jangka panjang yang bekerja untuk Anda 24
            jam sehari. Tapi tanpa perlindungan yang memadai, satu insiden bisa mereset semua kerja
            keras Anda.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Premi asuransi kos sebenarnya sangat terjangkau — jauh di bawah 1% dari nilai bangunan
            per tahun. Dibandingkan potensi kerugian akibat kebakaran, banjir, atau gempa yang bisa
            mencapai ratusan juta rupiah, investasi pada asuransi adalah keputusan finansial yang
            sangat masuk akal.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Hubungi kami untuk konsultasi gratis. Kami akan bantu analisis risiko kos Anda,
            rekomendasikan produk yang tepat, dan dampingi seluruh proses — dari pembelian polis
            hingga klaim jika suatu saat diperlukan.
          </p>

          {/* INTERNAL LINKS BOX */}
          <div className="bg-cream border border-black/6 rounded-[18px] p-6 mb-10">
            <div className="font-heading text-navy font-bold text-[1rem] mb-4">
              📚 Artikel & Halaman Terkait
            </div>
            <div className="flex flex-col gap-2">
              {[
                { href: "/asuransi-properti", label: "Asuransi Properti Jogja – Panduan Lengkap" },
                { href: "/asuransi-properti/kebakaran", label: "Asuransi Kebakaran Rumah, Kos & Ruko" },
                { href: "/asuransi-properti/banjir-gempa", label: "Perluasan Asuransi Banjir & Gempa di Yogyakarta" },
                { href: "/asuransi-properti/property-all-risk", label: "Property All Risk – Proteksi Komprehensif" },
                { href: "/artikel/cara-menghitung-nilai-asuransi", label: "Cara Menghitung Nilai Asuransi yang Benar" },
                { href: "/artikel/pentingnya-asuransi-dunia-usaha-jogja", label: "Pentingnya Asuransi di Dunia Usaha Yogyakarta" },
                { href: "/artikel", label: "Lihat Semua Artikel Edukasi Asuransi →" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-2 text-sm text-navy2 hover:text-gold transition-colors no-underline py-1 border-b border-black/5 last:border-0"
                >
                  <span className="text-gold text-xs">›</span>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA PENUTUP */}
      <section className="py-16 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-3">
            Konsultasi Gratis
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
            Siap Lindungi Aset Kos Anda?
          </h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-[460px] mx-auto mb-8">
            Hubungi Pak Rio sekarang. Konsultasi gratis, analisis risiko lokasi kos Anda, dan
            penawaran dari perusahaan asuransi terpercaya — tanpa biaya apapun.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all"
            >
              💬 Chat WhatsApp Sekarang
            </a>
            <a
              href={`mailto:${KONTAK.email}`}
              className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all"
            >
              ✉️ {KONTAK.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
