import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import Tagline from "./components/Tagline";
import FeatureSection from "./components/FeatureSection";
import DeveloperSection from "./components/DeveloperSection";
import Testimonials from "./components/Testimonials";
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
        <DeveloperSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
