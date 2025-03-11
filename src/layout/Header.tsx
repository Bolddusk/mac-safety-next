"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/component/ui/dialog";
import { Menu, X } from "lucide-react";
import { HUDOverlay } from "@/component/ui/hud-overlay";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/component/ui/dropdown-menu";
import { Drawer, DrawerContent, DrawerTrigger } from "@/component/ui/drawer";
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
import { useState } from "react";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import Link from "next/link";
import { Button } from "@/component/ui/button";
import { toast } from "@/component/hooks/use-toast";

const industries = [
  { title: "Airline", href: "/industries#airline" },
  { title: "Auto", href: "/industries#auto" },
  { title: "Chemical Processing", href: "/industries#chemical" },
  { title: "Construction", href: "/industries#construction" },
  { title: "Data Centers", href: "/industries#data-centers" },
  { title: "Defense & Aerospace", href: "/industries#defense" },
  { title: "Healthcare", href: "/industries#healthcare" },
  { title: "Insurance", href: "/industries#insurance" },
  { title: "Life Science", href: "/industries#life-science" },
  { title: "Manufacturing", href: "/industries#manufacturing" },
  { title: "Maritime", href: "/industries#maritime" },
  { title: "Mining", href: "/industries#mining" },
  { title: "Oil & Gas", href: "/industries#oil-gas" },
  { title: "Power Generation", href: "/industries#power" },
  { title: "Rail", href: "/industries#rail" },
  { title: "Renewable Energy", href: "/industries#renewable" },
  { title: "Steel", href: "/industries#steel" },
  { title: "Telecommunications", href: "/industries#telecom" },
  { title: "Warehousing", href: "/industries#warehouse" },
];

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  industry: z.string().min(1, "Please select an industry"),
  message: z.string().min(10, "Please provide more details about your project"),
  serviceName: z.string().min(1, "ServiceName is required"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      industry: "",
      message: "",
      serviceName: "Get Started with MAC",
    },
  });

  const mutation = useMutation<
    unknown, // Response type (unknown if not needed)
    Error, // Error type
    ContactFormValues // The expected type of 'data'
  >({
    mutationFn: async (data: ContactFormValues) => {
      return await apiRequest("POST", "/api/messsage", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
        duration: 1000,
      });
      form.reset();
      setIsContactDrawerOpen(false);
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

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    mutation.mutate(data);
  };

  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
          <Link href="/">
            <div className="flex items-center cursor-pointer -mt-2">
              <img
                src="/uploads/Untitled design (11).png"
                alt="MAC Brand Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/alpha">
              <div className="text-white hover:text-[#eba200] hover:shadow-[0_0_10px_rgba(235,162,0,0.5)] transition-all cursor-pointer">
                Alpha
              </div>
            </Link>
            <Link href="/nixn">
              <div className="text-white hover:text-[#eba200] hover:shadow-[0_0_10px_rgba(235,162,0,0.5)] transition-all cursor-pointer">
                NIXN™
              </div>
            </Link>
            <Link href="/xos">
              <div className="text-white hover:text-[#eba200] hover:shadow-[0_0_10px_rgba(235,162,0,0.5)] transition-all cursor-pointer">
                xOS
              </div>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white hover:text-[#eba200] hover:shadow-[0_0_10px_rgba(235,162,0,0.5)] transition-all cursor-pointer data-[state=open]:text-[#eba200]">
                Industries
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/95 border-white/10 backdrop-blur-sm max-h-[70vh] overflow-y-auto">
                {industries.map((industry) => (
                  <DropdownMenuItem key={industry.title} asChild>
                    <Link href={industry.href}>
                      <div className="text-white hover:text-[#eba200] cursor-pointer w-full px-2 py-1.5">
                        {industry.title}
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-[#eba200] hover:border-[#eba200] hover:text-black hover:shadow-[0_0_15px_rgba(235,162,0,0.5)] transition-all"
                >
                  Log In
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-transparent border-0 p-0 sm:max-w-[425px]">
                <HUDOverlay className="w-full">
                  <div className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white text-center">
                      Select Your Platform
                    </h2>
                    <div className="space-y-4">
                      <a
                        href="https://nixn.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block w-full"
                      >
                        <div className="relative overflow-hidden rounded-lg border border-white/20 bg-black/40 p-4 transition-all hover:border-[#eba200]/40 hover:bg-[#eba200]/10">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#eba200]/0 via-[#eba200]/5 to-[#eba200]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg border border-white/20 p-2 group-hover:border-[#eba200]/40">
                              <img
                                src="/uploads/IMG_8888 (1).png"
                                alt="NIXN Logo"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white">
                                NIXN Platform
                              </h3>
                              <p className="text-sm text-gray-400">
                                Operational Safety Intelligence
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href="https://nixnos.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block w-full"
                      >
                        <div className="relative overflow-hidden rounded-lg border border-white/20 bg-black/40 p-4 transition-all hover:border-[#64FFDA]/40 hover:bg-[#64FFDA]/10">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#64FFDA]/0 via-[#64FFDA]/5 to-[#64FFDA]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg border border-white/20 p-2 group-hover:border-[#64FFDA]/40">
                              <img
                                src="/uploads/xos logo.png"
                                alt="xOS Logo"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white">
                                xOS Platform
                              </h3>
                              <p className="text-sm text-gray-400">
                                Enterprise Risk Intelligence
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </HUDOverlay>
              </DialogContent>
            </Dialog>

            {/* Desktop Hamburger Menu - Now after login button */}
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-[#eba200] hover:bg-transparent"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 bg-black/95 border-white/10 backdrop-blur-sm"
                >
                  <DropdownMenuLabel className="text-[#64FFDA]">
                    Company
                  </DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/offerings">
                        <div className="text-white hover:text-[#eba200] cursor-pointer w-full">
                          Offerings
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href="https://recruiting.paylocity.com/recruiting/jobs/All/8c011b1d-4712-473e-9117-e7b9376d11a1/MAC-SAFETY-INC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#eba200] cursor-pointer w-full"
                      >
                        Careers
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/contact">
                        <div className="text-white hover:text-[#eba200] cursor-pointer w-full">
                          Contact
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/privacy">
                        <div className="text-white hover:text-[#eba200] cursor-pointer w-full">
                          Privacy
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator className="bg-white/10" />

                  <DropdownMenuLabel className="text-[#64FFDA]">
                    Resources
                  </DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <a
                        href="https://medium.com/mac-blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#eba200] cursor-pointer w-full"
                      >
                        Blog
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/impact-studies">
                        <div className="text-white hover:text-[#eba200] cursor-pointer w-full">
                          Impact Studies
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Button - Fixed Bottom Left */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed bottom-4 left-4 z-50 p-3 bg-black/90 rounded-full border border-white/10 text-white hover:text-[#eba200] transition-colors"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Get Started Button - Fixed Bottom Right */}
      <Drawer open={isContactDrawerOpen} onOpenChange={setIsContactDrawerOpen}>
        <DrawerTrigger asChild>
          <Button
            className="md:hidden fixed bottom-4 right-4 z-50 border-white text-white hover:bg-[#eba200] hover:border-[#eba200] hover:text-black hover:shadow-[0_0_15px_rgba(235,162,0,0.5)] transition-all"
            variant="outline"
          >
            Get Started
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-black/95 border-t border-white/10 p-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold text-white mb-4">
              Get Started with MAC
            </h2>
            <p className="text-gray-400 mb-6">
              Interested in solving your problems with MAC? Fill out the form
              below and we&apos;ll connect you with the right team.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
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
                <div className="grid grid-cols-2 gap-4">
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
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
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black/95 border-white/10">
                          {industries.map((industry) => (
                            <SelectItem
                              key={industry.title}
                              value={industry.title}
                              className="text-white hover:bg-white/10"
                            >
                              {industry.title}
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
                      <FormLabel className="text-white">
                        TELL US ABOUT YOUR PROJECT
                        <span className="block text-sm text-gray-400 font-normal">
                          A bit of context will allow us to connect you to the
                          right team faster:
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="bg-black/50 border-white/10 text-white min-h-[120px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#eba200] hover:bg-[#eba200]/90 text-black font-semibold"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Full Viewport Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#eba200] transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-4">
              <Link href="/alpha" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="text-2xl text-white hover:text-[#eba200] transition-all">
                  Alpha
                </div>
              </Link>
              <Link href="/nixn" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="text-2xl text-white hover:text-[#eba200] transition-all">
                  NIXN™
                </div>
              </Link>
              <Link href="/xos" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="text-2xl text-white hover:text-[#eba200] transition-all">
                  xOS
                </div>
              </Link>
              <Link
                href="/industries"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="text-2xl text-white hover:text-[#eba200] transition-all">
                  Industries
                </div>
              </Link>
              <Link
                href="/offerings"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="text-2xl text-white hover:text-[#eba200] transition-all">
                  Offerings
                </div>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="text-2xl text-white hover:text-[#eba200] transition-all">
                  Contact
                </div>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
