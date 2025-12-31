import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import IndustriesPage from "@/views/industries";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Industries We Serve for Risk Management - Customized Safety Solutions | Mac Safety",
    description: "Mac Safety offers customised risk management and safety solutions across diverse industries. See how we protect workforces in your sector.",
    alternates: {
      canonical: "https://macsafety.com/industries",
    },
  };

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D1117] text-white">
        <Header />
        <IndustriesPage />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
