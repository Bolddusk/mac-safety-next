import Footer from "@/layout/Footer";
import ImapactSection from "@/component/nixn/ImpactSection";
import HowItWorks from "@/component/nixn/HowItWorks";
import ArmFramework from "@/component/nixn/ArmFramework";
import Features from "@/component/nixn/Features";
import HeroSection from "@/component/nixn/HeroSection";


export default function Nixn() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Mobile Optimized */}
      <HeroSection />

      {/* Features Section - Mobile Optimized */}
      <Features />

      {/* How NIXN Works Section */}
      <HowItWorks />

      {/* ARM Framework Section */}
      <ArmFramework />

      {/* Proven Impact Section */}
      <ImapactSection />

      {/* Add Footer */}
      <Footer />
    </div>
  );
}
