
"use client"

import { SiLinkedin, SiGithub } from "react-icons/si";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0d] border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center cursor-pointer mb-6 group">
                <div className="relative p-2 md:p-3 rounded-lg md:rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-xl">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  <img
                    src="/uploads/mac-inc-logo-white.png"
                    alt="MAC INC Logo"
                    className="h-5 md:h-8 w-auto object-contain relative z-10"
                  />
                </div>
              </div>
            </Link>
            <p className="text-gray-400 font-alliance mb-6 max-w-sm">
              Integrating human expertise, mission-critical software, and
              AI-driven intelligence to transform safety into a competitive
              advantage.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/mac-safety-consultants-inc-"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/MAC-Intel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
              >
                <SiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-alliance">
              Products
            </h3>
            <div className="space-y-4">
              <Link href="/nixn">
                <div className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer font-alliance">
                  NIXN
                </div>
              </Link>
              <Link href="/xos">
                <div className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer font-alliance">
                  xOS
                </div>
              </Link>
              <Link href="/fieldkit">
                <div className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer font-alliance">
                  FIELDKIT
                </div>
              </Link>
              <Link href="/forgeworks">
                <div className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer font-alliance">
                  ForgeWorks
                </div>
              </Link>
              <Link href="/alpha">
                <div className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer font-alliance">
                  Alpha
                </div>
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-alliance">
              Company
            </h3>
            <div className="space-y-4">
              <Link href="/offerings">
                <div className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer font-alliance">
                  Offerings
                </div>
              </Link>
              <Link href="/industries">
                <div className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer font-alliance">
                  Industries
                </div>
              </Link>
              <Link href="/impact-studies">
                <div className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer font-alliance">
                  Impact Studies
                </div>
              </Link>
              <a
                href="https://recruiting.paylocity.com/recruiting/jobs/All/8c011b1d-4712-473e-9117-e7b9376d11a1/MAC-SAFETY-INC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer block font-alliance"
              >
                Careers
              </a>
              <a
                href="https://medium.com/mac-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer block font-alliance"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-alliance">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:info@macsafety.us"
                className="flex items-center gap-2 text-gray-400 hover:text-[#eba200] transition-colors font-alliance"
              >
                <Mail className="w-4 h-4" />
                info@macsafety.us
              </a>
              <a
                href="tel:7245134491"
                className="flex items-center gap-2 text-gray-400 hover:text-[#eba200] transition-colors font-alliance"
              >
                <Phone className="w-4 h-4" />
                724.513.4491
              </a>
              <div className="pt-4">
                <Link href="/contact">
                  <div className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer font-alliance">
                    Contact Form
                  </div>
                </Link>
                <Link href="/privacy">
                  <div className="text-gray-400 hover:text-[#eba200] transition-colors cursor-pointer font-alliance mt-4">
                    Privacy Policy
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm font-alliance">
            <div>Copyright © 2026 MAC Safety, Inc. All Rights Reserved.</div>
            <div className="flex items-center gap-6">
              <Link href="/privacy">
                <span className="hover:text-[#eba200] transition-colors cursor-pointer">
                  Privacy
                </span>
              </Link>
              <button
                onClick={() => {
                  /* Cookie preferences handler */
                }}
                className="hover:text-[#eba200] transition-colors"
              >
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
