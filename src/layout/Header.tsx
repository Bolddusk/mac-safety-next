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
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Alpha", href: "/alpha" },
  { label: "NIXN", href: "/nixn" },
  { label: "xOS", href: "/xos" },
  { label: "ForgeWorks", href: "/forgeworks" },
];

const mobileNavLinks = [
  { label: "Alpha", href: "/alpha" },
  { label: "NIXN", href: "/nixn" },
  { label: "xOS", href: "/xos" },
  { label: "ForgeWorks", href: "/forgeworks" },
  { label: "FIELDKIT", href: "/fieldkit" },
  { label: "Contact", href: "/contact" },
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
              // showClose={false}
              side="right"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <Link href="/" onClick={() => setOpen(false)}>
                  <div className="p-1.5 rounded-xl bg-white/5 border border-white/10">
                    <img
                      src="/uploads/mac-inc-logo-white.png"
                      alt="MAC INC Logo"
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="space-y-1">
                  {mobileNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      <div
                        className={cn(
                          "block px-4 py-3 rounded-xl text-lg font-alliance font-medium transition-all duration-200",
                          pathname === link.href
                            ? "text-[#eba200] bg-[#eba200]/10"
                            : "text-white hover:text-[#eba200] hover:bg-white/5"
                        )}
                      >
                        {link.label}
                      </div>
                    </Link>
                  ))}
                  <Link href="/industries" onClick={() => setOpen(false)}>
                    <div
                      className={cn(
                        "block px-4 py-3 rounded-xl text-lg font-alliance font-medium transition-all duration-200",
                        pathname.startsWith("/industries")
                          ? "text-[#eba200] bg-[#eba200]/10"
                          : "text-white hover:text-[#eba200] hover:bg-white/5"
                      )}
                    >
                      Industries
                    </div>
                  </Link>
                </div>
              </div>

              {/* Mobile Footer */}
              <SheetFooter className="p-4 border-t border-white/10 bg-[#16171a]/50">
                <a
                  href="https://nixn.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-white text-black hover:bg-gray-100 font-alliance font-semibold rounded-full py-6">
                    Log In to Platform
                  </Button>
                </a>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

// "use client"

// import { Button } from "@/component/ui/button";
// import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/component/ui/dialog";
// import { Menu, X } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuGroup,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
// } from "@/component/ui/dropdown-menu";
// import { useState, useEffect } from "react";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
// import Link from "next/link";

// const industries = [
//   { title: "Airline", href: "/industries#airline" },
//   { title: "Auto", href: "/industries#auto" },
//   { title: "Chemical Processing", href: "/industries#chemical" },
//   { title: "Construction", href: "/industries#construction" },
//   { title: "Data Centers", href: "/industries#data-centers" },
//   { title: "Defense & Aerospace", href: "/industries#defense" },
//   { title: "Healthcare", href: "/industries#healthcare" },
//   { title: "Insurance", href: "/industries#insurance" },
//   { title: "Life Science", href: "/industries#life-science" },
//   { title: "Manufacturing", href: "/industries#manufacturing" },
//   { title: "Maritime", href: "/industries#maritime" },
//   { title: "Mining", href: "/industries#mining" },
//   { title: "Oil & Gas", href: "/industries#oil-gas" },
//   { title: "Power Generation", href: "/industries#power" },
//   { title: "Rail", href: "/industries#rail" },
//   { title: "Renewable Energy", href: "/industries#renewable" },
//   { title: "Steel", href: "/industries#steel" },
//   { title: "Telecommunications", href: "/industries#telecom" },
//   { title: "Warehousing", href: "/industries#warehouse" }
// ];

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   // const [location] = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const headerBg = isScrolled
//     ? 'bg-[#0b0b0d]/95 backdrop-blur-md border-b border-gray-800'
//     : 'bg-transparent';

//   return (
//     <>
//       <header className={`fixed w-full top-0 z-40 transition-all duration-300 ${headerBg}`}>
//         <div className="container mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
//           <Link href="/">
//             <div className="flex items-center cursor-pointer" data-testid="link-home">
//               <img
//                 src="/attached_assets/Artboard_5@4x_1766942838453.png"
//                 alt="MAC INC Logo"
//                 className="h-12 w-auto object-contain"
//               />
//             </div>
//           </Link>

