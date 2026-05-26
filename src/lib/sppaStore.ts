/**
 * src/lib/sppaStore.ts
 * Data layer untuk SPPA submissions — menggunakan Supabase.
 *
 * ENV yang dibutuhkan di Vercel:
 *   NEXT_PUBLIC_SUPABASE_URL   → Supabase Dashboard → Settings → API → Project URL
 *   SUPABASE_SERVICE_ROLE_KEY  → Supabase Dashboard → Settings → API → service_role key
 */

export interface SPPASubmission {
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

// ─── DB row shape (snake_case sesuai Supabase) ────────────────────────────────
interface DBRow {
  id: string;
  product: string;
  product_label: string;
  nama: string;
  whatsapp: string;
  email: string | null;
  fields: Record<string, string | string[]>;
  field_labels: Record<string, string>;
  submitted_at: string;
  status: "baru" | "diproses" | "selesai";
}

function rowToSubmission(row: DBRow): SPPASubmission {
  return {
    id: row.id,
    product: row.product,
    productLabel: row.product_label,
    nama: row.nama,
    whatsapp: row.whatsapp,
    email: row.email,
    fields: row.fields,
    fieldLabels: row.field_labels,
    submittedAt: row.submitted_at,
    status: row.status,
  };
}

// ─── Supabase REST helper (tanpa install SDK) ─────────────────────────────────
async function sbFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key     = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!baseUrl) throw new Error("NEXT_PUBLIC_SUPABASE_URL tidak di-set di environment variables");
  if (!key)     throw new Error("SUPABASE_SERVICE_ROLE_KEY tidak di-set di environment variables");

  return fetch(`${baseUrl}/rest/v1${path}`, {
    ...options,
    headers: {
      "Content-Type":  "application/json",
      "apikey":        key,
      "Authorization": `Bearer ${key}`,
      "Prefer":        "return=representation",
      ...(options.headers ?? {}),
    },
  });
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function addSubmission(sub: SPPASubmission): Promise<void> {
  const row: DBRow = {
    id:           sub.id,
    product:      sub.product,
    product_label: sub.productLabel,
    nama:         sub.nama,
    whatsapp:     sub.whatsapp,
    email:        sub.email,
    fields:       sub.fields,
    field_labels: sub.fieldLabels,
    submitted_at: sub.submittedAt,
    status:       sub.status,
  };

  const res = await sbFetch("/sppa_submissions", {
    method: "POST",
    body:   JSON.stringify(row),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Supabase insert gagal: ${errText}`);
  }
}

export async function getSubmissions(): Promise<SPPASubmission[]> {
  const res = await sbFetch("/sppa_submissions?order=submitted_at.desc&limit=500");

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Supabase select gagal: ${errText}`);
  }

  const rows: DBRow[] = await res.json();
  return rows.map(rowToSubmission);
}

export async function updateSubmissionStatus(
  id: string,
  status: SPPASubmission["status"]
): Promise<SPPASubmission | null> {
  const res = await sbFetch(
    `/sppa_submissions?id=eq.${encodeURIComponent(id)}`,
    {
      method: "PATCH",
      body:   JSON.stringify({ status }),
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Supabase update gagal: ${errText}`);
  }

  const rows: DBRow[] = await res.json();
  return rows.length > 0 ? rowToSubmission(rows[0]) : null;
}
