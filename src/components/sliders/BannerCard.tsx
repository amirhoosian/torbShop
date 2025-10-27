"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";

interface Banner {
  id: number;
  image: string;
}

function BannerCard({ image }: Banner) {
  return (
    <div className="relative rounded-xl  flex items-center justify-center h-[25rem]">
      <Image
        src={image}
        alt={"banner"}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

export default function BannerSlider({ banners }: { banners: Banner[] }) {
  const paginationRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        onSwiper={(swiper) => {
          if (
            paginationRef.current &&
            swiper.params.pagination &&
            typeof swiper.params.pagination !== "boolean"
          ) {
            swiper.params.pagination.el = paginationRef.current;
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          }
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => swiper.pagination.update()}
        loop
        slidesPerView={1}
        className="rounded-xl overflow-hidden"
      >
        {banners.map((b) => (
          <SwiperSlide key={b.id}>
            <BannerCard {...b} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* کنترلهای پایین اسلایدر */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-20">
        {/* دکمه قبلی */}
        <button className="custom-prev w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-all">
          ‹
        </button>

        {/* نقاط */}
        <div
          ref={paginationRef}
          className="swiper-pagination flex items-center justify-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        ></div>

        {/* دکمه بعدی */}
        <button className="custom-next w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-all">
          ›
        </button>
      </div>
    </div>
  );
}
