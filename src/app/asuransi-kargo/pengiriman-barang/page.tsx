import type { Metadata } from "next";
import Link from "next/link";
import KargoLayout from "@/components/kargo/KargoLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Pengiriman Barang Darat Jogja – Panduan Lengkap Inland Transit 2025",
  description:
    "Panduan lengkap asuransi pengiriman barang darat di Yogyakarta: inland transit untuk UMKM, logistik, dan ekspedisi. Contoh kasus nyata, cara klaim, dan perbandingan klausul ICC. Konsultasi gratis dengan agen berpengalaman di Jogja.",
  keywords:
    "asuransi pengiriman barang jogja, inland transit yogyakarta, asuransi kargo darat jogja, asuransi truk barang yogyakarta, asuransi kereta barang jogja, cara klaim asuransi kargo, asuransi umkm jogja",
  alternates: {
    canonical: "https://asuransijogja.biz.id/asuransi-kargo/pengiriman-barang",
  },
  openGraph: {
    title: "Asuransi Pengiriman Barang Darat Jogja – Panduan Lengkap Inland Transit 2025",
    url: "https://asuransijogja.biz.id/asuransi-kargo/pengiriman-barang",
  },
};

/* ─────────────────────────── DATA ─────────────────────────── */

const risikoPerjalanan = [
  {
    icon: "🚧",
    label: "Kecelakaan Kendaraan",
    desc: "Truk terguling, tabrakan, atau terperosok — barang yang dibawa ikut rusak meski kemasan tidak terbuka. Jalur Jogja–Semarang via Bawen dan jalur Jogja–Surabaya via Ngawi termasuk rute dengan frekuensi kecelakaan truk muatan yang tinggi.",
  },
  {
    icon: "🔥",
    label: "Kebakaran Kendaraan",
    desc: "Kebakaran pada truk atau gudang transit bisa menghanguskan seluruh muatan dalam hitungan menit. Korsleting arus pendek pada unit refrigerator dan truk tua adalah penyebab paling umum.",
  },
  {
    icon: "🌊",
    label: "Banjir & Bencana Alam",
    desc: "Banjir bandang, longsor, dan jalan ambles adalah risiko nyata pada jalur pengiriman lintas Jawa. Musim hujan Oktober–Maret meningkatkan risiko ini secara signifikan.",
  },
  {
    icon: "🦹",
    label: "Pencurian & Perampokan",
    desc: "Pencurian muatan, pembobolan kontainer, dan perampokan truk masih terjadi — terutama di jalur malam dan rest area tertentu. Barang elektronik dan tekstil premium menjadi target utama.",
  },
  {
    icon: "💧",
    label: "Kerusakan Air & Kelembaban",
    desc: "Kebocoran atap truk bak terbuka, hujan masuk saat bongkar, atau kondensasi suhu dapat merusak barang tekstil, makanan, dan produk berbahan karton.",
  },
  {
    icon: "⚠️",
    label: "Kesalahan Penanganan",
    desc: "Barang pecah, terjatuh, atau salah tumpuk saat bongkar muat di gudang transit adalah risiko paling sering terjadi — dan paling sering tidak diganti oleh ekspedisi.",
  },
];

