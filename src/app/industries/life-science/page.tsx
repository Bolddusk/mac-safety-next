import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import LifeScienceIndustryPage from "@/views/life-science";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Science - BREAKTHROUGHS SHOULDN’T BE RISK BLIND",
  description: "",
  alternates: {
    canonical: "https://macsafety.com/life-science",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <LifeScienceIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
