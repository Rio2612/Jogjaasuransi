"use client";
import { useState } from "react";
import { RATE, PLAT_DATA, WILAYAH_LABEL, DISKON, getKategori, formatRp, KONTAK } from "@/lib/data";
import type { Wilayah, JenisKendaraan, TipePerlindungan, PlatGroup } from "@/lib/data";

interface HasilHitung {
  platText: string;
  wilayah: Wilayah;
  jenis: JenisKendaraan;
  tipe: TipePerlindungan;
  harga: number;
  premi: number;
  premiPeriode: number | null;
  periodeLabel: string | null;
  or: number;
  kategoriLabel: string;
  waMsg: string;
}

export default function Kalkulator() {
  const [platValue, setPlatValue] = useState<Wilayah>("w3");
  const [platText, setPlatText] = useState("AB – Yogyakarta (DIY)");
  const [jenis, setJenis] = useState<JenisKendaraan>("konvensional");
  const [tipe, setTipe] = useState<TipePerlindungan>("allrisk");
  const [hargaStr, setHargaStr] = useState("");
  const [periode, setPeriode] = useState(12);
  const [hasil, setHasil] = useState<HasilHitung | null>(null);
  const [error, setError] = useState("");

  const hitung = () => {
    const harga = parseFloat(hargaStr);
    if (!harga || harga < 1_000_000) {
      setError("Masukkan harga kendaraan yang valid (minimal Rp 1.000.000)");
      return;
    }
    setError("");
    const kat = getKategori(harga);
    const rate = RATE[tipe][platValue][jenis][kat.idx];
    const premiBefore = harga * rate / 100;
    const premi = premiBefore * (1 - DISKON);
    const jLabel = jenis === "listrik" ? "Mobil Listrik (EV)" : "Mobil Konvensional (BBM)";
    const tLabel = tipe === "allrisk" ? "Comprehensive / All Risk" : "TLO (Total Loss Only)";
    const or = jenis === "listrik" ? 500_000 : 300_000;
    const waMsg = encodeURIComponent(
      `Halo Pak Rio, saya ingin konsultasi asuransi mobil.\n\n- Plat: ${platText}\n- Jenis: ${jLabel}\n- Tipe: ${tLabel}\n- Harga: ${formatRp(harga)}\n- Estimasi Premi: ${formatRp(premi)}/tahun\n\nMohon info penawaran resminya. Terima kasih.`
    );
    setHasil({
      platText, wilayah: platValue, jenis, tipe, harga, premi,
      premiPeriode: periode !== 12 ? premi * periode / 12 : null,
      periodeLabel: periode === 6 ? "6 Bulan" : periode === 3 ? "3 Bulan" : null,
      or, kategoriLabel: kat.label, waMsg,
    });
  };

  return (
    <section id="kalkulator" className="py-[5.5rem] px-[5vw] bg-navy">
      <div className="text-center mb-12">
        <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-2">Kalkulator Premi Mobil</div>
        <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-white">Hitung Estimasi Premi<br />Asuransi Mobil Anda</h2>
        <p className="text-white/60 text-[0.95rem] leading-[1.8] max-w-[560px] mx-auto mt-3">Berdasarkan tarif referensi OJK (SE No.6/SEOJK.05/2017) — sesuai wilayah plat kendaraan Anda</p>
      </div>

      <div className="bg-white/5 border border-gold/20 rounded-[20px] p-10 max-w-[700px] mx-auto">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.82rem] font-semibold text-white/75">Plat Kendaraan (Asal Daerah)</label>
            <select
              className="bg-navy2 border border-white/20 text-white px-3.5 py-[11px] rounded-lg text-[0.88rem] outline-none focus:border-gold appearance-none cursor-pointer"
              onChange={e => {
                const opt = e.target.options[e.target.selectedIndex];
                setPlatValue(opt.value as Wilayah);
                setPlatText(opt.text);
              }}
            >
              {PLAT_DATA.map((item, i) => {
                if ("group" in item) {
                  return (
                    <optgroup key={i} label={(item as PlatGroup).group} style={{background:"#163352",color:"white"}}>
                      {(item as PlatGroup).options.map(o => (
                        <option key={o.label} value={o.value} style={{background:"#163352"}}>{o.label}</option>
                      ))}
                    </optgroup>
                  );
                }
                return <option key={i} value={item.value} style={{background:"#163352"}}>{item.label}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.82rem] font-semibold text-white/75">Jenis Kendaraan</label>
            <select className="bg-navy2 border border-white/20 text-white px-3.5 py-[11px] rounded-lg text-[0.88rem] outline-none focus:border-gold appearance-none cursor-pointer" value={jenis} onChange={e => setJenis(e.target.value as JenisKendaraan)}>
              <option value="konvensional" style={{background:"#163352"}}>Mobil Konvensional (BBM)</option>
              <option value="listrik" style={{background:"#163352"}}>Mobil Listrik (EV)</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.82rem] font-semibold text-white/75">Jenis Perlindungan</label>
            <select className="bg-navy2 border border-white/20 text-white px-3.5 py-[11px] rounded-lg text-[0.88rem] outline-none focus:border-gold appearance-none cursor-pointer" value={tipe} onChange={e => setTipe(e.target.value as TipePerlindungan)}>
              <option value="allrisk" style={{background:"#163352"}}>Comprehensive / All Risk</option>
              <option value="tlo" style={{background:"#163352"}}>TLO (Total Loss Only)</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.82rem] font-semibold text-white/75">Periode Asuransi</label>
            <select className="bg-navy2 border border-white/20 text-white px-3.5 py-[11px] rounded-lg text-[0.88rem] outline-none focus:border-gold appearance-none cursor-pointer" value={periode} onChange={e => setPeriode(Number(e.target.value))}>
              <option value={12} style={{background:"#163352"}}>1 Tahun (12 bulan)</option>
              <option value={6} style={{background:"#163352"}}>6 Bulan</option>
              <option value={3} style={{background:"#163352"}}>3 Bulan</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="mt-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.82rem] font-semibold text-white/75">Harga Kendaraan (Rp)</label>
            <input
              type="number"
              placeholder="Contoh: 250000000"
              min="1000000"
              value={hargaStr}
              onChange={e => setHargaStr(e.target.value)}
              className="bg-navy2 border border-white/20 text-white px-3.5 py-[11px] rounded-lg text-[0.88rem] outline-none focus:border-gold placeholder-white/40"
            />
            <span className="text-white/65 text-xs">Masukkan harga pasar kendaraan saat ini</span>
          </div>
        </div>

        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

        <button onClick={hitung} className="w-full bg-gold text-navy py-3.5 rounded-lg font-bold text-[0.95rem] mt-6 hover:bg-gold2 hover:-translate-y-px transition-all cursor-pointer border-none">
          Hitung Estimasi Premi →
        </button>

        {/* Hasil */}
        {hasil && (
          <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-6">
            <div className="font-heading text-gold2 text-base font-semibold mb-4">Estimasi Premi Asuransi Mobil Anda</div>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Plat / Wilayah", val: `${hasil.platText} · ${WILAYAH_LABEL[hasil.wilayah]}` },
                { label: "Jenis Kendaraan", val: hasil.jenis === "listrik" ? "Mobil Listrik (EV)" : "Mobil Konvensional (BBM)" },
                { label: "Jenis Perlindungan", val: hasil.tipe === "allrisk" ? "Comprehensive / All Risk" : "TLO (Total Loss Only)" },
                { label: "Harga Kendaraan", val: formatRp(hasil.harga) },
                { label: "Kategori Harga OJK", val: hasil.kategoriLabel },
              ].map(row => (
                <div key={row.label} className="flex justify-between items-center text-[0.88rem]">
                  <span className="text-white/65">{row.label}</span>
                  <span className="text-white font-semibold text-right">{row.val}</span>
                </div>
              ))}
              <hr className="border-gold/20 my-1" />
              <div className="flex justify-between items-center text-[0.88rem]">
                <span className="text-gold2 font-semibold">Estimasi Premi / Tahun</span>
                <span className="text-gold text-[1.05rem] font-bold">{formatRp(hasil.premi)} / tahun</span>
              </div>
              {hasil.premiPeriode && (
                <div className="flex justify-between items-center text-[0.88rem]">
                  <span className="text-white/65">Estimasi Premi ({hasil.periodeLabel})</span>
                  <span className="text-white font-semibold">{formatRp(hasil.premiPeriode)}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-[0.88rem]">
                <span className="text-white/65">Own Risk (OR) / Kejadian</span>
                <span className="text-white font-semibold">{formatRp(hasil.or)} / kejadian</span>
              </div>
            </div>
            <p className="text-white/65 text-xs mt-4 leading-relaxed">
              * Estimasi berdasarkan tarif referensi OJK (SE No.6/SEOJK.05/2017) sesuai wilayah plat kendaraan. Premi final ditentukan perusahaan asuransi dan dapat berbeda. Hubungi kami untuk penawaran resmi terbaik.
            </p>
            <a href={`https://wa.me/${KONTAK.wa}?text=${hasil.waMsg}`} className="block text-center mt-4 bg-[#25D366] text-white py-3 rounded-lg font-bold text-[0.88rem] no-underline hover:opacity-90 transition-opacity">
              💬 Dapatkan Penawaran Resmi via WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
