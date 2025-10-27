"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
interface ProductCardProps {
	image: string;
	title: string;
	price: number;
}

export default function ProductCard({ image, title, price }: ProductCardProps) {
	return (
		<div className="w-full relative">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				navigation={{
					nextEl: ".custom-next",
					prevEl: ".custom-prev",
				}}
				pagination={{ clickable: true }}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				onSlideChange={(swiper) => swiper.pagination.update()}
				loop
				slidesPerView={1}
				className="rounded-xl overflow-hidden"
			>
				{" "}
			</Swiper>
		</div>
	);
}

/*
 *    <div className="bg-red-500 text-white rounded-xl p-4 flex flex-col items-center justify-between w-full">
      <Image src={image} alt={title} width={150} height={150} />
      <h3 className="text-center text-sm mt-2">{title}</h3>
      <p className="text-lg font-semibold mt-2">{price} تومان</p>
    </div> */
