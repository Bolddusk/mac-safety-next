import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import RenewableIndustryPage from "@/views/renewable";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewable - SCALABILITY REQUIRES RISK INTELLIGENCE, NOT JUST INFRASTRUCTURE",
  description: "",
  alternates: {
    canonical: "https://macsafety.com/renewable",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <RenewableIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
