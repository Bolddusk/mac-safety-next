import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import Alpha from "@/views/alpha";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Alpha Program - Advanced Risk Management and Safety Strategies| Mac Safety",
    description: "See Mac Safety’s Alpha Program focused on risk management strategies and advanced safety solutions to safeguard your workforce.",
    alternates: {
      canonical: "https://macsafety.com/alpha",
    },
  };

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D1117] text-white">
        <Header />
        <Alpha />
      </div>
    </QueryClientProvider>
  );
}
