"use client";

import { Button } from "@/component/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ConstructionIndustryPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] font-alliance">
      <section className="relative min-h-[100vh] md:min-h-[80vh] flex items-center pt-32">
        <div className="absolute inset-0">
          <img
            src="/uploads/Construction Industry.jpg"
            alt="Construction site operations"
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
                Construction
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Safer jobsites and faster builds through integrated safety
                intelligence.
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
                  Advanced Construction Safety Solutions
                </h2>
                <p className="text-gray-300">
                  Construction sites are chaotic, but risk doesn&apos;t have to be.
                  MAC Safety embeds highly trained safety professionals who
                  leverage NIXN & NIXNos to deliver live risk monitoring,
                  predictive incident prevention, and compliance automation at
                  scale.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#eba200]">
                    Risk Intelligence
                  </h3>
                  <p className="text-gray-300">
                    By combining task-based risk analytics with on-the-ground
                    expertise, we help contractors reduce losses, qualify for
                    better insurance rates, and finish projects ahead of
                    schedule—all while ensuring every worker goes home safe.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#eba200]">
                    Key Impacts
                  </h3>
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
