"use client"

import { Button } from "@/component/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AirportsIndustryPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] font-alliance">
      <section className="relative min-h-[100vh] md:min-h-[80vh] flex items-center pt-32">
        <div className="absolute inset-0">
          <img
            src="/uploads/Airline Industry.jpg"
            alt="Airport operations"
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
                Airports & Capital Projects
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Transforming airport safety and compliance through AI-powered risk intelligence and embedded expertise.
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
                  Comprehensive Airport Safety Solutions
                </h2>
                <p className="text-gray-300">
                  Airport construction and capital projects operate under intense regulatory scrutiny, tight timelines, and high passenger volumes. MAC Safety deploys embedded safety specialists who navigate FAA, TSA, and OSHA regulations while ensuring zero operational disruptions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#eba200]">Risk Intelligence</h3>
                  <p className="text-gray-300">
                    With NIXN & NIXNos, we integrate real-time risk intelligence into every phase—tracking contractor compliance, optimizing airside/landside coordination, and mitigating risks tied to high-traffic environments.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#eba200]">Key Impacts</h3>
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
                <Button 
                  className="bg-white text-black hover:bg-white/90 rounded-full"
                  onClick={() => window.location.href = '/contact'}
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
