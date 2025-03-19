import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import RailIndustryPage from "@/views/rail";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rail - THE INDUSTRY CAN’T AFFORD TO MANAGE RISK LIKE IT’S 1980",
  description:
    "Rail operators move 40% of the nation's freight and transport millions of passengers daily, yet risk management remains largely reactive—driven by incident reports, regulatory audits, and post-event analysis.",
  alternates: {
    canonical: "https://macsafety.com/rail",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <RailIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
