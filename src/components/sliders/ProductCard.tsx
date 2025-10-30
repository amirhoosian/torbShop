"use client";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="relative flex h-full flex-col items-center justify-between rounded-2xl bg-[#E91E63] p-5 text-white">
      <div
        className="relative top-[20%] flex size-40 items-center justify-center rounded-full bg-white bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/routes/home/hero-offer-slider-wave-bg.svg')",
        }}
      >
        <Image
          height={0}
          sizes="100vw"
          width={0}
          alt={title}
          className="z-10 h-auto w-48 object-contain drop-shadow-2xl"
          src={image}
          priority
        />
      </div>

      <div className="mt-4 flex w-full items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-white px-2 py-1 text-sm font-bold text-pink-600">
            12%
          </span>
          <div className="text-xs line-through opacity-80">17,300,000</div>
        </div>
        <div className="text-lg font-bold">{price.toLocaleString()} تومان</div>
      </div>

      {/* آیکن سبد خرید */}
      <button
        className="absolute right-4 bottom-4 rounded-lg bg-white p-2 text-pink-600 shadow-md hover:bg-gray-100"
        type="button"
      >
        🛒
      </button>
    </div>
  );
}
