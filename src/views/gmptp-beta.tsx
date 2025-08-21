"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/component/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/component/hooks/use-toast";
import { generateGMPTPBETATemplate } from "@/app/templates/gmptp-beta";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  companyRep: z.string().min(1, "Company representative is required"),
  email: z.string().email("Please enter a valid email address"),
  facility: z.string().min(1, "Facility information is required"),
  project: z.string().min(1, "Project information is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function GMPTPBeta() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      companyRep: "",
      email: "",
      facility: "",
      project: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // In a real app, you'd submit this to your API
      console.log("GMPTP Beta submission:", data);

      const payload = {
        template: generateGMPTPBETATemplate(data),
        text: "Mac Safety",
        subject: "GMPTP-BETA Register",
      };

      const resp = await apiRequest("POST", "/api/send", payload);

      console.log({ resp: await resp.json() });

      toast({
        title: "Application Submitted",
        description:
          "Thank you for your interest in GMPTP Beta. We'll be in touch soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.log({ error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 text-black">
      {/* Full-bleed Hero Section */}
      <div
        className="w-screen h-screen relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300"
        style={{
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          {/* Top Left - BUILT FOR BUILDERS */}
          <div className="absolute top-20 left-0 p-4">
            <h1 className="text-3xl sm:text-4xl md:text-8xl lg:text-9xl font-helvetica-now font-extrabold tracking-tight text-white leading-tight">
              BUILT FOR
              <br />
              BUILDERS
            </h1>
          </div>

          {/* Top Right - BETA PROGRAM */}
          <div className="absolute top-20 right-0 p-4 text-right">
            <h2 className="text-3xl sm:text-4xl md:text-8xl lg:text-9xl font-helvetica-now font-extrabold tracking-tight text-white leading-tight">
              BETA
              <br />
              PROGRAM
            </h2>
          </div>

          {/* Center - Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="inline-block">
              <img
                src="/uploads/gmptp-logo.png"
                alt="GMPTP Logo"
                className="w-[7.2rem] h-[7.2rem] md:w-[9.6rem] md:h-[9.6rem] lg:w-[12rem] lg:h-[12rem] object-contain mx-auto"
              />
            </div>
          </div>

          {/* Bottom Left - JOIN */}
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-5xl sm:text-6xl md:text-9xl lg:text-[12rem] font-helvetica-now font-extrabold tracking-tight text-white leading-none">
              JOIN
            </h3>
          </div>

          {/* Bottom Right - NOW */}
          <div className="absolute bottom-0 right-0 p-4 text-right">
            <h4 className="text-5xl sm:text-6xl md:text-9xl lg:text-[12rem] font-helvetica-now font-extrabold tracking-tight text-white leading-none">
              NOW
            </h4>
          </div>
        </motion.div>
      </div>

      {/* Join Form Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title */}
            <div className="lg:pr-8">
              <h3 className="text-5xl lg:text-6xl font-helvetica-now font-extrabold text-white leading-tight">
                REGISTER YOUR
                <br />
                INTEREST HERE
              </h3>
            </div>

            {/* Right Column - Form */}
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black text-sm uppercase tracking-wide">
                          COMPANY NAME:
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-transparent border-0 border-b-2 border-black text-black focus:border-[#eba200] focus:ring-0 rounded-none px-0 py-2"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyRep"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black text-sm uppercase tracking-wide">
                          COMPANY REPRESENTATIVE:
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-transparent border-0 border-b-2 border-black text-black focus:border-[#eba200] focus:ring-0 rounded-none px-0 py-2"
                            placeholder=""
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
                        <FormLabel className="text-black text-sm uppercase tracking-wide">
                          EMAIL:
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="bg-transparent border-0 border-b-2 border-black text-black focus:border-[#eba200] focus:ring-0 rounded-none px-0 py-2"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="facility"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black text-sm uppercase tracking-wide">
                          FACILITY:
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-transparent border-0 border-b-2 border-black text-black focus:border-[#eba200] focus:ring-0 rounded-none px-0 py-2"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="project"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black text-sm uppercase tracking-wide">
                          PROJECT:
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-transparent border-0 border-b-2 border-black text-black focus:border-[#eba200] focus:ring-0 rounded-none px-0 py-2"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-[#eba200] hover:text-black text-white font-helvetica-now font-extrabold text-lg py-6 transition-all duration-300 mt-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
