import React from "react";

interface ProductInfoProps {
  title: string;
  description?: string;
  category?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  description,
  category,
}) => {
  return (
    <div className="order-1 flex w-full flex-col gap-10 px-2.5 md:order-2 md:w-auto md:px-0">
      {/* title */}
      <p className="text-base font-semibold md:text-lg">{title}</p>

      <div className="flex flex-col gap-11 md:flex-row">
        {/* features / category */}
        <div className="flex flex-1 flex-col">
          <h3 className="text-gray-400">ویژگی ها</h3>
          <p className="text-gray-400">
            {category ?? "ویژگی‌ای برای این محصول ثبت نشده است."}
          </p>
        </div>

        {/* description */}
        <div className="flex flex-1 flex-col items-end">
          <h3 className="text-gray-400">توضیحات</h3>
          <p className="text-gray-400">
            {description ?? "توضیحی برای این محصول ثبت نشده است."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
