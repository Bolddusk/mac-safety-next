import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import MaritimeIndustryPage from "@/views/maritime";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Maritime - NAVIGATING WATERS WITHOUT RISK INTELLIGENCE IS A SINKING STRATEGY",
  description:
    "Shipping, offshore operations, and port management are among the most highly regulated industries, yet incidents, downtime, and insurance costs continue to rise.",
  alternates: {
    canonical: "https://macsafety.com/maritime",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <MaritimeIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
