"use client";
import { useState } from "react";
import { KONTAK, formatRp } from "@/lib/data";

// ─── INPUT FORMAT HELPERS ────────────────────────────────────────────────────
// Format angka dengan titik sebagai pemisah ribuan: 100000000 → "100.000.000"
function formatInput(val: string): string {
  const digits = val.replace(/\D/g, "");
  if (!digits) return "";
  return parseInt(digits, 10).toLocaleString("id-ID");
}
// Strip titik lalu parse ke number
function parseInput(val: string): number {
  return parseFloat(val.replace(/\./g, "")) || 0;
}

// ─── RATE TABLES ────────────────────────────────────────────────────────────
const RATE_PROPERTI_ALL: Record<string, Record<string, number>> = {
  rumah:  { kelas1: 0.0764, kelas2: 0.084,  kelas3: 0.420 },
  kos:    { kelas1: 0.063,  kelas2: 0.089,  kelas3: 0.445 },
  ruko:   { kelas1: 0.069,  kelas2: 0.098,  kelas3: 0.490 },
  gudang: { kelas1: 0.075,  kelas2: 0.105,  kelas3: 0.525 },
  kantor: { kelas1: 0.055,  kelas2: 0.078,  kelas3: 0.390 },
};

// Rate gempa per zona dan jenis properti (dalam persen %)
// Zona 4: Gunungkidul, Sleman, Kulon Progo, Kota Yogyakarta
// Zona 5: Bantul
const RATE_GEMPA_ZONA: Record<string, Record<string, number>> = {
  zona4: {
    rumah:   0.135, // 1.35‰
    kos:     0.143, // 1.43‰
    ruko:    0.143, // 1.43‰
    gudang:  0.143, // 1.43‰
    kantor:  0.143, // 1.43‰
  },
  zona5: {
    rumah:   0.160, // 1.60‰
    kos:     0.190, // 1.90‰
    ruko:    0.190, // 1.90‰
    gudang:  0.190, // 1.90‰
    kantor:  0.190, // 1.90‰
  },
};

const WILAYAH_OPTIONS = [
  { value: "bantul",          label: "Bantul",          zona: "zona5" },
  { value: "gunungkidul",     label: "Gunungkidul",     zona: "zona4" },
  { value: "sleman",          label: "Sleman",          zona: "zona4" },
  { value: "kulonprogo",      label: "Kulon Progo",     zona: "zona4" },
  { value: "kota_yogyakarta", label: "Kota Yogyakarta", zona: "zona4" },
];

// ─── CORE CALCULATION FUNCTION ───────────────────────────────────────────────
interface ParamsKalkulator {
  jenisProperti: string;
  kelasKonstruksi: string;
  nilaiBangunan: number;
  nilaiPerabotan: number;
  pilihGempa: boolean;
  wilayahGempa: string;
}

function hitungEstimasiFinal(params: ParamsKalkulator) {
  const { jenisProperti, kelasKonstruksi, nilaiBangunan, nilaiPerabotan, pilihGempa, wilayahGempa } = params;

  const totalPertanggungan = nilaiBangunan + nilaiPerabotan;

  // POLIS 1: Kebakaran + Perluasan
  const rateKebakaran = RATE_PROPERTI_ALL[jenisProperti][kelasKonstruksi];
  const premiKebakaran = (totalPertanggungan * rateKebakaran) / 100;
  const adminPolis1 = premiKebakaran < 5_000_000 ? 30_000 : 40_000;

  // POLIS 2: Gempa Bumi (hanya jika dicentang DAN kelas 1 DAN wilayah dipilih)
  const gempaTersedia = kelasKonstruksi === 'kelas1';
  let premiGempa = 0;
  let adminPolis2 = 0;
  if (pilihGempa && gempaTersedia && wilayahGempa) {
    const zona = WILAYAH_OPTIONS.find(w => w.value === wilayahGempa)?.zona ?? "zona4";
    const rateGempa = RATE_GEMPA_ZONA[zona][jenisProperti] ?? 0;
    premiGempa = (totalPertanggungan * rateGempa) / 100;
    adminPolis2 = premiGempa < 5_000_000 ? 30_000 : 40_000;
  }

  const totalPremiTahun = premiKebakaran + premiGempa;
  const totalBiayaAdmin = adminPolis1 + adminPolis2;
  const totalPremiAkhir = totalPremiTahun + totalBiayaAdmin;

  return {
    totalPertanggungan,
    premiKebakaran,
    adminPolis1,
    subtotalPolis1: premiKebakaran + adminPolis1,
    premiGempa,
    adminPolis2,
    subtotalPolis2: premiGempa > 0 ? premiGempa + adminPolis2 : 0,
    totalBiayaAdmin,
    totalPremiAkhir,
    gempaTersedia,
    duaPolis: premiGempa > 0,
  };
}

