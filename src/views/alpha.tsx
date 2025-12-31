"use client"

import ContactSection from "@/component/home/ContactSection";
import { motion } from "framer-motion";
import { Globe } from "@/component/ui/Globe";

export default function Alpha() {
  return (
    <div className="pt-20 min-h-screen bg-[#0b0b0d]">
      {/* Hero Section with Globe */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left content */}
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[#eba200]" />
                <span className="text-gray-400 font-alliance text-xs md:text-sm">
                  Decision Intelligence
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-alliance mb-6"
              >
                <span className="text-[#eba200]">Generate</span> Alpha
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-400 font-alliance mb-4"
              >
                Deploy <span className="text-white">Intelligence</span>, Not
                Interfaces
              </motion.p>
            </div>

            {/* Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[280px] md:h-[400px] w-full max-w-md md:max-w-xl"
            >
              <div className="absolute inset-0 bg-gradient-radial from-[#eba200]/10 via-transparent to-transparent opacity-50" />
              <Globe className="absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 scale-125 md:scale-150" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Opening Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white font-alliance mb-6">
                Decision Points, Not Data
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-alliance leading-relaxed mb-6">
                For years, companies were told that data is the new oil. That if
                you collect enough of it, insight will follow. It didn&apos;t.
                Instead, businesses got dashboards, latency, and confusion—while
                the real problems stayed unsolved.
              </p>
              <p className="text-lg text-white font-alliance font-medium">
                At MAC, we reject that myth outright.
              </p>
            </motion.div>

            {/* Timeline Narrative */}
            <div className="space-y-8 md:space-y-10 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-6 md:pl-8 border-l-2 border-gray-800"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-white/20" />
                <p className="text-base md:text-lg text-gray-400 font-alliance leading-relaxed">
                  Data isn&apos;t oil. It&apos;s a byproduct, inert until context,
                  modeling, and decision logic are applied. Most companies are
                  drowning in it, and still don&apos;t know what to do next.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative pl-6 md:pl-8 border-l-2 border-[#eba200]/30"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-[#eba200]" />
                <p className="text-base md:text-lg text-white font-alliance leading-relaxed">
                  Alpha—the kind that moves operations, reduces loss, and wins
                  market share—isn&apos;t in your database.
                  <span className="text-[#eba200]">
                    {" "}
                    It&apos;s in your decision points.
                  </span>
                </p>
              </motion.div>
            </div>

            {/* Blind Spots Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white font-alliance mb-8">
                We Locate the Blind Spots Where Decisions Fail
              </h2>

              <p className="text-base md:text-lg text-gray-400 font-alliance mb-8">
                Every business is filled with hidden decision points. They&apos;re
                not always in your process map—but they&apos;re always in your cost
                structure.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "A supervisor guessing whether a crew is ready.",
                  "A dispatcher assigning a route without understanding the real risk.",
                  "A foreman choosing speed over redundancy, with no model of consequence.",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="pl-4 border-l-2 border-[#eba200]"
                  >
                    <p className="text-base md:text-lg text-gray-300 font-alliance italic">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-base md:text-lg text-white font-alliance font-medium">
                  These aren&apos;t data problems.
                </p>
                <p className="text-base md:text-lg text-[#eba200] font-alliance font-medium">
                  These are judgment under pressure problems.
                </p>
              </div>
            </motion.div>

            {/* Alpha Equation Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10 mb-16"
            >
              <p className="text-sm md:text-base text-[#eba200] font-alliance uppercase tracking-widest mb-6">
                The Alpha Equation
              </p>

              <div className="text-xl md:text-3xl font-bold text-white text-center my-8 font-alliance">
                Alpha = Uncertainty × Consequence × Decision Lift
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    term: "Uncertainty",
                    desc: "How little is known when the decision is made",
                  },
                  {
                    term: "Consequence",
                    desc: "What happens if it goes wrong",
                  },
                  {
                    term: "Decision Lift",
                    desc: "How much better MAC enables that choice to be made",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <p className="text-[#eba200] font-alliance font-semibold mb-2">
                      {item.term}
                    </p>
                    <p className="text-gray-400 font-alliance text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Not Post Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
            >
              {[
                { text: "Not post-incident", highlight: false },
                { text: "Not post-mortem", highlight: false },
                { text: "On the edge", highlight: true },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-6 rounded-xl text-center ${
                    item.highlight
                      ? "bg-[#eba200]/10 border border-[#eba200]/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <p
                    className={`text-lg md:text-xl font-bold font-alliance ${
                      item.highlight ? "text-[#eba200]" : "text-white"
                    }`}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Enterprise Stack Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white font-alliance mb-10">
                The New Enterprise Stack Is Embedded Execution
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                  { not: "Not dashboards.", is: "Decision engines." },
                  { not: "Not more data.", is: "Better judgment." },
                  {
                    not: "Not centralized IT.",
                    is: "Deployed intelligence at the edge.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#eba200]/30 transition-all duration-300"
                  >
                    <p className="text-lg md:text-xl font-bold text-gray-500 font-alliance mb-2">
                      {item.not}
                    </p>
                    <p className="text-lg md:text-xl font-bold text-white font-alliance">
                      {item.is}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* How MAC Generates Alpha */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-gradient-to-r from-[#eba200]/10 to-transparent border border-[#eba200]/20 p-6 md:p-10 mb-16"
            >
              <p className="text-base md:text-lg text-white font-alliance mb-3">
                This is how MAC generates Alpha:
              </p>
              <p className="text-lg md:text-xl text-[#eba200] font-alliance font-medium">
                Not by observing from the outside, but by building from
                within—embedded teams, tailored models, and decision-first
                architecture.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white font-alliance mb-6 leading-tight">
                Your Business Doesn&apos;t Need More Software.
                <br />
                <span className="text-[#eba200]">
                  It Needs Better Decisions.
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-400 font-alliance max-w-3xl mx-auto">
                Let&apos;s build decision-layer infrastructure where your risk
                lives—on the floor, in the field, and at the edge of execution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection title="Get Started with MAC in Minutes" />
    </div>
  );
}
