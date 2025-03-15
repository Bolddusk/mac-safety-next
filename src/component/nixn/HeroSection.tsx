import React from "react";
import { DemoScheduleModal } from "./DemoScheduleModal";
import { TrialSetupModal } from "./TrialSetupModal";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-4 relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black -z-10"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 -z-20"
      >
        <source src="/uploads/command-center.mp4" type="video/mp4" />
      </video> */}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-6 md:space-y-8 p-4 md:p-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
              <Image
                src="/uploads/IMG_8888_1.webp"
                alt="NIXN Logo"
                width={800} // Adjust width as needed
                height={800} // Adjust height as needed
                className="w-full h-full object-contain relative z-10 rounded-2xl"
              />
              <div className="absolute inset-0 bg-[#eba200] filter blur-2xl opacity-30 animate-pulse rounded-2xl"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              Risk Isn&apos;t a Guess. It&apos;s a Number.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              NIXN quantifies risk in real-time, transforming safety from a
              compliance function into a competitive advantage. Predict
              exposure, price risk accurately, and drive smarter
              decisions—before incidents happen.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 w-full max-w-[800px] mx-auto">
              <div className="w-full sm:w-[240px]">
                <DemoScheduleModal />
              </div>
              <div className="w-full sm:w-[240px] border rounded-sm cursor-pointer p-[0.5rem] border-white text-white hover:bg-[#eba200] hover:border-[#eba200] hover:text-black hover:shadow-[0_0_15px_rgba(235,162,0,0.5)] transition-all">
                <Link
                  href="#features" // Smooth scrolling works with `id`
                  scroll={true} // Prevents automatic scrolling behavior
                >
                  How It Works
                </Link>
              </div>

              <div className="w-full sm:w-[240px]">
                <TrialSetupModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
