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
        className={`flex gap-4 items-stretch  w-full flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        <FeaturePromoBox />
        <div className="w-full md:w-auto md:flex-1 md:min-w-0 relative group">
          <Swiper
            slidesPerView={1}
            spaceBetween={12}
            modules={[Navigation, Navigation]}
            navigation={{
              nextEl: ".deal-next",
              prevEl: ".deal-prev",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
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
            className=" w-full"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  id={product.id}
                  image={product.image ?? ""}
                  title={product.title}
                  price={product.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="deal-next absolute left-[-10px] top-[50%] z-10 -translate-y-1/2 rounded-[8px]
                         bg-white border border-stone-200 px-4 py-1.5 opacity-0
                         pointer-events-none transition
                         group-hover:opacity-100 group-hover:pointer-events-auto"
          >
            ‹
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="deal-prev absolute right-[-10px] top-[50%] z-10 -translate-y-1/2 rounded-[8px]
                         bg-white border border-stone-200 px-4 py-1.5 opacity-0
                         pointer-events-none transition
                         group-hover:opacity-100 group-hover:pointer-events-auto"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealCarouselSection;
