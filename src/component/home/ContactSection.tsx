/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/component/ui/select";
import { RadioGroup, RadioGroupItem } from "@/component/ui/radio-group";
import { Users, Binary, ArrowLeft, ArrowRight, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "../hooks/use-toast";

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

  const softwareForm = useForm({
    resolver: zodResolver(softwareFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      requestType: "demo" as const,
      platform: "NIXN" as const,
      message: "",
      serviceName: "Software Service",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: any) =>
      apiRequest("POST", "/api/message", { ...data, name: "" }),
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
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
      });
    },
  });

  const handleBack = () => {
    setFormType(null);
    if (formType === "service") serviceForm.reset();
    if (formType === "software") softwareForm.reset();
  };

  const inputStyles =
    "bg-[#1f2024] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#eba200] focus:ring-[#eba200] rounded-xl";
  const labelStyles = "text-gray-300 font-alliance";

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0b0b0d]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#eba200] text-sm uppercase tracking-widest mb-4 font-alliance">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-alliance">
              {title || "How can we help?"}
            </h2>
            <p className="text-gray-400 font-alliance">
              Select the option that best describes your needs
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#16171a] rounded-2xl border border-gray-800 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!formType ? (
                <motion.div
                  key="options"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2"
                >
                  <button
                    onClick={() => setFormType("service")}
                    className="group relative p-8 md:p-12 text-left hover:bg-gray-750 transition-colors border-b md:border-b-0 md:border-r border-gray-700"
                    data-testid="button-people-services"
                  >
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="w-16 h-16 rounded-xl bg-[#eba200]/10 flex items-center justify-center mb-6 group-hover:bg-[#eba200]/20 transition-colors">
                        <Users className="w-8 h-8 text-[#eba200]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-alliance">
                        People Services
                      </h3>
                      <p className="text-gray-400 text-sm font-alliance mb-4">
                        Expert consultants and safety specialists for your
                        mission-critical operations
                      </p>
                      <div className="flex items-center gap-2 text-[#eba200] text-sm font-alliance group-hover:gap-3 transition-all">
                        Get Started <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setFormType("software")}
                    className="group relative p-8 md:p-12 text-left hover:bg-gray-750 transition-colors"
                    data-testid="button-software-solutions"
                  >
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="w-16 h-16 rounded-xl bg-[#64FFDA]/10 flex items-center justify-center mb-6 group-hover:bg-[#64FFDA]/20 transition-colors">
                        <Binary className="w-8 h-8 text-[#64FFDA]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-alliance">
                        Software Solutions
                      </h3>
                      <p className="text-gray-400 text-sm font-alliance mb-4">
                        AI-powered platforms for comprehensive risk management
                      </p>
                      <div className="flex items-center gap-2 text-[#64FFDA] text-sm font-alliance group-hover:gap-3 transition-all">
                        Get Started <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                </motion.div>
              ) : formType === "service" ? (
                <motion.div
                  key="service-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <button
                      onClick={handleBack}
                      className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5 text-gray-400" />
                    </button>
                    <h3 className="text-xl font-bold text-white font-alliance">
                      People Services Inquiry
                    </h3>
                  </div>

                  <Form {...serviceForm}>
                    <form
                      onSubmit={serviceForm.handleSubmit((data) =>
                        mutation.mutate({ ...data, type: "service" }),
                      )}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={serviceForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelStyles}>
                                Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className={inputStyles}
                                  data-testid="input-name"
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
                              <FormLabel className={labelStyles}>
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="email"
                                  className={inputStyles}
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={serviceForm.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelStyles}>
                                Company
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className={inputStyles}
                                  data-testid="input-company"
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
                              <FormLabel className={labelStyles}>
                                Industry
                              </FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <SelectTrigger
                                    className={inputStyles}
                                    data-testid="select-industry"
                                  >
                                    <SelectValue placeholder="Select industry" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-gray-800 border-gray-700">
                                    <SelectItem
                                      value="construction"
                                      className="text-white"
                                    >
                                      Construction
                                    </SelectItem>
                                    <SelectItem
                                      value="steel"
                                      className="text-white"
                                    >
                                      Steel
                                    </SelectItem>
                                    <SelectItem
                                      value="mining"
                                      className="text-white"
                                    >
                                      Mining
                                    </SelectItem>
                                    <SelectItem
                                      value="healthcare"
                                      className="text-white"
                                    >
                                      Healthcare
                                    </SelectItem>
                                    <SelectItem
                                      value="energy"
                                      className="text-white"
                                    >
                                      Energy
                                    </SelectItem>
                                    <SelectItem
                                      value="defense"
                                      className="text-white"
                                    >
                                      Defense
                                    </SelectItem>
                                    <SelectItem
                                      value="transportation"
                                      className="text-white"
                                    >
                                      Transportation
                                    </SelectItem>
                                    <SelectItem
                                      value="manufacturing"
                                      className="text-white"
                                    >
                                      Manufacturing
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={serviceForm.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className={labelStyles}>
                              Service Type
                            </FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger
                                  className={inputStyles}
                                  data-testid="select-service"
                                >
                                  <SelectValue placeholder="Select service" />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 border-gray-700">
                                  <SelectItem
                                    value="staffing"
                                    className="text-white"
                                  >
                                    Project Staffing
                                  </SelectItem>
                                  <SelectItem
                                    value="training"
                                    className="text-white"
                                  >
                                    Training
                                  </SelectItem>
                                  <SelectItem
                                    value="consulting"
                                    className="text-white"
                                  >
                                    Consulting
                                  </SelectItem>
                                  <SelectItem
                                    value="risk-management"
                                    className="text-white"
                                  >
                                    Risk Management
                                  </SelectItem>
                                  <SelectItem
                                    value="other"
                                    className="text-white"
                                  >
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
                            <FormLabel className={labelStyles}>
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                className={inputStyles}
                                rows={4}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-[#eba200] hover:bg-[#d49400] text-black font-semibold py-6 rounded-full font-alliance"
                        disabled={mutation.isPending}
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? (
                          "Sending..."
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            Send Message <Send className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              ) : (
                <motion.div
                  key="software-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <button
                      onClick={handleBack}
                      className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5 text-gray-400" />
                    </button>
                    <h3 className="text-xl font-bold text-white font-alliance">
                      Software Solutions Inquiry
                    </h3>
                  </div>

                  <Form {...softwareForm}>
                    <form
                      onSubmit={softwareForm.handleSubmit((data) =>
                        mutation.mutate({ ...data, type: "software" }),
                      )}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={softwareForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelStyles}>
                                Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className={inputStyles}
                                  data-testid="input-name"
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
                              <FormLabel className={labelStyles}>
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="email"
                                  className={inputStyles}
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={softwareForm.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelStyles}>
                                Company
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className={inputStyles}
                                  data-testid="input-company"
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
                              <FormLabel className={labelStyles}>
                                Industry
                              </FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <SelectTrigger
                                    className={inputStyles}
                                    data-testid="select-industry"
                                  >
                                    <SelectValue placeholder="Select industry" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-gray-800 border-gray-700">
                                    <SelectItem
                                      value="construction"
                                      className="text-white"
                                    >
                                      Construction
                                    </SelectItem>
                                    <SelectItem
                                      value="steel"
                                      className="text-white"
                                    >
                                      Steel
                                    </SelectItem>
                                    <SelectItem
                                      value="mining"
                                      className="text-white"
                                    >
                                      Mining
                                    </SelectItem>
                                    <SelectItem
                                      value="healthcare"
                                      className="text-white"
                                    >
                                      Healthcare
                                    </SelectItem>
                                    <SelectItem
                                      value="energy"
                                      className="text-white"
                                    >
                                      Energy
                                    </SelectItem>
                                    <SelectItem
                                      value="defense"
                                      className="text-white"
                                    >
                                      Defense
                                    </SelectItem>
                                    <SelectItem
                                      value="transportation"
                                      className="text-white"
                                    >
                                      Transportation
                                    </SelectItem>
                                    <SelectItem
                                      value="manufacturing"
                                      className="text-white"
                                    >
                                      Manufacturing
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={softwareForm.control}
                        name="requestType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className={labelStyles}>
                              What would you like to do?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="flex gap-6"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem
                                      value="demo"
                                      className="border-gray-600 text-[#64FFDA]"
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal text-gray-300">
                                    Schedule a Demo
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem
                                      value="learn"
                                      className="border-gray-600 text-[#64FFDA]"
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal text-gray-300">
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
                            <FormLabel className={labelStyles}>
                              Platform
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="flex gap-6"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem
                                      value="NIXN"
                                      className="border-gray-600 text-[#64FFDA]"
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal text-gray-300">
                                    NIXN
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem
                                      value="xOS"
                                      className="border-gray-600 text-[#64FFDA]"
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal text-gray-300">
                                    xOS
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem
                                      value="both"
                                      className="border-gray-600 text-[#64FFDA]"
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal text-gray-300">
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
                            <FormLabel className={labelStyles}>
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                className={inputStyles}
                                rows={4}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-[#64FFDA] hover:bg-[#50e6c2] text-gray-900 font-semibold py-6 rounded-full font-alliance"
                        disabled={mutation.isPending}
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? (
                          "Sending..."
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            Send Message <Send className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
