import { KONSULTASI, o, r, type PenawaranCluster } from "./base";

const ALL = ["mobil", "niaga", "armada", "konsultasi"];
const MOBIL = ["mobil"];
const FLEET = ["niaga", "armada"];

export const KENDARAAN: PenawaranCluster = {
  key: "kendaraan",
  icon: "🚗",
  nama: "asuransi kendaraan",
  judul: "Permintaan Penawaran Asuransi Kendaraan",
  subjudul: "Isi data singkat kendaraan Anda. Kami analisa awal dan balas lewat WhatsApp.",
  typeLegend: "Jenis kendaraan",
  typeLine: "Jenis kendaraan",
  types: [
    { key: "mobil", label: "Mobil", hint: "All Risk & TLO, termasuk mobil listrik" },
    { key: "niaga", label: "Dump truk & niaga", hint: "Truk, tronton, kendaraan proyek" },
    { key: "armada", label: "Armada / fleet", hint: "Banyak unit dalam satu polis" },
    KONSULTASI,
  ],
  rules: [
    { type: "mobil", re: /mobil|all-risk-tlo|bengkel/ },
    { type: "niaga", re: /dump|truk|niaga/ },
    { type: "armada", re: /armada|fleet/ },
  ],
  companyOptionalFor: ["mobil", "konsultasi"],
  fields: [
    { key: "model", kind: "text", showFor: ALL, label: "Merek & tipe kendaraan", placeholder: "mis. Toyota Fortuner VRZ / Hino 500" },
    { key: "year", kind: "number", showFor: ALL, label: "Tahun pembuatan", placeholder: "mis. 2022" },
    { key: "units", kind: "number", showFor: FLEET, label: "Jumlah unit", placeholder: "mis. 10", suffix: "unit" },
    { key: "value", kind: "money", showFor: ALL, label: "Harga / nilai kendaraan (per unit)", placeholder: "mis. 450.000.000" },
    {
      key: "coverage",
      kind: "select",
      showFor: ALL,
      optional: true,
      label: "Jenis perlindungan",
      placeholder: "Pilih perlindungan",
      options: [o("allrisk", "All Risk (komprehensif)"), o("tlo", "TLO (kehilangan & rusak total)"), o("unsure", "Belum yakin, mohon disarankan")],
    },
    {
      key: "usage",
      kind: "select",
      showFor: MOBIL,
      optional: true,
      label: "Penggunaan",
      placeholder: "Pilih penggunaan",
      options: [o("private", "Pribadi / keluarga"), o("commercial", "Usaha / operasional"), o("rental", "Disewakan (rental)")],
    },
    {
      key: "operation",
      kind: "select",
      showFor: FLEET,
      optional: true,
      label: "Area operasi",
      placeholder: "Pilih area operasi",
      options: [
        o("construction", "Proyek konstruksi"),
        o("material", "Angkutan material / galian C"),
        o("logistics", "Logistik / distribusi barang"),
        o("mining", "Tambang"),
        o("other", "Lainnya"),
      ],
    },
  ],
  flags: [
    { key: "accessories", showFor: ["mobil", "konsultasi"], label: "Ada aksesori / modifikasi tambahan" },
    { key: "tpl", label: "Perlu tanggung gugat pihak ketiga (TPL)" },
    { key: "pa", label: "Perlu PA pengemudi & penumpang" },
    { key: "flood", label: "Perlu perluasan banjir / bencana alam" },
    { key: "workshop", showFor: ["mobil", "konsultasi"], label: "Ingin bengkel rekanan / resmi" },
    { key: "fleet", showFor: FLEET, label: "Armada banyak, minta fleet discount" },
    { key: "financed", label: "Masih leasing / kredit (syarat lembaga pembiayaan)" },
    { key: "claim", label: "Pernah klaim dalam 3 tahun terakhir" },
    { key: "renewal", label: "Perpanjangan polis yang sudah ada" },
    { key: "urgent", label: "Dibutuhkan mendesak (≤ 3 hari kerja)" },
  ],
  general: [
    r("Identitas pemilik", "KTP (perorangan) atau akta, NIB & NPWP (perusahaan)"),
    r("STNK kendaraan", "Memuat nomor polisi, nomor rangka, dan nomor mesin"),
    r("Foto kendaraan", "Empat sisi, interior, dan odometer"),
    r("Polis sebelumnya & riwayat klaim", "Untuk perpanjangan, atau bila pernah klaim", false),
  ],
  specific: {
    mobil: [
      r("Daftar aksesori / modifikasi", "Agar nilainya ikut dipertanggungkan", false),
      r("Syarat dari lembaga pembiayaan", "Bila mobil masih kredit / leasing", false),
    ],
    niaga: [
      r("Daftar unit", "Nomor polisi, tipe, tahun, dan nilai tiap unit"),
      r("Area operasi & jenis proyek", "Konstruksi, galian, atau logistik, menentukan tarif"),
      r("Rekam jejak klaim & kecelakaan armada", "Dasar penilaian risiko dan potensi fleet discount", false),
      r("Data pengemudi (SIM)", "Untuk perlindungan kecelakaan pengemudi", false),
    ],
    armada: [
      r("Daftar seluruh unit armada", "Nomor polisi, tipe, tahun, dan nilai tiap unit"),
      r("Rekam jejak klaim & kecelakaan armada", "Dasar penilaian risiko dan potensi fleet discount"),
      r("Data pengemudi (SIM)", "Untuk perlindungan kecelakaan pengemudi", false),
    ],
    konsultasi: [],
  },
  disclaimer:
    "Daftar bersifat umum. Premi mengikuti tarif OJK per kategori harga dan wilayah; survei kendaraan dapat diminta sebelum polis aktif, terutama untuk kendaraan lama atau bernilai besar.",
  copy: {
    dateLabel: "Tanggal mulai pertanggungan",
    clientLabel: "Nomor polisi (opsional)",
    clientPh: "mis. AB 1234 XY",
    companyLabel: "Nama perusahaan",
    notePh: "mis. varian kendaraan, kondisi saat ini, lokasi pemakaian, atau info lain yang menurut Anda penting.",
  },
};
