"use client";

import type { Swiper as SwiperType } from "swiper";

import { useEffect, useRef, useState } from "react";
import "swiper/css"; // add extra css imports for modules you use (navigation, pagination, etc.)
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Category } from "@/types";

import CategoryCard from "../Category/CategoryCard";

export default function CategorySlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    fetch("/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [categories]);

  return (
    <div
      className="mt-7 px-2 md:px-0 flex w-full items-center justify-center relative group"
      dir="rtl"
    >
      <Swiper
        className="w-full overflow-hidden rounded-2xl"
        slidesPerView={1.2}
        spaceBetween={12}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
            centeredSlides: false,
            slidesOffsetBefore: 0,
          },
          400: {
            slidesPerView: 2.2,
            spaceBetween: 14,
            centeredSlides: false,
          },
          640: { slidesPerView: 2.2, spaceBetween: 14, centeredSlides: false },
          768: {
            slidesPerView: 4.2,
            spaceBetween: 18,
          },
          1024: { slidesPerView: 4.5, spaceBetween: 16, centeredSlides: false },
        }}
        loop
        modules={[Navigation]}
        navigation={{
          nextEl: ".cat-next",
          prevEl: ".cat-prev",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {categories.map((category) => (
          <SwiperSlide
            className="h-auto w-[140px] shrink-0 sm:w-[180px] md:w-[200px] lg:w-[220px]"
            key={category.id}
          >
            <CategoryCard image={category.image ?? ""} name={category.name} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="cat-prev absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-[8px]
                     bg-white border border-stone-200 px-4 py-1.5 opacity-0
                     pointer-events-none transition
                     group-hover:opacity-100 group-hover:pointer-events-auto"
      >
        ›
      </button>
      <button
        className="cat-next absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-[8px]
                     bg-white border border-stone-200 px-4 py-1.5 opacity-0
                     pointer-events-none transition
                     group-hover:opacity-100 group-hover:pointer-events-auto"
      >
        ‹
      </button>
    </div>
  );
}
