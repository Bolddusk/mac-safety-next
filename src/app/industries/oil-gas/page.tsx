import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import OilGasIndustryPage from "@/views/oil-gas";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oil Gas - RISK ISN’T AN UNKNOWN—IT’S AN UNMEASURED VARIABLE",
  description: "",
  alternates: {
    canonical: "https://macsafety.com/oil-gas",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <OilGasIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
