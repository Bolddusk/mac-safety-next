"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const AnimateTitle = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["People", "Data", "AI"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const icons = [
    "/uploads/People Icon.webp",
    "/uploads/data_icon.webp",
    "/uploads/ai_icon.webp",
  ];
  const gradientClasses = [
    "text-white",
    "text-white",
    "bg-gradient-to-r from-[#eba200] via-[#64FFDA] to-[#eba200] text-transparent bg-clip-text animate-gradient",
  ];

  return (
    <div className="h-32 flex items-center justify-start overflow-hidden py-4">
      <div className="flex items-center gap-6 md:gap-8">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
          <Image
            src={icons[currentWord]}
            alt={`${words[currentWord]} icon`}
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <span
          className={`text-5xl sm:text-7xl md:text-8xl font-bold font-furore ${gradientClasses[currentWord]}`}
          style={{
            textShadow:
              currentWord === 2
                ? "0 2px 20px rgba(100,255,218,0.3)"
                : "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          {words[currentWord]}
        </span>
      </div>
    </div>
  );
};

export default AnimateTitle;
