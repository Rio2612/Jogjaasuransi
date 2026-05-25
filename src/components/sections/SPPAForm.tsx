"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

/* ─── Types ─────────────────────────────────────────────── */
export type ProductId =
  | "kendaraan"
  | "properti"
  | "liability"
  | "engineering"
  | "surety"
  | "cargo";

interface Product {
  id: ProductId | "";
  label: string;
  icon: string;
}

type FieldType = "text" | "number" | "select" | "textarea" | "radio" | "multicheck";

interface FieldConfig {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
}

interface Requirements {
  title: string;
  note?: string;
  items: string[];
}

type FormState = Record<string, string | string[] | boolean>;

/* ─── Static Data ────────────────────────────────────────── */
const PRODUCTS: Product[] = [
  { id: "",            label: "— Pilih Produk Asuransi —", icon: "" },
  { id: "kendaraan",   label: "Asuransi Kendaraan",        icon: "🚗" },
  { id: "properti",    label: "Asuransi Properti",         icon: "🏠" },
  { id: "liability",   label: "Asuransi Liability",        icon: "🛡️" },
  { id: "engineering", label: "Asuransi Engineering",      icon: "⚙️" },
  { id: "surety",      label: "Surety Bond",               icon: "📋" },
  { id: "cargo",       label: "Asuransi Kargo",            icon: "📦" },
];

const REQUIREMENTS: Record<ProductId, Requirements> = {
  kendaraan: {
    title: "Dokumen yang Perlu Disiapkan",
    note: "Untuk kendaraan pribadi standar, seluruh proses bisa dilakukan via WhatsApp.",
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
    note: "Survei lokasi mungkin diperlukan untuk nilai pertanggungan di atas Rp 2 miliar.",
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
    note: "Company profile wajib dilampirkan untuk pengajuan pertama kali.",
    items: [
      "Surat Undangan Tender / Dokumen Pengadaan",
      "Kontrak / SPK (untuk Jaminan Pelaksanaan & Uang Muka)",
      "Company profile perusahaan (wajib untuk pengajuan pertama)",
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
      "Untuk pengiriman rutin: estimasi frekuensi & nilai per bulan",
    ],
  },
};

