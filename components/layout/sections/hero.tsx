"use client";
import '@/app/globals.css';
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";

export const HeroSection = () => {
  return (
    <section className="w-full h-screen overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute h-[120%] w-[80%] left-[-10%] top-[-15%] blur-2xl opacity-50"
          animate={{ x: ["0%", "10%", "0%"], y: ["0%", "-5%", "0%"], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(246, 203, 138, 0.9), rgba(255, 231, 194, 0.8), rgba(255, 255, 255, 0) 80%)",
          }}
        />
        <motion.div
          className="absolute h-[150%] w-[60%] left-[20%] top-[-5%] blur-3xl opacity-40"
          animate={{ x: ["0%", "-10%", "0%"], y: ["0%", "10%", "0%"], rotate: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(164, 217, 249, 0.7), rgba(194, 232, 255, 0.5), rgba(255, 255, 255, 0) 75%)",
          }}
        />
        <motion.div
          className="absolute h-[180%] w-[90%] left-[5%] top-[10%] blur-[150px] opacity-30"
          animate={{ x: ["-5%", "5%", "-5%"], y: ["-10%", "10%", "-10%"], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255, 182, 193, 0.6), rgba(255, 218, 185, 0.5), rgba(255, 255, 255, 0) 75%)",
          }}
        />
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto md:px-12 mt-32 md:mt-64 lg:mt-44 text-center">
        <h1 className="relative font-[RI] text-[80px] md:text-[100px] lg:text-[150px] leading-[0.9] tracking-tight uppercase">
          <div className="absolute text-base md:text-2xl font-semibold font-[Gillroy] tracking-normal bg-green-400 px-2 rounded rotate-[-10deg] top-[-1rem] left-1 md:left-5 lg:left-[16rem] md:top-[0.70rem] lg:top-[-0.5rem]">
            WE ARE
          </div>
          <span>DESIGNING</span>
          <span className="block font-[Gillroy] text-5xl md:text-[90px] lg:text-[130px] tracking-tighter my-6 md:my-0">
            THE FUTURE OF
          </span>
          <span>
            IT & TELECOM
            <div className="absolute text-base md:text-2xl font-semibold font-[Gillroy] tracking-normal bg-orange-300 px-2 rounded-sm  right-1 bottom-[-0.5rem] md:right-6 lg:right-[7rem] md:bottom-[0.05rem] lg:bottom-[0.30rem]">
              DESIGNING SOLUTIONS
            </div>
          </span>
        </h1>
      </div>
    </section>
  );
};
