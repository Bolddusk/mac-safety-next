"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { DottedSurface } from "@/component/ui/DottedSurface";
import { Target, TrendingUp, Zap } from "lucide-react";

const partnerData = [
  {
    id: "gm",
    name: "General Motors",
    partner:
      "General Motors is a global leader in automotive manufacturing and sustainable mobility solutions.",
    challenge:
      "GM needed to ensure safety compliance and risk management across their expanding electric vehicle infrastructure and battery facility construction programs.",
    solution:
      "MAC Safety provided specialized personnel and implemented comprehensive data analytics and software solutions to monitor and enhance safety protocols during construction and operation.",
    impact:
      "Achieved 30% reduction in safety incidents, streamlined compliance reporting by 40%, and established real-time risk monitoring across all new EV facilities.",
  },
  {
    id: "mbta",
    name: "MBTA",
    partner:
      "Massachusetts Bay Transportation Authority operates one of the largest public transit systems in the United States.",
    challenge:
      "MBTA required a comprehensive safety management system for their extensive rail and bus operations.",
    solution:
      "Implemented MAC's safety intelligence platform to monitor operations, track maintenance, and predict potential safety issues.",
    impact:
      "Reduced maintenance-related delays by 25%, improved safety compliance by 45%, and enhanced overall system reliability.",
  },
  {
    id: "range",
    name: "Range Resources",
    partner:
      "Range Resources is a leading U.S. natural gas and oil exploration and production company.",
    challenge:
      "Needed to enhance safety protocols across multiple drilling sites while maintaining operational efficiency.",
    solution:
      "Deployed MAC's risk intelligence system to monitor real-time operations and implement predictive safety measures.",
    impact:
      "Achieved zero recordable incidents across 85% of sites, reduced safety audit time by 60%, and improved emergency response times.",
  },
  {
    id: "marathon",
    name: "Marathon",
    partner:
      "Marathon Petroleum Corporation is one of the largest petroleum refining companies in the United States.",
    challenge:
      "Required unified safety monitoring across multiple refineries and processing facilities.",
    solution:
      "Implemented comprehensive safety intelligence platform with real-time monitoring and predictive analytics.",
    impact:
      "Reduced safety incidents by 40%, improved compliance reporting efficiency by 50%, and enhanced emergency preparedness.",
  },
  {
    id: "pinnacol",
    name: "Pinnacol",
    partner:
      "Pinnacol Assurance is Colorado's leading workers' compensation insurance provider.",
    challenge:
      "Needed to modernize risk assessment and claims processing while improving client safety programs.",
    solution:
      "Integrated MAC's risk intelligence platform with existing systems to enhance claim processing and risk prediction.",
    impact:
      "Reduced claim processing time by 35%, improved risk assessment accuracy by 40%, and enhanced client safety program effectiveness.",
  },
];

export default function ImpactStudies() {
  const [activePartner, setActivePartner] = useState(0);

  return (
    <div className="min-h-screen bg-[#0b0b0d]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0b0b0d] overflow-hidden pt-24 pb-16">
        <DottedSurface />

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-[#eba200]/10 border border-[#eba200]/20 rounded-full text-[#eba200] text-sm font-alliance tracking-wide">
                Case Studies
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 font-alliance leading-tight"
            >
              Real Intelligence.
              <br />
              <span className="text-gray-400">Proven Impact.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-alliance"
            >
              We don&apos;t just track safety—we transform it. Explore how MAC&apos;s
              expertise and technology drive measurable results across
              industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Partner Studies Section */}
      <section className="py-20 md:py-28 bg-[#16171a]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#eba200] font-semibold text-sm tracking-wide uppercase mb-4 block font-alliance">
              Customer Highlights
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-alliance">
              Partnerships That Deliver
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-alliance">
              From Fortune 500 companies to regional leaders, we&apos;ve helped
              organizations transform their safety operations.
            </p>
          </motion.div>

          {/* Partner Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 mb-12 max-w-4xl mx-auto">
            {partnerData.map((partner, index) => (
              <button
                key={partner.id}
                onClick={() => setActivePartner(index)}
                className={`px-3 py-2.5 md:px-5 md:py-3 rounded-full font-alliance font-medium text-sm md:text-base transition-all ${
                  activePartner === index
                    ? "bg-[#eba200] text-black"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
                data-testid={`button-partner-${partner.id}`}
              >
                {partner.name}
              </button>
            ))}
          </div>

          {/* Active Partner Content */}
          <motion.div
            key={activePartner}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-[#0b0b0d] border border-gray-800 rounded-3xl overflow-hidden p-8 md:p-12">
              {/* Partner Header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="px-4 py-1.5 bg-[#eba200]/10 border border-[#eba200]/20 rounded-full text-[#eba200] text-sm font-alliance font-medium">
                  MAC + {partnerData[activePartner].name}
                </span>
              </div>

              {/* Partner Description */}
              <p className="text-gray-300 font-alliance text-lg mb-10 max-w-3xl">
                {partnerData[activePartner].partner}
              </p>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Challenge */}
                <div className="bg-[#16171a] border border-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#eba200]/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-[#eba200]" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-alliance">
                      Challenge
                    </h3>
                  </div>
                  <p className="text-gray-400 font-alliance">
                    {partnerData[activePartner].challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-[#16171a] border border-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#eba200]/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#eba200]" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-alliance">
                      Solution
                    </h3>
                  </div>
                  <p className="text-gray-400 font-alliance">
                    {partnerData[activePartner].solution}
                  </p>
                </div>
              </div>

              {/* Impact Section */}
              <div className="mt-6 bg-[#eba200]/5 border border-[#eba200]/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#eba200]/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#eba200]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#eba200] font-alliance">
                    Impact
                  </h3>
                </div>
                <p className="text-gray-300 font-alliance">
                  {partnerData[activePartner].impact}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-[#0b0b0d]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#eba200] mb-2 font-alliance">
                30+
              </div>
              <div className="text-gray-400 font-alliance text-sm">
                Enterprise Partners
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-alliance">
                40%
              </div>
              <div className="text-gray-400 font-alliance text-sm">
                Avg. Incident Reduction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-alliance">
                85%
              </div>
              <div className="text-gray-400 font-alliance text-sm">
                Client Retention
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-alliance">
                10M+
              </div>
              <div className="text-gray-400 font-alliance text-sm">
                Safety Records Processed
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
