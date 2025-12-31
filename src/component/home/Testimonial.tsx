import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "MAC Safety Inc. has been instrumental in supporting General Motors' capital programs, particularly in the construction of new battery facilities. By providing specialized personnel, leveraging comprehensive data analytics, and deploying advanced software solutions, MAC Safety ensures that GM's projects are executed efficiently and safely.",
    author: "Capital Programs Leader",
    role: "Safety & Construction",
    company: "General Motors",
    logo: "/uploads/GM.png",
  },
  {
    quote:
      "The NIXN platform transformed how we approach risk management. Real-time visibility into our safety metrics has reduced incident rates by 40% across all facilities.",
    author: "VP of Operations",
    role: "Enterprise Safety",
    company: "Marathon Petroleum",
    logo: "/uploads/marathon_petroleum_company_logo.jpeg",
  },
  {
    quote:
      "MAC's embedded approach means their team truly understands our operations. They don't just consult—they execute alongside us in the field.",
    author: "Director of HSE",
    role: "Health, Safety & Environment",
    company: "Williams Companies",
    logo: "/uploads/williams.jpeg",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const numberX = useTransform(x, [-200, 200], [-15, 15]);
  const numberY = useTransform(y, [-200, 200], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  useEffect(() => {
    const timer = setInterval(goNext, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-[#0b0b0d] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto"
          onMouseMove={handleMouseMove}
        >
          {/* Oversized index number */}
          <motion.div
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none leading-none tracking-tighter font-alliance"
            style={{ x: numberX, y: numberY }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main content */}
          <div className="relative flex flex-col md:flex-row">
            {/* Left column - vertical text */}
            <div className="hidden md:flex flex-col items-center justify-center pr-12 border-r border-white/10">
              <motion.span
                className="text-xs font-alliance text-gray-500 tracking-widest uppercase"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Testimonials
              </motion.span>

              {/* Vertical progress line */}
              <div className="relative h-24 w-px bg-white/10 mt-8">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-[#eba200] origin-top"
                  animate={{
                    height: `${
                      ((activeIndex + 1) / testimonials.length) * 100
                    }%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Center - main content */}
            <div className="flex-1 md:pl-12 py-8 md:py-12">
              {/* Company badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 md:mb-8"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-alliance text-gray-400 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-[#eba200]" />
                    {current.company}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Quote with word reveal */}
              <div className="relative mb-8 md:mb-12 min-h-[180px] md:min-h-[160px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed tracking-tight font-alliance"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <span className="text-[#eba200] text-4xl leading-none">
                      &quot;
                    </span>
                    {current.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.25em]"
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.4,
                              delay: i * 0.02,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                          exit: {
                            opacity: 0,
                            y: -8,
                            transition: { duration: 0.15, delay: i * 0.01 },
                          },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                    <span className="text-[#eba200] text-4xl leading-none">
                      &quot;
                    </span>
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    {/* Company logo */}
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={current.logo}
                        alt={`${current.company} logo`}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium text-white font-alliance">
                        {current.author}
                      </p>
                      <p className="text-sm text-gray-500 font-alliance">
                        {current.role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  {/* Progress dots - mobile */}
                  <div className="flex items-center gap-2 mr-4 md:hidden">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === activeIndex ? "bg-[#eba200] w-6" : "bg-white/20"
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={goPrev}
                    className="group w-11 h-11 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.button>

                  <motion.button
                    onClick={goNext}
                    className="group w-11 h-11 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom ticker */}
          <div className="absolute -bottom-12 left-0 right-0 overflow-hidden opacity-[0.03] pointer-events-none hidden md:block">
            <motion.div
              className="flex whitespace-nowrap text-5xl font-bold tracking-tight font-alliance"
              animate={{ x: [0, -800] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <span key={i} className="mx-6 text-white">
                  {testimonials.map((t) => t.company).join(" • ")} •
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
