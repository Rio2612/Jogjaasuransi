// ─── KONTAK ───────────────────────────────────────────────────────────────────
export const KONTAK = {
  wa: "628778165823",
  waDisplay: "0877-8165-8231",
  email: "rio@asuransijogja.biz.id",
  kota: "Yogyakarta, Daerah Istimewa Yogyakarta",
} as const;

// ─── PRODUK CLUSTERS ─────────────────────────────────────────────────────────
export type Produk = { icon: string; name: string; desc: string; href: string };
export type Cluster = { id: string; label: string; icon: string; produk: Produk[] };

export const CLUSTERS: Cluster[] = [
  {
    id: "kendaraan", label: "Kendaraan", icon: "🚗",
    produk: [
      { icon: "🚗", name: "Asuransi Mobil Jogja", desc: "Perlindungan All Risk maupun TLO untuk kendaraan pribadi Anda. Tersedia untuk mobil konvensional dan listrik dengan premi sesuai tarif OJK. Klaim mudah, proses cepat.", href: "#kalkulator" },
      { icon: "🚛", name: "Asuransi Dump Truk & Kendaraan Niaga", desc: "Proteksi kendaraan berat seperti dump truk, tronton, dan armada angkutan material. Cocok untuk kontraktor, pengusaha tambang, dan perusahaan logistik.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "🚐", name: "Asuransi Armada Kendaraan", desc: "Paket asuransi fleet untuk perusahaan dengan banyak kendaraan operasional. Pengelolaan polis lebih mudah, premi lebih efisien dibanding polis satuan.", href: `https://wa.me/${KONTAK.wa}` },
    ],
  },
  {
    id: "properti", label: "Properti", icon: "🏠",
    produk: [
      { icon: "🏡", name: "Asuransi Kebakaran Rumah Tinggal Jogja", desc: "Lindungi rumah tinggal Anda dari risiko kebakaran, petir, ledakan, dan asap. Premi terjangkau dengan manfaat penggantian yang memadai untuk hunian di Yogyakarta.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "🏘️", name: "Asuransi Kebakaran Kos Jogja", desc: "Solusi khusus bagi pemilik kos-kosan di Yogyakarta. Proteksi bangunan dari kebakaran dengan pilihan pertanggungan fleksibel sesuai jumlah kamar dan nilai properti.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "🏪", name: "Asuransi Kebakaran Ruko Jogja", desc: "Perlindungan menyeluruh untuk ruko dan bangunan komersial dari kebakaran dan risiko perluasan. Menjaga aset bisnis Anda tetap aman dan operasional.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "🏢", name: "Property All Risk (PAR)", desc: "Perlindungan komprehensif untuk properti komersial dan industri dari berbagai risiko fisik. Ideal untuk gedung perkantoran, hotel, pabrik, dan fasilitas bisnis skala besar.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "🌊", name: "Perluasan Banjir & Gempa Bumi", desc: "Jaminan tambahan untuk properti Anda dari banjir, gempa bumi, letusan gunung berapi, dan angin topan — sangat relevan mengingat kondisi geografis Yogyakarta.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "🔒", name: "Asuransi Risiko Kejahatan", desc: "Proteksi terhadap pencurian, perampokan, dan vandalisme pada properti dan isi bangunan bisnis Anda. Ketenangan pikiran untuk pemilik usaha di Yogyakarta.", href: `https://wa.me/${KONTAK.wa}` },
    ],
  },
  {
    id: "engineering", label: "Engineering", icon: "⚙️",
    produk: [
      { icon: "🏗️", name: "Contractor All Risk (CAR)", desc: "Perlindungan menyeluruh untuk proyek konstruksi sipil dari awal hingga serah terima. Melindungi pekerjaan, material, peralatan, dan tanggung jawab terhadap pihak ketiga.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "⚙️", name: "Erection All Risk (EAR)", desc: "Asuransi untuk pekerjaan instalasi mesin, peralatan pabrik, dan proyek mekanikal-elektrikal. Cocok untuk kontraktor MEP dan perusahaan manufaktur di Yogyakarta.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "🔧", name: "Machinery Breakdown (MB)", desc: "Perlindungan mesin dan peralatan produksi dari kerusakan mendadak akibat gangguan mekanis atau elektris. Menjaga kelangsungan operasional bisnis Anda.", href: `https://wa.me/${KONTAK.wa}` },
    ],
  },
  {
    id: "kargo", label: "Kargo", icon: "📦",
    produk: [
      { icon: "📦", name: "Asuransi Kargo Darat", desc: "Perlindungan barang kiriman via truk dan kereta api dari risiko kecelakaan, pencurian, dan kerusakan selama perjalanan. Tersedia untuk pengiriman lokal maupun antar kota.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "✈️", name: "Asuransi Kargo Udara", desc: "Jaminan perlindungan kargo yang dikirim via jalur udara. Cocok untuk pengiriman barang bernilai tinggi yang membutuhkan kecepatan dan keamanan ekstra.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "🚢", name: "Marine Cargo Insurance", desc: "Proteksi pengiriman barang melalui jalur laut untuk importir dan eksportir. Tersedia untuk pengiriman domestik antar pulau maupun perdagangan internasional.", href: `https://wa.me/${KONTAK.wa}` },
    ],
  },
  {
    id: "liability", label: "Liability", icon: "🛡️",
    produk: [
      { icon: "⚗️", name: "Liability Limbah B3", desc: "Perlindungan tanggung jawab hukum bagi perusahaan yang menghasilkan, mengangkut, atau mengelola limbah B3 sesuai regulasi lingkungan hidup yang berlaku.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "👥", name: "Public Liability", desc: "Lindungi bisnis dari klaim pihak ketiga akibat cedera badan atau kerusakan properti yang terjadi di lokasi usaha atau akibat operasional perusahaan Anda.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "🏭", name: "Product Liability", desc: "Perlindungan bagi produsen dan distributor dari tuntutan hukum akibat kerugian yang disebabkan oleh produk yang diproduksi atau didistribusikan ke pasaran.", href: `https://wa.me/${KONTAK.wa}` },
    ],
  },
  {
    id: "surety", label: "Surety Bond", icon: "📋",
    produk: [
      { icon: "📋", name: "Jaminan Penawaran (Bid Bond)", desc: "Jaminan bagi peserta tender bahwa kontraktor akan melaksanakan kontrak jika menang. Wajib untuk mengikuti lelang proyek pemerintah maupun swasta.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "🤝", name: "Jaminan Pelaksanaan (Performance Bond)", desc: "Menjamin kontraktor menyelesaikan proyek sesuai kontrak. Wajib bagi kontraktor yang mengerjakan proyek pemerintah, BUMN, maupun proyek swasta berskala besar.", href: `https://wa.me/${KONTAK.wa}` },
      { icon: "💰", name: "Jaminan Uang Muka (Advance Payment Bond)", desc: "Jaminan atas uang muka yang diberikan pemberi kerja kepada kontraktor. Melindungi pengguna jasa dari risiko penyalahgunaan dana awal proyek.", href: `https://wa.me/${KONTAK.wa}` },
    ],
  },
];

// ─── KALKULATOR OJK ───────────────────────────────────────────────────────────
export type Wilayah = "w1" | "w2" | "w3";
export type JenisKendaraan = "konvensional" | "listrik";
export type TipePerlindungan = "allrisk" | "tlo";

export const RATE: Record<TipePerlindungan, Record<Wilayah, Record<JenisKendaraan, number[]>>> = {
  allrisk: {
    w1: { konvensional: [3.82, 2.67, 2.18, 1.20, 1.05], listrik: [4.20, 2.94, 2.40, 1.32, 1.16] },
    w2: { konvensional: [3.26, 2.47, 2.08, 1.20, 1.05], listrik: [3.59, 2.72, 2.29, 1.32, 1.16] },
    w3: { konvensional: [2.53, 2.69, 1.79, 1.14, 1.05], listrik: [2.78, 2.96, 1.97, 1.25, 1.16] },
  },
  tlo: {
    w1: { konvensional: [0.47, 0.63, 0.41, 0.25, 0.20], listrik: [0.56, 0.69, 0.46, 0.30, 0.24] },
    w2: { konvensional: [0.65, 0.44, 0.38, 0.25, 0.20], listrik: [0.78, 0.53, 0.42, 0.30, 0.24] },
    w3: { konvensional: [0.51, 0.44, 0.29, 0.23, 0.20], listrik: [0.56, 0.48, 0.35, 0.27, 0.24] },
  },
};

export const WILAYAH_LABEL: Record<Wilayah, string> = {
  w1: "Wilayah I (Sumatera)",
  w2: "Wilayah II (Jakarta, Jabar, Banten)",
  w3: "Wilayah III (Yogyakarta & sekitarnya)",
};

export type PlatOption = { value: Wilayah; label: string };
export type PlatGroup = { group: string; options: PlatOption[] };

export const PLAT_DATA: (PlatOption | PlatGroup)[] = [
  { value: "w3", label: "AB – Yogyakarta (DIY)" },
  { group: "── Wilayah III (Jawa Tengah) ──", options: [
    { value: "w3", label: "AD – Surakarta / Solo" },
    { value: "w3", label: "H – Semarang" },
    { value: "w3", label: "K – Kudus / Pati" },
    { value: "w3", label: "R – Banyumas / Purwokerto" },
    { value: "w3", label: "G – Pekalongan" },
    { value: "w3", label: "AA – Magelang / Kedu" },
  ]},
  { group: "── Wilayah III (Jawa Timur) ──", options: [
    { value: "w3", label: "L – Surabaya" },
    { value: "w3", label: "M – Madura" },
    { value: "w3", label: "N – Malang" },
    { value: "w3", label: "P – Jember / Besuki" },
    { value: "w3", label: "S – Bojonegoro" },
    { value: "w3", label: "W – Sidoarjo / Gresik" },
    { value: "w3", label: "AE – Madiun" },
    { value: "w3", label: "AG – Kediri" },
  ]},
  { group: "── Wilayah III (Bali & Nusa Tenggara) ──", options: [
    { value: "w3", label: "DK – Bali" },
    { value: "w3", label: "DR – Lombok / NTB" },
    { value: "w3", label: "EA – Sumbawa / NTB" },
    { value: "w3", label: "DH – Kupang / NTT" },
    { value: "w3", label: "EB – Flores / NTT" },
    { value: "w3", label: "ED – Sumba / NTT" },
  ]},
  { group: "── Wilayah III (Kalimantan) ──", options: [
    { value: "w3", label: "KB – Pontianak / Kalbar" },
    { value: "w3", label: "DA – Banjarmasin / Kalsel" },
    { value: "w3", label: "KH – Palangkaraya / Kalteng" },
    { value: "w3", label: "KT – Samarinda / Kaltim" },
    { value: "w3", label: "KU – Balikpapan / Kaltim" },
    { value: "w3", label: "KS – Kotabaru / Kalsel" },
  ]},
  { group: "── Wilayah III (Sulawesi) ──", options: [
    { value: "w3", label: "DB – Manado / Sulut" },
    { value: "w3", label: "DL – Sitaro / Sulut" },
    { value: "w3", label: "DN – Palu / Sulteng" },
    { value: "w3", label: "DT – Kendari / Sultra" },
    { value: "w3", label: "DD – Makassar / Sulsel" },
    { value: "w3", label: "DC – Mamuju / Sulbar" },
    { value: "w3", label: "DM – Gorontalo" },
  ]},
  { group: "── Wilayah III (Maluku & Papua) ──", options: [
    { value: "w3", label: "DE – Ambon / Maluku" },
    { value: "w3", label: "DG – Ternate / Maluku Utara" },
    { value: "w3", label: "PA – Jayapura / Papua" },
    { value: "w3", label: "PB – Manokwari / Papua Barat" },
    { value: "w3", label: "PP – Sorong / Papua Barat Daya" },
  ]},
  { group: "── Wilayah I (Sumatera) ──", options: [
    { value: "w1", label: "BL – Banda Aceh / Aceh" },
    { value: "w1", label: "BB – Tapanuli / Sibolga" },
    { value: "w1", label: "BK – Medan / Sumut" },
    { value: "w1", label: "BA – Padang / Sumbar" },
    { value: "w1", label: "BM – Pekanbaru / Riau" },
    { value: "w1", label: "BP – Tanjungpinang / Kepri" },
    { value: "w1", label: "BH – Jambi" },
    { value: "w1", label: "BG – Palembang / Sumsel" },
    { value: "w1", label: "BD – Bengkulu" },
    { value: "w1", label: "BE – Bandar Lampung / Lampung" },
    { value: "w1", label: "BN – Pangkalpinang / Babel" },
  ]},
  { group: "── Wilayah II (Jakarta, Jabar, Banten) ──", options: [
    { value: "w2", label: "B – DKI Jakarta" },
    { value: "w2", label: "A – Banten / Serang" },
    { value: "w2", label: "D – Bandung / Jabar" },
    { value: "w2", label: "E – Cirebon / Jabar" },
    { value: "w2", label: "F – Bogor / Jabar" },
    { value: "w2", label: "T – Karawang / Purwakarta" },
    { value: "w2", label: "Z – Garut / Tasikmalaya" },
  ]},
];

export const DISKON = 0.10; // silent discount

export function getKategori(harga: number): { label: string; idx: number } {
  if (harga <= 125_000_000) return { label: "Kategori 1 (≤ Rp 125 juta)", idx: 0 };
  if (harga <= 200_000_000) return { label: "Kategori 2 (> Rp 125 jt s.d Rp 200 jt)", idx: 1 };
  if (harga <= 400_000_000) return { label: "Kategori 3 (> Rp 200 jt s.d Rp 400 jt)", idx: 2 };
  if (harga <= 800_000_000) return { label: "Kategori 4 (> Rp 400 jt s.d Rp 800 jt)", idx: 3 };
  return { label: "Kategori 5 (> Rp 800 juta)", idx: 4 };
}

export function formatRp(n: number): string {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: "Apakah konsultasi asuransi di sini berbayar?",
    a: "Tidak, konsultasi sepenuhnya gratis. Saya akan menganalisis kebutuhan dan profil risiko Anda, lalu merekomendasikan produk yang paling sesuai — tanpa biaya apapun dan tanpa tekanan untuk membeli.",
  },
  {
    q: "Apa perbedaan asuransi All Risk dan TLO untuk mobil?",
    a: "All Risk (Comprehensive) menanggung kerusakan ringan hingga berat, kecelakaan, dan kehilangan kendaraan. TLO hanya menanggung kerugian jika kendaraan hilang dicuri atau rusak parah di atas 75% dari nilai kendaraan. Premi TLO lebih murah, tetapi All Risk memberikan proteksi lebih luas.",
  },
  {
    q: "Asuransi kerugian apa saja yang tersedia?",
    a: "Kami melayani hampir seluruh lini asuransi kerugian: kendaraan bermotor (mobil konvensional dan listrik), properti (kebakaran, PAR, perluasan banjir dan gempa), engineering (CAR, EAR, machinery breakdown), kargo (darat, udara, laut), liability (public liability, limbah B3, product liability), dan surety bond.",
  },
  {
    q: "Berapa lama proses penerbitan polis?",
    a: "Untuk produk standar seperti asuransi kendaraan dan kebakaran rumah tinggal, polis dapat terbit dalam 1–2 hari kerja setelah dokumen lengkap. Untuk produk korporasi seperti engineering insurance atau liability, prosesnya umumnya 3–7 hari kerja.",
  },
  {
    q: "Bagaimana jika saya perlu mengajukan klaim?",
    a: "Segera hubungi saya via WhatsApp setelah kejadian. Saya akan memandu langkah-langkah yang perlu dilakukan, membantu persiapan dokumen yang diperlukan, dan mendampingi Anda dalam seluruh proses klaim hingga dana ganti rugi cair.",
  },
  {
    q: "Apakah bisa mengurus asuransi untuk perusahaan atau bisnis?",
    a: "Ya. Kami melayani klien korporasi dengan kebutuhan yang lebih kompleks seperti fleet insurance, property all risk, engineering insurance, liability insurance, dan surety bond untuk kebutuhan tender dan kontrak.",
  },
];

// ─── TESTIMONIAL ─────────────────────────────────────────────────────────────
export const TESTIMONI = [
  {
    inisial: "BH",
    nama: "Budi Hartono",
    peran: "Wiraswasta, Yogyakarta",
    teks: "Sebelumnya saya selalu bingung memilih asuransi kendaraan. Setelah konsultasi, saya jadi paham perbedaan All Risk dan TLO, dan akhirnya dapat produk yang benar-benar sesuai kebutuhan dan anggaran saya.",
  },
  {
    inisial: "SR",
    nama: "Siti Rahayu",
    peran: "Pemilik Kos, Sleman",
    teks: "Saya punya beberapa kos di Jogja. Pak Rio membantu mengasuransikan semua bangunan saya dengan harga yang jauh lebih efisien. Prosesnya mudah, penjelasannya sangat jelas dan tidak membingungkan.",
  },
  {
    inisial: "AP",
    nama: "Agus Purnomo",
    peran: "Kontraktor, CV Bangun Jaya",
    teks: "Kami butuh Surety Bond untuk proyek pemerintah dalam waktu singkat. Pak Rio bisa memproses dengan cepat dan menjelaskan semua persyaratan dengan sangat detail. Sangat profesional dan membantu.",
  },
];
