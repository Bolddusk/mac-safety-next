"use client"
 
import { motion } from "framer-motion";
import { 
  Plane, Car, HardHat, Server, Heart, ScrollText, TestTube, Cog, 
  Flame, Train, Construction, Warehouse, Radio, Zap, Wind, Anchor, Mountain, Rocket
} from "lucide-react";
import Link from "next/link";
import Testimonial from "./Testimonial";

const industries = [
  { title: "Airline", icon: Plane },
  { title: "Auto", icon: Car },
  { title: "Construction", icon: HardHat },
  { title: "Data Centers", icon: Server },
  { title: "Healthcare", icon: Heart },
  { title: "Insurance", icon: ScrollText },
  { title: "Life Science", icon: TestTube },
  { title: "Manufacturing", icon: Cog },
  { title: "Oil & Gas", icon: Flame },
  { title: "Rail", icon: Train },
  { title: "Steel", icon: Construction },
  { title: "Chemical Processing", icon: TestTube },
  { title: "Defense & Aerospace", icon: Rocket },
  { title: "Maritime", icon: Anchor },
  { title: "Mining", icon: Mountain },
  { title: "Power Generation", icon: Zap },
  { title: "Renewable Energy", icon: Wind },
  { title: "Telecommunications", icon: Radio },
  { title: "Warehousing", icon: Warehouse },
];

export default function Solutions() {
  return (
    <>
      {/* Industries Section - Charcoal surface */}
      <section className="py-20 md:py-28 bg-[#16171a]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#eba200] text-sm uppercase tracking-widest mb-4 font-alliance"
            >
              Industries We Serve
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-alliance"
            >
              Expertise Across Sectors
            </motion.h2>
          </div>

          {/* Industries Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
              >
                <Link href={`/industries#${industry.title.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}>
                  <div 
                    className="group flex flex-col items-center justify-center p-4 md:p-6 bg-[#1f2024] rounded-xl border border-gray-800 hover:border-[#eba200]/50 transition-all duration-300 cursor-pointer"
                    data-testid={`card-industry-${industry.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <industry.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-500 group-hover:text-[#eba200] transition-colors mb-2 md:mb-3" />
                    <span className="text-xs md:text-sm text-gray-400 group-hover:text-white font-alliance text-center transition-colors">
                      {industry.title}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/industries">
              <button className="px-8 py-4 border-2 border-white/30 text-white font-alliance font-semibold rounded-full hover:border-white hover:bg-white/5 transition-all duration-300">
                View All Industries
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Testimonial />
    </>
  );
}
