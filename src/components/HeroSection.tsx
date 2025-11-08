"use client";
import type { Swiper as SwiperCore } from "swiper";
import type { NavigationOptions } from "swiper/types";

import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Product } from "@/types";

import BannerSlider from "./sliders/BannerCard";
import ProductCard from "./sliders/ProductCard";
import "swiper/css";
import "swiper/css/navigation";

export default function HeroSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const swiperRef = useRef<SwiperCore | null>(null);
  const prevBtn = useRef<HTMLButtonElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    void fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[30%_70%]">
      <div className="relative flex h-full items-stretch">
        <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
          <button
            className="size-8 rounded-md bg-white/90 text-pink-600 shadow-sm hover:bg-gray-100"
            ref={prevBtn}
            type="button"
          >
            ‹
          </button>
          <button
            className="size-8 rounded-md bg-white/90 text-pink-600 shadow-sm hover:bg-gray-100"
            ref={nextBtn}
            type="button"
          >
            ›
          </button>
        </div>

        <Swiper
          className="overflow-hidden rounded-2xl"
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          modules={[Autoplay, Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation ??= {};
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = prevBtn.current;
            navigation.nextEl = nextBtn.current;
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTimeout(() => {
              const navigation = swiper.params.navigation as NavigationOptions;
              navigation.prevEl = prevBtn.current;
              navigation.nextEl = nextBtn.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                image={product.image ?? ""}
                price={product.price}
                title={product.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {banners.length > 0 && <BannerSlider banners={banners} />}
    </section>
  );
}
