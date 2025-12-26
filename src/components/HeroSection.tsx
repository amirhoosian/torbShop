"use client";

import { productsApi } from "@/hooks/useProduct";

import BannerSlider from "./sliders/BannerCard";
import HeroOfferCard from "./sliders/HeroOfferCard";

export default function HeroSection() {
  const { useList } = productsApi();
  const { data: products = [], isLoading } = useList();
  const banners = [
    { id: 1, image: "/images/products/hero-slider-1.webp" },
    { id: 2, image: "/images/products/hero-slider-2.webp" },
    { id: 3, image: "/images/products/hero-slider-3.webp" },
  ];
  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center rounded-xl border p-6">
        Loading...
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-2 md:grid-cols-[24%_76%] md:items-stretch">
      <div className="relative order-2 mx-3 flex h-full items-stretch md:order-1 md:mx-0">
        <HeroOfferCard products={products} />
      </div>

      {banners.length > 0 && (
        <div className="order-1 px-3 md:order-2 md:px-0">
          <BannerSlider banners={banners} />
        </div>
      )}
    </section>
  );
}
