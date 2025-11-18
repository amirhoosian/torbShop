"use client";
import ProductCard from "./ProductCard";
import products from "@/data/products.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// Ensure ProductCard is imported correctly
// Ensure your product data array is imported or fetched here
const bestSellingProducts = products.slice(0, 6).map((p) => ({
  ...p,
  originalPrice: p.price * 1.2,
  discount: "10%",
}));

export default function ProductCarouselSection() {
  return (
    // 1. Outer Container: Sets max width and centers the section
    <div className="mx-auto w-full mt-12 px-4">
      {/* 2. Header Row: Title ("پرفروش ترین محصولات") and "View All" link */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
        {/* Left Side (RTL): "View All" link */}
        <a
          href="/products/bestsellers"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium transition flex items-center gap-1"
        >
          مشاهده همه
          {/* Optional: Add a small arrow icon here */}
        </a>

        {/* Right Side (RTL): Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          پرفروش ترین محصولات
        </h2>
      </div>

      {/* 3. Product Grid/Row */}
      <Swiper
        modules={[Navigation]}
        navigation
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
        className="pb-4"
      >
        {bestSellingProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
