// components/ProductCard.jsx

import Image from "next/image";
import React from "react";
import type { ProductCardProps } from "@/types";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  discount,
}) => {
  // Helper function to format the price for display
  const formatPrice = (price: number) => price.toLocaleString("fa-IR");

  return (
    <div className=" w-[320px] p-6 border border-gray-200 rounded-xl bg-white  shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center">
      {/* 1. Product Image Area */}
      <div className="relative h-52 flex items-center justify-center mb-4">
        <Image
          src={image}
          alt={title}
          width={180} // Set fixed size for the image container
          height={180}
          // The image itself should be centered and contained
          className="object-contain"
        />
      </div>
      {/* 2. Product Name */}
      <h3 className="text-base font-medium text-gray-800 mt-2 mb-4 overflow-hidden whitespace-nowrap text-ellipsis ">
        {title}
      </h3>

      <div className="flex justify-between items-center pt-4 w-full">
        {/* Left Column: Price and Toman Label */}
        <div className="flex items-center ">
          <span className="text-sm text-gray-600 ml-2 mr-0 rotate-90 transform origin-left">
            تومان
          </span>

          {/* Current Price (Large and Bold) */}
          <p className="text-3xl font-extrabold text-gray-900 leading-none">
            {formatPrice(price)}
          </p>
        </div>

        {/* Right Column: Discount and Original Price */}
        <div className="flex flex-col ">
          {/* Discount Badge and Original Price Row */}
          {discount! > 0 && originalPrice && (
            <div className="flex items-center mb-1">
              {/* Discount Badge (The Red Oval Shape) */}
              <div
                className="flex items-center text-white rounded-full px-3 py-1 text-base font-extrabold leading-none"
                style={{ backgroundColor: "#ED1943" }}
              >
                %{discount}
              </div>

              {/* Original Price (Strikethrough) */}
              <span className="text-sm line-through text-gray-500 ml-2">
                {formatPrice(originalPrice)}
              </span>
            </div>
          )}

          {/* 4. Add to Cart Button (Bottom Right) */}
          <button
            className="p-3 rounded-xl shadow-lg hover:opacity-80 transition"
            style={{ backgroundColor: "#ED1943" }}
            aria-label={`افزودن به سبد خرید`}
          >
            {/* Shopping Cart Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
