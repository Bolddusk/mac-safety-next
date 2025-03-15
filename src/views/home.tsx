import ContactSection from "@/component/home/ContactSection";
import Hero from "@/component/home/Hero";
import ProductShowcase from "@/component/home/ProductShowcase";
import Solutions from "@/component/home/Solutions";
import Footer from "@/layout/Footer";

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
