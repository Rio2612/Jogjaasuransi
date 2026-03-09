export default function Why() {
  const cards = [
    { ico: "🎯", title: "Independen & Objektif", desc: "Tidak terikat satu perusahaan asuransi. Rekomendasi kami 100% berdasarkan kebutuhan dan kepentingan terbaik Anda." },
    { ico: "🏆", title: "10+ Tahun Pengalaman", desc: "Lebih dari satu dekade pengalaman di industri asuransi kerugian. Memahami produk, risiko, dan regulasi secara mendalam." },
    { ico: "🤝", title: "Pendampingan Klaim", desc: "Kami dampingi proses klaim dari awal hingga selesai. Tidak perlu berjuang sendiri menghadapi prosedur yang rumit." },
    { ico: "💬", title: "Konsultasi Gratis", desc: "Analisis risiko dan rekomendasi produk sepenuhnya gratis. Tidak ada biaya tersembunyi, tidak ada tekanan untuk membeli." },
  ];
  return (
    <section id="why" className="py-[5.5rem] px-[5vw] bg-white">
      <div className="text-center mb-12">
        <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Keunggulan Kami</div>
        <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">Mengapa Pilih<br />Asuransi Jogja?</h2>
        <p className="text-[0.95rem] leading-[1.8] text-[#64748B] max-w-[560px] mx-auto mt-3">Bukan sekadar agen penjual — kami adalah mitra perlindungan jangka panjang yang berpihak penuh pada kepentingan Anda.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map(c => (
          <div key={c.title} className="bg-[#EEF3F9] rounded-card p-7 text-center hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(13,33,55,0.08)] transition-all">
            <div className="text-[2rem] mb-3">{c.ico}</div>
            <div className="font-heading text-[1.05rem] font-bold text-navy mb-2">{c.title}</div>
            <p className="text-[0.85rem] leading-[1.65] text-[#64748B]">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
