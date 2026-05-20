import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jangan Tunggu Kebakaran Terjadi: Panduan Lengkap Asuransi Rumah Tinggal di Jogja",
  description:
    "Panduan lengkap asuransi rumah tinggal di Yogyakarta. Risiko nyata hunian di DIY, jenis perlindungan, cara klaim, perbandingan produk, dan estimasi premi. Konsultasi gratis.",
  keywords:
    "asuransi rumah tinggal jogja, asuransi rumah yogyakarta, asuransi kebakaran rumah jogja, proteksi hunian yogyakarta, asuransi properti rumah jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/asuransi-rumah-tinggal-jogja" },
  openGraph: {
    title: "Jangan Tunggu Kebakaran Terjadi: Panduan Lengkap Asuransi Rumah Tinggal di Jogja",
    description:
      "Risiko nyata hunian di DIY, jenis perlindungan, cara klaim, dan estimasi premi asuransi rumah tinggal Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-rumah-tinggal-jogja",
    type: "article",
  },
};

const schemaArtikel = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Jangan Tunggu Kebakaran Terjadi: Panduan Lengkap Asuransi Rumah Tinggal di Jogja",
  description:
    "Panduan lengkap asuransi rumah tinggal di Yogyakarta untuk pemilik hunian di DIY.",
  url: "https://asuransijogja.biz.id/artikel/asuransi-rumah-tinggal-jogja",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  author: { "@type": "Person", name: "Rio MD" },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Jogja",
    url: "https://asuransijogja.biz.id",
  },
  mainEntityOfPage: "https://asuransijogja.biz.id/artikel/asuransi-rumah-tinggal-jogja",
};

