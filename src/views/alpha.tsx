import ContactSection from "@/component/home/ContactSection";
import Footer from "@/layout/Footer";

export default function Alpha() {
  return (
    <div className="pt-16 min-h-screen bg-[#0D1117]">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-[#eba200] to-[#64FFDA] text-transparent bg-clip-text font-furore">
                Generate
              </span>{" "}
              Alpha
            </h1>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
              Performant Risk Management is no longer a luxury for the
              enterprises of tomorrow.
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
            The Future Belongs to Those Who Master Risk
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            The dominant companies and industries that define our economy will
            be the ones that get risk intelligence right. Mastering this isn&apos;t
            just an operational necessity—it&apos;s the difference between winning
            and losing in an environment where volatility, liability, and
            exposure define the balance sheet.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12">
            At MAC Safety, we recognize our customers&apos; existential need to
            convert risk into competitive advantage. We don&apos;t sell compliance.
            We don&apos;t offer commodity SaaS. We deliver the outcomes that create
            alpha—helping organizations not just manage risk, but weaponize it
            as a strategic edge.
          </p>

          <div className="bg-black/30 border border-white/10 rounded-lg p-4 md:p-8 mb-8 md:mb-12">
            <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">
              This approach is fundamentally opposed to the traditional safety
              and risk management market, which rewards incremental efficiencies
              but delivers no actual advantage to the end user.
            </p>

            <ul className="list-none space-y-3 md:space-y-4 mb-4 md:mb-6">
              <li className="text-gray-300">
                <span className="text-[#eba200]">→</span> Consulting firms
                operate as if safety is a checklist.
              </li>
              <li className="text-gray-300">
                <span className="text-[#eba200]">→</span> Traditional safety
                software is designed as if risk is a library catalog.
              </li>
            </ul>

            <p className="text-base md:text-lg font-semibold text-white">
              We operate under a different assumption: Risk is the battlefield.
              The winners will be those who control it.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
            The MAC Safety Difference
          </h2>

          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
            The market is flooded with software and services that do nothing
            more than track past incidents and automate bad decisions faster.
            That isn&apos;t risk intelligence—that&apos;s the illusion of control.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
            Our customers see risk not as a burden, but as the fuel that drives
            operational superiority. They know that a connected, real-time risk
            ecosystem—one that constantly learns, predicts, and compounds
            intelligence—will define the industry leaders of tomorrow.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
            For these enterprises, MAC Safety builds the foundational software
            of tomorrow, and we deliver it today. We&apos;ve moved beyond static
            dashboards and lagging indicators to embed intelligence into the
            core of every operational decision.
          </p>

          <div className="bg-gradient-to-r from-[#64FFDA]/10 to-transparent border border-[#64FFDA]/20 rounded-lg p-4 md:p-8">
            <p className="text-lg md:text-xl font-semibold text-white mb-2">
              With NIXN and NIXNos, we are not just improving safety.
            </p>
            <p className="text-lg md:text-xl text-[#64FFDA]">
              We are transforming risk into a profit-driving,
              competition-crushing asset.
            </p>
          </div>
        </div>
      </main>
      <ContactSection title="Get Started with MAC in Minutes" />
      <Footer />
    </div>
  );
}
