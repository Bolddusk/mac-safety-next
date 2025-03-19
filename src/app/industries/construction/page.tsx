import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import ConstructionIndustryPage from "@/views/construction";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction - WHY RISK MANAGEMENT IS BROKEN—AND HOW MAC FIXES IT",
  description:
    "Construction companies spend millions on safety initiatives—yet the industry still sees 1 in 5 workplace fatalities and escalating insurance costs. Why? Because risk is treated as a compliance function rather than an operational reality",
  alternates: {
    canonical: "https://macsafety.com/construction",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <ConstructionIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