const kasusLokal = [
  {
    icon: "🏺",
    kasus: "Pengiriman Keramik Kasongan ke Jakarta",
    kronologi:
      "Seorang pengrajin gerabah dari Kasongan, Bantul mengirim 200 pcs keramik dekoratif senilai Rp 18.000.000 menggunakan ekspedisi reguler ke konsumen di Jakarta Selatan. Saat tiba, 67 pcs pecah akibat kemasan yang tidak memadai dan tumpukan yang salah.",
    tanpaAsuransi:
      "Ekspedisi hanya mengganti 10× ongkir = Rp 1.500.000. Pengrajin merugi Rp 16.500.000.",
    denganAsuransi:
      "Dengan polis inland transit ICC-B (kerusakan fisik), seluruh kerugian Rp 18.000.000 diganti penuh setelah surveyor menilai.",
    pelajaran: "Barang rapuh wajib diasuransikan dan didokumentasikan foto sebelum dikemas.",
  },
  {
    icon: "👗",
    kasus: "Pengiriman Batik Progo ke Surabaya",
    kronologi:
      "Pengusaha batik dari Jl. Tirtodipuran mengirim 50 kodi batik tulis ke distributor di Surabaya senilai Rp 35.000.000. Truk ekspedisi mengalami kecelakaan di jalur Ngawi — bak kanan rusak dan air hujan masuk membasahi seluruh muatan.",
    tanpaAsuransi:
      "Ekspedisi hanya mengganti kerusakan kendaraan, bukan muatan. Kerugian Rp 35.000.000 ditanggung pemilik.",
    denganAsuransi:
      "Dengan polis ICC-A (all risks), seluruh kerugian terganti termasuk kerusakan akibat air. Proses klaim selesai 10 hari kerja.",
    pelajaran: "Untuk batik dan tekstil bernilai tinggi, pilih ICC-A bukan ICC-C.",
  },
  {
    icon: "📱",
    kasus: "Pengiriman Laptop Refurbished ke Makassar",
    kronologi:
      "Toko elektronik di Malioboro Mall mengirim 20 unit laptop refurbished senilai Rp 80.000.000 via kargo udara dari Bandara YIA ke Makassar. Paket hilang saat transit di gudang kargo Makassar.",
    tanpaAsuransi: "Maskapai hanya mengganti USD 20/kg = ±Rp 1.200.000 per unit. Total: Rp 24.000.000 dari Rp 80.000.000.",
    denganAsuransi:
      "Dengan polis kargo udara all risks, 100% nilai Rp 80.000.000 terganti. Termasuk kehilangan total.",
    pelajaran: "Nilai deklarasi harus sesuai nilai faktur, bukan nilai taksiran rendah.",
  },
];

const jenisBarangWajib = [
  {
    icon: "👗",
    label: "Tekstil & Batik",
    alasan:
      "Produk unggulan UMKM Jogja. Batik tulis Rp 500.000–Rp 5.000.000/lembar sangat rentan noda, sobek, dan kerusakan air. Sekali muatan bisa Rp 20–50 juta.",
    klausul: "ICC-A",
    minimalNilai: "Rp 5 juta/kiriman",
  },
  {
    icon: "🏺",
    label: "Kerajinan & Gerabah",
    alasan:
      "Barang fragile dengan nilai seni tinggi. Perak Kotagede, gerabah Kasongan, dan ukiran kayu Jepara sangat rentan pecah. Ekspedisi hampir tidak pernah menanggung kerusakan jenis ini.",
    klausul: "ICC-B atau ICC-A",
    minimalNilai: "Rp 3 juta/kiriman",
  },
  {
    icon: "📱",
    label: "Elektronik & Gadget",
    alasan:
      "Laptop, kamera, dan ponsel sensitif terhadap guncangan, kelembaban, dan pencurian. Nilainya tinggi dan mudah dijual — target utama pencuri.",
    klausul: "ICC-A",
    minimalNilai: "Semua nilai",
  },
  {
    icon: "🍫",
    label: "Makanan & Oleh-oleh",
    alasan:
      "Bakpia, gudeg kaleng, dan produk UMKM pangan rentan kerusakan suhu dan fisik. Keterlambatan pengiriman pun bisa merusak produk yang punya shelf life pendek.",
    klausul: "ICC-B + klausul deteriorasi",
    minimalNilai: "Rp 5 juta/kiriman",
  },
  {
    icon: "🔧",
    label: "Mesin & Spare Part Industri",
    alasan:
      "Komponen mesin, part impor, dan peralatan teknis bernilai sangat tinggi. Kerusakan satu komponen bisa menghentikan produksi pabrik — kerugian berganda.",
    klausul: "ICC-A + SRCC",
    minimalNilai: "Semua nilai",
  },
  {
    icon: "🪑",
    label: "Furniture & Mebel",
    alasan:
      "Mebel kayu jati dan rotan dari sentra Prambanan dan Klaten sangat rawan lecet, patah, dan kerusakan cat. Volume besar = satu truk penuh = risiko tinggi.",
    klausul: "ICC-C atau ICC-B",
    minimalNilai: "Rp 10 juta/kiriman",
  },
];

