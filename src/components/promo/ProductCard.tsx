// components/ProductCard.jsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import type { ProductCardProps } from "@/types";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  originalPrice,
  discount,
}) => {
  // Helper function to format the price for display
  const formatPriceNumber = (priceValue: number) => {
    return priceValue.toLocaleString("fa-IR");
  };

  const router = useRouter();

  const goToProduct = () => {
    if (id) {
      router.push(`/product/${id}`);
    }
  };

  return (
    <div
      tabIndex={0}
      onClick={goToProduct}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          goToProduct();
        }
      }}
      role="button"
      className="w-fw-full flex cursor-pointer
 flex-col items-center rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-300 hover:shadow-md md:h-[380px] md:w-[250px] md:p-6"
    >
      {/* 1. Product Image Area */}
      <div className="relative mb-4 flex h-52 items-center justify-center">
        <Image
          height={100}
          width={100} // Set fixed size for the image container
          alt={title}
          // The image itself should be centered and contained
          className="object-contain sm:w-[50px] md:w-auto"
          src={image}
        />
      </div>
      {/* 2. Product Name */}
      <h3 className="mt-2 mb-4 overflow-hidden text-base font-medium text-ellipsis whitespace-pre-wrap text-gray-800 sm:mx-1 sm:items-center">
        {title}
      </h3>

      <div className="relative flex w-full items-center justify-between pt-4">
        {/* Left Column: Price and Toman Label */}
        <div className="flex items-center">
          <span className="mr-0 ml-2 origin-left rotate-90 transform text-sm text-gray-600">
            تومان
          </span>
          {discount != null && discount > 0 && originalPrice != null && (
            <div className="absolute -top-0.5 left-0 mb-1 flex items-center">
              {/* Discount Badge (The Red Oval Shape) */}
              <div
                className="flex items-center rounded-full px-3 py-1 text-base leading-none font-extrabold text-white"
                style={{ backgroundColor: "#ED1943" }}
              >
                %{discount}
              </div>

              {/* Original Price (Strikethrough) */}
              <span className="ml-2 text-sm text-gray-500 line-through">
                {formatPriceNumber(originalPrice)}
              </span>
            </div>
          )}
          {/* Current Price (Large and Bold) */}
          <p className="text-3xl leading-none font-extrabold text-gray-900">
            {formatPriceNumber(price)}
          </p>
        </div>

        {/* Right Column: Discount and Original Price */}
        <div className="flex flex-col">
          {/* 4. Add to Cart Button (Bottom Right) */}
          <button
            aria-label="افزودن به سبد خرید"
            className="rounded-xl p-3 shadow-lg transition hover:opacity-80"
            style={{ backgroundColor: "#ED1943" }}
            type="button"
          >
            {/* Shopping Cart Icon SVG */}
            <svg
              height="24"
              width="24"
              className="text-white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" x2="21" y1="6" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
