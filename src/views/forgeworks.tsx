"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/component/ui/button";
import {
  ArrowRight,
  Zap,
  Target,
  BarChart3,
  FileText,
  Code2,
  Database,
  Layers,
  Users,
  Building2,
  Truck,
  HardHat,
  Factory,
} from "lucide-react";
import { DottedSurface } from "@/component/ui/DottedSurface";
import ForgeWorksApplicationDrawer from "@/component/drawer/ForgeWorksApplicationDrawer";

const integrations = [
  { name: "Procore", category: "Construction" },
  { name: "Autodesk", category: "Design" },
  { name: "QuickBooks", category: "Finance" },
  { name: "Samsara", category: "Fleet" },
  { name: "Salesforce", category: "CRM" },
  { name: "SAP", category: "ERP" },
];

const caseStudies = [
  {
    id: 1,
    company: "TJD Energy",
    title: "Operations Command Center",
    description:
      "Complete field operations platform with real-time workload orchestration, crew deployment tracking, fleet management, and safety compliance.",
    image: "/uploads/forgeworks-tjd-energy.png",
    modules: ["Fleet", "HR", "Finance", "Safety", "Maintenance"],
  },
  {
    id: 2,
    company: "General Motors",
    title: "PTP Management System",
    description:
      "Permit-to-proceed platform with facilities mapping, multi-site user management, and approval workflow automation.",
    image: "/uploads/forgeworks-barton-malow.png",
    modules: ["Permits", "Facilities", "Users", "Approvals"],
  },
  {
    id: 3,
    company: "Aggregates",
    title: "Production & Fleet Dashboard",
    description:
      "End-to-end operations dashboard tracking quotes, production volumes, fleet utilization, and driver safety across multiple facilities.",
    image: "/uploads/forgeworks-aggregates.png",
    modules: ["Quotes", "Production", "Fleet", "Safety Alerts"],
  },
  {
    id: 4,
    company: "Route Optimization",
    title: "Transportation Safety Platform",
    description:
      "Driver safety index tracking, route risk analysis, and real-time map previews with facility management for healthcare transportation operations.",
    image: "/uploads/forgeworks-route-optimization.png",
    modules: ["Driver Safety", "Route Risk", "Mapping", "Facilities"],
  },
];

