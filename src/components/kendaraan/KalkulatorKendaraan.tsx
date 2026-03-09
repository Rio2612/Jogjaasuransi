"use client";
import { useState } from "react";
import { RATE, PLAT_DATA, WILAYAH_LABEL, DISKON, getKategori, formatRp, KONTAK } from "@/lib/data";
import type { Wilayah, JenisKendaraan, TipePerlindungan, PlatGroup } from "@/lib/data";

export default function KalkulatorKendaraan() {
  const [platValue, setPlatValue] = useState<Wilayah>("w3");
  const [platText, setPlatText]   = useState("AB – Yogyakarta (DIY)");
  const [jenis, setJenis]         = useState<JenisKendaraan>("konvensional");
  const [tipe, setTipe]           = useState<TipePerlindungan>("allrisk");
  const [hargaStr, setHargaStr]   = useState("");
  const [periode, setPeriode]     = useState(12);
  const [hasil, setHasil]         = useState<null|{premi:number;premiPeriode:number|null;periodeLabel:string|null;or:number;kategoriLabel:string;waMsg:string}>(null);
  const [error, setError]         = useState("");

  const hitung = () => {
    const harga = parseFloat(hargaStr);
    if (!harga || harga < 1_000_000) { setError("Masukkan harga kendaraan yang valid (minimal Rp 1.000.000)"); return; }
    setError("");
    const kat   = getKategori(harga);
    const rate  = RATE[tipe][platValue][jenis][kat.idx];
    const premi = harga * rate / 100 * (1 - DISKON);
    const or    = jenis === "listrik" ? 500_000 : 300_000;
    const jLabel = jenis === "listrik" ? "Mobil Listrik (EV)" : "Mobil Konvensional (BBM)";
    const tLabel = tipe === "allrisk" ? "Comprehensive / All Risk" : "TLO (Total Loss Only)";
    const waMsg = encodeURIComponent(`Halo Pak Rio, saya ingin konsultasi asuransi mobil.\n\n- Plat: ${platText}\n- Jenis: ${jLabel}\n- Tipe: ${tLabel}\n- Harga: ${formatRp(harga)}\n- Estimasi Premi: ${formatRp(premi)}/tahun\n\nMohon info penawaran resminya. Terima kasih.`);
    setHasil({ premi, premiPeriode: periode!==12 ? premi*periode/12 : null, periodeLabel: periode===6?"6 Bulan":periode===3?"3 Bulan":null, or, kategoriLabel: kat.label, waMsg });
  };

  const sel = "bg-navy2 border border-white/20 text-white px-3.5 py-[11px] rounded-lg text-[0.88rem] outline-none focus:border-gold appearance-none cursor-pointer w-full";
  const inp = "bg-navy2 border border-white/20 text-white px-3.5 py-[11px] rounded-lg text-[0.88rem] outline-none focus:border-gold placeholder-white/40 w-full";
  const lbl = "text-[0.82rem] font-semibold text-white/75 mb-1.5 block";

  return (
    <section id="kalkulator" className="py-20 px-[5vw] bg-navy">
      <div className="text-center mb-10">
        <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-2">Kalkulator Premi OJK</div>
        <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.6rem)] text-white leading-[1.22]">Hitung Estimasi Premi<br />Asuransi Kendaraan Anda</h2>
        <p className="text-white/60 text-sm leading-relaxed max-w-[480px] mx-auto mt-3">Berdasarkan tarif referensi OJK SE No.6/SEOJK.05/2017 — sesuai wilayah plat kendaraan Anda</p>
      </div>
      <div className="bg-white/5 border border-gold/20 rounded-[20px] p-8 max-w-[680px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={lbl}>Plat Kendaraan</label>
            <select className={sel} onChange={e => { const o=e.target.options[e.target.selectedIndex]; setPlatValue(o.value as Wilayah); setPlatText(o.text); }}>
              {PLAT_DATA.map((item,i) => "group" in item
                ? <optgroup key={i} label={(item as PlatGroup).group} style={{background:"#163352"}}>
                    {(item as PlatGroup).options.map(o=><option key={o.label} value={o.value} style={{background:"#163352"}}>{o.label}</option>)}
                  </optgroup>
                : <option key={i} value={item.value} style={{background:"#163352"}}>{item.label}</option>
              )}
            </select>
          </div>
          <div>
            <label className={lbl}>Jenis Kendaraan</label>
            <select className={sel} value={jenis} onChange={e=>setJenis(e.target.value as JenisKendaraan)}>
              <option value="konvensional" style={{background:"#163352"}}>Mobil Konvensional (BBM)</option>
              <option value="listrik" style={{background:"#163352"}}>Mobil Listrik (EV)</option>
            </select>
          </div>
          <div>
            <label className={lbl}>Jenis Perlindungan</label>
            <select className={sel} value={tipe} onChange={e=>setTipe(e.target.value as TipePerlindungan)}>
              <option value="allrisk" style={{background:"#163352"}}>Comprehensive / All Risk</option>
              <option value="tlo" style={{background:"#163352"}}>TLO (Total Loss Only)</option>
            </select>
          </div>
          <div>
            <label className={lbl}>Periode Asuransi</label>
            <select className={sel} value={periode} onChange={e=>setPeriode(Number(e.target.value))}>
              <option value={12} style={{background:"#163352"}}>1 Tahun (12 bulan)</option>
              <option value={6}  style={{background:"#163352"}}>6 Bulan</option>
              <option value={3}  style={{background:"#163352"}}>3 Bulan</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          <label className={lbl}>Harga Kendaraan (Rp)</label>
          <input type="number" placeholder="Contoh: 250000000" className={inp} value={hargaStr} onChange={e=>setHargaStr(e.target.value)} />
          <span className="text-white/65 text-xs mt-1 block">Masukkan harga pasar kendaraan saat ini</span>
        </div>
        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
        <button onClick={hitung} className="w-full bg-gold text-navy py-3.5 rounded-lg font-bold text-[0.95rem] mt-6 hover:bg-gold2 hover:-translate-y-px transition-all cursor-pointer border-none">
          Hitung Estimasi Premi →
        </button>
        {hasil && (
          <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-6">
            <div className="font-heading text-gold2 text-base font-semibold mb-4">Estimasi Premi Asuransi Kendaraan Anda</div>
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between text-sm"><span className="text-white/65">Plat / Wilayah</span><span className="text-white font-semibold text-right">{platText} · {WILAYAH_LABEL[platValue]}</span></div>
              <div className="flex justify-between text-sm"><span className="text-white/65">Kategori OJK</span><span className="text-white font-semibold">{hasil.kategoriLabel}</span></div>
              <hr className="border-gold/20 my-1"/>
              <div className="flex justify-between text-sm"><span className="text-gold2 font-semibold">Estimasi Premi / Tahun</span><span className="text-gold text-[1.05rem] font-bold">{formatRp(hasil.premi)}</span></div>
              {hasil.premiPeriode && <div className="flex justify-between text-sm"><span className="text-white/65">Estimasi ({hasil.periodeLabel})</span><span className="text-white font-semibold">{formatRp(hasil.premiPeriode)}</span></div>}
              <div className="flex justify-between text-sm"><span className="text-white/65">Own Risk / Kejadian</span><span className="text-white font-semibold">{formatRp(hasil.or)}</span></div>
            </div>
            <p className="text-white/65 text-xs mt-4 leading-relaxed">* Estimasi berdasarkan tarif referensi OJK. Premi final ditentukan perusahaan asuransi.</p>
            <a href={`https://wa.me/${KONTAK.wa}?text=${hasil.waMsg}`} className="block text-center mt-4 bg-[#25D366] text-white py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-opacity">
              💬 Dapatkan Penawaran Resmi via WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
