import { Toaster } from "@/component/ui/toaster";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import GMPTPBeta from "@/views/gmptp-beta";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GMPTP - BETA - Get in Touch with Our Safety Experts",
  description:
    "Have questions or need risk management and safety solutions? Contact Mac Safety’s expert team for risk management advice and customized safety software solutions.",
  alternates: {
    canonical: "https://macsafety.com/forgework",
  },
};

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D1117] text-white">
        <Header isShowBanner={false} />
        <GMPTPBeta />
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
