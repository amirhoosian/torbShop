"use client";
import { useParams } from "next/navigation";

import ProductImage from "@/components/ProductDetailPage/ProductImage";
import ProductInfo from "@/components/ProductDetailPage/ProductInfo";
import ProductPricing from "@/components/ProductDetailPage/ProductPricing";
import { productsApi } from "@/hooks/useProduct";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { useDetail } = productsApi();
  const { data: product, isLoading, isError } = useDetail(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;
  if (!product) return <p>محصول پیدا نشد</p>;

  return (
    <div className="mx-auto mt-8 w-full text-right md:max-w-7xl md:px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-start md:gap-8">
        <div className="order-1 flex justify-center md:order-3">
          <ProductImage
            size={380}
            alt={product.title}
            priority
            images={[
              { id: "main-1", src: product.image! },
              { id: "main-2", src: product.image! },
              { id: "main-3", src: product.image! },
            ]}
          />
        </div>

        {/* Info */}
        <div className="order-3 md:order-2">
          <ProductInfo
            title={product.title}
            category={product.category}
            description={product.description}
          />
        </div>

        {/* Pricing */}
        <div className="order-2 md:order-1">
          <ProductPricing price={product.price} discountPercent={50} />
        </div>
      </div>
    </div>
  );
}
