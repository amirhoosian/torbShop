import HeroSection from "@/components/HeroSection";
import CategorySlider from "@/components/sliders/CategorySlider";

export default function Home() {
  return (
    <div className="w-full font-sans">
      <HeroSection />
      <CategorySlider />
    </div>
  );
}
