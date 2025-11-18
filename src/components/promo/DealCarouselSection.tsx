"use client";
import React, { useEffect, useState } from "react";
import FeaturePromoBox from "./FeaturePromoBox";
import ProductCard from "./ProductCard";
import { fetcher } from "@/lib/fetcher";
import type { Product } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import type { DealCarouselSectionProps } from "@/types";
const DealCarouselSection = ({ reverse = false }: DealCarouselSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetcher("/api/products");
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className=" mt-12">
      <div
        className={`flex gap-4 items-center w-full ${reverse ? "flex-row-reverse" : "flex-row"}`}
      >
        <FeaturePromoBox />
        <div className="flex-1 min-w-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
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
            modules={[Navigation]}
            className=" w-full"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  image={product.image || ""}
                  title={product.title}
                  price={product.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DealCarouselSection;
