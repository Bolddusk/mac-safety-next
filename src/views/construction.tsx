import { ArrowRight } from "lucide-react";
import { HUDOverlay } from "@/component/ui/hud-overlay";
import Link from "next/link";

export default function ConstructionIndustryPage() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] md:min-h-[80vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/uploads/construction_industry.webp"
            alt="Construction site operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 relative py-20 md:py-0">
          <div className="max-w-4xl">
            <div
             
              className="space-y-6"
            >
              <p className="text-[#eba200] font-medium">Industries</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Construction
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Safer jobsites and faster builds through integrated safety intelligence.
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
                    Advanced Construction Safety Solutions
                  </h2>
                  <p className="text-gray-300">
                    Construction sites are chaotic, but risk doesn&apos;t have to be. MAC Safety embeds highly trained safety professionals who leverage NIXN & NIXNos to deliver live risk monitoring, predictive incident prevention, and compliance automation at scale.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#eba200]">Risk Intelligence</h3>
                    <p className="text-gray-300">
                      By combining task-based risk analytics with on-the-ground expertise, we help contractors reduce losses, qualify for better insurance rates, and finish projects ahead of schedule—all while ensuring every worker goes home safe.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#eba200]">Key Impacts</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-[#eba200]" />
                        30% faster incident response with AI-driven insights
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-[#eba200]" />
                        Lower EMR scores → reduced insurance costs
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-[#eba200]" />
                        275% increase in near-miss reporting
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
