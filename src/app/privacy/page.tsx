import Header from "@/layout/Header";
import { queryClient } from "@/lib/queryClient";
import Privacy from "@/views/privacy";
import { QueryClientProvider } from "@tanstack/react-query";

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
