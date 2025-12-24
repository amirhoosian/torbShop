"use client";

import type { Swiper as SwiperType } from "swiper";

import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { DealCarouselSectionProps, Product } from "@/types";

import { fetcher } from "@/lib/fetcher";

import FeaturePromoBox from "./FeaturePromoBox";
import ProductCard from "./ProductCard";

const DealCarouselSection = ({ reverse = false }: DealCarouselSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetcher("/api/products");
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    void getProducts();
  }, []);

  return (
    <div className="mt-12 w-full px-4 md:px-0">
      <div
        className={`flex w-full flex-col items-stretch gap-4 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        <FeaturePromoBox />
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  id={product.id}
                  image={product.image ?? ""}
                  price={product.price}
                  title={product.title}
                />
              </SwiperSlide>
            ))}
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
      </div>
    </div>
  );
};

export default DealCarouselSection;
