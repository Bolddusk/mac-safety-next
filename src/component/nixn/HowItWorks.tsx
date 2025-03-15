import React from "react";
import {
  Database,
  Brain,
  Zap,
  FileSpreadsheet,
  HardHat,
  AlertTriangle,
  Wrench,
  Users,
  TrendingUp,
  Bell,
  BarChart,
  Workflow,
  Activity,
} from "lucide-react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            From Data to Decisions—In Real Time
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            NIXN ingests, processes, and scores risk exposure
            dynamically—providing actionable intelligence that drives safer
            operations, better underwriting, and more profitable decisions.
          </p>
        </div>

        {/* Framework Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3mb-4">
              <Activity className="w-6 h-6 text-[#eba200]" />
              <span className="text-[#eba200] font-semibold">
                01. NIXN DATA CONNECTION
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Over 10,000 Industry Unique ARM Combos
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                • Fully Customizable to include more granular or industry
                specific information
              </li>
              <li>• Easy-to-configure and add in the field</li>
              <li>• Multi-modal (Structured or Unstructured)</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-[#eba200]" />
              <span className="text-[#eba200] font-semibold">
                02. DATA TRANSFORMATION
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Flexible architecture with bundled engines
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• No-code transformation</li>
              <li>• Treating Data like code</li>
              <li>• Full provenance through the Job Spec paradigm</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-[#eba200]" />
              <span className="text-[#eba200] font-semibold">
                03. PIPELINE ORCHESTRATION
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Build system that is engine-agnostic
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                • Intelligent refreshing / state-tracking across all pipelines
              </li>
              <li>• Seamless integration with NIXN&apos;s risk monitoring</li>
            </ul>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-[#eba200]" />
              <h3 className="text-xl font-semibold text-white">
                Step 1: Capture Real-Time Risk Data
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                NIXN continuously collects data from:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-[#eba200]" />
                  Job hazard analyses (JHAs/JSAs)
                </li>
                <li className="flex items-center gap-2">
                  <HardHat className="w-4 h-4 text-[#eba200]" />
                  Site audits and observations
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#eba200]" />
                  Incident reports and near misses
                </li>
                <li className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#eba200]" />
                  Equipment and maintenance records
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#eba200]" />
                  Workforce experience and complexity
                </li>
              </ul>
              <div className="mt-4 p-4 bg-black/30 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#eba200]">Why it matters:</strong>{" "}
                  Unlike traditional reporting that only tracks past failures,
                  NIXN captures and scores live risk factors before incidents
                  occur.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-[#eba200]" />
              <h3 className="text-xl font-semibold text-white">
                Step 2: Quantify & Score Risk Exposure
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Proprietary ML models assign risk scores based on:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#eba200]" />
                  Task complexity and workforce capability
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#eba200]" />
                  Hazard severity and exposure frequency
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#eba200]" />
                  Leading indicators and behavior trends
                </li>
                <li className="flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-[#eba200]" />
                  Industry benchmarks and patterns
                </li>
              </ul>
              <div className="mt-4 p-4 bg-black/30 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#eba200]">Why it matters:</strong>{" "}
                  Companies can now see their true risk profile, enabling
                  proactive intervention and precision pricing of risk.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-[#eba200]" />
              <h3 className="text-xl font-semibold text-white">
                Step 3: Deliver Actionable Intelligence
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                NIXN integrates with enterprise workflows to:
              </p>
              <ul className="space-y-3 text-gray300">
                <li className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-[#eba200]" />
                  Alert teams to emerging risk trends
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#eba200]" />
                  Prioritize highest-impact safety actions
                </li>
                <li className="flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-[#eba200]" />
                  Optimize insurance underwriting
                </li>
                <li className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#eba200]" />
                  Generate actionable reports
                </li>
              </ul>
              <div className="mt-4 p-4 bg-black/30 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#eba200]">Why it matters:</strong> No
                  more gut decisions. Every action is backed by real,
                  quantifiable risk data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {/* Dashboard Mockup */}
          <div className="bg-black/40 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Live Risk Intelligence Dashboard
            </h3>
            <div className="relative rounded-lg overflow-hidden group">
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 border border-[#eba200]/20 rounded-lg group-hover:border-[#eba200]/40 transition-colors duration-300" />

              {/* Image */}
              <div className="relative z-10">
                <Image
                  src="/uploads/NIXNScreenGrab.webp"
                  alt="NIXN Dashboard Interface"
                  width={800} // Adjust width as needed
                  height={450} // Adjust height as needed
                  className="w-full rounded-lg"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg" />

                {/* Animated glow */}
                <div className="absolute inset-0 bg-[#eba200] opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-300 rounded-lg" />
              </div>
            </div>

            <p className="text-sm text-gray-400 mt-4 text-center">
              Real-time visualization of risk exposure across your operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
