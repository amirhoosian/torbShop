"use client";

import Image from "next/image";

const banners = [
  {
    id: 1,
    image: "/images/routes/home/banner-1.png",
  },
  {
    id: 2,
    image: "/images/routes/home/banner-2.png",
  },
  {
    id: 3,
    image: "/images/routes/home/banner-3.png",
  },
];

export default function ProductBoxList() {
  return (
    <div className="mt-6 max-w-full">
      {/* mobile: only first banner */}
      <div className="flex justify-center md:hidden">
        {banners[0] && (
          <div className="relative aspect-[3/1] w-full max-w-[380px] overflow-hidden rounded-2xl bg-[#eceef3] shadow-md mx-2.5">
            <Image
              fill
              sizes="(max-width: 768px) 90vw, 380px"
              alt="banner"
              className="object-cover"
              src={banners[0].image}
            />
          </div>
        )}
      </div>

      <div className="mt-6 hidden max-w-full items-stretch justify-center gap-6 md:flex">
        {banners.map((banner) => (
          <div
            className="relative aspect-[3/1] min-w-[380px] flex-1 overflow-hidden rounded-2xl bg-[#eceef3] shadow-md"
            key={banner.id}
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <Image
              fill
              sizes="(max-width: 1355px) 30vw, 360px"
              alt="nothing"
              className="object-cover"
              src={banner.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
