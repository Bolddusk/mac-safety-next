import Image from "next/image";
import { HUDOverlay } from "../ui/hud-overlay";
import { Quote } from "lucide-react";

const partners = [
  {
    name: "General Motors",
    logo: "/uploads/GM.png",
  },
  {
    name: "Hitachi",
    logo: "/uploads/hitachi_logo.jpeg",
  },
  {
    name: "Marathon Petroleum Corporation",
    logo: "/uploads/marathon_petroleum_company_logo.jpeg",
  },
  {
    name: "MBTA",
    logo: "/uploads/mbta_logo.jpeg",
  },
  {
    name: "Meccon Industries",
    logo: "/uploads/meccon_industries_logo.jpeg",
  },
  {
    name: "Pinnacol Assurance",
    logo: "/uploads/pinnacol_assurance_logo.jpeg",
  },
  {
    name: "Range Resources",
    logo: "/uploads/range_resources_logo.jpeg",
  },
  {
    name: "Tenaris",
    logo: "/uploads/tenaris.jpeg",
  },
  {
    name: "Williams",
    logo: "/uploads/williams.jpeg",
  },
  {
    name: "WTW Corporate",
    logo: "/uploads/wtwcorporate_logo.jpeg",
  },
];

export default function Solutions() {
  return (
    <section className="bg-[#0D1117]">
      {/* Partners Section */}
      <div id="partners" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 sm:mb-12">Our Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {partners.map((partner, index) => (
              <div
                key={`home-partner-${index}`}
                className="flex items-center justify-center p-4 sm:p-6"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={100} // Adjust width as needed
                  height={64} // Adjust height as needed (16 * 4)
                  className="max-h-16 sm:max-h-20 w-auto object-contain filter hover:brightness-110 opacity-80 hover:opacity-100 transition-all duration-300"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-12 sm:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div>
            <HUDOverlay className="relative max-w-4xl mx-auto">
              <div className="absolute -top-6 left-8">
                <Quote className="w-12 h-12 text-[#eba200] opacity-50" />
              </div>
              <div className="pt-8 px-6 sm:px-10">
                <blockquote className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  MAC Safety Inc. has been instrumental in supporting General
                  Motors&apos; capital programs, particularly in the
                  construction of new battery facilities. By providing
                  specialized personnel, leveraging comprehensive data
                  analytics, and deploying advanced software solutions, MAC
                  Safety ensures that GM&apos;s projects are executed
                  efficiently and safely. Their integrated approach has become
                  an essential component of GM&apos;s daily operations,
                  contributing significantly to the successful expansion of
                  GM&apos;s electric vehicle infrastructure.
                </blockquote>
                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                  <img
                    src="/uploads/GM.png"
                    alt="General Motors logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <div className="text-[#eba200] font-semibold">
                      General Motors Capital Programs Leader
                    </div>
                    <div className="text-gray-400 text-sm">General Motors</div>
                  </div>
                </div>
              </div>
            </HUDOverlay>
          </div>
        </div>
      </div>
    </section>
  );
}
