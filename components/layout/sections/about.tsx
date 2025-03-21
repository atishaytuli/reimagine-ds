"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Users, Check, Briefcase } from "lucide-react";

export const FeaturesSection = () => {
  const [members, setMembers] = useState(0);
  const [projects, setProjects] = useState(0);
  const [experts, setExperts] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) observer.observe(statsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const membersInterval = setInterval(() => {
        setMembers((prev) => (prev < 70 ? prev + 1 : prev));
      }, 30);

      const projectsInterval = setInterval(() => {
        setProjects((prev) => (prev < 700 ? prev + 10 : prev));
      }, 10);

      const expertsInterval = setInterval(() => {
        setExperts((prev) => (prev < 100 ? prev + 1 : prev));
      }, 20);

      return () => {
        clearInterval(membersInterval);
        clearInterval(projectsInterval);
        clearInterval(expertsInterval);
      };
    }
  }, [isVisible]);

  return (
    <section
      id="story"
      className="relative font-[Gillroy] container py-24 mt-12 text-balance "
    >
      <div className="relative bg-[#F3EEE4] rounded-xl p-4 sm:p-16 md:p-8 z-10 border border-zinc-300 shadow-lg mb-4">
        {/* Heading */}
        <h2
          className="absolute w-full left-1/2 -translate-x-1/2 text-center text-4xl sm:text-6xl md:text-[2.5rem] lg:text-5xl font-semibold uppercase tracking-wider text-orange-400 top-[-4rem] md:top-[-3.5rem] lg:top-[-3.1rem]"
          style={{
            // WebkitTextStroke: "1px black",
            textShadow: "3px 2px 0 black",
          }}
        >
          THE STORY <span className="italic lowercase">of</span> <br />
          <span className="text-orange-400-600"> -</span> <span className="font-[RI] text-green-600">
            DESIGNING SOLUTIONS
          </span>
          <span className="text-orange-400"> -</span>
        </h2>

        {/* Main Content */}
        <div className="mt-16 md:mt-12 lg:mt-20 text-base text-gray-700 space-y-4 text-balance">
          <p className="text-balance">
            <strong className="bg-orange-300 px-2 rounded-lg">
              Designing Solutions
            </strong>{" "}
            is a technology service provider specializing in developing
            innovative solutions tailored to businesses unique needs. With over{" "}
            <strong>17 years of experience</strong>
            in the Telecom and IT industries, we have a deep understanding of
            the challenges companies face in today’s digital landscape. Our
            business is registered in
            <strong> Canada and India</strong>, allowing us to serve a diverse
            global clientele. Our expertise spans{" "}
            <strong className="bg-green-400 px-2 rounded-lg">
              web and mobile app development
            </strong>
            , GIS solutions, utility mapping, and software integrations. We are
            dedicated to delivering user-friendly, high-performance solutions
            that streamline operations and enhance business efficiency.
          </p>
          <p>
            At Designing Solutions, our goal is to help businesses leverage tech to stay ahead. From startups to large enterprises, we
            work closely with our clients to understand their unique needs and
            build scalable solutions that drive success.
          </p>
        </div>

        {/* Image & Text Row */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 md:gap-4 lg:gap-4">
          <div className="flex justify-center">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D22AQE5W8poHzcG4Q/feedshare-shrink_2048_1536/B4DZVL0Va2GkAw-/0/1740733769959?e=1744848000&v=beta&t=nzftsDbQPazUNz6yXkyUdl3aYT05-gL-y5M5CywgDzg"
              alt="Team Image"
              className="rounded-lg shadow-md w-full h-auto object-cover"
              width={400}
              height={200}
            />
          </div>

          <div className="text-base text-gray-700 space-y-4 col-span-2 text-balance mt-6 md:mt-0 lg:mt-0">
            <p>
              Our company thrives on{" "}
              <strong>collaboration and expertise</strong>. We have built a
              network of seasoned professionals and technology experts who are
              passionate about delivering exceptional results. Whether it’s
              software development, cloud solutions, or IT consulting, we bring
              the in of the
              <strong className="bg-blue-300 px-2 rounded-lg">
                {" "}
                innovation and reliability
              </strong>{" "}
              to every project. We believe in using cutting-edge technologies
              and best practices to craft solutions that stand the test of time
              Our company thrives on{" "}
              <strong>collaboration and expertise</strong>. We have built a
              network of seasoned professionals and technology experts who are
              passionate about delivering exceptional results. <strong>collaboration and expertise</strong>. We have built a
              network of seasoned professionals and technology experts who are
              passionate about delivering exceptional results.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div id="stats-section" className="mt-12 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-0 text-center">
            <div className="flex flex-col items-center transition-all duration-300 hover:scale-105">
              <div className="bg-orange-400/20 p-3 rounded-full mb-3">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <div className="text-3xl font-semibold text-gray-800">{members}+</div>
              <div className="text-gray-600 text-sm">Global Members</div>
            </div>

            <div className="flex flex-col items-center transition-all duration-300 hover:scale-105">
              <div className="bg-green-500/20 p-3 rounded-full mb-3">
                <Briefcase className="h-8 w-8 text-green-500" />
              </div>
              <div className="text-3xl font-semibold text-gray-800">
                {projects}+
              </div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>

            <div className="flex flex-col items-center transition-all duration-300 hover:scale-105">
              <div className="bg-blue-300/20 p-3 rounded-full mb-3">
                <Check className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-3xl font-semibold text-gray-800">{experts}+</div>
              <div className="text-gray-600 text-sm">Development Experts</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
