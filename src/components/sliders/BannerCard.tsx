"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import type { Banner } from "@/types";

export default function BannerSlider({ banners }: { banners: Banner[] }) {
  const swiperRef = useRef<any>(null);
  const [active, setActive] = useState(0);

  // وقتی اسلاید عوض میشه، index فعال رو تنظیم کن
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const updateActive = () => setActive(swiper.realIndex);
    swiper.on("slideChange", updateActive);
    return () => swiper.off("slideChange", updateActive);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl select-none">
      {/* === Swiper === */}
      <Swiper
        className="rounded-2xl"
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {banners.map((b, i) => (
          <SwiperSlide key={b.id}>
            <div className="relative aspect-[2/1] overflow-hidden rounded-2xl sm:aspect-[2.5/1]">
              <Image
                fill
                alt={`banner-${b.id}`}
                className="object-cover"
                src={b.image}
                priority={i === 0}
              />
              {/* متن روی بنر (اختیاری) */}
              {b.title && (
                <div className="absolute bottom-6 left-6 rounded-md bg-black/40 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm md:text-base">
                  {b.title}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* === کنترلها === */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-5">
        {/* دکمه قبلی */}
        <button
          aria-label="قبلی"
          className="flex size-9 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-gray-200"
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          ‹
        </button>

        {/* نقاط (pagination) */}
        <div className="flex gap-2">
          {banners.map((_, i) => (
            <button
              aria-label={`رفتن به اسلاید ${i + 1}`}
              key={_.id}
              type="button"
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={`size-3 rounded-full transition-all duration-300 ${
                i === active
                  ? "scale-110 bg-black"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* دکمه بعدی */}
        <button
          aria-label="بعدی"
          className="flex size-9 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-gray-200"
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          ›
        </button>
      </div>
    </div>
  );
}
