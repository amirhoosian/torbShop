import { useEffect, useState } from "react";

import type { Product } from "@/types";

import { getProduct } from "@/services/productService";

export function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    void fetchProduct();
  }, [id]);

  return { product, loading, error };
}
