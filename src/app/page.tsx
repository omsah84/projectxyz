// import Header from "@/home_components/Header";
import ContactSection from "@/home_components/ContactSection";
import FaqsSection from "@/home_components/FaqsSection";
import HeroSectionComponent from "@/home_components/HeroSectionComponent";

export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <HeroSectionComponent/>
      <ContactSection/>
      <FaqsSection/>
    </div>
  );
}
