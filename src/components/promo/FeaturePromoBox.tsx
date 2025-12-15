"use client";
import Image from "next/image";

const FeaturePromoBox = () => {
  const images = ["/images/routes/home/product-slider-with-banner-laptop.png"];

  return (
    <div className="flex p-3 md:p-5 flex-row md:flex-col w-[275px] md:w-auto bg-[#ed1943] rounded-2xl items-center gap-1  md:h-[380px]">
      <div className="flex flex-col items-center md:items-start gap-1 md:gap-3 order-1 md:order-2">
        <h3 className="text-amber-50">مجموعه محصولات </h3>
        <h2 className="text-amber-50">ارزانترین</h2>
      </div>
      <Image
        src={images[0]}
        alt="Promo"
        width={270}
        height={300}
        className="h-auto object-contain w-[120px] sm:w-[150px] md:w-[180px] order-2 md:order-1"
      />
    </div>
  );
};

export default FeaturePromoBox;
