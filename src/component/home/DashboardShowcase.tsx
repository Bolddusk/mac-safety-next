"use client"

import { motion } from "framer-motion";

export default function DashboardShowcase() {
  return (
    <section className="relative pt-8 md:pt-12 pb-0 bg-[#0b0b0d] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <span className="text-[#eba200] text-xs md:text-sm font-medium tracking-widest uppercase font-alliance mb-2 md:mb-4 block">
            Operational Intelligence
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-alliance text-white mb-3 md:mb-4">
            Performance Trends at a Glance
          </h2>
          <p className="text-gray-400 font-alliance text-sm md:text-lg max-w-2xl mx-auto px-2">
            Analyze performance trends across your organization with live
            manpower curves, activity streams, and distribution analytics.
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full"
      >
        <img
          src="/uploads/xos-dashboard-new.png"
          alt="xOS Safety Dashboard showing performance trends and analytics"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
