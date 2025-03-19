import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import UtilitiesIndustryPage from "@/views/utilities";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utilities",
  description: "",
  alternates: {
    canonical: "https://macsafety.com/utilities",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <UtilitiesIndustryPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
