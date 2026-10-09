import { KONSULTASI, o, r, type PenawaranCluster } from "./base";

const ALL = ["darat", "udaralaut", "ekspedisi", "konsultasi"];

export const KARGO: PenawaranCluster = {
  key: "kargo",
  icon: "📦",
  nama: "asuransi kargo",
  judul: "Permintaan Penawaran Asuransi Kargo",
  subjudul: "Isi data singkat barang dan pengirimannya. Kami analisa awal dan balas lewat WhatsApp.",
  typeLegend: "Jenis pengiriman",
  typeLine: "Jenis pengiriman",
  types: [
    { key: "darat", label: "Pengiriman darat", hint: "Antar kota dalam negeri (inland transit)" },
    { key: "udaralaut", label: "Kargo udara & laut", hint: "Antar pulau, ekspor & impor" },
    { key: "ekspedisi", label: "Ekspedisi / UMKM", hint: "Pengiriman rutin UMKM & jasa ekspedisi" },
    KONSULTASI,
  ],
  rules: [
    { type: "darat", re: /pengiriman-barang|darat|inland/ },
    { type: "udaralaut", re: /udara|laut|ekspor|impor/ },
    { type: "ekspedisi", re: /ekspedisi|umkm/ },
  ],
  companyOptionalFor: ["darat", "ekspedisi", "konsultasi"],
  fields: [
    { key: "cargoItem", kind: "text", showFor: ALL, label: "Jenis barang", placeholder: "mis. kerajinan perak Kotagede, batik, elektronik, hasil bumi" },
    { key: "cargoValue", kind: "money", showFor: ALL, label: "Nilai barang (per pengiriman)", placeholder: "mis. 500.000.000" },
    { key: "cargoRoute", kind: "text", showFor: ALL, label: "Rute pengiriman", placeholder: "mis. Yogyakarta → Jakarta" },
    {
      key: "cargoMode",
      kind: "select",
      showFor: ["udaralaut", "konsultasi"],
      label: "Moda pengiriman",
      placeholder: "Pilih moda",
      options: [o("sea", "Laut"), o("air", "Udara"), o("land", "Darat"), o("multi", "Multimoda")],
    },
    {
      key: "cargoFreq",
      kind: "select",
      showFor: ALL,
      label: "Frekuensi pengiriman",
      placeholder: "Pilih frekuensi",
      options: [o("single", "Sekali kirim"), o("regular", "Rutin (open cover)")],
    },
    {
      key: "packing",
      kind: "select",
      showFor: ALL,
      optional: true,
      label: "Jenis kemasan",
      placeholder: "Pilih kemasan",
      options: [o("crate", "Peti kayu / crate"), o("box", "Kardus / box"), o("pallet", "Pallet + shrink wrap"), o("bulk", "Curah / lainnya")],
    },
    { key: "carrier", kind: "text", showFor: ALL, optional: true, label: "Nama ekspedisi / pengangkut", placeholder: "mis. nama ekspedisi atau perusahaan pelayaran" },
    {
      key: "incoterm",
      kind: "select",
      showFor: ["udaralaut"],
      optional: true,
      label: "Incoterms",
      placeholder: "Pilih Incoterms",
      options: [o("exw", "EXW"), o("fob", "FOB"), o("cif", "CIF / CIP"), o("dap", "DAP / DDP"), o("unknown", "Belum tahu")],
    },
    { key: "packages", kind: "number", showFor: ["ekspedisi"], optional: true, label: "Perkiraan jumlah paket per bulan", placeholder: "mis. 200", suffix: "paket" },
  ],
  flags: [
    { key: "special", label: "Barang berisiko khusus (mudah pecah, mesin, B3)" },
    { key: "lc", showFor: ["udaralaut"], label: "Ada syarat asuransi dari L/C atau pembeli" },
    { key: "claim", label: "Pernah klaim dalam 3 tahun terakhir" },
    { key: "renewal", label: "Perpanjangan polis yang sudah ada" },
    { key: "urgent", label: "Dibutuhkan mendesak (≤ 3 hari kerja)" },
  ],
  general: [
    r("Identitas pemohon", "KTP (perorangan) atau akta & SK Kemenkumham (perusahaan)"),
    r("NIB & izin usaha", "Perusahaan ekspedisi, perdagangan, atau produksi", false),
    r("NPWP", "Perusahaan atau pemilik"),
    r("Riwayat klaim 3–5 tahun", "Menjadi dasar penilaian risiko & tarif", false),
  ],
  specific: {
    darat: [
      r("Invoice / surat jalan", "Dasar nilai pertanggungan"),
      r("Deskripsi barang & kemasan", "Jenis, jumlah, dan cara pengemasan"),
      r("Rute & nama pengangkut", "Lokasi asal–tujuan dan jenis armada"),
    ],
    udaralaut: [
      r("Invoice & packing list", "Dasar nilai pertanggungan (umumnya CIF + 10%)"),
      r("Deskripsi barang & kemasan", "Jenis, jumlah, dan cara pengemasan"),
      r("Rute, moda & jadwal pengiriman", "Lokasi asal–tujuan dan nama pengangkut"),
      r("B/L, AWB, atau surat jalan", "Bila sudah terbit", false),
      r("L/C atau syarat asuransi dari pembeli", "Agar klausul polis sesuai persyaratan", false),
    ],
    ekspedisi: [
      r("Daftar jenis barang yang rutin dikirim", "Menentukan profil risiko"),
      r("Estimasi volume & nilai pengiriman per bulan", "Dasar skema open cover"),
      r("Perjanjian dengan pelanggan / ekspedisi", "Bila ada klausul ganti rugi", false),
    ],
    konsultasi: [],
  },
  disclaimer:
    "Daftar bersifat umum. Nilai pertanggungan umumnya mengikuti nilai faktur ditambah ongkos kirim dan margin; barang berisiko khusus dapat memerlukan syarat tambahan.",
  copy: {
    dateLabel: "Tanggal mulai pertanggungan / keberangkatan",
    clientLabel: "Nama pengirim / proyek (opsional)",
    clientPh: "mis. pengiriman kerajinan perak ke Jakarta",
    companyLabel: "Nama perusahaan",
    notePh: "mis. kondisi kemasan, titik transit, atau info lain yang menurut Anda penting.",
  },
};
