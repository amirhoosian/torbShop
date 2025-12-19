"use client";
import Image from "next/image";
import React, { useState } from "react";

interface ProductImageProps {
  images?: string[] | null;
  alt: string;
  size?: number;
  priority?: boolean;
}

export default function ProductImage({
  images,
  alt,
  size = 300,
  priority,
}: ProductImageProps) {
  const [activeImage, setActiveImage] = useState(images?.[0] ?? null);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="mx-auto w-52 rounded-2xl border-2 border-amber-100 md:mx-0 md:w-[300px]">
        <Image
          height={size}
          width={size}
          alt={alt}
          src={activeImage ?? images[0]}
          priority={priority}
        />
      </div>
      <div className="flex w-full justify-center gap-3">
        {images.map((img) => (
          <button
            key={img}
            type="button"
            onClick={() => setActiveImage(img)}
            className={`rounded-lg border p-1 transition ${
              activeImage === img ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <Image
              height={68}
              width={68}
              alt={alt}
              className="object-contain"
              src={img}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
