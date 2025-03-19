"use client";
import { Heart, Wallet, Cpu, Store, Cloud, Briefcase, Film } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Expertise = () => {
  const expertiseData = [
    { icon: <Heart className="w-8 h-8" />, title: "Telecom" },
    { icon: <Briefcase className="w-8 h-8" />, title: "GIS & Mapping" },
    { icon: <Cpu className="w-8 h-8" />, title: "UI/UX" },
    { icon: <Wallet className="w-8 h-8" />, title: "FinTech" },
    { icon: <Store className="w-8 h-8" />, title: "Ecommerce" },
    { icon: <Cloud className="w-8 h-8" />, title: "SaaS" },
    { icon: <Film className="w-8 h-8" />, title: "AI & Automation" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto mb-12">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold max-w-3xl mx-auto leading-tight text-balance">
          Our Expertise for — <span className="font-semibold bg-blue-300 px-2 rounded">Your Success.</span>
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mt-8 text-balance">
          Our deep industry expertise enables us to provide cutting-edge solutions tailored to your business needs.
          From software development to GIS solutions and automation, we bring innovation to every project.
        </p>
      </div>

      {/* Carousel for md & below */}
      <div className="block lg:hidden">
        <Carousel opts={{ align: "start" }} className="relative w-full max-w-[90%] mx-auto">
          <CarouselContent className="w-full">
            {expertiseData.map((item, index) => (
              <CarouselItem key={index} className="w-full max-w-[80%] sm:max-w-[40%] mx-auto">
                <div className="bg-zinc-100/40 rounded-xl py-6 px-4 border border-gray-200 flex flex-col items-center
                  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md">
                  <div className="text-[#43b3f0]">{item.icon}</div>
                  <h3 className="font-semibold mt-4">{item.title}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>

      {/* Grid layout for lg & above */}
      <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 lg:gap-5">
        {expertiseData.map((item, index) => (
          <div key={index} className="bg-zinc-100/40 rounded-xl py-4 border border-gray-200 flex flex-col items-center 
            transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="text-[#4372ea]">{item.icon}</div>
            <h3 className="font-semibold mt-4">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
