/**
 * src/lib/sppaStore.ts
 * Data layer untuk SPPA submissions — menggunakan Redis Cloud (koneksi TCP
 * standar via library "redis"/node-redis), sesuai integrasi resmi "Redis"
 * (Redis Cloud, oleh Redis Inc.) dari Vercel Marketplace.
 *
 * PENTING: integrasi ini BEDA dari Vercel KV / Upstash — Redis Cloud tidak
 * memakai REST API, melainkan connection string standar yang di-inject
 * sebagai env var:
 *   REDIS_URL   (format: redis://default:PASSWORD@HOST:PORT
 *                atau rediss://... jika TLS)
 *
 * Client dibuat sekali dan disimpan di variabel global agar dipakai ulang
 * antar invocation (penting di lingkungan serverless Vercel supaya tidak
 * membuka koneksi baru di setiap request).
 *
 * Install sekali di terminal project:
 *   npm install redis
 */

import { createClient, type RedisClientType } from "redis";

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

// ─── Singleton client (reuse antar invocation serverless) ────────────────────
declare global {
  // eslint-disable-next-line no-var
  var __sppaRedisClient: RedisClientType | undefined;
  // eslint-disable-next-line no-var
  var __sppaRedisConnectPromise: Promise<RedisClientType> | undefined;
}

function getRedisUrl(): string {
  const url = process.env.REDIS_URL;
  if (!url) {
    throw new Error(
      "REDIS_URL tidak di-set di environment variables. Pastikan integrasi Redis Cloud sudah di-connect ke project ini di Vercel (Storage tab), lalu redeploy."
    );
  }
  return url;
}

async function getClient(): Promise<RedisClientType> {
  if (global.__sppaRedisClient?.isOpen) {
    return global.__sppaRedisClient;
  }

  if (!global.__sppaRedisConnectPromise) {
    const client = createClient({ url: getRedisUrl() }) as RedisClientType;
    client.on("error", (err) => console.error("[sppaStore] Redis client error:", err));

    global.__sppaRedisConnectPromise = client.connect().then(() => {
      global.__sppaRedisClient = client;
      return client;
    });
  }

  return global.__sppaRedisConnectPromise;
}

// ─── Public API ────────────────────────────────────────────────────────────

export async function addSubmission(sub: SPPASubmission): Promise<void> {
  const client = await getClient();
  const score = new Date(sub.submittedAt).getTime() || Date.now();

  await client.set(itemKey(sub.id), JSON.stringify(sub));
  await client.zAdd(INDEX_KEY, [{ score, value: sub.id }]);
}

export async function getSubmissions(): Promise<SPPASubmission[]> {
  const client = await getClient();

  // Ambil id terbaru → terlama (maks 500)
  const ids = await client.zRange(INDEX_KEY, 0, 499, { REV: true });
  if (!ids || ids.length === 0) return [];

  const values = await client.mGet(ids.map(itemKey));

  return values
    .filter((v): v is string => v !== null && v !== undefined)
    .map(v => JSON.parse(v) as SPPASubmission);
}

export async function updateSubmissionStatus(
  id: string,
  status: SPPASubmission["status"]
): Promise<SPPASubmission | null> {
  const client = await getClient();

  const raw = await client.get(itemKey(id));
  if (!raw) return null;

  const sub = JSON.parse(raw) as SPPASubmission;
  sub.status = status;

  await client.set(itemKey(id), JSON.stringify(sub));
  return sub;
}
