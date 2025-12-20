"use client";
import Image from "next/image";
import React, { useState } from "react";

interface ProductImageItem {
  id: string;
  src: string;
}

interface ProductImageProps {
  images: ProductImageItem[];
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
  const [activeImage, setActiveImage] = useState(images[0].src);

  return (
    <div className="flex flex-col gap-5">
      <div className="mx-auto w-52 rounded-2xl border-2 border-amber-100 md:mx-0 md:w-[380px]">
        <Image
          height={size}
          width={size}
          alt={alt}
          src={activeImage}
          priority={priority}
        />
      </div>
      <div className="flex w-full justify-center gap-3">
        {images.map((img) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActiveImage(img.src)}
            className={`rounded-lg border p-1 transition ${
              activeImage === img.src ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <Image
              height={78}
              width={78}
              alt={alt}
              className="object-contain"
              src={img.src}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
