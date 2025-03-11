import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import Home from "@/views/home";
import { QueryClientProvider } from "@tanstack/react-query";

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