const jenisUsaha = [
  {
    icon: "🏭",
    usaha: "UMKM Produk Kerajinan",
    contoh: "Pengrajin batik, gerabah Kasongan, perak Kotagede, tenun ATBM",
    alasan:
      "Kirim barang ke reseller dan marketplace nasional setiap minggu. Satu kecelakaan bisa menghabiskan modal berbulan-bulan.",
    frekuensi: "Polis terbuka (open cover) — lebih hemat untuk pengiriman rutin",
  },
  {
    icon: "🛒",
    usaha: "Toko Online & Reseller",
    contoh: "Seller Tokopedia/Shopee/TikTok Shop dengan omzet >Rp 50 juta/bulan",
    alasan:
      "Volume tinggi = risiko tinggi. Klaim pengembalian akibat kerusakan pengiriman bisa merusak rating toko. Asuransi memberi jaminan penggantian.",
    frekuensi: "Polis terbuka bulanan — paling efisien untuk volume besar",
  },
  {
    icon: "🏪",
    usaha: "Distributor & Grosir",
    contoh: "Distributor makanan, distributor tekstil, grosir spare part",
    alasan:
      "Pengiriman senilai puluhan hingga ratusan juta per truk. Satu kecelakaan truk = kerugian besar yang bisa mengancam arus kas.",
    frekuensi: "Per pengiriman atau polis terbuka",
  },
  {
    icon: "🚛",
    usaha: "Perusahaan Ekspedisi & Freight",
    contoh: "Usaha trucking lokal, armada pickup, jasa angkut barang Jogja",
    alasan:
      "Ekspedisi wajib punya asuransi kargo operator (CMR) untuk melindungi muatan pelanggan yang dipercayakan. Tanpa ini, klaim pelanggan ditanggung sendiri.",
    frekuensi: "Polis operator kargo — wajib sebelum beroperasi",
  },
  {
    icon: "🏗️",
    usaha: "Kontraktor & Proyek",
    contoh: "Pengiriman material proyek, alat berat, besi beton lintas provinsi",
    alasan:
      "Material proyek senilai ratusan juta dikirim ke lokasi terpencil. Keterlambatan karena kerusakan material = denda keterlambatan proyek.",
    frekuensi: "Per proyek atau per pengiriman",
  },
  {
    icon: "🌿",
    usaha: "Eksportir Komoditas",
    contoh: "Eksportir kopi Merapi, teh, kakao, dan rempah-rempah Jogja",
    alasan:
      "Untuk ekspor, asuransi kargo bukan sekadar pilihan — sering menjadi syarat kontrak dengan buyer internasional (FOB/CIF).",
    frekuensi: "Per shipment — wajib untuk Letter of Credit",
  },
];

const perbandinganKlausul = [
  {
    klausul: "ICC-C",
    nama: "Basic Coverage",
    cocok: "Barang umum, tidak mudah rusak",
    dijamin: ["Kebakaran & ledakan", "Kandas / tenggelam", "Tabrakan kendaraan", "Pembuangan darurat"],
    tidakDijamin: ["Pencurian", "Air hujan masuk", "Kerusakan fisik biasa", "Pencemaran"],
    premi: "Paling rendah (~0,1–0,2%)",
    color: "bg-slate-50 border-slate-200",
  },
  {
    klausul: "ICC-B",
    nama: "Standard Coverage",
    cocok: "Kerajinan, furniture, makanan",
    dijamin: ["Semua ICC-C", "Gempa bumi & gunung meletus", "Kerusakan air (banjir, hujan)", "Robakan kontainer"],
    tidakDijamin: ["Pencurian", "Kerusakan kemasan biasa", "Kelambatan pengiriman"],
    premi: "Menengah (~0,2–0,4%)",
    color: "bg-blue-50 border-blue-200",
  },
  {
    klausul: "ICC-A",
    nama: "All Risks",
    cocok: "Elektronik, batik, barang senilai > Rp 5 juta",
    dijamin: ["Semua risiko kecuali pengecualian", "Pencurian", "Kerusakan fisik", "Kontaminasi"],
    tidakDijamin: ["Cacat bawaan barang", "Risiko perang (kecuali ditambah)", "Kemasan tidak layak"],
    premi: "Tertinggi (~0,3–0,6%)",
    color: "bg-emerald-50 border-emerald-200",
    recommended: true,
  },
];

