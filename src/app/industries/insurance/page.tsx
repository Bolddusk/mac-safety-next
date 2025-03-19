import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import InsuranceIndustryPage from "@/views/insurance";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance - RISK ISN’T JUST A PREMIUM—IT’S A DATA PROBLEM",
  description:
    "Insurance is built on predicting and pricing risk, yet traditional underwriting models fail to incorporate real-time risk intelligence.",
  alternates: {
    canonical: "https://macsafety.com/insurance",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <InsuranceIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
