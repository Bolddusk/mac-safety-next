import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import Airline from "@/views/airline";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airline - SAFETY ISN’T THE PROBLEM BLIND SPOTS ARE",
  description:
    "Airlines operate under the most rigorous safety regulations in the world. Yet despite multi-layered safety protocols, human error, mechanical failures, and operational inefficiencies persist—costing billions in losses, reputational damage, and regulatory fines.",
  alternates: {
    canonical: "https://macsafety.com/airline",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Airline />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
