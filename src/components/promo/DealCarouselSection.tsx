"use client";

import type { DealCarouselSectionProps } from "@/types";

import { productsApi } from "@/hooks/useProduct";

import FeaturePromoBox from "./FeaturePromoBox";
import ProductCarousel from "./ProductCarousel";

const DealCarouselSection = ({ reverse = false }: DealCarouselSectionProps) => {
  const { useList } = productsApi();
  const { data: products = [], isLoading, isError } = useList();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>خطا در دریافت محصولات</p>;

  return (
    <div className="mt-12 w-full px-4 md:px-0">
      <div
        className={`flex w-full flex-col items-stretch gap-4 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        <FeaturePromoBox />
        <ProductCarousel products={products} />
      </div>
    </div>
  );
};

export default DealCarouselSection;
