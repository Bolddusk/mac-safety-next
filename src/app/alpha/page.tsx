import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import Alpha from "@/views/alpha";
import { QueryClientProvider } from "@tanstack/react-query";

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
