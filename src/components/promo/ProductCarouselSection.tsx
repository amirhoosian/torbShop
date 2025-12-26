"use client";
import type { Swiper as SwiperType } from "swiper";

import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import products from "@/data/products.json";

import ProductCard from "./ProductCard";

// Ensure ProductCard is imported correctly
// Ensure your product data array is imported or fetched here
const bestSellingProducts = products.slice(0, 6).map((p) => ({
  ...p,
  originalPrice: p.price * 1.2,
  discount: 60,
}));

export default function ProductCarouselSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    // 1. Outer Container: Sets max width and centers the section
    <div className="group relative mx-auto mt-12 w-full px-4">
      {/* 2. Header Row: Title ("پرفروش ترین محصولات") and "View All" link */}
      <div className="mb-6 flex w-full items-center justify-between border-b border-gray-200 pb-2">
        {/* Left Side (RTL): "View All" link */}
        <a
          className="flex items-center gap-1 text-sm font-medium text-gray-400 transition hover:text-red-400"
          href="/products/bestsellers"
        >
          مشاهده همه
          {/* Optional: Add a small arrow icon here */}
        </a>

        {/* Right Side (RTL): Title */}
        <h2 className="text-[15px] text-gray-500 md:text-[18px]">
          پرفروش ترین محصولات
        </h2>
      </div>

      {/* 3. Product Grid/Row */}
      <Swiper
        className="pb-4"
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: ".best-next",
          prevEl: ".best-prev",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {bestSellingProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              discount={product.discount}
              originalPrice={product.originalPrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className="best-prev pointer-events-none absolute top-[50%] left-[-7px] z-10 -translate-y-1/2
                     rounded-[8px] border border-stone-200 bg-white px-4 py-1.5
                     opacity-0 transition
                     group-hover:pointer-events-auto group-hover:opacity-100"
      >
        ‹
      </button>
      <button
        type="button"
        className="best-next pointer-events-none absolute top-[50%] right-[-7px] z-10 -translate-y-1/2
                     rounded-[8px] border border-stone-200 bg-white px-4 py-1.5
                     opacity-0 transition
                     group-hover:pointer-events-auto group-hover:opacity-100"
      >
        ›
      </button>
    </div>
  );
}
