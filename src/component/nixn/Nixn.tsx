import { Button } from "@/component/ui/button";
import { motion } from "framer-motion";
import { DemoScheduleModal } from "@/component/nixn/DemoScheduleModal";
import { TrialSetupModal } from "@/component/nixn/TrialSetupModal";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, Database, Brain, Zap, FileSpreadsheet, HardHat, AlertTriangle, Wrench, Users, TrendingUp, Bell, BarChart, Workflow, LightbulbIcon, AlertCircle, TrendingDown, DollarSign, PieChart, Activity } from "lucide-react";
import { DottedSurface } from "../ui/DottedSurface";

const indicatorProfitData = [
  { indicators: 2, profit: 15, year: '2020' },
  { indicators: 4, profit: 22, year: '2021' },
  { indicators: 8, profit: 35, year: '2022' },
  { indicators: 12, profit: 48, year: '2023' },
  { indicators: 16, profit: 65, year: '2024' },
];

export default function NIXNPage() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
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
                src="/uploads/IMG_8888 (1).png"
                alt="NIXN Logo"
                className="w-full h-full object-contain rounded-2xl"
              />
            </motion.div>

            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[#eba200] font-semibold text-sm tracking-wide uppercase mb-4 font-alliance"
            >
              Risk Intelligence Platform
            </motion.span>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 font-alliance"
            >
              Risk Isn&apos;t a Guess.<br />It&apos;s a Number.
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 font-alliance"
            >
              NIXN quantifies risk in real-time, transforming safety from a compliance function into a competitive advantage.
              Predict exposure, price risk accurately, and drive smarter decisions—before incidents happen.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xl"
            >
              <div className="w-full sm:w-auto">
                <DemoScheduleModal />
              </div>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full px-8 border-2 border-[#eba200] text-[#eba200] hover:bg-[#eba200]/10 transition-all font-alliance"
                onClick={scrollToFeatures}
              >
                How It Works
              </Button>
              <div className="w-full sm:w-auto">
                <TrialSetupModal />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-sm text-gray-500 mt-8 font-alliance"
            >
              Trusted by 500+ organizations worldwide
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Dark */}
      <section id="features" className="py-16 md:py-24 px-6 md:px-8 bg-[#0b0b0d]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#eba200] font-semibold text-sm tracking-wide uppercase mb-4 block font-alliance">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-alliance">
              Safety Metrics Are Broken
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-alliance">
              Traditional safety reporting relies on historical incidents, lagging indicators, and generic compliance checklists—failing to capture the real risk exposure happening today.
            </p>
          </motion.div>

          {/* Comparison Grid */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
          >
            <div className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold text-gray-400 mb-6 font-alliance">Traditional Safety</h3>
              <ul className="space-y-4 text-gray-300 font-alliance">
                <li className="flex items-start gap-3">
                  <span className="text-gray-500">•</span>
                  Historical incident analysis only
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500">•</span>
                  Manual data collection and reporting
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500">•</span>
                  Generic risk assessments
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500">•</span>
                  Reactive approach to safety
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500">•</span>
                  Limited predictive capabilities
                </li>
              </ul>
            </div>

            <div className="bg-[#0b0b0d] p-6 md:p-8 rounded-2xl border border-[#eba200]/30">
              <h3 className="text-xl font-semibold text-[#eba200] mb-6 font-alliance">NIXN Risk Intelligence</h3>
              <ul className="space-y-4 text-gray-300 font-alliance">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#eba200] flex-shrink-0 mt-0.5" />
                  Real-time risk quantification
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#eba200] flex-shrink-0 mt-0.5" />
                  Automated data collection and analysis
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#eba200] flex-shrink-0 mt-0.5" />
                  Task-specific risk assessment
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#eba200] flex-shrink-0 mt-0.5" />
                  Proactive risk prevention
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#eba200] flex-shrink-0 mt-0.5" />
                  Advanced predictive modeling
                </li>
              </ul>
            </div>
          </motion.div>

          {/* How NIXN Changes the Equation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-white mb-8 text-center font-alliance">NIXN changes the equation by:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Quantifying task-based risk exposure in real-time',
                'Predicting high-impact incidents before they happen',
                'Giving insurers, executives, and contractors the data they need to price risk accurately'
              ].map((text, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#eba200] flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold font-alliance">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 font-alliance">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chart Section - Light */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#16171a]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#eba200] font-semibold text-sm tracking-wide uppercase mb-4 block font-alliance">
              Data-Driven Results
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-alliance">
              Leading Indicators Drive Better Outcomes
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1f2024] p-6 md:p-10 rounded-2xl shadow-sm border border-gray-800"
          >
            <div className="h-[300px] md:h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={indicatorProfitData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="indicators"
                    stroke="#6b7280"
                    tick={{ fill: '#6b7280' }}
                    label={{
                      value: 'Leading Indicators',
                      position: 'bottom',
                      fill: '#6b7280',
                      offset: 0,
                      fontSize: 14
                    }}
                  />
                  <YAxis
                    stroke="#6b7280"
                    tick={{ fill: '#6b7280' }}
                    domain={[0, 80]}
                    label={{
                      value: 'Underwriting Profitability (%)',
                      angle: -90,
                      position: 'insideLeft',
                      fill: '#6b7280',
                      offset: 10,
                      fontSize: 14
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '14px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    labelStyle={{ color: '#111827' }}
                    formatter={(value) => [`${value}%`, 'Underwriting Profitability']}
                    labelFormatter={(value) => `Leading Indicators: ${value}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="profit"
                    name="Profit"
                    stroke="#eba200"
                    strokeWidth={3}
                    dot={{
                      stroke: '#eba200',
                      strokeWidth: 2,
                      r: 5,
                      fill: '#ffffff'
                    }}
                    activeDot={{
                      stroke: '#eba200',
                      strokeWidth: 2,
                      r: 7,
                      fill: '#eba200'
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center font-alliance">
              More leading indicators tracked correlates directly with improved underwriting performance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid - Dark */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#0b0b0d]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[#eba200] font-semibold text-sm tracking-wide uppercase mb-4 block font-alliance">
              Measurable Impact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-alliance">
              Results That Speak for Themselves
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingDown className="w-6 h-6" />,
                stat: "74%",
                title: "Decrease in Claim Frequency",
                description: "NIXN reduces incident occurrences by enhancing field decision-making and predictive analytics."
              },
              {
                icon: <AlertTriangle className="w-6 h-6" />,
                stat: "98%",
                title: "Decrease in Claim Severity",
                description: "With smarter interventions and earlier risk detection, NIXN prevents small issues from turning into major losses."
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                stat: "$171K",
                title: "Direct Cost Savings",
                description: "Clients see immediate financial benefits by reducing losses and optimizing their risk profile."
              },
              {
                icon: <PieChart className="w-6 h-6" />,
                stat: "88%",
                title: "Underwriter Confidence Score",
                description: "Insurers and risk managers trust NIXN's data, leading to better coverage terms and lower premiums."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700"
              >
                <div className="w-12 h-12 rounded-full bg-[#eba200]/10 flex items-center justify-center mb-4 text-[#eba200]">
                  {item.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#eba200] mb-2 font-alliance">{item.stat}</div>
                <h4 className="text-white font-semibold mb-3 font-alliance">{item.title}</h4>
                <p className="text-gray-400 text-sm font-alliance">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How NIXN Works Section - Light */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#16171a]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#eba200] font-semibold text-sm tracking-wide uppercase mb-4 block font-alliance">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-alliance">
              From Data to Decisions—In Real Time
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-alliance">
              NIXN ingests, processes, and scores risk exposure dynamically—providing actionable intelligence that drives safer operations, better underwriting, and more profitable decisions.
            </p>
          </motion.div>

          {/* Framework Features */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {[
              {
                icon: <Activity className="w-6 h-6" />,
                step: "01",
                title: "Data Connection",
                subtitle: "Over 10,000 Industry Unique ARM Combos",
                items: [
                  "Fully customizable to include more granular or industry specific information",
                  "Easy-to-configure and add in the field",
                  "Multi-modal (Structured or Unstructured)"
                ]
              },
              {
                icon: <Brain className="w-6 h-6" />,
                step: "02",
                title: "Data Transformation",
                subtitle: "Flexible architecture with bundled engines",
                items: [
                  "No-code transformation",
                  "Treating data like code",
                  "Full provenance through the Job Spec paradigm"
                ]
              },
              {
                icon: <Zap className="w-6 h-6" />,
                step: "03",
                title: "Pipeline Orchestration",
                subtitle: "Build system that is engine-agnostic",
                items: [
                  "Intelligent refreshing / state-tracking across all pipelines",
                  "Seamless integration with NIXN's risk monitoring"
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#16171a] p-6 md:p-8 rounded-2xl border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#eba200]/10 flex items-center justify-center text-[#eba200]">
                    {feature.icon}
                  </div>
                  <span className="text-[#eba200] font-semibold font-alliance">{feature.step}. {feature.title}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 font-alliance">{feature.subtitle}</p>
                <ul className="space-y-2 text-gray-400 text-sm font-alliance">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#eba200]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "Capture Real-Time Risk Data",
                description: "NIXN continuously collects data from:",
                items: [
                  { icon: <FileSpreadsheet className="w-4 h-4" />, text: "Job hazard analyses (JHAs/JSAs)" },
                  { icon: <HardHat className="w-4 h-4" />, text: "Site audits and observations" },
                  { icon: <AlertTriangle className="w-4 h-4" />, text: "Incident reports and near misses" },
                  { icon: <Wrench className="w-4 h-4" />, text: "Equipment and maintenance records" },
                  { icon: <Users className="w-4 h-4" />, text: "Workforce experience and complexity" }
                ],
                callout: "Unlike traditional reporting that only tracks past failures, NIXN captures and scores live risk factors before incidents occur."
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Quantify & Score Risk Exposure",
                description: "Proprietary ML models assign risk scores based on:",
                items: [
                  { icon: <Users className="w-4 h-4" />, text: "Task complexity and workforce capability" },
                  { icon: <AlertTriangle className="w-4 h-4" />, text: "Hazard severity and exposure frequency" },
                  { icon: <TrendingUp className="w-4 h-4" />, text: "Leading indicators and behavior trends" },
                  { icon: <BarChart className="w-4 h-4" />, text: "Industry benchmarks and patterns" }
                ],
                callout: "Companies can now see their true risk profile, enabling proactive intervention and precision pricing of risk."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Deliver Actionable Intelligence",
                description: "NIXN integrates with enterprise workflows to:",
                items: [
                  { icon: <Bell className="w-4 h-4" />, text: "Alert teams to emerging risk trends" },
                  { icon: <TrendingUp className="w-4 h-4" />, text: "Prioritize highest-impact safety actions" },
                  { icon: <BarChart className="w-4 h-4" />, text: "Optimize insurance underwriting" },
                  { icon: <Workflow className="w-4 h-4" />, text: "Generate actionable reports" }
                ],
                callout: "No more gut decisions. Every action is backed by real, quantifiable risk data."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#16171a] p-6 md:p-8 rounded-2xl border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#eba200]/10 flex items-center justify-center text-[#eba200]">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white font-alliance">{step.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 font-alliance">{step.description}</p>
                <ul className="space-y-3 mb-6">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400 text-sm font-alliance">
                      <span className="text-[#eba200]">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-[#1f2024] rounded-xl border border-gray-800">
                  <p className="text-sm text-gray-400 font-alliance">
                    <strong className="text-[#eba200]">Why it matters:</strong> {step.callout}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dashboard Image */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#16171a] p-6 md:p-10 rounded-2xl border border-gray-800"
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center font-alliance">Live Risk Intelligence Dashboard</h3>
            <div className="rounded-xl overflow-hidden border border-gray-800 shadow-sm">
              <img
                src="/uploads/NIXNScreenGrab.png"
                alt="NIXN Dashboard Interface"
                className="w-full"
              />
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center font-alliance">
              Real-time visualization of risk exposure across your operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* ARM Framework Section - Dark */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#0b0b0d]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#eba200] font-semibold text-sm tracking-wide uppercase mb-4 block font-alliance">
              Our Framework
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-alliance">
              Action Risk Mitigator Framework
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-alliance">
              A comprehensive approach to task risk rating - Understanding the relationship between actions, their associated risks, and control measures
            </p>
          </motion.div>

          {/* ARM Flow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: "Task Identification", subtitle: "Identifies active work tasks and operations" },
                { title: "Hazard Assessment", subtitle: "Analyzes potential hazards and exposures" },
                { title: "Mitigator Evaluation", subtitle: "Assesses control measures and effectiveness" },
                { title: "Real-time Risk Score", subtitle: "Calculates dynamic risk level and exposure" }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-center">
                    <div className="w-10 h-10 rounded-full bg-[#eba200] flex items-center justify-center mx-auto mb-4">
                      <span className="text-black font-bold font-alliance">{index + 1}</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2 font-alliance">{item.title}</h4>
                    <p className="text-gray-400 text-sm font-alliance">{item.subtitle}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#eba200]" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Framework Description */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-6 font-alliance">How It Works</h3>
              <ul className="space-y-4">
                {[
                  "Actions are categorized and scored based on complexity, frequency, and historical risk factors.",
                  "Risks are quantified using ML models trained on millions of real-world data points.",
                  "Mitigators are dynamically suggested based on the specific risk profile and available controls."
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#eba200] flex items-center justify-center flex-shrink-0 text-black font-bold font-alliance">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 font-alliance">{text}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-6 font-alliance">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Standardized risk assessment across all operations and locations",
                  "Data-driven insights for continuous safety improvement",
                  "Real-time adaptation to changing conditions and emerging risks",
                  "Predictive analytics for proactive risk management"
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#eba200] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 font-alliance">{text}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proven Impact Section - Light */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#16171a]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#eba200] font-semibold text-sm tracking-wide uppercase mb-4 block font-alliance">
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-alliance">
              NIXN Delivers Real Results
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-alliance">
              NIXN isn&apos;t just a tool—it&apos;s a transformation engine. Our platform has delivered measurable improvements across industries, reducing claims, increasing risk mitigation, and driving significant cost savings.
            </p>
          </motion.div>

          {/* Key Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {[
              { icon: <LightbulbIcon className="w-6 h-6" />, stat: "+14%", title: "Risk Mitigation", description: "NIXN enables organizations to proactively eliminate hazards before they escalate into costly incidents." },
              { icon: <AlertCircle className="w-6 h-6" />, stat: "10.9K", title: "Hazards Identified", description: "Real-time data capture ensures that potential risks are surfaced and acted on immediately." },
              { icon: <TrendingUp className="w-6 h-6" />, stat: "+275%", title: "Near Miss Reporting", description: "A massive shift towards proactive risk management, strengthening workforce engagement and accountability." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1f2024] p-6 md:p-8 rounded-2xl border border-gray-800 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#eba200]/10 flex items-center justify-center mb-4 text-[#eba200]">
                  {item.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#eba200] mb-2 font-alliance">{item.stat}</div>
                <h3 className="text-white font-semibold mb-3 font-alliance">{item.title}</h3>
                <p className="text-gray-400 text-sm font-alliance">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Five-Year Industry Results */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1f2024] p-8 md:p-12 rounded-2xl border border-gray-800 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-white mb-10 text-center font-alliance">Five-Year Industry-Wide Results</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: "50%", label: "Decrease in Claim Frequency" },
                { stat: "97%", label: "Decrease in Claim Severity" },
                { stat: "94%", label: "Reduction in Cost Per Claim" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#eba200] mb-3 font-alliance">{item.stat}</div>
                  <div className="text-gray-400 font-medium font-alliance">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#0b0b0d]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#eba200] font-semibold text-sm tracking-wide uppercase mb-4 block font-alliance">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-alliance">
              Ready to Transform Your Risk Management?
            </h2>
            <p className="text-lg text-gray-400 mb-10 font-alliance">
              Join the organizations that are already using NIXN to reduce risk, lower costs, and drive better outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <DemoScheduleModal />
              <TrialSetupModal />
            </div>
            <p className="text-sm text-gray-500 mt-8 font-alliance">
              Get started in minutes. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
