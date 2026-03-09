import { KONTAK } from "@/lib/data";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-navy flex items-center px-[5vw] relative overflow-hidden">
      <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 70% at 75% 55%, rgba(200,150,62,0.13) 0%, transparent 65%), radial-gradient(ellipse 30% 30% at 10% 80%, rgba(200,150,62,0.06) 0%, transparent 60%)"}} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full relative z-10 pt-[68px]">
        <div>
          <div className="animate-fadeUp-d1 inline-flex items-center gap-2 bg-gold/10 border border-gold/35 text-gold3 text-xs font-semibold px-4 py-[5px] rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.55rem] text-gold">◆</span>
            Konsultan Asuransi Kerugian · Yogyakarta
          </div>
          <h1 className="animate-fadeUp-d2 font-heading text-[clamp(2.6rem,4.5vw,4rem)] text-white leading-[1.15] mb-5">
            Proteksi Tepat untuk<br />
            <em className="not-italic text-gold">Aset & Bisnis</em><br />
            Anda di Jogja
          </h1>
          <p className="animate-fadeUp-d3 text-white/65 text-base leading-[1.8] max-w-[460px] mb-8">
            Kami membantu Anda memilih perlindungan asuransi kerugian yang paling sesuai — kendaraan, properti, kargo, engineering, hingga liability — dengan analisis risiko yang jujur dan pendampingan klaim penuh.
          </p>
          <div className="animate-fadeUp-d4 flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-[13px] rounded-lg font-bold text-[0.92rem] hover:bg-gold2 hover:-translate-y-0.5 transition-all no-underline">
              💬 Konsultasi via WhatsApp
            </a>
            <a href="#kalkulator" className="border border-white/25 text-white px-7 py-[13px] rounded-lg font-medium text-[0.92rem] hover:border-gold2 hover:bg-gold/8 transition-all no-underline">
              Hitung Premi Mobil
            </a>
          </div>
        </div>
        <div className="animate-fadeUp-d5">
          <div className="bg-white/5 border border-gold/20 rounded-[20px] p-8 backdrop-blur-sm">
            <div className="font-heading text-gold2 text-base font-semibold mb-4 pb-3 border-b border-gold/18">
              Produk Asuransi Kerugian Kami
            </div>
            <div className="grid grid-cols-2 gap-2 mb-5">
              {["🚗 Kendaraan","🏠 Properti","⚙️ Engineering","📦 Kargo","🛡️ Liability","📋 Surety Bond"].map(p => (
                <div key={p} className="bg-gold/8 border border-gold/15 text-white/80 text-xs font-medium py-2 px-2.5 rounded-lg text-center hover:bg-gold/18 transition-colors">
                  {p}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gold/15">
              {[
                { num: "10+", lbl: "Tahun Pengalaman" },
                { num: "100%", lbl: "Independen" },
                { num: "Gratis", lbl: "Konsultasi" },
              ].map(s => (
                <div key={s.lbl} className="text-center">
                  <div className="font-heading text-gold text-[1.6rem] font-bold">{s.num}</div>
                  <div className="text-white/45 text-[0.7rem] mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
