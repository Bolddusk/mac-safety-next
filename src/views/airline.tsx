import { ArrowRight } from "lucide-react";
import { HUDOverlay } from "@/component/ui/hud-overlay";
import Link from "next/link";

export default function AirlineIndustry() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] md:min-h-[80vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/uploads/airline_industry.webp"
            alt="Airport operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 relative py-20 md:py-0">
          <div className="max-w-4xl">
            <div className="space-y-6">
              <p className="text-[#eba200] font-medium">Industries</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Airports & Capital Projects
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Transforming airport safety and compliance through AI-powered
                risk intelligence and embedded expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <HUDOverlay>
              <div className="p-8 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Comprehensive Airport Safety Solutions
                  </h2>
                  <p className="text-gray-300">
                    Airport construction and capital projects operate under
                    intense regulatory scrutiny, tight timelines, and high
                    passenger volumes. MAC Safety deploys embedded safety
                    specialists who navigate FAA, TSA, and OSHA regulations
                    while ensuring zero operational disruptions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#eba200]">
                      Risk Intelligence
                    </h3>
                    <p className="text-gray-300">
                      With NIXN & NIXNos, we integrate real-time risk
                      intelligence into every phase—tracking contractor
                      compliance, optimizing airside/landside coordination, and
                      mitigating risks tied to high-traffic environments.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#eba200]">
                      Key Impacts
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-[#eba200]" />
                        60% reduction in airside safety violations
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-[#eba200]" />
                        Real-time contractor compliance tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-[#eba200]" />
                        Faster issue resolution with AI-driven insights
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    className="py-3 px-4 rounded-sm bg-[#eba200] text-black hover:bg-[#eba200]/90 hover:shadow-[0_0_20px_rgba(235,162,0,0.3)]"
                    href="/contact"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </HUDOverlay>
          </div>
        </div>
      </section>
    </div>
  );
}
