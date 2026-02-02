import { Toaster } from "@/component/ui/toaster";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import Offerings from "@/views/offerings";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Risk Management Services and Safety Consultancy & Solutions | Mac Safety",
  description:
    "Explore Mac Safety’s full range of safety solutions, from risk assessments to advanced safety software. Protect your business with expert guidance.",
  alternates: {
    canonical: "https://macsafety.com/offerings",
  },
};

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D1117] text-white">
        <Header />
        <Offerings />
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
