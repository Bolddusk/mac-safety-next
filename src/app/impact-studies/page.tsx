import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import ImpactStudies from "@/views/impact-studies";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Studies - Real-World Safety Results | Mac Safety",
  description:
    "Check out Mac Safety’s impact studies, showcasing real-world results of our risk management and safety solutions in action.",
  alternates: {
    canonical: "https://macsafety.com/impact-studies",
  },
};

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D1117] text-white">
        <Header />
        <ImpactStudies />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
