import { CLUSTERS } from "@/lib/data";
import { getProdukImages } from "@/lib/product-images";
import ProdukClient from "./ProdukClient";

// Server component tipis: mengecek foto produk yang ada (saat build), lalu
// menyerahkannya ke ProdukClient yang berisi tab interaktif seperti sebelumnya.
export default function Produk() {
  return <ProdukClient images={getProdukImages(CLUSTERS)} />;
}
