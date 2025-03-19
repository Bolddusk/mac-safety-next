"use client";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/component/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "../ui/button";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Please select an industry"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  serviceName: z.string().min(1, "ServiceName is required"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

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

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      message: "",
      serviceName: "Contact Us From Offerings page",
    },
  });

  const onClose = () =>
    document.querySelector('[role="dialog"]')?.closest("dialog")?.close();

  const mutation = useMutation<
    unknown, // Response type (unknown if not needed)
    Error, // Error type
    ContactFormValues // The expected type of 'data'
  >({
    mutationFn: async (data: ContactFormValues) => {
      return await apiRequest("POST", "/api/message", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
        duration: 1000,
      });
      form.reset();
      (document.getElementsByClassName("sr-only")[1] as HTMLElement)?.click();
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
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" type="email" {...field} />
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
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Your Company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-white"
              >
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                className="p-2 block w-full rounded-sm border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={field.value}
                onChange={field.onChange}
              >
                <option value="" disabled>
                  Select an industry
                </option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
              <FormMessage />
            </>
            // <FormItem>
            //   <FormLabel>Industry</FormLabel>
            //   <Select onValueChange={field.onChange} defaultValue={field.value}>
            //     <FormControl>
            //       <SelectTrigger>
            //         <SelectValue placeholder="Select an industry" />
            //       </SelectTrigger>
            //     </FormControl>
            //     <SelectContent>
            //       {industries.map((industry) => (
            //         <SelectItem key={industry} value={industry}>
            //           {industry}
            //         </SelectItem>
            //       ))}
            //     </SelectContent>
            //   </Select>
            //   <FormMessage />
            // </FormItem>
          )}
        />
        {/* 
        <div className="space-y-2">
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-gray-700"
          >
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            className="p-2 block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            // value={value}
            // onChange={(e) => onChange(e.target.value)}
          >
            <option value="" disabled>
              Select an industry
            </option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {!value && (
            <p className="text-sm text-red-500">Please select an industry.</p>
          )}
        </div> */}

        {/* <div className="space-y-2">
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-gray-700"
          >
            Industry
          </label>
          <select
            id="industry"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            {...register("industry", { required: "Please select an industry" })}
          >
            <option value="" disabled>
              Select an industry
            </option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="text-sm text-red-500">{errors.industry.message}</p>
          )}
        </div> */}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your needs..."
                  className="min-h-[100px]"
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
            onClick={() => {
              (
                document.getElementsByClassName("sr-only")[1] as HTMLElement
              )?.click();
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="w-full bg-[#eba200] text-black hover:bg-[#eba200]/90 hover:shadow-[0_0_15px_rgba(235,162,0,0.5)] transition-all"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
