"use client";

import type { Swiper as SwiperType } from "swiper";

import { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import BrandLogoTile from "./UI/BrandLogoTile";

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
    <div className="group relative my-10 w-full">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
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
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {brandData.map((brand) => (
          <SwiperSlide key={brand.id}>
            <BrandLogoTile
              image={brand.image}
              link={brand.link}
              name={brand.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        className="cat-prev pointer-events-none absolute top-[50%] left-[-7px] z-10 -translate-y-1/2
                     rounded-[8px] border border-stone-200 bg-white px-4 py-1.5
                     opacity-0 transition
                     group-hover:pointer-events-auto group-hover:opacity-100"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        className="cat-next pointer-events-none absolute top-[50%] right-[-7px] z-10 -translate-y-1/2
                     rounded-[8px] border border-stone-200 bg-white px-4 py-1.5
                     opacity-0 transition
                     group-hover:pointer-events-auto group-hover:opacity-100"
      >
        ›
      </button>
    </div>
  );
};
