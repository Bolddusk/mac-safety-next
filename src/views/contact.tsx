"use client";
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
import { Card, CardContent } from "@/component/ui/card";
import { Mail, Phone, Building } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/component/hooks/use-toast";
import Footer from "@/layout/Footer";

// Form schema
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

  return (
    <div className="min-h-screen bg-[#0D1117] pt-16">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#eba200]/10 to-[#64FFDA]/10" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">First Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-black/50 border-white/10 text-white"
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
                      <FormLabel className="text-white">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-black/50 border-white/10 text-white"
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
                    <FormLabel className="text-white">Company</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-black/50 border-white/10 text-white"
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
                      <FormLabel className="text-white">Industry</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/10 text-white">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black/95 border-white/10 backdrop-blur-sm">
                          {industries.map((industry) => (
                            <SelectItem
                              key={industry}
                              value={industry}
                              className="text-white hover:bg-white/10"
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
                      <FormLabel className="text-white">Country</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-black/50 border-white/10 text-white">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black/95 border-white/10 backdrop-blur-sm">
                          {countries.map((country) => (
                            <SelectItem
                              key={country}
                              value={country}
                              className="text-white hover:bg-white/10"
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
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="bg-black/50 border-white/10 text-white"
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
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="bg-black/50 border-white/10 text-white min-h-[150px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#eba200] hover:bg-[#eba200]/90 text-black"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-black/50 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-[#eba200]" />
                <h3 className="text-white font-semibold">General Inquiries</h3>
              </div>
              <a
                href="mailto:info@macsafety.us"
                className="text-gray-400 hover:text-[#eba200]"
              >
                info@macsafety.us
              </a>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-[#64FFDA]" />
                <h3 className="text-white font-semibold">Media Inquiries</h3>
              </div>
              <a
                href="mailto:press@macsafety.us"
                className="text-gray-400 hover:text-[#64FFDA]"
              >
                press@macsafety.us
              </a>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-5 w-5 text-[#eba200]" />
                <h3 className="text-white font-semibold">Phone</h3>
              </div>
              <a
                href="tel:724.513.4491"
                className="text-gray-400 hover:text-[#eba200]"
              >
                724.513.4491
              </a>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-5 w-5 text-[#64FFDA]" />
                <h3 className="text-white font-semibold">Headquarters</h3>
              </div>
              <address className="text-gray-400 not-italic">
                401 Brkich Way
                <br />
                Beaver, PA 15009
              </address>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
