import React from "react";
import {
  AlertTriangle,
  TrendingUp,
  LightbulbIcon,
  AlertCircle,
  TrendingDown,
  DollarSign,
  PieChart,
} from "lucide-react";

const ImapactSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Proven Impact: NIXN Delivers Real Results
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            NIXN isn&apos;t just a tool—it&apos;s a transformation engine. Our platform
            has delivered measurable improvements across industries, reducing
            claims, increasing risk mitigation, and driving significant cost
            savings.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <LightbulbIcon className="w-6 h-6 text-[#eba200]" />
              <span className="text-[#eba200] font-semibold">+14%</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Risk Mitigation</h3>
            <p className="text-gray-300 text-sm">
              NIXN enables organizations to proactively eliminate hazards before
              they escalate into costly incidents.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-[#eba200]" />
              <span className="text-[#eba200] font-semibold">10.9K</span>
            </div>
            <h3 className="text-white font-semibold mb-2">
              Hazards Identified
            </h3>
            <p className="text-gray-300 text-sm">
              Real-time data capture ensures that potential risks are surfaced
              and acted on immediately.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#eba200]" />
              <span className="text-[#eba200] font-semibold">+275%</span>
            </div>
            <h3 className="text-white font-semibold mb-2">
              Near Miss Reporting
            </h3>
            <p className="text-gray-300 text-sm">
              A massive shift towards proactive risk management, strengthening
              workforce engagement and accountability.
            </p>
          </div>
        </div>

        {/* Year-Over-Year Impact */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Year-Over-Year Impact
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6 text-[#eba200]" />
                <span className="text-[#eba200] font-semibold">74%</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Decrease in Claim Frequency
              </h4>
              <p className="text-gray-300 text-sm">
                NIXN reduces incident occurrences by enhancing field
                decision-making and predictive analytics.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-[#eba200]" />
                <span className="text-[#eba200] font-semibold">98%</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Decrease in Claim Severity
              </h4>
              <p className="text-gray-300 text-sm">
                With smarter interventions and earlier risk detection, NIXN
                prevents small issues from turning into major losses.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-[#eba200]" />
                <span className="text-[#eba200] font-semibold">$171K</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Direct Cost Savings
              </h4>
              <p className="text-gray-300 text-sm">
                Clients see immediate financial benefits by reducing losses and
                optimizing their risk profile.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <PieChart className="w-6 h-6 text-[#eba200]" />
                <span className="text-[#eba200] font-semibold">88%</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Underwriter Confidence Score
              </h4>
              <p className="text-gray-300 text-sm">
                Insurers and risk managers trust NIXN&apos;s data, leading to better
                coverage terms and lower premiums.
              </p>
            </div>
          </div>
        </div>

        {/* Five-Year Industry Results */}
        <div className="bg-[#eba200]/10 p-8 rounded-lg border border-[#eba200]/20">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Five-Year Industry-Wide Results
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#eba200] mb-2">50%</div>
              <div className="text-white font-semibold">
                Decrease in Claim Frequency
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#eba200] mb-2">97%</div>
              <div className="text-white font-semibold">
                Decrease in Claim Severity
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#eba200] mb-2">94%</div>
              <div className="text-white font-semibold">
                Reduction in Cost Per Claim
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImapactSection;
