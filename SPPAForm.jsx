import { useState } from "react";

const PRODUCTS = [
  { id: "", label: "— Pilih Produk Asuransi —", icon: "" },
  { id: "kendaraan", label: "Asuransi Kendaraan", icon: "🚗" },
  { id: "properti", label: "Asuransi Properti", icon: "🏠" },
  { id: "liability", label: "Asuransi Liability", icon: "🛡️" },
  { id: "engineering", label: "Asuransi Engineering", icon: "⚙️" },
  { id: "surety", label: "Surety Bond", icon: "📋" },
  { id: "cargo", label: "Asuransi Kargo", icon: "📦" },
];

const REQUIREMENTS = {
  kendaraan: {
    title: "Dokumen yang Perlu Disiapkan",
    items: [
      "Fotokopi STNK kendaraan",
      "Fotokopi KTP pemilik kendaraan",
      "Foto kendaraan tampak depan, belakang, kiri, dan kanan",
      "Nomor rangka & mesin kendaraan",
      "Untuk armada/fleet: daftar kendaraan lengkap (format Excel)",
    ],
  },
  properti: {
    title: "Dokumen yang Perlu Disiapkan",
    items: [
      "Fotokopi sertifikat tanah / IMB",
      "Foto bangunan tampak luar & dalam",
      "Denah / layout bangunan (jika ada)",
      "Daftar isi bangunan yang ingin dipertanggungkan (jika ada)",
      "Untuk hotel/vila/homestay: jumlah kamar & kapasitas tamu",
    ],
  },
  liability: {
    title: "Dokumen yang Perlu Disiapkan",
    items: [
      "Profil perusahaan / company profile",
      "SIUP / NIB / izin usaha yang berlaku",
      "Fotokopi akta perusahaan",
      "Deskripsi kegiatan usaha secara detail",
      "Jumlah karyawan (untuk employer liability)",
      "Riwayat klaim 3 tahun terakhir (jika ada)",
    ],
  },
  engineering: {
    title: "Dokumen yang Perlu Disiapkan",
    items: [
      "Kontrak / SPK proyek",
      "Bill of Quantity (BoQ) atau RAB proyek",
      "Gambar teknis / site plan proyek",
      "Profil kontraktor / perusahaan",
      "Jadwal pelaksanaan proyek (time schedule)",
      "Untuk Machinery Breakdown: spesifikasi teknis mesin & tahun produksi",
    ],
  },
  surety: {
    title: "Dokumen yang Perlu Disiapkan",
    items: [
      "Surat Undangan Tender / Dokumen Pengadaan",
      "Kontrak / SPK yang telah ditandatangani (untuk Jaminan Pelaksanaan & Uang Muka)",
      "Company profile perusahaan (wajib untuk pengajuan pertama kali)",
      "Akta pendirian & perubahan perusahaan",
      "SIUP / NIB / TDP yang masih berlaku",
      "Laporan keuangan 1–2 tahun terakhir (untuk nilai jaminan besar)",
      "KTP & NPWP Direktur",
    ],
  },
  cargo: {
    title: "Dokumen yang Perlu Disiapkan",
    items: [
      "Invoice / faktur pembelian barang",
      "Packing list barang",
      "Dokumen pengiriman (surat jalan / AWB / B/L)",
      "Foto barang / kemasan (untuk kargo bernilai tinggi)",
      "Untuk pengiriman rutin: estimasi frekuensi & nilai pengiriman per bulan",
    ],
  },
};