const FIELD_CONFIGS: Record<ProductId, FieldConfig[]> = {
  kendaraan: [
    { id: "jenisKendaraan", label: "Jenis Kendaraan", type: "select",
      options: ["Mobil Pribadi", "Sepeda Motor", "Truk / Niaga", "Bus / Minibus", "Alat Berat", "Armada / Fleet"] },
    { id: "tahunKendaraan", label: "Tahun Kendaraan", type: "number", placeholder: "cth: 2021" },
    { id: "nilaiKendaraan", label: "Estimasi Nilai Kendaraan (Rp)", type: "text", placeholder: "cth: 200.000.000" },
    { id: "tipeProteksi", label: "Tipe Proteksi", type: "select",
      options: ["All Risk / Comprehensive", "Total Loss Only (TLO)", "Belum tahu, minta rekomendasi"] },
    { id: "platKendaraan", label: "Plat / Asal Daerah", type: "text", placeholder: "cth: AB – Yogyakarta" },
  ],
  properti: [
    { id: "lokasiProperti", label: "Lokasi / Alamat Properti", type: "textarea", placeholder: "Alamat lengkap objek yang diasuransikan" },
    { id: "okupasi", label: "Jenis / Okupasi", type: "select",
      options: ["Rumah Tinggal", "Kantor", "Gudang / Pabrik", "Hotel / Vila / Homestay", "Ruko / Pertokoan", "Kos-kosan"] },
    { id: "kelasKonstruksi", label: "Kelas Konstruksi", type: "select",
      options: ["Kelas 1 (Beton / Bata — permanen)", "Kelas 2 (Semi Permanen)", "Kelas 3 (Kayu / Bambu)"] },
    { id: "nilaiBangunan", label: "Nilai Bangunan (Rp)", type: "text", placeholder: "cth: 500.000.000" },
    { id: "nilaiIsi", label: "Nilai Isi / Perabot (Rp)", type: "text", placeholder: "Kosongkan jika tidak dipertanggungkan" },
    { id: "risikoTambahan", label: "Perluasan Risiko", type: "multicheck",
      options: ["Banjir", "Gempa Bumi", "Huru-hara (RSMD)", "Tanah Longsor"] },
  ],
  liability: [
    { id: "jenisLiability", label: "Jenis Tanggung Gugat", type: "select",
      options: ["Public Liability", "Employer Liability", "Product Liability", "Limbah B3 / Environmental Liability"] },
    { id: "deskripsiUsaha", label: "Deskripsi Singkat Usaha", type: "textarea",
      placeholder: "Jelaskan kegiatan bisnis Anda secara singkat..." },
    { id: "batasPertanggungan", label: "Batas Pertanggungan / Limit (Rp)", type: "text", placeholder: "cth: 1.000.000.000" },
    { id: "jumlahKaryawan", label: "Jumlah Karyawan", type: "number", placeholder: "cth: 25" },
  ],
  engineering: [
    { id: "jenisProyek", label: "Jenis Produk / Proyek", type: "select",
      options: ["Contractor All Risk (CAR)", "Erection All Risk (EAR)", "Machinery Breakdown (MB)", "Belum tahu, minta rekomendasi"] },
    { id: "lokasiProyek", label: "Lokasi Proyek", type: "text", placeholder: "Kecamatan / Kota / Provinsi" },
    { id: "nilaiKontrak", label: "Nilai Kontrak / Proyek (Rp)", type: "text", placeholder: "cth: 2.000.000.000" },
    { id: "durasiProyek", label: "Durasi Proyek", type: "text", placeholder: "cth: 12 bulan" },
    { id: "deskripsiProyek", label: "Deskripsi Singkat Proyek", type: "textarea",
      placeholder: "Jenis konstruksi, scope pekerjaan..." },
  ],
  surety: [
    { id: "jenisJaminan", label: "Jenis Jaminan", type: "select",
      options: ["Jaminan Penawaran (Bid Bond)", "Jaminan Pelaksanaan (Performance Bond)",
        "Jaminan Uang Muka (Advance Payment Bond)", "Jaminan Pemeliharaan (Maintenance Bond)"] },
    { id: "nilaiJaminan", label: "Nilai Jaminan (Rp)", type: "text", placeholder: "cth: 500.000.000" },
    { id: "namaObligee", label: "Nama Obligee (Penerima Jaminan)", type: "text",
      placeholder: "Nama instansi / perusahaan pemberi kerja" },
    { id: "jenisProyekSurety", label: "Jenis Proyek", type: "radio",
      options: ["Proyek Pemerintah", "Proyek Swasta"] },
    { id: "namaProyek", label: "Nama / Deskripsi Proyek", type: "textarea",
      placeholder: "Nama proyek & lingkup pekerjaan singkat..." },
  ],
  cargo: [
    { id: "jenisBarang", label: "Jenis Barang", type: "text", placeholder: "cth: Elektronik, Tekstil, Bahan Makanan" },
    { id: "rutePengiriman", label: "Rute Pengiriman", type: "text", placeholder: "cth: Yogyakarta → Jakarta" },
    { id: "armadaAngkutan", label: "Armada / Moda Angkutan", type: "select",
      options: ["Truk Darat", "Kapal Laut", "Pesawat Udara", "Kereta Api", "Kombinasi / Multimodal"] },
    { id: "nilaiBarang", label: "Nilai Barang per Pengiriman (Rp)", type: "text", placeholder: "cth: 150.000.000" },
    { id: "frekuensiPengiriman", label: "Frekuensi Pengiriman", type: "select",
      options: ["Sekali kirim (open policy)", "Rutin harian", "Rutin mingguan", "Rutin bulanan"] },
  ],
};

/* ─── Helpers ────────────────────────────────────────────── */
const inputBase =
  "w-full bg-white border border-[#D4C9B8] rounded-lg px-3.5 py-2.5 text-sm text-navy " +
  "placeholder-[#94A3B8] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all";

