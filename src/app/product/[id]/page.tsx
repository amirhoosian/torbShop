"use client";
import { useParams } from "next/navigation";

import ProductImage from "@/components/ProductDetailPage/ProductImage";
import ProductInfo from "@/components/ProductDetailPage/ProductInfo";
import ProductPricing from "@/components/ProductDetailPage/ProductPricing";
import { useProduct } from "@/hooks/useProduct";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useProduct(id);

  if (loading)
    return (
      <div>
        <p>Loding.....</p>
      </div>
    );
  if (error) return <div>`{error}`</div>;
  if (!product) return null;

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
