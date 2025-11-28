import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import Tagline from "./components/Tagline";
import FeatureSection from "./components/FeatureSection";
import IndustrySolutions from "./components/IndustrySolutions";
import DeveloperSection from "./components/DeveloperSection";
import InnovationSection from "./components/InnovationSection";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-['Inter',sans-serif] text-slate-900">
      <Header />
      <main>
        <Hero />
        <LogoSlider />
        <Tagline />
        <FeatureSection />
        <IndustrySolutions />
        <InnovationSection />
        <DeveloperSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
