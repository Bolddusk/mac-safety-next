import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import TelecomIndustryPage from "@/views/telecom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Telecom - NETWORKS ARE ENGINEERED FOR UPTIME—BUT NOT FOR RISK INTELLIGENCE",
  description:
    "Telecom networks are designed for maximum uptime and resilience, yet they remain vulnerable to cyber threats, infrastructure failures, and supply chain disruptions. Despite massive investments in redundancy, risk is still managed reactively, instead of being quantified in real-time.",
  alternates: {
    canonical: "https://macsafety.com/telecom",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <TelecomIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
