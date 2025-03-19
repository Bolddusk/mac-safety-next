import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import MiningIndustryPage from "@/views/mining";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mining - HIGH RISK IS A GIVEN—BUT UNMEASURED RISK IS A LIABILITY",
  description:
    "Mining companies operate in some of the world’s harshest environments, facing geotechnical instability, equipment failures, and workforce safety risks. Billions are spent on compliance and safety measures—yet preventable disasters still occur",
  alternates: {
    canonical: "https://macsafety.com/mining",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <MiningIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
