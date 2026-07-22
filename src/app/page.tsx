import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import TechCapabilities from "@/components/TechCapabilities";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Methodology />
      <SectionDivider />
      <TechCapabilities />
      <SectionDivider />
      <WhyUs />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
