"use client";

import { useProduct } from "@/hooks/useProduct";

import BannerSlider from "./sliders/BannerCard";
import HeroOfferCard from "./sliders/HeroOfferCard";

export default function HeroSection() {
  const productApi = useProduct();

  const banners = [
    {
      id: 1,
      image: "/images/products/hero-slider-1.webp",
    },
    {
      id: 2,
      image: "/images/products/hero-slider-2.webp",
    },
    {
      id: 3,
      image: "/images/products/hero-slider-3.webp",
    },
  ];

  const { data: products, isLoding } = productApi.AllProduct();

  if (isLoding) return <div>Loading...</div>;
  if (!products) return null;

  return (
    <section className="grid grid-cols-1 gap-2 md:grid-cols-[24%_76%] md:items-stretch">
      <div className="relative order-2 mx-3 flex h-full items-stretch md:order-1 md:mx-0">
        <HeroOfferCard products={products} />
      </div>

      {banners.length > 0 && (
        <div className="order-1 px-3 md:order-2 md:px-0">
          {" "}
          <BannerSlider banners={banners} />{" "}
        </div>
      )}
    </section>
  );
}
