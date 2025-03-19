import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import ManufacturingIndustryPage from "@/views/manufacturing";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Manufacturing - THE COST OF RISK ISN’T JUST SAFETY—IT’S COMPETITIVENESS",
  description:
    "Manufacturers invest in compliance, training, and safety initiatives—yet workplace injuries, operational losses, and insurance premiums continue to rise. The reason? Risk is being tracked, but not quantified.",
  alternates: {
    canonical: "https://macsafety.com/manufacturing",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <ManufacturingIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
