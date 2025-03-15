'use client';

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
}

const ServiceCard: React.FC<ServiceCardProps> = ({ category, title, description }) => (
  <div className="bg-white rounded-lg border border-zinc-200 text-left shadow-md">
    <div className='bg-orange-400/40 w-full h-48 rounded-t-lg'></div>
    <div className='px-6 py-4'>
      <p className="flex items-center gap-1 font-thin text-gray-900 uppercase text-xs mb-2"> <div className="w-2 h-2 bg-zinc-300 rounded-full"></div> {category}</p>
      <span className='text-lg font-semibold'>{title}</span>
      <p className="mt-3 text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export const Empowering: React.FC = () => {
  return (
    <section id="benefits" className="container md:py-16 w-full">
      <div className="mx-auto">
        <SectionHeader 
          title="One Platform. All Things —"
          highlight="IT & Telecom"
          description="Empowering businesses with smart technology and seamless connectivity. From GIS surveying to IT solutions, we drive efficiency and innovation."
        />

        <div className="mt-4 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ServiceCard 
            category="Telecom GIS & Surveying" 
            title="Precision-Driven GIS Mapping" 
            description="Transforming telecom infrastructure with advanced GIS mapping, strategic network planning, and optimized fiber deployment. Our data-driven insights enhance connectivity, streamline operations, and enable seamless communication for enterprises worldwide."
          />
          
          <ServiceCard 
            category="IT Solutions" 
            title="Innovative & Scalable Digital Solutions" 
            description="Delivering intelligent IT solutions tailored for modern businesses. From robust web and app development to AI-driven automation and cloud-powered infrastructure, we create scalable technologies that accelerate digital transformation and business growth."
          />
        </div>
      </div>
    </section>
  );
};
