import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import Home from "@/views/home";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Mac Safety - Risk Management & Software Solutions | Safety Consultants",
  description: "Mac Safety provides expert risk management solutions and cutting-edge safety software. Trusted safety consultants dedicated to protecting your business and workforce.",
  alternates: {
    canonical: "https://macsafety.com",
  },
};

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D1117] text-white">
        <Header />
        <Home />
      </div>
    </QueryClientProvider>
  );
}