//           <nav className="hidden md:flex items-center gap-8">
//             <Link href="/alpha">
//               <div className="text-white hover:text-gray-300 transition-all cursor-pointer font-alliance font-medium" data-testid="link-alpha">
//                 Alpha
//               </div>
//             </Link>
//             <Link href="/nixn">
//               <div className="text-white hover:text-gray-300 transition-all cursor-pointer font-alliance font-medium" data-testid="link-nixn">
//                 NIXN
//               </div>
//             </Link>
//             <Link href="/xos">
//               <div className="text-white hover:text-gray-300 transition-all cursor-pointer font-alliance font-medium" data-testid="link-xos">
//                 xOS
//               </div>
//             </Link>
//             <Link href="/forgeworks">
//               <div className="text-white hover:text-gray-300 transition-all cursor-pointer font-alliance font-medium" data-testid="link-forgeworks">
//                 ForgeWorks
//               </div>
//             </Link>
//             <DropdownMenu>
//               <DropdownMenuTrigger className="text-white hover:text-gray-300 transition-all cursor-pointer font-alliance font-medium data-[state=open]:text-[#eba200]">
//                 Industries
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="bg-[#16171a] border-gray-800 shadow-lg max-h-[70vh] overflow-y-auto">
//                 {industries.map((industry) => (
//                   <DropdownMenuItem key={industry.title} asChild>
//                     <Link href={industry.href}>
//                       <div className="text-gray-300 hover:text-white cursor-pointer w-full px-2 py-1.5 font-alliance">
//                         {industry.title}
//                       </div>
//                     </Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </nav>

//           <div className="flex items-center gap-4">
//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button
//                   className="hidden md:inline-flex bg-white text-black hover:bg-gray-100 font-alliance font-semibold rounded-full px-6"
//                   data-testid="button-login"
//                 >
//                   Log In
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="bg-[#16171a] border-gray-800 shadow-xl sm:max-w-[425px] p-0">
//                 <VisuallyHidden>
//                   <DialogTitle>Select Your Platform</DialogTitle>
//                   <DialogDescription>Choose which platform to log into</DialogDescription>
//                 </VisuallyHidden>
//                 <div className="p-6">
//                   <h2 className="text-xl font-bold mb-6 text-white text-center font-alliance">Select Your Platform</h2>
//                   <div className="space-y-4">
//                     <a
//                       href="https://nixn.app"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group block w-full"
//                     >
//                       <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-[#1f2024] p-4 transition-all hover:border-[#eba200]">
//                         <div className="flex items-center gap-4">
//                           <div className="h-12 w-12 rounded-xl bg-[#eba200]/10 p-2 flex items-center justify-center">
//                             <img src="/uploads/IMG_8888 (1).png" alt="NIXN Logo" className="w-8 h-8 object-contain" />
//                           </div>
//                           <div>
//                             <h3 className="font-semibold text-white font-alliance">NIXN Platform</h3>
//                             <p className="text-sm text-gray-400 font-alliance">Operational Safety Intelligence</p>
//                           </div>
//                         </div>
//                       </div>
//                     </a>

//                     <a
//                       href="https://nixnos.app"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group block w-full"
//                     >
//                       <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-[#1f2024] p-4 transition-all hover:border-[#64FFDA]">
//                         <div className="flex items-center gap-4">
//                           <div className="h-12 w-12 rounded-xl bg-[#64FFDA]/10 p-2 flex items-center justify-center">
//                             <img src="/uploads/xos logo.png" alt="xOS Logo" className="w-8 h-8 object-contain" />
//                           </div>
//                           <div>
//                             <h3 className="font-semibold text-white font-alliance">xOS Platform</h3>
//                             <p className="text-sm text-gray-400 font-alliance">Enterprise Risk Intelligence</p>
//                           </div>
//                         </div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>

