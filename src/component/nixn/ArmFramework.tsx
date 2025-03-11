import React from "react";
import { CheckCircle2, Brain, Zap, Activity } from "lucide-react";


const ArmFramework = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Action Risk Mitigator Framework
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive approach to task risk rating - Understanding the
            relationship between actions, their associated risks, and control
            measures
          </p>
        </div>

        {/* Framework Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3mb-4">
              <Activity className="w-6 h-6 text-[#eba200]" />
              <span className="text-[#eba200] font-semibold">
                01. NIXN DATA CONNECTION
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Over 10,000 Industry Unique ARM Combos
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                • Fully Customizable to include more granular or industry
                specific information
              </li>
              <li>• Easy-to-configure and add in the field</li>
              <li>• Multi-modal (Structured or Unstructured)</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-[#eba200]" />
              <span className="text-[#eba200] font-semibold">
                02. DATA TRANSFORMATION
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Flexible architecture with bundled engines
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• No-code transformation</li>
              <li>• Treating Data like code</li>
              <li>• Full provenance through the Job Spec paradigm</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-[#eba200]" />
              <span className="text-[#eba200] font-semibold">
                03. PIPELINE ORCHESTRATION
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Build system that is engine-agnostic
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                • Intelligent refreshing / state-tracking across all pipelines
              </li>
              <li>• Seamless integration with NIXN&apos;s risk monitoring</li>
            </ul>
          </div>
        </div>

        {/* ARM Framework Visualization */}
        <div className="relative w-full mb-16 bg-black/20 rounded-lg backdrop-blur-sm border border-[#eba200]/20 p-8">
          <div className="max-w-4xl mx-auto">
            <svg viewBox="0 0 800 400" className="w-full">
              <defs>
                <linearGradient
                  id="glow-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#eba200" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#eba200" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#eba200" stopOpacity="0.2" />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Grid */}
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#ffffff10"
                  strokeWidth="1"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Process Flow */}
              <g transform="translate(0, 50)">
                {/* Task Identification */}
                <g transform="translate(100, 50)">
                  <rect
                    x="-60"
                    y="-30"
                    width="120"
                    height="60"
                    rx="8"
                    fill="black"
                    stroke="#eba200"
                    strokeWidth="2"
                    filter="url(#glow)"
                  />
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    className="fill-white text-sm font-semibold"
                  >
                    Task
                  </text>
                  <text
                    x="0"
                    y="20"
                    textAnchor="middle"
                    className="fill-white text-sm font-semibold"
                  >
                    Identification
                  </text>
                </g>

                {/* Arrow 1 */}
                <path
                  d="M 170 50 L 270 50"
                  stroke="#eba200"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                />

                {/* Hazard Assessment */}
                <g transform="translate(300, 50)">
                  <rect
                    x="-60"
                    y="-30"
                    width="120"
                    height="60"
                    rx="8"
                    fill="black"
                    stroke="#eba200"
                    strokeWidth="2"
                    filter="url(#glow)"
                  />
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    className="fill-white text-sm font-semibold"
                  >
                    Hazard
                  </text>
                  <text
                    x="0"
                    y="20"
                    textAnchor="middle"
                    className="fill-white text-sm font-semibold"
                  >
                    Assessment
                  </text>
                </g>

                {/* Arrow 2 */}
                <path
                  d="M 370 50 L 470 50"
                  stroke="#eba200"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                />

                {/* Mitigator Evaluation */}
                <g transform="translate(500, 50)">
                  <rect
                    x="-60"
                    y="-30"
                    width="120"
                    height="60"
                    rx="8"
                    fill="black"
                    stroke="#eba200"
                    strokeWidth="2"
                    filter="url(#glow)"
                  />
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    className="fill-white text-sm font-semibold"
                  >
                    Mitigator
                  </text>
                  <text
                    x="0"
                    y="20"
                    textAnchor="middle"
                    className="fill-white text-sm font-semibold"
                  >
                    Evaluation
                  </text>
                </g>

                {/* Arrow 3 */}
                <path
                  d="M 570 50 L 670 50"
                  stroke="#eba200"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                />

                {/* Risk Score */}
                <g transform="translate(700, 50)">
                  <rect
                    x="-60"
                    y="-30"
                    width="120"
                    height="60"
                    rx="8"
                    fill="black"
                    stroke="#eba200"
                    strokeWidth="2"
                    filter="url(#glow)"
                  />
                  <text
                    x="0"
                    y="-5"
                    textAnchor="middle"
                    className="fill-white text-sm font-semibold"
                  >
                    Real-time
                  </text>
                  <text
                    x="0"
                    y="15"
                    textAnchor="middle"
                    className="fill-white text-sm font-semibold"
                  >
                    Risk Score
                  </text>
                </g>

                {/* Description Texts */}
                <g
                  className="text-[#eba200] text-xs"
                  transform="translate(0, 150)"
                >
                  <text x="100" y="0" textAnchor="middle">
                    <tspan
                      x="100"
                      dy="0"
                      className="fill-[#eba200] font-semibold"
                    >
                      Identifies
                    </tspan>
                    <tspan x="100" dy="20" className="fill-gray-400">
                      Active work tasks
                    </tspan>
                    <tspan x="100" dy="20" className="fill-gray-400">
                      and operations
                    </tspan>
                  </text>

                  <text x="300" y="0" textAnchor="middle">
                    <tspan
                      x="300"
                      dy="0"
                      className="fill-[#eba200] font-semibold"
                    >
                      Analyzes
                    </tspan>
                    <tspan x="300" dy="20" className="fill-gray-400">
                      Potential hazards
                    </tspan>
                    <tspan x="300" dy="20" className="fill-gray-400">
                      and exposures
                    </tspan>
                  </text>

                  <text x="500" y="0" textAnchor="middle">
                    <tspan
                      x="500"
                      dy="0"
                      className="fill-[#eba200] font-semibold"
                    >
                      Assesses
                    </tspan>
                    <tspan x="500" dy="20" className="fill-gray-400">
                      Control measures
                    </tspan>
                    <tspan x="500" dy="20" className="fill-gray-400">
                      and effectiveness
                    </tspan>
                  </text>

                  <text x="700" y="0" textAnchor="middle">
                    <tspan
                      x="700"
                      dy="0"
                      className="fill-[#eba200] font-semibold"
                    >
                      Calculates
                    </tspan>
                    <tspan x="700" dy="20" className="fill-gray-400">
                      Dynamic risk level
                    </tspan>
                    <tspan x="700" dy="20" className="fill-gray-400">
                      and exposure
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Framework Description */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              How It Works
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#eba200] flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <p className="text-gray-300">
                  Actions are categorized and scored based on complexity,
                  frequency, and historical risk factors.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#eba200] flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <p className="text-gray-300">
                  Risks are quantified using ML models trained on millions of
                  real-world data points.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#eba200] flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <p className="text-gray-300">
                  Mitigators are dynamically suggested based on the specific
                  risk profile and available controls.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Key Benefits
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#eba200] mt-1" />
                <p className="text-gray-300">
                  Standardized risk assessment across all operations and
                  locations
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#eba200] mt-1" />
                <p className="text-gray-300">
                  Data-driven insights for continuous safety improvement
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#eba200] mt-1" />
                <p className="text-gray-300">
                  Real-time adaptation to changing conditions and emerging risks
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#eba200] mt-1" />
                <p className="text-gray-300">
                  Predictive analytics for proactive risk management
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArmFramework;
