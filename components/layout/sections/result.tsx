"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MessageSquareQuote, Users, Lightbulb } from "lucide-react";

interface ReviewProps {
  name: string;
  comment: string;
  icon: React.ReactNode;
  icon2: React.ReactNode;
}

const reviewList: ReviewProps[] = [
  {
    name: "Customer-Centric Approach",
    comment:
      "We prioritize our client’s success, understand your unique needs, and deliver tailored solutions that drive your business",

    icon: <Users className="w-12 h-12 text-zinc-600 bg-blue-300/50 rounded-2xl p-3 mb-6" />,
    icon2: <Users className="w-10 h-10 text-zinc-500 bg-green-500/50 rounded-2xl p-3 mb-6" />,
  },
  {
    name: "Clear Communication",
    comment:
      "We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication. tailored solutions that drive your business",

    icon: <MessageSquareQuote className="w-12 h-12 text-zinc-600 bg-blue-300/50 rounded-2xl p-3 mb-6" />,
    icon2: <Users className="w-10 h-10 text-zinc-500 bg-orange-500/50 rounded-2xl p-3 mb-6" />,
  },
  {
    name: "Innovation and Excellence",
    comment:
      "We consistently deliver innovative, high-quality solutions as a team on the cutting edge of technology trends.",

    icon: <Lightbulb className="w-12 h-12 text-zinc-600 bg-blue-300/50 rounded-2xl p-3 mb-6" />,
    icon2: <Users className="w-10 h-10 text-zinc-500 bg-green-500/50 rounded-2xl p-3 mb-6" />,
  },
];

const TestimonialCard = ({ review }: { review: ReviewProps }) => {
  return (
    <div
      className={cn(
        "rounded-3xl px-6 py-8 text-black flex flex-col h-full min-h-[300px] transform transition-transform duration-300 hover:rotate-[-3deg] border-2 border-zinc-100"
      )}
    >
      <div className="flex gap-2 items-end">
        {review.icon} {review.icon2}
      </div>

      <h3 className="text-xl font-semibold">{review.name}</h3>

      <p className="text-sm mt-12 text-zinc-500 flex-grow opacity-90">{review.comment}</p>
    </div>
  );
};

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="relative container py-16 md:py-24 mx-auto">
      {/* Top Right Gradient */}
      <div className="absolute top-[20px] left-[-220px] w-[125px] h-[125px] rounded-full bg-gradient-to-br from-blue-500 to-green-400 blur-[13px] opacity-60 md:block hidden"></div>

      {/* Bottom Left Gradient */}
      <div className="absolute bottom-[150px] right-[-220px] w-[125px] h-[125px] rounded-full bg-gradient-to-b from-orange-300 to-red-500 blur-[14px] opacity-80 md:block hidden"></div>

      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl font-bold mx-auto leading-tight text-balance">
          How We Help You <br />
          Deliver the — <span className="font-semibold bg-orange-300 px-2 rounded">Best Results</span>.
        </h2>

        <p className="text-md text-gray-700 mt-12 md:w-4/5 mx-auto">
          See what our satisfied clients have to say about us. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quidem deleniti quibusdam libero mollitia quis corporis? Illo, laborum odit! Aliquid, non?
        </p>
      </div>

      {/* Carousel */}
      <Carousel opts={{ align: "start" }} className="relative md:w-[90%] mx-auto">
        <CarouselContent>
          {reviewList.map((review, index) => (
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3 md:p-1">
              <div className="h-full flex">
                <TestimonialCard review={review} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="md:hidden flex justify-center gap-2 mt-4 md:mt-8">
          <CarouselPrevious className="md:hidden  static transform-none mx-2" />
          <CarouselNext className="md:hidden  static transform-none mx-2" />
        </div>
      </Carousel>
    </section>
  );
};
