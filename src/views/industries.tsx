"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { SparklesCore } from "@/component/ui/Sparkles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/component/ui/accordion";
import { Button } from "@/component/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/component/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/component/ui/form";
import { Input } from "@/component/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/component/ui/select";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/component/hooks/use-toast";

const serviceRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Please select an industry"),
  service: z.string().min(1, "Please select a service"),
  serviceName: z.string().min(1, "ServiceName is required"),
});

type ServiceRequestForm = z.infer<typeof serviceRequestSchema>;

export default function IndustriesPage() {
  const { toast } = useToast();
  const pathname = usePathname();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<ServiceRequestForm>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      name: "",
      company: "",
      industry: "",
      service: "",
      serviceName: "Offering",
    },
  });

  const mutation = useMutation<
    unknown, // Response type (unknown if not needed)
    Error, // Error type
    ServiceRequestForm // The expected type of 'data'
  >({
    mutationFn: async (data: ServiceRequestForm) => {
      return await apiRequest("POST", "/api/message", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
        duration: 1000,
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 1000,
      });
    },
  });

  function onSubmit(data: ServiceRequestForm) {
    mutation.mutate(data);
  }

  useEffect(() => {
    if (pathname?.includes("#")) {
      const id = pathname.split("#")[1];
      const accordionTrigger = document.getElementById(`accordion-${id}`);
      if (accordionTrigger) {
        accordionTrigger.click();
        accordionTrigger.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [pathname]);

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
      cta: {
        text: "Learn More",
        link: "/industries/airline",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/auto",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/construction",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/data-centers",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/healthcare",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/insurance",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/life-science",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/manufacturing",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/oil-gas",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/rail",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/steel",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/chemical",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/defense",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/maritime",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/mining",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/power",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/renewable",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/telecom",
      },
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
      cta: {
        text: "Learn More",
        link: "/industries/warehousing",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0d]">
      <section className="pt-32 pb-20 relative overflow-hidden bg-[#0b0b0d]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 relative">
                <div className="absolute inset-0 w-full h-full">
                  <SparklesCore
                    id="industries-sparkles"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#eba200"
                  />
                </div>
                <img
                  src="/uploads/geometric-icon.jpg"
                  alt="Geometric Icon"
                  className="relative w-48 h-48 md:w-64 md:h-64 mx-auto object-contain rounded-2xl z-10"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-white font-alliance"
                >
                  Safety Consulting Is{" "}
                  <span className="text-[#eba200]">Broken</span>.
                  <br />
                  We Rebuilt It.
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="text-gray-400 space-y-4 font-alliance">
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
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="rounded-full bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-all font-alliance">
                          Request People Services
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#16171a] border-gray-800">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-white font-alliance">
                            Request Services
                          </DialogTitle>
                          <DialogDescription className="text-gray-400 font-alliance">
                            Fill out the form below to request our services.
                            We&apos;ll get back to you within 24 hours.
                          </DialogDescription>
                        </DialogHeader>
                          <Form {...form}>
                            <form
                              onSubmit={form.handleSubmit(onSubmit)}
                              className="space-y-6"
                            >
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-gray-300 font-alliance">
                                      Name
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Your name"
                                        {...field}
                                        className="bg-[#16171a] border-gray-700 text-white placeholder:text-gray-500 font-alliance"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-gray-300 font-alliance">
                                      Company
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Your company"
                                        {...field}
                                        className="bg-[#16171a] border-gray-700 text-white placeholder:text-gray-500 font-alliance"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="industry"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-gray-300 font-alliance">
                                      Industry
                                    </FormLabel>
                                    <Select
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className="bg-[#16171a] border-gray-700 text-white font-alliance">
                                          <SelectValue placeholder="Select an industry" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent className="bg-[#16171a] border-gray-800">
                                        <SelectItem value="airline">
                                          Airports & Capital Projects
                                        </SelectItem>
                                        <SelectItem value="auto">
                                          Automotive
                                        </SelectItem>
                                        <SelectItem value="construction">
                                          Construction
                                        </SelectItem>
                                        <SelectItem value="data-centers">
                                          Data Centers
                                        </SelectItem>
                                        <SelectItem value="healthcare">
                                          Healthcare
                                        </SelectItem>
                                        <SelectItem value="insurance">
                                          Insurance
                                        </SelectItem>
                                        <SelectItem value="life-science">
                                          Life Sciences
                                        </SelectItem>
                                        <SelectItem value="manufacturing">
                                          Manufacturing
                                        </SelectItem>
                                        <SelectItem value="oil-gas">
                                          Oil & Gas
                                        </SelectItem>
                                        <SelectItem value="rail">Rail</SelectItem>
                                        <SelectItem value="steel">
                                          Steel
                                        </SelectItem>
                                        <SelectItem value="chemical">
                                          Chemical Processing & Refining
                                        </SelectItem>
                                        <SelectItem value="defense">
                                          Defense & Aerospace
                                        </SelectItem>
                                        <SelectItem value="maritime">
                                          Maritime & Shipbuilding
                                        </SelectItem>
                                        <SelectItem value="mining">
                                          Mining & Quarrying
                                        </SelectItem>
                                        <SelectItem value="power">
                                          Utilities & Power Generation
                                        </SelectItem>
                                        <SelectItem value="renewable">
                                          Renewable Energy
                                        </SelectItem>
                                        <SelectItem value="telecom">
                                          Telecommunications & 5G Infrastructure
                                        </SelectItem>
                                        <SelectItem value="warehouse">
                                          Warehousing & Logistics
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="service"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-gray-300 font-alliance">
                                      Service
                                    </FormLabel>
                                    <Select
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className="bg-[#16171a] border-gray-700 text-white font-alliance">
                                          <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent className="bg-[#16171a] border-gray-800">
                                        <SelectItem value="project-staffing">
                                          Project Staffing
                                        </SelectItem>
                                        <SelectItem value="risk-management">
                                          Risk Management
                                        </SelectItem>
                                        <SelectItem value="training">
                                          Training
                                        </SelectItem>
                                        <SelectItem value="assessment">
                                          Assessment
                                        </SelectItem>
                                        <SelectItem value="program-buildout">
                                          Program Buildout
                                        </SelectItem>
                                        <SelectItem value="other">
                                          Other
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Button
                                type="submit"
                                className="w-full rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all font-alliance"
                              >
                                Submit Request
                              </Button>
                            </form>
                          </Form>
                      </DialogContent>
                    </Dialog>
                    <Link href="/offerings">
                      <Button className="rounded-full border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-all font-alliance bg-transparent">
                        View Offerings
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b0b0d]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white font-alliance">
                  The MAC Safety Ecosystem:{" "}
                  <span className="text-[#eba200]">
                    The Right Expertise, Deployed at Scale
                  </span>
                </h2>
                <p className="text-xl text-gray-400 font-alliance">
                  Most firms send generalists into highly specialized
                  environments. We don&apos;t. We have engineered a system where
                  the right expertise is matched with the right industry, at the
                  right time.
                </p>
              </div>

              <div className="bg-[#16171a] border border-gray-800 rounded-2xl p-6 md:p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-[#0b0b0d] border border-gray-800 rounded-xl hover:border-[#eba200]/40 transition-all group">
                    <span className="text-2xl text-[#eba200]">●</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#eba200] font-alliance">
                        Embedded Intelligence
                      </h3>
                      <p className="text-gray-400 font-alliance">
                        Every MAC Safety consultant is backed by NIXN & NIXNos,
                        ensuring their decisions are driven by real-time,
                        predictive risk data—not just gut instinct.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-[#0b0b0d] border border-gray-800 rounded-xl hover:border-[#eba200]/40 transition-all group">
                    <span className="text-2xl text-[#eba200]">●</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#eba200] font-alliance">
                        Precision Deployment
                      </h3>
                      <p className="text-gray-400 font-alliance">
                        Our system doesn&apos;t just place consultants—it
                        strategically deploys them based on real risk data,
                        ensuring that those with deep industry knowledge are
                        embedded where they deliver the highest impact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-[#0b0b0d] border border-gray-800 rounded-xl hover:border-[#eba200]/40 transition-all group">
                    <span className="text-2xl text-[#eba200]">●</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#eba200] font-alliance">
                        Feedback Loops & Compounding Intelligence
                      </h3>
                      <p className="text-gray-400 font-alliance">
                        Unlike traditional firms that deliver one-off reports,
                        our ecosystem continuously refines itself. Every
                        insight, every risk assessment, and every project feeds
                        into our system, improving the accuracy, efficiency, and
                        predictive capabilities of our entire network.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-8">
                <h2 className="text-3xl font-bold text-white font-alliance">
                  The Result:{" "}
                  <span className="text-[#eba200]">
                    Exponential Leverage, Not Incremental Improvement
                  </span>
                </h2>
                <p className="text-xl text-gray-400 font-alliance">
                  Traditional safety firms operate linearly—more consultants,
                  more hours, more reports. We operate exponentially.
                </p>

                <div className="bg-[#16171a] border border-gray-800 rounded-2xl p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 bg-[#0b0b0d] border border-gray-800 rounded-xl hover:border-[#eba200]/40 transition-all group">
                      <span className="text-2xl text-[#eba200]">●</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#eba200] font-alliance">
                          10x Output
                        </h3>
                        <p className="text-gray-400 font-alliance">
                          Every MAC Safety consultant is amplified by AI-powered
                          insights, making them far more effective than any
                          standalone specialist.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-[#0b0b0d] border border-gray-800 rounded-xl hover:border-[#eba200]/40 transition-all group">
                      <span className="text-2xl text-[#eba200]">●</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#eba200] font-alliance">
                          Industry-Specific Precision
                        </h3>
                        <p className="text-gray-400 font-alliance">
                          We don&apos;t just drop a &apos;safety
                          consultant&apos; into a manufacturing plant—we deploy
                          an automotive risk strategist backed by real-time
                          machine-learning models analyzing operator behavior
                          and process safety trends.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-[#0b0b0d] border border-gray-800 rounded-xl hover:border-[#eba200]/40 transition-all group">
                      <span className="text-2xl text-[#eba200]">●</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#eba200] font-alliance">
                          Continuous Evolution
                        </h3>
                        <p className="text-gray-400 font-alliance">
                          Every project, every data point, and every risk
                          mitigated strengthens our intelligence network, making
                          each deployment smarter, faster, and more effective
                          than the last.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xl font-semibold text-center pt-8 font-alliance">
                  <span className="text-[#eba200]">
                    This isn&apos;t consulting. This is risk intelligence at
                    scale.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0b0b0d]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-8 flex items-center gap-4 text-white font-alliance">
                <Shield className="w-8 h-8 text-[#eba200]" />
                Industry Solutions
              </h1>
              <p className="text-xl text-gray-400 mb-12 font-alliance">
                Explore our specialized safety and compliance solutions across
                various industries
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {industries.map((industry) => (
                <AccordionItem
                  key={industry.id}
                  value={industry.id}
                  className="bg-[#16171a] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-colors"
                >
                  <AccordionTrigger
                    id={`accordion-${industry.id}`}
                    className="px-6 py-4 text-left hover:no-underline hover:bg-[#1f2024] [&[data-state=open]]:bg-[#1f2024]"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-white font-alliance">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-alliance">
                        {industry.subtitle}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-[#16171a]">
                    <div className="space-y-4">
                      <p className="text-gray-400 whitespace-pre-line font-alliance">
                        {industry.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-[#eba200] font-alliance">
                          Key Impacts:
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {industry.impacts.map((impact, index) => (
                            <li
                              key={index}
                              className="text-gray-400 font-alliance"
                            >
                              {impact}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {industry.cta && (
                        <div className="mt-6">
                          <Link href={industry.cta.link}>
                            <Button className="rounded-full bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-all font-alliance">
                              {industry.cta.text}
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
