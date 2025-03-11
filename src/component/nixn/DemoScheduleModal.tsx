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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Calendar } from "@/component/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/component/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/component/hooks/use-toast";
import { useState } from "react";

const demoFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z
    .string()
    .regex(
      /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      "Please enter a valid time (HH:MM)"
    ),
  serviceName: z.string().min(1, "ServiceName is required"),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

export function DemoScheduleModal() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      date: new Date(),
      serviceName: "Schedule a Demo",
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
      setIsOpen(false);
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="w-full bg-[#eba200] text-black hover:bg-[#eba200]/90 hover:shadow-[0_0_15px_rgba(235,162,0,0.5)] transition-all cursor-pointer"
          onClick={() => {
            form.reset();
            setIsOpen(true);
          }}
        >
          See NIXN in Action
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Schedule a Demo
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
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
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-white">Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal bg-white/5 border-white/10 text-white",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    Time (24h format)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="time"
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
              Schedule Demo
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
