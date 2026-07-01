/**
 * src/lib/sppaStore.ts
 * Data layer untuk SPPA submissions — menggunakan Redis (REST API).
 *
 * Kompatibel dengan DUA jenis integrasi (pilih salah satu di Vercel):
 *
 *   1) Vercel KV (Marketplace → Storage → KV, atau Upstash for Redis via
 *      Vercel Marketplace) → env var otomatis ter-inject:
 *        KV_REST_API_URL
 *        KV_REST_API_TOKEN
 *
 *   2) Upstash Redis langsung (buat database di upstash.com lalu tempel
 *      manual di Vercel → Settings → Environment Variables):
 *        UPSTASH_REDIS_REST_URL
 *        UPSTASH_REDIS_REST_TOKEN
 *
 * Tidak perlu install SDK — pakai REST API single-command Upstash/Vercel KV
 * (keduanya memakai protokol yang sama), konsisten dengan pola sbFetch yang
 * dipakai sebelumnya untuk Supabase.
 *
 * Struktur data:
 *   - Setiap submission disimpan sebagai 1 JSON string di key: sppa:{id}
 *   - Urutan waktu disimpan di sorted set "sppa:index"
 *     (score = timestamp submittedAt dalam ms, member = id)
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

const INDEX_KEY = "sppa:index";
const itemKey = (id: string) => `sppa:${id}`;

// ─── Redis REST helper (format single-command Upstash/Vercel KV) ─────────────
// POST {baseUrl} body: ["CMD", "arg1", "arg2", ...] → { result: ... }
async function redisCmd<T = unknown>(args: (string | number)[]): Promise<T> {
  const baseUrl =
    process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!baseUrl) throw new Error("KV_REST_API_URL / UPSTASH_REDIS_REST_URL tidak di-set di environment variables");
  if (!token)   throw new Error("KV_REST_API_TOKEN / UPSTASH_REDIS_REST_TOKEN tidak di-set di environment variables");

  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(args.map(String)),
  });

  const json = await res.json() as { result?: T; error?: string };

  if (!res.ok || json.error) {
    throw new Error(`Redis command gagal [${args[0]}]: ${json.error ?? res.statusText}`);
  }

  return json.result as T;
}

// ─── Public API (signature tetap sama — tidak perlu ubah route.ts) ───────────

export async function addSubmission(sub: SPPASubmission): Promise<void> {
  const score = new Date(sub.submittedAt).getTime() || Date.now();

  // Simpan data lengkap
  await redisCmd(["SET", itemKey(sub.id), JSON.stringify(sub)]);
  // Tambahkan ke index terurut waktu
  await redisCmd(["ZADD", INDEX_KEY, score, sub.id]);
}

export async function getSubmissions(): Promise<SPPASubmission[]> {
  // Ambil id terbaru → terlama (maks 500)
  const ids = await redisCmd<string[]>(["ZRANGE", INDEX_KEY, "0", "499", "REV"]);
  if (!ids || ids.length === 0) return [];

  const values = await redisCmd<(string | null)[]>(["MGET", ...ids.map(itemKey)]);

  return values
    .filter((v): v is string => v !== null && v !== undefined)
    .map(v => JSON.parse(v) as SPPASubmission);
}

export async function updateSubmissionStatus(
  id: string,
  status: SPPASubmission["status"]
): Promise<SPPASubmission | null> {
  const raw = await redisCmd<string | null>(["GET", itemKey(id)]);
  if (!raw) return null;

  const sub = JSON.parse(raw) as SPPASubmission;
  sub.status = status;

  await redisCmd(["SET", itemKey(id), JSON.stringify(sub)]);
  return sub;
}
