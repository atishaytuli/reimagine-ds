'use client';
import { ArrowUpRight } from "lucide-react";
import React from 'react';
interface SectionHeaderProps {
  title: string;
  highlight: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlight, description }) => (
  <div className="text-center mb-8">
    <h1 className="text-3xl font-semibold">
      {title} <span className="font-semibold bg-orange-300 px-2 rounded">{highlight}</span>
    </h1>
    <p className="text-md text-gray-700 mt-6 md:mt-8 max-w-3xl mx-auto">
      {description}
    </p>
  </div>
);

interface ServiceCardProps {
  category: string;
  title: string;
  description: string;
  videoSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ category, title, description, videoSrc }) => (
  <div className="bg-white border border-zinc-200 text-left shadow-md rounded-xl transition-all duration-500 hover:rounded-[2.5rem] hover:shadow-lg group hover:text-black">
    <div className="w-full h-48 rounded-t-xl group-hover:rounded-t-[2.5rem] transition-all duration-500 overflow-hidden">
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      ></video>
    </div>
    <div className="px-6 py-4">
      <p className="flex items-center gap-1 font-thin uppercase text-xs mt-4 mb-2">
        <span className="w-2 h-2 bg-orange-400 rounded-full inline-block"></span>
        {category}
      </p>
      <span className="text-lg font-semibold">{title}</span>
      <p className="mt-3 text-gray-600 text-sm group-hover:text-black transition-all duration-500">
        {description}
      </p>

      <div className="mt-12 flex">
        <button className="relative flex items-center px-2 py-2 bg-white rounded-full font-semibold transition-all duration-500 overflow-hidden group-hover:px-6 group-hover:bg-orange-300">
          <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500  font-bold">
            Explore More
          </span>

          <div className=" flex items-center justify-center rounded-full bg-orange-300 transition-all duration-500 transform ml-[-7rem] group-hover:translate-x-4 group-hover:ml-2 p-2 group-hover:bg-white">
            <ArrowUpRight size={24} className="text-black transition-all duration-500" />
          </div>
        </button>
      </div>
    </div>
  </div>
);

export const Empowering: React.FC = () => {
  return (
    <section id="benefits" className="relative container mt-12 md:py-10 w-full">
      {/* Top Right Gradient */}
      <div className="absolute top-[20px] right-[-220px] w-[125px] h-[125px] rounded-full bg-gradient-to-br from-blue-500 to-green-400 blur-[13px] opacity-60 md:block hidden"></div>

      {/* Bottom Left Gradient */}
      <div className="absolute bottom-[100px] left-[-220px] w-[125px] h-[125px] rounded-full bg-gradient-to-b from-orange-300 to-red-500 blur-[14px] opacity-80 md:block hidden"></div>

      <div className="mx-auto text-balance">
        <SectionHeader
          title="One Platform. All Things —"
          highlight="IT & Telecom"
          description="Empowering businesses with smart technology and seamless connectivity. From GIS surveying to IT solutions, we drive efficiency and innovation."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ServiceCard
            category="Telecom GIS & Surveying"
            title="Precision-Driven GIS Mapping"
            description="Transforming telecom infrastructure with advanced GIS mapping, strategic network planning, and optimized fiber deployment. Our data-driven insights enhance connectivity, streamline operations, and enable seamless communication for enterprises worldwide."
            videoSrc="/V1.mp4"
          />

          <ServiceCard
            category="IT Solutions"
            title="Innovative & Scalable Digital Solutions"
            description="Delivering intelligent IT solutions tailored for modern businesses. From robust web and app development to AI-driven automation and cloud-powered infrastructure, we create scalable technologies that accelerate digital transformation and business growth."
            videoSrc="/V2.mp4"
          />
        </div>
      </div>
    </section>
  );
};
