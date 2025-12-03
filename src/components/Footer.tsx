"use client";

import Image from "next/image";

const features = [
  {
    src: "/images/templates/base/footer-smart-wallet.png",
    title: "کیف پول هوشمند",
    description: "خبـرسـانی به کاربران",
  },
  {
    src: "/images/templates/base/footer-powerful-user-panel.png",
    title: "پنل کاربری قوی",
    description: "مدیریت سفارش",
  },
  {
    src: "/images/templates/base/footer-smart-notifications.png",
    title: "اطلاعرسانی و جوایز",
    description: "تخفیفات ویژه ماه",
  },
  {
    src: "/images/templates/base/footer-fast-shipping.png",
    title: "ارسال سریع تیپاکس",
    description: "لوجستیک ارسال سریع",
  },
  {
    src: "/images/templates/base/footer-notifications-and-rewards.png",
    title: "هفت روز ضمانت بازگشت",
    description: "با خیال راحت خرید کنید",
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col">
      <div className="flex w-full">
        <div className="flex">
          <Image
            height={100}
            width={100}
            alt="Logo"
            src="/images/routes/home/footer-logo-2.svg"
          />
          <Image
            height={100}
            width={100}
            alt="Logo background wave"
            src="/icons/bg-logo-wave.png"
          />
        </div>
        <div className="item-end flex flex-1 flex-col gap-4">
          <hr style={{ borderTop: "1px solid #eee", margin: 0 }} />
          <div className="item-center flex justify-end gap-2">
            <p className="flex w-[400px] text-[13px]">
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد.
            </p>
            <Image
              height={50}
              width={100}
              alt="Footer Logo"
              src="/images/templates/base/footer-logo-1.svg"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-around gap-12 my-8">
        {features.map((feature, index) => (
          <div key={index} className="flex  items-center gap-2.5">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-[10px]">{feature.title}</p>
              <p className="text-xs text-gray-500">{feature.description}</p>
            </div>

            <img src={feature.src} alt={feature.title} className="w-12 h-12" />
          </div>
        ))}
      </div>

      <div className="rounded-b-xl py-2 px-4 flex items-center justify-between text-xs border-t-[0.5px] #f3e5b1">
        <a href="/" className="text-blue-400 hover:underline ml-3">
          برم بالا ↑
        </a>

        <span className="text-xs">توسعه توسط امیر روحیان</span>
      </div>
    </footer>
  );
}
