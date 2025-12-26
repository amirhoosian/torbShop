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
        <div className="relative flex w-auto md:w-full">
          <Image
            height={100}
            width={100}
            alt="Logo"
            src="/images/routes/home/footer-logo-2.svg"
            className="absolute
                  top-[-10px] right-2
                  md:static"
          />
          <Image
            height={100}
            width={100}
            alt="Logo background wave"
            src="/icons/bg-logo-wave.png"
          />
        </div>
        <div className="md:item-end flex flex-1 flex-col items-start gap-8">
          <hr style={{ borderTop: "1px solid #eee", margin: 0 }} />
          <div className="md:item-center flex flex-col items-end gap-2 md:flex-row md:justify-end">
            <p className="order-2 flex text-[8px] md:order-1 md:w-[600px] md:text-[18px]">
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد.
            </p>
            <Image
              height={50}
              width={100}
              alt="Footer Logo"
              className="order-1 w-[60px] md:order-2 md:w-auto"
              src="/images/templates/base/footer-logo-1.svg"
            />
          </div>
        </div>
      </div>

      <div
        dir="rtl"
        className="mt-4 mb-5 grid w-full grid-cols-2 gap-5 md:my-8 md:mt-3 md:mb-3 md:grid-cols-3 lg:grid-cols-5"
      >
        {features.map((feature, index) => (
          <div dir="ltr" className="flex items-center gap-2.5" key={index}>
            <div className="flex flex-col gap-1">
              <p className="text-[10px] font-bold">{feature.title}</p>
              <p className="text-xs text-gray-500">{feature.description}</p>
            </div>

            <img alt={feature.title} className="size-12" src={feature.src} />
          </div>
        ))}
      </div>

      <div className="#f3e5b1 flex items-center justify-between rounded-b-xl border-t-[0.5px] px-4 py-2 text-xs">
        <a className="ml-3 text-blue-400 hover:underline" href="/">
          برم بالا ↑
        </a>
        <span className="text-xs">توسعه توسط امیر روحیان</span>
      </div>
    </footer>
  );
}
