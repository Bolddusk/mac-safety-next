import Image from "next/image";
import Link from "next/link";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Logo Section - Left Side */}
          <div className="md:w-1/4">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Image
                  src="/uploads/Untitled design (11).webp"
                  alt="MAC Brand Logo"
                  width={500} // Adjust width as needed
                  height={500} // Adjust height as needed
                  className="h-48 w-auto object-contain md:origin-center md:rotate-0 origin-left -rotate-90 translate-y-16 md:translate-y-0"
                />
              </div>
            </Link>
          </div>

          {/* Navigation Columns - Right Side */}
          <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Solutions */}
            <div>
              <h3 className="text-[#64FFDA] font-semibold mb-4">Solutions</h3>
              <div className="space-y-3">
                <Link href="/industries">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Consulting
                  </div>
                </Link>
                <Link href="/nixn">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    NIXN™
                  </div>
                </Link>
                <Link href="/xos">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    xOS
                  </div>
                </Link>
                <Link href="/forgeworks">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    ForgeWorks
                  </div>
                </Link>
              </div>
            </div>

            {/* Industries - Split into two columns */}
            <div>
              <h3 className="text-[#64FFDA] font-semibold mb-4">
                Industries I
              </h3>
              <div className="space-y-3">
                <Link href="/industries/airline">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Airline
                  </div>
                </Link>
                <Link href="/industries/auto">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Auto
                  </div>
                </Link>
                <Link href="/industries/chemical">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Chemical Processing
                  </div>
                </Link>
                <Link href="/industries/construction">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Construction
                  </div>
                </Link>
                <Link href="/industries/data-centers">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Data Centers
                  </div>
                </Link>
                <Link href="/industries/defense">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Defense & Aerospace
                  </div>
                </Link>
                <Link href="/industries/healthcare">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Healthcare
                  </div>
                </Link>
                <Link href="/industries/insurance">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Insurance
                  </div>
                </Link>
                <Link href="/industries/life-science">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Life Science
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[#64FFDA] font-semibold mb-4">
                Industries II
              </h3>
              <div className="space-y-3">
                <Link href="/industries/manufacturing">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Manufacturing
                  </div>
                </Link>
                <Link href="/industries/maritime">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Maritime
                  </div>
                </Link>
                <Link href="/industries/mining">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Mining
                  </div>
                </Link>
                <Link href="/industries/oil-gas">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Oil & Gas
                  </div>
                </Link>
                <Link href="/industries/power">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Power Generation
                  </div>
                </Link>
                <Link href="/industries/rail">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Rail
                  </div>
                </Link>
                <Link href="/industries/renewable">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Renewable Energy
                  </div>
                </Link>
                <Link href="/industries/steel">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Steel
                  </div>
                </Link>
                <Link href="/industries/telecom">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Telecommunications
                  </div>
                </Link>
                <Link href="/industries/warehouse">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Warehousing
                  </div>
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[#64FFDA] font-semibold mb-4">Company</h3>
              <div className="space-y-3">
                <Link href="/offerings">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Offerings
                  </div>
                </Link>
                <a
                  href="https://recruiting.paylocity.com/recruiting/jobs/All/8c011b1d-4712-473e-9117-e7b9376d11a1/MAC-SAFETY-INC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer block"
                >
                  Careers
                </a>
                <Link href="/contact">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Contact
                  </div>
                </Link>
                <Link href="/privacy">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Privacy
                  </div>
                </Link>
              </div>
            </div>

            {/* Resources & Social */}
            <div>
              <h3 className="text-[#64FFDA] font-semibold mb-4">Resources</h3>
              <div className="space-y-3">
                <a
                  href="https://medium.com/mac-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Blog
                </a>
                <Link href="/impact-studies">
                  <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Impact Studies
                  </div>
                </Link>

                <div className="pt-6">
                  <h3 className="text-[#64FFDA] font-semibold mb-4">Connect</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/company/mac-safety-consultants-inc-"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <SiLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/MAC-Intel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <SiGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div>info@macsafety.us</div>
            <div>724.513.4491</div>
            <div className="flex items-center gap-4">
              <button className="hover:text-white transition-colors">
                Update Cookie Preferences
              </button>
              <div>Copyright © 2025 MAC Safety, Inc.</div>
              <div>All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
