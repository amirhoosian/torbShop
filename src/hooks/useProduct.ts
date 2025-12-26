"use client";

import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/lib/queryKeys";
import { getAllProducts, getProduct } from "@/services/productService";

export function productsApi() {
  return {
    useList: () =>
      useQuery({
        queryKey: queryKeys.products.all,
        queryFn: getAllProducts,
      }),

    useDetail: (id: number | string) =>
      useQuery({
        queryKey: queryKeys.products.detail(id),
        queryFn: () => getProduct(id),
        enabled: !!id,
      }),
  };
}
