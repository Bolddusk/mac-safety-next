import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/component/ui/tabs";
import { Card, CardContent } from "@/component/ui/card";
import Footer from "@/layout/Footer";

const partnerData = [
  {
    id: "gm",
    name: "MAC + GM",
    partner:
      "General Motors is a global leader in automotive manufacturing and sustainable mobility solutions.",
    challenge:
      "GM needed to ensure safety compliance and risk management across their expanding electric vehicle infrastructure and battery facility construction programs.",
    solution:
      "MAC Safety provided specialized personnel and implemented comprehensive data analytics and software solutions to monitor and enhance safety protocols during construction and operation.",
    impact:
      "Achieved 30% reduction in safety incidents, streamlined compliance reporting by 40%, and established real-time risk monitoring across all new EV facilities.",
  },
  {
    id: "mbta",
    name: "MAC + MBTA",
    partner:
      "Massachusetts Bay Transportation Authority operates one of the largest public transit systems in the United States.",
    challenge:
      "MBTA required a comprehensive safety management system for their extensive rail and bus operations.",
    solution:
      "Implemented MAC's safety intelligence platform to monitor operations, track maintenance, and predict potential safety issues.",
    impact:
      "Reduced maintenance-related delays by 25%, improved safety compliance by 45%, and enhanced overall system reliability.",
  },
  {
    id: "range",
    name: "MAC + Range Resources",
    partner:
      "Range Resources is a leading U.S. natural gas and oil exploration and production company.",
    challenge:
      "Needed to enhance safety protocols across multiple drilling sites while maintaining operational efficiency.",
    solution:
      "Deployed MAC's risk intelligence system to monitor real-time operations and implement predictive safety measures.",
    impact:
      "Achieved zero recordable incidents across 85% of sites, reduced safety audit time by 60%, and improved emergency response times.",
  },
  {
    id: "marathon",
    name: "MAC + Marathon",
    partner:
      "Marathon Petroleum Corporation is one of the largest petroleum refining companies in the United States.",
    challenge:
      "Required unified safety monitoring across multiple refineries and processing facilities.",
    solution:
      "Implemented comprehensive safety intelligence platform with real-time monitoring and predictive analytics.",
    impact:
      "Reduced safety incidents by 40%, improved compliance reporting efficiency by 50%, and enhanced emergency preparedness.",
  },
  {
    id: "pinnacol",
    name: "MAC + Pinnacol",
    partner:
      "Pinnacol Assurance is Colorado's leading workers' compensation insurance provider.",
    challenge:
      "Needed to modernize risk assessment and claims processing while improving client safety programs.",
    solution:
      "Integrated MAC's risk intelligence platform with existing systems to enhance claim processing and risk prediction.",
    impact:
      "Reduced claim processing time by 35%, improved risk assessment accuracy by 40%, and enhanced client safety program effectiveness.",
  },
];

export default function ImpactStudies() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#eba200]/10 to-[#64FFDA]/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#eba200] to-[#64FFDA] bg-clip-text text-transparent mb-6 pt-10">
              Real Intelligence. Proven Impact.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              We don&apos;t just track safety—we transform it.
            </p>
            <p className="text-md md:text-lg text-gray-400">
              Explore how MAC&apos;s expertise and technology drive measurable
              results across industries.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Highlights Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Customer Highlights
        </h2>

        <Tabs defaultValue="gm" className="w-full">
          <div className="relative mb-24 sm:mb-32">
            <TabsList className="flex flex-wrap justify-center gap-3 sm:gap-4 bg-transparent">
              {partnerData.map((partner) => (
                <TabsTrigger
                  key={partner.id}
                  value={partner.id}
                  className="px-3 sm:px-6 py-2 text-sm sm:text-base rounded-full border border-white/10 bg-black/50 text-white hover:bg-[#eba200] hover:text-black hover:border-[#eba200] transition-all data-[state=active]:bg-[#eba200] data-[state=active]:text-black data-[state=active]:border-[#eba200]"
                >
                  {partner.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {partnerData.map((partner) => (
            <TabsContent key={partner.id} value={partner.id} className="mt-0">
              <div className="grid gap-6">
                <Card className="bg-black/50 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#eba200] mb-4">
                      Partner
                    </h3>
                    <p className="text-gray-300">{partner.partner}</p>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#eba200] mb-4">
                      Challenge
                    </h3>
                    <p className="text-gray-300">{partner.challenge}</p>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#64FFDA] mb-4">
                      Solution
                    </h3>
                    <p className="text-gray-300">{partner.solution}</p>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#64FFDA] mb-4">
                      Impact
                    </h3>
                    <p className="text-gray-300">{partner.impact}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
