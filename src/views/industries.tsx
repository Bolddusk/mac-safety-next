import { Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/component/ui/accordion";
import { HUDOverlay } from "@/component/ui/hud-overlay";
import { Button } from "@/component/ui/button";
import Link from "next/link";
import Footer from "@/layout/Footer";
import IndustrialForm from "@/component/forms/IndustrialForm";
import Image from "next/image";

// Update industryImages mapping
const industryImages = {
  airline: "airline_industry.webp",
  auto: "auto_industry.webp",
  chemical: "chemical_processing_industry.webp",
  construction: "construction_industry.webp",
  "data-centers": "data_center.webp",
  defense: "defense_aerospace_indsustry.webp",
  healthcare: "healthcare_industry.webp",
  insurance: "insurance_industry.webp",
  "life-science": "life_science_industry.webp",
  manufacturing: "manufacturing_industry.webp",
  maritime: "maritime_industry.webp",
  mining: "mining.webp",
  "oil-gas": "oil_gas_industry.webp",
  power: "utilies_industry.webp",
  rail: "rail_industry.webp",
  renewable: "renewable.webp",
  steel: "steel_mill_industry.webp",
  telecom: "telecommunications_tower.webp",
  warehouse: "warehouse_logistics_industry.webp",
};

export default function IndustriesPage() {
  const industries = [
    {
      id: "airline",
      title: "Airports & Capital Projects",
      subtitle: "Building Safer, More Efficient Airports",
      description:
        "Airport construction and capital projects operate under intense regulatory scrutiny, tight timelines, and high passenger volumes. MAC Safety deploys embedded safety specialists who navigate FAA, TSA, and OSHA regulations while ensuring zero operational disruptions.\n\nWith NIXN & NIXNos, we integrate real-time risk intelligence into every phase—tracking contractor compliance, optimizing airside/landside coordination, and mitigating risks tied to high-traffic environments. The result? Fewer incidents, faster build cycles, and seamless airport expansions.",
      impacts: [
        "60% reduction in airside safety violations",
        "Real-time contractor compliance tracking",
        "Faster issue resolution with AI-driven insights",
      ],
    },
    {
      id: "auto",
      title: "Automotive Manufacturing",
      subtitle: "Eliminating Downtime, Maximizing Workforce Safety",
      description:
        "High-speed production lines mean split-second decisions separate efficiency from disaster. MAC Safety embeds specialized automotive risk consultants inside manufacturing plants, proactively identifying hazards before they cause costly delays.\n\nUsing AI-powered risk scoring, we monitor machine-operator interactions, ergonomic hazards, and lockout/tagout (LOTO) compliance. Our predictive analytics prevent injuries, keeping production lines moving and reducing costly OSHA citations.",
      impacts: [
        "40% reduction in workplace injuries",
        "Zero unplanned stoppages from safety-related incidents",
        "Better OSHA compliance, lower recordable rates",
      ],
    },
    {
      id: "construction",
      title: "Construction",
      subtitle: "Safer Jobsites. Faster Builds.",
      description:
        "Construction sites are chaotic, but risk doesn't have to be. MAC Safety embeds highly trained safety professionals who leverage NIXN & NIXNos to deliver live risk monitoring, predictive incident prevention, and compliance automation at scale.\n\nBy combining task-based risk analytics with on-the-ground expertise, we help contractors reduce losses, qualify for better insurance rates, and finish projects ahead of schedule—all while ensuring every worker goes home safe.",
      impacts: [
        "30% faster incident response with AI-driven insights",
        "Lower EMR scores → reduced insurance costs",
        "275% increase in near-miss reporting → better hazard awareness",
      ],
    },
    {
      id: "data-centers",
      title: "Data Center Buildouts",
      subtitle: "Mission-Critical Risk Management",
      description:
        "Data center construction demands precision, speed, and absolute risk control. MAC Safety deploys specialized consultants who enforce high-voltage safety, confined space protocols, and risk controls for fast-track buildouts.\n\nNIXNos' real-time monitoring integrates with contractor workflows, ensuring electrical safety, environmental controls, and worker training stay ahead of the curve. Our approach reduces downtime, eliminates costly safety violations, and ensures compliance across global hyperscale projects.",
      impacts: [
        "50% reduction in electrical safety violations",
        "AI-driven analytics prevent high-risk incidents before they occur",
        "Faster compliance tracking → reduced project delays",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare & Hospital Capital Projects",
      subtitle: "Risk Intelligence for High-Stakes Environments",
      description:
        "Hospital expansions, renovations, and facility upgrades require surgical precision in risk management. MAC Safety embeds healthcare risk specialists who protect patient environments while ensuring seamless contractor operations.\n\nUsing NIXN's predictive analytics, we mitigate infection control risks, manage contractor compliance, and prevent disruptions to critical hospital services—ensuring construction projects meet safety, compliance, and timeline objectives.",
      impacts: [
        "Zero patient care disruptions from capital projects",
        "Advanced risk controls for infection prevention",
        "98% compliance with healthcare safety standards",
      ],
    },
    {
      id: "insurance",
      title: "Insurance & Underwriting",
      subtitle: "The New Standard for Risk Intelligence",
      description:
        "Traditional underwriting relies on lagging indicators and outdated safety data. MAC Safety delivers NIXN-powered real-time risk insights, giving insurers a clear, quantifiable view of actual risk exposure.\n\nWith live risk scoring and predictive analytics, carriers and brokers price risk with precision, lower claim severity, and increase underwriting profitability.",
      impacts: [
        "30% increase in underwriting profit",
        "More accurate risk pricing → lower loss ratios",
        "Better risk visibility for insureds and brokers",
      ],
    },
    {
      id: "life-science",
      title: "Life Sciences",
      subtitle: "Precision Risk Management for Regulated Environments",
      description:
        "Pharmaceutical and biotech facilities demand rigorous safety protocols to protect workers, products, and compliance standards. MAC Safety embeds highly trained consultants who specialize in cleanroom safety, hazardous material handling, and FDA regulatory compliance.\n\nWith NIXNos' AI-driven risk tracking, we monitor biosafety hazards, ensure GMP compliance, and enhance lab safety—reducing incidents while protecting product integrity.",
      impacts: [
        "90% compliance rate with GMP & FDA standards",
        "AI-driven risk detection for biosafety environments",
        "Lower insurance costs through predictive analytics",
      ],
    },
    {
      id: "manufacturing",
      title: "General Manufacturing",
      subtitle: "Eliminating Hazards, Enhancing Productivity",
      description:
        "In high-output manufacturing, risk is everywhere—heavy machinery, repetitive motion injuries, and chemical exposures. MAC Safety embeds on-site specialists who combine behavior-based safety programs with real-time risk intelligence.\n\nUsing NIXN's predictive analytics, we target high-risk activities before they lead to costly injuries or shutdowns. Our approach reduces OSHA violations, boosts workforce engagement, and enhances operational efficiency.",
      impacts: [
        "50% reduction in safety-related downtime",
        "AI-driven safety insights increase workforce efficiency",
        "Fewer ergonomic injuries → reduced compensation claims",
      ],
    },
    {
      id: "oil-gas",
      title: "Oil & Gas",
      subtitle: "Embedded Safety in High-Risk Operations",
      description:
        "Oil and gas operations face high-voltage work, confined space hazards, and operational risks that require a zero-failure safety culture. MAC Safety deploys industry-experienced safety professionals backed by NIXNos' AI-powered risk platform to enforce live safety tracking and predictive risk controls.\n\nBy leveraging AI-driven risk analytics, we protect critical infrastructure and personnel with advanced risk assessment systems.",
      impacts: [
        "60% reduction in safety violations",
        "Real-time hazard detection for high-risk environments",
        "Enhanced regulatory compliance and reduced fines",
      ],
    },
    {
      id: "rail",
      title: "Rail Industry",
      subtitle: "Embedded Safety in High-Risk Rail Operations",
      description:
        "Rail projects face high-voltage work, confined space hazards, and operational risks that require a zero-failure safety culture. MAC Safety deploys rail-experienced safety professionals backed by NIXNos' AI-powered risk platform to enforce live safety tracking and predictive risk controls.\n\nWe optimize trackside safety, protect workers from high-risk activities, and ensure FRA & OSHA compliance—reducing accidents and costly delays.",
      impacts: [
        "60% reduction in trackside safety violations",
        "Real-time hazard detection for electrical & confined space work",
        "Fewer FRA compliance issues → reduced regulatory fines",
      ],
    },
    {
      id: "steel",
      title: "Steel Industry",
      subtitle: "Heavy Industry. High Risk. Smarter Safety.",
      description:
        "Steel mills and foundries operate in extreme environments where high temperatures, heavy equipment, and chemical exposures create a unique risk landscape. MAC Safety embeds industry-experienced consultants who integrate with operations, enforcing real-time safety protocols through NIXN & NIXNos.\n\nBy leveraging AI-driven risk analytics, we reduce burn-related incidents, equipment failures, and workforce injuries—maximizing uptime and minimizing loss.",
      impacts: [
        "50% fewer heat-related injuries in high-temp environments",
        "Lower LOTO-related incidents through AI-based compliance tracking",
        "Fewer OSHA citations → direct cost savings",
      ],
    },
    {
      id: "chemical",
      title: "Chemical Processing & Refining",
      subtitle: "Advanced Safety for High-Risk Environments",
      description:
        "Chemical processing and refining facilities operate under intense risk conditions where toxic exposure, explosion risks, and regulatory compliance demands create a complex safety landscape. MAC Safety provides real-time chemical hazard monitoring, specialized HAZMAT training, and AI-driven process safety management (PSM) compliance.\n\nBy leveraging NIXN's predictive analytics and embedded safety expertise, we help prevent catastrophic failures while ensuring regulatory compliance and operational efficiency.",
      impacts: [
        "Real-time chemical hazard monitoring and alerts",
        "Comprehensive HAZMAT training programs",
        "AI-driven PSM compliance tracking",
      ],
    },
    {
      id: "defense",
      title: "Defense & Aerospace",
      subtitle: "Mission-Critical Safety Intelligence",
      description:
        "Defense and aerospace manufacturing demands precision safety protocols that protect both classified operations and worker safety. MAC Safety embeds security-cleared safety professionals into DoD, NASA, and defense contractor environments.\n\nOur specialists ensure compliance with OSHA, ITAR, and NIST requirements while safeguarding mission-critical operations through advanced risk monitoring and predictive analytics.",
      impacts: [
        "Specialized compliance for classified facilities",
        "Security-cleared safety professionals",
        "Integration with military safety standards",
      ],
    },
    {
      id: "maritime",
      title: "Maritime & Shipbuilding",
      subtitle: "Comprehensive Maritime Safety Solutions",
      description:
        "Maritime operations and shipbuilding face unique challenges including heavy lifting, confined spaces, and hazardous materials. MAC Safety deploys specialized maritime safety experts trained in OSHA maritime standards (1915, 1917, 1918).\n\nLeveraging NIXN's predictive analytics, we prevent shipyard and dockside accidents while ensuring regulatory compliance and operational efficiency.",
      impacts: [
        "Specialized maritime safety expertise",
        "Comprehensive confined space monitoring",
        "Advanced shipyard risk management",
      ],
    },
    {
      id: "mining",
      title: "Mining & Quarrying",
      subtitle: "Underground Safety Intelligence",
      description:
        "Mining operations face critical safety challenges from heavy equipment, explosive use, confined spaces, and underground hazards. MAC Safety uses NIXNos to track ground stability, worker exposure, and ventilation safety.\n\nOur experienced mine safety specialists work to reduce fatalities and prevent regulatory fines through comprehensive risk management and real-time monitoring.",
      impacts: [
        "Real-time ground stability monitoring",
        "Advanced ventilation safety tracking",
        "Reduction in regulatory violations",
      ],
    },
    {
      id: "power",
      title: "Utilities & Power Generation",
      subtitle: "Powering Safety Excellence",
      description:
        "Power generation facilities face complex risks including electrical hazards, confined space work, and extreme weather exposure. MAC Safety's embedded specialists ensure compliance with NFPA 70E, OSHA, and FERC/NERC standards.\n\nWe leverage real-time AI-driven risk insights for power plant operations, transmission lines, and substation builds to prevent incidents and maintain operational integrity.",
      impacts: [
        "Enhanced electrical safety compliance",
        "Real-time weather risk monitoring",
        "Improved grid security measures",
      ],
    },
    {
      id: "renewable",
      title: "Renewable Energy",
      subtitle: "Sustainable Safety Solutions",
      description:
        "Renewable energy projects require specialized safety protocols for high-angle rescue, electrical hazards, and remote site operations. MAC Safety's consultants ensure safe and efficient installation and maintenance of solar farms, wind turbines, and hydroelectric facilities.\n\nOur comprehensive approach reduces worker injuries while increasing operational uptime and environmental compliance.",
      impacts: [
        "Specialized high-angle rescue protocols",
        "Enhanced remote site safety management",
        "Improved environmental compliance",
      ],
    },
    {
      id: "telecom",
      title: "Telecommunications & 5G Infrastructure",
      subtitle: "Connected Safety Solutions",
      description:
        "Telecommunications infrastructure projects face unique challenges with tower climbing, fall protection, and remote site logistics. MAC Safety provides real-time hazard tracking for telecom site builds, enhancing tower technician safety.\n\nOur predictive risk modeling prevents compliance violations and ensures worker safety during infrastructure deployment and maintenance.",
      impacts: [
        "Advanced fall protection systems",
        "Real-time remote site monitoring",
        "Predictive hazard prevention",
      ],
    },
    {
      id: "warehouse",
      title: "Warehousing & Logistics",
      subtitle: "Streamlined Safety Operations",
      description:
        "Modern warehousing and logistics operations face challenges with forklift safety, high-volume manual labor, and complex supply chain interactions. MAC Safety implements AI-powered warehouse risk assessments and ensures compliance with material handling standards.\n\nOur approach optimizes operational safety in high-traffic environments while reducing incidents and improving efficiency.",
      impacts: [
        "Enhanced forklift safety protocols",
        "Optimized material handling procedures",
        "Reduced workplace injuries",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117]">
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 relative">
                <div className="absolute inset-0 bg-[#eba200] blur-[20px] opacity-30 rounded-full"></div>
                <Image
                  src="/uploads/People Icon.webp"
                  alt="MAC Safety Icon"
                  width={256} // Default size (w-64 in Tailwind)
                  height={256} // Default size (h-64 in Tailwind)
                  className="relative w-48 h-48 md:w-64 md:h-64 mx-auto object-contain rounded-2xl"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Safety Consulting Is{" "}
                  <span className="text-[#eba200]">Broken</span>.
                  <br />
                  We Rebuilt It.
                </h1>
                <div className="space-y-4">
                  <div className="text-gray-400 space-y-4">
                    <p>
                      The traditional safety consulting model is outdated. It
                      operates on disconnected silos—randomized placements,
                      generic compliance audits, and legacy training that fails
                      to adapt to the complexity of modern industries. The
                      result? A fragmented, reactive approach to risk that
                      delivers little actual value.
                    </p>
                    <p>
                      MAC Safety is different. We are not a consulting firm—we
                      are an intelligence company that deploys risk expertise
                      with precision. Our approach is built on a fully
                      integrated, connected ecosystem where people, data, and AI
                      work in tandem to create exponential impact.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <IndustrialForm />
                    <Link href="/offerings">
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-[#eba200] hover:text-black hover:border-[#eba200] hover:shadow-[0_0_15px_rgba(235,162,0,0.5)]"
                      >
                        View Offerings
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1117]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  The MAC Safety Ecosystem:{" "}
                  <span className="bg-gradient-to-r from-[#eba200] via-[#64FFDA] to-[#eba200] text-transparent bg-clip-text animate-gradient">
                    The Right Expertise, Deployed at Scale
                  </span>
                </h2>
                <p className="text-xl text-gray-400">
                  Most firms send generalists into highly specialized
                  environments. We don&apos;t. We have engineered a system where
                  the right expertise is matched with the right industry, at the
                  right time.
                </p>
              </div>

              <HUDOverlay>
                <div className="space-y-6 p-6">
                  <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/10 rounded-lg hover:border-[#eba200]/40 hover:bg-[#eba200]/10 transition-all group">
                    <span className="text-2xl">🔹</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#eba200]">
                        Embedded Intelligence
                      </h3>
                      <p className="text-gray-400">
                        Every MAC Safety consultant is backed by NIXN & NIXNos,
                        ensuring their decisions are driven by real-time,
                        predictive risk data—not just gut instinct.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/10 rounded-lg hover:border-[#eba200]/40 hover:bg-[#eba200]/10 transition-all group">
                    <span className="text-2xl">🔹</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#eba200]">
                        Precision Deployment
                      </h3>
                      <p className="text-gray-400">
                        Our system does&apos;t just place consultants—it
                        strategically deploys them based on real risk data,
                        ensuring that those with deep industry knowledge are
                        embedded where they deliver the highest impact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/10 rounded-lg hover:border-[#eba200]/40 hover:bg-[#eba200]/10 transition-all group">
                    <span className="text-2xl">🔹</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#eba200]">
                        Feedback Loops & Compounding Intelligence
                      </h3>
                      <p className="text-gray-400">
                        Unlike traditional firms that deliver one-off reports,
                        our ecosystem continuously refines itself. Every
                        insight, every risk assessment, and every project feeds
                        into our system, improving the accuracy, efficiency, and
                        predictive capabilities of our entire network.
                      </p>
                    </div>
                  </div>
                </div>
              </HUDOverlay>

              <div className="space-y-6 pt-8">
                <h2 className="text-3xl font-bold">
                  The Result:{" "}
                  <span className="bg-gradient-to-r from-[#eba200] via-[#64FFDA] to-[#eba200] text-transparent bg-clip-text animate-gradient">
                    Exponential Leverage, Not Incremental Improvement
                  </span>
                </h2>
                <p className="text-xl text-gray-400">
                  Traditional safety firms operate linearly—more consultants,
                  more hours, more reports. We operate exponentially.
                </p>

                <HUDOverlay>
                  <div className="space-y-6 p-6">
                    <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/10 rounded-lg hover:border-[#64FFDA]/40 hover:bg-[#64FFDA]/10 transition-all group">
                      <span className="text-2xl">🔹</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#64FFDA]">
                          10x Output
                        </h3>
                        <p className="text-gray-400">
                          Every MAC Safety consultant is amplified by AI-powered
                          insights, making them far more effective than any
                          standalone specialist.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/10 rounded-lg hover:border-[#64FFDA]/40 hover:bg-[#64FFDA]/10 transition-all group">
                      <span className="text-2xl">🔹</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#64FFDA]">
                          Industry-Specific Precision
                        </h3>
                        <p className="text-gray-400">
                          We don&apos;t just drop a &apos;safety
                          consultant&apos; into a manufacturing plant—we deploy
                          an automotive risk strategist backed by real-time
                          machine-learning models analyzing operator behavior
                          and process safety trends.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/10 rounded-lg hover:border-[#64FFDA]/40 hover:bg-[#64FFDA]/10 transition-all group">
                      <span className="text-2xl">🔹</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#64FFDA]">
                          Continuous Evolution
                        </h3>
                        <p className="text-gray-400">
                          Every project, every data point, and every risk
                          mitigated strengthens our intelligence network, making
                          each deployment smarter, faster, and more effective
                          than the last.
                        </p>
                      </div>
                    </div>
                  </div>
                </HUDOverlay>

                <p className="text-xl font-semibold text-center pt-8">
                  <span className="bg-gradient-to-r from-[#eba200] via-[#64FFDA] to-[#eba200] text-transparent bg-clip-text animate-gradient">
                    This isn&apos;t consulting. This is risk intelligence at
                    scale.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl font-bold mb-8 flex items-center gap-4">
                <Shield className="w-8 h-8 text-[#eba200]" />
                Industry Solutions
              </h1>
              <p className="text-xl text-gray-400 mb-12">
                Explore our specialized safety and compliance solutions across
                various industries
              </p>
            </div>

            <div className="space-y-6 mb-24">
              {industries.map((industry) => (
                <div key={industry.id}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={industry.id} className="border-none">
                      <AccordionTrigger
                        id={`accordion-${industry.id}`}
                        className="group rounded-lg bg-[#1B2434] hover:bg-[#233554] transition-all duration-300"
                      >
                        <div className="w-full">
                          <div className="relative h-48 wfull rounded-t-lg overflow-hidden">
                            <Image
                              src={`/uploads/${
                                industryImages[
                                  industry.id as keyof typeof industryImages
                                ]
                              }`}
                              alt={`${industry.title} industry`}
                              width={500} // Adjust width as needed
                              height={500} // Adjust height as needed
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                              <h3 className="text-xl font-semibold text-white group-hover:text-[#eba200] transition-colors">
                                {industry.title}
                              </h3>
                              <p className="text-sm text-gray-300">
                                {industry.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-6 pb-4 px-4 bg-[#1B2434] rounded-b-lg">
                        <div className="space-y-6">
                          <div className="text-gray-300 space-y-4">
                            {industry.description
                              .split("\n\n")
                              .map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                              ))}
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-[#64FFDA]">
                              Impact
                            </h4>
                            <ul className="space-y-3">
                              {industry.impacts.map((impact, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-2 text-white"
                                >
                                  <div className="w-2 h-2 bg-[#eba200] rounded-full" />
                                  {impact}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
