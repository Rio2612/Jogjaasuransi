import { o, r, YES_NO, type PenawaranCluster } from "./base";

const KONSER = ["konser"];
const MOTO = ["motocross"];
const CROWD = ["konser", "motocross", "lain"];

export const EVENT: PenawaranCluster = {
  key: "event",
  icon: "🎪",
  nama: "asuransi event",
  judul: "Permintaan Penawaran Asuransi Event",
  subjudul: "Isi data singkat acara Anda. Kami analisa awal dan balas lewat WhatsApp.",
  typeLegend: "Jenis event",
  typeLine: "Jenis event",
  types: [
    { key: "konser", label: "Konser & festival musik", hint: "Liability penonton & non-appearance artis" },
    { key: "motocross", label: "Motocross & grasstrack", hint: "PA pembalap & liability penonton" },
    { key: "lain", label: "Event lain", hint: "Olahraga, pameran, bazar, dan lainnya" },
  ],
  rules: [
    { type: "konser", re: /konser|festival|musik/ },
    { type: "motocross", re: /motocross|grasstrack/ },
  ],
  fields: [
    { key: "venue", kind: "text", label: "Lokasi / venue", placeholder: "mis. Stadion Maguwoharjo, Sleman / lapangan desa" },
    { key: "eventKind", kind: "text", showFor: ["lain"], label: "Jenis acara", placeholder: "mis. lomba lari, pameran, bazar UMKM" },
    { key: "audience", kind: "number", showFor: CROWD, label: "Estimasi penonton / pengunjung", placeholder: "mis. 5000", suffix: "orang" },
    { key: "days", kind: "number", showFor: CROWD, optional: true, label: "Durasi event", placeholder: "mis. 2", suffix: "hari" },
    // ── Konser ──
    {
      key: "setting",
      kind: "select",
      showFor: KONSER,
      optional: true,
      label: "Lokasi acara",
      placeholder: "Pilih indoor / outdoor",
      options: [o("indoor", "Indoor"), o("outdoor", "Outdoor")],
    },
    { key: "intlArtist", kind: "select", showFor: KONSER, optional: true, label: "Ada artis mancanegara?", placeholder: "Pilih", options: YES_NO },
    { key: "budget", kind: "money", showFor: KONSER, optional: true, label: "Estimasi total budget produksi", placeholder: "mis. 2.000.000.000" },
    // ── Motocross ──
    { key: "riders", kind: "number", showFor: MOTO, label: "Pembalap terdaftar", placeholder: "mis. 120", suffix: "orang" },
    { key: "paBenefit", kind: "money", showFor: MOTO, optional: true, label: "Santunan PA per pembalap yang diinginkan", placeholder: "mis. 50.000.000" },
  ],
  flags: [
    { key: "security", showFor: CROWD, label: "Rencana pengamanan crowd sudah ada" },
    { key: "medic", showFor: ["motocross", "lain"], label: "Tim medis / ambulans disiapkan" },
    { key: "coi", label: "Perlu Certificate of Insurance (izin keramaian / venue / sponsor)" },
    { key: "recurring", label: "Event rutin / berulang" },
    { key: "urgent", label: "Event kurang dari 2 minggu lagi" },
  ],
  general: [
    r("Identitas penyelenggara", "Akta/NIB (EO atau panitia) atau KTP penanggung jawab"),
    r("Nama, tanggal & lokasi event", "Dasar penentuan periode dan risiko venue"),
    r("Format COI dari venue / sponsor", "Bila venue, sponsor, atau izin keramaian mensyaratkan", false),
  ],
  specific: {
    konser: [
      r("Rundown acara & susunan artis", "Termasuk jadwal tampil dan durasi"),
      r("Denah venue & estimasi kapasitas penonton", "Akses masuk-keluar dan zona penonton"),
      r("Estimasi total budget produksi", "Dasar nilai pertanggungan non-appearance / pembatalan"),
      r("Rencana pengamanan crowd & keselamatan", "Jumlah petugas, medis, dan jalur evakuasi"),
      r("Jadwal perjalanan artis mancanegara", "Membantu assessment risiko keterlambatan / pembatalan", false),
    ],
    motocross: [
      r("Daftar pembalap terdaftar", "Nama dan kelas; PA hanya berlaku untuk pembalap terdaftar"),
      r("Rundown lomba & kelas yang dipertandingkan", "Jumlah seri, heat, dan final"),
      r("Denah lintasan & estimasi penonton", "Area penonton dan jarak aman dari lintasan"),
      r("Rencana medis & keselamatan", "Tim medis, ambulans, dan marshal lintasan", false),
      r("Izin / rekomendasi penyelenggara", "Mis. rekomendasi IMI, bila ada", false),
    ],
    lain: [
      r("Rundown acara & denah lokasi", "Area pengunjung, akses masuk-keluar, dan jalur evakuasi"),
      r("Rencana keselamatan & medis", "Petugas, ambulans, dan prosedur darurat", false),
    ],
  },
  disclaimer:
    "Daftar bersifat umum; setiap event dinilai satu per satu. Ajukan sedini mungkin, idealnya beberapa minggu sebelum acara, agar verifikasi dan penjadwalan dapat dilakukan.",
  copy: {
    dateLabel: "Tanggal event",
    clientLabel: "Nama event",
    clientPh: "mis. Jogja Music Festival 2026",
    companyLabel: "Nama panitia / EO / klub",
    notePh: "mis. susunan acara, sponsor, syarat dari venue, atau info lain yang menurut Anda penting.",
  },
};
