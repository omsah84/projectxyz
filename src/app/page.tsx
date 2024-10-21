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
import FloatingButtons from "@/root_components/FloatingButtons";
import FloatingChatbotButton from "@/root_components/FloatingChatbotButton";

export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <HeroSectionComponent />
      <AboutSection />
      <FeaturesSection />
      <PortfolioSection />
      <StatisticsSection />
      <AwardsSection />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
      <FaqsSection />
      <CTASection />


      <FloatingButtons />
      <FloatingChatbotButton />
    </div>
  );
}
