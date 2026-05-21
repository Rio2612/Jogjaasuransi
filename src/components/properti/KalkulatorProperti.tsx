"use client";
import { useState, useRef } from "react";
import { KONTAK, formatRp } from "@/lib/data";

// Tarif kebakaran estimasi berdasarkan zona risiko & konstruksi
// Kelas konstruksi: 1 = beton/bata (permanen), 2 = semi permanen, 3 = kayu/bambu
const RATE_PROPERTI: Record<string, Record<string, number>> = {
rumah:  { kelas1: 0.059, kelas2: 0.084, kelas3: 0.420 },
  kos:    { kelas1: 0.063, kelas2: 0.089, kelas3: 0.445 },
  ruko:   { kelas1: 0.069, kelas2: 0.098, kelas3: 0.490 },
  gudang: { kelas1: 0.075, kelas2: 0.105, kelas3: 0.525 },
  kantor: { kelas1: 0.055, kelas2: 0.078, kelas3: 0.390 },
};

const SURCHARGE_BANJIR = 0.075;
const SURCHARGE_GEMPA  = 0.075;

// Hitung biaya admin berdasarkan premi dan apakah ada gempa (2 polis)
function hitungBiayaAdmin(premiKebakaran: number, premiGempa: number | null): {
  adminKebakaran: number;
  adminGempa: number | null;
  totalAdmin: number;
  duaPolis: boolean;
} {
  const duaPolis = premiGempa !== null;

  if (duaPolis) {
    // 2 polis terpisah
    const adminKebakaran = premiKebakaran < 5_000_000 ? 30_000 : 40_000;
    const adminGempa     = (premiGempa ?? 0) < 5_000_000 ? 30_000 : 40_000;
    return {
      adminKebakaran,
      adminGempa,
      totalAdmin: adminKebakaran + adminGempa,
      duaPolis: true,
    };
  } else {
    // 1 polis
    const admin = premiKebakaran < 5_000_000 ? 30_000 : 40_000;
    return {
      adminKebakaran: admin,
      adminGempa: null,
      totalAdmin: admin,
      duaPolis: false,
    };
  }
}

interface HasilHitung {
  premiKebakaran: number;
  premiGempa: number | null;
  adminKebakaran: number;
  adminGempa: number | null;
  totalAdmin: number;
  duaPolis: boolean;
  totalBayar: number;
}

