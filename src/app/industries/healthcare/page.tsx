import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import HealthcareIndustryPage from "@/views/healthcare";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airline - THE INDUSTRY KNOWS SAFETY—BUT IT DOESN’T KNOW RISK",
  description:
    "Hospitals and healthcare facilities operate under the strictest safety and compliance frameworks, yet medical errors, equipment failures, and workforce risks persist.",
  alternates: {
    canonical: "https://macsafety.com/healthcare",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <HealthcareIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
