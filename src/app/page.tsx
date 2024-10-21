// import Header from "@/home_components/Header";
import AboutSection from "@/home_components/AboutSection";
import AwardsSection from "@/home_components/AwardsSection";
import BlogSection from "@/home_components/BlogSection";
import CTASection from "@/home_components/CTASection";
import FaqsSection from "@/home_components/FaqsSection";
import FeaturesSection from "@/home_components/FeaturesSection";
import HeroSectionComponent from "@/home_components/HeroSectionComponent";
import NewsletterSection from "@/home_components/NewsletterSection";
import PortfolioSection from "@/home_components/PortfolioSection";
import StatisticsSection from "@/home_components/StatisticsSection";
import TestimonialsSection from "@/home_components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <HeroSectionComponent />
      <NewsletterSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <BlogSection />
      <AboutSection />
      <StatisticsSection />
      <AwardsSection />
      <FaqsSection />
      <CTASection />
    </div>
  );
}
