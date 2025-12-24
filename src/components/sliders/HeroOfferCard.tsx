"use client";

import type { Swiper as SwiperCore } from "swiper";

import Image from "next/image";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Product } from "@/types";

import "swiper/css";

import CountdownTimer from "../UI/CountdownTimer";

interface HeroOfferSliderCardProps {
  products: Product[];
}

export default function HeroOfferSliderCard({
  products,
}: HeroOfferSliderCardProps) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const prevBtn = useRef<HTMLButtonElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-rose-600 p-5 text-white md:p-0">
      {/* تایمر */}

      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <button
          className="flex size-6 cursor-pointer items-center justify-center rounded-md bg-white text-red-600 hover:bg-gray-100 md:text-[18px]"
          ref={prevBtn}
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            height="24"
            width="24"
            aria-hidden="true"
            className="lucide lucide-chevron-left size-4.5 stroke-gray-600 group-hover/navigation_btn:stroke-gray-900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <button
          className="flex size-6 cursor-pointer items-center justify-center rounded-md bg-white text-red-600 hover:bg-gray-100 md:text-[18px]"
          ref={nextBtn}
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            height="24"
            width="24"
            aria-hidden="true"
            className="lucide lucide-chevron-right size-4.5 stroke-gray-600 group-hover/navigation_btn:stroke-gray-900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>

      <div className="absolute top-3 right-3 z-20 rounded-lg px-3 py-1">
        <CountdownTimer />
      </div>

      <Swiper
        className="relative h-full"
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex h-full flex-col items-center justify-between">
              {/* تصویر محصول */}
              <div
                className="mt-[20%] flex size-40 items-center justify-center bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('/images/routes/home/hero-offer-slider-wave-bg.svg')",
                }}
              >
                <Image
                  height={0}
                  sizes="100vw"
                  width={0}
                  alt={product.title}
                  className="z-10 h-auto w-48 object-contain drop-shadow-2xl"
                  src={product.image ?? ""}
                  priority
                />
              </div>

              {/* عنوان */}
              <div className="my-auto px-4 text-center">
                <p className="text-sm font-medium">{product.title}</p>
              </div>

              {/* قیمت */}
              <div className="mt-4 w-full px-3 md:mb-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-white px-2 py-1 text-sm font-bold text-pink-600">
                    12%
                  </span>
                  <div className="text-xs line-through opacity-80">
                    17,300,000
                  </div>
                </div>
                <div className="text-lg font-bold">
                  {product.price.toLocaleString()} تومان
                </div>
              </div>

              {/* دکمه سبد خرید */}
              <button
                className="absolute right-4 bottom-4 cursor-pointer rounded-lg bg-white p-2 text-pink-600 hover:bg-gray-100"
                type="button"
              >
                <svg
                  height="20"
                  width="20"
                  aria-hidden="true"
                  className="lucide lucide-shopping-bag stroke-red"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
