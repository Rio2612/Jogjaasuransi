import { KONSULTASI, o, r, YES_NO, type PenawaranCluster } from "./base";

const CAR = ["car"];
const EAR = ["ear"];
const MB = ["mb"];
const PROJ = ["car", "ear"];

export const ENGINEERING: PenawaranCluster = {
  key: "engineering",
  icon: "⚙️",
  nama: "asuransi engineering",
  judul: "Permintaan Penawaran Asuransi Engineering",
  subjudul: "Isi data singkat proyek atau mesin Anda. Kami analisa awal dan balas lewat WhatsApp.",
  typeLegend: "Jenis asuransi engineering",
  typeLine: "Jenis asuransi",
  types: [
    { key: "car", label: "Contractor All Risk (CAR)", hint: "Proyek konstruksi gedung, jalan, infrastruktur" },
    { key: "ear", label: "Erection All Risk (EAR)", hint: "Pemasangan mesin, plant & instalasi" },
    { key: "mb", label: "Machinery Breakdown (MB)", hint: "Kerusakan mendadak mesin & peralatan produksi" },
    KONSULTASI,
  ],
  rules: [
    { type: "car", re: /contractor|kontraktor|(^|[-/])car([-/]|$)/ },
    { type: "ear", re: /erection|(^|[-/])ear([-/]|$)/ },
    { type: "mb", re: /machinery|mesin/ },
  ],
  fields: [
    { key: "location", kind: "text", label: "Lokasi proyek / mesin", placeholder: "mis. Kalasan, Sleman / KIK Piyungan, Bantul" },
    // ── CAR ──
    {
      key: "projectType",
      kind: "select",
      showFor: CAR,
      optional: true,
      label: "Jenis proyek",
      placeholder: "Pilih jenis proyek",
      options: [o("building", "Gedung / bangunan"), o("road", "Jalan / jembatan"), o("infra", "Infrastruktur / irigasi"), o("industrial", "Pabrik / industri")],
    },
    { key: "contractValue", kind: "money", showFor: PROJ, label: "Nilai kontrak proyek", placeholder: "mis. 25.000.000.000" },
    // ── EAR ──
    { key: "installation", kind: "text", showFor: EAR, label: "Jenis mesin / instalasi yang dipasang", placeholder: "mis. boiler, turbin, conveyor, plant" },
    { key: "equipmentValue", kind: "money", showFor: EAR, optional: true, label: "Nilai mesin / peralatan yang dipasang", placeholder: "mis. 10.000.000.000" },
    { key: "testing", kind: "select", showFor: EAR, optional: true, label: "Ada testing & commissioning?", placeholder: "Pilih", options: YES_NO },
    // ── Periode proyek ──
    { key: "period", kind: "period", showFor: PROJ, label: "Periode konstruksi", placeholder: "mis. 12", defaultUnit: "month" },
    { key: "maintenance", kind: "number", showFor: PROJ, optional: true, label: "Masa pemeliharaan (maintenance period)", placeholder: "mis. 12", suffix: "bulan" },
    // ── Machinery Breakdown ──
    { key: "machineType", kind: "text", showFor: MB, label: "Jenis mesin", placeholder: "mis. mesin produksi, genset, kompresor, boiler" },
    { key: "model", kind: "text", showFor: MB, label: "Merek & tipe", placeholder: "mis. Caterpillar C18 / Atlas Copco GA55" },
    { key: "year", kind: "number", showFor: MB, label: "Tahun pembuatan", placeholder: "mis. 2019" },
    { key: "units", kind: "number", showFor: MB, label: "Jumlah unit", placeholder: "mis. 3", suffix: "unit" },
    { key: "machineValue", kind: "money", showFor: MB, label: "Nilai mesin (per unit)", placeholder: "mis. 1.800.000.000" },
    {
      key: "sector",
      kind: "select",
      showFor: MB,
      optional: true,
      label: "Sektor penggunaan",
      placeholder: "Pilih sektor",
      options: [o("manufacture", "Pabrik / manufaktur"), o("food", "Pengolahan makanan"), o("construction", "Proyek konstruksi"), o("mining", "Pertambangan / galian"), o("other", "Lainnya")],
    },
    {
      key: "ownership",
      kind: "select",
      showFor: MB,
      optional: true,
      label: "Status mesin",
      placeholder: "Pilih status",
      options: [o("owned", "Milik sendiri"), o("leased", "Leasing / sewa guna usaha"), o("rental", "Disewakan ke pihak lain")],
    },
    { key: "estValue", kind: "money", showFor: ["konsultasi"], optional: true, label: "Perkiraan nilai proyek / mesin", placeholder: "mis. 5.000.000.000" },
  ],
  flags: [
    { key: "tpl", showFor: PROJ, label: "Perlu tanggung gugat pihak ketiga (TPL)" },
    { key: "subcon", showFor: PROJ, label: "Ada subkontraktor utama" },
    { key: "contract", showFor: [...PROJ, "konsultasi"], label: "Polis disyaratkan dalam kontrak / tender" },
    { key: "bond", showFor: PROJ, label: "Sekaligus perlu surety bond (jaminan)" },
    { key: "running", showFor: PROJ, label: "Proyek sudah berjalan" },
    { key: "bi", showFor: MB, label: "Perlu perlindungan kehilangan laba akibat mesin berhenti" },
    { key: "service", showFor: MB, label: "Ada perawatan berkala / kontrak servis" },
    { key: "appraisal", showFor: MB, label: "Perlu bantuan appraisal nilai mesin" },
    { key: "fleet", showFor: MB, label: "Banyak unit, minta penawaran program" },
    { key: "claim", showFor: MB, label: "Pernah klaim dalam 3 tahun terakhir" },
    { key: "renewal", showFor: MB, label: "Perpanjangan polis yang sudah ada" },
    { key: "urgent", label: "Dibutuhkan mendesak" },
  ],
  general: [
    r("Legalitas perusahaan", "Akta, NIB, dan NPWP kontraktor / pemilik proyek / pemilik mesin"),
    r("Kontrak / SPK / Letter of Award", "Memuat nilai dan lingkup pekerjaan", true, PROJ),
    r("Jadwal pelaksanaan proyek", "Tanggal mulai, selesai, dan masa pemeliharaan", true, PROJ),
    r("Data mesin", "Merek, tipe, tahun pembuatan, nomor seri, dan kapasitas", true, MB),
    r("Foto terkini mesin", "Minimal 4 sudut dan komponen utama", true, MB),
    r("Bukti kepemilikan", "Invoice pembelian atau kontrak leasing", true, MB),
  ],
  specific: {
    car: [
      r("Ringkasan lingkup & BoQ / RAB", "Dasar penentuan nilai dan risiko proyek"),
      r("Data lokasi & kondisi tanah", "Hasil soil test, risiko banjir atau gempa, bila ada", false),
      r("Daftar subkontraktor utama", "Bila ada pekerjaan yang disubkontrakkan", false),
    ],
    ear: [
      r("Daftar mesin / peralatan yang dipasang", "Beserta nilai tiap item"),
      r("Jadwal erection, testing & commissioning", "Fase testing menentukan risiko dan tarif"),
      r("Data pabrikan / vendor peralatan", "Bila tersedia", false),
    ],
    mb: [
      r("Estimasi nilai penggantian (replacement cost)", "Dasar nilai pertanggungan mesin"),
      r("Buku log perawatan & kontrak servis", "Menunjukkan kondisi dan riwayat servis"),
      r("Riwayat kerusakan mesin 3 tahun terakhir", "Dasar penilaian risiko", false),
      r("Lokasi & kondisi ruang mesin", "Foto area pemasangan, ventilasi, dan kelistrikan", false),
    ],
    konsultasi: [],
  },
  disclaimer:
    "Daftar bersifat umum; setiap proyek dan mesin dinilai satu per satu. Mesin berusia lebih dari 5 tahun atau bernilai besar biasanya memerlukan appraisal atau survei sebelum polis terbit.",
  copy: {
    dateLabel: "Target polis mulai berlaku",
    clientLabel: "Nama proyek / pemilik proyek (opsional)",
    clientPh: "mis. Pembangunan Gudang PT ABC",
    companyLabel: "Nama kontraktor / perusahaan",
    notePh: "mis. lingkup pekerjaan, kondisi lokasi, subkontraktor, atau info lain yang menurut Anda penting.",
  },
};
