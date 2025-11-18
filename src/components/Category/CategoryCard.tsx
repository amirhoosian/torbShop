"use client";

import Image from "next/image";

import type { CategoryCardProps } from "@/types";

export default function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <div className="flex items-center justify-between  rounded-2xl bg-white p-3 shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
      <div className="flex flex-col items-start justify-center">
        <h3 className="text-sm font-bold text-gray-800">{name}</h3>
      </div>

      <div className="w-16 h-16 relative ">
        <Image
          fill
          sizes="(max-width: 768px) 64px, 96px"
          alt={name}
          className="object-contain"
          src={image}
        />
      </div>
    </div>
  );
}
