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
    <div className="flex gap-6 justify-center items-stretch max-w-full mt-6">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="relative flex-1 min-w-[380px]  aspect-[3/1] rounded-2xl overflow-hidden shadow-md bg-[#eceef3]"
          style={{ display: "flex", alignItems: "stretch" }}
        >
          <Image
            fill
            sizes="(max-width: 1355px) 30vw, 360px"
            alt="nothing"
            className={"object-cover"}
            src={banner.image}
          />
        </div>
      ))}
    </div>
  );
}
