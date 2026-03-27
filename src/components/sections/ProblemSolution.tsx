export default function ProblemSolution() {
  const masalah = [
    { ico: "😵", teks: "Bingung memilih di antara puluhan produk asuransi kerugian yang tersedia di pasar" },
    { ico: "💸", teks: "Premi mahal namun coverage tidak sesuai dengan risiko nyata bisnis atau aset Anda" },
    { ico: "📁", teks: "Proses klaim berlarut-larut karena dokumen kurang lengkap atau prosedur tidak dipahami" },
    { ico: "🔍", teks: "Tidak ada yang menjelaskan klausul pengecualian dalam polis secara jujur dan menyeluruh" },
    { ico: "📞", teks: "Agen sulit dihubungi setelah polis terbit, terutama saat klaim paling dibutuhkan" },
  ];
  const solusi = [
    { ico: "🎯", teks: "Analisis kebutuhan mendalam — kami rekomendasikan produk yang benar-benar tepat untuk Anda" },
    { ico: "📊", teks: "Komparasi premi dari berbagai perusahaan asuransi terpercaya secara transparan dan objektif" },
    { ico: "🤝", teks: "Pendampingan klaim dari awal pengajuan hingga dana ganti rugi cair di tangan Anda" },
    { ico: "📖", teks: "Penjelasan polis yang jujur dan menyeluruh, termasuk pengecualian yang sering terlewatkan" },
    { ico: "📱", teks: "Bisa dihubungi langsung via WhatsApp kapan saja — personal, cepat, dan responsif" },
  ];
  return (
    <section id="problem" className="py-[5.5rem] px-[5vw] bg-cream">
      <div className="text-center mb-12">
        <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Butuh Konsultan?</div>
        <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">Masalah Nyata,<br />Solusi Konkret</h2>
        <p className="text-[0.95rem] leading-[1.8] text-[#64748B] max-w-[560px] mx-auto mt-3">Membeli asuransi kerugian tanpa panduan yang tepat bisa berujung pada perlindungan yang tidak memadai saat klaim dibutuhkan.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xs font-bold tracking-[1.5px] uppercase text-red-600 mb-5">✗ Masalah Umum</h3>
          <ul className="flex flex-col gap-3.5">
            {masalah.map(m => (
              <li key={m.ico} className="flex gap-3 items-start bg-red-600/7 border border-red-600/12 rounded-lg p-4 text-[1rem] leading-[1.65] text-navy2">
                <span className="flex-shrink-0">{m.ico}</span>{m.teks}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold tracking-[1.5px] uppercase text-green-700 mb-5">✓ Solusi Asuransi Jogja</h3>
          <ul className="flex flex-col gap-3.5">
            {solusi.map(s => (
              <li key={s.ico} className="flex gap-3 items-start bg-green-700/7 border border-green-700/12 rounded-lg p-4 text-[1rem] leading-[1.65] text-navy2">
                <span className="flex-shrink-0">{s.ico}</span>{s.teks}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
