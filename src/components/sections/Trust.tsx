export default function Trust() {
  const items = [
    "👤 Individu & Keluarga",
    "🏪 UMKM & Usaha Kecil",
    "🏢 Perusahaan & Korporasi",
    "🏗️ Kontraktor & Developer",
    "🚛 Pengusaha Logistik",
  ];
  return (
    <div id="trust" className="bg-cream py-10 px-[5vw] border-t-[3px] border-gold">
      <div className="flex items-center gap-8 flex-wrap justify-center">
        <div className="text-xs font-bold tracking-[1.2px] text-[#64748B] uppercase whitespace-nowrap">Kami melayani</div>
        <div className="w-px h-8 bg-black/12" />
        <div className="flex gap-3 flex-wrap items-center">
          {items.map(i => (
            <div key={i} className="bg-white border border-black/7 rounded-lg px-[18px] py-2 text-[0.82rem] font-semibold text-navy2">
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
