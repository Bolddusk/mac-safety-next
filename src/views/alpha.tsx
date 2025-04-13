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
            <div className="text-2xl md:text-4xl font-bold leading-relaxed">
              <p className="mb-2">
                Deploy <span className="text-[#eba200]">Intelligence</span>
              </p>
              <p>
                Not <span className="text-gray-400">Interfaces</span>
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
            Decision Points, Not Data
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            For years, companies were told that data is the new oil. That if you
            collect enough of it, insight will follow. It didn&apos;t. Instead,
            businesses got dashboards, latency, and confusion—while the real
            problems stayed unsolved.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">
            At MAC, we reject that myth outright.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">
            Data isn&apos;t oil. It&apos;s a byproduct, inert until context, modeling, and
            decision logic are applied. Most companies are drowning in it, and
            still don&apos;t know what to do next.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12">
            Alpha—the kind that moves operations, reduces loss, and wins market
            share—isn&apos;t in your database. It&apos;s in your decision points. And
            those are being made right now by people under pressure, with
            incomplete information and zero support.
          </p>

          <p className="text-base md:text-lg font-semibold text-white mb-8 md:mb-12">
            This is where MAC begins.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
            We Locate the Blind Spots Where Decisions Fail
          </h2>

          <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">
            Every business is filled with hidden decision points. They&apos;re not
            always in your process map—but they&apos;re always in your cost
            structure.
          </p>

          <div className="space-y-4 mb-6">
            <p className="text-base md:text-lg text-gray-300 italic pl-4 border-l-2 border-[#eba200]">
              A supervisor guessing whether a crew is ready.
            </p>
            <p className="text-base md:text-lg text-gray-300 italic pl-4 border-l-2 border-[#eba200]">
              A dispatcher assigning a route without understanding the real
              risk.
            </p>
            <p className="text-base md:text-lg text-gray-300 italic pl-4 border-l-2 border-[#eba200]">
              A foreman choosing speed over redundancy, with no model of
              consequence.
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-300 font-semibold mb-2">
            These aren&apos;t data problems.
          </p>
          <p className="text-base md:text-lg text-gray-300 font-semibold mb-6">
            These are judgment under pressure problems.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6">
            They exist where Uncertainty is high, where the Consequence of
            failure is massive, and where no system is helping close the gap.
          </p>

          <div className="bg-gradient-to-r from-black to-[#0D1117] border border-[#eba200]/30 rounded-lg p-6 md:p-8 mb-8 shadow-[0_0_15px_rgba(235,162,0,0.2)] backdrop-blur-sm">
            <p className="text-lg md:text-xl font-semibold text-[#eba200] mb-4">
              🔍 This is the Alpha Equation:
            </p>
            <div className="text-2xl md:text-3xl font-bold text-white text-center my-6 font-mono">
              <div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="glow-text"
              >
                Alpha = Uncertainty × Consequence × Decision Lift
              </div>
            </div>

            <div className="space-y-3 text-gray-300 mt-6">
              <p>
                <span className="text-[#eba200] font-semibold">
                  Uncertainty:
                </span>{" "}
                How little is known when the decision is made
              </p>
              <p>
                <span className="text-[#eba200] font-semibold">
                  Consequence:
                </span>{" "}
                What happens if it goes wrong
              </p>
              <p>
                <span className="text-[#eba200] font-semibold">
                  Decision Lift:
                </span>{" "}
                How much better, faster, or safer MAC enables that choice to be
                made
              </p>
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-300 mb-6">
            These are the decisions that shape your risk exposure, your rework
            rate, your loss profile, and your insurance cost. Yet most
            businesses don&apos;t even know where they&apos;re happening—let alone how to
            intervene.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6">
            MAC doesn&apos;t log the decision. We model it. Then we embed software to
            improve it—in real-time, at the point of action.
          </p>

          <div className="relative py-10 mb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 mx-auto max-w-4xl">
              <div className="transform transition-all duration-300 hover:scale-105">
                <div className="border border-white/10 bg-black/60 backdrop-blur-sm p-5 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                  <p className="text-xl md:text-2xl font-bold text-white text-center">
                    Not <span className="text-gray-400">post-incident</span>
                  </p>
                </div>
              </div>

              <div className="transform transition-all duration-300 hover:scale-105">
                <div className="border border-white/10 bg-black/60 backdrop-blur-sm p-5 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                  <p className="text-xl md:text-2xl font-bold text-white text-center">
                    Not <span className="text-gray-400">post-mortem</span>
                  </p>
                </div>
              </div>

              <div className="transform transition-all duration-300 hover:scale-105">
                <div className="border border-[#eba200]/30 bg-black/60 backdrop-blur-sm p-5 rounded-lg shadow-[0_0_15px_rgba(235,162,0,0.15)]">
                  <p className="text-xl md:text-2xl font-bold text-[#eba200] text-center">
                    On the <span className="text-white">edge</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white">
            The New Enterprise Stack Is Embedded Execution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="space-y-3 p-4 border border-transparent hover:border-[#eba200]/20 hover:bg-black/30 transition-all duration-300 rounded-lg">
              <p className="text-xl md:text-2xl font-bold text-[#eba200]">
                Not dashboards.
              </p>
              <p className="text-xl md:text-2xl font-bold text-white">
                Decision engines.
              </p>
            </div>

            <div className="space-y-3 p-4 border border-transparent hover:border-[#eba200]/20 hover:bg-black/30 transition-all duration-300 rounded-lg">
              <p className="text-xl md:text-2xl font-bold text-[#eba200]">
                Not more data.
              </p>
              <p className="text-xl md:text-2xl font-bold text-white">
                Better judgment.
              </p>
            </div>

            <div className="space-y-3 p-4 border border-transparent hover:border-[#eba200]/20 hover:bg-black/30 transition-all duration-300 rounded-lg">
              <p className="text-xl md:text-2xl font-bold text-[#eba200]">
                Not centralized IT.
              </p>
              <p className="text-xl md:text-2xl font-bold text-white">
                Deployed intelligence at the edge.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#64FFDA]/10 to-transparent border border-[#64FFDA]/20 rounded-lg p-4 md:p-8 mb-12">
            <p className="text-lg md:text-xl font-semibold text-white mb-2">
              This is how MAC generates Alpha:
            </p>
            <p className="text-lg md:text-xl text-[#64FFDA]">
              Not by observing from the outside, but by building from
              within—embedded teams, tailored models, and decision-first
              architecture.
            </p>
          </div>

          <div className="text-center py-8 md:py-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your Business Doesn&apos;t Need More Software.
              <br />
              <span className="text-[#eba200]">It Needs Better Decisions.</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Let&apos;s build decision-layer infrastructure where your risk lives—on
              the floor, in the field, and at the edge of execution.
            </p>
          </div>
        </div>
      </main>
      <ContactSection title="Get Started with MAC in Minutes" />
      <Footer />
    </div>
  );
}
