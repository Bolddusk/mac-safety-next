"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimateHeroTitle = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["People", "Data", "AI"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const icons = [
    "/uploads/People Icon.jpg",
    "/uploads/Data Icon.png",
    "/uploads/AI icon.png",
  ];
  const gradientClasses = [
    "text-white",
    "text-white",
    "bg-gradient-to-r from-[#eba200] via-[#64FFDA] to-[#eba200] text-transparent bg-clip-text animate-gradient",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold space-y-8 md:space-y-12">
        <div className="text-white">
          Intelligence at Every Level
        </div>
        <div className="h-32 flex items-center justify-start overflow-hidden py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center gap-6 md:gap-8"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center"
              >
                <img
                  src={icons[currentWord]}
                  alt={`${words[currentWord]} icon`}
                  className="w-full h-full object-contain rounded-lg drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
              <motion.span
                className={`text-5xl sm:text-7xl md:text-8xl font-bold font-furore ${gradientClasses[currentWord]}`}
                style={{
                  textShadow:
                    currentWord === 2
                      ? "0 2px 20px rgba(100,255,218,0.3)"
                      : "0 2px 20px rgba(0,0,0,0.5)",
                }}
              >
                {words[currentWord]}
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl text-white/90 mt-4"
        >
          Working as One
        </motion.div>
      </h1>
    </motion.div>
  );
};

export default AnimateHeroTitle;
