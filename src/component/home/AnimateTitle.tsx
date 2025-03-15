"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const words = ["PEOPLE", "DATA", "AI"];
const icons = [
  "/uploads/People Icon.webp",
  "/uploads/data_icon.webp",
  "/uploads/ai_icon.webp",
];

export default function AnimateTitle() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Fade-out + move down
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimate(true); // Fade-in + move up
      }, 600); // Matches transition duration
    }, 2500); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const gradientClasses = [
    "text-white",
    "text-white",
    "bg-gradient-to-r from-[#eba200] via-[#64FFDA] to-[#eba200] text-transparent bg-clip-text animate-gradient",
  ];

  return (
    <div className="h-32 flex items-center justify-start overflow-hidden">
      <div className="flex items-center gap-6 md:gap-8">
        {/* Animated Image */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center overflow-hidden">
          <Image
            key={index} // Forces re-render when index changes
            src={icons[index]}
            alt={`${words[index]} icon`}
            width={400}
            height={400}
            className={`absolute w-full h-full object-contain rounded-lg transition-all duration-800 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          />
        </div>

        {/* Animated Text with Larger Font */}
        <div className="relative h-15 md:h-28 w-100 overflow-hidden">
          <p
            className={`absolute w-full font-furore text-5xl md:text-8xl font-extrabold transition-all duration-800 ${
              gradientClasses[index]
            } ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {words[index]}
          </p>
        </div>
      </div>
    </div>
  );
}
