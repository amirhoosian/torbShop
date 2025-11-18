"use client";
import Image from "next/image";

const FeaturePromoBox = () => {
  const images = ["/images/routes/home/product-slider-with-banner-laptop.png"];

  return (
    <div
      className="flex flex-col bg-[#ed1943] rounded-2xl items-center gap-1"
      style={{ padding: "20px" }}
    >
      <Image src={images[0]} alt="Promo" width={270} height={300} />
      <h3 className="text-amber-50">مجموعه محصولات </h3>
      <h2 className="text-amber-50">ارزانترین</h2>
      {/* Add other promotional content here */}
    </div>
  );
};

export default FeaturePromoBox;
