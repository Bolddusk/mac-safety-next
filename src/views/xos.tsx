import { Button } from "@/component/ui/button";
import {
  Brain,
  Users,
  Calendar,
  Bot,
  Workflow,
  Shield,
  Upload,
  FileText,
  Book,
} from "lucide-react";
import { RequestDemoModal } from "@/component/xos/RequestDemoModal";
import Footer from "@/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function XOSPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black -z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 -z-20"
        >
          <source src="/uploads/command-center.mp4" type="video/mp4" />
        </video>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-6 md:space-y-8 p-4 md:p-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                <Image
                  src="/uploads/xos_logo.webp"
                  alt="xOS Logo"
                  width={500} // Adjust width based on actual requirements
                  height={500} // Adjust height based on actual requirements
                  className="w-full h-full object-contain relative z-10 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#eba200] to-[#64FFDA] filter blur-2xl opacity-30 animate-pulse rounded-2xl"></div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                Transform Safety into Risk Intelligence
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                xOS transforms safety professionals into strategic risk leaders
                by centralizing data, automating workflows, and delivering
                AI-powered insights across your entire organization.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                <a
                  href="https://nixnos.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-[200px] bg-gradient-to-r from-[#eba200] to-[#64FFDA] text-black hover:shadow-[0_0_15px_rgba(100,255,218,0.5)] transition-all"
                  >
                    Launch xOS
                  </Button>
                </a>
                <div className="w-full sm:w-[240px] border rounded-sm cursor-pointer p-[0.5rem] border-white text-white hover:bg-[#eba200] hover:border-[#eba200] hover:text-black hover:shadow-[0_0_15px_rgba(235,162,0,0.5)] transition-all">
                  <Link
                    href="#features" // Smooth scrolling works with `id`
                    scroll={true} // Prevents automatic scrolling behavior
                  >
                    How It Works
                  </Link>
                </div>
                <div className="w-full sm:w-[200px]">
                  <RequestDemoModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section id="features" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Key Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From data collection to AI-powered insights, xOS provides a
              comprehensive suite of tools for modern risk management.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {" "}
            {/* Changed to grid md:grid-cols-1 */}
            {/* NIXNos Feed Section */}
            <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Upload className="w-6 h-6 text-[#64FFDA]" />
                <h3 className="text-xl font-semibold text-white">
                  The NIXNos Feed
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                The core of operational intelligence where every risk, incident,
                and operational detail is captured and processed.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Upload and process any file type - from inspection reports
                    to maintenance logs
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Conduct and document meetings with structured note-taking
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Track tasks from assignment to completion
                  </span>
                </div>
              </div>
            </div>
            {/* Training Matrix Section */}
            <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Book className="w-6 h-6 text-[#64FFDA]" />
                <h3 className="text-xl font-semibold text-white">
                  Training Matrix
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Real-time workforce readiness tracking and certification
                management system.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Track training records, schedules, and certifications
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Monitor compliance and certification status
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Identify and address skill gaps proactively
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kaleidoscope LLM Section */}
      <section className="py-16 md:py-24 px-4 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/uploads/nixn_button.webp"
                  alt="NIXN Logo"
                  width={500} // Adjust as needed
                  height={500} // Adjust as needed
                  className="w-full h-full object-contain relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#eba200] to-[#64FFDA] filter blur-xl opacity-30 animate-pulse"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Kaleidoscope LLM
              </h2>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Unlock the power of institutional knowledge with our advanced
              multi-modal AI system, delivering actionable insights across your
              entire organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Visual Representation */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/uploads/kaleidoscope_llm.webp"
                  alt="Kaleidoscope LLM Visualization"
                  width={500} // Adjust as needed
                  height={500} // Adjust as needed
                  className="w-full h-full object-contain relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#eba200] to-[#64FFDA] filter blur-3xl opacity-20 animate-pulse"></div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-[#64FFDA]" />
                  <h3 className="text-xl font-semibold text-white">
                    Document Analysis
                  </h3>
                </div>
                <p className="text-gray-300">
                  Process and analyze any document type, from safety reports to
                  maintenance logs, extracting key insights and patterns
                  automatically.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-6 h-6 text-[#64FFDA]" />
                  <h3 className="text-xl font-semibold text-white">
                    Natural Language Interface
                  </h3>
                </div>
                <p className="text-gray-300">
                  Ask complex questions in plain English and receive detailed,
                  contextualized answers based on your organization&apos;s data.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-[#64FFDA]" />
                  <h3 className="text-xl font-semibold text-white">
                    Predictive Analytics
                  </h3>
                </div>
                <p className="text-gray-300">
                  Leverage advanced machine learning to identify trends, predict
                  potential risks, and recommend proactive mitigation
                  strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Enterprise Value Proposition */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Why Kaleidoscope LLM Matters for Enterprise
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
                  Knowledge Unification
                </h4>
                <p className="text-gray-300">
                  Transform scattered data into a unified knowledge base.
                  Kaleidoscope breaks down silos, making your
                  organization&apos;s collective expertise instantly accessible
                  and actionable.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
                  Decision Acceleration
                </h4>
                <p className="text-gray-300">
                  Reduce decision-making time from weeks to minutes.
                  Kaleidoscope processes vast amounts of data, providing instant
                  insights that would typically require extensive manual
                  analysis.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
                  Risk Intelligence
                </h4>
                <p className="text-gray-300">
                  Turn historical data into predictive insights. By analyzing
                  patterns across your entire operation, Kaleidoscope helps
                  prevent incidents before they occur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atlas Risk Mapping Section */}
      <section className="py-16 md:py-24 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/uploads/Atlas_2.webp"
                  alt="Atlas Logo"
                  width={500} // Adjust as needed
                  height={500} // Adjust as needed
                  className="w-full h-full object-contain relative z-10"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#eba200] to-[#64FFDA] filter blur-xl opacity-30 animate-pulse"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Atlas Risk Mapping
              </h2>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform your risk management with our advanced mapping engine
              that provides unprecedented visibility into your
              organization&apos;s risk landscape.
            </p>
          </div>

          {/* Main Visual */}
          <div className="relative rounded-xl overflow-hidden mb-16">
            <Image
              src="/uploads/473shots_so.webp"
              alt="Atlas Risk Mapping Interface"
              width={500} // Adjust as needed
              height={500} // Adjust as needed
              className="w-full h-full object-contain relative z-10"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#eba200] to-[#64FFDA] filter blur-3xl opacity-20 animate-pulse"></div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
                Digital Twin Modeling
              </h4>
              <p className="text-gray-300">
                Create comprehensive digital representations of your facilities,
                assets, and operations. Map relationships and dependencies in
                real-time for a complete risk overview.
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
                Risk Cascade Analysis
              </h4>
              <p className="text-gray-300">
                Understand how risks propagate through your organization with
                our proprietary cascade analysis. Identify critical nodes and
                potential failure points before they impact operations.
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
                Scenario Planning
              </h4>
              <p className="text-gray-300">
                Run sophisticated &quot;what-if&quot; scenarios to stress-test
                your operations. Develop and validate contingency plans based on
                real data and network analysis.
              </p>
            </div>
          </div>

          {/* Enterprise Value Section */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Why Atlas Matters for Enterprise
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
                  Operational Resilience
                </h4>
                <p className="text-gray-300">
                  Build a resilient organization by understanding the complex
                  web of dependencies between facilities, processes, and teams.
                  Identify and strengthen critical operational nodes before
                  disruptions occur.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
                  Strategic Planning
                </h4>
                <p className="text-gray-300">
                  Transform risk management from reactive to proactive.
                  Atlas&apos;s predictive modeling enables data-driven decision
                  making for resource allocation and long-term strategic
                  planning.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
                  Compliance & Governance
                </h4>
                <p className="text-gray-300">
                  Maintain comprehensive visibility of your risk landscape for
                  regulatory compliance. Generate detailed reports and maintain
                  audit trails of risk assessment and mitigation efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
