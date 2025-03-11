"use client";
import { Button } from "@/component/ui/button";
import {
  Dialog,
  DialogContent,
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
import { toast } from "@/component/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const demoFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  industry: z.string().min(2, "Industry must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceName: z.string().min(1, "ServiceName is required"),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

export function RequestDemoModal() {
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      name: "",
      company: "",
      industry: "",
      email: "",
      phone: "",
      serviceName: "Request a Demo",
    },
  });

  const mutation = useMutation<
    unknown, // Response type (unknown if not needed)
    Error, // Error type
    DemoFormValues // The expected type of 'data'
  >({
    mutationFn: async (data: DemoFormValues) => {
      return await apiRequest("POST", "/api/messsage", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
        duration: 1000,
      });
      form.reset();
      setOpen(false);
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

  function onSubmit(data: DemoFormValues) {
    mutation.mutate(data);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="w-full bg-[#eba200] text-black hover:bg-[#eba200]/90 hover:shadow-[0_0_15px_rgba(235,162,0,0.5)] transition-all"
          onClick={() => setOpen(true)}
        >
          Request Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Request a Demo
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 mt-4"
          >
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
                      className="bg-white/5 border-white/10 text-white"
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
                      placeholder="Company name"
                      {...field}
                      className="bg-white/5 border-white/10 text-white"
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
                  <FormControl>
                    <Input
                      placeholder="Your industry"
                      {...field}
                      className="bg-white/5 border-white/10 text-white"
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
                  <FormLabel className="text-white">Work Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your.email@company.com"
                      {...field}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+1 (555) 000-0000"
                      {...field}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#eba200] text-black hover:bg-[#eba200]/90"
            >
              Submit Request
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
