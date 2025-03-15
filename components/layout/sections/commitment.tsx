"use client";
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SuccessStoryProps {
  type: string;
  title: string;
  description: string;
  image?: string;
  bgColor: string;
}

const successStories: SuccessStoryProps[] = [
  {
    type: "IT Solutions",
    title: "Innovative Digital Transformation",
    description: "Providing cutting-edge IT solutions, from cloud infrastructure to AI-driven automation, ensuring scalable and efficient digital growth.",
    image: "https://www.salesforce.com/in/blog/wp-content/uploads/sites/9/2023/06/building-employee-centric-companies-banner.jpg",
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-300",
  },
  {
    type: "Cybersecurity",
    title: "Advanced Threat Protection",
    description: "Our cybersecurity solutions safeguard businesses from cyber threats with proactive defense mechanisms and AI-powered monitoring.",
    bgColor: "bg-gradient-to-br from-orange-200 to-orange-300",
  },
  {
    type: "Cloud Computing",
    title: "Seamless Cloud Integration",
    description: "Offering cloud computing solutions that enhance business agility, optimize costs, and enable remote accessibility.",
    bgColor: "bg-gradient-to-br from-green-100 to-green-300",
  },
  {
    type: "GIS & Surveying",
    title: "Precision GIS Mapping",
    description: "Transforming spatial data into actionable insights with high-accuracy GIS mapping and strategic survey solutions.",
    image: "https://eecenvironmental.com/wp-content/uploads/2017/08/GIS-1024x524.jpg",
    bgColor: "bg-gradient-to-br from-indigo-100 to-indigo-300",
  },
  {
    type: "POI Surveys",
    title: "Location Intelligence & Mapping",
    description: "Providing in-depth Point of Interest (POI) surveys to enhance geographic data accuracy and improve location-based services.",
    bgColor: "bg-gradient-to-br from-teal-200 to-teal-300",
  },
  {
    type: "Design & CAD Drafting",
    title: "Engineering-Grade CAD Solutions",
    description: "Delivering high-quality CAD drafting services for urban planning, telecom networks, and infrastructure projects.",
    bgColor: "bg-gradient-to-br from-orange-200 to-orange-300",
  },
];

const StoryCard = ({ story }: { story: SuccessStoryProps }) => {
  return (
    <div className={cn("rounded-3xl text-black h-full flex flex-col", story.bgColor)}>
     <div className='p-4'>
     <div className="mb-3 text-sm font-medium opacity-90 flex items-center gap-2 text-zinc-600"> <div className="w-2.5 h-2.5 bg-zinc-500 rounded-full"></div> {story.type}</div>
      <h3 className="text-xl font-bold mb-4">{story.title}</h3>
      <p className="text-md opacity-80 flex-grow">{story.description}</p>
     </div>
      {story.image && (
        <div className="mt-4">
          <Image src={story.image} alt={story.title}  width={500} height={200} className="rounded-b-lg w-full h-40 object-cover" />
        </div>
      )}
    </div>
  );
};

export const PricingSection = () => {
  return (
    <section id="testimonials" className="py-10 md:py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-3xl font-semibold max-w-3xl mx-auto leading-tight text-balance">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="h-full">
                    {currentGroup[0] && <StoryCard story={currentGroup[0]} />}
                  </div>
                  <div className="flex flex-col gap-4 h-full">
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