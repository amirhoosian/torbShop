import ProductBoxList from "@/components/Category/ProductBoxList";
import HeroSection from "@/components/HeroSection";
import DealCarouselSection from "@/components/promo/DealCarouselSection";
import CategorySlider from "@/components/sliders/CategorySlider";

export default function Home() {
  return (
    <div className="w-full font-sans">
      <HeroSection />
      <CategorySlider />
      <ProductBoxList />
      <DealCarouselSection />
    </div>
  );
}
