import { KONTAK } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-[5.5rem] px-[5vw] bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4.5rem] items-center">
        <div className="bg-navy rounded-[20px] h-[420px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 30% 60%, rgba(200,150,62,0.18) 0%, transparent 60%)"}} />
          {/* Ganti dengan <Image> Next.js saat foto sudah ada */}
          <div className="font-heading text-[3.5rem] font-bold text-gold/18 text-center leading-[1.2] relative z-10">
            Rio<br />Mardiansyah
          </div>
          <div className="absolute bottom-5 right-5 bg-gold text-navy px-4 py-2 rounded-lg text-xs font-bold z-20">
            📍 Yogyakarta, DIY
          </div>
        </div>
        <div>
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Tentang Konsultan</div>
          <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">Kenali Rio Mardiansyah,<br />Konsultan Anda</h2>
          <p className="text-[1.05rem] leading-[1.85] text-[#64748B] max-w-[560px] mt-3">Dengan pengalaman lebih dari 10 tahun di bidang asuransi kerugian, Rio Mardiansyah hadir sebagai konsultan independen yang berkomitmen memberikan solusi perlindungan terbaik — bukan sekadar menjual polis.</p>
          <ul className="flex flex-col gap-3 mt-5">
            {[
              "Pengalaman 10+ tahun di industri asuransi kerugian",
              "Melayani klien personal, UMKM, hingga korporasi di Yogyakarta",
              "Menguasai seluruh lini produk asuransi kerugian (kecuali Marine Hull)",
              "Konsultasi jujur dan transparan, termasuk penjelasan klausul pengecualian",
              "Pendampingan purna jual dan monitoring polis aktif sepanjang periode",
            ].map(li => (
              <li key={li} className="flex gap-2.5 items-start text-[1rem] leading-[1.75] text-[#64748B]">
                <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>{li}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-6">
            <a href={`https://wa.me/${KONTAK.wa}`} className="flex items-center gap-2 text-[1rem] text-navy2 font-medium no-underline hover:text-gold transition-colors">
              📱 {KONTAK.waDisplay} (WhatsApp)
            </a>
            <a href={`mailto:${KONTAK.email}`} className="flex items-center gap-2 text-[1rem] text-navy2 font-medium no-underline hover:text-gold transition-colors">
              ✉️ {KONTAK.email}
            </a>
            <span className="flex items-center gap-2 text-[1rem] text-navy2 font-medium">
              📍 {KONTAK.kota}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
