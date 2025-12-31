import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import WarehousingIndustryPage from "@/views/warehousing";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "WAREHOUSING & LOGISTICS: EFFICIENCY MEANS NOTHING IF RISK ISN’T CONTROLLED",
  description:
    "Warehouses and distribution centers are built for speed, scale, and efficiency—yet risk exposure is often an afterthought. High worker turnover, automation failures, and supply chain disruptions increase liability and financial exposure, but these risks remain poorly quantified.",
  alternates: {
    canonical: "https://macsafety.com/warehousing",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <WarehousingIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
