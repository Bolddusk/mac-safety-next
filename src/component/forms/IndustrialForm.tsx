"use client"
import React, { useState } from "react";
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
import { Button } from "@/component/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "../hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const serviceRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Please select an industry"),
  service: z.string().min(1, "Please select a service"),
  serviceName: z.string().min(1, "ServiceName is required"),
});

type ServiceRequestForm = z.infer<typeof serviceRequestSchema>;

const IndustrialForm = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<ServiceRequestForm>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      name: "",
      company: "",
      industry: "",
      service: "",
      serviceName: "Request Services",
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
      setIsDialogOpen(false);
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

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#eba200] text-black hover:bg-[#eba200]/80 hover:shadow-[0_0_15px_rgba(235,162,0,0.5)]">
          Request People Services
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#1B2434] border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Request Services
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill out the form below to request our services. We&apos;ll get back to
            you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="bg-black/40 border-white/10 text-white placeholder:text-gray-500"
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
                  <FormLabel className="text-white">Company</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your company"
                      {...field}
                      className="bg-black/40 border-white/10 text-white placeholder:text-gray-500"
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
                  <FormLabel className="text-white">Industry</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-black/40 border-white/10 text-white">
                        <SelectValue placeholder="Select an industry" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#1B2434] border-white/10">
                      <SelectItem value="airline">
                        Airports & Capital Projects
                      </SelectItem>
                      <SelectItem value="auto">Automotive</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="data-centers">Data Centers</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="insurance">Insurance</SelectItem>
                      <SelectItem value="life-science">
                        Life Sciences
                      </SelectItem>
                      <SelectItem value="manufacturing">
                        Manufacturing
                      </SelectItem>
                      <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                      <SelectItem value="rail">Rail</SelectItem>
                      <SelectItem value="steel">Steel</SelectItem>
                      <SelectItem value="chemical">
                        Chemical Processing & Refining
                      </SelectItem>
                      <SelectItem value="defense">
                        Defense & Aerospace
                      </SelectItem>
                      <SelectItem value="maritime">
                        Maritime & Shipbuilding
                      </SelectItem>
                      <SelectItem value="mining">Mining & Quarrying</SelectItem>
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
                  <FormLabel className="text-white">Service</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-black/40 border-white/10 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#1B2434] border-white/10">
                      <SelectItem value="project-staffing">
                        Project Staffing
                      </SelectItem>
                      <SelectItem value="risk-management">
                        Risk Management
                      </SelectItem>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="assessment">Assessment</SelectItem>
                      <SelectItem value="program-buildout">
                        Program Buildout
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#eba200] text-black hover:bg-[#eba200]/80 hover:shadow-[0_0_15px_rgba(235,162,0,0.5)]"
            >
              Submit Request
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default IndustrialForm;
