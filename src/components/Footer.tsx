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
    <footer className="flex w-full flex-col px-5 md:px-0">
      <div className="flex w-full">
        <div className="flex relative w-auto md:w-full">
          <Image
            height={100}
            width={100}
            alt="Logo"
            src="/images/routes/home/footer-logo-2.svg"
            className="absolute
                  right-2 top-[-10px]
                  md:static"
          />
          <Image
            height={100}
            width={100}
            alt="Logo background wave"
            src="/icons/bg-logo-wave.png"
          />
        </div>
        <div className="items-start md:item-end flex flex-1 flex-col gap-8">
          <hr style={{ borderTop: "1px solid #eee", margin: 0 }} />
          <div className="md:item-center flex flex-col md:flex-row items-end md:justify-end gap-2">
            <p className="flex md:w-[600px] text-[8px] md:text-[18px] md:order-1 order-2">
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد.
            </p>
            <Image
              height={50}
              width={100}
              alt="Footer Logo"
              src="/images/templates/base/footer-logo-1.svg"
              className="order-1 md:order-2 w-[60px] md:w-auto"
            />
          </div>
        </div>
      </div>

      <div
        dir="rtl"
        className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:my-8 mt-4 mb-5 md:mb-3 md:mt-3"
      >
        {features.map((feature, index) => (
          <div dir="ltr" key={index} className="flex  items-center gap-2.5">
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
        h <span className="text-xs">توسعه توسط امیر روحیان</span>
      </div>
    </footer>
  );
}
