import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import Nixn from "@/views/nixn";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D1117] text-white">
        <Header />
        <Nixn />
      </div>
    </QueryClientProvider>
  );
}
