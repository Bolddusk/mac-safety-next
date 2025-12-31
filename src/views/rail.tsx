"use client";

import { Button } from "@/component/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function RailIndustryPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] font-alliance">
      <section className="relative min-h-[100vh] md:min-h-[80vh] flex items-center pt-32">
        <div className="absolute inset-0">
          <img
            src="/uploads/Rail Industry.jpg"
            alt="Rail operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 relative py-20 md:py-0">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-[#eba200] font-medium">Industries</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Rail & Transit
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Ensuring safety and compliance in high-stakes rail operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b0b0d]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#16171a] border border-gray-800 rounded-2xl p-8 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Advanced Rail Safety Solutions
                </h2>
                <p className="text-gray-300">
                  Rail operations face unique challenges in safety and
                  compliance. MAC Safety embeds specialized rail safety
                  professionals who understand FRA regulations, electrical
                  safety, and the complexities of working around active rail
                  lines.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#eba200]">
                    Risk Intelligence
                  </h3>
                  <p className="text-gray-300">
                    Using NIXN&apos;s predictive analytics, we ensure track worker
                    protection, monitor confined space operations, and maintain
                    rigorous compliance with FRA regulations.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#eba200]">
                    Key Impacts
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-[#eba200]" />
                      60% reduction in trackside safety violations
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-[#eba200]" />
                      Real-time hazard detection for electrical & confined space
                      work
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-[#eba200]" />
                      Fewer FRA compliance issues → reduced regulatory fines
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  className="bg-white text-black hover:bg-white/90 rounded-full"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