type HasilHitung = ReturnType<typeof hitungEstimasiFinal>;

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function KalkulatorProperti() {
  // Input states
  const [jenis,     setJenis]     = useState("rumah");
  const [kelas,     setKelas]     = useState("kelas1");
  const [nilai,     setNilai]     = useState("");
  const [prabotan,  setPrabotan]  = useState("");
  const [banjir,    setBanjir]    = useState(false);
  const [gempa,     setGempa]     = useState(false);
  const [wilayah,   setWilayah]   = useState("");

  // Result & UI states
  const [hasil,     setHasil]     = useState<HasilHitung | null>(null);
  const [error,     setError]     = useState("");
  const [showForm,  setShowForm]  = useState(false);

  // Lead form states
  const [nama,         setNama]         = useState("");
  const [alamat,       setAlamat]       = useState("");

  // Gempa hanya tersedia untuk kelas 1 — auto-uncheck jika ganti konstruksi
  const handleKelasChange = (val: string) => {
    setKelas(val);
    if (val !== 'kelas1') { setGempa(false); setWilayah(""); }
    setHasil(null);
    setShowForm(false);
  };

  const hitung = () => {
    const nilaiBangunan  = parseInput(nilai);
    const nilaiPerabotan = parseInput(prabotan);

    if (!nilaiBangunan || nilaiBangunan < 10_000_000) {
      setError("Masukkan nilai bangunan minimal Rp 10.000.000");
      return;
    }
    if (gempa && !wilayah) {
      setError("Pilih wilayah/kabupaten untuk jaminan gempa bumi");
      return;
    }
    setError("");

    const result = hitungEstimasiFinal({
      jenisProperti:   jenis,
      kelasKonstruksi: kelas,
      nilaiBangunan,
      nilaiPerabotan,
      pilihGempa:      gempa,
      wilayahGempa:    wilayah,
    });

    setHasil(result);
    setShowForm(false);
    setNama("");
    setAlamat("");
  };

  const buildWaMsg = () => {
    if (!hasil) return "";
    const jenisLabel   = { rumah:"Rumah Tinggal", kos:"Kos-kosan", ruko:"Ruko / Toko", gudang:"Gudang", kantor:"Kantor" }[jenis] ?? jenis;
    const kelasLabel   = { kelas1:"Kelas 1 (Beton/Bata)", kelas2:"Kelas 2 (Semi Permanen)", kelas3:"Kelas 3 (Kayu/Bambu)" }[kelas] ?? kelas;
    const wilayahLabel = WILAYAH_OPTIONS.find(w => w.value === wilayah)?.label ?? "";
    const nilaiPrabot  = parseInput(prabotan);
    const perluasanList = [banjir && "Banjir", gempa && hasil.duaPolis && `Gempa Bumi - ${wilayahLabel} (Polis Terpisah)`].filter(Boolean).join(" + ") || "Tidak ada";

    let msg = `Halo Pak Rio, saya ingin konsultasi asuransi properti.\n\n`;
    msg += `*Data Properti:*\n`;
    msg += `- Nama: ${nama}\n`;
    msg += `- Alamat Pertanggungan: ${alamat}\n`;
    msg += `- Jenis: ${jenisLabel}\n`;
    msg += `- Konstruksi: ${kelasLabel}\n`;
    msg += `- Nilai Bangunan: ${formatRp(parseInput(nilai))}\n`;
    if (nilaiPrabot > 0) msg += `- Nilai Perabotan: ${formatRp(nilaiPrabot)}\n`;
    msg += `- Total Pertanggungan: ${formatRp(hasil.totalPertanggungan)}\n`;
    msg += `- Perluasan: ${perluasanList}\n\n`;

    msg += `*Estimasi Polis Kebakaran:*\n`;
    msg += `- Premi: ${formatRp(hasil.premiKebakaran)}/tahun\n`;
    msg += `- Biaya Admin: ${formatRp(hasil.adminPolis1)}\n`;
    msg += `- Subtotal: ${formatRp(hasil.subtotalPolis1)}\n`;

    if (hasil.duaPolis) {
      msg += `\n*Estimasi Polis Gempa Bumi:*\n`;
      msg += `- Premi: ${formatRp(hasil.premiGempa)}/tahun\n`;
      msg += `- Biaya Admin: ${formatRp(hasil.adminPolis2)}\n`;
      msg += `- Subtotal: ${formatRp(hasil.subtotalPolis2)}\n`;
    }

    msg += `\n*Total Estimasi${hasil.duaPolis ? " (2 Polis)" : ""}: ${formatRp(hasil.totalPremiAkhir)}*\n\n`;
    msg += `_(Mohon kirim foto tampak depan bangunan setelah chat ini terbuka)_\n\n`;
    msg += `Mohon info penawaran resminya. Terima kasih.`;

    return encodeURIComponent(msg);
  };

  const formValid    = nama.trim().length > 0 && alamat.trim().length > 0;
  const gempaBisaDipilih = kelas === 'kelas1';

  const selectCls = "bg-navy2 border border-white/20 text-white px-3.5 py-[11px] rounded-lg text-[1rem] outline-none focus:border-gold appearance-none cursor-pointer w-full";
  const inputCls  = "bg-navy2 border border-white/20 text-white px-3.5 py-[11px] rounded-lg text-[1rem] outline-none focus:border-gold placeholder-white/40 w-full";
  const labelCls  = "text-[0.95rem] font-semibold text-white/75 mb-1.5 block";

  return (
    <section id="kalkulator" className="py-20 px-[5vw] bg-navy">
      <div className="text-center mb-10">
        <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-2">Estimasi Premi</div>
        <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.6rem)] text-white leading-[1.22]">
          Kalkulator Premi<br />Asuransi Properti
        </h2>
        <p className="text-white/60 text-sm leading-relaxed max-w-[500px] mx-auto mt-3">
          Estimasi kasar berdasarkan jenis properti, konstruksi, dan perluasan risiko. Premi final ditentukan setelah survei.
        </p>
      </div>

      <div className="bg-white/5 border border-gold/20 rounded-[20px] p-8 max-w-[680px] mx-auto">

        {/* ─── INPUT FORM ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls}>Jenis Properti</label>
            <select className={selectCls} value={jenis} onChange={e => { setJenis(e.target.value); setHasil(null); setShowForm(false); }}>
              <option value="rumah"  style={{background:"#163352"}}>🏡 Rumah Tinggal</option>
              <option value="kos"    style={{background:"#163352"}}>🏘️ Kos-kosan</option>
              <option value="ruko"   style={{background:"#163352"}}>🏪 Ruko / Toko</option>
              <option value="gudang" style={{background:"#163352"}}>🏭 Gudang</option>
              <option value="kantor" style={{background:"#163352"}}>🏢 Kantor</option>
            </select>
          </div>
          <div>
            <label className={labelCls}>Kelas Konstruksi</label>
            <select className={selectCls} value={kelas} onChange={e => handleKelasChange(e.target.value)}>
              <option value="kelas1" style={{background:"#163352"}}>Kelas 1 – Beton / Bata</option>
              <option value="kelas2" style={{background:"#163352"}}>Kelas 2 – Semi Permanen</option>
              <option value="kelas3" style={{background:"#163352"}}>Kelas 3 – Kayu / Bambu</option>
            </select>
          </div>
        </div>

        {/* Nilai Bangunan + Nilai Perabotan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <div>
            <label className={labelCls}>Nilai Bangunan (Rp)</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Contoh: 500.000.000"
              className={inputCls}
              value={nilai}
              onChange={e => setNilai(formatInput(e.target.value))}
            />
            <span className="text-white/40 text-xs mt-1 block">Nilai penggantian bangunan (bukan harga tanah)</span>
          </div>
          <div>
            <label className={labelCls}>Nilai Perabotan (Rp) <span className="text-white/35 font-normal text-xs">— opsional</span></label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Contoh: 50.000.000"
              className={inputCls}
              value={prabotan}
              onChange={e => setPrabotan(formatInput(e.target.value))}
            />
            <span className="text-white/40 text-xs mt-1 block">Perabot, elektronik, isi bangunan</span>
          </div>
        </div>

        {/* Perluasan Jaminan */}
        <div className="mt-5">
          <label className={labelCls}>Perluasan Jaminan (opsional)</label>
          <div className="flex gap-4 flex-wrap mt-1">
            <label className="flex items-center gap-2 cursor-pointer text-white/80 text-sm">
              <input
                type="checkbox"
                checked={banjir}
                onChange={e => setBanjir(e.target.checked)}
                className="accent-gold w-4 h-4"
              />
              🌊 Banjir
            </label>

            <label className={`flex items-center gap-2 text-sm ${gempaBisaDipilih ? "cursor-pointer text-white/80" : "cursor-not-allowed text-white/35"}`}>
              <input
                type="checkbox"
                checked={gempa}
                disabled={!gempaBisaDipilih}
                onChange={e => setGempa(e.target.checked)}
                className="accent-gold w-4 h-4 disabled:opacity-30"
              />
              🌋 Gempa Bumi
              {gempa && gempaBisaDipilih && (
                <span className="text-gold/70 text-xs">(polis terpisah)</span>
              )}
              {!gempaBisaDipilih && (
                <span className="text-white/30 text-xs">(hanya Kelas 1)</span>
              )}
            </label>
          </div>

          {gempa && gempaBisaDipilih && (
            <div className="mt-4">
              <label className={labelCls}>Wilayah / Kabupaten</label>
              <select
                className={selectCls}
                value={wilayah}
                onChange={e => setWilayah(e.target.value)}
              >
                <option value="" style={{background:"#163352"}}>— Pilih wilayah —</option>
                {WILAYAH_OPTIONS.map(w => (
                  <option key={w.value} value={w.value} style={{background:"#163352"}}>
                    {w.label} {w.zona === "zona5" ? "(Zona 5)" : "(Zona 4)"}
                  </option>
                ))}
              </select>
              <span className="text-white/40 text-xs mt-1 block">
                Bantul = Zona 5 · Sleman, Gunungkidul, Kulon Progo, Kota Yogyakarta = Zona 4
              </span>
            </div>
          )}

          {gempa && gempaBisaDipilih && (
            <p className="text-gold/60 text-xs mt-3 leading-relaxed">
              ℹ️ Gempa bumi diterbitkan sebagai polis tersendiri — biaya admin dihitung per polis.
            </p>
          )}
        </div>

        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

        <button
          onClick={hitung}
          className="w-full bg-gold text-navy py-3.5 rounded-lg font-bold text-[0.95rem] mt-6 hover:bg-gold2 hover:-translate-y-px transition-all cursor-pointer border-none"
        >
          Hitung Estimasi Premi →
        </button>

        {/* ─── HASIL KALKULASI ─── */}
        {hasil && (
          <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-6">
            <div className="font-heading text-gold2 text-base font-semibold mb-1">
              Estimasi Premi Asuransi Properti
            </div>

            {/* Total Pertanggungan */}
            {parseInput(prabotan) > 0 && (
              <div className="flex justify-between items-center py-1.5 border-b border-gold/15 mb-3">
                <span className="text-white/50 text-xs">Total Pertanggungan (Bangunan + Perabotan)</span>
                <span className="text-white/70 text-xs font-semibold">{formatRp(hasil.totalPertanggungan)}</span>
              </div>
            )}

            {/* POLIS 1 */}
            <div className={hasil.duaPolis ? "mb-4" : ""}>
              {hasil.duaPolis && (
                <div className="text-white/45 text-[0.7rem] font-bold tracking-widest uppercase mb-2">
                  Polis 1 — Kebakaran{banjir ? " + Banjir" : ""}
                </div>
              )}
              <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                <span className="text-white/70 text-sm">Premi / Tahun</span>
                <span className="text-white font-semibold">{formatRp(hasil.premiKebakaran)}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                <span className="text-white/70 text-sm">Biaya Administrasi</span>
                <span className="text-white font-semibold">{formatRp(hasil.adminPolis1)}</span>
              </div>
              {hasil.duaPolis && (
                <div className="flex justify-between items-center py-1.5 border-t border-gold/20">
                  <span className="text-gold2 text-sm font-bold">Subtotal Polis 1</span>
                  <span className="text-gold font-bold">{formatRp(hasil.subtotalPolis1)}</span>
                </div>
              )}
            </div>

            {/* POLIS 2 — Gempa */}
            {hasil.duaPolis && (
              <div className="mb-2 mt-2">
                <div className="text-white/45 text-[0.7rem] font-bold tracking-widest uppercase mb-2">
                  Polis 2 — Gempa Bumi · {WILAYAH_OPTIONS.find(w => w.value === wilayah)?.label}
                  {" "}
                  <span className="text-gold/50 normal-case">
                    ({WILAYAH_OPTIONS.find(w => w.value === wilayah)?.zona === "zona5" ? "Zona 5" : "Zona 4"})
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                  <span className="text-white/70 text-sm">Premi / Tahun</span>
                  <span className="text-white font-semibold">{formatRp(hasil.premiGempa)}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                  <span className="text-white/70 text-sm">Biaya Administrasi</span>
                  <span className="text-white font-semibold">{formatRp(hasil.adminPolis2)}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-t border-gold/20">
                  <span className="text-gold2 text-sm font-bold">Subtotal Polis 2</span>
                  <span className="text-gold font-bold">{formatRp(hasil.subtotalPolis2)}</span>
                </div>
              </div>
            )}

            {/* TOTAL AKHIR */}
            <div className="flex justify-between items-center py-2.5 border-t-2 border-gold/40 mt-2">
              <span className="text-gold2 font-bold text-sm">
                Total Estimasi{hasil.duaPolis ? " (2 Polis)" : ""}
              </span>
              <span className="text-gold text-[1.15rem] font-bold">{formatRp(hasil.totalPremiAkhir)}</span>
            </div>

            <p className="text-white/40 text-xs mt-3 leading-relaxed">
              * Estimasi berdasarkan tarif referensi pasar. Premi final ditentukan perusahaan asuransi setelah survei lokasi.
            </p>

            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="block w-full text-center mt-4 bg-[#25D366] text-white py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer border-none"
              >
                💬 Dapatkan Penawaran Resmi
              </button>
            )}
          </div>
        )}

        {/* ─── FORM PENAWARAN ─── */}
        {showForm && hasil && (
          <div className="mt-4 bg-white/5 border border-white/15 rounded-xl p-6">
            <div className="font-heading text-white text-base font-semibold mb-1">
              Lengkapi Data Anda
            </div>
            <p className="text-white/45 text-xs mb-5 leading-relaxed">
              Isi data di bawah agar kami bisa menyiapkan penawaran yang tepat untuk properti Anda.
            </p>

            {/* Nama */}
            <div className="mb-4">
              <label className={labelCls}>Nama</label>
              <input
                type="text"
                placeholder="Nama lengkap Anda"
                className={inputCls}
                value={nama}
                onChange={e => setNama(e.target.value)}
              />
            </div>

            {/* Alamat Pertanggungan */}
            <div className="mb-4">
              <label className={labelCls}>Alamat Pertanggungan</label>
              <textarea
                placeholder="Alamat objek yang diasuransikan (bukan alamat korespondensi)"
                className={`${inputCls} resize-none`}
                rows={3}
                value={alamat}
                onChange={e => setAlamat(e.target.value)}
              />
              <span className="text-white/35 text-xs mt-1 block">
                Isi dengan alamat lengkap bangunan yang akan diasuransikan
              </span>
            </div>

            {/* CTA WhatsApp */}
            <a
              href={formValid ? `https://wa.me/${KONTAK.wa}?text=${buildWaMsg()}` : undefined}
              onClick={e => { if (!formValid) e.preventDefault(); }}
              className={`block text-center py-3.5 rounded-lg font-bold text-sm no-underline transition-all ${
                formValid
                  ? "bg-[#25D366] text-white hover:opacity-90 cursor-pointer"
                  : "bg-[#25D366]/30 text-white/40 cursor-not-allowed"
              }`}
            >
              💬 Kirim ke WhatsApp &amp; Dapatkan Penawaran Resmi
            </a>

            {!formValid && (
              <p className="text-white/35 text-xs text-center mt-2">
                Lengkapi nama dan alamat pertanggungan terlebih dahulu
              </p>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
