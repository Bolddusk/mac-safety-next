import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import DefenseIndustryPage from "@/views/defense";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "DEFENSE & AEROSPACE: FAILURE ISN’T AN OPTION—BUT RISK ISN’T QUANTIFIED",
  description:
    "The Defense & Aerospace Risk Paradox: High Stakes, Outdated Models. The defense and aerospace industries operate in high-complexity, high-liability environments, yet risk is often managed through compliance rather than intelligence.",
  alternates: {
    canonical: "https://macsafety.com/defense",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <DefenseIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
