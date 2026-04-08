import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/Landing/Featured";
import KravionaPortfolio from "@/components/Landing/LandingPage";
import LandingPage from "@/components/Landing/LandingPage";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D12] text-[#F2F4F8] font-sans selection:bg-[#3A66FF] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
