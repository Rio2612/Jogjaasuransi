import Image from "next/image";
import { KONTAK } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-[5.5rem] px-[5vw] bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4.5rem] items-center">

        {/* FOTO */}
        <div className="relative rounded-[20px] overflow-hidden h-[460px] bg-navy shadow-[0_24px_64px_rgba(13,33,55,0.18)]">
          {/* Gradient overlay bawah agar nama terbaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent z-10" />

          <Image
            src="/rio-mardiansyah.jpg"
            alt="Rio Mardiansyah – Konsultan Asuransi Kerugian Yogyakarta"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          {/* Badge nama di atas foto */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-6 pt-10">
            <div className="font-heading text-white text-[1.3rem] font-bold leading-tight">Rio Mardiansyah</div>
            <div className="text-gold2 text-sm font-medium mt-0.5">Konsultan Asuransi Kerugian</div>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">📍 Yogyakarta, DIY</span>
              <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">10+ Tahun</span>
            </div>
          </div>
        </div>

        {/* TEKS */}
        <div>
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Tentang Konsultan</div>
          <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">
            Kenali Rio Mardiansyah,<br />Konsultan Anda
          </h2>
          <p className="text-lg leading-[1.85] text-[#64748B] max-w-[560px] mt-3">
            Dengan pengalaman lebih dari 10 tahun di bidang asuransi kerugian, Rio Mardiansyah hadir sebagai konsultan independen yang berkomitmen memberikan solusi perlindungan terbaik — bukan sekadar menjual polis.
          </p>
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
          <div className="flex flex-col gap-2 mt-6 pt-5 border-t border-black/8">
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
