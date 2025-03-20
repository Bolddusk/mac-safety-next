import Link from "next/link";
import { HUDOverlay } from "../ui/hud-overlay";
import {
  Brain,
  Activity,
  Network,
  ChartBar,
  Target,
  Zap,
  X,
  ChevronDown,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Enhanced gradient overlay with reduced darkness */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-20" />
          {/* Slight blur effect on video */}
          <div className="absolute inset-0 backdrop-blur-[1px] z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/uploads/hero-page-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container mx-auto px-4 relative z-20 flex sm:justify-center">
          {/* <AnimateHeroTitle /> */}
          <div className="">
            <h1
              className="text-4xl md:text-6xl font-bold sm:w-[600px]"
              style={{ contentVisibility: "auto" }}
            >
              Intelligence at Every Level
            </h1>

            <div className="heading-container font-bold font-furore w-[350px] sm:w-[600px] h-[80px] sm:h-[120px] ">
              <div className="heading flex gap-4 items-center my-5">
                <Image
                  src={"/uploads/People Icon.webp"}
                  alt={`People Icon`}
                  width={100}
                  height={100}
                  priority
                  className="object-contain rounded-lg sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]"
                />
                <p className="text-6xl sm:text-8xl font-bold font-furore">
                  People
                </p>
              </div>

              <div className="heading flex gap-4 items-center my-5">
                <Image
                  src={"/uploads/data_icon.webp"}
                  alt={`data_icon`}
                  width={100}
                  height={100}
                  priority
                  className="object-contain rounded-lg sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]"
                />
                <p className="text-6xl sm:text-8xl font-bold font-furore">
                  Data
                </p>
              </div>

              <div className="heading flex gap-4 items-center my-5">
                <Image
                  src={"/uploads/ai_icon.webp"}
                  alt={`ai_icon`}
                  width={100}
                  height={100}
                  priority
                  className="object-contain rounded-lg sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]"
                />
                <p className="text-6xl sm:text-8xl bg-gradient-to-r from-[#eba200] via-[#64FFDA] to-[#eba200] text-transparent bg-clip-text animate-gradient">
                  AI
                </p>
              </div>
            </div>

            <h2
              className="text-2xl sm:text-3xl font-bold md:text-4xl text-white/90 mt-4"
              style={{ contentVisibility: "auto" }}
            >
              Working as One
            </h2>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 mx-auto text-center">
          <div className="absolute bottom-8 left-0 right-0 mx-auto text-center">
            <Link
              href="#mission-section" // Smooth scrolling works with `id`
              scroll={true} // Prevents automatic scrolling behavior
              className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition group mx-auto cursor-pointer duration-250 hover:scale-[1.2] animate-bounce"
            >
              <span className="text-sm tracking-wider">Scroll to Explore</span>
              <div>
                <ChevronDown className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <section id="mission-section" className="bg-black py-16 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(235,162,0,0.1),transparent)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <HUDOverlay className="mb-6 backdrop-blur-[1px] bg-black/40 transition duration-200 animate-scale-up">
                <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                  <span className="text-[#eba200]">[MISSION]</span> Uniquely
                  integrating{" "}
                  <span className="text-white">human expertise</span>,{" "}
                  <span className="text-white">mission-critical software</span>,
                  and <span className="text-white">AI-driven intelligence</span>{" "}
                  to deliver unmatched value across the enterprise safety
                  ecosystem.
                </p>
                <p className="text-xs sm:text-sm mt-2 text-gray-400">
                  <span className="text-[#eba200]">[VALUE_PROP]</span> This
                  vertical integration enables real-time risk quantification,
                  predictive analytics, and actionable intelligence—transforming
                  safety from a cost center into a competitive advantage.
                </p>
              </HUDOverlay>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer transition duration-300 scale-[0.9] hover:scale-[1]">
                    <HUDOverlay className="p-4 hover:bg-white/5 transition-all duration-300">
                      <div className="flex items-center gap-3 text-[#eba200]">
                        <Brain className="w-6 h-6 group-hover:animate-pulse" />
                        <span className="tracking-wider font-mono">
                          Embedded Safety Specialists
                        </span>
                      </div>
                    </HUDOverlay>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-black/95 border-[#eba200]/20 backdrop-blur-md max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden p-0 mx-4">
                  <div className="relative">
                    <DialogClose className="absolute right-4 top-4 z-50">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-[#eba200]"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogClose>
                    <HUDOverlay>
                      <div className="p-4 sm:p-6 overflow-y-auto max-h-[80vh] sm:max-h-[75vh] scrollbar-thin scrollbar-thumb-[#eba200]/20 scrollbar-track-transparent">
                        <div className="space-y-6">
                          <div className="flex items-center gap-3 text-[#eba200] text-xl font-bold mb-4">
                            <Brain className="w-8 h-8" />
                            <h2 className="pr-8">
                              Embedded Safety Specialists
                            </h2>
                          </div>
                          <p className="text-white/90 flex items-center gap-2">
                            <Target className="w-5 h-5 text-[#eba200]" />
                            Deploy elite safety professionals where they matter
                            most.
                          </p>
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#eba200] flex items-center gap-2">
                              <ChartBar className="w-5 h-5" />
                              Statistics & Impact
                            </h3>
                            <ul className="space-y-3 text-white/80">
                              <li className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  500+ consultants deployed nationwide on major
                                  infrastructure, energy, and industrial
                                  projects.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  90% reduction in critical safety violations
                                  within the first 6 months of engagement.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  $2M+ in average cost savings per client by
                                  preventing high-impact incidents and improving
                                  operational efficiency.
                                </span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  Trusted by Fortune 500 companies and leading
                                  insurers to execute and enforce real-time risk
                                  management.
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold text-[#eba200] mb-2">
                              IMPACT:
                            </h3>
                            <p className="text-white/80">
                              Most companies react to risk. We embed specialists
                              who proactively eliminate threats before they
                              materialize, ensuring compliance, efficiency, and
                              safer operations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </HUDOverlay>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer transition duration-300 scale-[0.9] hover:scale-[1]">
                    <HUDOverlay className="p-4 hover:bg-white/5 transition-all duration-300">
                      <div className="flex items-center gap-3 text-[#eba200]">
                        <Activity className="w-6 h-6 group-hover:animate-pulse" />
                        <span className="tracking-wider font-mono">
                          Enterprise Risk Management
                        </span>
                      </div>
                    </HUDOverlay>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-black/95 border-[#eba200]/20 backdrop-blur-md max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden p-0 mx-4">
                  <div className="relative">
                    <DialogClose className="absolute right-4 top-4 z-50">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-[#eba200]"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogClose>
                    <HUDOverlay>
                      <div className="p-4 sm:p-6 overflow-y-auto max-h-[80vh] sm:max-h-[75vh] scrollbar-thin scrollbar-thumb-[#eba200]/20 scrollbar-track-transparent">
                        <div className="space-y-6">
                          <div className="flex items-center gap-3 text-[#eba200] text-xl font-bold mb-4">
                            <Activity className="w-8 h-8" />
                            <h2 className="pr-8">Enterprise Risk Management</h2>
                          </div>
                          <p className="text-white/90 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-[#eba200]" />
                            Transform risk from a liability into a strategic
                            asset.
                          </p>
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#eba200] flex items-center gap-2">
                              <ChartBar className="w-5 h-5" />
                              Statistics & Impact
                            </h3>
                            <ul className="space-y-3 text-white/80">
                              <li className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  30% increase in underwriting profit for
                                  insurance partners leveraging our risk
                                  intelligence.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  50% reduction in incident-related downtime for
                                  high-risk industries.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  5,000+ job sites monitored in real time using
                                  our data-driven risk frameworks.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  85% of clients see a decrease in total
                                  recordable incident rates (TRIR) within the
                                  first year.
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold text-[#eba200] mb-2">
                              IMPACT:
                            </h3>
                            <p className="text-white/80">
                              Traditional risk management is outdated. Our
                              approach fuses predictive analytics with
                              real-world expertise to create measurable business
                              advantages—from better insurance pricing to
                              winning more contracts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </HUDOverlay>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer transition duration-300 scale-[0.9] hover:scale-[1]">
                    <HUDOverlay className="p-4 hover:bg-white/5 transition-all duration-300">
                      <div className="flex items-center gap-3 text-[#eba200]">
                        <Network className="w-6 h-6 group-hover:animate-pulse" />
                        <span className="tracking-wider font-mono">
                          Mission Critical Software
                        </span>
                      </div>
                    </HUDOverlay>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-black/95 border-[#eba200]/20 backdrop-blur-md max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden p-0 mx-4">
                  <div className="relative">
                    <DialogClose className="absolute right-4 top-4 z-50">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-[#eba200]"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogClose>
                    <HUDOverlay>
                      <div className="p-4 sm:p-6 overflow-y-auto max-h-[80vh] sm:max-h-[75vh] scrollbar-thin scrollbar-thumb-[#eba200]/20 scrollbar-track-transparent">
                        <div className="space-y-6">
                          <div className="flex items-center gap-3 text-[#eba200] text-xl font-bold mb-4">
                            <Network className="w-8 h-8" />
                            <h2 className="pr-8">Mission-Critical Software</h2>
                          </div>
                          <p className="text-white/90 flex items-center gap-2">
                            <Target className="w-5 h-5 text-[#eba200]" />
                            AI-powered intelligence for proactive risk control.
                          </p>
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#eba200] flex items-center gap-2">
                              <ChartBar className="w-5 h-5" />
                              Statistics & Impact
                            </h3>
                            <ul className="space-y-3 text-white/80">
                              <li className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  80% faster risk identification using AI-driven
                                  insights.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  2.3 SIF incidents predicted per month for
                                  clients before they occur.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  Billions in risk exposure quantified and
                                  priced for enterprise and contractor partners.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Zap className="w-4 h-4 text-[#eba200] mt-1 flex-shrink-0" />
                                <span>
                                  5x improvement in decision-making speed by
                                  integrating AI, real-time field data, and risk
                                  analytics.
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold text-[#eba200] mb-2">
                              IMPACT&apos;
                            </h3>
                            <p className="text-white/80">
                              Most safety software is just a digital filing
                              cabinet. Our platforms—NIXN and NIXNos—are built
                              to drive action by merging real-time data,
                              predictive analytics, and AI-powered
                              decision-making. This isn&apos;t software; this is
                              an operating system for risk.
                            </p>
                          </div>
                        </div>
                      </div>
                    </HUDOverlay>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
