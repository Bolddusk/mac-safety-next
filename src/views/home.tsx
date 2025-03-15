import { lazy } from "react";
const Hero = lazy(() => import("@/component/home/Hero"));
const ContactSection = lazy(() => import("@/component/home/ContactSection"));
const ProductShowcase = lazy(() => import("@/component/home/ProductShowcase"));
const Solutions = lazy(() => import("@/component/home/Solutions"));
const Footer = lazy(() => import("@/layout/Footer"));

export default function Home() {
  return (
    <main className="bg-[#0D1117]">
      <Hero />
      <ProductShowcase />
      <Solutions />
      <ContactSection />
      <Footer />
    </main>
  );
}
