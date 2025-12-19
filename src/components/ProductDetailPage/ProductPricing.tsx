import React from "react";

interface ProductPricingProps {
  price: number;
  stock?: number;
  discountPercent?: number;
}

const ProductPricing: React.FC<ProductPricingProps> = ({
  price,
  stock = 40,
  discountPercent,
}) => {
  const hasDiscount =
    typeof discountPercent === "number" && discountPercent > 0;

  const discountPrice = hasDiscount
    ? Math.round(price * (1 - discountPercent / 100))
    : null;

  return (
    <div className="mx-auto flex w-full flex-col gap-4 rounded-2xl border-2 border-stone-300 bg-white p-5 md:mx-0 md:w-[450px] md:gap-1 md:px-5 md:py-3">
      {hasDiscount && (
        <div className="w-max rounded-lg bg-pink-500 px-3 py-1 text-sm text-white">
          ٪{discountPercent}
        </div>
      )}

      <div className="space-y-1 text-sm">
        {discountPrice ? (
          <>
            <p className="text-gray-500">
              قیمت قبلی:
              <span className="text-gray-400 line-through">
                {price.toLocaleString()}
              </span>
            </p>

            <p className="text-lg font-bold text-gray-800">
              قیمت با تخفیف:
              <span>{discountPrice.toLocaleString()}</span>
            </p>
          </>
        ) : (
          <p className="text-lg font-bold text-gray-800">
            قیمت:
            <span>{price.toLocaleString()}</span>
          </p>
        )}
      </div>

      <p className="text-sm text-gray-600">موجودی: {stock} در انبار</p>

      <button
        className="w-full rounded-xl bg-green-600 py-3 text-base text-white hover:bg-green-700"
        type="button"
      >
        افزودن به سبد خرید +
      </button>
    </div>
  );
};

export default ProductPricing;
