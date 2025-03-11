import React from "react";
import {
  CheckCircle2,
  AlertTriangle,
  TrendingDown,
  DollarSign,
  PieChart,
} from "lucide-react";
import ChartSection from "./ChartSection";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6">
            Safety Metrics Are Broken.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl">
            Traditional safety reporting relies on historical incidents, lagging
            indicators, and generic compliance checklists—failing to capture the
            real risk exposure happening today.
          </p>
        </div>

        {/* Comparison Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Traditional Safety */}
          <div className="bg-white/5 p-4 md:p-6 rounded-lg border border-white/10">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
              Traditional Safety
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
              <li>• Historical incident analysis only</li>
              <li>• Manual data collection and reporting</li>
              <li>• Generic risk assessments</li>
              <li>• Reactive approach to safety</li>
              <li>• Limited predictive capabilities</li>
            </ul>
          </div>

          {/* NIXN Risk Intelligence */}
          <div className="bg-[#eba200]/10 p-4 md:p-6 rounded-lg border border-[#eba200]/20">
            <h3 className="text-lg md:text-xl font-semibold text-[#eba200] mb-4">
              NIXN Risk Intelligence
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
              <li>• Real-time risk quantification</li>
              <li>• Automated data collection and analysis</li>
              <li>• Task-specific risk assessment</li>
              <li>• Proactive risk prevention</li>
              <li>• Advanced predictive modeling</li>
            </ul>
          </div>
        </div>

        {/* How NIXN Changes the Equation */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6">
            NIXN changes the equation by:
          </h3>
          <div className="space-y-4">
            {[
              "Quantifying task-based risk exposure in real-time",
              "Predicting high-impact incidents before they happen",
              "Giving insurers, executives, and contractors the data they need to price risk accurately",
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#eba200] flex-shrink-0 mt-1" />
                <span className="text-gray-300">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart Section - Mobile Optimized */}
        <ChartSection />

        {/* Stats Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              icon: (
                <TrendingDown className="w-5 h-5 md:w-6 md:h-6 text-[#eba200]" />
              ),
              stat: "74%",
              title: "Decrease in Claim Frequency",
              description:
                "NIXN reduces incident occurrences by enhancing field decision-making and predictive analytics.",
            },
            {
              icon: (
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-[#eba200]" />
              ),
              stat: "98%",
              title: "Decrease in Claim Severity",
              description:
                "With smarter interventions and earlier risk detection, NIXN prevents small issues from turning into major losses.",
            },
            {
              icon: (
                <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-[#eba200]" />
              ),
              stat: "$171K",
              title: "Direct Cost Savings",
              description:
                "Clients see immediate financial benefits by reducing losses and optimizing their risk profile.",
            },
            {
              icon: (
                <PieChart className="w-5 h-5 md:w-6 md:h-6 text-[#eba200]" />
              ),
              stat: "88%",
              title: "Underwriter Confidence Score",
              description:
                "Insurers and risk managers trust NIXN's data, leading to better coverage terms and lower premiums.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 p-4 md:p-6 rounded-lg border border-white/10"
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                {item.icon}
                <span className="text-[#eba200] font-semibold text-lg md:text-xl">
                  {item.stat}
                </span>
              </div>
              <h4 className="text-white font-semibold mb-2 text-sm md:text-base">
                {item.title}
              </h4>
              <p className="text-gray-300 text-xs md:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
