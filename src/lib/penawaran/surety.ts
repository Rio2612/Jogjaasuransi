import { KONSULTASI, o, r, type PenawaranCluster } from "./base";

export const SURETY: PenawaranCluster = {
  key: "surety",
  icon: "📋",
  nama: "surety bond",
  judul: "Permintaan Penawaran Surety Bond",
  subjudul: "Isi data singkat jaminan yang dibutuhkan. Kami analisa awal dan balas lewat WhatsApp.",
  typeLegend: "Jenis surety bond",
  typeLine: "Jenis bond",
  types: [
    { key: "penawaran", label: "Jaminan Penawaran", hint: "Bid bond untuk ikut tender" },
    { key: "pelaksanaan", label: "Jaminan Pelaksanaan", hint: "Performance bond setelah menang tender" },
    { key: "uangmuka", label: "Jaminan Uang Muka", hint: "Advance payment bond" },
    { key: "pemeliharaan", label: "Jaminan Pemeliharaan", hint: "Maintenance bond masa pemeliharaan" },
    KONSULTASI,
  ],
  rules: [
    { type: "penawaran", re: /penawaran|bid/ },
    { type: "pelaksanaan", re: /pelaksanaan/ },
    { type: "uangmuka", re: /uang-muka/ },
    { type: "pemeliharaan", re: /pemeliharaan|pemeliharan/ },
  ],
  fields: [
    {
      key: "scope",
      kind: "segmented",
      label: "Jenis proyek",
      default: "gov",
      options: [o("gov", "Pemerintah / BUMN / BUMD"), o("private", "Swasta")],
    },
    { key: "amount", kind: "money", label: "Jumlah jaminan", placeholder: "mis. 2.500.000.000" },
    { key: "period", kind: "period", label: "Lama periode", placeholder: "mis. 12", defaultUnit: "month" },
    {
      key: "work",
      kind: "select",
      optional: true,
      label: "Bidang pekerjaan",
      placeholder: "Pilih bidang",
      options: [o("construction", "Konstruksi (gedung, jalan, irigasi)"), o("goods", "Pengadaan barang"), o("consulting", "Jasa konsultansi"), o("service", "Jasa lainnya")],
    },
  ],
  flags: [
    { key: "history", label: "Pernah menerbitkan surety bond sebelumnya" },
    { key: "fin2y", label: "Laporan keuangan 2 tahun terakhir tersedia" },
    { key: "license", label: "Izin usaha / SBU sesuai bidang tersedia" },
    { key: "noCollateral", label: "Ingin tanpa agunan tunai" },
    { key: "urgent", label: "Dibutuhkan mendesak (≤ 3 hari kerja)" },
    { key: "multi", label: "Perlu lebih dari satu jenis bond" },
  ],
  general: [
    r("Akta pendirian & perubahan terakhir", "Beserta SK pengesahan Kemenkumham"),
    r("NIB & izin usaha sesuai bidang", "Termasuk SBU / sertifikat yang relevan dengan pekerjaan"),
    r("NPWP perusahaan", "SPT Tahunan terakhir bila diminta penanggung"),
    r("KTP & NPWP direksi / pemilik", "Pengurus dan pemegang saham utama"),
    r("Laporan keuangan 2 tahun terakhir", "Dasar penilaian kapasitas jaminan"),
    r("Rekening koran 3–6 bulan terakhir", "Menyesuaikan kebijakan penanggung & nilai jaminan", false),
    r("Daftar pengalaman proyek", "Memperkuat analisa, terutama untuk nilai besar", false),
    r("Perjanjian ganti rugi (indemnity)", "Ditandatangani saat penerbitan oleh pihak berwenang"),
  ],
  specific: {
    penawaran: [
      r("Undangan tender / dokumen pemilihan", "Memuat nilai & masa berlaku jaminan yang diminta"),
      r("Format jaminan dari panitia / pemberi kerja", "Agar redaksi bond sesuai ketentuan tender"),
      r("Nilai penawaran / HPS", "Acuan menentukan nilai jaminan penawaran", false),
    ],
    pelaksanaan: [
      r("Kontrak / SPK / SPPBJ", "Nilai kontrak, lingkup, dan masa pekerjaan"),
      r("Format jaminan pelaksanaan dari pemberi kerja", "Menyesuaikan redaksi dan masa berlaku"),
      r("Jadwal pelaksanaan (time schedule)", "Dasar menentukan masa berlaku bond", false),
    ],
    uangmuka: [
      r("Kontrak / SPK beserta ketentuan uang muka", "Persentase dan skema pengembalian uang muka"),
      r("Surat permohonan uang muka", "Diajukan ke pemberi kerja"),
      r("Rencana penggunaan uang muka", "Bila diminta penanggung / pemberi kerja", false),
    ],
    pemeliharaan: [
      r("Berita acara serah terima pertama (PHO)", "Penanda dimulainya masa pemeliharaan"),
      r("Kontrak & ketentuan masa pemeliharaan", "Lama masa pemeliharaan dan nilai jaminan"),
      r("Format jaminan pemeliharaan", "Dari pemberi kerja bila ada", false),
    ],
    konsultasi: [],
  },
  disclaimer:
    "Daftar bersifat umum. Persyaratan akhir mengikuti kebijakan penanggung dan ketentuan pemberi kerja; semakin lengkap dokumen perusahaan, semakin cepat analisa kapasitas jaminan dapat dilakukan.",
  copy: {
    dateLabel: "Target tanggal terbit",
    clientLabel: "Pemberi kerja / nama proyek",
    clientPh: "mis. Dinas PUPR DIY / PT ABC",
    companyLabel: "Nama perusahaan (kontraktor / penyedia)",
    notePh: "mis. nomor paket tender, batas waktu penyerahan jaminan, atau info lain yang menurut Anda penting.",
  },
};
