/**
 * src/lib/emailTemplate.ts
 * Membangun HTML email konfirmasi SPPA untuk dikirim via Resend.
 * Desain profesional, mobile-friendly, on-brand Asuransi Jogja.
 */

import type { SPPASubmission } from "@/lib/sppaStore";

export function buildEmailHtml(sub: SPPASubmission): string {
  const now = new Date(sub.submittedAt).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Baris detail field
  const fieldRows = Object.entries(sub.fields)
    .filter(([, val]) => val && !(Array.isArray(val) && val.length === 0))
    .map(([key, val]) => {
      const label   = sub.fieldLabels[key] || key;
      const display = Array.isArray(val) ? val.join(", ") : String(val);
      // Format angka jika terlihat seperti nilai Rp
      const isRp    = label.toLowerCase().includes("nilai") || label.toLowerCase().includes("premi") || label.toLowerCase().includes("limit");
      const num     = parseInt(display.replace(/\D/g, ""), 10);
      const shown   = isRp && !isNaN(num) && num > 0
        ? "Rp " + num.toLocaleString("id-ID")
        : display;
      return `
        <tr>
          <td style="padding:10px 16px;font-size:13px;color:#64748B;width:44%;border-bottom:1px solid #F1F5F9;vertical-align:top;">${label}</td>
          <td style="padding:10px 16px;font-size:13px;color:#0D2137;font-weight:600;border-bottom:1px solid #F1F5F9;">${shown}</td>
        </tr>`;
    }).join("");

  return `<!DOCTYPE html>
<html lang="id" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <title>Konfirmasi Permintaan — Asuransi Jogja</title>
</head>
<body style="margin:0;padding:0;background-color:#F1F5F9;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- HEADER -->
          <tr>
            <td style="background:#0D2137;border-radius:16px 16px 0 0;padding:32px 36px;text-align:left;">
              <div style="font-size:22px;font-weight:800;color:#FFFFFF;letter-spacing:-0.5px;margin-bottom:4px;">
                Asuransi<span style="color:#C8963E;">Jogja</span>
              </div>
              <div style="font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#C8963E;margin-bottom:20px;">
                Praktisi Asuransi Independen
              </div>
              <div style="font-size:22px;font-weight:700;color:#FFFFFF;line-height:1.3;margin-bottom:8px;">
                Permintaan Simulasi &amp; Estimasi Premi<br/>
                <span style="color:#C8963E;">${sub.productLabel}</span>
              </div>
              <div style="font-size:12px;color:rgba(255,255,255,0.55);margin-top:12px;">
                Diterima pada: ${now} &nbsp;·&nbsp; ID: ${sub.id}
              </div>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#FFFFFF;padding:32px 36px;">

              <!-- Salam -->
              <p style="font-size:15px;color:#0D2137;font-weight:600;margin:0 0 8px 0;">
                Halo, ${sub.nama}! 👋
              </p>
              <p style="font-size:14px;color:#475569;line-height:1.75;margin:0 0 24px 0;">
                Terima kasih telah mempercayakan kebutuhan asuransi Anda kepada <strong>Asuransi Jogja</strong>.
                Kami telah menerima permintaan <strong>Simulasi &amp; Estimasi Premi ${sub.productLabel}</strong>
                dan sedang menyiapkan dokumen khusus untuk Anda.
              </p>

              <!-- Status box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:10px;margin-bottom:28px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <div style="font-size:13px;font-weight:700;color:#166534;margin-bottom:4px;">✅ Permintaan Berhasil Diterima</div>
                    <div style="font-size:13px;color:#15803D;line-height:1.6;">
                      Tim konsultan kami sedang menyiapkan dokumen simulasi. Kami akan menghubungi Anda
                      dalam <strong>1×24 jam kerja</strong> melalui WhatsApp atau email ini.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Ringkasan data -->
              <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#94A3B8;margin-bottom:12px;">
                Ringkasan Data yang Anda Input
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;margin-bottom:28px;">
                <tbody>
                  <tr style="background:#F8FAFC;">
                    <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#64748B;width:44%;border-bottom:1px solid #E2E8F0;">Field</td>
                    <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#64748B;border-bottom:1px solid #E2E8F0;">Data Anda</td>
                  </tr>
                  ${fieldRows || '<tr><td colspan="2" style="padding:16px;color:#94A3B8;text-align:center;font-size:13px;">Data tidak tersedia</td></tr>'}
                </tbody>
              </table>

              <!-- Apa yang terjadi selanjutnya -->
              <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#94A3B8;margin-bottom:12px;">
                Langkah Selanjutnya
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                ${[
                  ["📋", "Analisis Kebutuhan", "Konsultan kami akan mempelajari data Anda dan memilih produk yang paling sesuai."],
                  ["📄", "Penyiapan Dokumen", "Dokumen Simulasi & Estimasi Premi disiapkan khusus berdasarkan data Anda."],
                  ["💬", "Konfirmasi via WhatsApp", "Kami menghubungi Anda via WhatsApp untuk penjelasan lebih lanjut dan tanya jawab."],
                  ["✅", "Penerbitan Polis Resmi", "Jika Anda setuju, kami proses penerbitan polis resmi dari perusahaan asuransi pilihan."],
                ].map(([icon, title, desc], i) => `
                <tr>
                  <td width="44" valign="top" style="padding:0 12px 16px 0;">
                    <div style="width:36px;height:36px;background:#FDF9F3;border:1px solid #E8D5B0;border-radius:8px;text-align:center;line-height:36px;font-size:16px;">${icon}</div>
                  </td>
                  <td valign="top" style="padding-bottom:16px;${i < 3 ? "border-bottom:1px solid #F1F5F9;" : ""}">
                    <div style="font-size:13px;font-weight:700;color:#0D2137;margin-bottom:3px;">${title}</div>
                    <div style="font-size:12px;color:#64748B;line-height:1.6;">${desc}</div>
                  </td>
                </tr>`).join("")}
              </table>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td align="center">
                    <a href="https://wa.me/6287781658231"
                       style="display:inline-block;background:#25D366;color:#FFFFFF;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:10px;letter-spacing:0.3px;">
                      💬 Chat WhatsApp Langsung
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Disclaimer -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#FDF9F3;border:1px solid #E8D5B0;border-radius:10px;margin-bottom:8px;">
                <tr>
                  <td style="padding:14px 18px;">
                    <div style="font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#C8963E;margin-bottom:6px;">Pernyataan Penting</div>
                    <div style="font-size:12px;color:#78716C;line-height:1.7;">
                      Email ini merupakan konfirmasi penerimaan permintaan, bukan penawaran resmi (quotation) maupun polis asuransi.
                      Dokumen simulasi bersifat indikatif dan dapat berubah setelah survei objek dan analisis risiko lebih lanjut.
                      Sebagai <strong>konsultan asuransi independen</strong>, kami tidak menerbitkan polis secara langsung.
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#071422;border-radius:0 0 16px 16px;padding:24px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-size:16px;font-weight:800;color:#FFFFFF;margin-bottom:4px;">
                      Asuransi<span style="color:#C8963E;">Jogja</span>
                    </div>
                    <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:12px;">
                      Praktisi Asuransi Independen · Yogyakarta
                    </div>
                    <div style="font-size:12px;color:rgba(255,255,255,0.55);line-height:2;">
                      📱 <a href="https://wa.me/6287781658231" style="color:#C8963E;text-decoration:none;">0877-8165-8231</a> (Rio MD)<br/>
                      ✉️ <a href="mailto:rio@asuransijogja.biz.id" style="color:#C8963E;text-decoration:none;">rio@asuransijogja.biz.id</a><br/>
                      🌐 <a href="https://asuransijogja.biz.id" style="color:#C8963E;text-decoration:none;">asuransijogja.biz.id</a>
                    </div>
                  </td>
                  <td align="right" valign="top">
                    <div style="font-size:10px;color:rgba(255,255,255,0.3);text-align:right;line-height:1.8;">
                      ID: ${sub.id}<br/>
                      ${now}<br/>
                      Dikelola oleh Resend
                    </div>
                  </td>
                </tr>
              </table>
              <div style="margin-top:16px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.08);font-size:11px;color:rgba(255,255,255,0.25);text-align:center;line-height:1.6;">
                Email ini dikirim karena Anda mengisi form SPPA di asuransijogja.biz.id.<br/>
                Jika Anda merasa menerima email ini secara tidak sengaja, abaikan saja — tidak ada tindakan yang diperlukan.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

export function buildEmailText(sub: SPPASubmission): string {
  let text = `Halo ${sub.nama},\n\n`;
  text += `Terima kasih telah menghubungi Asuransi Jogja.\n\n`;
  text += `Kami telah menerima permintaan Simulasi & Estimasi Premi ${sub.productLabel}.\n`;
  text += `ID Permintaan: ${sub.id}\n\n`;
  text += `RINGKASAN DATA:\n`;
  text += `${"─".repeat(40)}\n`;

  Object.entries(sub.fields).forEach(([key, val]) => {
    if (!val || (Array.isArray(val) && val.length === 0)) return;
    const label   = sub.fieldLabels[key] || key;
    const display = Array.isArray(val) ? val.join(", ") : String(val);
    text += `• ${label}: ${display}\n`;
  });

  text += `${"─".repeat(40)}\n\n`;
  text += `Tim kami sedang menyiapkan dokumen simulasi khusus untuk Anda.\n`;
  text += `Estimasi pengiriman: dalam 1×24 jam kerja.\n\n`;
  text += `Hubungi kami:\n`;
  text += `📱 WhatsApp: 0877-8165-8231 (Rio MD)\n`;
  text += `✉️ Email: rio@asuransijogja.biz.id\n`;
  text += `🌐 asuransijogja.biz.id\n\n`;
  text += `Asuransi Jogja — Praktisi Asuransi Independen Yogyakarta`;
  return text;
}
