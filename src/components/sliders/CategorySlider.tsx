"use client";

import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // add extra css imports for modules you use (navigation, pagination, etc.)
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import type { Category } from "@/types";

import CategoryCard from "../Category/CategoryCard";

export default function CategorySlider() {
  const swiperRef = useRef(null);
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
    <div className="w-full flex justify-center items-center mt-7">
      <Swiper
        className="w-full rounded-2xl overflow-hidden"
        slidesPerView={5}
        spaceBetween={10}
        loop
        modules={[Navigation]}
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.id}
            className="w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] shrink-0 h-auto"
          >
            <CategoryCard image={category.image ?? ""} name={category.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
