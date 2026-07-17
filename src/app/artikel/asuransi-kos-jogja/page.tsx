import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kos-Kosan Jogja: Panduan Lengkap untuk Pemilik Kos di Yogyakarta",
  description:
    "Panduan lengkap asuransi kos-kosan di Yogyakarta. Risiko nyata kawasan Seturan, Jakal, Sleman; simulasi premi, cara klaim, tips underinsurance, dan FAQ. Konsultasi gratis praktisi lokal.",
  keywords:
    "asuransi kos jogja, asuransi kos-kosan yogyakarta, asuransi kebakaran kos sleman, proteksi properti kos jogja, asuransi bangunan kos, premi asuransi kos, asuransi kos seturan, kos dekat ugm asuransi, perlindungan investasi properti kos, asuransi kos jalan kaliurang",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/asuransi-kos-jogja" },
  openGraph: {
    title: "Asuransi Kos-Kosan Jogja: Panduan Lengkap untuk Pemilik Kos di Yogyakarta",
    description:
      "Panduan lengkap asuransi kos-kosan di Yogyakarta. Risiko nyata, simulasi premi, cara klaim, FAQ.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-kos-jogja",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og/og-properti.png", width: 1200, height: 630, alt: "Asuransi Kos-Kosan Jogja: Panduan Lengkap untuk Pemilik Kos di Yogyakarta" }],
  },
};

const schemaArtikel = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Asuransi Kos-Kosan Jogja: Panduan Lengkap untuk Pemilik Kos di Yogyakarta",
  description:
    "Panduan lengkap asuransi kos-kosan di Yogyakarta untuk pemilik properti pasif.",
  url: "https://asuransijogja.biz.id/artikel/asuransi-kos-jogja",
  datePublished: "2025-01-01",
  dateModified: "2025-06-01",
  author: { "@type": "Person", name: "Rio Mardiansyah" },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Jogja",
    url: "https://asuransijogja.biz.id",
  },
  mainEntityOfPage: "https://asuransijogja.biz.id/artikel/asuransi-kos-jogja",
};

