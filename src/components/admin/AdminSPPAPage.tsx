"use client";

import { useState, useEffect, useCallback } from "react";

interface Submission {
  id: string;
  product: string;
  productLabel: string;
  nama: string;
  whatsapp: string;
  email: string | null;
  fields: Record<string, string | string[]>;
  fieldLabels: Record<string, string>;
  submittedAt: string;
  status: "baru" | "diproses" | "selesai";
}

const STATUS_STYLE: Record<string, string> = {
  baru:     "bg-amber-100 text-amber-800 border-amber-200",
  diproses: "bg-blue-100  text-blue-800  border-blue-200",
  selesai:  "bg-green-100 text-green-800 border-green-200",
};
const STATUS_LABEL = { baru: "Baru", diproses: "Diproses", selesai: "Selesai" };

const PRODUCT_ICON: Record<string, string> = {
  kendaraan: "🚗", properti: "🏠", liability: "🛡️",
  engineering: "⚙️", surety: "📋", cargo: "📦",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("id-ID", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

function formatRp(n: number) {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

// ─── PDF Generator (client-side, print-to-PDF via browser) ────────────────────
function generatePDFContent(sub: Submission): string {
  const produkLabel = sub.productLabel;
  const icon = PRODUCT_ICON[sub.product] || "📋";
  const now = new Date(sub.submittedAt).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  });

  // Baris field detail
  const fieldRows = Object.entries(sub.fields)
    .filter(([, val]) => val && !(Array.isArray(val) && val.length === 0))
    .map(([key, val]) => {
      const label = sub.fieldLabels[key] || key;
      const display = Array.isArray(val) ? val.join(", ") : String(val);
      return `
        <tr>
          <td style="padding:10px 14px;color:#475569;font-size:13px;width:42%;border-bottom:1px solid #f1f5f9;">${label}</td>
          <td style="padding:10px 14px;color:#0D2137;font-size:13px;font-weight:600;border-bottom:1px solid #f1f5f9;">${display}</td>
        </tr>`;
    }).join("");

  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"/>
<title>Simulasi & Estimasi Premi ${produkLabel} — ${sub.nama}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'DM Sans',sans-serif;background:#fff;color:#0D2137;font-size:14px;}
  .page{max-width:720px;margin:0 auto;padding:48px 52px;}
  .header{background:#0D2137;border-radius:14px;padding:32px 36px;margin-bottom:36px;position:relative;overflow:hidden;}
  .header::after{content:'${icon}';position:absolute;right:32px;top:50%;transform:translateY(-50%);font-size:80px;opacity:0.07;}
  .brand{font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.5px;}
  .brand span{color:#C8963E;}
  .doc-type{font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#C8963E;margin-top:6px;margin-bottom:16px;}
  .doc-title{font-family:'Syne',sans-serif;font-size:24px;font-weight:800;color:#fff;line-height:1.22;}
  .meta-row{display:flex;gap:24px;margin-top:18px;flex-wrap:wrap;}
  .meta-item{display:flex;flex-direction:column;gap:3px;}
  .meta-label{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,0.45);}
  .meta-value{font-size:12px;color:rgba(255,255,255,0.80);font-weight:500;}
  .section{margin-bottom:28px;}
  .section-title{font-family:'Syne',sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#94A3B8;border-bottom:1px solid #f1f5f9;padding-bottom:8px;margin-bottom:0;}
  table{width:100%;border-collapse:collapse;}
  .disclaimer-box{background:#FDF9F3;border:1px solid #E8D5B0;border-radius:10px;padding:16px 20px;margin-top:28px;}
  .disclaimer-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#C8963E;margin-bottom:8px;}
  .disclaimer-text{font-size:12px;color:#64748B;line-height:1.75;}
  .footer{margin-top:36px;padding-top:16px;border-top:1px solid #f1f5f9;display:flex;justify-content:space-between;align-items:flex-end;}
  .footer-brand{font-family:'Syne',sans-serif;font-weight:700;font-size:15px;color:#0D2137;}
  .footer-brand span{color:#C8963E;}
  .footer-contact{font-size:11px;color:#94A3B8;text-align:right;line-height:1.6;}
  .id-badge{display:inline-block;background:#F1F5F9;border:1px solid #E2E8F0;border-radius:6px;padding:3px 8px;font-size:10px;font-weight:600;color:#64748B;font-family:monospace;margin-top:6px;}
  @media print{
    body{print-color-adjust:exact;-webkit-print-color-adjust:exact;}
    .page{padding:32px 36px;}
  }
</style>
</head>
<body>
<div class="page">
  <!-- HEADER -->
  <div class="header">
    <div class="brand">Asuransi<span>Jogja</span></div>
    <div class="doc-type">Simulasi & Estimasi Premi</div>
    <div class="doc-title">Simulasi & Estimasi Premi<br/>${produkLabel}</div>
    <div class="meta-row">
      <div class="meta-item">
        <span class="meta-label">Untuk</span>
        <span class="meta-value">${sub.nama}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">WhatsApp</span>
        <span class="meta-value">${sub.whatsapp}</span>
      </div>
      ${sub.email ? `<div class="meta-item">
        <span class="meta-label">Email</span>
        <span class="meta-value">${sub.email}</span>
      </div>` : ""}
      <div class="meta-item">
        <span class="meta-label">Tanggal</span>
        <span class="meta-value">${now}</span>
      </div>
    </div>
    <div class="id-badge">${sub.id}</div>
  </div>

  <!-- DATA DETAIL -->
  <div class="section">
    <div class="section-title">${icon} Rincian Data ${produkLabel}</div>
    <table>
      <tbody>
        ${fieldRows || '<tr><td colspan="2" style="padding:16px;color:#94A3B8;font-size:13px;text-align:center;">Data belum diisi</td></tr>'}
      </tbody>
    </table>
  </div>

  <!-- DISCLAIMER -->
  <div class="disclaimer-box">
    <div class="disclaimer-title">Catatan Penting</div>
    <div class="disclaimer-text">
      Dokumen ini merupakan <strong>simulasi &amp; estimasi premi awal</strong> berdasarkan data yang Anda input dan bukan merupakan
      penawaran resmi (quotation) maupun polis asuransi. Estimasi premi dan ketentuan pertanggungan bersifat indikatif
      dan akan ditentukan secara final oleh perusahaan asuransi setelah proses <em>underwriting</em> lengkap.<br/><br/>
      Sebagai konsultan asuransi independen, kami akan membantu Anda membandingkan penawaran dari berbagai
      perusahaan asuransi terkemuka dan memilih yang paling sesuai dengan kebutuhan dan anggaran Anda.
    </div>
  </div>

  <!-- FOOTER -->
  <div class="footer">
    <div>
      <div class="footer-brand">Asuransi<span>Jogja</span></div>
      <div style="font-size:11px;color:#94A3B8;margin-top:4px;">Konsultan Asuransi Kerugian Independen</div>
    </div>
    <div class="footer-contact">
      📱 0877-8165-8231 (Rio MD)<br/>
      ✉️ rio@asuransijogja.biz.id<br/>
      🌐 asuransijogja.biz.id
    </div>
  </div>
</div>
</body>
</html>`;
}

function downloadPDF(sub: Submission) {
  const html = generatePDFContent(sub);
  const win = window.open("", "_blank");
  if (!win) return alert("Pop-up diblokir browser. Izinkan pop-up dan coba lagi.");

  // Format nama file: Simulasi-dan-Estimasi-Premi-[NamaNasabah].pdf
  const safeNama = sub.nama.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");
  const fileName = `Simulasi-dan-Estimasi-Premi-${safeNama}.pdf`;

  win.document.write(html);
  win.document.close();

  // Set document title agar browser memakai nama file yang benar saat Save/Print to PDF
  setTimeout(() => {
    win.document.title = fileName;
    win.print();
  }, 800);
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function AdminSPPAPage() {
  const [secret, setSecret]         = useState("");
  const [authed, setAuthed]         = useState(false);
  const [subs, setSubs]             = useState<Submission[]>([]);
  const [loading, setLoading]       = useState(false);
  const [filterStatus, setFilter]   = useState<string>("semua");
  const [filterProduk, setFProduk]  = useState<string>("semua");
  const [search, setSearch]         = useState("");
  const [selected, setSelected]     = useState<Submission | null>(null);
  const [authError, setAuthError]   = useState("");

  const fetchData = useCallback(async (sec: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/send-sppa", {
        headers: { "x-admin-secret": sec },
      });
      if (res.status === 401) { setAuthError("Secret salah."); return; }
      const json = await res.json();
      setSubs(json.submissions || []);
      setAuthed(true);
    } catch {
      setAuthError("Gagal terhubung ke server.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!secret.trim()) return;
    fetchData(secret);
  };

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/send-sppa", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-secret": secret },
      body: JSON.stringify({ id, status }),
    });
    setSubs(prev => prev.map(s => s.id === id ? { ...s, status: status as Submission["status"] } : s));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status: status as Submission["status"] } : prev);
  };

  const filtered = subs
    .filter(s => filterStatus === "semua" || s.status === filterStatus)
    .filter(s => filterProduk === "semua" || s.product === filterProduk)
    .filter(s =>
      !search ||
      s.nama.toLowerCase().includes(search.toLowerCase()) ||
      s.whatsapp.includes(search) ||
      s.id.toLowerCase().includes(search.toLowerCase())
    );

  const stats = {
    total: subs.length,
    baru: subs.filter(s => s.status === "baru").length,
    diproses: subs.filter(s => s.status === "diproses").length,
    selesai: subs.filter(s => s.status === "selesai").length,
  };

  /* ── Login screen ── */
  if (!authed) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-black/6 p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="font-heading text-xl font-bold text-navy mb-1">
              Asuransi<span className="text-gold">Jogja</span>
            </div>
            <div className="text-xs text-[#94A3B8] font-medium tracking-widest uppercase">Admin Dashboard</div>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-navy/60 mb-1.5">Admin Secret</label>
              <input
                type="password"
                value={secret}
                onChange={e => setSecret(e.target.value)}
                placeholder="Masukkan ADMIN_SECRET"
                className="w-full border border-[#D4C9B8] rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all"
                autoFocus
              />
            </div>
            {authError && <p className="text-red-500 text-xs">{authError}</p>}
            <button
              type="submit"
              className="w-full bg-navy text-white font-bold text-sm py-2.5 rounded-xl hover:bg-navy/85 transition-colors"
            >
              Masuk →
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Top bar */}
      <div className="bg-navy px-6 py-3.5 flex items-center justify-between">
        <div className="font-heading text-base font-bold text-white">
          Asuransi<span className="text-gold">Jogja</span>
          <span className="text-white/40 font-normal text-xs ml-3">/ Admin SPPA</span>
        </div>
        <button
          onClick={() => fetchData(secret)}
          className="text-xs text-white/60 hover:text-gold transition-colors flex items-center gap-1.5"
        >
          🔄 Refresh
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Total", val: stats.total, color: "text-navy" },
            { label: "Baru", val: stats.baru, color: "text-amber-600" },
            { label: "Diproses", val: stats.diproses, color: "text-blue-600" },
            { label: "Selesai", val: stats.selesai, color: "text-green-600" },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-black/6 p-4 text-center">
              <div className={`font-heading text-2xl font-bold ${s.color}`}>{s.val}</div>
              <div className="text-xs text-[#94A3B8] font-medium mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-black/6 p-4 mb-4 flex flex-wrap gap-3 items-center">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Cari nama, WA, atau ID..."
            className="border border-[#D4C9B8] rounded-lg px-3 py-2 text-sm flex-1 min-w-[180px] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15"
          />
          <select
            value={filterStatus}
            onChange={e => setFilter(e.target.value)}
            className="border border-[#D4C9B8] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
          >
            <option value="semua">Semua Status</option>
            <option value="baru">Baru</option>
            <option value="diproses">Diproses</option>
            <option value="selesai">Selesai</option>
          </select>
          <select
            value={filterProduk}
            onChange={e => setFProduk(e.target.value)}
            className="border border-[#D4C9B8] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
          >
            <option value="semua">Semua Produk</option>
            {["kendaraan","properti","liability","engineering","surety","cargo"].map(p => (
              <option key={p} value={p}>{PRODUCT_ICON[p]} {p.charAt(0).toUpperCase()+p.slice(1)}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          {/* Table */}
          <div className="flex-1 min-w-0">
            {loading ? (
              <div className="bg-white rounded-xl border border-black/6 p-12 text-center text-[#94A3B8] text-sm">
                Memuat data...
              </div>
            ) : filtered.length === 0 ? (
              <div className="bg-white rounded-xl border border-black/6 p-12 text-center">
                <div className="text-4xl mb-3 opacity-30">📋</div>
                <p className="text-sm text-[#94A3B8]">Belum ada SPPA masuk</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-black/6 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-black/6 bg-[#F8F9FB]">
                      {["ID", "Produk", "Nama", "WA", "Waktu", "Status", "Aksi"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-bold text-[#94A3B8] uppercase tracking-wider whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((sub, i) => (
                      <tr
                        key={sub.id}
                        className={`border-b border-black/4 hover:bg-gold/3 transition-colors cursor-pointer ${
                          selected?.id === sub.id ? "bg-gold/5" : i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                        }`}
                        onClick={() => setSelected(sub)}
                      >
                        <td className="px-4 py-3 font-mono text-xs text-[#64748B]">{sub.id}</td>
                        <td className="px-4 py-3 text-sm whitespace-nowrap">
                          {PRODUCT_ICON[sub.product]} <span className="text-[#64748B] text-xs">{sub.productLabel}</span>
                        </td>
                        <td className="px-4 py-3 text-sm font-semibold text-navy">{sub.nama}</td>
                        <td className="px-4 py-3 text-xs text-[#64748B] font-mono">{sub.whatsapp}</td>
                        <td className="px-4 py-3 text-xs text-[#94A3B8] whitespace-nowrap">{formatDate(sub.submittedAt)}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${STATUS_STYLE[sub.status]}`}>
                            {STATUS_LABEL[sub.status]}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={e => { e.stopPropagation(); downloadPDF(sub); }}
                            className="text-xs bg-navy text-white px-3 py-1.5 rounded-lg hover:bg-navy/80 transition-colors whitespace-nowrap"
                          >
                            📄 PDF
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Detail panel */}
          {selected && (
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-xl border border-black/6 overflow-hidden sticky top-6">
                <div className="bg-navy px-5 py-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gold/70 font-bold tracking-widest uppercase mb-0.5">Detail SPPA</div>
                    <div className="text-white font-semibold text-sm">{selected.nama}</div>
                  </div>
                  <button onClick={() => setSelected(null)} className="text-white/40 hover:text-white text-lg">✕</button>
                </div>
                <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">

                  {/* Info dasar */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Data Pemohon</p>
                    <div className="text-xs space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">ID</span>
                        <span className="font-mono text-navy font-medium">{selected.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">Produk</span>
                        <span className="text-navy font-medium">{selected.productLabel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">WhatsApp</span>
                        <a href={`https://wa.me/${selected.whatsapp}`} className="text-green-600 font-medium">{selected.whatsapp}</a>
                      </div>
                      {selected.email && (
                        <div className="flex justify-between">
                          <span className="text-[#64748B]">Email</span>
                          <span className="text-navy">{selected.email}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">Waktu</span>
                        <span className="text-navy">{formatDate(selected.submittedAt)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Field detail */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Detail Isian</p>
                    <div className="space-y-1.5">
                      {Object.entries(selected.fields)
                        .filter(([, v]) => v && !(Array.isArray(v) && v.length === 0))
                        .map(([key, val]) => (
                          <div key={key} className="bg-[#F8F9FB] rounded-lg px-3 py-2">
                            <div className="text-[0.65rem] text-[#94A3B8] font-medium">{selected.fieldLabels[key] || key}</div>
                            <div className="text-xs text-navy font-semibold mt-0.5">
                              {Array.isArray(val) ? val.join(", ") : val}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Status update */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Update Status</p>
                    <div className="flex gap-2 flex-wrap">
                      {(["baru", "diproses", "selesai"] as const).map(st => (
                        <button
                          key={st}
                          onClick={() => updateStatus(selected.id, st)}
                          className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all ${
                            selected.status === st
                              ? STATUS_STYLE[st] + " scale-105"
                              : "bg-white border-black/10 text-[#64748B] hover:border-navy/30"
                          }`}
                        >
                          {STATUS_LABEL[st]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2 border-t border-black/6">
                    <button
                      onClick={() => downloadPDF(selected)}
                      className="w-full bg-navy text-white text-xs font-bold py-2.5 rounded-xl hover:bg-navy/85 transition-colors"
                    >
                      📄 Download / Cetak PDF
                    </button>
                    <a
                      href={`https://wa.me/${selected.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full bg-[#25D366] text-white text-xs font-bold py-2.5 rounded-xl hover:opacity-90 transition-opacity text-center no-underline"
                    >
                      💬 Balas via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
