"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/component/hooks/use-toast";
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
import { Button } from "@/component/ui/button";
import { HUDOverlay } from "@/component/ui/hud-overlay";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/component/ui/select";
import { RadioGroup, RadioGroupItem } from "@/component/ui/radio-group";
import { Users, Binary } from "lucide-react";

const serviceFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  industry: z.string().min(1, "Industry is required"),
  service: z.string().min(1, "Service type is required"),
  message: z.string().min(1, "Message is required"),
  serviceName: z.string().min(1, "ServiceName is required"),
});

const softwareFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  industry: z.string().min(1, "Industry is required"),
  requestType: z.enum(["demo", "learn"], {
    required_error: "Please select what you'd like to do",
  }),
  platform: z.enum(["NIXN", "xOS", "both"], {
    required_error: "Please select a platform",
  }),
  message: z.string().min(1, "Message is required"),
  serviceName: z.string().min(1, "ServiceName is required"),
});

type FormType = "service" | "software" | null;

type SoftwareFormSchemaValues = z.infer<typeof softwareFormSchema>;

export default function ContactSection({ title }: { title?: string }) {
  const [formType, setFormType] = useState<FormType>(null);
  const { toast } = useToast();

  const serviceForm = useForm({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      service: "",
      message: "",
      serviceName: "People Service",
    },
  });

  const softwareForm = useForm<SoftwareFormSchemaValues>({
    resolver: zodResolver(softwareFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      requestType: "demo",
      platform: "NIXN",
      message: "",
      serviceName: "Software Service",
    },
  });

  const mutation = useMutation<
    unknown, // Response type (unknown if not needed)
    Error, // Error type
    SoftwareFormSchemaValues // The expected type of 'data'
  >({
    mutationFn: async (data: SoftwareFormSchemaValues) => {
      return await apiRequest("POST", "/api/messsage", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
        duration: 1000,
      });
      if (formType === "service") serviceForm.reset();
      if (formType === "software") softwareForm.reset();
      setFormType(null);
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

  const handleBack = () => {
    setFormType(null);
    if (formType === "service") serviceForm.reset();
    if (formType === "software") softwareForm.reset();
  };

  return (
    <section id="contact" className="py-20 bg-[#0D1117]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {title || (
            <>
              What can we help you{" "}
              <span className="bg-gradient-to-r from-[#eba200] via-[#64FFDA] to-[#eba200] text-transparent bg-clip-text animate-gradient">
                achieve
              </span>
              ?
            </>
          )}
        </h2>

        <div className="w-full">
          <HUDOverlay>
            <div className="relative">
              {!formType ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12">
                  <button
                    onClick={() => setFormType("service")}
                    className="group relative h-48 md:h-64 p-6 border-2 border-white/20 text-white rounded-md transition-all duration-300 overflow-hidden hover:border-[#eba200]/50 bg-[#0A192F]/40"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#eba200]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex flex-col items-center justify-center h-full space-y-4">
                      <Users className="w-12 h-12 md:w-16 md:h-16 text-[#eba200] group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                          People Services
                        </h3>
                        <p className="text-sm md:text-base text-gray-400 max-w-[300px] mx-auto">
                          Expert consultants and safety specialists for your
                          mission-critical operations
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#eba200] to-[#64FFDA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>

                  <button
                    onClick={() => setFormType("software")}
                    className="group relative h-48 md:h-64 p-6 border-2 border-white/20 text-white rounded-md transition-all duration-300 overflow-hidden hover:border-[#64FFDA]/50 bg-[#0A192F]/40"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex flex-col items-center justify-center h-full space-y-4">
                      <Binary className="w-12 h-12 md:w-16 md:h-16 text-[#64FFDA] group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                          Software Solutions
                        </h3>
                        <p className="text-sm md:text-base text-gray-400 max-w-[300px] mx-auto">
                          Advanced AI-powered platforms for comprehensive risk
                          management
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#64FFDA] to-[#eba200] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
                </div>
              ) : formType === "service" ? (
                <Form {...serviceForm}>
                  <form
                    onSubmit={serviceForm.handleSubmit((data) =>
                      mutation.mutate({ ...data, type: "service" })
                    )}
                    className="space-y-6 p-6"
                  >
                    <FormField
                      control={serviceForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-[#233554]/20 border-[#233554]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={serviceForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="bg-[#233554]/20 border-[#233554]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={serviceForm.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-[#233554]/20 border-[#233554]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={serviceForm.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="bg-[#233554]/20 border-[#233554]">
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="construction">
                                  Construction
                                </SelectItem>
                                <SelectItem value="steel">Steel</SelectItem>
                                <SelectItem value="mining">Mining</SelectItem>
                                <SelectItem value="healthcare">
                                  Healthcare
                                </SelectItem>
                                <SelectItem value="energy">Energy</SelectItem>
                                <SelectItem value="defense">Defense</SelectItem>
                                <SelectItem value="transportation">
                                  Transportation
                                </SelectItem>
                                <SelectItem value="manufacturing">
                                  Manufacturing
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={serviceForm.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="bg-[#233554]/20 border-[#233554]">
                                <SelectValue placeholder="Select service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="staffing">
                                  Project Staffing
                                </SelectItem>
                                <SelectItem value="training">
                                  Training
                                </SelectItem>
                                <SelectItem value="consulting">
                                  Consulting
                                </SelectItem>
                                <SelectItem value="risk-management">
                                  Risk Management
                                </SelectItem>
                                <SelectItem value="other">
                                  Other Service
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={serviceForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-[#233554]/20 border-[#233554]"
                              rows={5}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleBack}
                        className="flex-1 border-white text-white hover:bg-[#eba200] hover:border-[#eba200] hover:text-black hover:shadow-[0_0_15px_rgba(235,162,0,0.5)]"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/80"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </Form>
              ) : (
                <Form {...softwareForm}>
                  <form
                    onSubmit={softwareForm.handleSubmit((data) =>
                      mutation.mutate({ ...data, type: "software" })
                    )}
                    className="space-y-6 p-6"
                  >
                    <FormField
                      control={softwareForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-[#233554]/20 border-[#233554]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={softwareForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="bg-[#233554]/20 border-[#233554]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={softwareForm.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-[#233554]/20 border-[#233554]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={softwareForm.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="bg-[#233554]/20 border-[#233554]">
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="construction">
                                  Construction
                                </SelectItem>
                                <SelectItem value="steel">Steel</SelectItem>
                                <SelectItem value="mining">Mining</SelectItem>
                                <SelectItem value="healthcare">
                                  Healthcare
                                </SelectItem>
                                <SelectItem value="energy">Energy</SelectItem>
                                <SelectItem value="defense">Defense</SelectItem>
                                <SelectItem value="transportation">
                                  Transportation
                                </SelectItem>
                                <SelectItem value="manufacturing">
                                  Manufacturing
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={softwareForm.control}
                      name="requestType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What would you like to do?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="flex gap-4"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="demo" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Schedule a Demo
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="learn" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Learn More
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={softwareForm.control}
                      name="platform"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Platform</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="flex gap-4"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="NIXN" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  NIXN
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="xOS" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  xOS
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="both" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Both
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={softwareForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-[#233554]/20 border-[#233554]"
                              rows={5}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleBack}
                        className="flex-1 border-white text-white hover:bg-[#eba200] hover:border-[#eba200] hover:text-black hover:shadow-[0_0_15px_rgba(235,162,0,0.5)]"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/80"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </HUDOverlay>
        </div>
      </div>
    </section>
  );
}
