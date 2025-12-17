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

  return (
    <div className="mx-auto mt-8 w-full text-right">
      <div className="flex flex-col-reverse justify-between md:flex-row">
        <div className="flex flex-1 flex-col space-x-10 md:flex-row">
          <div className="mx-auto w-full md:mx-0 md:px-3.5 order-2 md:order-1">
            <div className="mx-auto flex w-full flex-1 flex-col gap-4 rounded-2xl border-2 border-stone-300 bg-white p-5 md:mx-0 md:w-[500px]">
              <div className="w-max rounded-lg bg-pink-500 px-3 py-1 text-sm text-white">
                ٪۵۰
              </div>

              <div className="space-y-1 text-sm">
                <p className="text-gray-500">
                  قیمت قبلی:
                  <span className="text-gray-400 line-through">۱۰,۰۰۰,۰۰۰</span>
                </p>

                <p className="text-lg font-bold text-gray-800">
                  قیمت با تخفیف:
                  <span>۵,۰۰۰,۰۰۰</span>
                </p>
              </div>

              <p className="text-sm text-gray-600">موجودی: ۴۰ در انبار</p>

              <button className="w-full rounded-xl bg-green-600 py-3 text-base text-white hover:bg-green-700">
                افزودن به سبد خرید +
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col gap-10 px-2.5 md:w-auto md:px-0 order-1 md:order-2">
            <p className="text-base font-semibold md:text-lg">
              {product.title}
            </p>
            <div className="flex flex-col gap-11 md:flex-row">
              <div className="flex flex-1 flex-col">
                <h3 className="text-gray-400">ویژگی ها</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex flex-1 flex-col items-end">
                <h3 className="text-gray-400">توضیحات</h3>
                <p className="text-gray-400">
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

        <div className="mx-auto w-52 md:mx-0 md:w-[300px]">
          {product.image && (
            <Image
              height={300}
              width={300}
              alt={product.title}
              className="h-auto w-full object-cover"
              src={product.image}
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
