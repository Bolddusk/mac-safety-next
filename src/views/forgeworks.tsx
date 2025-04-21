"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/component/ui/button";
import ForgeWorksApplicationDrawer from "@/component/drawer/ForgeWorksApplicationDrawer";
import Footer from "@/layout/Footer";

export default function ForgeWorks() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openApplicationDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeApplicationDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="min-h-screen bg-black pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
          {/* Redacted document background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Top secret stamp */}
            <div className="absolute top-10 right-10 rotate-[-20deg] opacity-10 hidden md:block">
              <div className="border-4 border-red-600 rounded px-4 py-2 text-red-600 font-bold text-xl tracking-widest">
                TOP SECRET
              </div>
            </div>

            {/* Redaction lines */}
            <div className="absolute top-1/4 w-full">
              <div className="h-8 bg-black/80 mx-16 my-2 opacity-10"></div>
              <div className="h-4 bg-black/80 mx-24 my-3 opacity-10"></div>
              <div className="h-6 bg-black/80 mx-20 my-2 opacity-10"></div>
            </div>

            <div className="absolute bottom-1/4 w-full">
              <div className="h-6 bg-black/80 mx-24 my-2 opacity-10"></div>
              <div className="h-4 bg-black/80 mx-16 my-3 opacity-10"></div>
              <div className="h-8 bg-black/80 mx-20 my-2 opacity-10"></div>
            </div>

            {/* Classified markings */}
            <div className="absolute bottom-10 left-10 opacity-20 hidden md:block">
              <div className="text-red-600 text-xs font-mono tracking-wider">
                CLASSIFIED // NOFORN // MAC-SAFETY CONTROLLED
              </div>
            </div>

            {/* Document Code */}
            <div className="absolute top-10 left-10 opacity-20 hidden md:block">
              <div className="text-gray-400 text-xs font-mono tracking-wider">
                FORGE-WORKS-FWX-959M-ALPHA
              </div>
            </div>
          </div>

          {/* Blueprint background with DARPA-style tech elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-100">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="darkGrid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="#ffffff08"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <filter id="scanline">
                    <feTurbulence
                      baseFrequency="0.01 0.5"
                      seed="0"
                      type="fractalNoise"
                      result="noise"
                      numOctaves="1"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="2"
                      xChannelSelector="R"
                      yChannelSelector="G"
                    />
                  </filter>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite
                      in="SourceGraphic"
                      in2="blur"
                      operator="over"
                    />
                  </filter>
                </defs>

                {/* Dark background with grid */}
                <rect width="100%" height="100%" fill="#000" />
                <rect width="100%" height="100%" fill="url(#darkGrid)" />

                {/* Hexagonal pattern for DARPA-like tech feel */}
                <pattern
                  id="hexPattern"
                  width="50"
                  height="86.6"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M25,0 L50,43.3 L25,86.6 L0,43.3 Z"
                    fill="none"
                    stroke="#eba20025"
                    strokeWidth="0.5"
                  />
                </pattern>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#hexPattern)"
                  opacity="0.5"
                />

                {/* Scanning effect line */}
                <rect width="100%" height="2" fill="#eba20030" opacity="0.8">
                  <animate
                    attributeName="y"
                    from="-2"
                    to="100%"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </rect>

                {/* HUD Elements */}
                <g opacity="0.3" className="hidden md:block">
                  {/* Corner brackets */}
                  <path
                    d="M 20 20 L 20 40 L 40 40"
                    stroke="#eba200"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M 20 calc(100% - 20) L 20 calc(100% - 40) L 40 calc(100% - 40)"
                    stroke="#eba200"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M calc(100% - 20) 20 L calc(100% - 20) 40 L calc(100% - 40) 40"
                    stroke="#eba200"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M calc(100% - 20) calc(100% - 20) L calc(100% - 20) calc(100% - 40) L calc(100% - 40) calc(100% - 40)"
                    stroke="#eba200"
                    strokeWidth="1"
                    fill="none"
                  />

                  {/* Targeting elements */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="100"
                    stroke="#eba20050"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="150"
                    stroke="#eba20030"
                    strokeWidth="0.5"
                    fill="none"
                    strokeDasharray="5,5"
                  >
                    <animate
                      attributeName="r"
                      values="150;155;150"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Crosshair */}
                  <line
                    x1="50%"
                    y1="calc(50% - 50)"
                    x2="50%"
                    y2="calc(50% - 10)"
                    stroke="#eba20060"
                    strokeWidth="1"
                  />
                  <line
                    x1="50%"
                    y1="calc(50% + 10)"
                    x2="50%"
                    y2="calc(50% + 50)"
                    stroke="#eba20060"
                    strokeWidth="1"
                  />
                  <line
                    x1="calc(50% - 50)"
                    y1="50%"
                    x2="calc(50% - 10)"
                    y2="50%"
                    stroke="#eba20060"
                    strokeWidth="1"
                  />
                  <line
                    x1="calc(50% + 10)"
                    y1="50%"
                    x2="calc(50% + 50)"
                    y2="50%"
                    stroke="#eba20060"
                    strokeWidth="1"
                  />

                  {/* Data points */}
                  <circle cx="25%" cy="25%" r="3" fill="#eba200">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.9;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="75%" cy="25%" r="3" fill="#eba200">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.9;0.3"
                      dur="2.7s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="25%" cy="75%" r="3" fill="#eba200">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.9;0.3"
                      dur="3.3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="75%" cy="75%" r="3" fill="#eba200">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.9;0.3"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Tech indicators */}
                  <g fill="#eba20080" fontFamily="monospace" fontSize="8">
                    <text x="25%" y="22%" textAnchor="middle">
                      SECTOR A1
                    </text>
                    <text x="75%" y="22%" textAnchor="middle">
                      SECTOR B1
                    </text>
                    <text x="25%" y="78%" textAnchor="middle">
                      SECTOR A2
                    </text>
                    <text x="75%" y="78%" textAnchor="middle">
                      SECTOR B2
                    </text>
                  </g>

                  {/* HUD Data */}
                  <g
                    fill="#eba20070"
                    fontFamily="monospace"
                    fontSize="6"
                    opacity="0.8"
                  >
                    <text x="20" y="70">
                      CONFIDENTIAL:BLK-001
                    </text>
                    <text x="20" y="80">
                      CLEARANCE:MAC-FORGE-ALPHA
                    </text>
                    <text x="20" y="90">
                      PROGRAM:DECISION-LAYER
                    </text>
                    <text x="calc(100% - 120)" y="70" textAnchor="end">
                      SUBJECT:FORGE-DEPLOYMENT
                    </text>
                    <text x="calc(100% - 120)" y="80" textAnchor="end">
                      STATUS:OPERATIONAL
                    </text>
                    <text x="calc(100% - 120)" y="90" textAnchor="end">
                      BREACH-PROTOCOL:INACTIVE
                    </text>
                  </g>
                </g>

                {/* Central node */}
                <g>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="60"
                    fill="none"
                    stroke="#eba20040"
                    strokeWidth="1"
                  >
                    <animate
                      attributeName="r"
                      values="55;65;55"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40"
                    fill="none"
                    stroke="#eba20060"
                    strokeWidth="1"
                  >
                    <animate
                      attributeName="r"
                      values="35;45;35"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="20"
                    fill="none"
                    stroke="#eba20080"
                    strokeWidth="1"
                  >
                    <animate
                      attributeName="r"
                      values="18;22;18"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="50%" cy="50%" r="5" fill="#eba200" opacity="0.8">
                    <animate
                      attributeName="opacity"
                      values="0.6;1;0.6"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>

                {/* Security scan lines */}
                <g opacity="0.2">
                  <line
                    x1="0"
                    y1="35%"
                    x2="100%"
                    y2="35%"
                    stroke="#eba200"
                    strokeWidth="1"
                    strokeDasharray="1,3"
                  >
                    <animate
                      attributeName="y1"
                      values="35%;37%;35%"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y2"
                      values="35%;37%;35%"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </line>
                  <line
                    x1="0"
                    y1="65%"
                    x2="100%"
                    y2="65%"
                    stroke="#eba200"
                    strokeWidth="1"
                    strokeDasharray="1,3"
                  >
                    <animate
                      attributeName="y1"
                      values="65%;63%;65%"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y2"
                      values="65%;63%;65%"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </line>
                </g>

                {/* Code snippets */}
                <g
                  fill="#eba20030"
                  fontFamily="monospace"
                  fontSize="5"
                  className="hidden md:block"
                >
                  <text x="10%" y="20%" opacity="0.3">
                    01100110 01101111 01110010 01100111 01100101
                  </text>
                  <text x="15%" y="22%" opacity="0.3">
                    01110111 01101111 01110010 01101011 01110011
                  </text>
                  <text x="70%" y="60%" opacity="0.3">
                    01110011 01111001 01110011 01110100 01100101 01101101
                  </text>
                  <text x="65%" y="62%" opacity="0.3">
                    01100100 01100101 01100011 01101001 01110011 01101001
                    01101111 01101110
                  </text>
                </g>
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 z-10 text-center relative">
            <div className="max-w-4xl mx-auto backdrop-blur-[2px] p-8 rounded-lg border border-zinc-800/30">
              {/* Project Code */}
              <div className="mb-2">
                <span className="text-[#eba200] text-xs font-mono tracking-[0.3em] opacity-70">
                  PROJECT: FWX-959M
                </span>
              </div>

              <h1 className="mb-6 relative mx-auto w-full text-center">
                <img src="/forge-work.png" />
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#eba200] to-transparent"></div>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-6 font-mono tracking-wide">
                <span className="bg-[#eba200]/10 px-2 rounded">
                  Where decision systems are built—not bought.
                </span>
              </p>

              <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                A precision deployment program for operators who need more than
                insight.
                <span className="block mt-2 text-[#eba200]/80">
                  You bring the complexity. We bring the build.
                </span>
              </p>

              <div>
                <Button
                  size="lg"
                  onClick={openApplicationDrawer}
                  className="bg-[#eba200] text-black hover:bg-[#eba200]/90 hover:shadow-[0_0_20px_rgba(235,162,0,0.4)] font-mono uppercase tracking-wider"
                >
                  Apply for ForgeWorks
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="mt-8 text-zinc-500 text-xs font-mono">
                ACCESS LEVEL: RESTRICTED
              </div>
            </div>
          </div>
        </section>

        {/* Current Batch Section */}
        <section className="py-16 bg-black border-y border-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-left">
              Current Batch
            </h2>

            {/* Scrolling logos container */}
            <div className="overflow-hidden relative">
              {/* Gradient overlays for smooth fade effect on edges */}
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10"></div>

              {/* First row of logos - will scroll horizontally */}
              <div className="flex items-center py-8 animate-scroll whitespace-nowrap">
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/1.png"
                    alt="Sevita"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/2.png"
                    alt="Bryan Materials Group"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/3.png"
                    alt="Techint"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/4.png"
                    alt="Heartland Fabrication"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/5.png"
                    alt="Sargent"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/6.png"
                    alt="Maritime Partner"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>

                {/* Duplicated logos for seamless scrolling */}
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/1.png"
                    alt="Sevita"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/2.png"
                    alt="Bryan Materials Group"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/3.png"
                    alt="Techint"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/4.png"
                    alt="Heartland Fabrication"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/5.png"
                    alt="Sargent"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
                <div className="inline-flex justify-center items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-24 mx-5 w-48">
                  <img
                    src="/uploads/6.png"
                    alt="Maritime Partner"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Chain Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              The Operational Intelligence Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Stage 1: MAC Safety */}
              <MissionStage
                number="01"
                title="MAC Safety"
                description="Friction is surfaced in the field."
                delay={0}
                logoSrc="/b (1).jpg"
              />

              {/* Stage 2: NIXN */}
              <MissionStage
                number="02"
                title="NIXN"
                description="Intelligence is integrated at the edge."
                delay={0.2}
                logoSrc="/uploads/IMG_8888_1.webp"
              />

              {/* Stage 3: xOS */}
              <MissionStage
                number="03"
                title="xOS"
                description="Decision systems are deployed at scale."
                delay={0.4}
                logoSrc="/uploads/xos_logo.webp"
              />

              {/* Stage 4: ForgeWorks */}
              <MissionStage
                number="04"
                title="ForgeWorks"
                description="Custom intelligence products are built."
                delay={0.6}
                active
                logoSrc="/FORGE (2).png"
              />
            </div>

            {/* Connection Lines */}
            <div className="hidden md:block relative max-w-6xl mx-auto">
              <div className="absolute top-[-120px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#eba200]/80 via-[#eba200] to-[#eba200]/80"></div>

              {/* Animated Pulses */}
              <div className="absolute top-[-124px] left-[25%] h-[10px] w-[10px] rounded-full bg-[#eba200]" />
              <div className="absolute top-[-124px] left-[50%] h-[10px] w-[10px] rounded-full bg-[#eba200]" />
              <div className="absolute top-[-124px] left-[75%] h-[10px] w-[10px] rounded-full bg-[#eba200]" />
            </div>
          </div>
        </section>

        {/* Embedded Cores Section */}
        <section className="py-20 bg-gradient-to-b from-black to-black/90">
          {/* Navigation/Title Bar - Desktop Only */}
          <div className="hidden md:flex justify-between items-center px-6 py-2 mb-8 border-y border-[#eba200]/20 bg-black text-xs mx-auto max-w-screen-xl">
            <div className="font-mono tracking-wider text-gray-500">
              EMBEDDED CORES
            </div>
            <div className="flex items-center space-x-1 font-mono tracking-wider">
              <span className="text-gray-500">{"{"}</span>
              <span className="text-[#eba200] font-sentex">Forge</span>
              <span className="text-white font-sentex">Works</span>
              <span className="text-gray-500">{"}"}</span>
            </div>
            <div
              className="font-mono tracking-wider text-[#eba200] hover:text-[#eba200]/80 transition-colors cursor-pointer"
              onClick={openApplicationDrawer}
            >
              GET STARTED
            </div>
          </div>

          <div className="container mx-auto px-4">
            {/* FORGE Logo */}
            <div className="relative flex justify-center items-center mb-12">
              <div className="relative w-80 md:w-96 h-auto">
                <img
                  src="/FORGE (1).png"
                  alt="FORGE WORKS Logo"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#eba200]/0 via-[#eba200]/20 to-[#eba200]/0 filter blur-lg opacity-30 -z-10"></div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              We don&apos;t integrate. We embed.
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16">
              ForgeWorks constructs bespoke decision systems using our embedded
              Cores: AIX (Cognition), Summit (Optimization), Atlas (Simulation),
              and xFoundry (Precision Documentation).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* AIX Core Card */}
              <div className="bg-gradient-to-br from-black/80 to-black/40 p-6 rounded-lg border border-[#eba200]/20 backdrop-blur-sm hover:border-[#eba200]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(235,162,0,0.2)]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-6 relative">
                    <img
                      src="/uploads/aix-logo.webp"
                      alt="AIX Logo"
                      className="w-full h-full object-contain relative z-10"
                    />
                    <div className="absolute inset-0 bg-[#eba200] filter blur-xl opacity-20 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AIX</h3>
                  <p className="text-gray-400 mb-4">Cognition</p>
                  <p className="text-sm text-gray-300">
                    Advanced intelligence engine that processes complex
                    operational data, identifies patterns, and delivers
                    contextual insights.
                  </p>
                </div>
              </div>

              {/* Summit Core Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-black/80 to-black/40 p-6 rounded-lg border border-[#eba200]/20 backdrop-blur-sm hover:border-[#eba200]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(235,162,0,0.2)]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-6 relative">
                    <img
                      src="/uploads/summit-logo.webp"
                      alt="Summit Logo"
                      className="w-full h-full object-contain relative z-10"
                    />
                    <div className="absolute inset-0 bg-[#eba200] filter blur-xl opacity-20 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Summit</h3>
                  <p className="text-gray-400 mb-4">Optimization</p>
                  <p className="text-sm text-gray-300">
                    Decision optimization framework that evaluates scenarios and
                    recommends optimal resource allocation and processes.
                  </p>
                </div>
              </motion.div>

              {/* Atlas Core Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-black/80 to-black/40 p-6 rounded-lg border border-[#eba200]/20 backdrop-blur-sm hover:border-[#eba200]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(235,162,0,0.2)]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-6 relative">
                    <img
                      src="/uploads/atlas-logo.webp"
                      alt="Atlas Logo"
                      className="w-full h-full object-contain relative z-10"
                    />
                    <div className="absolute inset-0 bg-[#eba200] filter blur-xl opacity-20 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Atlas</h3>
                  <p className="text-gray-400 mb-4">Simulation</p>
                  <p className="text-sm text-gray-300">
                    Digital twin environment for modeling complex operational
                    scenarios and predicting outcomes with high fidelity.
                  </p>
                </div>
              </motion.div>

              {/* xFoundry Core Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-br from-black/80 to-black/40 p-6 rounded-lg border border-[#eba200]/20 backdrop-blur-sm hover:border-[#eba200]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(235,162,0,0.2)]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-6 relative">
                    <img
                      src="/uploads/xfoundry-logo.webp"
                      alt="xFoundry Logo"
                      className="w-full h-full object-contain relative z-10"
                    />
                    <div className="absolute inset-0 bg-[#eba200] filter blur-xl opacity-20 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    xFoundry
                  </h3>
                  <p className="text-gray-400 mb-4">Precision Documentation</p>
                  <p className="text-sm text-gray-300">
                    Knowledge management system that captures, organizes, and
                    delivers operational intelligence with contextual relevance.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Criteria/Assessment Section */}
        {/* Who We Build With Section - DARPA Style */}
        <section className="py-20 bg-zinc-900 relative overflow-hidden">
          {/* Background grid pattern for technical feel */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

          {/* Technical decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-black via-[#eba200] to-black"></div>
          <div className="absolute top-2 left-0 w-full h-px bg-zinc-700"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-black via-[#eba200] to-black"></div>
          <div className="absolute bottom-2 left-0 w-full h-px bg-zinc-700"></div>

          {/* Navigation/Title Bar - Desktop Only */}
          <div className="hidden md:flex justify-between items-center px-6 py-2 mb-16 border-y border-[#eba200]/30 bg-black/50 backdrop-blur-sm text-xs mx-auto max-w-screen-xl relative z-10">
            <div className="font-mono tracking-wider text-zinc-500">
              <span className="text-[#eba200]">FWX-959M</span> // RESTRICTED
              ACCESS
            </div>
            <div className="flex items-center space-x-1 font-mono tracking-wider">
              <span className="text-zinc-500">{"{"}</span>
              <span className="text-[#eba200] font-sentex">Forge</span>
              <span className="text-white font-sentex">Works</span>
              <span className="text-zinc-500">{"}"}</span>
            </div>
            <div
              className="font-mono tracking-wider text-[#eba200] hover:text-[#eba200]/80 transition-colors cursor-pointer"
              onClick={openApplicationDrawer}
            >
              APPLY FOR ACCESS
            </div>
          </div>

          <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="h-12 w-2 bg-[#eba200]"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-sentex">
                  WHO WE BUILD WITH
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-black/40 border border-zinc-800 rounded px-3 py-1 font-mono text-xs text-zinc-400"
              >
                CLASSIFIED // OPERATIONAL PARTNERS ONLY
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 md:p-8 relative"
              >
                {/* Technical corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#eba200]"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#eba200]"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#eba200]"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#eba200]"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-[#eba200]"></div>
                  <h3 className="text-xl font-mono text-white font-bold tracking-wider">
                    OPERATOR PROFILE
                  </h3>
                </div>

                <ul className="space-y-4 ml-4">
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [01]
                    </span>
                    <span className="text-zinc-200">
                      Your team makes decisions under real operational pressure
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [02]
                    </span>
                    <span className="text-zinc-200">
                      You&apos;ve outgrown dashboards and generic platforms
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [03]
                    </span>
                    <span className="text-zinc-200">
                      Critical workflows still live in spreadsheets or tribal
                      knowledge
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [04]
                    </span>
                    <span className="text-zinc-200">
                      You experience delays, rework, or incidents that
                      "should&apos;ve been caught"
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [05]
                    </span>
                    <span className="text-zinc-200">
                      You need a system, not a service
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [06]
                    </span>
                    <span className="text-zinc-200">
                      You want a model that adapts to the edge—not a rigid
                      template
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [07]
                    </span>
                    <span className="text-zinc-200">
                      You understand that better software doesn&apos;t mean more
                      features—it means better decisions
                    </span>
                  </motion.li>
                </ul>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 md:p-8 relative"
              >
                {/* Technical corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#eba200]"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#eba200]"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#eba200]"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#eba200]"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-[#eba200]"></div>
                  <h3 className="text-xl font-mono text-white font-bold tracking-wider">
                    ASSESSMENT PROTOCOL
                  </h3>
                </div>

                <ul className="space-y-4 ml-4">
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [01]
                    </span>
                    <span className="text-zinc-200">
                      The complexity of your risk and execution structure
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [02]
                    </span>
                    <span className="text-zinc-200">
                      The velocity at which decisions must be made
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [03]
                    </span>
                    <span className="text-zinc-200">
                      The ROI potential of embedding intelligence into your
                      operations
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [04]
                    </span>
                    <span className="text-zinc-200">
                      Leadership alignment and readiness to adopt decision-layer
                      systems
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [05]
                    </span>
                    <span className="text-zinc-200">
                      Data availability or the need to deploy MAC for signal
                      acquisition
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [06]
                    </span>
                    <span className="text-zinc-200">
                      How your environment interacts with our Cores: AIX,
                      Summit, Atlas, xFoundry
                    </span>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#eba200] font-mono text-lg mt-0.5">
                      [07]
                    </span>
                    <span className="text-zinc-200">
                      Whether ForgeWorks will materially improve your
                      organizational resilience
                    </span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 flex justify-center"
            >
              <Button
                className="px-8 py-3 text-sm bg-black hover:bg-zinc-900 text-[#eba200] font-mono font-bold transition-all border-2 border-[#eba200]/50 rounded-none relative group"
                onClick={openApplicationDrawer}
              >
                <div className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[#eba200] transform transition-all group-hover:w-4 group-hover:h-4"></div>
                <div className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-[#eba200] transform transition-all group-hover:w-4 group-hover:h-4"></div>
                <div className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-[#eba200] transform transition-all group-hover:w-4 group-hover:h-4"></div>
                <div className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[#eba200] transform transition-all group-hover:w-4 group-hover:h-4"></div>
                <span className="flex items-center gap-3">
                  <span>REQUEST ACCESS</span>
                  <span className="text-xs opacity-80 tracking-wider bg-[#eba200]/10 px-2 py-1">
                    FWX-959M
                  </span>
                </span>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="apply" className="py-24 bg-black">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
            >
              If the mission is clear—we build.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <Button
                size="lg"
                onClick={openApplicationDrawer}
                className="bg-[#eba200] text-black hover:bg-[#eba200]/90 hover:shadow-[0_0_20px_rgba(235,162,0,0.5)] px-10 py-6 text-lg"
              >
                Apply for ForgeWorks
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm text-gray-400 text-center mt-8"
            >
              Each intake is mission-limited. We assess fit, complexity, and
              operational return.
            </motion.p>
          </div>
        </section>

        {/* Closing Mission Block */}
        <section className="py-32 bg-zinc-900 relative overflow-hidden">
          {/* Blueprint/schematic background overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="blueprint-grid"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 100 0 L 0 0 0 100"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="0.5"
                  />
                </pattern>
                <pattern
                  id="circles"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="20"
                    fill="none"
                    stroke="#eba200"
                    strokeWidth="0.5"
                  />
                </pattern>
                <pattern
                  id="technical-lines"
                  width="200"
                  height="200"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0"
                    y1="100"
                    x2="200"
                    y2="100"
                    stroke="#eba200"
                    strokeWidth="0.5"
                    strokeDasharray="5,10"
                  />
                  <line
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="200"
                    stroke="#eba200"
                    strokeWidth="0.5"
                    strokeDasharray="5,10"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
              <rect
                width="100%"
                height="100%"
                fill="url(#circles)"
                opacity="0.1"
              />
              <rect
                width="100%"
                height="100%"
                fill="url(#technical-lines)"
                opacity="0.05"
              />

              {/* Industrial texture elements */}
              <g opacity="0.1">
                <rect x="10%" y="10%" width="80%" height="1" fill="#eba200" />
                <rect x="10%" y="90%" width="80%" height="1" fill="#eba200" />
                <rect x="10%" y="10%" width="1" height="80%" fill="#eba200" />
                <rect x="90%" y="10%" width="1" height="80%" fill="#eba200" />
              </g>
            </svg>
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center space-y-10"
            >
              <p className="text-lg md:text-xl text-white leading-relaxed">
                In the early days of American industry, the forge was where raw
                material met intent—
                <br />
                where heat, pressure, and discipline transformed iron into
                infrastructure.
              </p>

              <p className="text-lg md:text-xl text-white leading-relaxed">
                Today, ForgeWorks carries that same spirit forward.
                <br />
                <span className="font-mono italic">
                  Not with steel—but with systems.
                </span>
                <br />
                <span className="font-mono italic">
                  Not with fire—but with intelligence.
                </span>
              </p>

              <p className="text-lg md:text-xl text-white leading-relaxed">
                We embed decision systems inside the institutions that build,
                power, and protect this country.
                <br />
                We do it with speed, precision, and unrelenting clarity.
                <br />
                We do it to generate Alpha—not for speculation, but for
                sovereignty.
              </p>

              <p className="text-lg md:text-xl text-white leading-relaxed">
                <span className="font-mono">
                  This isn&apos;t software. It&apos;s statecraft for operators.
                </span>
                <br />
                This is ForgeWorks.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                And if you&apos;re building what matters—
                <br />
                <span className="text-[#eba200] font-bold">
                  We&apos;re already building with you.
                </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Application Drawer */}
        <ForgeWorksApplicationDrawer
          isOpen={isDrawerOpen}
          onClose={closeApplicationDrawer}
        />
      </div>
      <Footer />
    </>
  );
}

// Mission Stage Component
function MissionStage({
  number,
  title,
  description,
  delay,
  active,
  logoSrc,
}: {
  number: string;
  title: string;
  description: string;
  delay: number;
  active?: boolean;
  logoSrc?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative p-6 rounded-lg ${
        active
          ? "bg-[#eba200]/10 border border-[#eba200]/30"
          : "bg-black/20 border border-white/10"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        {logoSrc && (
          <div className="mb-4 relative w-16 h-16 flex items-center justify-center">
            <img
              src={logoSrc}
              alt={`${title} logo`}
              className="w-full h-full object-contain"
            />
            {active && (
              <div className="absolute inset-0 bg-[#eba200]/20 filter blur-lg rounded-full"></div>
            )}
          </div>
        )}
        <div
          className={`text-sm font-mono mb-3 ${
            active ? "text-[#eba200]" : "text-gray-400"
          }`}
        >
          {number}
        </div>
        <h3
          className={`text-xl font-bold mb-2 ${
            active ? "text-[#eba200]" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
