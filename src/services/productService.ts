import type { Product } from "@/types";

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`/api/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

// export async function getAllProducts() {
//   console.log("");
// }

// export async function createProduct(data) {
//   console.log("");
// }
