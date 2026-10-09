import { KONSULTASI, o, r, type PenawaranCluster } from "./base";

const BUILDING = ["rumah", "kos", "ruko", "vila", "hotel", "gudang", "pabrik"];
const WITH_CONTENTS = ["rumah", "kos", "ruko", "vila", "hotel"];
const ROOMS = ["kos", "vila", "hotel"];
const COMMERCIAL = ["kos", "ruko", "vila", "hotel", "gudang", "pabrik"];
const CONSTRUCTION = ["kos", "ruko", "vila", "hotel", "gudang", "pabrik"];

export const PROPERTI: PenawaranCluster = {
  key: "properti",
  icon: "🏠",
  nama: "asuransi properti",
  judul: "Permintaan Penawaran Asuransi Properti",
  subjudul: "Isi data singkat properti Anda. Kami analisa awal dan balas lewat WhatsApp.",
  typeLegend: "Jenis properti",
  typeLine: "Jenis properti",
  types: [
    { key: "rumah", label: "Rumah tinggal", hint: "Bangunan & isi rumah" },
    { key: "kos", label: "Kos-kosan", hint: "Bangunan & isi kamar" },
    { key: "ruko", label: "Ruko / usaha", hint: "Bangunan & stok usaha" },
    { key: "vila", label: "Vila & homestay", hint: "Bangunan, perabot & tamu" },
    { key: "hotel", label: "Hotel & guest house", hint: "Bangunan, perabot & liability tamu" },
    { key: "gudang", label: "Gudang", hint: "Bangunan & barang simpanan" },
    { key: "pabrik", label: "Pabrik / gedung industri", hint: "Bangunan, mesin & stok (PAR)" },
    KONSULTASI,
  ],
  rules: [
    { type: "vila", re: /vila|homestay/ },
    { type: "hotel", re: /hotel/ },
    { type: "kos", re: /(^|[-/])kos([-/]|$)/ },
    { type: "rumah", re: /rumah-tinggal/ },
    { type: "ruko", re: /ruko|umkm|dunia-usaha/ },
    { type: "pabrik", re: /property-all-risk/ },
  ],
  companyOptionalFor: ["rumah", "kos", "vila", "konsultasi"],
  fields: [
    { key: "location", kind: "text", label: "Lokasi properti", placeholder: "mis. Seturan, Depok, Sleman / Kotagede / Bantul" },
    { key: "buildingValue", kind: "money", showFor: BUILDING, label: "Nilai bangunan (biaya bangun ulang)", placeholder: "mis. 1.500.000.000" },
    { key: "contentsValue", kind: "money", showFor: WITH_CONTENTS, optional: true, label: "Nilai isi / perabot / stok", placeholder: "mis. 300.000.000" },
    { key: "stockValue", kind: "money", showFor: ["gudang", "pabrik"], label: "Nilai barang / stok", placeholder: "mis. 5.000.000.000" },
    { key: "machineryValue", kind: "money", showFor: ["pabrik"], optional: true, label: "Nilai mesin produksi", placeholder: "mis. 10.000.000.000" },
    { key: "estValue", kind: "money", showFor: ["konsultasi"], optional: true, label: "Perkiraan nilai yang ingin diasuransikan", placeholder: "mis. 1.000.000.000" },
    { key: "area", kind: "number", showFor: BUILDING, optional: true, label: "Luas bangunan", placeholder: "mis. 120", suffix: "m²" },
    { key: "yearBuilt", kind: "number", showFor: BUILDING, optional: true, label: "Tahun bangun", placeholder: "mis. 2018" },
    { key: "rooms", kind: "number", showFor: ROOMS, label: "Jumlah kamar", placeholder: "mis. 12", suffix: "kamar" },
    {
      key: "construction",
      kind: "select",
      showFor: CONSTRUCTION,
      optional: true,
      label: "Konstruksi bangunan",
      placeholder: "Pilih konstruksi",
      options: [o("concrete", "Beton"), o("steel", "Rangka baja"), o("semi", "Semi permanen"), o("wood", "Kayu / tradisional (limasan, joglo)")],
    },
    {
      key: "occupancy",
      kind: "select",
      showFor: ["rumah", "ruko"],
      optional: true,
      label: "Pemakaian",
      placeholder: "Pilih pemakaian",
      options: [o("owner", "Dihuni / dipakai sendiri"), o("rented", "Disewakan"), o("vacant", "Kosong")],
    },
    { key: "goodsType", kind: "text", showFor: ["gudang"], label: "Jenis barang yang disimpan", placeholder: "mis. elektronik, bahan baku, barang FMCG" },
    { key: "industry", kind: "text", showFor: ["pabrik"], label: "Jenis industri / produksi", placeholder: "mis. garmen, kerajinan, pengolahan makanan" },
    { key: "period", kind: "period", optional: true, label: "Periode polis", placeholder: "mis. 12", defaultUnit: "month" },
  ],
  flags: [
    { key: "mortgage", showFor: ["rumah", "kos", "ruko", "vila"], label: "Dipersyaratkan bank (KPR / kredit)" },
    { key: "protection", showFor: ["hotel", "gudang", "pabrik"], label: "Ada proteksi kebakaran (APAR / hydrant / sprinkler)" },
    { key: "bi", showFor: COMMERCIAL, label: "Perlu perlindungan kehilangan laba (business interruption)" },
    { key: "pl", showFor: ["kos", "ruko", "vila", "hotel"], label: "Perlu tanggung gugat pihak ketiga / tamu (liability)" },
    { key: "declaration", showFor: ["gudang"], label: "Stok fluktuatif, tertarik Declaration Policy" },
    { key: "flood", label: "Perlu perluasan gempa bumi / banjir / huru-hara (dinilai sesuai lokasi)" },
    { key: "claim", label: "Pernah klaim dalam 3 tahun terakhir" },
    { key: "renewal", label: "Perpanjangan polis yang sudah ada" },
    { key: "urgent", label: "Dibutuhkan mendesak (≤ 3 hari kerja)" },
  ],
  general: [
    r("Identitas pemilik / penanggung jawab", "KTP (perorangan) atau akta, NIB & NPWP (perusahaan)"),
    r("Bukti kepemilikan atau penguasaan", "Sertifikat (SHM/SHGB), AJB/PPJB, atau perjanjian sewa"),
    r("Foto lokasi & bangunan", "Tampak depan, samping, dan bagian dalam"),
    r("Polis sebelumnya & riwayat klaim", "Untuk perpanjangan, atau bila pernah klaim", false),
  ],
  specific: {
    rumah: [
      r("Luas bangunan & tahun bangun", "Dasar perhitungan nilai bangunan"),
      r("Daftar isi rumah bernilai", "Elektronik dan perabot yang ingin dimasukkan", false),
      r("Syarat asuransi dari bank", "Bila rumah dibiayai KPR", false),
    ],
    kos: [
      r("Jumlah kamar & tarif sewa", "Dasar nilai bangunan dan potensi kehilangan sewa"),
      r("Konstruksi & kelistrikan bangunan", "Beton atau semi permanen, kondisi instalasi listrik, ketersediaan APAR"),
      r("IMB / PBG bangunan", "Diminta saat klaim; sebaiknya sudah diurus", false),
      r("Daftar isi kamar & fasilitas bersama", "Bila ingin diasuransikan", false),
    ],
    ruko: [
      r("Jumlah lantai & konstruksi bangunan", "Beton, rangka baja, atau semi permanen"),
      r("Jenis usaha penghuni", "Menentukan tingkat risiko kebakaran"),
      r("Nilai stok & isi usaha", "Bila stok ingin diasuransikan", false),
    ],
    vila: [
      r("Profil vila / homestay", "Jumlah unit, kolam renang, dapur, dan fasilitas lain"),
      r("Nilai bangunan & perabot", "Dihitung dari biaya bangun ulang, bukan harga jual"),
      r("Konstruksi & sistem keselamatan", "Material bangunan, APAR, dan jalur evakuasi"),
      r("Izin usaha penginapan", "NIB / TDUP bila sudah ada", false),
    ],
    hotel: [
      r("Profil hotel", "Kelas/bintang, jumlah kamar, dan fasilitas (kolam renang, restoran)"),
      r("Nilai bangunan & perabot (FF&E)", "Dihitung berdasarkan replacement cost, bukan nilai buku"),
      r("Sistem proteksi kebakaran & keselamatan", "Sprinkler, alarm, dan prosedur evakuasi"),
      r("Riwayat klaim tamu / liability", "Untuk penilaian tanggung gugat pihak ketiga", false),
    ],
    gudang: [
      r("Jenis & nilai barang yang disimpan", "Dasar nilai isi; stok fluktuatif bisa memakai Declaration Policy"),
      r("Konstruksi & sistem proteksi kebakaran", "Material bangunan, APAR, hydrant, sprinkler"),
      r("Peralatan material handling", "Forklift, rak, conveyor, bila ingin dicakup", false),
    ],
    pabrik: [
      r("Nilai bangunan, mesin & stok", "Dasar nilai pertanggungan all risk industri"),
      r("Proses produksi & bahan berbahaya", "Menentukan profil risiko dan tarif"),
      r("Sistem proteksi kebakaran", "Sprinkler, hydrant, dan tim tanggap darurat"),
      r("Laporan penilaian nilai (appraisal)", "Dianjurkan untuk pabrik besar", false),
    ],
    konsultasi: [],
  },
  disclaimer:
    "Daftar bersifat umum. Nilai pertanggungan yang ideal dihitung dari biaya bangun ulang (replacement cost), bukan harga pasar. Perluasan gempa bumi dan banjir dinilai sesuai lokasi. Survei lokasi dapat diminta untuk properti bernilai besar atau berisiko tinggi.",
  copy: {
    dateLabel: "Tanggal mulai pertanggungan",
    clientLabel: "Nama properti / bangunan (opsional)",
    clientPh: "mis. Kos Putri Seturan / Gudang PT ABC",
    companyLabel: "Nama perusahaan",
    notePh: "mis. alamat lengkap, kondisi bangunan, perluasan yang dibutuhkan, atau info lain yang menurut Anda penting.",
  },
};
