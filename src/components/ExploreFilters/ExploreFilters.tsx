import { useEffect, useState } from "react";
import { ProductCardProps } from "@/types";
import ProductsCard from "../ProductsCard";

const ExploreFilters = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status}`);
        }
        const data: ProductCardProps[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchProducts();
  }, []);

  return (
    <div
      dir="rtl"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8 md:mb-0"
    >
      {products.slice(0, 5).map((p, idx) => (
        <ProductsCard
          key={`${p.title ?? "product"}-${idx}`}
          title={p.title}
          image={p.image}
          price={p.price}
        />
      ))}
    </div>
  );
};

export default ExploreFilters;
