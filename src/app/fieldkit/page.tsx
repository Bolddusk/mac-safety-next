import { Toaster } from "@/component/ui/toaster";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import Fieldkit from "@/views/fieldkit";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Kit - Delivering AI directly to the field",
  description:
    "Field Kit delivers AI directly to the field, empowering teams with real-time insights, smarter decisions, and streamlined on-site operations.",
  alternates: {
    canonical: "https://macsafety.com/fieldkit",
  },
};

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D1117] text-white">
        <Header />
        <Fieldkit />
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