export default function KalkulatorProperti() {
  const [jenis, setJenis]       = useState("rumah");
  const [kelas, setKelas]       = useState("kelas1");
  const [nilai, setNilaiStr]    = useState("");
  const [banjir, setBanjir]     = useState(false);
  const [gempa,  setGempa]      = useState(false);
  const [hasil,  setHasil]      = useState<HasilHitung | null>(null);
  const [error,  setError]      = useState("");

  // Form penawaran
  const [showForm, setShowForm] = useState(false);
  const [nama, setNama]         = useState("");
  const [alamat, setAlamat]     = useState("");
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);
  const [fotoBase64, setFotoBase64]   = useState<string | null>(null);
  const [fotoNama, setFotoNama]       = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const hitung = () => {
    const n = parseFloat(nilai);
    if (!n || n < 10_000_000) {
      setError("Masukkan nilai bangunan minimal Rp 10.000.000");
      return;
    }
    setError("");

    // Premi kebakaran (tanpa surcharge gempa)
    let rateKebakaran = RATE_PROPERTI[jenis][kelas];
    if (banjir) rateKebakaran += SURCHARGE_BANJIR;
    const premiKebakaran = n * rateKebakaran / 100;

    // Premi gempa (polis terpisah jika dipilih)
    const premiGempa = gempa ? n * SURCHARGE_GEMPA / 100 : null;

    const { adminKebakaran, adminGempa, totalAdmin, duaPolis } = hitungBiayaAdmin(
      premiKebakaran,
      premiGempa
    );

    const totalBayar = premiKebakaran + (premiGempa ?? 0) + totalAdmin;

    setHasil({ premiKebakaran, premiGempa, adminKebakaran, adminGempa, totalAdmin, duaPolis, totalBayar });
    setShowForm(false); // reset form saat hitung ulang
    setNama("");
    setAlamat("");
    setFotoPreview(null);
    setFotoBase64(null);
    setFotoNama("");
  };

  const handleFotoChange = (file: File | undefined) => {
    if (!file) return;
    setFotoNama(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setFotoPreview(result);
      setFotoBase64(result.split(",")[1] ?? null);
    };
    reader.readAsDataURL(file);
  };

  const buildWaMsg = () => {
    if (!hasil) return "";
    const jenisLabel = { rumah:"Rumah Tinggal", kos:"Kos-kosan", ruko:"Ruko / Toko", gudang:"Gudang", kantor:"Kantor" }[jenis];
    const kelasLabel = { kelas1:"Kelas 1 (Beton/Bata)", kelas2:"Kelas 2 (Semi Permanen)", kelas3:"Kelas 3 (Kayu/Bambu)" }[kelas];
    const perluasanList = [banjir && "Banjir", gempa && "Gempa Bumi (Polis Terpisah)"].filter(Boolean).join(" + ") || "Tidak ada";

    let msg = `Halo Pak Rio, saya ingin konsultasi asuransi properti.\n\n`;
    msg += `*Data Properti:*\n`;
    msg += `- Nama: ${nama}\n`;
    msg += `- Alamat Pertanggungan: ${alamat}\n`;
    msg += `- Jenis: ${jenisLabel}\n`;
    msg += `- Konstruksi: ${kelasLabel}\n`;
    msg += `- Nilai Bangunan: ${formatRp(parseFloat(nilai))}\n`;
    msg += `- Perluasan: ${perluasanList}\n\n`;

    if (hasil.duaPolis) {
      msg += `*Estimasi Polis Kebakaran:*\n`;
      msg += `- Premi: ${formatRp(hasil.premiKebakaran)}/tahun\n`;
      msg += `- Biaya Admin: ${formatRp(hasil.adminKebakaran)}\n\n`;
      msg += `*Estimasi Polis Gempa Bumi:*\n`;
      msg += `- Premi: ${formatRp(hasil.premiGempa ?? 0)}/tahun\n`;
      msg += `- Biaya Admin: ${formatRp(hasil.adminGempa ?? 0)}\n\n`;
    } else {
      msg += `*Estimasi Premi:*\n`;
      msg += `- Premi: ${formatRp(hasil.premiKebakaran)}/tahun\n`;
      msg += `- Biaya Admin: ${formatRp(hasil.adminKebakaran)}\n\n`;
    }

    msg += `*Total Estimasi: ${formatRp(hasil.totalBayar)}*\n\n`;
    if (fotoNama) msg += `_(Foto objek sudah dilampirkan)_\n\n`;
    msg += `Mohon info penawaran resminya. Terima kasih.`;

    return encodeURIComponent(msg);
  };

  const formValid = nama.trim().length > 0 && alamat.trim().length > 0;

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
            <select className={selectCls} value={jenis} onChange={e => setJenis(e.target.value)}>
              <option value="rumah"  style={{background:"#163352"}}>🏡 Rumah Tinggal</option>
              <option value="kos"    style={{background:"#163352"}}>🏘️ Kos-kosan</option>
              <option value="ruko"   style={{background:"#163352"}}>🏪 Ruko / Toko</option>
              <option value="gudang" style={{background:"#163352"}}>🏭 Gudang</option>
              <option value="kantor" style={{background:"#163352"}}>🏢 Kantor</option>
            </select>
          </div>
          <div>
            <label className={labelCls}>Kelas Konstruksi</label>
            <select className={selectCls} value={kelas} onChange={e => setKelas(e.target.value)}>
              <option value="kelas1" style={{background:"#163352"}}>Kelas 1 – Beton / Bata</option>
              <option value="kelas2" style={{background:"#163352"}}>Kelas 2 – Semi Permanen</option>
              <option value="kelas3" style={{background:"#163352"}}>Kelas 3 – Kayu / Bambu</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label className={labelCls}>Nilai Bangunan (Rp)</label>
          <input
            type="number"
            placeholder="Contoh: 500000000"
            className={inputCls}
            value={nilai}
            onChange={e => setNilaiStr(e.target.value)}
          />
          <span className="text-white/40 text-xs mt-1 block">Nilai penggantian bangunan (bukan harga tanah)</span>
        </div>

        <div className="mt-5">
          <label className={labelCls}>Perluasan Jaminan (opsional)</label>
          <div className="flex gap-4 flex-wrap mt-1">
            <label className="flex items-center gap-2 cursor-pointer text-white/80 text-sm">
              <input type="checkbox" checked={banjir} onChange={e => setBanjir(e.target.checked)} className="accent-gold w-4 h-4" />
              🌊 Banjir
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-white/80 text-sm">
              <input type="checkbox" checked={gempa} onChange={e => setGempa(e.target.checked)} className="accent-gold w-4 h-4" />
              🌋 Gempa Bumi
              {gempa && (
                <span className="text-gold/70 text-xs">(polis terpisah)</span>
              )}
            </label>
          </div>
          {gempa && (
            <p className="text-gold/60 text-xs mt-2 leading-relaxed">
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
            <div className="font-heading text-gold2 text-base font-semibold mb-4">
              Estimasi Premi Asuransi Properti
            </div>

            {/* Jika ada gempa: tampilkan 2 polis */}
            {hasil.duaPolis ? (
              <>
                {/* Polis Kebakaran */}
                <div className="mb-3">
                  <div className="text-white/50 text-xs font-bold tracking-widest uppercase mb-2">
                    Polis 1 — Kebakaran{banjir ? " + Banjir" : ""}
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                    <span className="text-white/70 text-sm">Premi / Tahun</span>
                    <span className="text-white font-semibold">{formatRp(hasil.premiKebakaran)}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                    <span className="text-white/70 text-sm">Biaya Administrasi</span>
                    <span className="text-white font-semibold">{formatRp(hasil.adminKebakaran)}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                    <span className="text-gold2 text-sm font-bold">Subtotal Polis 1</span>
                    <span className="text-gold font-bold">{formatRp(hasil.premiKebakaran + hasil.adminKebakaran)}</span>
                  </div>
                </div>

                {/* Polis Gempa */}
                <div className="mb-3 mt-4">
                  <div className="text-white/50 text-xs font-bold tracking-widest uppercase mb-2">
                    Polis 2 — Gempa Bumi
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                    <span className="text-white/70 text-sm">Premi / Tahun</span>
                    <span className="text-white font-semibold">{formatRp(hasil.premiGempa ?? 0)}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                    <span className="text-white/70 text-sm">Biaya Administrasi</span>
                    <span className="text-white font-semibold">{formatRp(hasil.adminGempa ?? 0)}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                    <span className="text-gold2 text-sm font-bold">Subtotal Polis 2</span>
                    <span className="text-gold font-bold">{formatRp((hasil.premiGempa ?? 0) + (hasil.adminGempa ?? 0))}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center py-2.5 border-t-2 border-gold/40 mt-1">
                  <span className="text-gold2 font-bold text-sm">Total Estimasi (2 Polis)</span>
                  <span className="text-gold text-[1.15rem] font-bold">{formatRp(hasil.totalBayar)}</span>
                </div>
              </>
            ) : (
              /* 1 polis saja */
              <>
                <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                  <span className="text-white/70 text-sm">Premi / Tahun</span>
                  <span className="text-white font-semibold">{formatRp(hasil.premiKebakaran)}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-t border-gold/15">
                  <span className="text-white/70 text-sm">Biaya Administrasi</span>
                  <span className="text-white font-semibold">{formatRp(hasil.adminKebakaran)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t-2 border-gold/40 mt-1">
                  <span className="text-gold2 font-bold text-sm">Total Estimasi</span>
                  <span className="text-gold text-[1.15rem] font-bold">{formatRp(hasil.totalBayar)}</span>
                </div>
              </>
            )}

            <p className="text-white/40 text-xs mt-3 leading-relaxed">
              * Estimasi berdasarkan tarif referensi pasar. Premi final ditentukan perusahaan asuransi setelah survei lokasi.
            </p>

            {/* Tombol buka form penawaran */}
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
          <div className="mt-4 bg-white/5 border border-white/15 rounded-xl p-6 animate-fade-in">
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

            {/* Upload Foto */}
            <div className="mb-5">
              <label className={labelCls}>Foto Objek (opsional)</label>
              <div className="flex gap-3 flex-wrap">
                {/* Upload dari galeri */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 bg-navy2 border border-white/20 text-white/80 px-4 py-2.5 rounded-lg text-sm font-medium hover:border-gold/50 hover:text-white transition-all cursor-pointer"
                >
                  📎 Upload Foto
                </button>
                {/* Ambil dari kamera */}
                <button
                  type="button"
                  onClick={() => cameraInputRef.current?.click()}
                  className="flex items-center gap-2 bg-navy2 border border-white/20 text-white/80 px-4 py-2.5 rounded-lg text-sm font-medium hover:border-gold/50 hover:text-white transition-all cursor-pointer"
                >
                  📷 Ambil Foto
                </button>
              </div>

              {/* Hidden file inputs */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => handleFotoChange(e.target.files?.[0])}
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={e => handleFotoChange(e.target.files?.[0])}
              />

              {/* Preview foto */}
              {fotoPreview && (
                <div className="mt-3 relative inline-block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={fotoPreview}
                    alt="Preview"
                    className="w-full max-w-[280px] h-40 object-cover rounded-lg border border-gold/30"
                  />
                  <button
                    type="button"
                    onClick={() => { setFotoPreview(null); setFotoBase64(null); setFotoNama(""); }}
                    className="absolute top-1.5 right-1.5 bg-black/60 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer border-none"
                  >
                    ✕
                  </button>
                  <p className="text-white/40 text-xs mt-1 truncate max-w-[280px]">{fotoNama}</p>
                </div>
              )}

              {!fotoPreview && (
                <p className="text-white/35 text-xs mt-2">
                  Foto tampak depan bangunan membantu proses penawaran lebih cepat
                </p>
              )}
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
