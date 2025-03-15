"use client";
import { Heart, Wallet, Cpu, Store, Cloud, Briefcase, Film } from "lucide-react";
import { useState } from "react";

export const Expertise = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const expertiseData = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Finance",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Technology",
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "E-commerce",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "SaaS",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Services",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Media",
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto mb-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold max-w-3xl mx-auto leading-tight text-balance">
        Our Expertise for — <span className="font-semibold bg-blue-300 px-2 rounded">Your Success.</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-8 text-balance">
          Using powerful, industry-specific software solutions, our team can help you achieve your business goals.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 lg:gap-5">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="relative bg-zinc-100/40 rounded-xl py-4 border border-gray-200 flex flex-col items-center">
            <div className={`text-[#4372ea] transition-transform `}>
              {item.icon}
            </div>
            <h3 className="font-semibold mt-4">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};