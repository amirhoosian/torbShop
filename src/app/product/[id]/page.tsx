"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import type { Product } from "@/types";

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch product:", error);

    return null;
  }
}

export default function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      const p = await getProduct(id);
      setProduct(p);
    };

    void fetchData();
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }
  console.log(product);
  return (
    <div className="mx-auto w-full mt-8  text-right">
      <div className="flex justify-between">
        <div className="flex flex-1 space-x-10">
          <div>
            <div className="w-[500px] bg-white p-5 rounded-2xl border-2 border-stone-300 flex flex-col flex-1 gap-4">
              <div className="bg-pink-500 text-white px-3 py-1 rounded-lg w-max text-sm">
                ٪۵۰
              </div>

              <div className="space-y-1 text-sm">
                <p className="text-gray-500">
                  قیمت قبلی:
                  <span className="line-through text-gray-400">۱۰,۰۰۰,۰۰۰</span>
                </p>

                <p className="text-gray-800 font-bold text-lg">
                  قیمت با تخفیف:
                  <span>۵,۰۰۰,۰۰۰</span>
                </p>
              </div>

              <p className="text-gray-600 text-sm">موجودی: ۴۰ در انبار</p>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-base">
                افزودن به سبد خرید +
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <p>{product.title}</p>
            <div className="flex gap-11">
              <div className="flex flex-col flex-1">
                <h3>ویژگی ها</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex flex-col flex-1 items-center">
                <h3>توضیحات</h3>
                <p>
                  این محصول ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  طراحان گرافیک است. طراحان گرافیک است.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px]">
          {product.image && (
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
