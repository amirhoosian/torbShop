"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { ReactNode, useEffect, useRef, useId } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";

interface BaseSliderProps {
  children: ReactNode[];
  slidesPerView?: number;
  direction?: "horizontal" | "vertical";
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean;
}

export default function BaseSlider({
  children,
  slidesPerView = 1,
  direction = "horizontal",
  spaceBetween = 20,
  loop = true,
  autoplay = false,
}: BaseSliderProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const uniqueId = useId();
  useEffect(() => {
    // بعد از اینکه DOM کامل رندر شد، Swiper رو force update کن
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.pagination.init();
      swiperRef.current.swiper.pagination.render();
      swiperRef.current.swiper.pagination.update();
    }
  }, []);

  return (
    <div className="w-full relative">
      <Swiper
        ref={swiperRef}
        autoplay={autoplay ? { delay: 3000 } : false}
        slidesPerView={slidesPerView}
        direction={direction}
        spaceBetween={spaceBetween}
        loop={loop}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        className="!w-full !h-auto"
      >
        {children.map((child, index) => (
          <SwiperSlide className="w-[90%] md:w-[95%] " key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="custom-prev${uniqueId} absolute bottom-0   left-[calc(50%-80px)] z-20 w-8 h-8 flex items-center justify-center 
        bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-100 transition-all"
      >
        <span className="text-lg font-bold">‹</span>
      </button>

      <button
        className="custom-next${uniqueId} absolute bottom-0 right-[calc(50%-80px)] z-20 w-8 h-8 flex items-center justify-center 
        bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-100 transition-all"
      >
        <span className="text-lg font-bold">›</span>
      </button>
      <div className="swiper-pagination${uniqueId} absolute bottom-0 left-1/2 -translate-x-1/2 z-10"></div>
    </div>
  );
}
