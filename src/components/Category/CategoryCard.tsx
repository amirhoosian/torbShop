"use client";

import Image from "next/image";

import type { CategoryCardProps } from "@/types";

export default function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <div
      dir="ltr"
      className="flex cursor-pointer items-start justify-end rounded-2xl border bg-white p-3 transition-all hover:-translate-y-1"
    >
      <div className="flex flex-col items-start justify-center mt-2">
        <h3 className="text-sm font-bold text-gray-800">{name}</h3>
      </div>

      <div className="relative mx-1 size-16 md:mx-0">
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
