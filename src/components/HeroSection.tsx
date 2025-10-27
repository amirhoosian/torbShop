"use client";
import { useEffect, useState } from "react";
import BaseSlider from "./sliders/BaseSlider";
import ProductCard from "./sliders/ProductCard";
import BannerSlider from "./sliders/BannerCard";

export interface Product {
	id: number;
	title: string;

	price: number;
	image: string;
}

export default function HeroSection() {
	const [products, setProducts] = useState<Product[]>([]);

	const banners = [
		{
			id: 1,
			image: "/images/products/hero-slider-1.webp",
		},
		{
			id: 2,
			image: "/images/products/hero-slider-2.webp",
		},
		{
			id: 3,
			image: "/images/products/hero-slider-3.webp",
		},
	];

	useEffect(() => {
		fetch("/api/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<section className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4">
			{products.length > 0 && (
				<BaseSlider slidesPerView={1} autoplay loop>
					{products.map((p) => (
						<ProductCard
							key={p.id}
							image={p.image}
							title={p.title}
							price={p.price}
						/>
					))}
				</BaseSlider>
			)}

			{banners.length > 0 && <BannerSlider banners={banners} />}
		</section>
	);
}
