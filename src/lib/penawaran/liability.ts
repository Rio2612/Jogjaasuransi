import { KONSULTASI, o, r, YES_NO, type PenawaranCluster } from "./base";

const PUBLIC = ["public"];
const EMPLOYER = ["employer"];
const PRODUCT = ["product"];
const B3 = ["b3"];

export const LIABILITY: PenawaranCluster = {
  key: "liability",
  icon: "🛡️",
  nama: "asuransi liability",
  judul: "Permintaan Penawaran Asuransi Liability",
  subjudul: "Isi data singkat usaha Anda. Kami analisa awal dan balas lewat WhatsApp.",
  typeLegend: "Jenis liability",
  typeLine: "Jenis liability",
  types: [
    { key: "public", label: "Public Liability", hint: "Tanggung gugat kepada pihak ketiga / publik" },
    { key: "employer", label: "Employer's Liability", hint: "Tanggung gugat pemberi kerja di luar BPJS" },
    { key: "product", label: "Product Liability", hint: "Kerugian pihak ketiga akibat produk" },
    { key: "b3", label: "Limbah B3", hint: "Pencemaran & tanggung gugat limbah B3" },
    KONSULTASI,
  ],
  rules: [
    { type: "public", re: /public/ },
    { type: "employer", re: /employer/ },
    { type: "product", re: /product/ },
    { type: "b3", re: /limbah|(^|[-/])b3([-/]|$)/ },
  ],
  companyOptionalFor: [],
  fields: [
    { key: "business", kind: "text", label: "Bidang usaha / ruang lingkup pekerjaan", placeholder: "mis. hotel & restoran, bengkel, pabrik tahu" },
    { key: "limit", kind: "money", label: "Limit pertanggungan yang diinginkan", placeholder: "mis. 5.000.000.000" },
    { key: "period", kind: "period", label: "Periode polis", placeholder: "mis. 12", defaultUnit: "month" },
    // ── Public / Employer / Product ──
    { key: "employees", kind: "number", showFor: ["public", "employer", "product", "konsultasi"], optional: true, label: "Jumlah karyawan", placeholder: "mis. 40", suffix: "orang" },
    { key: "principal", kind: "text", showFor: PUBLIC, optional: true, label: "Principal / pemberi kerja (Additional Insured)", placeholder: "Nama principal, bila diminta" },
    // ── Employer's Liability ──
    { key: "payroll", kind: "money", showFor: EMPLOYER, label: "Total gaji / upah karyawan setahun", placeholder: "mis. 1.200.000.000" },
    { key: "bpjs", kind: "select", showFor: EMPLOYER, optional: true, label: "Karyawan sudah terdaftar BPJS Ketenagakerjaan?", placeholder: "Pilih", options: [o("yes", "Ya, semua"), o("part", "Sebagian"), o("no", "Belum")] },
    {
      key: "workRisk",
      kind: "select",
      showFor: EMPLOYER,
      optional: true,
      label: "Tingkat risiko pekerjaan",
      placeholder: "Pilih tingkat risiko",
      options: [o("office", "Kantor / ringan"), o("field", "Operasional / lapangan"), o("high", "Pekerjaan berisiko tinggi (ketinggian, mesin berat)")],
    },
    // ── Product Liability ──
    { key: "productType", kind: "text", showFor: PRODUCT, label: "Jenis produk", placeholder: "mis. makanan olahan, kosmetik, perabot" },
    { key: "turnover", kind: "money", showFor: PRODUCT, optional: true, label: "Omzet penjualan produk setahun", placeholder: "mis. 3.000.000.000" },
    { key: "market", kind: "select", showFor: PRODUCT, optional: true, label: "Wilayah pemasaran", placeholder: "Pilih wilayah", options: [o("local", "Lokal (DIY & sekitarnya)"), o("national", "Nasional"), o("export", "Ekspor")] },
    // ── Limbah B3 ──
    { key: "wasteType", kind: "text", showFor: B3, label: "Jenis limbah B3", placeholder: "mis. oli bekas, sludge, pelarut" },
    { key: "volume", kind: "number", showFor: B3, optional: true, label: "Volume limbah per bulan", placeholder: "mis. 20", suffix: "ton" },
    {
      key: "role",
      kind: "select",
      showFor: B3,
      optional: true,
      label: "Peran fasilitas",
      placeholder: "Pilih peran",
      options: [o("generator", "Penghasil limbah"), o("collector", "Pengumpul / penyimpan"), o("transporter", "Pengangkut / pengolah")],
    },
    { key: "hasPermit", kind: "select", showFor: B3, optional: true, label: "Izin lingkungan sudah ada?", placeholder: "Pilih", options: YES_NO },
  ],
  flags: [
    { key: "additional", showFor: PUBLIC, label: "Principal meminta Additional Insured" },
    { key: "recall", showFor: PRODUCT, label: "Pernah ada keluhan / penarikan (recall) produk" },
    { key: "permit", showFor: B3, label: "Izin lingkungan & Pertek tersedia" },
    { key: "coi", label: "Perlu Certificate of Insurance (COI)" },
    { key: "contract", label: "Polis jadi syarat kontrak / kualifikasi vendor" },
    { key: "claims", label: "Ada riwayat klaim 3 tahun terakhir" },
    { key: "urgent", label: "Dibutuhkan mendesak (mobilisasi proyek)" },
  ],
  general: [
    r("Legalitas perusahaan", "NIB, SIUP/TDP, NPWP, dan Akta Pendirian"),
    r("Profil bisnis", "Kegiatan usaha, jumlah karyawan, luas area operasional"),
    r("Riwayat klaim 3 tahun terakhir", "Bila ada; menjadi dasar penilaian risiko", false),
  ],
  specific: {
    public: [
      r("Kontrak / WO & scope of work dengan principal", "Untuk subkontraktor atau pekerja proyek", false),
      r("Nama & alamat principal", "Bila principal meminta Additional Insured", false),
    ],
    employer: [
      r("Daftar karyawan & data upah", "Dasar nilai pertanggungan dan premi"),
      r("Bukti kepesertaan BPJS Ketenagakerjaan", "Employer's Liability melengkapi, bukan menggantikan, BPJS"),
      r("Peraturan perusahaan / prosedur K3", "Untuk penilaian risiko kecelakaan kerja", false),
    ],
    product: [
      r("Daftar produk & spesifikasi", "Jenis, bahan, dan cara pemakaian produk"),
      r("Izin edar / sertifikasi", "PIRT, BPOM, SNI, atau halal, bila ada", false),
      r("Sistem kontrol kualitas & distribusi", "Dasar penilaian risiko produk cacat", false),
    ],
    b3: [
      r("Dokumen lingkungan", "Persetujuan Lingkungan (AMDAL/UKL-UPL), Pertek B3, Neraca Limbah B3"),
      r("Manifest limbah B3 6 bulan terakhir", "Dasar volume dan jenis limbah"),
      r("Data teknis fasilitas", "Layout penyimpanan, kapasitas tangki, jenis & volume limbah per bulan"),
      r("Rekam jejak insiden lingkungan", "3 tahun terakhir, bila ada", false),
    ],
    konsultasi: [],
  },
  disclaimer:
    "Daftar bersifat umum. Waktu proses menyesuaikan kelengkapan dokumen dan penanggung; underwriting limbah B3 biasanya lebih panjang karena memerlukan dokumen lingkungan.",
  copy: {
    dateLabel: "Tanggal mulai polis",
    clientLabel: "Proyek / principal (opsional)",
    clientPh: "mis. proyek pembangunan hotel untuk PT ABC",
    companyLabel: "Nama perusahaan",
    notePh: "mis. syarat dari principal, kejadian yang pernah terjadi, atau info lain yang menurut Anda penting.",
  },
};
