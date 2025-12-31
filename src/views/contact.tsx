"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/component/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/component/ui/select";
import { Input } from "@/component/ui/input";
import { Textarea } from "@/component/ui/textarea";
import { Button } from "@/component/ui/button";
import { Mail, Phone, MapPin, Check, Copy, LucideIcon } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/component/hooks/use-toast";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Please select an industry"),
  country: z.string().min(1, "Please select a country"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  serviceName: z.string().min(1, "Service Name is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const industries = [
  "Airline",
  "Auto",
  "Chemical Processing",
  "Construction",
  "Data Centers",
  "Defense & Aerospace",
  "Healthcare",
  "Insurance",
  "Life Science",
  "Manufacturing",
  "Maritime",
  "Mining",
  "Oil & Gas",
  "Power Generation",
  "Rail",
  "Renewable Energy",
  "Steel",
  "Telecommunications",
  "Warehousing",
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Australia",
  "Japan",
  "Other",
];

function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-6 w-6 disabled:opacity-100", className)}
      onClick={handleCopy}
      disabled={copied}
      data-testid="button-copy"
    >
      <div
        className={cn(
          "transition-all",
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        <Check className="h-3.5 w-3.5 text-emerald-500" />
      </div>
      <div
        className={cn(
          "absolute transition-all",
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
      >
        <Copy className="h-3.5 w-3.5 text-gray-400" />
      </div>
    </Button>
  );
}

function ContactBox({
  icon: Icon,
  title,
  description,
  children,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between border-b border-gray-800 md:border-r md:border-b-0 last:border-r-0 last:border-b-0",
        className
      )}
    >
      <div className="bg-white/5 flex items-center gap-x-3 border-b border-gray-800 p-4">
        <Icon className="h-5 w-5 text-[#eba200]" strokeWidth={1.5} />
        <h2 className="text-lg font-medium tracking-wide text-white font-alliance">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-x-2 p-4 py-10">{children}</div>
      <div className="border-t border-gray-800 p-4">
        <p className="text-sm text-gray-500 font-alliance">{description}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      industry: "",
      country: "",
      email: "",
      message: "",
      serviceName: "Contact Us",
    },
  });
  const mutation = useMutation<
    unknown, // Response type (unknown if not needed)
    Error, // Error type
    ContactFormData // The expected type of 'data'
  >({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/message", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
        duration: 1000,
      });
      form.reset();
      setIsSubmitting(false);
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

  const onSubmit = async (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const socialLinks = [
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/company/mac-safety-inc/",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0d] font-alliance">
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-sm uppercase tracking-wider text-[#eba200] font-alliance">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 font-alliance">
              Contact Us
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-alliance">
              Have questions about our safety solutions? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-5xl mx-auto bg-[#16171a] border border-gray-800 rounded-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-white/5 flex items-center gap-x-3 border-b border-gray-800 p-4">
            <Mail className="h-5 w-5 text-[#eba200]" strokeWidth={1.5} />
            <h2 className="text-lg font-medium tracking-wide text-white font-alliance">
              Send us a message
            </h2>
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-alliance">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-[#1f2024] border-gray-700 text-white font-alliance"
                            data-testid="input-first-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-alliance">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-[#1f2024] border-gray-700 text-white font-alliance"
                            data-testid="input-last-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
                          {...field}
                          className="bg-[#1f2024] border-gray-700 text-white font-alliance"
                          data-testid="input-company"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            <SelectTrigger
                              className="bg-[#1f2024] border-gray-700 text-white font-alliance"
                              data-testid="select-industry"
                            >
                              <SelectValue placeholder="Select industry" />
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
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-alliance">
                          Country
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className="bg-[#1f2024] border-gray-700 text-white font-alliance"
                              data-testid="select-country"
                            >
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#16171a] border-gray-800">
                            {countries.map((country) => (
                              <SelectItem
                                key={country}
                                value={country}
                                className="text-white hover:bg-white/10 font-alliance"
                              >
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
                          {...field}
                          type="email"
                          className="bg-[#1f2024] border-gray-700 text-white font-alliance"
                          data-testid="input-email"
                        />
                      </FormControl>
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
                          {...field}
                          className="bg-[#1f2024] border-gray-700 text-white min-h-[150px] font-alliance"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-white text-black hover:bg-gray-100 font-alliance"
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Form Footer */}
          <div className="border-t border-gray-800 p-4">
            <p className="text-sm text-gray-500 font-alliance">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Boxes */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto bg-[#16171a] border border-gray-800 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-3">
            <ContactBox
              icon={Mail}
              title="Email"
              description="We respond to all emails within 24 hours."
            >
              <a
                href="mailto:info@macsafety.us"
                className="font-mono text-base font-medium tracking-wide text-white hover:text-[#eba200] transition-colors"
                data-testid="link-email"
              >
                info@macsafety.us
              </a>
              <CopyButton text="info@macsafety.us" />
            </ContactBox>

            <ContactBox
              icon={MapPin}
              title="Headquarters"
              description="Visit us at our Pennsylvania office."
            >
              <address className="font-mono text-base font-medium tracking-wide text-white not-italic">
                401 Brkich Way, Beaver, PA 15009
              </address>
            </ContactBox>

            <ContactBox
              icon={Phone}
              title="Phone"
              description="Available Monday–Friday, 8am–5pm EST."
              className="md:border-r-0"
            >
              <div className="flex items-center gap-x-2">
                <a
                  href="tel:724.513.4491"
                  className="font-mono text-base font-medium tracking-wide text-white hover:text-[#eba200] transition-colors"
                  data-testid="link-phone"
                >
                  724.513.4491
                </a>
                <CopyButton text="724.513.4491" />
              </div>
            </ContactBox>
          </div>

          {/* Find us online section */}
          <div className="relative border-t border-gray-800">
            <div
              className={cn(
                "absolute inset-0 z-0",
                "bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]",
                "bg-[size:24px_24px]",
                "[mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_20%,transparent_70%)]"
              )}
            />
            <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4">
              <h2 className="text-2xl font-bold text-white mb-6 font-alliance">
                Find us online
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#eba200]/50 flex items-center gap-x-2 rounded-full px-5 py-2.5 transition-all"
                    data-testid={`link-social-${link.label.toLowerCase()}`}
                  >
                    <link.icon className="h-4 w-4 text-white" />
                    <span className="font-mono text-sm font-medium tracking-wide text-white">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
