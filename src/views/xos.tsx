"use client";

import { Button } from "@/component/ui/button";
import { motion } from "framer-motion";
import {
  Activity,
  FileSpreadsheet,
  Calendar,
  Bot,
  Shield,
  Upload,
  Book,
  AlertTriangle,
  TrendingDown,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { RequestDemoModal } from "@/component/xos/RequestDemoModal";
import { DottedSurface } from "@/component/ui/DottedSurface";

export default function XOSPage() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d]">
      {/* Hero Section - Matte Black */}
      <section className="relative pt-32 pb-16 md:pb-24 px-6 md:px-8 bg-[#0b0b0d] overflow-hidden">
        <DottedSurface />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 md:w-24 md:h-24 mb-8"
            >
              <img
                src="/uploads/xos logo.png"
                alt="xOS Logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>

            <span className="text-[#64FFDA] font-alliance text-sm font-medium tracking-wide uppercase mb-4">
              Enterprise Operating System
            </span>

            <h1 className="font-alliance text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
              Your Command Center for{" "}
              <span className="text-[#64FFDA]">Operational Intelligence</span>
            </h1>

            <p className="font-alliance text-lg md:text-xl text-gray-400 max-w-3xl mb-10">
              In an era where data is abundant but actionable insights are
              scarce, xOS emerges as the enterprise operating system designed to
              unify, analyze, and operationalize intelligence across your
              organization.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://nixnos.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-white text-black hover:bg-gray-100 font-alliance font-medium"
                  data-testid="button-launch-xos"
                >
                  Launch xOS
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-white/30 text-white hover:border-white hover:bg-white/5 font-alliance font-medium"
                onClick={scrollToFeatures}
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
              <RequestDemoModal />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Uncertainty Section - Matte Black */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#0b0b0d]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#64FFDA] font-alliance text-sm font-medium tracking-wide uppercase mb-4 block">
              The Problem
            </span>
            <h2 className="font-alliance text-3xl md:text-5xl font-bold text-white mb-4">
              Uncertainty isn&apos;t abstract
            </h2>
            <p className="font-alliance text-xl md:text-2xl text-[#64FFDA]">
              It lives inside your operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#16171a] border border-gray-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#64FFDA]/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-[#64FFDA]" />
              </div>
              <h3 className="font-alliance text-lg font-semibold text-white mb-2">
                Schedules
              </h3>
              <p className="font-alliance text-gray-400 text-sm">
                Hidden uncertainty lives in project timelines, creating
                cascading delays
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#16171a] border border-gray-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#64FFDA]/10 flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-6 h-6 text-[#64FFDA]" />
              </div>
              <h3 className="font-alliance text-lg font-semibold text-white mb-2">
                Scopes
              </h3>
              <p className="font-alliance text-gray-400 text-sm">
                Ambiguous scope definitions lead to rework and cost overruns
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#16171a] border border-gray-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#64FFDA]/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#64FFDA]" />
              </div>
              <h3 className="font-alliance text-lg font-semibold text-white mb-2">
                Inspections
              </h3>
              <p className="font-alliance text-gray-400 text-sm">
                Inconsistent inspection processes create compliance gaps
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#16171a] border border-gray-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#64FFDA]/10 flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-[#64FFDA]" />
              </div>
              <h3 className="font-alliance text-lg font-semibold text-white mb-2">
                Training Gaps
              </h3>
              <p className="font-alliance text-gray-400 text-sm">
                Workforce skill gaps increase operational risk exposure
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-8 md:p-10"
          >
            <h3 className="font-alliance text-xl font-semibold text-white mb-6 text-center">
              Uncertainty creates decision cascades that result in:
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 justify-center">
                <TrendingDown className="w-5 h-5 text-[#64FFDA]" />
                <span className="font-alliance text-white">Rework</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Clock className="w-5 h-5 text-[#64FFDA]" />
                <span className="font-alliance text-white">Delays</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <AlertTriangle className="w-5 h-5 text-[#64FFDA]" />
                <span className="font-alliance text-white">Injuries</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <DollarSign className="w-5 h-5 text-[#64FFDA]" />
                <span className="font-alliance text-white">Claims</span>
              </div>
            </div>
            <p className="font-alliance text-center text-gray-400 mt-8">
              The cost of uncertainty is{" "}
              <span className="text-[#64FFDA] font-medium">measurable</span>,{" "}
              <span className="text-[#64FFDA] font-medium">predictable</span>,
              and <span className="text-white font-medium">preventable</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section - Light */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#16171a]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#64FFDA] font-alliance text-sm font-medium tracking-wide uppercase mb-4 block">
              The Solution
            </span>
            <h2 className="font-alliance text-3xl md:text-5xl font-bold text-white mb-6">
              We build software to stop that flow
            </h2>
            <p className="font-alliance text-xl text-gray-400 max-w-2xl mx-auto">
              And replace it with modeled, measurable execution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1f2024] border border-gray-800 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="font-alliance text-2xl font-bold text-white mb-4">
                xOS is not a platform
              </h3>
              <p className="font-alliance text-gray-400">
                It&apos;s an enterprise operating system designed from the
                ground up for operational precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1f2024] border border-gray-800 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="font-alliance text-2xl font-bold text-[#64FFDA] mb-4">
                Fused with intelligence
              </h3>
              <p className="font-alliance text-gray-400">
                Built for operational precision with AI at its core, enabling
                smarter decisions at every level.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section - Dark */}
      <section
        id="features"
        className="py-16 md:py-24 px-6 md:px-8 bg-[#0b0b0d]"
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#64FFDA] font-alliance text-sm font-medium tracking-wide uppercase mb-4 block">
              Platform Features
            </span>
            <h2 className="font-alliance text-3xl md:text-5xl font-bold text-white mb-6">
              Key Capabilities
            </h2>
            <p className="font-alliance text-lg text-gray-400 max-w-3xl mx-auto">
              From data collection to AI-powered insights, xOS provides a
              comprehensive suite of tools designed for the modern enterprise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NIXNos Feed Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#64FFDA]/10 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <h3 className="font-alliance text-xl font-semibold text-white">
                  The NIXNos Feed
                </h3>
              </div>
              <p className="font-alliance text-gray-400 mb-6">
                The core of operational intelligence where every risk, incident,
                and operational detail is captured and processed.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden border border-gray-700">
                <img
                  src="/uploads/879shots_so.png"
                  alt="NIXNos Feed Interface"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Upload and process any file type - from inspection reports
                    to maintenance logs
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Conduct and document meetings with structured note-taking
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Track tasks from assignment to completion
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Training Matrix Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#64FFDA]/10 flex items-center justify-center">
                  <Book className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <h3 className="font-alliance text-xl font-semibold text-white">
                  Training Matrix
                </h3>
              </div>
              <p className="font-alliance text-gray-400 mb-6">
                Real-time workforce readiness tracking and certification
                management system.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden border border-gray-700">
                <img
                  src="/uploads/598shots_so.png"
                  alt="Training Matrix Interface"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Track training records, schedules, and certifications
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Monitor compliance and certification status
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Identify and address skill gaps proactively
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Task Management Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#64FFDA]/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <h3 className="font-alliance text-xl font-semibold text-white">
                  Task Management
                </h3>
              </div>
              <p className="font-alliance text-gray-400 mb-6">
                Comprehensive task tracking and management system that
                integrates seamlessly with your operational workflow.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden border border-gray-700">
                <img
                  src="/uploads/883shots_so.png"
                  alt="Task Management Interface"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Organize, assign, and track tasks with detailed status
                    monitoring
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Prioritize workloads with intelligent task routing and
                    escalation
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Automate workflows with task dependencies and intelligent
                    scheduling
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Enterprise LLM Chat Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#64FFDA]/10 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <h3 className="font-alliance text-xl font-semibold text-white">
                  Enterprise LLM Chat
                </h3>
              </div>
              <p className="font-alliance text-gray-400 mb-6">
                Conversational AI that references all data within your
                operational system, replacing traditional charts and dashboards.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden border border-gray-700">
                <img
                  src="/uploads/306shots_so.png"
                  alt="Enterprise LLM Chat Interface"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Query any data in your system using natural language instead
                    of charts
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Get contextual insights and recommendations from your
                    operational data
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                  <span className="font-alliance text-gray-300 text-sm">
                    Generate custom reports and analysis through simple
                    conversation
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Foundational Systems Section - Light */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#16171a]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#64FFDA] font-alliance text-sm font-medium tracking-wide uppercase mb-4 block">
              Core Systems
            </span>
            <h2 className="font-alliance text-3xl md:text-5xl font-bold text-white mb-6">
              Foundational Systems That Govern Execution
            </h2>
            <p className="font-alliance text-lg text-gray-400 max-w-3xl mx-auto">
              These Cores are not features. They are embedded engines of
              cognition, optimization, modeling, and precision documentation.
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* AIX Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#16171a] border border-gray-800 rounded-2xl overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center gap-6 p-6 md:p-8 cursor-pointer list-none">
                  <div className="w-16 h-16 bg-[#1f2024] rounded-xl border border-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src="/uploads/aix-logo.png"
                      alt="AIX Logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-alliance text-2xl md:text-3xl font-bold text-white">
                      AIX
                    </h3>
                    <p className="font-alliance text-gray-400 hidden md:block">
                      Embedded Cognition Across the Enterprise
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-400 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 md:px-8 pb-8">
                  <div className="bg-[#1f2024] rounded-xl p-6 md:p-8 border border-gray-800">
                    <p className="font-alliance text-gray-400 mb-6">
                      AIX is not an add-on. It is the embedded intelligence core
                      that underpins every function within xOS—powering
                      Summit&apos;s optimizations, Atlas&apos;s scenario
                      modeling, and Foundry&apos;s document generation with
                      precision, context, and foresight.
                    </p>
                    <p className="font-alliance font-semibold text-[#64FFDA] mb-8">
                      This is not a chatbot. This is an AI substrate engineered
                      for execution.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Ontological Modeling Engine
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Tasks, risks, mitigations, and dependencies are
                          codified into a dynamic ontology that adapts to your
                          data, industry, and workflows.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Contextual Execution Layer
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          AIX evaluates parameters, constraints, and historical
                          performance to ensure each action is logically sound
                          and operationally viable.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Multi-Modal Intelligence
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Consumes structured data, reports, geospatial assets,
                          training records, and documents into a unified
                          intelligence fabric.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Proactive Decision Modeling
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Simulates impacts before they materialize, showing
                          second- and third-order effects before you commit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </motion.div>

            {/* SUMMIT Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#16171a] border border-gray-800 rounded-2xl overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center gap-6 p-6 md:p-8 cursor-pointer list-none">
                  <div className="w-16 h-16 bg-[#1f2024] rounded-xl border border-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src="/uploads/summit-logo.png"
                      alt="SUMMIT Logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-alliance text-2xl md:text-3xl font-bold text-white">
                      SUMMIT
                    </h3>
                    <p className="font-alliance text-gray-400 hidden md:block">
                      Optimization Under Real-World Constraints
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-400 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 md:px-8 pb-8">
                  <div className="bg-[#1f2024] rounded-xl p-6 md:p-8 border border-gray-800">
                    <p className="font-alliance text-gray-400 mb-6">
                      Summit is the scheduling and execution engine inside xOS.
                      It doesn&apos;t just plan—it understands priorities,
                      constraints, and cascading dependencies.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Task Optimization
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Analyzes tasks by risk, complexity, resource
                          availability, and past execution success.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Schedule-Aware Risk Pricing
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Forecast the true cost of risk on every job—down to
                          the hour, crew, and location.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Pipeline-Integrated
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Publish configurations, attach real-world schedules,
                          and run AI-powered simulations.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Cross-Industry Ready
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Construction, healthcare, logistics, or
                          manufacturing—Summit adapts to your workflows.
                        </p>
                      </div>
                    </div>

                    <p className="font-alliance font-semibold text-[#64FFDA] mb-6">
                      This is not a Gantt chart. This is intelligence-forward
                      operations modeling.
                    </p>

                    <a
                      href="https://medium.com/mac-blog/summit-ai-driven-scheduling-and-workflow-optimization-revolution-05524e0b26a9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#64FFDA] font-alliance font-medium hover:underline"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </details>
            </motion.div>

            {/* ATLAS Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#16171a] border border-gray-800 rounded-2xl overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center gap-6 p-6 md:p-8 cursor-pointer list-none">
                  <div className="w-16 h-16 bg-[#1f2024] rounded-xl border border-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src="/uploads/atlas-logo.png"
                      alt="ATLAS Logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-alliance text-2xl md:text-3xl font-bold text-white">
                      ATLAS
                    </h3>
                    <p className="font-alliance text-gray-400 hidden md:block">
                      Visualizing Risk, Scenario Cascades, and Facility Logic
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-400 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 md:px-8 pb-8">
                  <div className="bg-[#1f2024] rounded-xl p-6 md:p-8 border border-gray-800">
                    <p className="font-alliance text-gray-400 mb-6">
                      Atlas turns your business into a modeled system—where
                      facilities, dependencies, and operations are mapped,
                      visualized, and stress-tested.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Digital Twin Architecture
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Build a virtual representation of your sites, lines,
                          or assets. Map upstream inputs and downstream effects.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Scenario Cascade Modeling
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Simulate how failures, risks, or process changes
                          ripple through your operational architecture.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Risk Visualization
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          See risk concentrations across your facilities with
                          intuitive visual interfaces.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Dependency Mapping
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Understand how changes in one area affect operations
                          throughout your organization.
                        </p>
                      </div>
                    </div>

                    <p className="font-alliance font-semibold text-[#64FFDA]">
                      This is not a dashboard. This is operational
                      topology—modeled and actionable.
                    </p>
                  </div>
                </div>
              </details>
            </motion.div>

            {/* FOUNDRY Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#16171a] border border-gray-800 rounded-2xl overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center gap-6 p-6 md:p-8 cursor-pointer list-none">
                  <div className="w-16 h-16 bg-[#1f2024] rounded-xl border border-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src="/uploads/xfoundry-logo.png"
                      alt="FOUNDRY Logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-alliance text-2xl md:text-3xl font-bold text-white">
                      FOUNDRY
                    </h3>
                    <p className="font-alliance text-gray-400 hidden md:block">
                      Precision Documentation, Dynamically Generated
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-400 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 md:px-8 pb-8">
                  <div className="bg-[#1f2024] rounded-xl p-6 md:p-8 border border-gray-800">
                    <p className="font-alliance text-gray-400 mb-6">
                      Foundry generates enterprise-grade documents that are
                      context-aware, data-driven, and audit-ready. No more
                      templates. No more guesswork.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          JHA Generation
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Automatically generate Job Hazard Analyses based on
                          task context, location, and historical data.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Compliance Documentation
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Produce audit-ready compliance documentation that
                          meets regulatory requirements.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Dynamic Updates
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Documents evolve as your operations change—always
                          current, always accurate.
                        </p>
                      </div>
                      <div className="border-l-2 border-[#64FFDA] pl-4">
                        <h5 className="font-alliance font-semibold text-white mb-2">
                          Version Control
                        </h5>
                        <p className="font-alliance text-sm text-gray-400">
                          Complete audit trail of all document versions with
                          change tracking.
                        </p>
                      </div>
                    </div>

                    <p className="font-alliance font-semibold text-[#64FFDA]">
                      This is not a document library. This is living
                      documentation—generated, versioned, and operationally
                      aware.
                    </p>
                  </div>
                </div>
              </details>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#0b0b0d]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#64FFDA] font-alliance text-sm font-medium tracking-wide uppercase mb-4 block">
              Get Started
            </span>
            <h2 className="font-alliance text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to transform your operations?
            </h2>
            <p className="font-alliance text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Join leading enterprises who have replaced uncertainty with
              precision using xOS.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://nixnos.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-[#64FFDA] text-white hover:bg-[#64FFDA]/90 font-alliance font-medium"
                  data-testid="button-launch-xos-cta"
                >
                  Launch xOS
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <RequestDemoModal />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