const prosesKlaim = [
  {
    step: "01",
    icon: "📸",
    label: "Dokumentasi Kerusakan Segera",
    desc: "Begitu barang tiba dalam kondisi rusak, foto dan video kondisi kemasan SEBELUM dibuka. Foto label pengiriman, kondisi luar, dan kondisi dalam. Jangan tanda tangani resi 'barang diterima baik' — tulis catatan 'diterima dengan kondisi rusak'.",
    warning: "Tanda tangan resi tanpa catatan = Anda menyatakan barang baik-baik saja. Klaim otomatis ditolak.",
  },
  {
    step: "02",
    icon: "📞",
    label: "Lapor dalam 3×24 Jam",
    desc: "Hubungi Pak Rio segera setelah kerusakan ditemukan — idealnya dalam 24 jam pertama. Keterlambatan pelaporan melampaui 3×24 jam dapat mempengaruhi validitas klaim Anda. Jangan buang kemasan rusak dulu.",
    warning: "Jangan perbaiki atau buang barang rusak sebelum surveyor dari perusahaan asuransi melakukan pemeriksaan.",
  },
  {
    step: "03",
    icon: "📄",
    label: "Siapkan Dokumen Lengkap",
    desc: "Dokumen yang wajib tersedia: (1) Polis asuransi, (2) Invoice / faktur barang, (3) Surat jalan / AWB / resi pengiriman, (4) Foto kerusakan, (5) Bukti pelaporan ke ekspedisi. Dokumen yang lengkap mempercepat proses secara signifikan.",
    warning: "Nilai pada invoice harus sama dengan nilai yang dideklarasikan di polis. Undervalue = klaim dibayar proporsional.",
  },
  {
    step: "04",
    icon: "🔍",
    label: "Survei & Penilaian Kerugian",
    desc: "Surveyor independen dari perusahaan asuransi akan menghubungi Anda untuk jadwal pemeriksaan. Surveyor akan menilai penyebab kerusakan, besaran kerugian, dan kesesuaian dengan klausul polis. Kooperatif dan jujur adalah kunci.",
    warning: "Survei biasanya dilakukan dalam 3–5 hari kerja setelah laporan diterima.",
  },
  {
    step: "05",
    icon: "✅",
    label: "Persetujuan & Pembayaran",
    desc: "Setelah survei dan dokumen disetujui, Letter of Undertaking (LOU) diterbitkan. Pembayaran ganti rugi dilakukan dalam 7–14 hari kerja sejak persetujuan. Untuk klaim besar, mungkin diperlukan waktu lebih lama.",
    warning: "Tanda tangani LOU hanya jika nilai persetujuan sudah sesuai. Anda masih bisa negosiasi sebelum menandatangani.",
  },
];

const tipsPengiriman = [
  {
    tip: "Deklarasikan nilai barang yang sesungguhnya",
    detail:
      "Undervalue untuk hemat premi adalah keputusan yang sangat merugikan. Jika barang Rp 10 juta dideklarasikan Rp 5 juta, klaim hanya dibayar 50% = Rp 5 juta. Selisih premi hanya ribuan rupiah, tetapi risikonya jutaan.",
  },
  {
    tip: "Kemasan yang layak adalah syarat klaim",
    detail:
      "Polis dapat menolak klaim jika kemasan tidak memadai untuk jenis barang. Barang elektronik wajib bubble wrap + styrofoam. Gerabah wajib packing kayu. Foto kemasan sebelum dikirim sebagai bukti.",
  },
  {
    tip: "Simpan semua dokumen pengiriman",
    detail:
      "Invoice asli, surat jalan, foto barang sebelum dikirim, dan konfirmasi pembayaran ekspedisi. Dokumen ini adalah nyawa klaim Anda. Simpan dalam folder digital (Google Drive atau WhatsApp Saved Messages).",
  },
  {
    tip: "Pilih ICC-A untuk barang di atas Rp 5 juta",
    detail:
      "Selisih premi ICC-A vs ICC-C untuk barang Rp 10 juta hanya sekitar Rp 30.000–Rp 50.000 per pengiriman. Tetapi cakupan perlindungannya jauh lebih luas, termasuk pencurian dan kerusakan air.",
  },
  {
    tip: "Pertimbangkan polis terbuka jika kirim rutin",
    detail:
      "Jika Anda mengirim barang >4× sebulan, polis terbuka (open cover) jauh lebih hemat dan praktis. Satu polis untuk semua pengiriman dalam periode tertentu — tidak perlu daftar satu per satu.",
  },
  {
    tip: "Asuransikan atas nama pengirim atau penerima",
    detail:
      "Siapa yang menanggung risiko sesuai kontrak jual-beli? Jika sudah FOB (Free On Board), barang menjadi risiko pembeli saat di atas kendaraan. Jika CIF, penjual yang menanggung. Sesuaikan nama tertanggung di polis.",
  },
];

