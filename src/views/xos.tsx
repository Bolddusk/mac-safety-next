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
  Database,
  Map,
  FileSpreadsheet,
  Activity,
} from "lucide-react";
import { RequestDemoModal } from "@/component/xos/RequestDemoModal";
import Footer from "@/layout/Footer";
import Link from "next/link";

export default function XOSPage() {

  return (
    // <div className="min-h-screen bg-black">
    //   {/* Hero Section - Mobile Optimized */}
    //   <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-4 relative overflow-hidden">
    //     <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black -z-10"></div>
    //     <video
    //       autoPlay
    //       muted
    //       loop
    //       playsInline
    //       className="absolute inset-0 w-full h-full object-cover opacity-30 -z-20"
    //     >
    //       <source src="/uploads/command-center.mp4" type="video/mp4" />
    //     </video>

    //     <div className="container mx-auto max-w-6xl relative z-10">
    //       <div className="flex flex-col items-center text-center">
    //         <div className="space-y-6 md:space-y-8 p-4 md:p-6">
    //           <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
    //             <Image
    //               src="/uploads/xos_logo.webp"
    //               alt="xOS Logo"
    //               width={500} // Adjust width based on actual requirements
    //               height={500} // Adjust height based on actual requirements
    //               className="w-full h-full object-contain relative z-10 rounded-2xl"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-r from-[#eba200] to-[#64FFDA] filter blur-2xl opacity-30 animate-pulse rounded-2xl"></div>
    //           </div>

    //           <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
    //             Transform Safety into Risk Intelligence
    //           </h1>

    //           <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
    //             xOS transforms safety professionals into strategic risk leaders
    //             by centralizing data, automating workflows, and delivering
    //             AI-powered insights across your entire organization.
    //           </p>

    //           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
    //             <a
    //               href="https://nixnos.app"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="w-full sm:w-auto"
    //             >
    //               <Button
    //                 size="lg"
    //                 className="w-full sm:w-[200px] bg-gradient-to-r from-[#eba200] to-[#64FFDA] text-black hover:shadow-[0_0_15px_rgba(100,255,218,0.5)] transition-all"
    //               >
    //                 Launch xOS
    //               </Button>
    //             </a>
    //             <div className="w-full sm:w-[240px] border rounded-sm cursor-pointer p-[0.5rem] border-white text-white hover:bg-[#eba200] hover:border-[#eba200] hover:text-black hover:shadow-[0_0_15px_rgba(235,162,0,0.5)] transition-all">
    //               <Link
    //                 href="#features" // Smooth scrolling works with `id`
    //                 scroll={true} // Prevents automatic scrolling behavior
    //               >
    //                 How It Works
    //               </Link>
    //             </div>
    //             <div className="w-full sm:w-[200px]">
    //               <RequestDemoModal />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Key Capabilities Section */}
    //   <section id="features" className="py-16 md:py-24 px-4">
    //     <div className="container mx-auto max-w-6xl">
    //       <div className="text-center mb-12 md:mb-16">
    //         <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
    //           Key Capabilities
    //         </h2>
    //         <p className="text-lg text-gray-300 max-w-3xl mx-auto">
    //           From data collection to AI-powered insights, xOS provides a
    //           comprehensive suite of tools for modern risk management.
    //         </p>
    //       </div>

    //       <div className="grid md:grid-cols-1 gap-8">
    //         {" "}
    //         {/* Changed to grid md:grid-cols-1 */}
    //         {/* NIXNos Feed Section */}
    //         <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //           <div className="flex items-center gap-3 mb-4">
    //             <Upload className="w-6 h-6 text-[#64FFDA]" />
    //             <h3 className="text-xl font-semibold text-white">
    //               The NIXNos Feed
    //             </h3>
    //           </div>
    //           <p className="text-gray-300 mb-6">
    //             The core of operational intelligence where every risk, incident,
    //             and operational detail is captured and processed.
    //           </p>
    //           <div className="space-y-4">
    //             <div className="flex items-start gap-3">
    //               <FileText className="w-5 h-5 text-[#eba200] mt-1" />
    //               <span className="text-gray-300">
    //                 Upload and process any file type - from inspection reports
    //                 to maintenance logs
    //               </span>
    //             </div>
    //             <div className="flex items-start gap-3">
    //               <Users className="w-5 h-5 text-[#eba200] mt-1" />
    //               <span className="text-gray-300">
    //                 Conduct and document meetings with structured note-taking
    //               </span>
    //             </div>
    //             <div className="flex items-start gap-3">
    //               <Workflow className="w-5 h-5 text-[#eba200] mt-1" />
    //               <span className="text-gray-300">
    //                 Track tasks from assignment to completion
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         {/* Training Matrix Section */}
    //         <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //           <div className="flex items-center gap-3 mb-4">
    //             <Book className="w-6 h-6 text-[#64FFDA]" />
    //             <h3 className="text-xl font-semibold text-white">
    //               Training Matrix
    //             </h3>
    //           </div>
    //           <p className="text-gray-300 mb-6">
    //             Real-time workforce readiness tracking and certification
    //             management system.
    //           </p>
    //           <div className="space-y-4">
    //             <div className="flex items-start gap-3">
    //               <Calendar className="w-5 h-5 text-[#eba200] mt-1" />
    //               <span className="text-gray-300">
    //                 Track training records, schedules, and certifications
    //               </span>
    //             </div>
    //             <div className="flex items-start gap-3">
    //               <Shield className="w-5 h-5 text-[#eba200] mt-1" />
    //               <span className="text-gray-300">
    //                 Monitor compliance and certification status
    //               </span>
    //             </div>
    //             <div className="flex items-start gap-3">
    //               <Users className="w-5 h-5 text-[#eba200] mt-1" />
    //               <span className="text-gray-300">
    //                 Identify and address skill gaps proactively
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Kaleidoscope LLM Section */}
    //   <section className="py-16 md:py-24 px-4 bg-black/50">
    //     <div className="container mx-auto max-w-6xl">
    //       <div className="text-center mb-12 md:mb-16">
    //         <div className="flex items-center justify-center gap-3 mb-6">
    //           <div className="relative w-16 h-16">
    //             <Image
    //               src="/uploads/nixn_button.webp"
    //               alt="NIXN Logo"
    //               width={500} // Adjust as needed
    //               height={500} // Adjust as needed
    //               className="w-full h-full object-contain relative z-10"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-r from-[#eba200] to-[#64FFDA] filter blur-xl opacity-30 animate-pulse"></div>
    //           </div>
    //           <h2 className="text-3xl md:text-5xl font-bold text-white">
    //             Kaleidoscope LLM
    //           </h2>
    //         </div>
    //         <p className="text-lg text-gray-300 max-w-3xl mx-auto">
    //           Unlock the power of institutional knowledge with our advanced
    //           multi-modal AI system, delivering actionable insights across your
    //           entire organization.
    //         </p>
    //       </div>

    //       <div className="grid md:grid-cols-2 gap-8 mb-16">
    //         {/* Visual Representation */}
    //         <div className="relative flex items-center justify-center">
    //           <div className="relative w-full max-w-md">
    //             <Image
    //               src="/uploads/kaleidoscope_llm.webp"
    //               alt="Kaleidoscope LLM Visualization"
    //               width={500} // Adjust as needed
    //               height={500} // Adjust as needed
    //               className="w-full h-full object-contain relative z-10"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-r from-[#eba200] to-[#64FFDA] filter blur-3xl opacity-20 animate-pulse"></div>
    //           </div>
    //         </div>

    //         {/* Features List */}
    //         <div className="space-y-6">
    //           <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //             <div className="flex items-center gap-3 mb-4">
    //               <FileText className="w-6 h-6 text-[#64FFDA]" />
    //               <h3 className="text-xl font-semibold text-white">
    //                 Document Analysis
    //               </h3>
    //             </div>
    //             <p className="text-gray-300">
    //               Process and analyze any document type, from safety reports to
    //               maintenance logs, extracting key insights and patterns
    //               automatically.
    //             </p>
    //           </div>

    //           <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //             <div className="flex items-center gap-3 mb-4">
    //               <Bot className="w-6 h-6 text-[#64FFDA]" />
    //               <h3 className="text-xl font-semibold text-white">
    //                 Natural Language Interface
    //               </h3>
    //             </div>
    //             <p className="text-gray-300">
    //               Ask complex questions in plain English and receive detailed,
    //               contextualized answers based on your organization&apos;s data.
    //             </p>
    //           </div>

    //           <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //             <div className="flex items-center gap-3 mb-4">
    //               <Brain className="w-6 h-6 text-[#64FFDA]" />
    //               <h3 className="text-xl font-semibold text-white">
    //                 Predictive Analytics
    //               </h3>
    //             </div>
    //             <p className="text-gray-300">
    //               Leverage advanced machine learning to identify trends, predict
    //               potential risks, and recommend proactive mitigation
    //               strategies.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Enterprise Value Proposition */}
    //       <div className="mt-16">
    //         <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
    //           Why Kaleidoscope LLM Matters for Enterprise
    //         </h3>
    //         <div className="grid md:grid-cols-3 gap-8">
    //           <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //             <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
    //               Knowledge Unification
    //             </h4>
    //             <p className="text-gray-300">
    //               Transform scattered data into a unified knowledge base.
    //               Kaleidoscope breaks down silos, making your
    //               organization&apos;s collective expertise instantly accessible
    //               and actionable.
    //             </p>
    //           </div>

    //           <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //             <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
    //               Decision Acceleration
    //             </h4>
    //             <p className="text-gray-300">
    //               Reduce decision-making time from weeks to minutes.
    //               Kaleidoscope processes vast amounts of data, providing instant
    //               insights that would typically require extensive manual
    //               analysis.
    //             </p>
    //           </div>

    //           <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //             <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
    //               Risk Intelligence
    //             </h4>
    //             <p className="text-gray-300">
    //               Turn historical data into predictive insights. By analyzing
    //               patterns across your entire operation, Kaleidoscope helps
    //               prevent incidents before they occur.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Atlas Risk Mapping Section */}
    //   <section className="py-16 md:py-24 px-4 bg-black">
    //     <div className="container mx-auto max-w-6xl">
    //       <div className="text-center mb-12 md:mb-16">
    //         <div className="flex items-center justify-center gap-3 mb-6">
    //           <div className="relative w-16 h-16">
    //             <Image
    //               src="/uploads/Atlas_2.webp"
    //               alt="Atlas Logo"
    //               width={500} // Adjust as needed
    //               height={500} // Adjust as needed
    //               className="w-full h-full object-contain relative z-10"
    //             />

    //             <div className="absolute inset-0 bg-gradient-to-r from-[#eba200] to-[#64FFDA] filter blur-xl opacity-30 animate-pulse"></div>
    //           </div>
    //           <h2 className="text-3xl md:text-5xl font-bold text-white">
    //             Atlas Risk Mapping
    //           </h2>
    //         </div>
    //         <p className="text-lg text-gray-300 max-w-3xl mx-auto">
    //           Transform your risk management with our advanced mapping engine
    //           that provides unprecedented visibility into your
    //           organization&apos;s risk landscape.
    //         </p>
    //       </div>

    //       {/* Main Visual */}
    //       <div className="relative rounded-xl overflow-hidden mb-16">
    //         <Image
    //           src="/uploads/473shots_so.webp"
    //           alt="Atlas Risk Mapping Interface"
    //           width={500} // Adjust as needed
    //           height={500} // Adjust as needed
    //           className="w-full h-full object-contain relative z-10"
    //         />

    //         <div className="absolute inset-0 bg-gradient-to-r from-[#eba200] to-[#64FFDA] filter blur-3xl opacity-20 animate-pulse"></div>
    //       </div>

    //       {/* Features Grid */}
    //       <div className="grid md:grid-cols-3 gap-8">
    //         <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //           <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
    //             Digital Twin Modeling
    //           </h4>
    //           <p className="text-gray-300">
    //             Create comprehensive digital representations of your facilities,
    //             assets, and operations. Map relationships and dependencies in
    //             real-time for a complete risk overview.
    //           </p>
    //         </div>

    //         <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //           <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
    //             Risk Cascade Analysis
    //           </h4>
    //           <p className="text-gray-300">
    //             Understand how risks propagate through your organization with
    //             our proprietary cascade analysis. Identify critical nodes and
    //             potential failure points before they impact operations.
    //           </p>
    //         </div>

    //         <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //           <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
    //             Scenario Planning
    //           </h4>
    //           <p className="text-gray-300">
    //             Run sophisticated &quot;what-if&quot; scenarios to stress-test
    //             your operations. Develop and validate contingency plans based on
    //             real data and network analysis.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Enterprise Value Section */}
    //       <div className="mt-16">
    //         <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
    //           Why Atlas Matters for Enterprise
    //         </h3>
    //         <div className="grid md:grid-cols-3 gap-8">
    //           <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //             <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
    //               Operational Resilience
    //             </h4>
    //             <p className="text-gray-300">
    //               Build a resilient organization by understanding the complex
    //               web of dependencies between facilities, processes, and teams.
    //               Identify and strengthen critical operational nodes before
    //               disruptions occur.
    //             </p>
    //           </div>

    //           <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //             <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
    //               Strategic Planning
    //             </h4>
    //             <p className="text-gray-300">
    //               Transform risk management from reactive to proactive.
    //               Atlas&apos;s predictive modeling enables data-driven decision
    //               making for resource allocation and long-term strategic
    //               planning.
    //             </p>
    //           </div>

    //           <div className="bg-black/40 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
    //             <h4 className="text-xl font-semibold text-[#64FFDA] mb-4">
    //               Compliance & Governance
    //             </h4>
    //             <p className="text-gray-300">
    //               Maintain comprehensive visibility of your risk landscape for
    //               regulatory compliance. Generate detailed reports and maintain
    //               audit trails of risk assessment and mitigation efforts.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <Footer />
    // </div>
    <div className="min-h-screen bg-black">
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black -z-10"></div>
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 -z-20"
        >
          <source src="/uploads/command-center.mp4" type="video/mp4" />
        </video> */}

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-6 md:space-y-8 p-4 md:p-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                <img
                  src="/uploads/xos_logo.webp"
                  alt="xOS Logo"
                  className="w-full h-full object-contain relative z-10 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#eba200] to-[#64FFDA] filter blur-2xl opacity-30 animate-pulse rounded-2xl"></div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                Your Command Center for{" "}
                <span className="text-[#eba200]">Operational Intelligence</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                In an era where data is abundant but actionable insights are
                scarce, xOS emerges as the enterprise operating system designed
                to unify, analyze, and operationalize intelligence across your
                organization.
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
                    className="w-full sm:w-[200px] bg-gradient-to-r from-[#eba200] to-[#64FFDA] text-black hover:shadow-[0_0_15px_rgba(100,255,218,0.5)] transition-all cursor-pointer"
                  >
                    Launch xOS
                  </Button>
                </a>
                <Link
                  href="#features"
                  // size="lg"
                  // variant="outline"
                  className="w-full sm:w-[200px] border border-white transition-all duration-200   text-white hover:bg-gradient-to-r hover:from-[#eba200] hover:to-[#64FFDA] hover:text-black hover:border-transparent hover:shadow-[0_0_15px_rgba(100,255,218,0.5)] cursor-pointer p-[0.6rem] rounded-lg"
                  // onClick={scrollToFeatures}
                >
                  Learn More
                </Link>
                <div className="w-full sm:w-[200px] cursor-pointer">
                  <RequestDemoModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uncertainty Section - Military-Grade HUD Display */}
      <section
        // ref={uncertaintyRef}
        className="py-28 md:py-32 px-4 bg-black relative overflow-hidden min-h-screen flex flex-col justify-center items-center"
      >
        <div className="absolute inset-0 bg-[url('/uploads/grid.png')] bg-center opacity-5 z-0"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Intro Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Uncertainty isn&apos;t abstract.
            </h2>
            <p className="text-2xl md:text-3xl font-light text-[#eba200] mb-6">
              It lives inside your operations.
            </p>
          </div>

          {/* Military-Grade HUD Industrial Display */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-[#020c11] border border-[#1d3744]">
            {/* Background Grid */}
            <div
              className="absolute inset-0 bg-[url('/uploads/grid.png')] bg-center opacity-10 z-0"
              style={{ backgroundSize: "30px 30px" }}
            ></div>

            {/* Border Frame with Industrial Corners */}
            <div className="absolute inset-0 pointer-events-none border border-[#1d3744] z-30">
              {/* Top-left corner */}
              <div className="absolute top-0 left-0 border-t-2 border-l-2 border-[#eba200] w-8 h-8"></div>
              {/* Top-right corner */}
              <div className="absolute top-0 right-0 border-t-2 border-r-2 border-[#eba200] w-8 h-8"></div>
              {/* Bottom-left corner */}
              <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-[#eba200] w-8 h-8"></div>
              {/* Bottom-right corner */}
              <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-[#eba200] w-8 h-8"></div>
            </div>

            {/* Header Banner */}
            <div className="absolute top-0 left-0 right-0 border-b border-[#1d3744] bg-black/50 py-2 px-4 flex justify-between items-center z-20">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#eba200] rounded-sm"></div>
                <div className="ml-2 text-[10px] font-mono text-[#eba200] uppercase tracking-wider">
                  System Status:{" "}
                  <span className="text-[#64FFDA]">OPERATIONAL</span>
                </div>
              </div>
              <div className="text-xs text-[#64FFDA] font-mono tracking-wider">
                RISK ASSESSMENT MATRIX
              </div>
              <div className="text-[10px] font-mono text-white/50">
                <span className="text-[#eba200]">■</span> UNCERTAINTY FLOW MODEL
                v1.2.3
              </div>
            </div>

            {/* Main Content Container */}
            <div className="absolute inset-0 z-10 pt-10 pb-8 px-6 flex">
              <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row h-full gap-4 md:gap-8">
                {/* Left Panel - Data Visualization */}
                <div className="w-full md:w-5/12 h-full border border-[#1d3744] bg-black/20 p-4 flex flex-col">
                  <div className="text-xs text-[#64FFDA] font-mono uppercase tracking-wider border-b border-[#1d3744] pb-2 mb-4 flex justify-between">
                    <span>Uncertainty Analytics</span>
                    <span className="text-white/50">[SCAN ACTIVE]</span>
                  </div>

                  {/* Visualization Container */}
                  <div className="flex-grow flex flex-col justify-center items-center">
                    <div className="relative w-full max-w-md mx-auto aspect-square">
                      {/* Backdrop Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#eba200]/10 to-[#64FFDA]/5 rounded-full blur-2xl opacity-20"></div>

                      {/* Main SVG Visualization - All 3 Elements Combined */}
                      <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                      >
                        {/* Grid Background */}
                        <pattern
                          id="smallGrid"
                          width="10"
                          height="10"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 10 0 L 0 0 0 10"
                            fill="none"
                            stroke="#1d3744"
                            strokeWidth="0.5"
                          />
                        </pattern>
                        <rect
                          width="200"
                          height="200"
                          fill="url(#smallGrid)"
                          opacity="0.3"
                        />

                        {/* Center Circle with Measurement Marks */}
                        <circle
                          cx="100"
                          cy="100"
                          r="70"
                          fill="none"
                          stroke="#1d3744"
                          strokeWidth="1"
                        />
                        <circle
                          cx="100"
                          cy="100"
                          r="50"
                          fill="none"
                          stroke="#1d3744"
                          strokeWidth="1"
                        />
                        <circle
                          cx="100"
                          cy="100"
                          r="30"
                          fill="none"
                          stroke="#1d3744"
                          strokeWidth="1"
                        />
                        <circle
                          cx="100"
                          cy="100"
                          r="10"
                          fill="none"
                          stroke="#1d3744"
                          strokeWidth="1"
                        />

                        {/* Coordinate Axes */}
                        <line
                          x1="30"
                          y1="100"
                          x2="170"
                          y2="100"
                          stroke="#1d3744"
                          strokeWidth="1"
                        />
                        <line
                          x1="100"
                          y1="30"
                          x2="100"
                          y2="170"
                          stroke="#1d3744"
                          strokeWidth="1"
                        />

                        {/* Uncertainty Flow Path */}
                        <path
                          d="M60,100 C60,80 80,70 100,75 C120,80 140,60 140,100 C140,140 120,130 100,125 C80,120 60,120 60,100 Z"
                          fill="none"
                          stroke="#eba200"
                          strokeWidth="1.5"
                          strokeDasharray="1 2"
                          filter="drop-shadow(0 0 3px rgba(235, 162, 0, 0.5))"
                        />

                        {/* Decision Cascade Pathways */}
                        <line
                          x1="100"
                          y1="60"
                          x2="100"
                          y2="100"
                          stroke="#eba200"
                          strokeWidth="1.5"
                        />
                        <line
                          x1="100"
                          y1="100"
                          x2="70"
                          y2="130"
                          stroke="#eba200"
                          strokeWidth="1.5"
                        />
                        <line
                          x1="100"
                          y1="100"
                          x2="130"
                          y2="130"
                          stroke="#64FFDA"
                          strokeWidth="1.5"
                        />
                        <line
                          x1="70"
                          y1="130"
                          x2="60"
                          y2="150"
                          stroke="#eba200"
                          strokeWidth="1.5"
                        />
                        <line
                          x1="70"
                          y1="130"
                          x2="80"
                          y2="150"
                          stroke="#64FFDA"
                          strokeWidth="1.5"
                        />
                        <line
                          x1="130"
                          y1="130"
                          x2="120"
                          y2="150"
                          stroke="#eba200"
                          strokeWidth="1.5"
                        />
                        <line
                          x1="130"
                          y1="130"
                          x2="140"
                          y2="150"
                          stroke="#64FFDA"
                          strokeWidth="1.5"
                        />

                        {/* Impact Circles - Different sizes */}
                        <circle
                          cx="100"
                          cy="100"
                          r="35"
                          fill="#eba200"
                          fillOpacity="0.1"
                          stroke="#eba200"
                          strokeWidth="0.5"
                        />
                        <circle
                          cx="100"
                          cy="100"
                          r="25"
                          fill="#64FFDA"
                          fillOpacity="0.1"
                          stroke="#64FFDA"
                          strokeWidth="0.5"
                        />
                        <circle
                          cx="100"
                          cy="100"
                          r="15"
                          fill="#eba200"
                          fillOpacity="0.15"
                          stroke="#eba200"
                          strokeWidth="0.5"
                        />
                        <circle
                          cx="100"
                          cy="100"
                          r="5"
                          fill="#64FFDA"
                          fillOpacity="0.3"
                          stroke="#64FFDA"
                          strokeWidth="1"
                        />

                        {/* Measurement Indicators (Small markers at key points) */}
                        <circle cx="100" cy="60" r="3" fill="#eba200" />
                        <circle cx="100" cy="100" r="3" fill="#eba200" />
                        <circle cx="70" cy="130" r="3" fill="#eba200" />
                        <circle cx="130" cy="130" r="3" fill="#64FFDA" />
                        <circle cx="60" cy="150" r="2" fill="#eba200" />
                        <circle cx="80" cy="150" r="2" fill="#64FFDA" />
                        <circle cx="120" cy="150" r="2" fill="#eba200" />
                        <circle cx="140" cy="150" r="2" fill="#64FFDA" />

                        {/* Radial Impact Lines */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * 45 * Math.PI) / 180;
                          const x1 = 100 + 8 * Math.cos(angle);
                          const y1 = 100 + 8 * Math.sin(angle);
                          const x2 = 100 + 45 * Math.cos(angle);
                          const y2 = 100 + 45 * Math.sin(angle);
                          return (
                            <line
                              key={i}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke={i % 2 === 0 ? "#eba200" : "#64FFDA"}
                              strokeWidth="0.5"
                              strokeDasharray="1 3"
                            />
                          );
                        })}

                        {/* Small data points scattered around */}
                        {[...Array(20)].map((_, i) => {
                          const angle = (i * 18 * Math.PI) / 180;
                          const distance = 50 + Math.random() * 30;
                          const x = 100 + distance * Math.cos(angle);
                          const y = 100 + distance * Math.sin(angle);
                          return (
                            <circle
                              key={i}
                              cx={x}
                              cy={y}
                              r="0.8"
                              fill={i % 3 === 0 ? "#eba200" : "#64FFDA"}
                            />
                          );
                        })}

                        {/* Readout Labels */}
                        <text
                          x="40"
                          y="45"
                          fill="#eba200"
                          fontSize="6"
                          fontFamily="monospace"
                        >
                          UNCERTAINTY SOURCE
                        </text>
                        <text
                          x="40"
                          y="165"
                          fill="#eba200"
                          fontSize="6"
                          fontFamily="monospace"
                        >
                          CASCADE EFFECT
                        </text>
                        <text
                          x="135"
                          y="45"
                          fill="#64FFDA"
                          fontSize="6"
                          fontFamily="monospace"
                        >
                          DECISION POINT
                        </text>
                        <text
                          x="135"
                          y="165"
                          fill="#64FFDA"
                          fontSize="6"
                          fontFamily="monospace"
                        >
                          IMPACT ZONE
                        </text>
                      </svg>
                    </div>

                    {/* Data Readout Footer */}
                    <div className="w-full mt-4 text-[10px] font-mono text-white/70 flex justify-between">
                      <div>
                        SOURCE ID:{" "}
                        <span className="text-[#eba200]">
                          OPERATIONAL.UNCERTAINTY
                        </span>
                      </div>
                      <div>
                        IMPACT RATING:{" "}
                        <span className="text-[#64FFDA]">72.4%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Analysis & Details */}
                <div className="w-full md:w-7/12 h-full flex flex-col">
                  {/* Top Panel - Main Analysis */}
                  <div className="flex-grow border border-[#1d3744] bg-black/20 p-4 mb-4">
                    <div className="text-xs text-[#64FFDA] font-mono uppercase tracking-wider border-b border-[#1d3744] pb-2 mb-4 flex justify-between">
                      <span>Risk Assessment</span>
                      <span className="text-white/50">[CLASSIFIED]</span>
                    </div>

                    <div className="h-full flex flex-col">
                      {/* Title with Status Indicator */}
                      <div className="mb-4 border-l-2 border-[#eba200] pl-3">
                        <h2 className="text-2xl md:text-3xl font-mono text-white font-light leading-tight">
                          UNCERTAINTY ISN&apos;T ABSTRACT
                        </h2>
                        <p className="text-lg md:text-xl text-[#eba200] font-light">
                          It resides within operational systems
                        </p>
                      </div>

                      {/* Main Content */}
                      <div className="flex-grow">
                        {/* Key Findings Section */}
                        <div className="mb-6">
                          <div className="text-sm text-white font-medium mb-2 flex items-center">
                            <div className="w-3 h-3 bg-[#eba200] mr-2"></div>
                            LOCATION ANALYSIS
                          </div>
                          <p className="text-sm text-white/80 ml-5 border-l border-[#1d3744] pl-4">
                            Hidden uncertainty detected in{" "}
                            <span className="text-[#eba200]">schedules</span>,{" "}
                            <span className="text-[#eba200]">scopes</span>,{" "}
                            <span className="text-[#64FFDA]">inspections</span>,
                            and{" "}
                            <span className="text-[#64FFDA]">
                              training gaps
                            </span>
                            .
                          </p>
                        </div>

                        {/* Cascade Analysis */}
                        <div className="mb-6">
                          <div className="text-sm text-white font-medium mb-2 flex items-center">
                            <div className="w-3 h-3 bg-[#64FFDA] mr-2"></div>
                            CASCADE MAPPING
                          </div>
                          <p className="text-sm text-white/80 ml-5 border-l border-[#1d3744] pl-4">
                            Uncertainty creates decision cascades resulting in{" "}
                            <span className="text-[#64FFDA]">rework</span>,{" "}
                            <span className="text-[#64FFDA]">delays</span>,{" "}
                            <span className="text-[#eba200]">injuries</span>,
                            and <span className="text-[#eba200]">claims</span>.
                          </p>

                          {/* Tags for cascade effects */}
                          <div className="flex flex-wrap gap-2 ml-5 mt-3">
                            <div className="px-3 py-1 bg-[#64FFDA]/10 text-[#64FFDA] text-xs rounded-sm border border-[#64FFDA]/30 font-mono">
                              REWORK
                            </div>
                            <div className="px-3 py-1 bg-[#64FFDA]/10 text-[#64FFDA] text-xs rounded-sm border border-[#64FFDA]/30 font-mono">
                              DELAYS
                            </div>
                            <div className="px-3 py-1 bg-[#eba200]/10 text-[#eba200] text-xs rounded-sm border border-[#eba200]/30 font-mono">
                              INJURIES
                            </div>
                            <div className="px-3 py-1 bg-[#eba200]/10 text-[#eba200] text-xs rounded-sm border border-[#eba200]/30 font-mono">
                              CLAIMS
                            </div>
                          </div>
                        </div>

                        {/* Impact Analysis */}
                        <div>
                          <div className="text-sm text-white font-medium mb-2 flex items-center">
                            <div className="w-3 h-3 bg-[#eba200] mr-2"></div>
                            FINANCIAL IMPACT
                          </div>
                          <p className="text-sm text-white/80 ml-5 border-l border-[#1d3744] pl-4">
                            Uncertainty directly impacts balance sheet through
                            measurable, predictable, and preventable costs.
                          </p>
                        </div>
                      </div>

                      {/* Footer Status */}
                      <div className="text-[10px] font-mono text-white/50 pt-3 border-t border-[#1d3744] mt-3 flex items-center gap-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-[#64FFDA] rounded-full animate-pulse mr-1"></div>
                          SYSTEM ONLINE
                        </div>
                        <div>SEC LEVEL: MODERATE</div>
                        <div>MODE: DIAGNOSTIC</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Panel - Recommendations */}
                  <div className="h-24 border border-[#1d3744] bg-black/20 p-3">
                    <div className="text-xs text-[#eba200] font-mono uppercase tracking-wider mb-2">
                      CORRECTIVE ACTION PROTOCOL
                    </div>
                    <p className="text-sm text-white/80 leading-snug">
                      The cost of uncertainty is{" "}
                      <span className="text-[#64FFDA]">measurable</span>,{" "}
                      <span className="text-[#64FFDA]">predictable</span>, and{" "}
                      <span className="text-[#eba200] font-medium">
                        preventable
                      </span>{" "}
                      with optimized operational intelligence systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Bar Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-[#1d3744] bg-black/60 py-1 px-4 flex justify-between items-center text-[10px] font-mono z-20">
              <div className="text-white/50">
                MAC SAFETY • OPERATIONAL INTELLIGENCE
              </div>
              <div className="text-[#eba200]">
                CONFIDENTIAL • AUTHORIZED ACCESS ONLY
              </div>
              <div className="text-white/50">
                REF: XOS.UNCERTAINTY.ANALYSIS.2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Break Panel Section */}
      <section className="bg-black py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Break Panel */}
          <div className="relative py-16 px-4 bg-gradient-to-r from-[#0a151c] via-[#eba200] to-[#0a151c] rounded-lg text-center mb-16 border border-[#64FFDA]/30 overflow-hidden shadow-[0_0_15px_rgba(29,55,68,0.5)]">
            {/* HUD-style overlay patterns to match the above graphic */}
            <div className="absolute inset-0 bg-[url('/uploads/grid.png')] bg-center opacity-10 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-[#1d3744]/50"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1d3744]/50"></div>
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#64FFDA]/70"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#64FFDA]/70"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#64FFDA]/70"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#64FFDA]/70"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono tracking-wide">
                We build software to stop that flow.
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-[#64FFDA]">
                And replace it with modeled, measurable execution.
              </p>
            </div>
          </div>

          {/* Follow-up Panel */}
          <div className="py-12 px-8 bg-black/50 border-t border-[#eba200]/20 rounded-lg text-center">
            <p className="text-xl md:text-2xl text-white font-light mb-6">
              xOS is not a platform. It&apos;s an enterprise operating system.
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              <span className="text-[#eba200]">Fused with intelligence.</span>{" "}
              <span className="text-[#64FFDA]">
                Built for operational precision.
              </span>
            </p>
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
              comprehensive suite of tools designed for the modern enterprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NIXNos Feed Section */}
            <div className="bg-gradient-to-br from-black/80 to-black/40 p-6 rounded-lg border border-[#eba200]/20 backdrop-blur-sm hover:border-[#eba200]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(235,162,0,0.2)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#eba200]/20 to-[#64FFDA]/20 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  The NIXNos Feed
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                The core of operational intelligence where every risk, incident,
                and operational detail is captured and processed.
              </p>

              {/* Screenshot Container */}
              <div className="mb-6 rounded-md overflow-hidden border border-[#1d3744] shadow-lg relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#eba200]/5 to-transparent pointer-events-none"></div>
                <img
                  src="/uploads/879shots_so.webp"
                  alt="NIXNos Feed Interface"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 bg-black/60 px-2 py-1 text-xs text-white/70 rounded-br">
                  COMPANY FEED
                </div>
              </div>

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
            <div className="bg-gradient-to-br from-black/80 to-black/40 p-6 rounded-lg border border-[#64FFDA]/20 backdrop-blur-sm hover:border-[#64FFDA]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(100,255,218,0.2)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#eba200]/20 to-[#64FFDA]/20 flex items-center justify-center">
                  <Book className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Training Matrix
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Real-time workforce readiness tracking and certification
                management system.
              </p>

              {/* Screenshot Container */}
              <div className="mb-6 rounded-md overflow-hidden border border-[#1d3744] shadow-lg relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#64FFDA]/5 to-transparent pointer-events-none"></div>
                <img
                  src="/uploads/598shots_so.webp"
                  alt="Training Matrix Interface"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 bg-black/60 px-2 py-1 text-xs text-white/70 rounded-br">
                  TRAINING MATRIX
                </div>
              </div>

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

            {/* Task Management Section */}
            <div className="bg-gradient-to-br from-black/80 to-black/40 p-6 rounded-lg border border-[#eba200]/20 backdrop-blur-sm hover:border-[#eba200]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(235,162,0,0.2)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#eba200]/20 to-[#64FFDA]/20 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Task Management
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Comprehensive task tracking and management system that
                integrates seamlessly with your operational workflow.
              </p>

              {/* Screenshot Container */}
              <div className="mb-6 rounded-md overflow-hidden border border-[#1d3744] shadow-lg relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#eba200]/5 to-transparent pointer-events-none"></div>
                <img
                  src="/uploads/883shots_so.webp"
                  alt="Task Management Interface"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 bg-black/60 px-2 py-1 text-xs text-white/70 rounded-br">
                  TASK DASHBOARD
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileSpreadsheet className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Organize, assign, and track tasks with detailed status
                    monitoring
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Map className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Prioritize workloads with intelligent task routing and
                    escalation
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Automate workflows with task dependencies and intelligent
                    scheduling
                  </span>
                </div>
              </div>
            </div>

            {/* Enterprise LLM Chat Section */}
            <div className="bg-gradient-to-br from-black/80 to-black/40 p-6 rounded-lg border border-[#64FFDA]/20 backdrop-blur-sm hover:border-[#64FFDA]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(100,255,218,0.2)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#eba200]/20 to-[#64FFDA]/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Enterprise LLM Chat
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Conversational AI that references all data within your
                operational system, replacing traditional charts and dashboards.
              </p>

              {/* Screenshot Container */}
              <div className="mb-6 rounded-md overflow-hidden border border-[#1d3744] shadow-lg relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#64FFDA]/5 to-transparent pointer-events-none"></div>
                <img
                  src="/uploads/306shots_so.webp"
                  alt="Enterprise LLM Chat Interface"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 bg-black/60 px-2 py-1 text-xs text-white/70 rounded-br">
                  LLM CHAT INTERFACE
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Query any data in your system using natural language instead
                    of charts
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Get contextual insights and recommendations from your
                    operational data
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#eba200] mt-1" />
                  <span className="text-gray-300">
                    Generate custom reports and analysis through simple
                    conversation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundational Systems Section - Accordion Style */}
      <section className="py-16 md:py-24 px-4 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono tracking-wide">
              FOUNDATIONAL SYSTEMS THAT GOVERN EXECUTION
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              These Cores are not features. They are embedded engines of
              cognition, optimization, modeling, and precision documentation.
            </p>
          </div>

          {/* Accordion-Style Core Systems List */}
          <div className="space-y-6 mb-16">
            {/* AIX Platform */}
            <div className="bg-[#020c11] border border-[#1d3744] rounded-md overflow-hidden">
              <details className="group">
                <summary className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 p-4 md:p-6 cursor-pointer list-none">
                  <div className="flex-shrink-0 flex items-center gap-4 md:gap-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-md border border-[#1d3744] flex items-center justify-center overflow-hidden">
                      <img
                        src="/uploads/aix-logo.webp"
                        alt="AIX Logo"
                        className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                    <h3 className="text-3xl md:text-6xl font-mono text-white tracking-widest">
                      AIX
                    </h3>
                  </div>
                  <div className="flex-1 w-full md:w-auto mt-2 md:mt-0 hidden md:block">
                    <div className="text-lg md:text-2xl font-mono text-white/80 tracking-wider">
                      EMBEDDED COGNITION
                      <br />
                      ACROSS THE ENTERPRISE
                    </div>
                  </div>
                  <div className="absolute right-4 md:static md:ml-auto text-white/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transform transition-transform duration-300 group-open:rotate-180"
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
                  </div>
                </summary>
                <div className="px-6 pb-6 text-white/80">
                  <div className="bg-black/40 p-6 rounded-md border border-[#1d3744]">
                    <h4 className="text-xl font-alliance text-[#eba200] mb-4 tracking-wider">
                      EMBEDDED INTELLIGENCE CORE
                    </h4>
                    <p className="mb-6">
                      AIX is not an add-on. It is the embedded intelligence core
                      that underpins every function within xOS—powering Summit&apos;s
                      optimizations, Atlas&apos;s scenario modeling, and Foundry&apos;s
                      document generation with precision, context, and
                      foresight.
                    </p>
                    <p className="mb-6 font-semibold text-[#64FFDA]">
                      This is not a chatbot. This is an AI substrate engineered
                      for execution.
                    </p>

                    <div className="space-y-6 mt-10">
                      <div className="border-l-2 border-[#eba200]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Ontological Modeling Engine
                        </h5>
                        <p className="text-sm text-white/80">
                          AIX doesn&apos;t just understand language—it understands
                          your business. Tasks, risks, mitigations, and
                          dependencies are codified into a dynamic ontology that
                          adapts to your data, your industry, and your
                          workflows.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#64FFDA]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Contextual Execution Layer
                        </h5>
                        <p className="text-sm text-white/80">
                          Whether scheduling field crews in Summit, modeling
                          failure cascades in Atlas, or generating JHAs in
                          Foundry, AIX evaluates parameters, constraints, and
                          historical performance to ensure each action is
                          logically sound and operationally viable.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#eba200]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Multi-Modal Intelligence
                        </h5>
                        <p className="text-sm text-white/80">
                          AIX consumes structured data, reports, geospatial
                          assets, training records, and uploaded documents. It
                          fuses these into a unified intelligence fabric that
                          surfaces signals—not just information.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#64FFDA]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Proactive Decision Modeling
                        </h5>
                        <p className="text-sm text-white/80">
                          AIX simulates impacts before they materialize. It
                          injects predictive logic into every scenario—whether
                          it&apos;s project timelines, quality failures, or
                          regulatory blind spots—so leadership sees second- and
                          third-order effects before they commit.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#eba200]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Always-On Cognition
                        </h5>
                        <p className="text-sm text-white/80">
                          Unlike siloed tools or reactive dashboards, AIX
                          continuously monitors, adapts, and refines its models
                          as new data flows into the system. Every use of xOS
                          sharpens the fidelity of future decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* SUMMIT Platform */}
            <div className="bg-[#020c11] border border-[#1d3744] rounded-md overflow-hidden">
              <details className="group">
                <summary className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 p-4 md:p-6 cursor-pointer list-none">
                  <div className="flex-shrink-0 flex items-center gap-4 md:gap-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-md border border-[#1d3744] flex items-center justify-center overflow-hidden">
                      <img
                        src="/uploads/summit-logo.webp"
                        alt="SUMMIT Logo"
                        className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                    <h3 className="text-3xl md:text-6xl font-mono text-white tracking-widest">
                      SUMMIT
                    </h3>
                  </div>
                  <div className="flex-1 w-full md:w-auto mt-2 md:mt-0 hidden md:block">
                    <div className="text-lg md:text-2xl font-mono text-white/80 tracking-wider">
                      OPTIMIZATION UNDER
                      <br />
                      REAL-WORLD CONSTRAINTS
                    </div>
                  </div>
                  <div className="absolute right-4 md:static md:ml-auto text-white/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transform transition-transform duration-300 group-open:rotate-180"
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
                  </div>
                </summary>
                <div className="px-6 pb-6 text-white/80">
                  <div className="bg-black/40 p-6 rounded-md border border-[#1d3744]">
                    <h4 className="text-xl font-alliance text-[#eba200] mb-4 tracking-wider">
                      SCHEDULING AND EXECUTION ENGINE
                    </h4>
                    <p className="mb-6">
                      Summit is the scheduling and execution engine inside xOS.
                      It doesn&apos;t just plan—it understands priorities,
                      constraints, and cascading dependencies.
                    </p>

                    <div className="space-y-6 mt-10">
                      <div className="border-l-2 border-[#eba200]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Task Optimization
                        </h5>
                        <p className="text-sm text-white/80">
                          Summit analyzes tasks by risk, complexity, resource
                          availability, and past execution success. It builds
                          optimal plans that actually hold under field
                          conditions.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#64FFDA]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Schedule-Aware Risk Pricing
                        </h5>
                        <p className="text-sm text-white/80">
                          Forecast the true cost of risk on every job—down to
                          the hour, crew, and location.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#eba200]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Pipeline-Integrated
                        </h5>
                        <p className="text-sm text-white/80">
                          Seamlessly publish configurations, attach real-world
                          schedules, and run AI-powered simulations before
                          committing resources.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#64FFDA]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Cross-Industry Ready
                        </h5>
                        <p className="text-sm text-white/80">
                          Whether construction, healthcare, logistics, or
                          manufacturing—Summit adapts to your workflows.
                        </p>
                      </div>
                    </div>

                    <p className="mt-8 font-semibold text-[#64FFDA]">
                      This is not a Gantt chart. This is intelligence-forward
                      operations modeling.
                    </p>

                    <div className="mt-8 text-center">
                      <a
                        href="https://medium.com/mac-blog/summit-ai-driven-scheduling-and-workflow-optimization-revolution-05524e0b26a9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#eba200]/10 text-[#eba200] border border-[#eba200]/30 rounded-md hover:bg-[#eba200]/20 transition-colors"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* ATLAS Platform */}
            <div className="bg-[#020c11] border border-[#1d3744] rounded-md overflow-hidden">
              <details className="group">
                <summary className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 p-4 md:p-6 cursor-pointer list-none">
                  <div className="flex-shrink-0 flex items-center gap-4 md:gap-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-md border border-[#1d3744] flex items-center justify-center overflow-hidden">
                      <img
                        src="/uploads/atlas-logo.webp"
                        alt="ATLAS Logo"
                        className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                    <h3 className="text-3xl md:text-6xl font-mono text-white tracking-widest">
                      ATLAS
                    </h3>
                  </div>
                  <div className="flex-1 w-full md:w-auto mt-2 md:mt-0 hidden md:block">
                    <div className="text-lg md:text-2xl font-mono text-white/80 tracking-wider">
                      VISUALIZING RISK,
                      <br />
                      SCENARIO CASCADES,
                      <br />
                      AND FACILITY LOGIC
                    </div>
                  </div>
                  <div className="absolute right-4 md:static md:ml-auto text-white/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transform transition-transform duration-300 group-open:rotate-180"
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
                  </div>
                </summary>
                <div className="px-6 pb-6 text-white/80">
                  <div className="bg-black/40 p-6 rounded-md border border-[#1d3744]">
                    <h4 className="text-xl font-alliance text-[#eba200] mb-4 tracking-wider">
                      SYSTEM MODELING & VISUALIZATION
                    </h4>
                    <p className="mb-6">
                      Atlas turns your business into a modeled system—where
                      facilities, dependencies, and operations are mapped,
                      visualized, and stress-tested.
                    </p>

                    <div className="space-y-6 mt-10">
                      <div className="border-l-2 border-[#eba200]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Digital Twin Architecture
                        </h5>
                        <p className="text-sm text-white/80">
                          Build a virtual representation of your sites, lines,
                          or assets. Map upstream inputs and downstream effects.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#64FFDA]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Worst-Case Scenario Engine
                        </h5>
                        <p className="text-sm text-white/80">
                          Model single-point failures, supply chain shocks, or
                          human error events. See what breaks—and what holds.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#eba200]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Dependency Tracing
                        </h5>
                        <p className="text-sm text-white/80">
                          Understand how one task, delay, or outage impacts
                          throughput, safety, or compliance across the system.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#64FFDA]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Operational Terrain Mapping
                        </h5>
                        <p className="text-sm text-white/80">
                          Load actual geospatial data, production layouts, and
                          environmental risk overlays.
                        </p>
                      </div>
                    </div>

                    <p className="mt-8 font-semibold text-[#64FFDA]">
                      This is where intelligence becomes spatial. Atlas makes
                      risk and resilience visual, tangible, and manageable.
                    </p>

                    <div className="mt-8 text-center">
                      <a
                        href="https://medium.com/mac-blog/atlas-a-game-changer-in-enterprise-risk-management-460b43923013"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/30 rounded-md hover:bg-[#64FFDA]/20 transition-colors"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* XFOUNDRY Platform */}
            <div className="bg-[#020c11] border border-[#1d3744] rounded-md overflow-hidden">
              <details className="group">
                <summary className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 p-4 md:p-6 cursor-pointer list-none">
                  <div className="flex-shrink-0 flex items-center gap-4 md:gap-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-md border border-[#1d3744] flex items-center justify-center overflow-hidden">
                      <img
                        src="/uploads/xfoundry-logo.webp"
                        alt="XFOUNDRY Logo"
                        className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                    <h3 className="text-3xl md:text-6xl font-mono text-white tracking-widest">
                      XFOUNDRY
                    </h3>
                  </div>
                  <div className="flex-1 w-full md:w-auto mt-2 md:mt-0 hidden md:block">
                    <div className="text-lg md:text-2xl font-mono text-white/80 tracking-wider">
                      CODIFIED PRECISION
                      <br />
                      THROUGH DYNAMIC
                      <br />
                      DOCUMENTATION
                    </div>
                  </div>
                  <div className="absolute right-4 md:static md:ml-auto text-white/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transform transition-transform duration-300 group-open:rotate-180"
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
                  </div>
                </summary>
                <div className="px-6 pb-6 text-white/80">
                  <div className="bg-black/40 p-6 rounded-md border border-[#1d3744]">
                    <h4 className="text-xl font-alliance text-[#eba200] mb-4 tracking-wider">
                      INTELLIGENT DOCUMENTATION SYSTEM
                    </h4>
                    <p className="mb-6">
                      xFoundry is your document system reimagined. Not static
                      PDFs or outdated SOPs—but AI-generated, logic-embedded
                      operational documentation.
                    </p>

                    <div className="space-y-6 mt-10">
                      <div className="border-l-2 border-[#eba200]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          JHA/JSA Intelligence
                        </h5>
                        <p className="text-sm text-white/80">
                          xFoundry builds task-level hazard analysis based on
                          your exact scope, inputs, and workforce—not checkbox
                          forms.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#64FFDA]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Dynamic Control Plans
                        </h5>
                        <p className="text-sm text-white/80">
                          Author, distribute, and adapt control plans based on
                          live risk modeling—not outdated templates.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#eba200]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Object-Oriented Documentation
                        </h5>
                        <p className="text-sm text-white/80">
                          Every document is tied to tasks, equipment, locations,
                          and historical performance. Documents become
                          intelligent assets.
                        </p>
                      </div>

                      <div className="border-l-2 border-[#64FFDA]/50 pl-4">
                        <h5 className="text-lg font-semibold text-white mb-2">
                          Compliance, Versioning, and Audit
                        </h5>
                        <p className="text-sm text-white/80">
                          Built-in governance that&apos;s audit-ready and
                          traceable—without being bureaucratic.
                        </p>
                      </div>
                    </div>

                    <p className="mt-8 font-semibold text-[#64FFDA]">
                      This is how you scale precision, accountability, and
                      operational discipline—without slowing down execution.
                    </p>

                    <div className="mt-8 text-center">
                      <a
                        href="https://medium.com/mac-blog/foundry-the-intelligence-grade-engine-for-safety-documentation-0c1de18cf647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#eba200]/10 text-[#eba200] border border-[#eba200]/30 rounded-md hover:bg-[#eba200]/20 transition-colors"
                      >
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Integration Highlight */}
          <div className="bg-gradient-to-r from-[#020c11] to-black/80 p-8 rounded-lg border border-[#1d3744] mt-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative w-full aspect-square max-w-xs mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#eba200]/20 to-[#64FFDA]/20 rounded-full blur-3xl opacity-20"></div>
                  <svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full relative z-10"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#1d3744"
                      strokeWidth="1"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="#1d3744"
                      strokeWidth="1"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      stroke="#1d3744"
                      strokeWidth="1"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="10"
                      fill="none"
                      stroke="#1d3744"
                      strokeWidth="1"
                    />

                    <line
                      x1="10"
                      y1="50"
                      x2="90"
                      y2="50"
                      stroke="#1d3744"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="50"
                      y1="10"
                      x2="50"
                      y2="90"
                      stroke="#1d3744"
                      strokeWidth="0.5"
                    />

                    <path
                      d="M30,50 C30,35 45,30 50,35 C55,40 70,30 70,50 C70,70 55,65 50,60 C45,55 30,65 30,50 Z"
                      fill="none"
                      stroke="#eba200"
                      strokeWidth="1.5"
                      strokeDasharray="1 2"
                      filter="drop-shadow(0 0 3px rgba(235, 162, 0, 0.5))"
                    />

                    <line
                      x1="50"
                      y1="30"
                      x2="50"
                      y2="50"
                      stroke="#64FFDA"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="35"
                      y2="65"
                      stroke="#64FFDA"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="65"
                      y2="65"
                      stroke="#64FFDA"
                      strokeWidth="1.5"
                    />

                    <circle cx="50" cy="30" r="3" fill="#eba200" />
                    <circle cx="50" cy="50" r="3" fill="#64FFDA" />
                    <circle cx="35" cy="65" r="3" fill="#eba200" />
                    <circle cx="65" cy="65" r="3" fill="#64FFDA" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono tracking-wider">
                  SEAMLESS{" "}
                  <span className="text-[#eba200]">PLATFORM INTEGRATION</span>
                </h3>
                <p className="text-gray-300 mb-6 md:text-lg">
                  The true power of xOS emerges through the seamless integration
                  of these core platforms, creating a comprehensive operational
                  intelligence ecosystem that is greater than the sum of its
                  parts. Each component enhances the others, delivering
                  unparalleled visibility, control, and intelligence across your
                  enterprise.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-[#64FFDA]/10 text-[#64FFDA] text-sm rounded-sm border border-[#64FFDA]/30 font-mono">
                    UNIFIED ENVIRONMENT
                  </div>
                  <div className="px-4 py-2 bg-[#eba200]/10 text-[#eba200] text-sm rounded-sm border border-[#eba200]/30 font-mono">
                    CROSS-PLATFORM INTELLIGENCE
                  </div>
                  <div className="px-4 py-2 bg-[#64FFDA]/10 text-[#64FFDA] text-sm rounded-sm border border-[#64FFDA]/30 font-mono">
                    SCALABLE ARCHITECTURE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-[#020c11]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <span className="text-[#eba200]">Operational Intelligence</span>?
          </h2>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Deploy an enterprise operating system that centralizes data,
            enhances decision-making, and drives measurable ROI through unified
            operational intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://nixnos.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 bg-gradient-to-r from-[#eba200] to-[#64FFDA] text-black hover:shadow-[0_0_15px_rgba(100,255,218,0.5)] transition-all"
              >
                Launch xOS Demo
              </Button>
            </a>
            <div>
              <RequestDemoModal />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
