// components/BrandLogoTile.jsx

import { BrandLogoTileProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandLogoTile: React.FC<BrandLogoTileProps> = ({ name, image, link }) => {
  return (
    <Link
      href={link}
      className="flex flex-col justify-between w-full h-full p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
      // Set an explicit size for the card wrapper if needed (e.g., w-[150px] h-[180px])
    >
      {/* 1. Brand Logo Area (Top Section) */}
      <div className="relative w-full h-20 mb-3 flex items-center justify-center">
        <Image
          src={image}
          alt={`لوگوی ${name}`}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* 2. Brand Name and Navigation (Bottom Section) */}
      {/* Use flex to push content to the opposite sides */}
      <div className="flex justify-between items-center w-full mt-4">
        <div className="flex items-center gap-1 text-gray-700">
          <span className="text-xl leading-none">{"<"}</span>
          <span className="text-lg font-medium">{name.toLowerCase()}</span>
        </div>

        <div className="text-right flex flex-col items-end">
          <p className="text-sm text-gray-500 leading-none">محصولات</p>
          <h3 className="text-lg font-semibold text-gray-900 leading-none">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default BrandLogoTile;
