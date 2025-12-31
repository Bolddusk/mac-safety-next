"use client";

import ContactSection from "@/component/home/ContactSection";
import { motion } from "framer-motion";
import { Button } from "@/component/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/component/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/component/ui/form";
import { Input } from "@/component/ui/input";
import { Textarea } from "@/component/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/component/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/component/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

const industries = [
  "Chemical Processing",
  "Defense & Aerospace",
  "Maritime",
  "Mining",
  "Power Generation",
  "Renewable Energy",
  "Telecommunications",
  "Warehousing",
  "Construction",
  "Healthcare",
  "Manufacturing",
  "Oil & Gas",
  "Rail",
  "Steel",
  "Water Treatment",
];

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Please select an industry"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  serviceName: z.string().min(1, "ServiceName is required"),
});

type ServiceRequestForm = z.infer<typeof contactFormSchema>;

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

function ContactForm({ onClose }: { onClose: () => void }) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      message: "",
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
      onClose()
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

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    mutation.mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  placeholder="John Doe"
                  {...field}
                  className="bg-[#1f2024] border-gray-700 text-white font-alliance"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300 font-alliance">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="john@example.com"
                  type="email"
                  {...field}
                  className="bg-[#1f2024] border-gray-700 text-white font-alliance"
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
                  placeholder="Your Company"
                  {...field}
                  className="bg-[#1f2024] border-gray-700 text-white font-alliance"
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-[#1f2024] border-gray-700 text-white font-alliance">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#16171a] border-gray-800">
                  {industries.map((industry) => (
                    <SelectItem
                      key={industry}
                      value={industry}
                      className="text-white hover:bg-white/10 font-alliance"
                    >
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300 font-alliance">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your needs..."
                  className="min-h-[100px] bg-[#1f2024] border-gray-700 text-white font-alliance"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="rounded-full border-gray-700 text-white hover:bg-white/10 font-alliance"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-full bg-white text-black hover:bg-gray-100 font-alliance"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default function Offerings() {
  return (
    <div className="pt-32 min-h-screen bg-[#0b0b0d] font-alliance">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm uppercase tracking-wider text-[#eba200] font-alliance">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 font-alliance">
              Offerings
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-alliance">
              Our integrated solutions empower organizations across industries
              to proactively manage risk, enhance safety performance, and drive
              operational excellence.
            </p>
          </motion.div>
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-400 font-alliance">
            Whether through expert-led consulting, on-site services, or
            cutting-edge AI-driven platforms, we provide the tools and insights
            needed to solve the toughest safety and risk challenges—faster and
            more effectively.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-[#16171a] p-6 hover:border-gray-700 transition-all"
            >
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-alliance">
                    ↳ {offering.title}
                  </h3>
                  <p className="text-gray-400 font-alliance">
                    {offering.description}
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="whitespace-nowrap rounded-full bg-white text-black hover:bg-gray-100 font-alliance">
                      Learn More →
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-[#16171a] border-gray-800">
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-6 text-white font-alliance">
                        Contact Us
                      </h2>
                      <ContactForm
                        onClose={() =>
                          document
                            .querySelector('[role="dialog"]')
                            ?.closest("dialog")
                            ?.close()
                        }
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <ContactSection title="Get Started with MAC in Minutes" />
    </div>
  );
}