export default function ForgeWorks() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeCase, setActiveCase] = useState(0);

  const openApplicationDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeApplicationDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pb-32 bg-[#0b0b0d] overflow-hidden">
        <DottedSurface />

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 flex flex-wrap justify-center gap-3"
            >
              <span className="inline-block px-4 py-2 bg-[#eba200]/10 border border-[#eba200]/20 rounded-full text-[#eba200] text-sm font-alliance tracking-wide">
                Software Development
              </span>
              <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-alliance tracking-wide">
                Carnegie Mellon Engineers
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-alliance"
            >
              ForgeWorks
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-4 font-alliance"
            >
              The development arm of MAC.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto font-alliance"
            >
              A team of developers and data scientists from Carnegie Mellon,
              rebuilding historically left-behind tech stacks into world-class
              decision systems. We centralize your software. We build what
              you&apos;re missing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={openApplicationDrawer}
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 font-alliance font-medium"
                data-testid="button-apply-hero"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 text-white hover:bg-white/10 rounded-full px-8 py-3 font-alliance font-medium"
                onClick={() =>
                  document
                    .getElementById("showcase")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-testid="button-learn-more"
              >
                See Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-20 bg-[#16171a]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-alliance">
              What We Build
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-alliance">
              When companies lack the systems they need, we build them from
              scratch. When they have scattered tools, we unify them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0b0b0d] border border-gray-800 rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-[#eba200]/10 flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-[#eba200]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-alliance">
                Integration
              </h3>
              <p className="text-gray-400 font-alliance">
                Connect Procore, Autodesk, QuickBooks, Samsara, and dozens more
                into a unified operational layer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0b0b0d] border border-gray-800 rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-[#eba200]/10 flex items-center justify-center mb-6">
                <Code2 className="w-7 h-7 text-[#eba200]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-alliance">
                Custom Builds
              </h3>
              <p className="text-gray-400 font-alliance">
                CRMs, project management, fleet tracking, camera systems—if you
                need it and it doesn&apos;t exist, we build it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#0b0b0d] border border-gray-800 rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-[#eba200]/10 flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-[#eba200]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-alliance">
                Centralization
              </h3>
              <p className="text-gray-400 font-alliance">
                Transform fragmented spreadsheets and tribal knowledge into
                centralized, intelligent decision systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 md:py-28 bg-[#0b0b0d]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#eba200] font-semibold text-sm tracking-wide uppercase mb-4 block font-alliance">
              Real Systems. Real Operators.
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-alliance">
              Built by ForgeWorks
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-alliance">
              These aren&apos;t mockups. These are production systems running
              operations today.
            </p>
          </motion.div>

          {/* Case Study Tabs */}
          <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-center md:gap-3 mb-10 max-w-sm md:max-w-none mx-auto">
            {caseStudies.map((cs, index) => (
              <button
                key={cs.id}
                onClick={() => setActiveCase(index)}
                className={`px-3 py-2 md:px-5 md:py-2.5 rounded-full font-alliance font-medium text-sm md:text-base transition-all ${
                  activeCase === index
                    ? "bg-[#eba200] text-black"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {cs.company}
              </button>
            ))}
          </div>

          {/* Active Case Study */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-[#16171a] border border-gray-800 rounded-3xl overflow-hidden">
              {/* Screenshot */}
              <div className="relative">
                <img
                  src={caseStudies[activeCase].image}
                  alt={`${caseStudies[activeCase].company} - ${caseStudies[activeCase].title}`}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171a] via-transparent to-transparent" />
              </div>

              {/* Case Study Info */}
              <div className="p-8 md:p-10 -mt-16 relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#eba200]/10 border border-[#eba200]/20 rounded-full text-[#eba200] text-sm font-alliance">
                    {caseStudies[activeCase].company}
                  </span>
                  {caseStudies[activeCase].modules.map((mod) => (
                    <span
                      key={mod}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs font-alliance"
                    >
                      {mod}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-alliance">
                  {caseStudies[activeCase].title}
                </h3>

                <p className="text-gray-400 font-alliance max-w-3xl">
                  {caseStudies[activeCase].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="py-16 md:py-20 bg-[#16171a]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-alliance">
              We Integrate With Everything
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-alliance">
              Your tools don&apos;t have to be siloed. We connect them into one
              intelligent platform.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {integrations.map((int, index) => (
              <motion.div
                key={int.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#0b0b0d] border border-gray-800 rounded-xl px-6 py-4 hover:border-[#eba200]/30 transition-all"
              >
                <span className="text-white font-alliance font-medium">
                  {int.name}
                </span>
                <span className="text-gray-500 font-alliance text-sm ml-2">
                  • {int.category}
                </span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-[#eba200]/10 border border-[#eba200]/20 rounded-xl px-6 py-4"
            >
              <span className="text-[#eba200] font-alliance font-medium">
                + 50 More
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Batch Section */}
      <section className="py-16 bg-[#0b0b0d]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white font-alliance">
              Current Batch
            </h2>
            <p className="text-gray-400 mt-2 font-alliance">
              Organizations currently building with ForgeWorks
            </p>
          </motion.div>

          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#0b0b0d] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0b0b0d] to-transparent z-10"></div>

            <div className="flex items-center py-6 animate-scroll whitespace-nowrap">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="inline-flex justify-center items-center bg-[#16171a] p-6 rounded-2xl border border-gray-800 h-20 mx-4 w-44 shadow-sm"
                >
                  <img
                    src={`/uploads/${num}.png`}
                    alt={`Partner ${num}`}
                    className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={`dup-${num}`}
                  className="inline-flex justify-center items-center bg-[#16171a] p-6 rounded-2xl border border-gray-800 h-20 mx-4 w-44 shadow-sm"
                >
                  <img
                    src={`/uploads/${num}.png`}
                    alt={`Partner ${num}`}
                    className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-24 bg-[#16171a]">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#eba200] font-semibold text-sm tracking-wide uppercase mb-4 block font-alliance">
                The Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-alliance">
                Carnegie Mellon Engineers
              </h2>
              <p className="text-gray-400 font-alliance mb-6">
                ForgeWorks is staffed by developers and data scientists from
                Carnegie Mellon University—one of the world&apos;s leading
                institutions for computer science and machine learning.
              </p>
              <p className="text-gray-400 font-alliance">
                We don&apos;t just build software. We engineer decision systems that
                transform how operators work, built on rigorous foundations in
                AI, optimization, and systems design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-[#0b0b0d] border border-gray-800 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#eba200]/10 flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-6 h-6 text-[#eba200]" />
                </div>
                <div className="text-2xl font-bold text-white font-alliance mb-1">
                  12+
                </div>
                <div className="text-gray-400 text-sm font-alliance">
                  Full-Stack Engineers
                </div>
              </div>
              <div className="bg-[#0b0b0d] border border-gray-800 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#eba200]/10 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-[#eba200]" />
                </div>
                <div className="text-2xl font-bold text-white font-alliance mb-1">
                  5+
                </div>
                <div className="text-gray-400 text-sm font-alliance">
                  Data Scientists
                </div>
              </div>
              <div className="bg-[#0b0b0d] border border-gray-800 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#eba200]/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-[#eba200]" />
                </div>
                <div className="text-2xl font-bold text-white font-alliance mb-1">
                  40+
                </div>
                <div className="text-gray-400 text-sm font-alliance">
                  Systems Built
                </div>
              </div>
              <div className="bg-[#0b0b0d] border border-gray-800 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#eba200]/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-[#eba200]" />
                </div>
                <div className="text-2xl font-bold text-white font-alliance mb-1">
                  10K+
                </div>
                <div className="text-gray-400 text-sm font-alliance">
                  Active Users
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20 bg-[#0b0b0d]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-alliance">
              Industries We Transform
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-alliance">
              From energy to construction to aggregates—we specialize in
              operational industries where decisions matter.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { icon: Factory, name: "Energy" },
              { icon: HardHat, name: "Construction" },
              { icon: Truck, name: "Trucking & Fleet" },
              { icon: Building2, name: "Aggregates" },
              { icon: Zap, name: "Utilities" },
              { icon: Target, name: "Manufacturing" },
            ].map((ind, index) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 bg-[#16171a] border border-gray-800 rounded-xl px-5 py-4"
              >
                <ind.icon className="w-5 h-5 text-[#eba200]" />
                <span className="text-white font-alliance">{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Cores Section */}
      <section className="py-20 md:py-24 bg-[#16171a]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-alliance">
              Powered by Our Cores
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-alliance">
              Every ForgeWorks system is built on our embedded intelligence
              engines: AIX, Summit, Atlas, and xFoundry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            <CoreCard
              icon={<Zap className="w-8 h-8 text-[#eba200]" />}
              title="AIX"
              subtitle="Cognition"
              description="Advanced intelligence engine for pattern recognition and contextual insights."
              delay={0}
            />
            <CoreCard
              icon={<Target className="w-8 h-8 text-[#eba200]" />}
              title="Summit"
              subtitle="Optimization"
              description="Decision optimization for resource allocation and process efficiency."
              delay={0.1}
            />
            <CoreCard
              icon={<BarChart3 className="w-8 h-8 text-[#eba200]" />}
              title="Atlas"
              subtitle="Simulation"
              description="Digital twin modeling for predicting operational outcomes."
              delay={0.2}
            />
            <CoreCard
              icon={<FileText className="w-8 h-8 text-[#eba200]" />}
              title="xFoundry"
              subtitle="Documentation"
              description="Knowledge management with contextual relevance."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="apply" className="py-24 bg-[#0b0b0d]">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-alliance"
          >
            Ready to rebuild your tech stack?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-alliance"
          >
            ForgeWorks is a high-touch partnership. We embed with your team and
            build decision systems tailored to your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={openApplicationDrawer}
              className="bg-white text-black hover:bg-gray-100 rounded-full px-10 py-4 font-alliance font-medium text-lg"
              data-testid="button-apply-cta"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <ForgeWorksApplicationDrawer
        isOpen={isDrawerOpen}
        onClose={closeApplicationDrawer}
      />
    </div>
  );
}

function CoreCard({
  icon,
  title,
  subtitle,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#0b0b0d] border border-gray-800 p-6 md:p-8 rounded-2xl hover:border-[#eba200]/30 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-xl bg-[#eba200]/10 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-1 font-alliance">
          {title}
        </h3>
        <p className="text-[#eba200] text-sm font-alliance font-medium mb-4">
          {subtitle}
        </p>
        <p className="text-sm text-gray-400 font-alliance">{description}</p>
      </div>
    </motion.div>
  );
}
