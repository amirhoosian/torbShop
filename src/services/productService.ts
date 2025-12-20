import type { Product } from "@/types";

import { BASE_URL } from "@/utils/constants";

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/api/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

// export async function getAllProducts() {
//   console.log("");
// }

// export async function createProduct(data) {
//   console.log("");
// }
