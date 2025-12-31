"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/component/ui/button";
import { Sheet, SheetContent, SheetFooter } from "@/component/ui/sheet";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/component/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "Alpha", href: "/alpha" },
  { label: "NIXN", href: "/nixn" },
  { label: "xOS", href: "/xos" },
  { label: "ForgeWorks", href: "/forgeworks" },
];

const productLinks = [
  { label: "NIXN", href: "/nixn" },
  { label: "xOS", href: "/xos" },
  { label: "ForgeWorks", href: "/forgeworks" },
  { label: "FIELDKIT", href: "/fieldkit" },
];

const secondaryLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Impact Studies", href: "/impact-studies" },
  { label: "Offerings", href: "/offerings" },
];

const industries = [
  { title: "Airline", href: "/industries/airline" },
  { title: "Auto", href: "/industries/auto" },
  { title: "Chemical Processing", href: "/industries/chemical" },
  { title: "Construction", href: "/industries/construction" },
  { title: "Data Centers", href: "/industries/data-centers" },
  { title: "Defense & Aerospace", href: "/industries/defense" },
  { title: "Healthcare", href: "/industries/healthcare" },
  { title: "Insurance", href: "/industries/insurance" },
  { title: "Life Science", href: "/industries/life-science" },
  { title: "Manufacturing", href: "/industries/manufacturing" },
  { title: "Maritime", href: "/industries/maritime" },
  { title: "Mining", href: "/industries/mining" },
  { title: "Oil & Gas", href: "/industries/oil-gas" },
  { title: "Power Generation", href: "/industries/utilities" },
  { title: "Rail", href: "/industries/rail" },
  { title: "Renewable Energy", href: "/industries/renewable" },
  { title: "Steel", href: "/industries/steel" },
  { title: "Telecommunications", href: "/industries/telecom" },
  { title: "Warehousing", href: "/industries/warehousing" },
];

export default function FloatingHeader() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50",
        "w-[calc(100%-2rem)] max-w-5xl",
        "rounded-2xl border border-white/10",
        "bg-[#0b0b0d]/80 backdrop-blur-xl shadow-2xl",
        "transition-all duration-300",
        isScrolled && "bg-[#0b0b0d]/95 border-white/20"
      )}
    >
      <nav className="flex items-center justify-between px-3 py-2 md:px-4 md:py-2.5">
        {/* Logo */}
        <Link href="/">
          <div className="group relative p-1.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/10 cursor-pointer">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            <img
              src="/uploads/mac-inc-logo-white.png"
              alt="MAC INC Logo"
              className="h-5 md:h-6 w-auto object-contain relative z-10"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <button
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm font-alliance font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-[#eba200] bg-[#eba200]/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </button>
            </Link>
          ))}

          {/* Industries Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-alliance font-medium transition-all duration-200",
                  pathname.startsWith("/industries")
                    ? "text-[#eba200] bg-[#eba200]/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                Industries
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-56 max-h-80 overflow-y-auto bg-[#16171a]/95 backdrop-blur-xl border-white/10"
            >
              <Link href="/industries">
                <DropdownMenuItem className="font-alliance text-white hover:text-[#eba200] hover:bg-white/5 cursor-pointer">
                  All Industries
                </DropdownMenuItem>
              </Link>
              {industries.map((industry) => (
                <Link key={industry.href} href={industry.href}>
                  <DropdownMenuItem className="font-alliance text-gray-300 hover:text-[#eba200] hover:bg-white/5 cursor-pointer">
                    {industry.title}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right Side - Login + Mobile Menu */}
        <div className="flex items-center gap-2">
          <a
            href="https://nixn.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <Button
              size="sm"
              className="bg-white text-black hover:bg-gray-100 font-alliance font-semibold rounded-full px-4"
            >
              Log In
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setOpen(!open)}
              className="lg:hidden h-9 w-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
            >
              <Menu className="h-4 w-4 text-white" />
            </Button>
            <SheetContent
              className="bg-[#0b0b0d]/95 backdrop-blur-xl border-white/10 p-0 flex flex-col"
              side="right"
              title="Mobile navigation"
              showClose={false}
            >
              {/* Mobile Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <img
                      src="/uploads/mac-inc-logo-white.png"
                      alt="MAC INC Logo"
                      className="h-6 w-auto object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>
                <div className="h-px bg-white/10" />
              </div>

              {/* Mobile Navigation Links - Palantir Style */}
              <div className="flex-1 overflow-y-auto py-6 px-6">
                {/* Navigation Label */}
                <div className="text-gray-500 text-xs font-alliance tracking-widest uppercase mb-6">
                  Navigation
                </div>

                {/* Generate Alpha Section */}
                <Link href="/alpha" onClick={() => setOpen(false)}>
                  <div
                    className={cn(
                      "block text-xl font-alliance font-medium mb-4 transition-colors",
                      pathname === "/alpha"
                        ? "text-[#eba200]"
                        : "text-white hover:text-gray-300"
                    )}
                  >
                    Generate Alpha
                  </div>
                </Link>

                {/* Product Sub-items with arrows */}
                <div className="space-y-3 mb-8">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      <div
                        className={cn(
                          "flex items-center gap-2 text-lg font-alliance font-medium transition-colors",
                          pathname === link.href
                            ? "text-[#eba200]"
                            : "text-white hover:text-gray-300"
                        )}
                      >
                        <span className="text-gray-500">↳</span>
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Secondary Links */}
                <div className="space-y-4">
                  {secondaryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      <div
                        className={cn(
                          "block text-lg font-alliance font-medium transition-colors",
                          pathname === link.href ||
                            pathname.startsWith(link.href)
                            ? "text-[#eba200]"
                            : "text-white hover:text-gray-300"
                        )}
                      >
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Footer - Contact */}
              <SheetFooter className="p-6 border-t border-white/10">
                <div className="w-full space-y-4">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    <Button className="w-full bg-white text-black hover:bg-gray-100 font-alliance font-semibold rounded-full py-6">
                      Contact
                    </Button>
                  </Link>
                  <a
                    href="https://nixn.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/5 font-alliance font-medium rounded-full py-6"
                    >
                      Log In to Platform
                    </Button>
                  </a>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
