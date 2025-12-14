"use client";

import BrandLogoTile from "./UI/BrandLogoTile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const brandData = [
  {
    id: 1,
    name: "Apple",
    image: "/images/routes/home/brand-slider-apple.png",
    link: "/brands/apple",
  },
  {
    id: 2,
    name: "Snowa",
    image: "/images/routes/home/brand-slider-snowa.png",
    link: "/brands/snowa",
  },
  {
    id: 3,
    name: "Xiaomi",
    image: "/images/routes/home/brand-slider-xiaomi.png",
    link: "/brands/xiaomi",
  },
  {
    id: 4,
    name: "Apple",
    image: "/images/routes/home/brand-slider-apple.png",
    link: "/brands/apple",
  },
  {
    id: 5,
    name: "Snowa",
    image: "/images/routes/home/brand-slider-snowa.png",
    link: "/brands/snowa",
  },
  {
    id: 6,
    name: "Xiaomi",
    image: "/images/routes/home/brand-slider-xiaomi.png",
    link: "/brands/xiaomi",
  },
];

export const TrustAndServiceBlock = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full  mt-10 mb-10 relative group">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          300: {
            slidesPerView: 1.2,
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
      >
        {brandData.map((brand) => (
          <SwiperSlide key={brand.id}>
            <BrandLogoTile
              name={brand.name}
              image={brand.image}
              link={brand.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="cat-prev absolute left-[-7px] top-[50%] z-10 -translate-y-1/2 rounded-[8px]
                     bg-white border border-stone-200 px-4 py-1.5 opacity-0
                     pointer-events-none transition
                     group-hover:opacity-100 group-hover:pointer-events-auto"
      >
        ‹
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="cat-next absolute right-[-7px] top-[50%] z-10 -translate-y-1/2 rounded-[8px]
                     bg-white border border-stone-200 px-4 py-1.5 opacity-0
                     pointer-events-none transition
                     group-hover:opacity-100 group-hover:pointer-events-auto"
      >
        ›
      </button>
    </div>
  );
};