const FIELD_CONFIGS = {
  kendaraan: [
    { id: "jenisKendaraan", label: "Jenis Kendaraan", type: "select", options: ["Mobil Pribadi", "Sepeda Motor", "Truk / Niaga", "Bus / Minibus", "Alat Berat", "Armada / Fleet"] },
    { id: "tahunKendaraan", label: "Tahun Kendaraan", type: "number", placeholder: "cth: 2021" },
    { id: "nilaiKendaraan", label: "Estimasi Nilai Kendaraan (Rp)", type: "text", placeholder: "cth: 200.000.000" },
    { id: "tipeProteksi", label: "Tipe Proteksi", type: "select", options: ["All Risk / Comprehensive", "Total Loss Only (TLO)", "Belum tahu, minta rekomendasi"] },
  ],
  properti: [
    { id: "lokasiProperti", label: "Lokasi Properti", type: "text", placeholder: "Kecamatan / Kota" },
    { id: "okupasi", label: "Okupasi / Penggunaan", type: "select", options: ["Rumah Tinggal", "Kantor", "Gudang / Pabrik", "Hotel / Vila / Homestay", "Ruko / Pertokoan", "Kos-kosan"] },
    { id: "nilaiBangunan", label: "Nilai Bangunan (Rp)", type: "text", placeholder: "cth: 500.000.000" },
    { id: "nilaiIsi", label: "Nilai Isi / Perabot (Rp)", type: "text", placeholder: "Kosongkan jika tidak dipertanggungkan" },
    { id: "risikoTambahan", label: "Risiko Tambahan", type: "multicheck", options: ["Banjir", "Gempa Bumi", "Huru-hara (RSMD)", "Tanah Longsor"] },
  ],
  liability: [
    { id: "jenisLiability", label: "Jenis Tanggung Gugat", type: "select", options: ["Public Liability", "Employer Liability", "Product Liability", "Limbah B3 / Environmental Liability"] },
    { id: "deskripsiUsaha", label: "Deskripsi Singkat Usaha", type: "textarea", placeholder: "Jelaskan kegiatan bisnis Anda secara singkat..." },
    { id: "batasPertanggungan", label: "Batas Pertanggungan / Limit (Rp)", type: "text", placeholder: "cth: 1.000.000.000" },
    { id: "jumlahKaryawan", label: "Jumlah Karyawan", type: "number", placeholder: "cth: 25" },
  ],
  engineering: [
    { id: "jenisProyek", label: "Jenis Proyek", type: "select", options: ["Contractor All Risk (CAR)", "Erection All Risk (EAR)", "Machinery Breakdown (MB)", "Belum tahu, minta rekomendasi"] },
    { id: "lokasiProyek", label: "Lokasi Proyek", type: "text", placeholder: "Kecamatan / Kota / Provinsi" },
    { id: "nilaiKontrak", label: "Nilai Kontrak / Proyek (Rp)", type: "text", placeholder: "cth: 2.000.000.000" },
    { id: "durasiProyek", label: "Durasi Proyek", type: "text", placeholder: "cth: 12 bulan" },
    { id: "deskripsiProyek", label: "Deskripsi Singkat Proyek", type: "textarea", placeholder: "Jenis konstruksi, scope pekerjaan..." },
  ],
  surety: [
    { id: "jenisJaminan", label: "Jenis Jaminan", type: "select", options: ["Jaminan Penawaran (Bid Bond)", "Jaminan Pelaksanaan (Performance Bond)", "Jaminan Uang Muka (Advance Payment Bond)", "Jaminan Pemeliharaan (Maintenance Bond)"] },
    { id: "nilaiJaminan", label: "Nilai Jaminan (Rp)", type: "text", placeholder: "cth: 500.000.000" },
    { id: "namaObligee", label: "Nama Obligee (Penerima Jaminan)", type: "text", placeholder: "Nama instansi / perusahaan pemberi kerja" },
    { id: "jenisProyek", label: "Jenis Proyek", type: "radio", options: ["Proyek Pemerintah", "Proyek Swasta"] },
    { id: "namaProyek", label: "Nama / Deskripsi Proyek", type: "textarea", placeholder: "Nama proyek & lingkup pekerjaan singkat..." },
  ],
  cargo: [
    { id: "jenisBurang", label: "Jenis Barang", type: "text", placeholder: "cth: Elektronik, Tekstil, Bahan Makanan" },
    { id: "rutePengiriman", label: "Rute Pengiriman", type: "text", placeholder: "cth: Yogyakarta → Jakarta" },
    { id: "armadaAngkutan", label: "Armada / Moda Angkutan", type: "select", options: ["Truk Darat", "Kapal Laut", "Pesawat Udara", "Kereta Api", "Kombinasi / Multimodal"] },
    { id: "nilaiBarang", label: "Nilai Barang (Rp)", type: "text", placeholder: "cth: 150.000.000" },
    { id: "frekuensiPengiriman", label: "Frekuensi Pengiriman", type: "select", options: ["Sekali kirim (open policy)", "Rutin harian", "Rutin mingguan", "Rutin bulanan"] },
  ],
};

