// Peta klaster topik untuk saling-link antar halaman (pilar, produk, artikel).
// Setiap halaman dalam satu klaster otomatis menampilkan link ke anggota lain
// lewat <ClusterLinks /> (dipasang di semua layout). Link bersifat dua arah.

export type ClusterItem = { href: string; label: string; desc: string };

const I = (href: string, label: string, desc: string): ClusterItem => ({ href, label, desc });

const kendaraanNiaga = [
  I("/artikel/asuransi-truk-niaga-jogja", "Asuransi Truk Niaga & Dump Truk", "Panduan risiko, perluasan, dan klaim kendaraan niaga"),
  I("/artikel/asuransi-armada-fleet-jogja", "Asuransi Armada / Fleet", "Kapan konsolidasi polis banyak unit masuk akal"),
  I("/asuransi-kendaraan/dump-truk-niaga", "Produk Dump Truk & Niaga", "Detail produk dan cara pengajuan"),
  I("/asuransi-kendaraan/armada-fleet", "Produk Armada Fleet", "Polis tunggal untuk banyak kendaraan"),
  I("/artikel/perbedaan-all-risk-tlo", "Perbedaan All Risk dan TLO", "Memilih jenis perlindungan kendaraan"),
  I("/asuransi-kargo/pengiriman-barang", "Asuransi Kargo Darat", "Muatan tidak ikut ditanggung polis kendaraan"),
];
const mobil = [
  I("/artikel/asuransi-mobil-banjir", "Asuransi Mobil Kena Banjir", "Cakupan banjir, hydrolock, dan klaim"),
  I("/artikel/cara-klaim-asuransi-mobil", "Cara Klaim Asuransi Mobil", "Langkah klaim dari kejadian sampai selesai"),
  I("/artikel/perbedaan-all-risk-tlo", "Perbedaan All Risk dan TLO", "Memilih jenis perlindungan mobil"),
  I("/asuransi-kendaraan/mobil", "Produk Asuransi Mobil", "All Risk dan TLO untuk mobil pribadi"),
  I("/artikel/asuransi-kendaraan-jogja", "Asuransi Kendaraan Jogja", "Kenapa memilih praktisi independen"),
  I("/artikel/asuransi-mobil-bekas", "Asuransi Mobil Bekas", "Batas usia All Risk, survei, dan nilai pertanggungan"),
  I("/artikel/asuransi-mobil-listrik", "Asuransi Mobil Listrik", "Baterai, charger, dan cakupan khusus EV"),
  I("/artikel/asuransi-rental-mobil-jogja", "Asuransi Rental Mobil", "Perlindungan armada rental dan wisata"),
  I("/artikel/bengkel-rekanan-asuransi-jogja", "Bengkel Rekanan Asuransi", "Bengkel resmi vs non-resmi saat klaim"),
];
const kargo = [
  I("/artikel/asuransi-kargo-ekspor-impor-jogja", "Kargo Ekspor-Impor: Incoterms & L/C", "Panduan untuk eksportir dan importir"),
  I("/asuransi-kargo/kargo-udara-laut", "Produk Kargo Udara & Laut", "Marine cargo dan air freight"),
  I("/artikel/cara-klaim-asuransi-kargo", "Cara Klaim Asuransi Kargo", "Dokumen dan langkah klaim kargo"),
  I("/artikel/asuransi-kargo-umkm-jogja", "Asuransi Kargo untuk UMKM", "Pengiriman skala kecil dan menengah"),
  I("/asuransi-kargo/pengiriman-barang", "Produk Pengiriman Barang", "Kargo darat / inland transit"),
];
const liability = [
  I("/artikel/limbah-b3-liability-jogja", "Liability Limbah B3: Panduan", "Alur limbah dan titik rawan gugatan"),
  I("/artikel/employer-liability-panduan-jogja", "Employer's Liability: Panduan", "Perlindungan di luar BPJS Ketenagakerjaan"),
  I("/artikel/perbedaan-jenis-asuransi-liability", "Perbedaan Jenis Asuransi Liability", "Public, product, employer, dan lainnya"),
  I("/artikel/cara-klaim-asuransi-liability", "Cara Klaim Asuransi Liability", "Prosedur klaim tanggung gugat"),
  I("/asuransi-liability/limbah-b3", "Produk Liability Limbah B3", "Detail produk dan cakupan"),
  I("/asuransi-liability/employer-liability", "Produk Employer's Liability", "Detail produk dan cakupan"),
  I("/asuransi-liability/public-liability", "Produk Public Liability", "Tuntutan pihak ketiga di lokasi usaha"),
  I("/asuransi-liability/product-liability", "Produk Product Liability", "Gugatan akibat produk yang dijual"),
];
const surety = [
  I("/asuransi-surety-bond/jaminan-penawaran", "Jaminan Penawaran (Bid Bond)", "Syarat ikut tender pemerintah"),
  I("/artikel/syarat-asuransi-tender-pemerintah-diy", "Syarat Asuransi Tender DIY", "Dokumen jaminan untuk kontraktor"),
  I("/artikel/cara-mengurus-jaminan-penawaran-jogja", "Cara Mengurus Jaminan Penawaran", "Langkah penerbitan bid bond"),
  I("/artikel/perbedaan-surety-bond-bank-garansi", "Surety Bond vs Bank Garansi", "Mana yang lebih sesuai untuk kontraktor"),
  I("/asuransi-surety-bond/jaminan-pelaksanaan", "Jaminan Pelaksanaan", "Performance bond setelah menang tender"),
  I("/artikel/jaminan-pelaksanaan-pemeliharaan-uang-muka", "Siklus Jaminan Proyek", "Pelaksanaan, pemeliharaan, uang muka"),
  I("/asuransi-surety-bond/jaminan-uang-muka", "Jaminan Uang Muka", "Advance payment bond untuk kontraktor"),
  I("/asuransi-surety-bond/jaminan-pemeliharaan", "Jaminan Pemeliharaan", "Maintenance bond setelah serah terima"),
];
const engineering = [
  I("/artikel/asuransi-mesin-pabrik-jogja", "Asuransi Mesin Pabrik", "Machinery breakdown untuk industri DIY"),
  I("/asuransi-engineering/machinery-breakdown", "Produk Machinery Breakdown", "Detail cakupan kerusakan mesin"),
  I("/artikel/perbedaan-car-ear-asuransi-engineering", "Perbedaan CAR dan EAR", "Memilih asuransi engineering proyek"),
  I("/artikel/asuransi-kontraktor-proyek-jogja", "Asuransi Kontraktor & Proyek", "Apa saja yang perlu dilindungi"),
  I("/artikel/premi-asuransi-car-jogja", "Premi Asuransi CAR", "Faktor penentu dan estimasi"),
  I("/asuransi-engineering/erection-all-risk", "Erection All Risk (EAR)", "Pemasangan mesin dan instalasi industri"),
  I("/asuransi-engineering/contractor-all-risk", "Contractor All Risk (CAR)", "Perlindungan proyek konstruksi"),
];
const event = [
  I("/asuransi-event", "Asuransi Event Jogja", "Public liability dan perlindungan penyelenggara"),
  I("/asuransi-event/konser-festival-musik", "Konser & Festival Musik", "Cakupan untuk acara musik skala besar"),
  I("/asuransi-event/motocross-grasstrack", "Motocross & Grasstrack", "Risiko event balap dan olahraga motor"),
  I("/artikel/syarat-dokumen-asuransi-event-musik-jogja", "Syarat Dokumen Asuransi Event", "Dokumen yang diminta untuk acara musik"),
];
const umkm = [
  I("/artikel/asuransi-umkm-jogja", "Asuransi untuk UMKM Jogja", "Prioritas perlindungan usaha kecil"),
  I("/artikel/pentingnya-asuransi-dunia-usaha-jogja", "Pentingnya Asuransi Dunia Usaha", "Risiko yang sering diabaikan pelaku usaha"),
  I("/artikel/cara-menghitung-nilai-asuransi", "Cara Menghitung Nilai Asuransi", "Menentukan nilai pertanggungan yang pas"),
  I("/artikel/asuransi-kargo-umkm-jogja", "Asuransi Kargo untuk UMKM", "Pengiriman skala kecil dan menengah"),
  I("/asuransi-properti/kebakaran", "Asuransi Kebakaran", "Dasar perlindungan bangunan usaha"),
];
const kesehatan = [
  I("/asuransi-kesehatan-karyawan", "Asuransi Kesehatan Karyawan Jogja", "Paket, RS rekanan, dan minta penawaran"),
  I("/artikel/bpjs-vs-asuransi-kesehatan-karyawan-jogja", "BPJS vs Asuransi Swasta", "Iuran UMK Jogja 2026 dan skema COB"),
  I("/artikel/cara-klaim-asuransi-kesehatan-karyawan-jogja", "Cara Klaim Asuransi Kesehatan Karyawan", "Cashless, reimbursement, dan dokumen"),
];
const penginapan = [
  I("/asuransi-properti/vila-homestay", "Asuransi Vila & Homestay", "Halaman utama untuk vila dan homestay"),
  I("/asuransi-properti/hotel-vila", "Asuransi Hotel & Guest House", "Halaman utama untuk hotel dan guest house"),
  I("/artikel/asuransi-vila-homestay-jogja", "Panduan Asuransi Vila, Homestay & Hotel", "Artikel panduan lengkap pemilik penginapan"),
  I("/asuransi-properti/property-all-risk", "Property All Risk", "Perlindungan komprehensif properti komersial"),
  I("/asuransi-properti/kebakaran", "Asuransi Kebakaran", "Dasar perlindungan bangunan"),
];

export const CLUSTERS: ClusterItem[][] = [kendaraanNiaga, mobil, kargo, liability, surety, engineering, penginapan, kesehatan, event, umkm];

/** Anggota klaster untuk path tertentu (tanpa halaman itu sendiri), maksimal `max` item.
 *  Urutan berputar mulai dari anggota setelah halaman ini, sehingga setiap anggota
 *  klaster (termasuk yang di urutan akhir) mendapat tautan masuk dari tetangganya. */
export function clusterFor(path: string, max = 5): ClusterItem[] {
  const clean = path.replace(/\/+$/, "") || "/";
  const out: ClusterItem[] = [];
  const seen = new Set<string>([clean]);
  for (const c of CLUSTERS) {
    const idx = c.findIndex((i) => i.href === clean);
    if (idx === -1) continue;
    for (let k = 1; k < c.length; k++) {
      const i = c[(idx + k) % c.length];
      if (seen.has(i.href)) continue;
      seen.add(i.href);
      out.push(i);
    }
  }
  return out.slice(0, max);
}
