import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import SteelIndustryPage from "@/views/steel";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel - HIGH HEAT, HIGH PRESSURE, AND UNMEASURED RISK",
  description:
    "Steel production is one of the most hazardous industrial processes requiring precision, heavy automation, and human oversight. Yet despite extensive safety protocols, equipment failures, workforce injuries, and process inefficiencies persist.",
  alternates: {
    canonical: "https://macsafety.com/steel",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <SteelIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
