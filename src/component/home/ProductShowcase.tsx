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
      image: "/uploads/Airline Industry.jpg",
      description:
        "Elevating aviation safety standards through advanced risk assessment and real-time monitoring systems.",
    },
    {
      title: "Auto",
      icon: <Car className="w-5 h-5" />,
      image: "/uploads/Auto Industry.jpg",
      description:
        "Enhancing automotive manufacturing safety with intelligent monitoring and predictive analytics.",
    },
    {
      title: "Construction",
      icon: <HardHat className="w-5 h-5" />,
      image: "/uploads/Construction Industry.jpg",
      description:
        "Revolutionizing safety protocols in high-risk construction environments through predictive analytics.",
    },
    {
      title: "Data Centers",
      icon: <Server className="w-5 h-5" />,
      image: "/uploads/data center.jpg",
      description:
        "Protecting critical digital infrastructure with comprehensive security and risk management solutions.",
    },
    {
      title: "Healthcare",
      icon: <Heart className="w-5 h-5" />,
      image: "/uploads/Healthcare Industry.jpg",
      description:
        "Ensuring patient and staff safety through intelligent monitoring and compliance management.",
    },
    {
      title: "Insurance",
      icon: <ScrollText className="w-5 h-5" />,
      image: "/uploads/Insurance Industry.jpg",
      description:
        "Transforming risk assessment and claims management with AI-powered analytics.",
    },
    {
      title: "Life Science",
      icon: <TestTube className="w-5 h-5" />,
      image: "/uploads/Life science industry.jpg",
      description:
        "Safeguarding research facilities and laboratories with advanced safety protocols.",
    },
    {
      title: "Manufacturing",
      icon: <Cog className="w-5 h-5" />,
      image: "/uploads/Manufacturing Industry.jpg",
      description:
        "Elevating factory safety standards with smart monitoring systems and automated risk assessment.",
    },
    {
      title: "Oil & Gas",
      icon: <Flame className="w-5 h-5" />,
      image: "/uploads/OilandGas Industry.jpg",
      description:
        "Protecting critical infrastructure and personnel with advanced risk assessment systems.",
    },
    {
      title: "Rail",
      icon: <Train className="w-5 h-5" />,
      image: "/uploads/Rail Industry.jpg",
      description:
        "Ensuring railway safety through comprehensive monitoring and risk management solutions.",
    },
    {
      title: "Steel",
      icon: <Construction className="w-5 h-5" />,
      image: "/uploads/Steel Mill Industry.jpg",
      description:
        "Enhancing operational safety in steel production with advanced risk assessment strategies.",
    },
    {
      title: "Chemical Processing",
      icon: <TestTube className="w-5 h-5" />,
      image: "/uploads/Chemical Processing Industry.jpg",
      description:
        "Advanced safety protocols for chemical processing and refining facilities with real-time hazard monitoring.",
    },
    {
      title: "Defense & Aerospace",
      icon: <Rocket className="w-5 h-5" />,
      image: "/uploads/Defense : Aerospace Indsustry.jpg",
      description:
        "Specialized safety solutions for classified defense and aerospace manufacturing environments.",
    },
    {
      title: "Maritime",
      icon: <Anchor className="w-5 h-5" />,
      image: "/uploads/Maritime Industry.jpg",
      description:
        "Comprehensive safety management for shipbuilding and maritime operations.",
    },
    {
      title: "Mining",
      icon: <Mountain className="w-5 h-5" />,
      image: "/uploads/Mining.jpg",
      description:
        "Advanced safety solutions for mining operations and quarrying activities.",
    },
    {
      title: "Power Generation",
      icon: <Zap className="w-5 h-5" />,
      image: "/uploads/Utilies Industry.jpg",
      description:
        "Ensuring safety excellence in power generation and utility operations.",
    },
    {
      title: "Renewable Energy",
      icon: <Wind className="w-5 h-5" />,
      image: "/uploads/renewable-1989416_1280.jpg",
      description:
        "Specialized safety solutions for wind, solar, and hydroelectric facilities.",
    },
    {
      title: "Telecommunications",
      icon: <Radio className="w-5 h-5" />,
      image: "/uploads/telecommunications-tower-7632805_1280.jpg",
      description:
        "Enhanced safety protocols for telecommunications infrastructure and 5G deployment.",
    },
    {
      title: "Warehousing",
      icon: <Warehouse className="w-5 h-5" />,
      image: "/uploads/warehouse : logistics industry.jpg",
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