const faqKos = [
  {
    q: "Apakah asuransi kebakaran kos wajib ada jika sudah bayar pajak PBB?",
    a: "Tidak ada hubungannya. PBB adalah kewajiban pajak kepada negara, sedangkan asuransi kebakaran adalah perlindungan finansial pribadi atas aset Anda. Tanpa asuransi, seluruh biaya kerugian akibat kebakaran atau bencana ditanggung sendiri oleh pemilik kos.",
  },
  {
    q: "Kos saya di Seturan dekat kampus, apakah termasuk zona risiko tinggi?",
    a: "Kawasan Seturan dan sekitarnya (Sleman) masuk zona risiko gempa Zona 4. Risiko kebakaran juga relatif tinggi karena kepadatan bangunan dan beban listrik dari banyak penghuni mahasiswa. Kami rekomendasikan asuransi kebakaran + perluasan gempa bumi minimal.",
  },
  {
    q: "Berapa biaya premi asuransi kos dengan 10 kamar di Jalan Kaliurang?",
    a: "Dengan asumsi bangunan beton Kelas 1, nilai bangunan Rp 600 juta, + perluasan gempa (Zona 4 – Sleman): estimasi premi kebakaran sekitar Rp 580.000–Rp 650.000/tahun, ditambah premi gempa sekitar Rp 820.000–Rp 950.000/tahun (polis terpisah). Total sekitar Rp 1,4–1,6 juta per tahun. Gunakan kalkulator kami untuk estimasi lebih akurat.",
  },
  {
    q: "Apakah kerusakan akibat penghuni kos bisa diklaim?",
    a: "Asuransi kebakaran standar tidak menjamin kerusakan disengaja oleh penghuni. Namun beberapa produk PAR (Property All Risk) atau endorsement khusus menyediakan perluasan 'tenant's damage' atau 'malicious damage'. Diskusikan kebutuhan ini saat konsultasi.",
  },
  {
    q: "Apa yang harus dilakukan jika terjadi kebakaran di kos saya?",
    a: "Langkah pertama: pastikan keselamatan seluruh penghuni. Setelah aman, hubungi praktisi atau perusahaan asuransi maksimal 3×24 jam, dokumentasikan kerusakan dengan foto/video sebelum ada pembersihan, kumpulkan surat keterangan kebakaran dari Damkar Kota/Kabupaten, dan siapkan dokumen polis beserta KPT dan IMB.",
  },
  {
    q: "Apakah kos yang belum memiliki IMB tetap bisa diasuransikan?",
    a: "Secara teknis, perusahaan asuransi bisa menerbitkan polis meski IMB sedang diurus. Namun saat klaim, dokumen legalitas bangunan akan diminta. Sangat disarankan untuk menyelesaikan IMB/PBG terlebih dahulu agar proses klaim tidak terhambat.",
  },
  {
    q: "Apakah premi asuransi kos bisa menjadi pengurang pajak penghasilan?",
    a: "Premi asuransi properti bisnis (termasuk kos-kosan yang dioperasikan secara komersial) umumnya dapat diakui sebagai biaya usaha yang mengurangi penghasilan kena pajak, sesuai ketentuan PPh Pasal 6 UU PPh. Konsultasikan dengan konsultan pajak Anda untuk kepastian.",
  },
  {
    q: "Berapa lama proses klaim asuransi kebakaran kos cair?",
    a: "Klaim kebakaran standar dengan dokumen lengkap umumnya selesai dalam 14–30 hari kerja sejak survei adjustor. Dengan pendampingan praktisi yang berpengalaman, proses bisa lebih cepat karena semua dokumen disiapkan dengan benar sejak awal.",
  },
];

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
            Asuransi Kos-Kosan Jogja:{" "}
            <em className="not-italic text-gold">
              Panduan Lengkap & Simulasi Premi
            </em>{" "}
            untuk Pemilik Kos di Yogyakarta
          </h1>

          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>✍️ Rio Mardiansyah – Praktisi Asuransi</span>
            <span>·</span>
            <span>⏱ 12 menit baca</span>
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
            UAJY, dan ratusan kampus lainnya. Kawasan seperti <strong className="text-navy">Seturan,
            Jalan Kaliurang (Jakal), Gejayan, Condongcatur,</strong> dan <strong className="text-navy">
            Pogung</strong> tumbuh menjadi sentra kos-kosan yang tidak pernah sepi peminat. Konsekuensinya?
            Bisnis kos-kosan di Jogja adalah salah satu bisnis properti pasif paling menjanjikan di
            Pulau Jawa — dengan tingkat hunian yang bisa menyentuh 95% sepanjang tahun.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Bayangkan Anda memiliki kos 12 kamar di kawasan Seturan dengan harga sewa Rp 700.000 per
            kamar per bulan. Dalam setahun, pendapatan bruto Anda mencapai Rp 100,8 juta. Angka yang
            sangat menarik. Tapi pertanyaannya: sudahkah bangunan senilai Rp 700 juta itu dilindungi?
            Jika satu insiden kebakaran menghanguskan separuh bangunan dan Anda tidak punya polis
            asuransi — semua yang sudah Anda bangun bertahun-tahun bisa lenyap dalam satu malam.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Inilah kenyataan yang jarang dibicarakan di kalangan pemilik kos: <strong className="text-navy">
            proteksi atas aset fisik bangunan sering kali menjadi prioritas terakhir</strong>, padahal
            justru itulah fondasi dari seluruh bisnis pasif Anda. Banyak pemilik kos yang sudah cermat
            memasang CCTV, memilih kontraktor terbaik, atau menetapkan kontrak sewa yang ketat — tapi
            lupa bahwa risiko terbesar justru datang dari arah yang tidak terduga: korsleting listrik
            di tengah malam, gempa bumi dini hari, atau banjir dadakan saat hujan ekstrem.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Artikel ini ditulis khusus untuk Anda — pemilik atau calon pemilik kos-kosan di Yogyakarta.
            Kami akan membahas secara mendalam: profil risiko spesifik per kawasan, jenis produk
            asuransi yang tepat, cara kerja dan penghitungan premi, simulasi nilai pertanggungan,
            serta langkah-langkah klaim yang benar. Di akhir artikel juga tersedia{" "}
            <strong className="text-navy">kalkulator premi interaktif</strong> yang bisa Anda gunakan
            langsung untuk menghitung estimasi biaya asuransi kos Anda.
          </p>

          {/* SECTION 1 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Profil Risiko Kos-Kosan di Jogja: Berbeda per Kawasan
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Tidak semua kos di Yogyakarta menghadapi risiko yang sama. Lokasi properti sangat
            menentukan eksposur risiko yang perlu diantisipasi. Berikut peta risiko per kawasan
            yang paling banyak dihuni pemilik kos di Jogja:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">Kawasan</th>
                  <th className="text-left px-4 py-3 font-semibold">Risiko Utama</th>
                  <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold">Rekomendasi Produk</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Jalan Kaliurang (Jakal) Km 5–14, Sleman", "Gempa, abu vulkanik Merapi", "Kebakaran + Gempa (wajib)"],
                  ["Seturan, Caturtunggal, Sleman", "Kebakaran (beban listrik), banjir genangan", "Kebakaran + Banjir"],
                  ["Gejayan, Demangan, Kota Yogya", "Kebakaran, banjir Kali Code", "Kebakaran + Banjir"],
                  ["Pogung, Condongcatur, Sleman", "Gempa, kebakaran", "Kebakaran + Gempa"],
                  ["Bantul (Imogiri, Sewon)", "Gempa (Zona 5 – risiko lebih tinggi), banjir", "Kebakaran + Gempa Zona 5"],
                  ["Kotagede, Umbulharjo", "Kebakaran kawasan padat, gempa", "Kebakaran + Gempa"],
                ].map(([k, r, p], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-navy">{k}</td>
                    <td className="px-4 py-3 text-[#475569]">{r}</td>
                    <td className="px-4 py-3 text-gold font-medium">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Perhatikan bahwa kawasan Bantul menggunakan tarif gempa Zona 5 — lebih tinggi dari
            Sleman dan Kota Yogyakarta yang masuk Zona 4. Ini konsekuensi dari posisi geologis
            Bantul yang lebih dekat dengan jalur patahan Opak yang pernah memicu gempa destruktif
            pada 27 Mei 2006. Untuk detail perhitungan premi per zona, baca panduan kami tentang{" "}
            <Link href="/asuransi-properti/banjir-gempa" className="text-gold font-semibold hover:underline">
              perluasan asuransi banjir dan gempa khusus Yogyakarta
            </Link>.
          </p>

          {/* SECTION 2 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            6 Risiko yang Paling Sering Menyebabkan Kerugian Pemilik Kos
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Sebagian besar pemilik kos menganggap risiko kerusakan bangunan itu kecil karena
            bangunan terlihat kokoh. Padahal ada beberapa faktor risiko spesifik yang melekat pada
            properti kos-kosan — terutama di Yogyakarta:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                ico: "⚡",
                judul: "Beban Listrik Berlebih & Korsleting",
                isi: "Puluhan penghuni yang setiap harinya menggunakan AC, laptop, charger, hair dryer, dan rice cooker secara bersamaan menciptakan risiko korsleting yang sangat tinggi. Kos-kosan dengan instalasi listrik berumur lebih dari 10 tahun yang belum diaudit adalah bom waktu. Ini adalah penyebab kebakaran nomor satu pada bangunan kos di perkotaan Yogyakarta.",
              },
              {
                ico: "🌊",
                judul: "Banjir di Kawasan Padat & Dataran Rendah",
                isi: "Kawasan Seturan, Demangan, Gejayan, dan sekitar bantaran Kali Code rentan banjir saat curah hujan tinggi. Banjir tidak hanya merusak lantai dasar — air yang merembes ke dinding, instalasi listrik, dan pondasi bisa menyebabkan kerusakan struktural jangka panjang yang jauh lebih mahal dari yang terlihat.",
              },
              {
                ico: "🌋",
                judul: "Gempa Bumi — Pelajaran 2006 Belum Usai",
                isi: "Yogyakarta masih dalam zona aktif seismik. Gempa 27 Mei 2006 (M5,9) menghancurkan lebih dari 150.000 bangunan dalam hitungan detik. Bangunan kos yang sudah berumur lebih dari 15 tahun, terutama yang dibangun sebelum standar konstruksi tahan gempa berlaku, adalah kelompok paling rentan.",
              },
              {
                ico: "🔥",
                judul: "Kebakaran dari Aktivitas Penghuni",
                isi: "Kompor listrik portable yang kabelnya tidak standar, lilin aromaterapi yang ditinggal tidur, atau charger ponsel yang dicolok semalaman ke stop kontak murahan — semua ini adalah pemicu kebakaran yang sangat umum di lingkungan kos mahasiswa. Sebagai pemilik bangunan, Anda menanggung kerugian fisik terlepas dari siapa pelakunya.",
              },
              {
                ico: "💧",
                judul: "Kebocoran Pipa & Rembesan Air",
                isi: "Kos dengan banyak kamar mandi dan saluran air menghadapi risiko kebocoran pipa yang lebih tinggi dibanding hunian keluarga tunggal. Air yang merembes perlahan selama berbulan-bulan bisa merusak plafon, dinding, dan pondasi secara signifikan — kerusakan yang baru terlihat parah setelah terlambat ditangani.",
              },
              {
                ico: "🏚️",
                judul: "Kerusakan oleh Penghuni",
                isi: "Meskipun tidak dicakup polis standar, kerusakan fisik oleh penghuni (pintu dirusak, kaca dipecahkan, AC dirusak karena penggunaan tidak benar) adalah kenyataan yang dihadapi hampir setiap pemilik kos. Beberapa produk PAR atau endorsement khusus menyediakan perluasan 'tenant's damage' untuk risiko ini.",
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
                <p className="text-sm leading-[1.7] text-[#475569]">{r.isi}</p>
              </div>
            ))}
          </div>

          {/* SECTION 3 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Jenis Asuransi yang Tepat untuk Pemilik Kos di Yogyakarta
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Ada beberapa produk asuransi yang relevan untuk kos-kosan. Pilihan tergantung pada
            skala bangunan, nilai aset, dan lokasi properti Anda:
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            1. Asuransi Kebakaran (Fire Insurance) — Fondasi Utama
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Ini adalah fondasi perlindungan properti kos dan produk yang paling terjangkau. Asuransi
            kebakaran standar menjamin kerugian akibat{" "}
            <strong className="text-navy">FLEXAS</strong>: <em>Fire</em> (kebakaran),{" "}
            <em>Lightning</em> (petir), <em>Explosion</em> (ledakan), <em>Aircraft impact</em>{" "}
            (kejatuhan pesawat), dan <em>Smoke</em> (asap). Premi dihitung berdasarkan{" "}
            <strong className="text-navy">kelas konstruksi bangunan</strong> (Kelas 1 untuk
            beton/bata, Kelas 2 semi-permanen, Kelas 3 kayu/bambu) dan nilai pertanggungan.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Untuk kos-kosan, asuransi kebakaran bisa mencakup:
          </p>
          <ul className="flex flex-col gap-2 mb-6 pl-4">
            {[
              "Bangunan saja (struktur, dinding, atap, instalasi)",
              "Bangunan + isi (perabot, AC, water heater, peralatan dapur bersama)",
              "Atau keduanya dengan nilai pertanggungan terpisah",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-base text-[#475569]">
                <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Pelajari lebih lengkap di halaman{" "}
            <Link href="/asuransi-properti/kebakaran" className="text-gold font-semibold hover:underline">
              asuransi kebakaran kos dan ruko di Yogyakarta
            </Link>
            , termasuk cara menentukan kelas konstruksi yang tepat untuk bangunan kos Anda.
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            2. Perluasan Gempa & Banjir — Wajib untuk Kos di DIY
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Asuransi kebakaran standar <strong className="text-navy">tidak</strong> otomatis menjamin
            banjir dan gempa bumi. Kedua risiko ini memerlukan penambahan perluasan (endorsement/rider)
            secara eksplisit. Untuk kos di Yogyakarta, perluasan gempa bumi adalah{" "}
            <strong className="text-navy">keharusan mutlak</strong>, bukan pilihan.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Penting diketahui: di Yogyakarta terdapat <strong className="text-navy">dua zona tarif gempa</strong>
            {" "}yang berbeda sesuai regulasi OJK:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-50 border border-orange-200 rounded-[14px] p-5">
              <div className="font-heading text-orange-800 font-bold text-sm mb-2">🌋 Zona 4 — Sleman, Kulon Progo, Gunungkidul, Kota Yogyakarta</div>
              <p className="text-xs leading-relaxed text-[#475569]">
                Tarif gempa untuk kos/ruko: <strong className="text-orange-700">±0,143‰</strong> dari nilai pertanggungan per tahun. Kos di Jakal, Seturan, Condongcatur masuk zona ini.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-[14px] p-5">
              <div className="font-heading text-red-800 font-bold text-sm mb-2">🌋 Zona 5 — Bantul (risiko lebih tinggi)</div>
              <p className="text-xs leading-relaxed text-[#475569]">
                Tarif gempa untuk kos/ruko: <strong className="text-red-700">±0,190‰</strong> dari nilai pertanggungan per tahun. Kos di Sewon, Imogiri, Bantul kota masuk zona ini.
              </p>
            </div>
          </div>

          <div className="bg-gold/8 border border-gold/25 rounded-[14px] p-5 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">💡</span>
              <div>
                <div className="font-semibold text-navy mb-1">Tips dari Praktisi</div>
                <p className="text-sm leading-[1.75] text-[#475569]">
                  Pemilik kos di kawasan Sleman (Jakal, Seturan, Pogung) <strong>wajib</strong> menambahkan
                  perluasan gempa. Pemilik kos di Bantul wajib tambah gempa Zona 5 sekaligus perluasan banjir.
                  Biaya surcharge sangat terjangkau — umumnya hanya sekitar 10–20% tambahan dari premi dasar.
                  Pelajari lebih lanjut tentang{" "}
                  <Link href="/asuransi-properti/banjir-gempa" className="text-gold font-semibold hover:underline">
                    perluasan asuransi banjir dan gempa untuk properti di Jogja
                  </Link>.
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            3. Property All Risk (PAR) — untuk Kos Skala Besar & Premium
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Jika Anda memiliki kos dengan lebih dari 20 kamar, atau kos yang dilengkapi fasilitas
            premium seperti kolam renang, coworking space, atau rooftop — pertimbangkan{" "}
            <Link href="/asuransi-properti/property-all-risk" className="text-gold font-semibold hover:underline">
              Property All Risk (PAR)
            </Link>. Produk ini memberikan perlindungan paling komprehensif dengan prinsip{" "}
            <em>"semua risiko dijamin kecuali yang dikecualikan"</em> — jauh lebih luas dibanding
            asuransi kebakaran biasa. PAR umumnya sudah mencakup banjir dan gempa dalam satu paket,
            dengan opsi penambahan Business Interruption (BI) untuk mengganti pendapatan sewa yang
            hilang selama masa perbaikan pasca-klaim.
          </p>

          {/* CTA INLINE */}
          <div className="bg-navy rounded-[18px] p-7 mb-10 text-center">
            <div className="font-heading text-white text-[1.2rem] font-bold mb-2">
              Tidak Yakin Produk Mana yang Tepat?
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-[420px] mx-auto">
              Konsultasi langsung dengan Pak Rio — praktisi asuransi kerugian lokal di Yogyakarta.
              Gratis, tanpa tekanan, dan rekomendasi berdasarkan kondisi kos Anda yang sebenarnya.
            </p>
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all"
            >
              💬 Konsultasi Gratis via WhatsApp
            </a>
          </div>

          {/* SECTION 4 — TABEL SIMULASI PREMI */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Simulasi Premi Asuransi Kos di Yogyakarta
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Salah satu pertanyaan paling sering dari pemilik kos adalah: <em>"Berapa sebenarnya
            biaya asuransi untuk kos saya?"</em> Berikut simulasi perhitungan premi berdasarkan
            berbagai skenario nyata kos-kosan di Yogyakarta. Semua angka menggunakan tarif referensi
            yang berlaku untuk <strong className="text-navy">konstruksi Kelas 1 (beton/bata)</strong>:
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-3 py-3 rounded-tl-[10px] font-semibold text-xs">Skenario Kos</th>
                  <th className="text-left px-3 py-3 font-semibold text-xs">Nilai Bangunan</th>
                  <th className="text-left px-3 py-3 font-semibold text-xs">Premi Kebakaran/Thn</th>
                  <th className="text-left px-3 py-3 font-semibold text-xs">+ Premi Gempa/Thn</th>
                  <th className="text-left px-3 py-3 rounded-tr-[10px] font-semibold text-xs">Total Estimasi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kos 6 kamar, Seturan/Sleman (Zona 4)", "Rp 350 juta", "Rp 281.000", "Rp 500.000", "~Rp 781.000 + admin"],
                  ["Kos 10 kamar, Jakal Km 8/Sleman (Zona 4)", "Rp 600 juta", "Rp 482.000", "Rp 858.000", "~Rp 1.340.000 + admin"],
                  ["Kos 15 kamar, Condongcatur/Sleman (Zona 4)", "Rp 900 juta", "Rp 723.000", "Rp 1.287.000", "~Rp 2.010.000 + admin"],
                  ["Kos 8 kamar, Sewon/Bantul (Zona 5)", "Rp 480 juta", "Rp 386.000", "Rp 912.000", "~Rp 1.298.000 + admin"],
                  ["Kos 12 kamar semi-permanen, Kelas 2", "Rp 400 juta", "Rp 356.000", "–", "~Rp 356.000 + admin*"],
                  ["Kos premium 20 kamar, PAR komprehensif", "Rp 1,5 miliar", "Sudah termasuk PAR", "Sudah di PAR", "~Rp 2,8–3,5 juta"],
                ].map(([s, n, kb, gm, tot], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="px-3 py-3 text-navy font-medium text-xs">{s}</td>
                    <td className="px-3 py-3 text-[#475569] text-xs">{n}</td>
                    <td className="px-3 py-3 text-[#475569] text-xs">{kb}</td>
                    <td className="px-3 py-3 text-[#475569] text-xs">{gm}</td>
                    <td className="px-3 py-3 text-gold font-bold text-xs">{tot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5A6472] mb-6 leading-relaxed">
            * Kelas 2 (semi-permanen) tidak memenuhi syarat untuk perluasan gempa bumi sesuai ketentuan
            produk standard. Biaya administrasi polis (Rp 30.000–40.000 per polis) belum termasuk dalam angka di atas.
            Premi final ditentukan perusahaan asuransi setelah evaluasi. Gunakan{" "}
            <Link href="/asuransi-properti#kalkulator" className="text-gold hover:underline">
              kalkulator premi interaktif kami
            </Link>{" "}
            untuk estimasi yang lebih akurat sesuai kondisi kos Anda.
          </p>

          {/* KALKULATOR CTA BLOCK */}
          <div className="bg-gold/8 border-2 border-gold/30 rounded-[18px] p-6 mb-10 flex flex-col sm:flex-row gap-5 items-center">
            <div className="text-5xl flex-shrink-0">🧮</div>
            <div className="flex-1">
              <div className="font-heading text-navy font-bold text-[1.1rem] mb-1">
                Hitung Premi Kos Anda Sekarang
              </div>
              <p className="text-sm leading-relaxed text-[#475569] mb-3">
                Masukkan jenis properti (kos-kosan), kelas konstruksi, nilai bangunan, dan pilih
                perluasan banjir/gempa. Kalkulator kami akan menghitung estimasi premi per tahun
                secara otomatis — termasuk pemisahan polis kebakaran dan gempa bumi.
              </p>
              <Link
                href="/asuransi-properti#kalkulator"
                className="inline-block bg-gold text-navy px-6 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all"
              >
                Buka Kalkulator Premi →
              </Link>
            </div>
          </div>

          {/* SECTION 5 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Apa yang Dijamin dan Tidak Dijamin Asuransi Kos?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Memahami klausul pengecualian (exclusion clause) sama pentingnya dengan memahami manfaat
            polis. Inilah yang sering tidak dijelaskan secara lengkap oleh agen penjual:
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
                  "Banjir (wajib tambah perluasan)",
                  "Gempa bumi (wajib tambah perluasan)",
                  "Angin topan / badai (dengan perluasan)",
                  "Kerusakan akibat pesawat jatuh",
                  "Kerobohan bangunan lain (dengan perluasan)",
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
                  "Perang dan terorisme",
                  "Kerugian akibat penipuan penghuni",
                  "Kerusakan sengaja oleh pemilik",
                  "Kehilangan pendapatan sewa (kecuali ada BI)",
                  "Kerusakan akibat pemeliharaan yang diabaikan",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="text-red-700 font-bold flex-shrink-0 mt-0.5">✗</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gold/8 border border-gold/25 rounded-[14px] p-5 mb-10">
            <p className="text-sm leading-[1.75] text-[#475569]">
              <strong className="text-navy">Catatan penting:</strong> Salah satu keluhan tersering
              pemilik kos yang mengalami klaim adalah tidak tahu bahwa banjir atau gempa tidak
              otomatis dijamin. Praktisi kami selalu memastikan semua klausul pengecualian
              dijelaskan secara transparan sebelum polis diterbitkan — termasuk implikasi
              <strong className="text-navy"> coinsurance clause</strong> yang bisa mengurangi
              pembayaran klaim jika nilai pertanggungan terlalu rendah.
            </p>
          </div>

          {/* SECTION 6 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Cara Menentukan Nilai Pertanggungan yang Benar — Hindari Underinsurance
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Kesalahan fatal yang paling sering dilakukan pemilik kos adalah{" "}
            <strong className="text-navy">underinsurance</strong> — menetapkan nilai pertanggungan
            terlalu rendah untuk menghemat premi. Ini justru berbahaya karena jika terjadi klaim,
            ganti rugi yang diterima akan proporsional dengan rasio antara nilai pertanggungan dan
            nilai sebenarnya.
          </p>

          <div className="bg-navy rounded-[14px] p-5 mb-6 text-white">
            <div className="font-heading text-gold text-sm font-semibold mb-2">📐 Contoh Nyata Dampak Underinsurance</div>
            <p className="text-xs leading-relaxed text-white/80 mb-2">
              Kos Pak Budi di Pogung, Sleman dibangun dengan biaya penggantian Rp 800 juta. Tapi
              saat beli asuransi, Pak Budi mengasuransikan hanya Rp 400 juta (50%) untuk hemat premi.
            </p>
            <p className="text-xs leading-relaxed text-white/80 mb-2">
              Terjadi kebakaran yang merusak sebagian bangunan dengan kerugian nyata Rp 200 juta.
            </p>
            <p className="text-xs leading-relaxed text-gold font-semibold">
              Ganti rugi yang diterima = (400/800) × 200 juta = <span className="text-red-400">hanya Rp 100 juta!</span>
              {" "}Padahal kerugian Rp 200 juta.
            </p>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Nilai pertanggungan yang benar adalah{" "}
            <strong className="text-navy">biaya penggantian bangunan (replacement cost)</strong> —
            berapa biaya yang dibutuhkan untuk membangun ulang bangunan tersebut dari nol dengan
            spesifikasi yang sama, di lokasi yang sama, dengan harga material dan upah konstruksi
            saat ini. Nilai ini tidak termasuk harga tanah.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Cara sederhana menghitung replacement cost kos Anda: kalikan luas bangunan (m²) dengan
            estimasi biaya konstruksi per meter persegi saat ini di Yogyakarta. Untuk panduan lengkap,
            baca artikel kami:{" "}
            <Link href="/artikel/cara-menghitung-nilai-asuransi" className="text-gold font-semibold hover:underline">
              Cara Menghitung Nilai Asuransi yang Benar (Hindari Underinsurance)
            </Link>.
          </p>

          {/* SECTION 7 — PROSES KLAIM */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Cara Mengajukan Klaim Asuransi Kos yang Benar
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Banyak pemilik kos yang ragu membeli asuransi karena khawatir proses klaimnya rumit.
            Kenyataannya, klaim bisa berjalan lancar jika prosedurnya dipahami sejak awal dan
            dilakukan bersama praktisi yang berpengalaman:
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {[
              {
                no: "01",
                judul: "Pastikan Keselamatan Penghuni Terlebih Dahulu",
                isi: "Segera evakuasi penghuni. Untuk kebakaran, hubungi Dinas Pemadam Kebakaran Kota/Kabupaten (Sleman: 0274-868419, Kota Yogya: 113). Jangan masuk ke bangunan yang masih terbakar atau rusak parah akibat gempa.",
              },
              {
                no: "02",
                judul: "Laporkan ke Praktisi/Asuransi Maksimal 3×24 Jam",
                isi: "Keterlambatan pelaporan bisa menjadi alasan klaim ditolak. Jika Anda klien Asuransi Jogja, cukup WhatsApp Pak Rio dan kami akan memandu seluruh prosesnya dari awal.",
              },
              {
                no: "03",
                judul: "Dokumentasikan Semua Kerusakan",
                isi: "Foto dan video kondisi bangunan dari berbagai sudut — bagian luar, dalam, dan detail kerusakan — sebelum ada pembersihan atau perbaikan darurat. Ini adalah bukti utama yang akan diverifikasi adjustor.",
              },
              {
                no: "04",
                judul: "Kumpulkan Dokumen Pendukung",
                isi: "Dokumen wajib: polis asuransi, KTP pemilik, sertifikat/IMB bangunan, foto kerusakan, surat keterangan kebakaran dari Damkar (untuk kasus kebakaran), dan daftar kerugian beserta estimasi nilainya.",
              },
              {
                no: "05",
                judul: "Pendampingan Survei oleh Adjustor",
                isi: "Perusahaan asuransi mengirim loss adjustor untuk memverifikasi kerusakan. Hadiri proses ini bersama praktisi Anda. Praktisi yang berpihak pada Anda akan memastikan penilaian kerugian dilakukan secara adil dan lengkap.",
              },
              {
                no: "06",
                judul: "Persetujuan dan Pencairan Dana",
                isi: "Setelah verifikasi lengkap, perusahaan asuransi menerbitkan discharge voucher (surat persetujuan klaim). Dana ganti rugi dicairkan ke rekening Anda, biasanya dalam 14–30 hari kerja sejak survei selesai.",
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
                  <p className="text-sm leading-[1.7] text-[#475569]">{step.isi}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 8 — PRAKTISI vs AGEN */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Praktisi vs Agen Asuransi: Mana yang Lebih Menguntungkan Pemilik Kos?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Membeli asuransi langsung dari agen pemasaran perusahaan memang mudah. Tapi ada
            perbedaan mendasar yang sangat terasa — terutama saat klaim terjadi:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">Aspek</th>
                  <th className="text-left px-4 py-3 font-semibold">Agen Perusahaan Asuransi</th>
                  <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold">Praktisi Independen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pilihan Produk", "Hanya produk satu perusahaan", "Komparasi dari banyak perusahaan"],
                  ["Tujuan Utama", "Mencapai target penjualan", "Kepentingan terbaik klien"],
                  ["Penjelasan Polis", "Fokus pada manfaat", "Termasuk semua klausul pengecualian"],
                  ["Saat Klaim", "Mewakili perusahaan asuransi", "Mendampingi dan membela klien"],
                  ["Analisis Risiko Lokasi", "Jarang dilakukan", "Selalu dilakukan sebelum rekomendasi"],
                  ["Biaya", "Gratis (dibayar perusahaan)", "Gratis (dari komisi produk terpilih)"],
                ].map(([a, b, c], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-navy">{a}</td>
                    <td className="px-4 py-3 text-[#475569]">{b}</td>
                    <td className="px-4 py-3 text-green-700 font-medium">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Sebagai praktisi asuransi independen yang berbasis di Yogyakarta, kami di{" "}
            <Link href="/" className="text-gold font-semibold hover:underline">
              Asuransi Jogja
            </Link>{" "}
            tidak terikat pada satu perusahaan asuransi manapun. Rekomendasi kami murni berdasarkan
            kebutuhan dan kepentingan terbaik Anda. Kami memahami betul karakteristik risiko per
            kawasan di Yogyakarta — dari kos di Seturan yang rawan korsleting, kos di Jakal yang
            perlu perluasan vulkanik, hingga kos di Bantul yang memerlukan tarif gempa Zona 5.
          </p>

          {/* PENUTUP */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Kesimpulan: Kos Anda Bekerja 24 Jam — Lindungi Juga 24 Jam
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Bisnis kos-kosan di Yogyakarta adalah salah satu bentuk investasi properti paling stabil
            dan menguntungkan di Indonesia. Permintaan tidak pernah surut, dan kota ini terus tumbuh
            sebagai pusat pendidikan nasional. Tapi justru karena itulah, melindungi aset fisik kos
            Anda adalah kewajiban, bukan pilihan.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Premi asuransi kos sebenarnya sangat terjangkau — untuk kos senilai Rp 600 juta, total
            premi kebakaran + gempa berkisar Rp 1,2–1,6 juta per tahun. Kurang dari biaya memperbaiki
            satu unit AC yang rusak. Dibandingkan pendapatan sewa yang bisa mencapai puluhan juta
            rupiah per tahun, investasi pada proteksi ini adalah keputusan finansial yang paling
            rasional yang bisa Anda ambil hari ini.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Hubungi kami untuk konsultasi gratis. Kami akan bantu menganalisis risiko spesifik
            lokasi kos Anda di Yogyakarta, merekomendasikan kombinasi produk yang paling efisien,
            menghitung nilai pertanggungan yang tepat, dan mendampingi seluruh proses klaim jika
            suatu saat diperlukan.
          </p>

          {/* FAQ SECTION */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-6 mt-12 leading-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <div className="flex flex-col mb-10">
            {faqKos.map((f, i) => (
              <details key={i} className="border-b border-black/8 group">
                <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none gap-4">
                  <span>{f.q}</span>
                  <span className="text-gold text-xl flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-5 pr-8">{f.a}</p>
              </details>
            ))}
          </div>

          {/* INTERNAL LINKS BOX */}
          <div className="bg-cream border border-black/6 rounded-[18px] p-6 mb-10">
            <div className="font-heading text-navy font-bold text-[1rem] mb-4">
              📚 Artikel &amp; Halaman Terkait
            </div>
            <div className="flex flex-col gap-2">
              {[
                { href: "/asuransi-properti", label: "Asuransi Properti Jogja – Panduan Lengkap & Kalkulator Premi" },
                { href: "/asuransi-properti#kalkulator", label: "🧮 Kalkulator Premi Asuransi Properti – Hitung Estimasi Sekarang" },
                { href: "/asuransi-properti/kebakaran", label: "Asuransi Kebakaran Rumah, Kos & Ruko di Yogyakarta" },
                { href: "/asuransi-properti/banjir-gempa", label: "Perluasan Asuransi Banjir & Gempa di Yogyakarta" },
                { href: "/asuransi-properti/property-all-risk", label: "Property All Risk – Proteksi Komprehensif untuk Kos Premium" },
                { href: "/artikel/cara-menghitung-nilai-asuransi", label: "Cara Menghitung Nilai Asuransi yang Benar (Hindari Underinsurance)" },
                { href: "/artikel/asuransi-rumah-tinggal-jogja", label: "Panduan Asuransi Rumah Tinggal di Yogyakarta" },
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
