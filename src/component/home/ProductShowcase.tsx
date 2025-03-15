import { MilitaryCard } from "../ui/military-card";
import {
  Plane,
  Car,
  HardHat,
  Server,
  Heart,
  ScrollText,
  TestTube,
  Cog,
  Flame,
  Train,
  Construction,
  Warehouse,
  Radio,
  Zap,
  Wind,
  Anchor,
  Mountain,
  Rocket,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

export default function ProductShowcase() {
  const industries = [
    {
      title: "Airline",
      icon: <Plane className="w-5 h-5" />,
      image: "/uploads/airline_industry.webp",
      description:
        "Elevating aviation safety standards through advanced risk assessment and real-time monitoring systems.",
    },
    {
      title: "Auto",
      icon: <Car className="w-5 h-5" />,
      image: "/uploads/auto_industry.webp",
      description:
        "Enhancing automotive manufacturing safety with intelligent monitoring and predictive analytics.",
    },
    {
      title: "Construction",
      icon: <HardHat className="w-5 h-5" />,
      image: "/uploads/construction_industry.webp",
      description:
        "Revolutionizing safety protocols in high-risk construction environments through predictive analytics.",
    },
    {
      title: "Data Centers",
      icon: <Server className="w-5 h-5" />,
      image: "/uploads/data_center.webp",
      description:
        "Protecting critical digital infrastructure with comprehensive security and risk management solutions.",
    },
    {
      title: "Healthcare",
      icon: <Heart className="w-5 h-5" />,
      image: "/uploads/healthcare_industry.webp",
      description:
        "Ensuring patient and staff safety through intelligent monitoring and compliance management.",
    },
    {
      title: "Insurance",
      icon: <ScrollText className="w-5 h-5" />,
      image: "/uploads/insurance_industry.webp",
      description:
        "Transforming risk assessment and claims management with AI-powered analytics.",
    },
    {
      title: "Life Science",
      icon: <TestTube className="w-5 h-5" />,
      image: "/uploads/life_science_industry.webp",
      description:
        "Safeguarding research facilities and laboratories with advanced safety protocols.",
    },
    {
      title: "Manufacturing",
      icon: <Cog className="w-5 h-5" />,
      image: "/uploads/manufacturing_industry.webp",
      description:
        "Elevating factory safety standards with smart monitoring systems and automated risk assessment.",
    },
    {
      title: "Oil & Gas",
      icon: <Flame className="w-5 h-5" />,
      image: "/uploads/oil_gas_industry.webp",
      description:
        "Protecting critical infrastructure and personnel with advanced risk assessment systems.",
    },
    {
      title: "Rail",
      icon: <Train className="w-5 h-5" />,
      image: "/uploads/rail_industry.webp",
      description:
        "Ensuring railway safety through comprehensive monitoring and risk management solutions.",
    },
    {
      title: "Steel",
      icon: <Construction className="w-5 h-5" />,
      image: "/uploads/steel_mill_industry.webp",
      description:
        "Enhancing operational safety in steel production with advanced risk assessment strategies.",
    },
    {
      title: "Chemical Processing",
      icon: <TestTube className="w-5 h-5" />,
      image: "/uploads/chemical_processing_industry.webp",
      description:
        "Advanced safety protocols for chemical processing and refining facilities with real-time hazard monitoring.",
    },
    {
      title: "Defense & Aerospace",
      icon: <Rocket className="w-5 h-5" />,
      image: "/uploads/defense_aerospace_indsustry.webp",
      description:
        "Specialized safety solutions for classified defense and aerospace manufacturing environments.",
    },
    {
      title: "Maritime",
      icon: <Anchor className="w-5 h-5" />,
      image: "/uploads/maritime_industry.webp",
      description:
        "Comprehensive safety management for shipbuilding and maritime operations.",
    },
    {
      title: "Mining",
      icon: <Mountain className="w-5 h-5" />,
      image: "/uploads/mining.webp",
      description:
        "Advanced safety solutions for mining operations and quarrying activities.",
    },
    {
      title: "Power Generation",
      icon: <Zap className="w-5 h-5" />,
      image: "/uploads/utilies_industry.webp",
      description:
        "Ensuring safety excellence in power generation and utility operations.",
    },
    {
      title: "Renewable Energy",
      icon: <Wind className="w-5 h-5" />,
      image: "/uploads/renewable.webp",
      description:
        "Specialized safety solutions for wind, solar, and hydroelectric facilities.",
    },
    {
      title: "Telecommunications",
      icon: <Radio className="w-5 h-5" />,
      image: "/uploads/telecommunications_tower.webp",
      description:
        "Enhanced safety protocols for telecommunications infrastructure and 5G deployment.",
    },
    {
      title: "Warehousing",
      icon: <Warehouse className="w-5 h-5" />,
      image: "/uploads/warehouse_logistics_industry.webp",
      description:
        "Optimized safety management for modern warehousing and logistics operations.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0D1117]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 sm:mb-12">
          Industries We Serve
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {industries.map((industry) => (
              <CarouselItem
                key={industry.title}
                className="pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <div>
                  <MilitaryCard title={industry.title} icon={industry.icon}>
                    <Image
                      src={industry.image}
                      alt={`${industry.title} industry`}
                      width={300} // Adjust width as needed
                      height={160} // Adjust height as needed
                      className="w-full h-40 object-cover rounded-md mb-4"
                      style={{ objectFit: "cover" }}
                      priority // Optional: Use for above-the-fold images
                    />
                    <p className="text-gray-300">{industry.description}</p>
                  </MilitaryCard>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-[#eba200] text-black hover:bg-[#eba200]/80 hover:shadow-[0_0_15px_rgba(235,162,0,0.5)]" />
          <CarouselNext className="hidden md:flex -right-12 bg-[#eba200] text-black hover:bg-[#eba200]/80 hover:shadow-[0_0_15px_rgba(235,162,0,0.5)]" />
        </Carousel>
      </div>
    </section>
  );
}