/* ─────────────────────────── FAQ ─────────────────────────── */
const faqItems = [
  {
    q: "Apakah asuransi pengiriman berbeda dengan asuransi yang ditawarkan ekspedisi?",
    a: "Ya, sangat berbeda. Asuransi ekspedisi biasanya hanya menanggung kehilangan total, dengan nilai ganti rugi maksimal 10× ongkos kirim. Asuransi kargo yang kami tawarkan adalah polis dari perusahaan asuransi resmi OJK, menanggung 100% nilai barang, dengan klausul ICC internasional yang diakui secara hukum.",
  },
  {
    q: "Berapa premi asuransi pengiriman barang?",
    a: "Premi dihitung dari nilai barang × rate klausul. Rata-rata: ICC-C 0,1–0,2%, ICC-B 0,2–0,4%, ICC-A 0,3–0,6%. Contoh: barang Rp 10.000.000 dengan ICC-A, premi sekitar Rp 30.000–Rp 60.000. Sangat terjangkau dibanding risiko kerugian penuh.",
  },
  {
    q: "Apakah bisa diasuransikan untuk pengiriman sekali kirim saja?",
    a: "Bisa. Untuk pengiriman sporadis, polis per-pengiriman (single voyage) tersedia. Untuk yang rutin, polis terbuka lebih hemat. Kami bantu hitungkan mana yang lebih efisien untuk volume pengiriman Anda.",
  },
  {
    q: "Bagaimana jika ekspedisi sudah memberikan sertifikat asuransi?",
    a: "Baca baik-baik syarat dan ketentuan sertifikat tersebut. Kebanyakan 'asuransi ekspedisi' hanya menjamin kehilangan total dengan nilai terbatas. Jika nilai barang Anda signifikan, polis terpisah memberikan perlindungan yang jauh lebih kuat dan prosedur klaim yang lebih transparan.",
  },
  {
    q: "Apakah kerusakan akibat kemasan yang kurang baik bisa diklaim?",
    a: "Umumnya tidak, terutama untuk ICC-C dan ICC-B. Polis mensyaratkan kemasan yang 'layak untuk pengiriman' (seaworthy packing). Ini sebabnya kemasan yang benar sangat penting. Untuk ICC-A pun, jika bisa dibuktikan kerusakan bukan semata karena kemasan buruk, klaim masih bisa diproses.",
  },
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export default function PengirimanBarangPage() {
  return (
    <KargoLayout
      breadcrumbs={[
        { label: "Asuransi Kargo", href: "/asuransi-kargo" },
        { label: "Pengiriman Barang Darat" },
      ]}
    >
      {/* ══════════════ HERO ══════════════ */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)",
          }}
        />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">
          📦
        </div>
        <div className="relative z-10 max-w-3xl">
          <Link
            href="/asuransi-kargo"
            className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline"
          >
            ← Asuransi Kargo
          </Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Inland Transit · Yogyakarta
          </div>

          {/* ── H1 ── */}
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Pengiriman
            <br />
            <em className="not-italic text-gold">Barang Darat</em>
            <br />
            dari Jogja ke Seluruh Indonesia
          </h1>

          <p className="text-white/85 text-base leading-[1.85] max-w-[560px] mb-3">
            Ribuan produk UMKM Yogyakarta — batik, kerajinan, makanan, dan furnitur — dikirim setiap
            hari ke seluruh penjuru Indonesia. Namun banyak pelaku usaha baru menyadari pentingnya
            asuransi pengiriman setelah mengalami kerugian yang tidak diganti ekspedisi.
          </p>
          <p className="text-white/70 text-sm leading-[1.8] max-w-[540px] mb-8">
            Halaman ini menjelaskan secara lengkap: apa itu inland transit insurance, barang apa yang
            wajib diasuransikan, jenis usaha yang harus memilikinya, dan bagaimana proses klaim
            bekerja — berdasarkan pengalaman nyata melayani pelaku usaha di Yogyakarta.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline"
            >
              💬 Konsultasi Gratis dengan Pak Rio
            </a>
            <a
              href="#perbandingan-klausul"
              className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline"
            >
              Bandingkan Klausul ICC →
            </a>
          </div>

          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { num: "Door to Door", lbl: "Proteksi Penuh" },
              { num: "ICC A/B/C", lbl: "Pilihan Klausul" },
              { num: "7–14 Hari", lbl: "Proses Klaim" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-heading text-gold text-lg font-bold">{s.num}</div>
                <div className="text-white/60 text-xs mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ APA ITU INLAND TRANSIT ══════════════ */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Edukasi Dasar
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy mb-5">
            Apa Itu Asuransi Pengiriman Barang Darat (Inland Transit)?
          </h2>
          <div className="prose prose-base max-w-none text-navy2 space-y-4 leading-relaxed">
            <p>
              <strong>Asuransi pengiriman barang darat</strong> — atau dalam industri dikenal sebagai{" "}
              <strong>Inland Transit Insurance</strong> — adalah produk asuransi yang melindungi barang
              Anda selama perjalanan melalui jalur darat, mulai dari gudang pengirim hingga ke tangan
              penerima.
            </p>
            <p>
              Berbeda dengan asuransi kendaraan (yang melindungi truk atau kendaraan pengangkut),
              inland transit insurance fokus pada <strong>muatan atau kargo</strong> yang dibawa.
              Jika barang rusak, hilang, atau hancur dalam perjalanan — karena kecelakaan, pencurian,
              bencana alam, atau kesalahan penanganan — perusahaan asuransi mengganti kerugian
              berdasarkan nilai yang tertera di polis.
            </p>
            <p>
              Polis ini menggunakan standar klausul internasional{" "}
              <strong>ICC (Institute Cargo Clauses)</strong> yang dikeluarkan oleh Institute of London
              Underwriters — diakui secara hukum di seluruh dunia dan menjadi acuan perusahaan
              asuransi di Indonesia.
            </p>

            <div className="bg-amber-50 border-l-4 border-gold p-5 rounded-r-lg mt-6">
              <p className="font-semibold text-navy mb-2">
                📌 Mengapa Asuransi Ekspedisi Tidak Cukup?
              </p>
              <p className="text-sm text-navy2">
                Berdasarkan <strong>UU Pengangkutan No. 22 Tahun 2009</strong> dan ketentuan umum
                ekspedisi di Indonesia, tanggung jawab perusahaan ekspedisi atas kerusakan atau
                kehilangan barang{" "}
                <strong>dibatasi maksimal 10× ongkos kirim</strong>. Artinya: untuk kiriman Rp
                10.000.000 dengan ongkir Rp 100.000, ekspedisi hanya wajib mengganti Rp 1.000.000.
                Sisanya menjadi kerugian Anda sepenuhnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ RISIKO PERJALANAN ══════════════ */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Risiko Nyata di Lapangan
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Apa yang Bisa Terjadi Selama Pengiriman?
          </h2>
          <p className="text-base text-[#475569] max-w-[480px] mx-auto mt-3">
            Setiap risiko di bawah ini bisa terjadi pada rute pengiriman dari Yogyakarta ke kota
            mana pun di Indonesia
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {risikoPerjalanan.map((r) => (
            <div
              key={r.label}
              className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{r.label}</div>
              <p className="text-sm leading-relaxed text-[#475569]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ KASUS LOKAL JOGJA ══════════════ */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Kasus Nyata di Jogja
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Apa yang Terjadi Ketika Tidak Ada Asuransi?
          </h2>
          <p className="text-base text-[#475569] max-w-[480px] mx-auto mt-3">
            Tiga contoh kasus yang sering terjadi pada pelaku usaha di Yogyakarta — dan perbedaannya
            jika memiliki asuransi kargo
          </p>
        </div>
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {kasusLokal.map((k, i) => (
            <div
              key={i}
              className="bg-cream rounded-card border border-black/6 overflow-hidden"
            >
              <div className="bg-navy px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">{k.icon}</span>
                <div>
                  <p className="font-heading text-white font-bold text-sm">{k.kasus}</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#475569] mb-1">
                    Kronologi
                  </p>
                  <p className="text-sm text-navy2 leading-relaxed">{k.kronologi}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-xs font-bold text-red-700 mb-1.5">❌ Tanpa Asuransi</p>
                    <p className="text-sm text-red-800 leading-relaxed">{k.tanpaAsuransi}</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <p className="text-xs font-bold text-emerald-700 mb-1.5">✅ Dengan Asuransi</p>
                    <p className="text-sm text-emerald-800 leading-relaxed">{k.denganAsuransi}</p>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex gap-2">
                  <span className="text-base">💡</span>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    <strong>Pelajaran:</strong> {k.pelajaran}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ BARANG YANG WAJIB DIASURANSIKAN ══════════════ */}
      <section id="jenis-barang" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Panduan Produk
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Jenis Barang yang Wajib Diasuransikan
          </h2>
          <p className="text-base text-[#475569] max-w-[500px] mx-auto mt-3">
            Bukan semua barang perlu diasuransikan dengan cara yang sama. Ini adalah panduan untuk
            produk-produk yang paling sering dikirim dari Yogyakarta
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {jenisBarangWajib.map((j) => (
            <div
              key={j.label}
              className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="text-3xl mb-3">{j.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{j.label}</div>
              <p className="text-sm leading-relaxed text-[#475569] flex-1 mb-4">{j.alasan}</p>
              <div className="border-t border-black/6 pt-3 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#475569]">Klausul Rekomendasi</span>
                  <span className="text-xs font-bold text-navy bg-gold/15 px-2 py-0.5 rounded-full">
                    {j.klausul}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#475569]">Minimal Asuransikan</span>
                  <span className="text-xs font-semibold text-navy">{j.minimalNilai}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ JENIS USAHA ══════════════ */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Siapa yang Perlu?
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Jenis Usaha yang Harus Memiliki Asuransi Pengiriman
          </h2>
          <p className="text-base text-[#475569] max-w-[500px] mx-auto mt-3">
            Apakah bisnis Anda masuk dalam kategori ini? Jika ya, pengiriman Anda sudah seharusnya
            terlindungi
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {jenisUsaha.map((j) => (
            <div
              key={j.usaha}
              className="bg-cream rounded-card p-6 border border-black/6 flex gap-5 items-start hover:-translate-y-0.5 transition-all"
            >
              <div className="text-3xl flex-shrink-0">{j.icon}</div>
              <div className="flex-1">
                <div className="font-heading text-navy font-bold text-[1rem] mb-1">{j.usaha}</div>
                <p className="text-xs text-gold font-semibold mb-2">{j.contoh}</p>
                <p className="text-sm text-navy2 leading-relaxed mb-3">{j.alasan}</p>
                <div className="inline-flex items-center gap-1.5 bg-navy/8 text-navy text-xs px-3 py-1 rounded-full">
                  <span>📋</span> {j.frekuensi}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ PERBANDINGAN KLAUSUL ══════════════ */}
      <section id="perbandingan-klausul" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Panduan Klausul
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            ICC-A, ICC-B, atau ICC-C?
            <br />
            Pilih Klausul yang Tepat
          </h2>
          <p className="text-base text-[#475569] max-w-[500px] mx-auto mt-3">
            Klausul menentukan apa yang dijamin dan tidak dijamin. Memilih klausul yang salah bisa
            berarti klaim ditolak saat dibutuhkan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {perbandinganKlausul.map((k) => (
            <div
              key={k.klausul}
              className={`rounded-card border-2 p-6 relative ${k.color} ${
                k.recommended ? "ring-2 ring-emerald-400 ring-offset-2" : ""
              }`}
            >
              {k.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Paling Direkomendasikan
                </div>
              )}
              <div className="font-heading text-navy text-2xl font-bold mb-1">{k.klausul}</div>
              <div className="text-sm font-semibold text-[#475569] mb-1">{k.nama}</div>
              <div className="text-xs text-navy/70 bg-white/60 px-3 py-1 rounded-full inline-block mb-4">
                Cocok: {k.cocok}
              </div>

              <div className="mb-4">
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                  ✅ Dijamin
                </p>
                <ul className="space-y-1">
                  {k.dijamin.map((d) => (
                    <li key={d} className="text-xs text-navy2 flex gap-1.5">
                      <span className="text-emerald-500 flex-shrink-0">•</span> {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">
                  ❌ Tidak Dijamin
                </p>
                <ul className="space-y-1">
                  {k.tidakDijamin.map((d) => (
                    <li key={d} className="text-xs text-navy2 flex gap-1.5">
                      <span className="text-red-400 flex-shrink-0">•</span> {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-black/10 pt-3">
                <p className="text-xs text-[#475569]">Estimasi Premi</p>
                <p className="text-sm font-bold text-navy">{k.premi}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-8 bg-navy rounded-card p-6 text-white">
          <h3 className="font-heading text-gold font-bold mb-3">
            💡 Cara Mudah Memilih Klausul
          </h3>
          <ul className="space-y-2 text-sm text-white/80 leading-relaxed">
            <li>
              <strong className="text-gold">Barang mudah rusak, pecah, atau bernilai tinggi</strong>{" "}
              → ICC-A (All Risks)
            </li>
            <li>
              <strong className="text-gold">Barang umum, cukup kokoh, risiko sedang</strong> → ICC-B
            </li>
            <li>
              <strong className="text-gold">Barang industri berat, tidak mudah rusak fisik</strong>{" "}
              → ICC-C bisa cukup
            </li>
            <li>
              <strong className="text-gold">Tidak yakin?</strong> → Konsultasikan dengan Pak Rio.
              Pemilihan klausul yang salah bisa berarti klaim ditolak saat dibutuhkan.
            </li>
          </ul>
        </div>
      </section>

      {/* ══════════════ PROSES KLAIM ══════════════ */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Panduan Klaim
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Barang Rusak atau Hilang?
            <br />
            Ini Cara Mengajukan Klaim yang Benar
          </h2>
          <p className="text-base text-[#475569] max-w-[500px] mx-auto mt-3">
            Banyak klaim ditolak bukan karena tidak dijamin — tetapi karena prosedur yang salah.
            Ikuti langkah ini dengan benar
          </p>
        </div>
        <div className="flex flex-col gap-5 max-w-3xl mx-auto">
          {prosesKlaim.map((p) => (
            <div
              key={p.step}
              className="bg-cream rounded-card border border-black/5 overflow-hidden"
            >
              <div className="flex gap-0">
                <div className="bg-navy text-gold font-heading font-bold text-xl w-16 flex-shrink-0 flex items-center justify-center">
                  {p.step}
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{p.icon}</span>
                    <span className="font-heading text-navy font-bold text-[1rem]">
                      {p.label}
                    </span>
                  </div>
                  <p className="text-sm text-navy2 leading-relaxed mb-3">{p.desc}</p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                    <span className="text-sm">⚠️</span>
                    <p className="text-xs text-red-800 leading-relaxed">{p.warning}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ TIPS PENGIRIMAN ══════════════ */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Tips Praktis
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy mb-6">
            6 Hal yang Harus Dilakukan
            <br />
            Sebelum Mengirim Barang
          </h2>
          <div className="flex flex-col gap-4">
            {tipsPengiriman.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-card p-5 border border-black/6 flex gap-4 items-start"
              >
                <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center text-navy font-heading font-bold text-xs flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">{t.tip}</p>
                  <p className="text-sm text-navy2 leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2 text-center">
            Pertanyaan Umum
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy mb-8 text-center">
            FAQ: Asuransi Pengiriman Barang
          </h2>
          <div className="flex flex-col gap-4">
            {faqItems.map((f, i) => (
              <div
                key={i}
                className="bg-cream rounded-card p-6 border border-black/6"
              >
                <p className="font-heading text-navy font-bold text-[0.95rem] mb-3 flex gap-2">
                  <span className="text-gold">Q.</span> {f.q}
                </p>
                <p className="text-sm text-navy2 leading-relaxed pl-5">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ INTERNAL LINKS ══════════════ */}
      <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">
            Produk Terkait
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/asuransi-kargo/kargo-udara-laut"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              ✈️ Kargo Udara & Laut →
            </Link>
            <Link
              href="/asuransi-kargo/ekspedisi-umkm"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🛍️ Kargo UMKM →
            </Link>
            <Link
              href="/asuransi-kendaraan/dump-truk-niaga"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🚛 Asuransi Truk Niaga →
            </Link>
            <Link
              href="/asuransi-kargo"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              ← Semua Asuransi Kargo
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Produk Jogja Anda Layak
            <br />
            Terlindungi Sampai Tujuan
          </h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-3 leading-relaxed">
            Konsultasi gratis — kami bantu pilih klausul yang tepat, hitung premi, dan urus polis
            pengiriman barang terbaik untuk bisnis Anda di Yogyakarta.
          </p>
          <p className="text-white/50 text-xs mb-8">
            Pak Rio · Agen Asuransi Terdaftar OJK · Melayani Yogyakarta & sekitarnya
          </p>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
          >
            💬 WhatsApp Pak Rio Sekarang
          </a>
        </div>
      </section>
    </KargoLayout>
  );
}
