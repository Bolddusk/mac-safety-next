import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import DataCentersIndustryPage from "@/views/data-centers";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Centers - THE COST OF FAILURE ISN’T JUST DOWNTIME—IT’S TRUST",
  description:
    "Data centers are the backbone of modern infrastructure, yet risk management in mission-critical environments is still reactive. Redundancy doesn’t equal intelligence, and compliance doesn’t mean resilience.",
  alternates: {
    canonical: "https://macsafety.com/data-centers",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <DataCentersIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
