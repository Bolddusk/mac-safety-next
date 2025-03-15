import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/component/home/Hero"), {
  ssr: true,
});

const ProductShowcase = dynamic(
  () => import("@/component/home/ProductShowcase"),
  {
    ssr: true,
  }
);

const Solutions = dynamic(() => import("@/component/home/Solutions"), {
  ssr: true,
});

const ContactSection = dynamic(
  () => import("@/component/home/ContactSection"),
  {
    ssr: true,
  }
);

const Footer = dynamic(() => import("@/layout/Footer"), {
  ssr: true,
});

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
