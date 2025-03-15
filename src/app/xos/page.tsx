import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import XOSPage from "@/views/xos";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XOS - AI-Based Risk Management and Safety Platform | Mac Safety",
  description:
    "Boost workplace safety with XOS by Mac Safety — modern platform with integrated tools and strategies designed for smarter risk management and safety.",
  alternates: {
    canonical: "https://macsafety.com/xos",
  },
};

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D1117] text-white">
        <Header />
        <XOSPage />
      </div>
    </QueryClientProvider>
  );
}
