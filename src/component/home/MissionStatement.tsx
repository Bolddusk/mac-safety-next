import { motion } from "framer-motion";

export default function MissionStatement() {
  return (
    <section className="bg-[#0D1117] py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-3xl leading-relaxed text-gray-300">
            We fuse advanced AI-driven software with a proven cadre of risk and safety experts to deliver a complete intelligence platform for leaders at every level. Our integrated approach ensures you have both the real-time technology and the specialized insight required to drive high-impact decisions—whether you&apos;re in the boardroom or on the front lines—ultimately safeguarding teams, reducing risks, and maximizing operational excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}