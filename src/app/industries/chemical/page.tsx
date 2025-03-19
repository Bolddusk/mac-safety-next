import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import ChemicalIndustryPage from "@/views/chemical";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chemical - CONTROLLED ENVIRONMENTS, UNCONTROLLED RISK",
  description:
    "Chemical processing facilities are designed for precision—yet incidents continue to occur despite strict compliance frameworks.",
  alternates: {
    canonical: "https://macsafety.com/chemical",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <ChemicalIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
