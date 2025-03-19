import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import AutoIndustryPage from "@/views/auto";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto- SAFETY ISN’T JUST ABOUT VEHICLES—IT’S ABOUT SYSTEMS",
  description:
    "Automotive manufacturers, suppliers, and logistics providers operate in one of the most regulated and high-risk environments in the world. Yet despite billions spent on safety, recalls, and compliance, risk remains largely reactive",
  alternates: {
    canonical: "https://macsafety.com/auto",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <AutoIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
