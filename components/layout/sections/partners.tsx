"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";

const sponsorImages = [
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/Airtel-logo-1.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/TomTom_logo-1.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/Logo-06-1_0.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/vodaidea.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/adni-1.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/t-fiber.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/tenfinet-1.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/tata-1.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/stl-1.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/ceinsys-tech-ltd-1.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/hfcl-1.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/ramtech.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/bhai.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/logo-updated.svg",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/space-worldlogo.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/image-7-768x416-1.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/image-6-768x216-1.png",
  "https://designingsolutions.schooldays365.com/wp-content/uploads/2024/11/image-5-768x192-1.png",
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[90%] mx-auto pb-32 mt-12">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Our Partners
      </h2>

      <div className="mx-auto overflow-hidden">
        <Marquee
          className="gap-6"
          fade
          pauseOnHover
          numberOfCopies={2}
          innerClassName="flex items-center gap-12 animate-marquee"
        >
          {sponsorImages.map((image, index) => (
            <div key={index} className="relative w-32 h-16">
              <Image
                src={image}
                alt={`Sponsor ${index + 1}`}
                layout="fill"
                objectFit="contain"
                unoptimized
                priority={index < 5}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