function InputField({ field, value, onChange }) {
  const base = "w-full bg-white border border-[#D4C9B8] rounded-lg px-3.5 py-2.5 text-sm text-navy placeholder-[#94A3B8] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all";

  if (field.type === "select") {
    return (
      <select value={value || ""} onChange={e => onChange(field.id, e.target.value)} className={base}>
        <option value="">— Pilih —</option>
        {field.options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    );
  }
  if (field.type === "textarea") {
    return (
      <textarea
        value={value || ""}
        onChange={e => onChange(field.id, e.target.value)}
        placeholder={field.placeholder}
        rows={3}
        className={base + " resize-none"}
      />
    );
  }
  if (field.type === "radio") {
    return (
      <div className="flex gap-4 flex-wrap pt-1">
        {field.options.map(o => (
          <label key={o} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name={field.id}
              value={o}
              checked={value === o}
              onChange={() => onChange(field.id, o)}
              className="accent-[#C8963E] w-4 h-4"
            />
            <span className="text-sm text-navy/80 group-hover:text-navy transition-colors">{o}</span>
          </label>
        ))}
      </div>
    );
  }
  if (field.type === "multicheck") {
    const selected = value || [];
    const toggle = (opt) => {
      const next = selected.includes(opt) ? selected.filter(x => x !== opt) : [...selected, opt];
      onChange(field.id, next);
    };
    return (
      <div className="flex gap-3 flex-wrap pt-1">
        {field.options.map(o => (
          <label key={o} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={selected.includes(o)}
              onChange={() => toggle(o)}
              className="accent-[#C8963E] w-4 h-4 rounded"
            />
            <span className="text-sm text-navy/80 group-hover:text-navy transition-colors">{o}</span>
          </label>
        ))}
      </div>
    );
  }
  return (
    <input
      type={field.type === "number" ? "number" : "text"}
      value={value || ""}
      onChange={e => onChange(field.id, e.target.value)}
      placeholder={field.placeholder}
      className={base}
    />
  );
}

export default function SPPAForm() {
  const [product, setProduct] = useState("");
  const [form, setForm] = useState({ nama: "", whatsapp: "", agree: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedProduct = PRODUCTS.find(p => p.id === product);
  const fields = FIELD_CONFIGS[product] || [];
  const requirements = REQUIREMENTS[product];

  const handleChange = (id, val) => setForm(prev => ({ ...prev, [id]: val }));

  const waNumber = "628131556592";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product) return alert("Silakan pilih produk asuransi terlebih dahulu.");
    if (!form.nama || !form.whatsapp) return alert("Nama dan WhatsApp wajib diisi.");
    if (!form.agree) return alert("Harap centang persetujuan di bagian bawah form.");

    setLoading(true);

    const label = selectedProduct?.label || product;
    let msg = `*SPPA – ${label}*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *Nama:* ${form.nama}\n`;
    msg += `📱 *WhatsApp:* ${form.whatsapp}\n\n`;
    msg += `📋 *Detail ${label}:*\n`;

    fields.forEach(f => {
      const val = form[f.id];
      if (val && val !== "" && !(Array.isArray(val) && val.length === 0)) {
        const display = Array.isArray(val) ? val.join(", ") : val;
        msg += `• ${f.label}: ${display}\n`;
      }
    });

    msg += `\n✅ Persetujuan data tambahan: Ya\n`;
    msg += `\nDikirim melalui form SPPA asuransijogja.biz.id`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(url, "_blank");
    }, 600);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4" style={{ fontFamily: "var(--font-body, DM Sans, sans-serif)" }}>
        <div className="bg-white rounded-2xl shadow-lg border border-black/6 p-10 max-w-md w-full text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="font-heading text-2xl font-bold text-navy mb-2" style={{ fontFamily: "var(--font-heading, Syne, sans-serif)" }}>
            Permintaan Terkirim!
          </h2>
          <p className="text-sm text-[#64748B] leading-relaxed mb-6">
            Data Anda telah diteruskan ke WhatsApp kami. Tim praktisi akan segera menghubungi Anda untuk pembahasan lebih lanjut.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ nama: "", whatsapp: "", agree: false }); setProduct(""); }}
            className="bg-navy text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-navy/85 transition-colors"
          >
            Ajukan Permintaan Baru
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-4" style={{ fontFamily: "var(--font-body, DM Sans, sans-serif)" }}>
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <a href="/" className="inline-block font-bold text-lg text-navy mb-5" style={{ fontFamily: "var(--font-heading, Syne, sans-serif)" }}>
            Asuransi<span className="text-[#C8963E]">Jogja</span>
          </a>
          <div className="inline-block bg-[#C8963E]/12 text-[#C8963E] text-[0.7rem] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full mb-3">
            SPPA
          </div>
          <h1 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-navy leading-tight mb-2" style={{ fontFamily: "var(--font-heading, Syne, sans-serif)" }}>
            Permintaan Penawaran Asuransi
          </h1>
          <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
            Isi form berikut untuk mendapatkan penawaran premi yang akurat. Konsultasi <strong>gratis</strong>, tanpa tekanan, dan kami bantu temukan solusi terbaik.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-black/6 shadow-[0_4px_32px_rgba(13,33,55,0.07)] overflow-hidden">

          {/* Produk Selector */}
          <div className="bg-navy px-6 py-5">
            <label className="block text-[0.7rem] font-bold tracking-[2px] uppercase text-gold/80 mb-2">
              Pilih Produk Asuransi
            </label>
            <select
              value={product}
              onChange={e => { setProduct(e.target.value); setForm({ nama: "", whatsapp: "", agree: false }); }}
              className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-[#C8963E] focus:ring-2 focus:ring-[#C8963E]/25 transition-all appearance-none cursor-pointer"
            >
              {PRODUCTS.map(p => (
                <option key={p.id} value={p.id} className="bg-[#0D2137] text-white">
                  {p.icon ? `${p.icon} ${p.label}` : p.label}
                </option>
              ))}
            </select>
          </div>

          <div className="px-6 py-6 space-y-5">

            {/* Data Umum */}
            <div>
              <div className="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#94A3B8] mb-4 flex items-center gap-2">
                <span className="flex-1 h-px bg-black/6"></span>
                Data Pemohon
                <span className="flex-1 h-px bg-black/6"></span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy/70 mb-1.5">
                    Nama Lengkap <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.nama}
                    onChange={e => handleChange("nama", e.target.value)}
                    placeholder="Nama Anda"
                    className="w-full bg-white border border-[#D4C9B8] rounded-lg px-3.5 py-2.5 text-sm text-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#C8963E] focus:ring-2 focus:ring-[#C8963E]/15 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy/70 mb-1.5">
                    Nomor WhatsApp <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.whatsapp}
                    onChange={e => handleChange("whatsapp", e.target.value)}
                    placeholder="cth: 08123456789"
                    className="w-full bg-white border border-[#D4C9B8] rounded-lg px-3.5 py-2.5 text-sm text-navy placeholder-[#94A3B8] focus:outline-none focus:border-[#C8963E] focus:ring-2 focus:ring-[#C8963E]/15 transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Conditional Fields */}
            {product && fields.length > 0 && (
              <div>
                <div className="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#94A3B8] mb-4 flex items-center gap-2">
                  <span className="flex-1 h-px bg-black/6"></span>
                  {selectedProduct?.icon} Detail {selectedProduct?.label}
                  <span className="flex-1 h-px bg-black/6"></span>
                </div>
                <div className="space-y-4">
                  {fields.map(field => (
                    <div key={field.id}>
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5">
                        {field.label}
                      </label>
                      <InputField
                        field={field}
                        value={form[field.id]}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state */}
            {!product && (
              <div className="text-center py-10 text-[#94A3B8]">
                <div className="text-4xl mb-3 opacity-40">📋</div>
                <p className="text-sm">Pilih produk asuransi di atas untuk menampilkan form isian</p>
              </div>
            )}

            {/* Persetujuan */}
            {product && (
              <div className="bg-[#F9F6F1] border border-[#D4C9B8]/60 rounded-xl p-4 mt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={e => handleChange("agree", e.target.checked)}
                    className="mt-0.5 accent-[#C8963E] w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-xs text-[#475569] leading-relaxed group-hover:text-navy transition-colors">
                    Saya bersedia mengirimkan data tambahan jika diminta untuk kebutuhan analisa <em>underwriting</em> lebih lanjut, khusus untuk risiko tinggi atau nilai pertanggungan besar.
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Submit */}
          {product && (
            <div className="px-6 pb-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold text-sm py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:translate-y-0 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
                    Memproses...
                  </span>
                ) : (
                  <>💬 Kirim via WhatsApp</>
                )}
              </button>
              <p className="text-center text-[0.7rem] text-[#94A3B8] mt-2.5">
                Data dikirim langsung ke praktisi kami. Respon dalam 1×24 jam kerja.
              </p>
            </div>
          )}
        </form>

        {/* Persyaratan Dokumen */}
        {product && requirements && (
          <div className="mt-6 bg-white rounded-2xl border border-black/6 shadow-[0_4px_24px_rgba(13,33,55,0.05)] overflow-hidden">
            <div className="px-6 py-4 border-b border-black/6 flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[#C8963E]/12 rounded-lg flex items-center justify-center text-sm">📎</div>
              <div>
                <div className="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#94A3B8]">Persiapan</div>
                <div className="text-sm font-bold text-navy">{requirements.title}</div>
              </div>
            </div>
            <div className="px-6 py-4">
              <p className="text-xs text-[#64748B] mb-3 leading-relaxed">
                Dokumen-dokumen berikut umumnya dibutuhkan oleh pihak asuransi untuk proses <em>underwriting</em> dan penerbitan polis <strong>{selectedProduct?.label}</strong>:
              </p>
              <ul className="space-y-2">
                {requirements.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-navy/80">
                    <span className="text-[#C8963E] font-bold mt-0.5 flex-shrink-0">›</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-[#F9F6F1] rounded-lg px-4 py-3 text-xs text-[#64748B] leading-relaxed border border-[#D4C9B8]/40">
                <strong className="text-navy">💡 Catatan:</strong> Dokumen dapat dikirim melalui WhatsApp setelah konsultasi awal. Anda tidak perlu menyiapkan semua dokumen sekarang — konsultasi pertama bisa dilakukan tanpa dokumen.
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-[0.7rem] text-[#94A3B8] mt-6">
          © 2025 AsuransiJogja.biz.id · Praktisi Asuransi Kerugian Independen Yogyakarta
        </p>
      </div>
    </div>
  );
}