export default function ArtikelAsuransiRumahPage() {
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
              "radial-gradient(ellipse 55% 65% at 15% 55%, rgba(200,150,62,0.11) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gold/80 mb-4 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline text-white/50">
              Beranda
            </Link>
            <span className="text-gold/40">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline text-white/50">
              Artikel
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold2 font-semibold">Asuransi Rumah Tinggal Jogja</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>
            Properti · Panduan Pemilik Rumah
          </div>

          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.18] mb-5">
            Jangan Tunggu Kebakaran Terjadi:{" "}
            <em className="not-italic text-gold">
              Panduan Lengkap Asuransi Rumah Tinggal
            </em>{" "}
            di Jogja
          </h1>

          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>✍️ Rio MD – Konsultan Asuransi Kerugian</span>
            <span>·</span>
            <span>⏱ 9 menit baca</span>
          </div>
        </div>
      </section>

      {/* ARTIKEL BODY */}
      <article className="py-16 px-[5vw] bg-white">
        <div className="max-w-[780px] mx-auto">

          {/* INTRO */}
          <p className="text-lg leading-[1.85] text-[#475569] mb-6">
            Ada sebuah fakta yang jarang dibicarakan: <strong className="text-navy">sebagian besar
            pemilik rumah di Indonesia tidak memiliki asuransi tempat tinggal mereka.</strong> Padahal
            rumah adalah aset terbesar yang dimiliki kebanyakan keluarga — lebih besar dari tabungan,
            kendaraan, atau investasi lainnya.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Di Yogyakarta, kondisi ini diperparah oleh fakta geografis: kota ini berada di antara
            dua ancaman besar — aktivitas vulkanik Gunung Merapi di utara, dan zona seismik aktif yang
            sudah terbukti meluluhlantakkan ribuan rumah pada gempa 2006. Belum lagi risiko kebakaran
            sehari-hari yang bisa datang dari korsleting listrik, kompor gas, atau bahkan percikan
            api dari rumah tetangga.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Artikel ini hadir untuk membantu Anda — pemilik rumah di Jogja — memahami secara tuntas
            bagaimana asuransi rumah tinggal bekerja, produk apa yang paling sesuai, berapa biayanya,
            dan apa yang harus dilakukan saat klaim.
          </p>

          {/* SECTION 1 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Risiko Nyata yang Mengancam Rumah Tinggal di Yogyakarta
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Yogyakarta bukan sekadar kota budaya yang tenang. Di balik suasana yang nyaman, ada
            sejumlah risiko konkret yang perlu disadari setiap pemilik rumah:
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {[
              {
                ico: "🔥",
                judul: "Kebakaran — Ancaman Nomor Satu Hunian di Perkotaan",
                isi: "Data Dinas Pemadam Kebakaran DIY mencatat bahwa korsleting listrik adalah penyebab utama kebakaran rumah tinggal di Yogyakarta. Instalasi listrik lama yang belum pernah diaudit, ditambah penggunaan perangkat elektronik yang terus bertambah, menciptakan kombinasi yang berbahaya. Satu insiden kebakaran bisa memusnahkan aset senilai ratusan juta dalam hitungan menit.",
              },
              {
                ico: "🌋",
                judul: "Gempa Bumi — Pelajaran Pahit 2006 yang Belum Terlupakan",
                isi: "Gempa Yogyakarta 27 Mei 2006 berkekuatan 5,9 SR menewaskan lebih dari 5.700 orang dan merusak ratusan ribu rumah. Banyak pemilik rumah yang kehilangan seluruh aset tempat tinggalnya tanpa kompensasi apapun karena tidak memiliki asuransi. Yogyakarta hingga kini masih termasuk wilayah risiko gempa tinggi.",
              },
              {
                ico: "🌊",
                judul: "Banjir — Bukan Hanya Masalah Bantaran Sungai",
                isi: "Banjir di Yogyakarta tidak hanya menimpa kawasan bantaran Kali Code atau Kali Opak. Penurunan muka tanah, sistem drainase yang tidak memadai, dan intensitas hujan yang semakin tinggi membuat banjir genangan kini bisa terjadi di kawasan perumahan yang sebelumnya dianggap aman.",
              },
              {
                ico: "💨",
                judul: "Angin Kencang dan Hujan Deras",
                isi: "Cuaca ekstrem semakin sering terjadi. Angin kencang bisa merusak atap, menumbangkan pohon ke bangunan, dan memecahkan kaca jendela. Hujan deras yang merembes ke dalam rumah bisa merusak plafon, dinding, dan perabot.",
              },
              {
                ico: "⚡",
                judul: "Petir",
                isi: "Sambaran petir langsung maupun tidak langsung bisa merusak instalasi listrik rumah, membakar atap, bahkan memicu kebakaran. Petir yang menyambar di sekitar bangunan juga bisa merusak perangkat elektronik melalui jalur kabel.",
              },
            ].map((r) => (
              <div
                key={r.judul}
                className="flex gap-4 items-start border border-black/6 rounded-[14px] p-5 bg-white hover:border-gold/30 hover:shadow-sm transition-all"
              >
                <div className="text-[2rem] flex-shrink-0 leading-none mt-0.5">{r.ico}</div>
                <div>
                  <div className="font-heading text-navy font-bold text-[1rem] mb-1.5">
                    {r.judul}
                  </div>
                  <p className="text-sm leading-[1.75] text-[#64748B]">{r.isi}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 2 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Jenis Asuransi Rumah Tinggal: Mana yang Paling Tepat untuk Anda?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Ada beberapa produk asuransi yang relevan untuk hunian di Yogyakarta, masing-masing
            dengan lingkup perlindungan yang berbeda:
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            1. Asuransi Kebakaran Rumah Tinggal (Fire Insurance)
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Ini adalah produk paling dasar dan paling banyak digunakan. Asuransi kebakaran standar
            menjamin kerugian akibat risiko{" "}
            <strong className="text-navy">FLEXAS</strong>: kebakaran (Fire), petir (Lightning),
            ledakan (Explosion), kejatuhan pesawat (Aircraft impact), dan asap (Smoke).
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Yang diasuransikan bisa berupa bangunan saja, atau bangunan beserta isi rumah (perabot,
            elektronik, pakaian, dan barang berharga). Untuk hunian di Yogyakarta, sebaiknya
            pertimbangkan untuk mengasuransikan keduanya agar proteksi benar-benar menyeluruh.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Pelajari lebih lengkap tentang{" "}
            <Link
              href="/asuransi-properti/kebakaran"
              className="text-gold font-semibold hover:underline"
            >
              asuransi kebakaran rumah tinggal di Yogyakarta
            </Link>{" "}
            termasuk cara menentukan nilai pertanggungan yang tepat.
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            2. Perluasan Banjir dan Gempa Bumi — Wajib untuk Rumah di DIY
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Asuransi kebakaran standar tidak otomatis menjamin banjir dan gempa. Kedua risiko ini
            memerlukan penambahan perluasan (rider) secara terpisah dalam polis Anda.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Mengingat sejarah gempa Yogyakarta dan kondisi geografis yang berada dekat Merapi,{" "}
            <strong className="text-navy">perluasan gempa bumi adalah keharusan</strong> bagi
            pemilik rumah di DIY — bukan sekadar pilihan tambahan. Demikian pula perluasan banjir,
            terutama bagi yang tinggal di kawasan dengan drainase yang kurang baik.
          </p>
          <div className="bg-gold/8 border border-gold/25 rounded-[14px] p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">💡</span>
              <div>
                <div className="font-semibold text-navy mb-1">Rekomendasi Konsultan</div>
                <p className="text-sm leading-[1.75] text-[#475569]">
                  Untuk rumah tinggal di Yogyakarta, selalu sertakan perluasan gempa bumi dan
                  banjir. Biaya tambahan premi untuk kedua perluasan ini sangat terjangkau —
                  umumnya hanya sekitar 10–15% dari premi dasar. Baca panduan lengkap{" "}
                  <Link
                    href="/asuransi-properti/banjir-gempa"
                    className="text-gold font-semibold hover:underline"
                  >
                    perluasan asuransi banjir dan gempa untuk properti di Yogyakarta
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            3. Property All Risk (PAR) — Proteksi Paling Komprehensif
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Bagi Anda yang memiliki rumah dengan nilai tinggi atau menginginkan ketenangan pikiran
            maksimal, <Link
              href="/asuransi-properti/property-all-risk"
              className="text-gold font-semibold hover:underline"
            >
              Property All Risk (PAR)
            </Link>{" "}
            memberikan perlindungan paling luas dengan prinsip "semua risiko dijamin kecuali yang
            dikecualikan". PAR cocok untuk rumah mewah, vila, atau hunian dengan investasi interior
            tinggi di kawasan premium Yogyakarta seperti Seturan, Sinduadi, Godean, atau Bantul.
          </p>

          {/* CTA INLINE */}
          <div className="bg-navy rounded-[18px] p-7 mb-10 text-center">
            <div className="font-heading text-white text-[1.2rem] font-bold mb-2">
              Bingung Memilih Produk yang Tepat?
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-[420px] mx-auto">
              Ceritakan kondisi rumah Anda ke Pak Rio. Konsultasi gratis, analisis risiko lokasi,
              dan rekomendasi produk yang jujur — tanpa tekanan untuk membeli.
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
            Apa Saja yang Dijamin dan Tidak Dijamin Asuransi Rumah?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Salah satu hal yang paling penting — dan sering tidak dijelaskan secara lengkap oleh
            agen — adalah klausul pengecualian dalam polis. Berikut gambaran umum yang perlu Anda
            ketahui:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div className="border border-green-600/20 bg-green-600/5 rounded-[14px] p-5">
              <h4 className="font-heading text-green-800 font-bold mb-3 flex items-center gap-2">
                <span>✓</span> Umumnya Dijamin
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Kebakaran karena korsleting listrik",
                  "Sambaran petir langsung",
                  "Ledakan tabung gas atau mesin",
                  "Kejatuhan pesawat atau benda lain",
                  "Kerusakan akibat asap",
                  "Banjir (jika perluasan ditambahkan)",
                  "Gempa bumi (jika perluasan ditambahkan)",
                  "Angin topan / puting beliung (dengan perluasan)",
                  "Kerusuhan dan huru-hara (beberapa produk)",
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
                <span>✗</span> Umumnya Tidak Dijamin
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Banjir dan gempa (tanpa perluasan)",
                  "Penyusutan dan kerusakan akibat usia",
                  "Kerusakan karena rayap atau hama",
                  "Kerusakan disengaja oleh pemilik",
                  "Kehilangan barang berharga (perhiasan, dll.)",
                  "Biaya sewa selama renovasi pasca-klaim",
                  "Perang dan terorisme",
                  "Kerusakan karena tidak terawat",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">✗</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gold/8 border border-gold/25 rounded-[14px] p-5 mb-10">
            <p className="text-sm leading-[1.75] text-[#475569]">
              <strong className="text-navy">Penting:</strong> Beberapa produk menawarkan perluasan
              tambahan seperti jaminan barang berharga, biaya sewa sementara, atau tanggung jawab
              hukum kepada pihak ketiga. Diskusikan kebutuhan spesifik Anda dengan konsultan untuk
              mendapat polis yang benar-benar sesuai.
            </p>
          </div>

          {/* SECTION 4 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Berapa Premi Asuransi Rumah Tinggal di Yogyakarta?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Premi asuransi rumah dihitung berdasarkan beberapa variabel utama. Berikut faktor-faktor
            yang menentukan besar kecilnya premi yang akan Anda bayarkan:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">Variabel</th>
                  <th className="text-left px-4 py-3 font-semibold">Detail</th>
                  <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold">Pengaruh</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kelas Konstruksi", "Kelas 1 (beton/bata), Kelas 2 (semi permanen), Kelas 3 (kayu/bambu)", "Kelas 1 premi paling rendah"],
                  ["Nilai Bangunan", "Biaya membangun ulang bangunan — bukan harga jual termasuk tanah", "Makin tinggi nilai, premi lebih besar"],
                  ["Nilai Isi Rumah", "Perabot, elektronik, dan barang berharga yang ikut diasuransikan", "Dihitung terpisah dari nilai bangunan"],
                  ["Perluasan Banjir", "Surcharge sekitar 7–10% dari premi dasar", "Menambah premi sedikit, proteksi jauh lebih luas"],
                  ["Perluasan Gempa", "Surcharge sekitar 7–10% dari premi dasar", "Sangat dianjurkan untuk rumah di DIY"],
                  ["Lokasi Properti", "Zona risiko banjir, gempa, atau kawasan padat", "Bisa mempengaruhi rate premi"],
                ].map(([v, d, p], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-navy">{v}</td>
                    <td className="px-4 py-3 text-[#64748B]">{d}</td>
                    <td className="px-4 py-3 text-[#64748B]">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-cream border border-black/6 rounded-[14px] p-6 mb-6">
            <div className="font-heading text-navy font-bold text-[1rem] mb-3">
              📊 Ilustrasi Estimasi Premi
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: "Rumah tipe 36/72, beton (Kelas 1), nilai bangunan Rp 250 juta, tanpa perluasan",
                  premi: "~ Rp 262.500 / tahun",
                },
                {
                  label: "Rumah tipe 60/120, beton (Kelas 1), nilai bangunan Rp 450 juta, + perluasan banjir & gempa",
                  premi: "~ Rp 630.000 – Rp 700.000 / tahun",
                },
                {
                  label: "Rumah semi permanen (Kelas 2), nilai bangunan Rp 200 juta, + perluasan banjir & gempa",
                  premi: "~ Rp 600.000 – Rp 720.000 / tahun",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-3 border-b border-black/5 last:border-0"
                >
                  <span className="text-sm text-[#475569] leading-snug flex-1">{item.label}</span>
                  <span className="font-heading text-gold font-bold text-[1rem] whitespace-nowrap">
                    {item.premi}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#94A3B8] mt-3 leading-relaxed">
              * Estimasi berdasarkan tarif referensi pasar. Premi final ditentukan perusahaan
              asuransi setelah evaluasi. Gunakan{" "}
              <Link
                href="/asuransi-properti#kalkulator"
                className="text-gold hover:underline"
              >
                kalkulator kami
              </Link>{" "}
              untuk estimasi lebih akurat.
            </p>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Angka-angka di atas menunjukkan bahwa premi asuransi rumah tinggal sangat terjangkau
            — jauh di bawah 0,3% dari nilai bangunan per tahun. Bandingkan dengan risiko kehilangan
            aset senilai ratusan juta rupiah akibat kebakaran atau gempa. Investasi pada proteksi
            ini adalah keputusan keuangan yang sangat rasional.
          </p>

          {/* SECTION 5 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Cara Menentukan Nilai Pertanggungan yang Tepat untuk Rumah Anda
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Satu kesalahan yang paling sering terjadi dan paling merugikan adalah menetapkan nilai
            pertanggungan terlalu rendah — yang dalam istilah asuransi disebut{" "}
            <strong className="text-navy">underinsurance</strong>.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Misalnya: rumah Anda bernilai Rp 500 juta (biaya membangun ulang), tapi Anda
            mengasuransikan hanya Rp 250 juta untuk menghemat premi. Jika terjadi kebakaran total,
            perusahaan asuransi tidak akan mengganti Rp 250 juta penuh — melainkan hanya{" "}
            <strong className="text-navy">50% dari kerugian aktual</strong>, karena rasio
            pertanggungan Anda hanya 50%.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Nilai pertanggungan yang benar adalah{" "}
            <strong className="text-navy">biaya penggantian bangunan (replacement cost)</strong> —
            yaitu berapa biaya yang dibutuhkan untuk membangun ulang rumah tersebut dengan
            spesifikasi dan kualitas yang sama di lokasi yang sama. Nilai ini berbeda dari harga
            jual rumah di pasar karena harga jual sudah mencakup nilai tanah.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Cara menghitung replacement cost rumah secara sederhana: kalikan luas bangunan (m²)
            dengan estimasi biaya konstruksi per meter persegi di Yogyakarta saat ini. Untuk panduan
            lengkapnya, baca artikel kami:{" "}
            <Link
              href="/artikel/cara-menghitung-nilai-asuransi"
              className="text-gold font-semibold hover:underline"
            >
              Cara Menghitung Nilai Asuransi yang Benar untuk Menghindari Underinsurance
            </Link>
            .
          </p>

          {/* SECTION 6 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Langkah-Langkah Mengajukan Klaim Asuransi Rumah di Jogja
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Proses klaim yang lancar dimulai dari persiapan yang baik. Berikut tahapan yang perlu
            Anda ikuti jika terjadi musibah pada rumah Anda:
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {[
              {
                no: "01",
                judul: "Pastikan Keselamatan Terlebih Dahulu",
                isi: "Sebelum memikirkan klaim, pastikan seluruh penghuni rumah dalam kondisi aman. Jangan masuk ke bangunan yang terbakar atau rusak akibat gempa sebelum dinyatakan aman oleh pihak berwenang.",
              },
              {
                no: "02",
                judul: "Laporkan ke Pihak Terkait",
                isi: "Untuk kebakaran, hubungi Pemadam Kebakaran dan minta surat keterangan kebakaran. Untuk gempa, dokumentasikan kerusakan dan koordinasikan dengan RT/RW setempat. Laporan resmi ini akan dibutuhkan untuk proses klaim.",
              },
              {
                no: "03",
                judul: "Hubungi Konsultan atau Perusahaan Asuransi",
                isi: "Laporkan kejadian ke konsultan atau perusahaan asuransi maksimal 3×24 jam setelah kejadian. Jika Anda klien Asuransi Jogja, cukup WhatsApp Pak Rio dan kami akan memandu seluruh prosesnya.",
              },
              {
                no: "04",
                judul: "Dokumentasikan Semua Kerusakan",
                isi: "Foto dan video seluruh kerusakan dari berbagai sudut, termasuk bagian dalam dan luar bangunan, sebelum ada pembersihan atau perbaikan sementara. Simpan bukti digital ini dengan baik.",
              },
              {
                no: "05",
                judul: "Siapkan Dokumen Klaim",
                isi: "Dokumen yang umumnya diperlukan: polis asuransi, KTP, IMB/PBG, foto-foto kerusakan, surat keterangan kejadian (dari damkar, polisi, atau BPBD), dan daftar kerugian beserta estimasi nilainya.",
              },
              {
                no: "06",
                judul: "Proses Survei dan Pencairan",
                isi: "Adjustor dari perusahaan asuransi akan melakukan survei lapangan untuk memverifikasi kerusakan. Setelah persetujuan, dana ganti rugi akan dicairkan sesuai nilai klaim yang disetujui.",
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

          {/* SECTION 7 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Tips Memilih Asuransi Rumah yang Tepat — Dari Konsultan Lokal Jogja
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Setelah 10 tahun lebih melayani klien di Yogyakarta, ada beberapa hal yang selalu
            kami sampaikan kepada pemilik rumah yang ingin membeli asuransi:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                ico: "📋",
                judul: "Baca Seluruh Polis, Bukan Hanya Brosurnya",
                isi: "Brosur hanya menampilkan manfaat terbaik. Yang penting adalah polis lengkap beserta klausul pengecualiannya. Pastikan Anda paham apa yang tidak dijamin sebelum tanda tangan.",
              },
              {
                ico: "🎯",
                judul: "Jangan Underinsurance demi Hemat Premi",
                isi: "Mengasuransikan rumah di bawah nilai sebenarnya memang menurunkan premi, tapi juga menurunkan ganti rugi yang akan Anda terima saat klaim. Ini keputusan yang mahal di kemudian hari.",
              },
              {
                ico: "🌋",
                judul: "Selalu Tambahkan Perluasan Gempa di Jogja",
                isi: "Yogyakarta adalah kota yang pernah mengalami gempa destruktif. Perluasan gempa adalah investasi paling penting yang bisa Anda tambahkan ke dalam polis rumah Anda.",
              },
              {
                ico: "🤝",
                judul: "Pilih Konsultan yang Berpihak pada Anda",
                isi: "Agen perusahaan asuransi bekerja untuk perusahaannya. Konsultan independen bekerja untuk Anda. Perbedaan ini terasa paling besar saat proses klaim berlangsung.",
              },
              {
                ico: "🔄",
                judul: "Perbarui Nilai Pertanggungan Secara Berkala",
                isi: "Biaya konstruksi naik setiap tahun. Nilai pertanggungan yang memadai hari ini mungkin sudah tidak cukup 5 tahun lagi. Tinjau ulang polis Anda minimal setiap 2–3 tahun.",
              },
              {
                ico: "📱",
                judul: "Simpan Nomor Kontak Konsultan di Ponsel Anda",
                isi: "Saat musibah terjadi, Anda butuh panduan cepat — bukan waktu untuk mencari-cari nomor telepon. Simpan kontak konsultan Anda dan hubungi segera setelah kejadian.",
              },
            ].map((t) => (
              <div
                key={t.judul}
                className="bg-cream rounded-[14px] p-5 border border-black/5"
              >
                <div className="text-2xl mb-2">{t.ico}</div>
                <div className="font-heading text-navy font-bold text-[1rem] mb-1">
                  {t.judul}
                </div>
                <p className="text-sm leading-[1.7] text-[#64748B]">{t.isi}</p>
              </div>
            ))}
          </div>

          {/* SECTION 8 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Asuransi Rumah vs. Asuransi Jiwa — Apa Bedanya dan Apakah Keduanya Perlu?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Pertanyaan ini sering muncul: "Saya sudah punya asuransi jiwa, apakah masih perlu
            asuransi rumah?" Jawabannya: <strong className="text-navy">ya, keduanya melindungi hal
            yang berbeda.</strong>
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Asuransi jiwa melindungi keluarga Anda dari risiko kehilangan penghasilan jika Anda
            meninggal atau cacat permanen. Asuransi rumah tinggal (yang masuk kategori{" "}
            <strong className="text-navy">asuransi kerugian</strong>) melindungi aset fisik
            bangunan dan isinya dari kerusakan atau kehilangan akibat musibah. Keduanya saling
            melengkapi, bukan menggantikan.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Jika Anda sedang mempertimbangkan perlindungan asuransi yang lebih menyeluruh untuk
            bisnis atau properti komersial, baca juga artikel kami tentang{" "}
            <Link
              href="/artikel/pentingnya-asuransi-dunia-usaha-jogja"
              className="text-gold font-semibold hover:underline"
            >
              pentingnya asuransi di dunia usaha Yogyakarta
            </Link>
            .
          </p>

          {/* PENUTUP */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Kesimpulan: Rumah adalah Aset Terbesar Anda — Lindungi Sekarang
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Tidak ada waktu yang tepat untuk menunda asuransi rumah. Kebakaran tidak memberi
            peringatan. Gempa tidak menunggu Anda siap. Banjir tidak peduli apakah polis Anda sudah
            terbit atau belum.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Yang bisa Anda kendalikan adalah keputusan untuk melindungi aset terbesar Anda hari ini
            — sebelum musibah itu terjadi. Dengan premi yang sangat terjangkau dan manfaat yang
            bisa menyelamatkan ratusan juta rupiah, asuransi rumah tinggal adalah salah satu
            keputusan keuangan paling rasional yang bisa Anda buat.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Hubungi kami sekarang untuk konsultasi gratis. Kami akan bantu Anda memahami risiko
            spesifik lokasi rumah Anda di Yogyakarta, memilih produk yang paling sesuai, dan
            memastikan nilai pertanggungan yang Anda tetapkan benar-benar memadai.
          </p>

          {/* INTERNAL LINKS BOX */}
          <div className="bg-cream border border-black/6 rounded-[18px] p-6 mb-10">
            <div className="font-heading text-navy font-bold text-[1rem] mb-4">
              📚 Artikel & Halaman Terkait
            </div>
            <div className="flex flex-col gap-2">
              {[
                { href: "/asuransi-properti", label: "Asuransi Properti Jogja – Panduan Lengkap untuk Semua Jenis Properti" },
                { href: "/asuransi-properti/kebakaran", label: "Asuransi Kebakaran Rumah, Kos & Ruko di Yogyakarta" },
                { href: "/asuransi-properti/banjir-gempa", label: "Perluasan Asuransi Banjir & Gempa Bumi di Yogyakarta" },
                { href: "/asuransi-properti/property-all-risk", label: "Property All Risk – Proteksi Komprehensif untuk Hunian Premium" },
                { href: "/artikel/asuransi-kos-jogja", label: "Panduan Asuransi Kos-Kosan untuk Pemilik Kos di Jogja" },
                { href: "/artikel/cara-menghitung-nilai-asuransi", label: "Cara Menghitung Nilai Pertanggungan Asuransi yang Benar" },
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
            Mulai Sekarang
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
            Lindungi Rumah Anda Sebelum<br />Musibah Itu Terjadi
          </h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-[460px] mx-auto mb-8">
            Konsultasi gratis dengan Pak Rio — konsultan asuransi kerugian lokal di Yogyakarta.
            Analisis risiko, rekomendasi produk, dan pendampingan klaim. Semuanya tanpa biaya.
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
