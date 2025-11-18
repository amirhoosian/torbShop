import ProductBoxList from "@/components/Category/ProductBoxList";
import HeroSection from "@/components/HeroSection";
import DealCarouselSection from "@/components/promo/DealCarouselSection";
import ProductCarouselSection from "@/components/promo/ProductCarouselSection";
import CategorySlider from "@/components/sliders/CategorySlider";
import { TrustAndServiceBlock } from "@/components/TrustAndServiceBlock";

export default function Home() {
  return (
    <div className="w-full font-sans">
      <HeroSection />
      <CategorySlider />
      <ProductBoxList />
      <DealCarouselSection />
      <ProductCarouselSection />
      <DealCarouselSection reverse={true} />
      <TrustAndServiceBlock />
    </div>
  );
}
