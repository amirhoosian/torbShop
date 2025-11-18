"use client";

import BrandLogoTile from "./UI/BrandLogoTile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
  return (
    <div className="w-full  mt-10 mb-10">
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
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
    </div>
  );
};
