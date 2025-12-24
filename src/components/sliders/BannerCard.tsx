"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Banner } from "@/types";

export default function BannerSlider({ banners }: { banners: Banner[] }) {
  const swiperRef = useRef<any>(null);
  const [active, setActive] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const updateActive = () => setActive(swiper.realIndex);
    swiper.on("slideChange", updateActive);
    return () => swiper.off("slideChange", updateActive);
  }, []);

  return (
    <div className="relative w-full cursor-pointer overflow-hidden rounded-2xl select-none md:px-3.5">
      {/* === Swiper === */}
      <Swiper
        className="w-full"
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".banner-slider__next",
          prevEl: ".banner-slider__prev",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {banners.map((b, i) => (
          <SwiperSlide key={b.id}>
            <div
              className="relative aspect-[2/1] overflow-hidden rounded-2xl sm:aspect-[2.5/1]"
              tabIndex={0}
              onClick={() => router.push("/explore")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push("/explore");
                }
              }}
              role="button"
            >
              <Image
                fill
                alt={`banner-${b.id}`}
                className="object-cover md:object-center"
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
          type="button"
          className="banner-slider__next item-center flex size-6 justify-center rounded-[8px]
                     border border-stone-200 bg-white px-4"
        >
          ‹
        </button>
        {/* نقاط (pagination) */}
        <div className="flex gap-2">
          {banners.map((banner, i) => {
            const isActive = i === active;

            return (
              <div
                key={banner.id}
                className={`
          relative h-2 overflow-hidden bg-gray-400 transition-all duration-300
          ${isActive ? "w-7 rounded-2xl" : "w-3.5 rounded-full"}
        `}
              >
                {i === active && (
                  <div className="absolute top-0 left-0 h-full w-0 animate-myprogress bg-white" />
                )}
              </div>
            );
          })}
        </div>

        {/* دکمه بعدی */}

        <button
          type="button"
          className="banner-slider__prev item-center flex size-6 justify-center rounded-md
                     border border-stone-200 bg-white px-4"
        >
          ›
        </button>
      </div>
    </div>
  );
}