//             {/* Desktop Menu Button */}
//             <div className="hidden md:block">
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="ghost" size="icon" className="text-white hover:text-gray-300 hover:bg-white/5">
//                     <Menu className="h-5 w-5" />
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end" className="w-56 bg-[#16171a] border-gray-800 shadow-lg">
//                   <DropdownMenuLabel className="text-[#eba200] font-alliance">Company</DropdownMenuLabel>
//                   <DropdownMenuGroup>
//                     <DropdownMenuItem asChild>
//                       <Link href="/offerings">
//                         <div className="text-gray-300 hover:text-white cursor-pointer w-full font-alliance">Offerings</div>
//                       </Link>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem asChild>
//                       <Link href="/fieldkit">
//                         <div className="text-gray-300 hover:text-white cursor-pointer w-full font-alliance">FIELDKIT</div>
//                       </Link>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem asChild>
//                       <a
//                         href="https://recruiting.paylocity.com/recruiting/jobs/All/8c011b1d-4712-473e-9117-e7b9376d11a1/MAC-SAFETY-INC"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-300 hover:text-white cursor-pointer w-full font-alliance"
//                       >
//                         Careers
//                       </a>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem asChild>
//                       <Link href="/contact">
//                         <div className="text-gray-300 hover:text-white cursor-pointer w-full font-alliance">Contact</div>
//                       </Link>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem asChild>
//                       <Link href="/privacy">
//                         <div className="text-gray-300 hover:text-white cursor-pointer w-full font-alliance">Privacy</div>
//                       </Link>
//                     </DropdownMenuItem>
//                   </DropdownMenuGroup>

//                   <DropdownMenuSeparator className="bg-gray-800" />

//                   <DropdownMenuLabel className="text-[#eba200] font-alliance">Resources</DropdownMenuLabel>
//                   <DropdownMenuGroup>
//                     <DropdownMenuItem asChild>
//                       <a
//                         href="https://medium.com/mac-blog"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-300 hover:text-white cursor-pointer w-full font-alliance"
//                       >
//                         Blog
//                       </a>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem asChild>
//                       <Link href="/impact-studies">
//                         <div className="text-gray-300 hover:text-white cursor-pointer w-full font-alliance">Impact Studies</div>
//                       </Link>
//                     </DropdownMenuItem>
//                   </DropdownMenuGroup>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
//               data-testid="button-mobile-menu"
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-[#0b0b0d] md:hidden">
//           <div className="flex flex-col h-full">
//             <div className="flex justify-between items-center p-6 border-b border-gray-800">
//               <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//                 <img
//                   src="/attached_assets/Artboard_5@4x_1766942838453.png"
//                   alt="MAC INC Logo"
//                   className="h-10 w-auto object-contain"
//                 />
//               </Link>
//               <button
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="p-2 text-white hover:text-gray-300 transition-colors"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
//               <Link href="/alpha" onClick={() => setIsMobileMenuOpen(false)}>
//                 <div className="text-2xl text-white hover:text-gray-300 transition-all font-alliance font-medium">Alpha</div>
//               </Link>
//               <Link href="/nixn" onClick={() => setIsMobileMenuOpen(false)}>
//                 <div className="text-2xl text-white hover:text-gray-300 transition-all font-alliance font-medium">NIXN</div>
//               </Link>
//               <Link href="/xos" onClick={() => setIsMobileMenuOpen(false)}>
//                 <div className="text-2xl text-white hover:text-gray-300 transition-all font-alliance font-medium">xOS</div>
//               </Link>
//               <Link href="/forgeworks" onClick={() => setIsMobileMenuOpen(false)}>
//                 <div className="text-2xl text-white hover:text-gray-300 transition-all font-alliance font-medium">ForgeWorks</div>
//               </Link>
//               <Link href="/fieldkit" onClick={() => setIsMobileMenuOpen(false)}>
//                 <div className="text-2xl text-white hover:text-gray-300 transition-all font-alliance font-medium">FIELDKIT</div>
//               </Link>
//               <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)}>
//                 <div className="text-2xl text-white hover:text-gray-300 transition-all font-alliance font-medium">Industries</div>
//               </Link>
//               <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
//                 <div className="text-2xl text-white hover:text-gray-300 transition-all font-alliance font-medium">Contact</div>
//               </Link>
//             </nav>
//             <div className="p-6 border-t border-gray-800">
//               <a
//                 href="https://nixn.app"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block w-full"
//               >
//                 <Button className="w-full bg-white text-black hover:bg-gray-100 font-alliance font-semibold rounded-full py-6">
//                   Log In to Platform
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
