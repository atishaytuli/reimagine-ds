"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SuccessStoryProps {
  title: string;
  description: string;
  image?: string;
  bgColor: string;
  category: string;
}

const successStories: SuccessStoryProps[] = [
  {
    category: "IT Solutions",
    title: "Enterprise IT Infrastructure",
    description: "Delivering robust IT infrastructure solutions, including cloud computing, AI-driven automation, and scalable enterprise systems.",
    bgColor: "bg-gradient-to-br from-indigo-200 to-indigo-300",
  },
  {
    category: "Cybersecurity",
    title: "",
    description: "Protecting businesses with proactive security solutions, safeguarding data and networks from cyber threats.",
    bgColor: "bg-gradient-to-br from-blue-300 to-blue-400",
  },
  {
    category: "Cloud Computing",
    title: "",
    description: "Enhancing business agility with cloud-based services that optimize cost, performance, and scalability.",
    bgColor: "bg-gradient-to-br from-orange-300 to-orange-400/70",
  },

  // GIS Surveying
  {
    category: "GIS Surveying",
    title: "Geospatial Data Analysis",
    description: "Utilizing GIS technology for mapping, terrain analysis, and geospatial data-driven insights.",
    bgColor: "bg-gradient-to-br from-blue-200 to-blue-500",
  },
  {
    category: "Remote Sensing",
    title: "",
    description: "Using drone and satellite-based remote sensing for high-precision land and infrastructure surveys.",
    bgColor: "bg-gradient-to-br from-yellow-200 to-yellow-300",
  },
  {
    category: "Survey Integration",
    title: "",
    description: "Real-time data collection and automated survey solutions for efficient mapping and analysis.",
    bgColor: "bg-gradient-to-br from-green-300 to-green-400",
  },

  // Web & App Development
  {
    category: "Web/App Development",
    title: "Full-Stack Development",
    description: "Designing and developing custom web and mobile applications with scalable architecture.",
    bgColor: "bg-gradient-to-br from-teal-300 to-teal-500",
  },
  {
    category: "UI/UX Design",
    title: "",
    description: "Creating intuitive, visually appealing digital experiences that enhance user engagement.",
    bgColor: "bg-gradient-to-br from-purple-300 to-purple-500",
  },
  {
    category: "E-Commerce Solutions",
    title: "",
    description: "Developing high-performance online stores with secure payment integration and seamless navigation.",
    bgColor: "bg-gradient-to-br from-red-300 to-red-500",
  },

  // Asset Mapping & Topographical Mapping
  {
    category: "Asset Mapping",
    title: "Digital Asset Management",
    description: "Tracking and managing physical assets through GIS and IoT solutions for optimized operations.",
    bgColor: "bg-gradient-to-br from-orange-300 to-orange-400",
  },
  {
    category: "Topographical Mapping",
    title: "",
    description: "Providing detailed terrain and elevation mapping for construction, planning, and environmental studies.",
    bgColor: "bg-gradient-to-br from-cyan-300 to-cyan-500",
  },
  {
    category: "Infrastructure Planning",
    title: "",
    description: "Leveraging GIS analytics for smart city development, urban planning, and transportation optimization.",
    bgColor: "bg-gradient-to-br from-yellow-300 to-yellow-400",
  },
];

const StoryCard = ({ story }: { story: SuccessStoryProps }) => {
  return (
    <div className={cn("rounded-2xl text-black h-full flex flex-col", story.bgColor)}>
      <div className='p-4'>
        <span className="text-sm font-medium inline-block mb-3 bg-white/40 px-3 py-1 rounded-full text-orange-700">{story.category}</span>
        <h3 className="text-2xl font-semibold mb-2 mt-3">{story.title}</h3>
        <p className="text-md opacity-80 flex-grow">{story.description}</p>
      </div>
    </div>
  );
};

export const PricingSection = () => {
  return (
    <section id="testimonials" className="py-10 md:py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-2xl md:max-w-3xl mx-auto leading-tight text-balance">
          Our Commitment to — <span className="font-semibold bg-orange-300 px-2 rounded"> Excellence.</span>
        </h2>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="relative w-full mx-auto">
        <CarouselContent>
          {Array.from({ length: Math.ceil(successStories.length / 3) }).map((_, index) => {
            const startIdx = index * 3;
            const currentGroup = successStories.slice(startIdx, startIdx + 3);

            if (currentGroup.length < 3 && successStories.length >= 3) {
              const neededItems = 3 - currentGroup.length;
              currentGroup.push(...successStories.slice(0, neededItems));
            }

            return (
              <CarouselItem key={index} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                  <div className="h-full">
                    {currentGroup[0] && <StoryCard story={currentGroup[0]} />}
                  </div>
                  <div className="flex flex-col gap-2 h-full">
                    <div className="flex-1">
                      {currentGroup[1] && <StoryCard story={currentGroup[1]} />}
                    </div>
                    <div className="flex-1">
                      {currentGroup[2] && <StoryCard story={currentGroup[2]} />}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="static transform-none mx-2" />
          <CarouselNext className="static transform-none mx-2" />
        </div>
      </Carousel>
    </section>
  );
};
