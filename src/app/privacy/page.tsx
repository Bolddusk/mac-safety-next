import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import Privacy from "@/views/privacy";
import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Mac Safety",
  description: "Learn how Mac Safety protects your data. Read our privacy policy to understand our commitment to data security and transparency.",
  alternates: {
    canonical: "https://macsafety.com/privacy",
  },
};

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D1117] text-white">
        <Header />
        <Privacy />
      </div>
    </QueryClientProvider>
  );
}