function InputField({
  field,
  value,
  onChange,
}: {
  field: FieldConfig;
  value: string | string[];
  onChange: (id: string, val: string | string[]) => void;
}) {
  if (field.type === "select") {
    return (
      <select
        value={(value as string) || ""}
        onChange={e => onChange(field.id, e.target.value)}
        className={inputBase}
      >
        <option value="">— Pilih —</option>
        {field.options!.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    );
  }
  if (field.type === "textarea") {
    return (
      <textarea
        value={(value as string) || ""}
        onChange={e => onChange(field.id, e.target.value)}
        placeholder={field.placeholder}
        rows={3}
        className={inputBase + " resize-none"}
      />
    );
  }
  if (field.type === "radio") {
    return (
      <div className="flex gap-5 flex-wrap pt-1">
        {field.options!.map(o => (
          <label key={o} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name={field.id}
              value={o}
              checked={value === o}
              onChange={() => onChange(field.id, o)}
              className="accent-gold w-4 h-4"
            />
            <span className="text-sm text-navy/80 group-hover:text-navy">{o}</span>
          </label>
        ))}
      </div>
    );
  }
  if (field.type === "multicheck") {
    const selected = (value as string[]) || [];
    const toggle = (opt: string) => {
      const next = selected.includes(opt)
        ? selected.filter(x => x !== opt)
        : [...selected, opt];
      onChange(field.id, next);
    };
    return (
      <div className="flex gap-4 flex-wrap pt-1">
        {field.options!.map(o => (
          <label key={o} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={selected.includes(o)}
              onChange={() => toggle(o)}
              className="accent-gold w-4 h-4 rounded"
            />
            <span className="text-sm text-navy/80 group-hover:text-navy">{o}</span>
          </label>
        ))}
      </div>
    );
  }
  return (
    <input
      type={field.type === "number" ? "number" : "text"}
      value={(value as string) || ""}
      onChange={e => onChange(field.id, e.target.value)}
      placeholder={field.placeholder}
      className={inputBase}
    />
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#94A3B8] flex items-center gap-3">
      <span className="flex-1 h-px bg-black/6" />
      {label}
      <span className="flex-1 h-px bg-black/6" />
    </div>
  );
}

/* ─── Inner Form (needs useSearchParams) ─────────────────── */
function SPPAFormInner() {
  const searchParams = useSearchParams();
  const paramProduk = searchParams.get("produk") as ProductId | null;

  const [product, setProduct] = useState<ProductId | "">(paramProduk ?? "");
  const [form, setForm] = useState<FormState>({ nama: "", whatsapp: "", email: "", agree: false });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Jika URL param berubah (navigasi), sync ke state
  useEffect(() => {
    if (paramProduk) setProduct(paramProduk);
  }, [paramProduk]);

  const selectedProduct = PRODUCTS.find(p => p.id === product);
  const fields: FieldConfig[] = product ? FIELD_CONFIGS[product as ProductId] : [];
  const requirements: Requirements | undefined = product ? REQUIREMENTS[product as ProductId] : undefined;

  const handleChange = (id: string, val: string | string[] | boolean) =>
    setForm(prev => ({ ...prev, [id]: val }));

  const handleProductChange = (val: string) => {
    setProduct(val as ProductId | "");
    // Pertahankan data umum, reset field spesifik produk
    setForm(prev => ({ nama: prev.nama, whatsapp: prev.whatsapp, email: prev.email, agree: false }));
    setStatus("idle");
    setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product)           return setErrorMsg("Pilih produk asuransi terlebih dahulu.");
    if (!form.nama)         return setErrorMsg("Nama lengkap wajib diisi.");
    if (!form.whatsapp)     return setErrorMsg("Nomor WhatsApp wajib diisi.");
    if (!form.agree)        return setErrorMsg("Centang persetujuan sebelum mengirim.");

    setStatus("loading");
    setErrorMsg("");

    try {
      const payload = {
        product,
        productLabel: selectedProduct?.label,
        nama: form.nama,
        whatsapp: form.whatsapp,
        email: form.email || null,
        fields: Object.fromEntries(
          fields.map(f => [f.id, form[f.id] ?? ""])
        ),
        fieldLabels: Object.fromEntries(
          fields.map(f => [f.id, f.label])
        ),
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch("/api/send-sppa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(await res.text());
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.");
    }
  };

  /* ── Success screen ── */
  if (status === "success") {
    const waNumber = "6287781658231";
    const nama = form.nama as string;
    const produkLabel = selectedProduct?.label || product;
    return (
      <div className="min-h-[calc(100vh-68px)] bg-cream flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg border border-black/6 p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✅</div>
          <h2 className="font-heading text-2xl font-bold text-navy mb-2">Permintaan Diterima!</h2>
          <p className="text-sm text-[#64748B] leading-relaxed mb-2">
            Halo <strong>{nama}</strong>, data permintaan <strong>{produkLabel}</strong> Anda telah kami terima.
          </p>
          <p className="text-sm text-[#64748B] leading-relaxed mb-6">
            Kami akan menyiapkan <em>Penjelasan Rinci</em> dan mengirimkannya segera. Notifikasi akan masuk ke WhatsApp Anda.
          </p>
          <a
            href={`https://wa.me/${waNumber}`}
            className="block bg-[#25D366] text-white text-sm font-bold py-3 rounded-xl no-underline hover:opacity-90 transition-opacity mb-3"
          >
            💬 Chat Langsung via WhatsApp
          </a>
          <button
            onClick={() => {
              setStatus("idle");
              setForm({ nama: "", whatsapp: "", email: "", agree: false });
              setProduct("");
            }}
            className="text-sm text-[#94A3B8] hover:text-navy transition-colors"
          >
            Ajukan permintaan lain →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-68px)] bg-cream py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-gold/12 text-gold text-[0.68rem] font-bold tracking-[2.5px] uppercase px-3 py-1 rounded-full mb-3">
            SPPA Online
          </span>
          <h1 className="font-heading text-[clamp(1.7rem,3vw,2.3rem)] font-bold text-navy leading-tight mb-2">
            Permintaan Penjelasan Rinci Asuransi
          </h1>
          <p className="text-sm text-[#64748B] max-w-[480px] mx-auto leading-relaxed">
            Isi form ini untuk mendapatkan <strong className="text-navy">dokumen penjelasan rinci</strong> yang akan kami kirimkan via WhatsApp. Gratis, tanpa tekanan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-black/6 shadow-[0_4px_40px_rgba(13,33,55,0.08)] overflow-hidden">

          {/* Product selector */}
          <div className="bg-navy px-6 py-5">
            <label className="block text-[0.68rem] font-bold tracking-[2.5px] uppercase text-gold/80 mb-2">
              Pilih Produk Asuransi <span className="text-red-400">*</span>
            </label>
            <select
              value={product}
              onChange={e => handleProductChange(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-gold transition-all appearance-none cursor-pointer"
            >
              {PRODUCTS.map(p => (
                <option key={p.id} value={p.id} className="bg-navy text-white">
                  {p.icon ? `${p.icon}  ${p.label}` : p.label}
                </option>
              ))}
            </select>
          </div>

          <div className="px-6 py-6 space-y-6">

            {/* Data pemohon */}
            <div className="space-y-4">
              <SectionDivider label="Data Pemohon" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy/60 mb-1.5">
                    Nama Lengkap <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={(form.nama as string) || ""}
                    onChange={e => handleChange("nama", e.target.value)}
                    placeholder="Nama Anda"
                    className={inputBase}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy/60 mb-1.5">
                    Nomor WhatsApp <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={(form.whatsapp as string) || ""}
                    onChange={e => handleChange("whatsapp", e.target.value)}
                    placeholder="cth: 08123456789"
                    className={inputBase}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy/60 mb-1.5">
                  Email <span className="text-[#94A3B8] font-normal">(opsional — untuk pengiriman dokumen)</span>
                </label>
                <input
                  type="email"
                  value={(form.email as string) || ""}
                  onChange={e => handleChange("email", e.target.value)}
                  placeholder="nama@email.com"
                  className={inputBase}
                />
              </div>
            </div>

            {/* Conditional product fields */}
            {product && fields.length > 0 && (
              <div className="space-y-4">
                <SectionDivider label={`${selectedProduct?.icon} Detail ${selectedProduct?.label}`} />
                {fields.map(field => (
                  <div key={field.id}>
                    <label className="block text-xs font-semibold text-navy/60 mb-1.5">
                      {field.label}
                    </label>
                    <InputField
                      field={field}
                      value={(form[field.id] as string | string[]) || ""}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Empty state */}
            {!product && (
              <div className="text-center py-12 text-[#94A3B8]">
                <div className="text-5xl mb-3 opacity-25">📋</div>
                <p className="text-sm">Pilih produk asuransi di atas untuk menampilkan form isian</p>
              </div>
            )}

            {/* Checkbox persetujuan */}
            {product && (
              <div className="bg-cream border border-[#D4C9B8]/70 rounded-xl p-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={(form.agree as boolean) || false}
                    onChange={e => handleChange("agree", e.target.checked)}
                    className="mt-0.5 accent-gold w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-xs text-[#475569] leading-relaxed group-hover:text-navy transition-colors">
                    Saya bersedia mengirimkan data tambahan jika diminta untuk kebutuhan analisa{" "}
                    <em>underwriting</em> lebih lanjut, khusus untuk risiko tinggi atau nilai pertanggungan besar.
                  </span>
                </label>
              </div>
            )}

            {/* Error */}
            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                {errorMsg}
              </div>
            )}
          </div>

          {/* Submit */}
          {product && (
            <div className="px-6 pb-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gold hover:bg-gold2 active:scale-[0.99] text-navy font-bold text-sm py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:translate-y-0 flex items-center justify-center gap-2.5"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-navy/20 border-t-navy rounded-full animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>📄 Kirim & Minta Penjelasan Rinci</>
                )}
              </button>
              <p className="text-center text-[0.68rem] text-[#94A3B8] mt-2.5">
                Dokumen akan disiapkan dan dikirim via WhatsApp. Respon dalam 1×24 jam kerja.
              </p>
            </div>
          )}
        </form>

        {/* Syarat dokumen */}
        {product && requirements && (
          <div className="mt-5 bg-white rounded-2xl border border-black/6 shadow-[0_4px_24px_rgba(13,33,55,0.05)] overflow-hidden">
            <div className="px-6 py-4 border-b border-black/6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">📎</div>
              <div>
                <div className="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#94A3B8]">Persiapan Dokumen</div>
                <div className="text-sm font-bold text-navy">{requirements.title}</div>
              </div>
            </div>
            <div className="px-6 py-5">
              {requirements.note && (
                <p className="text-xs text-gold font-medium mb-3 leading-relaxed">ℹ️ {requirements.note}</p>
              )}
              <p className="text-xs text-[#64748B] mb-4 leading-relaxed">
                Dokumen berikut umumnya dibutuhkan pihak asuransi untuk proses <em>underwriting</em>{" "}
                <strong className="text-navy">{selectedProduct?.label}</strong>:
              </p>
              <ul className="space-y-2.5">
                {requirements.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-navy/80">
                    <span className="text-gold font-bold mt-0.5 flex-shrink-0">›</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 bg-cream rounded-xl px-4 py-3 text-xs text-[#64748B] leading-relaxed border border-[#D4C9B8]/50">
                <strong className="text-navy">💡 Catatan:</strong> Dokumen dapat dikirim via WhatsApp setelah
                konsultasi awal. Anda tidak perlu menyiapkan semua sekarang — konsultasi pertama bisa tanpa dokumen.
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-[0.68rem] text-[#94A3B8] mt-8">
          © {new Date().getFullYear()} AsuransiJogja.biz.id · Konsultan Asuransi Kerugian Independen Yogyakarta
        </p>
      </div>
    </div>
  );
}

/* ─── Exported Component (Suspense wrapper for useSearchParams) ── */
export default function SPPAForm() {
  return (
    <Suspense fallback={
      <div className="min-h-[calc(100vh-68px)] bg-cream flex items-center justify-center">
        <div className="text-[#94A3B8] text-sm">Memuat form...</div>
      </div>
    }>
      <SPPAFormInner />
    </Suspense>
  );
}
