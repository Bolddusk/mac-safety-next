import ContactForm from "@/component/forms/ContactForm";
import ContactSection from "@/component/home/ContactSection";
import { Button } from "@/component/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/component/ui/dialog";

import Footer from "@/layout/Footer";

const offerings = [
  {
    title: "On-Site Safety Consulting",
    description:
      "Deploy dedicated safety professionals to oversee compliance, reduce risk, and enhance workplace safety across multiple industries.",
  },
  {
    title: "Construction Site Safety Management",
    description:
      "Mitigate high-risk activities with dedicated site safety representatives and compliance monitoring for commercial, industrial, and civil construction projects.",
  },
  {
    title: "Crane & Rigging Safety Oversight",
    description:
      "Ensure compliance with lift plans, conduct rigging inspections, and provide lift director services for crane operations.",
  },
  {
    title: "Trenching & Excavation Safety Compliance",
    description:
      "Protect workers and maintain regulatory compliance with expert trenching, excavation, and soil classification services.",
  },
  {
    title: "Concrete & Structural Safety Management",
    description:
      "Monitor formwork, rebar installation, and structural assembly to prevent high-risk incidents.",
  },
  {
    title: "Pipeline Safety & Integrity Management",
    description:
      "Develop and implement safety programs for midstream and upstream pipeline construction, integrity management, and operations.",
  },
  {
    title: "Refinery & Petrochemical Plant Safety",
    description:
      "Deliver on-site safety staffing, turnaround safety planning, and hazard assessments for high-risk energy environments.",
  },
  {
    title: "Offshore & Maritime Safety Services",
    description:
      "Manage offshore platform risks with comprehensive fall protection, confined space rescue, and marine hazard control strategies.",
  },
  {
    title: "Energy Transition & Renewable Safety Programs",
    description:
      "Support wind, solar, and hydrogen energy projects with risk management frameworks and industry-specific compliance solutions.",
  },
  {
    title: "Machine Guarding & Lockout/Tagout (LOTO) Compliance",
    description:
      "Ensure OSHA-compliant machine safety programs, energy control procedures, and workforce training.",
  },
  {
    title: "Ergonomics & Workplace Safety Optimization",
    description:
      "Prevent musculoskeletal injuries with workstation assessments, automation integration, and ergonomic training.",
  },
  {
    title: "Combustible Dust Hazard Assessments",
    description:
      "Identify and mitigate explosion risks from combustible dust accumulation in manufacturing and processing environments.",
  },
  {
    title: "Fleet Safety & DOT Compliance Programs",
    description:
      "Develop comprehensive driver training, vehicle safety inspections, and compliance solutions for transportation fleets.",
  },
  {
    title: "Railroad Safety & FRA Compliance",
    description:
      "Provide track safety oversight, employee training, and FRA compliance audits for rail operations and maintenance.",
  },
  {
    title: "Warehouse & Distribution Center Risk Management",
    description:
      "Optimize material handling safety, pedestrian control, and automated system risk mitigation in logistics facilities.",
  },
  {
    title: "Electric Utility Safety Programs",
    description:
      "Implement safety protocols for transmission and distribution operations, substations, and electrical maintenance.",
  },
  {
    title: "Water & Wastewater Treatment Facility Compliance",
    description:
      "Develop chemical hazard programs, confined space entry plans, and emergency response strategies for treatment plants.",
  },
  {
    title: "Telecommunications & Tower Safety Oversight",
    description:
      "Provide high-angle rescue training, RF exposure assessments, and fall protection programs for telecom workers.",
  },
  {
    title: "Hospital & Healthcare Facility Safety Programs",
    description:
      "Ensure workplace safety for healthcare professionals, with infection control, hazard communication, and emergency preparedness plans.",
  },
  {
    title: "Pharmaceutical & Biotech Safety Compliance",
    description:
      "Develop risk management programs for laboratory environments, hazardous chemical handling, and cleanroom operations.",
  },
  {
    title: "Medical Waste & Biohazard Risk Management",
    description:
      "Provide OSHA-compliant medical waste handling, disposal, and exposure control programs.",
  },
  {
    title: "OSHA Compliance & Auditing",
    description:
      "Ensure regulatory adherence with expert-led audits, inspections, and corrective action plans.",
  },
  {
    title: "Industrial Hygiene & Exposure Monitoring",
    description:
      "Assess air quality, noise levels, and hazardous material exposure to protect employee health.",
  },
  {
    title: "Incident & Emergency Response Planning",
    description:
      "Develop proactive strategies for crisis management, business continuity, and emergency preparedness.",
  },
  {
    title: "Behavior-Based Safety & Workforce Training",
    description:
      "Enhance employee safety culture through customized BBS programs, competency training, and digital learning tools.",
  },
  {
    title: "AI-Driven Risk Analytics & Predictive Modeling",
    description:
      "Leverage real-time data and machine learning to forecast risks and improve decision-making.",
  },
  {
    title: "Automated JHA, JSA & Safety Observations",
    description:
      "Transform pre-task planning with AI-powered job hazard analysis and safety tracking.",
  },
  {
    title: "Digital Safety Auditing & Compliance Tracking",
    description:
      "Manage audits, inspections, and CAPA workflows through an integrated safety management system.",
  },
  {
    title: "Supply Chain & Vendor Risk Scoring",
    description:
      "Evaluate and monitor contractor and supplier risks using AI-driven analytics.",
  },
  {
    title: "Enterprise Risk Pricing & Underwriting Solutions",
    description:
      "Enable risk-based pricing for contracts, insurance, and operational decision-making.",
  },
];

export default function Offerings() {
  return (
    <div className="pt-16 min-h-screen bg-[#0D1117]">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-5xl md:text-7xl font-furore">
              <span className="bg-gradient-to-r from-[#eba200] to-[#64FFDA] text-transparent bg-clip-text">
                Offerings
              </span>
            </h1>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
              Our integrated solutions empower organizations across industries
              to proactively manage risk, enhance safety performance, and drive
              operational excellence.
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none mb-16">
          <p className="text-lg md:text-xl text-gray-300">
            Whether through expert-led consulting, on-site services, or
            cutting-edge AI-driven platforms, we provide the tools and insights
            needed to solve the toughest safety and risk challenges—faster and
            more effectively.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {offerings.map((offering, index) => (
            <div
              key={`offering-${index}`}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/20 p-6 hover:border-[#eba200]/40 hover:bg-[#eba200]/5 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#eba200]/0 via-[#eba200]/5 to-[#eba200]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    ↳ {offering.title}
                  </h3>
                  <p className="text-gray-400">{offering.description}</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="whitespace-nowrap border-white text-white hover:bg-[#eba200] hover:text-black hover:border-[#eba200] hover:shadow-[0_0_15px_rgba(235,162,0,0.5)]"
                    >
                      Learn More →
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] text-white">
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                      <ContactForm />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </main>
      <ContactSection title="Get Started with MAC in Minutes" />
      <Footer />
    </div>
  );
}
