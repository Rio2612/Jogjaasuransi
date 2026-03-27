"use client";
import { useState } from "react";
import { KONTAK, formatRp } from "@/lib/data";

// Tarif kebakaran estimasi berdasarkan zona risiko & konstruksi
// Kelas konstruksi: 1 = beton/bata (permanen), 2 = semi permanen, 3 = kayu/bambu
// Zona: Standard (umum Yogyakarta), Banjir (bantaran sungai), Gempa (lereng Merapi)
const RATE_PROPERTI: Record<string, Record<string, number>> = {
  rumah:  { kelas1: 0.105, kelas2: 0.189, kelas3: 0.340 },
  kos:    { kelas1: 0.120, kelas2: 0.210, kelas3: 0.380 },
  ruko:   { kelas1: 0.135, kelas2: 0.225, kelas3: 0.400 },
  gudang: { kelas1: 0.145, kelas2: 0.240, kelas3: 0.420 },
  kantor: { kelas1: 0.110, kelas2: 0.195, kelas3: 0.355 },
};

const SURCHARGE_BANJIR = 0.075;
const SURCHARGE_GEMPA  = 0.075;

export default function KalkulatorProperti() {
  const [jenis, setJenis]       = useState("rumah");
  const [kelas, setKelas]       = useState("kelas1");
  const [nilai, setNilaiStr]    = useState("");
  const [banjir, setBanjir]     = useState(false);
  const [gempa,  setGempa]      = useState(false);
  const [hasil,  setHasil]      = useState<null | { premi: number; waMsg: string }>(null);
  const [error,  setError]      = useState("");

  const hitung = () => {
    const n = parseFloat(nilai);
    if (!n || n < 10_000_000) { setError("Masukkan nilai bangunan minimal Rp 10.000.000"); return; }
    setError("");
    let rate = RATE_PROPERTI[jenis][kelas];
    if (banjir) rate += SURCHARGE_BANJIR;
    if (gempa)  rate += SURCHARGE_GEMPA;
    const premi = n * rate / 100;

    const jenisLabel = { rumah:"Rumah Tinggal", kos:"Kos-kosan", ruko:"Ruko / Toko", gudang:"Gudang", kantor:"Kantor" }[jenis];
    const kelasLabel = { kelas1:"Kelas 1 (Beton/Bata)", kelas2:"Kelas 2 (Semi Permanen)", kelas3:"Kelas 3 (Kayu/Bambu)" }[kelas];
    const perluasan = [banjir && "Banjir", gempa && "Gempa Bumi"].filter(Boolean).join(" + ") || "Tidak ada";
    const waMsg = encodeURIComponent(
      `Halo Pak Rio, saya ingin konsultasi asuransi properti.\n\n- Jenis: ${jenisLabel}\n- Konstruksi: ${kelasLabel}\n- Nilai Bangunan: ${formatRp(n)}\n- Perluasan: ${perluasan}\n- Estimasi Premi: ${formatRp(premi)}/tahun\n\nMohon info penawaran resminya. Terima kasih.`
    );
    setHasil({ premi, waMsg });
  };

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
          <input type="number" placeholder="Contoh: 500000000" className={inputCls} value={nilai} onChange={e => setNilaiStr(e.target.value)} />
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
            </label>
          </div>
        </div>

        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

        <button onClick={hitung} className="w-full bg-gold text-navy py-3.5 rounded-lg font-bold text-[0.95rem] mt-6 hover:bg-gold2 hover:-translate-y-px transition-all cursor-pointer border-none">
          Hitung Estimasi Premi →
        </button>

        {hasil && (
          <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-6">
            <div className="font-heading text-gold2 text-base font-semibold mb-3">Estimasi Premi Asuransi Properti</div>
            <div className="flex justify-between items-center py-2 border-t border-gold/20">
              <span className="text-gold2 font-semibold text-sm">Estimasi Premi / Tahun</span>
              <span className="text-gold text-[1.1rem] font-bold">{formatRp(hasil.premi)}</span>
            </div>
            <p className="text-white/40 text-xs mt-3 leading-relaxed">
              * Estimasi berdasarkan tarif referensi pasar. Premi final ditentukan perusahaan asuransi setelah survei lokasi. Hubungi kami untuk penawaran resmi.
            </p>
            <a href={`https://wa.me/${KONTAK.wa}?text=${hasil.waMsg}`} className="block text-center mt-4 bg-[#25D366] text-white py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-opacity">
              💬 Dapatkan Penawaran Resmi via WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
