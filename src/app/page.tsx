import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import ProductCategoriesGrid from "@/components/home/ProductCategoriesGrid";
import BestSellersMarquee from "@/components/home/BestSellersMarquee";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABand from "@/components/home/CTABand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <AboutSnapshot />
      <ProductCategoriesGrid />
      <BestSellersMarquee />
      <IndustriesSection />
      <WhyChooseUs />
      <CTABand />
    </>
  );
}
