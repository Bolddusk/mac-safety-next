"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  { word: "People", delay: 0.6 },
  { word: "Software", delay: 0.8 },
  { word: "Systems", delay: 1.0 },
  { word: "Hardware", delay: 1.2 },
];

export default function Hero() {
  return (
    <>
      {/* Hero Section - Matte Black with Video */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-[#0b0b0d] pt-32 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/uploads/Smaller xOS NIXN notifications.mp4"
            type="video/mp4"
          />
        </video>

        {/* Matte black translucent overlay - creates seamless blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d]/80 via-[#0b0b0d]/70 to-[#0b0b0d]" />

        {/* Additional vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0b0b0d_70%)]" />

        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Eyebrow badge - glass styling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#eba200]" />
              <span className="text-gray-400 font-alliance text-xs md:text-sm">
                Execution Infrastructure for High-Risk Work
              </span>
            </motion.div>

            {/* Main headline */}
            <h1 className="font-alliance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                Close the <span className="text-[#eba200]">Gap</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block text-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2"
              >
                between planning and execution.
              </motion.span>
            </h1>

            {/* Supporting copy with animated pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 mb-10"
            >
              <p className="text-base md:text-xl text-gray-400 font-alliance mb-6">
                MAC helps companies bridge this gap with:
              </p>

              {/* Animated pillars - single line on mobile */}
              <div className="flex justify-center gap-2 md:gap-4">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.word}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: pillar.delay,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="px-3 py-1.5 md:px-6 md:py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#eba200]/50 hover:bg-[#eba200]/5 shadow-lg transition-all duration-300 cursor-default"
                  >
                    <span className="text-white font-alliance font-medium text-xs md:text-base whitespace-nowrap">
                      {pillar.word}
                    </span>
                    {index < pillars.length - 1 && (
                      <span className="hidden" aria-hidden="true">
                        ,
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons - Glass styling, side by side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-row gap-3 md:gap-4 justify-center items-center"
            >
              <Link href="/contact">
                <button
                  className="group px-5 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-alliance font-semibold rounded-full hover:bg-white hover:text-black shadow-lg transition-all duration-300 flex items-center gap-2"
                  data-testid="button-get-started"
                >
                  <span className="text-sm md:text-base">Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/offerings">
                <button
                  className="px-5 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-alliance font-semibold rounded-full hover:border-white/30 hover:bg-white/10 shadow-lg transition-all duration-300"
                  data-testid="button-learn-more"
                >
                  <span className="text-sm md:text-base">Learn More</span>
                </button>
              </Link>
            </motion.div>

            {/* Trust indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="mt-12 text-sm text-gray-500 font-alliance"
            >
              Trusted by Fortune 500 companies across 19+ industries
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos Section - Slightly lighter dark */}
      <section className="py-16 bg-[#1f2024] border-y border-gray-800">
        <div className="container mx-auto px-6 md:px-8">
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-10 font-alliance">
            Trusted Partners
          </p>

          {/* Scrolling logos container */}
          <div className="relative overflow-hidden">
            <div className="animate-scroll">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center shrink-0">
                  {[
                    { name: "General Motors", logo: "/uploads/GM.png" },
                    { name: "Hitachi", logo: "/uploads/hitachi_logo.jpeg" },
                    {
                      name: "Marathon Petroleum",
                      logo: "/uploads/marathon_petroleum_company_logo.jpeg",
                    },
                    { name: "MBTA", logo: "/uploads/mbta_logo.jpeg" },
                    {
                      name: "Pinnacol",
                      logo: "/uploads/pinnacol_assurance_logo.jpeg",
                    },
                    {
                      name: "Range Resources",
                      logo: "/uploads/range_resources_logo.jpeg",
                    },
                    { name: "Tenaris", logo: "/uploads/tenaris.jpeg" },
                    { name: "Williams", logo: "/uploads/williams.jpeg" },
                    { name: "WTW", logo: "/uploads/wtwcorporate_logo.jpeg" },
                  ].map((partner) => (
                    <div
                      key={`${setIndex}-${partner.name}`}
                      className="flex items-center justify-center shrink-0 mx-8 md:mx-12"
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-10 md:h-12 w-auto max-w-[120px] object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Matte Black */}
      <section className="py-12 md:py-16 bg-[#0b0b0d] min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <p className="text-[#eba200] text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6 font-alliance">
                Why Execution Matters
              </p>
            </motion.div>

            {/* Narrative blocks with staggered animation */}
            <div className="space-y-8 md:space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-6 md:pl-8 border-l-2 border-gray-800"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-[#eba200]" />
                <p className="text-xl md:text-2xl lg:text-3xl text-white font-alliance leading-relaxed">
                  Most organizations don&apos;t fail because they lack safety
                  policies, plans, or intent.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-alliance leading-relaxed mt-2">
                  They fail because those intentions break down where work
                  actually happens.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative pl-6 md:pl-8 border-l-2 border-gray-800"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-white/20" />
                <p className="text-lg md:text-xl text-gray-400 font-alliance leading-relaxed">
                  MAC focuses on execution because safety is not a document, a
                  training, or a metric —
                  <span className="text-white">
                    {" "}
                    it is the outcome of how work is performed in real
                    conditions.
                  </span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative pl-6 md:pl-8 border-l-2 border-[#eba200]/30"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-[#eba200]" />
                <p className="text-lg md:text-xl text-white font-alliance leading-relaxed">
                  By embedding people, software, and systems directly into
                  operations, we ensure that
                  <span className="text-[#eba200]">
                    {" "}
                    intent survives contact with reality.
                  </span>
                </p>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 pt-16 border-t border-gray-800"
            >
              {[
                { value: "500+", label: "Consultants Deployed" },
                { value: "90%", label: "Reduction in Violations" },
                { value: "$2M+", label: "Avg. Cost Savings" },
                { value: "5,000+", label: "Sites Monitored" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#eba200] mb-1 font-alliance">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm font-alliance">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
