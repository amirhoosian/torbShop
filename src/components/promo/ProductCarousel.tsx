"use client";

import type { Swiper as SwiperType } from "swiper";

import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Product } from "@/types";

import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="group relative w-full md:w-auto md:min-w-0 md:flex-1">
      <Swiper
        className="w-full"
        slidesPerView={1}
        spaceBetween={12}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Navigation]}
        navigation={{
          nextEl: ".deal-next",
          prevEl: ".deal-prev",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {products.map((product) => {
          const discount = product.id ? (product.id % 3 === 0 ? 20 : 0) : 0;
          const originalPrice =
            discount > 0
              ? Math.round(product.price / (1 - discount / 100))
              : undefined;
          return (
            <SwiperSlide key={product.id}>
              <ProductCard
                id={product.id}
                image={product.image ?? ""}
                price={product.price}
                title={product.title}
                discount={discount}
                originalPrice={originalPrice}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        className="deal-next pointer-events-none absolute top-[50%] left-2.5 z-10 -translate-y-1/2
                   rounded-lg border border-stone-200 bg-white px-4 py-1.5
                   opacity-0 transition
                   group-hover:pointer-events-auto group-hover:opacity-100"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        className="deal-prev pointer-events-none absolute top-[50%] right-[-10px] z-10 -translate-y-1/2
                   rounded-lg border border-stone-200 bg-white px-4 py-1.5
                   opacity-0 transition
                   group-hover:pointer-events-auto group-hover:opacity-100"
      >
        ›
      </button>
    </div>
  );
};

export default ProductCarousel;
