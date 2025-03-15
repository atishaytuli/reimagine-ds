"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import '@/app/globals.css'

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    // <section className="w-full min-h-screen py-12">
    //   <div className="w-full h-full container mx-auto px-4 md:px-6 flex items-center justify-between gap-12 md:pt-12">

    //     <div className="flex-1 space-y-8">
    //       {/* <div className="flex items-center w-fit px-3 py-1.5 text-[11px] bg-primary/10 text-primary rounded-full gap-2 font-semibold">
    //         <Badge><Building2 size={18} /></Badge>
    //         Based in Mohali Operates WorldWide.  
    //       </div> */}
    //       <div className="pt-8">
    //         <p className="text-md mb-6 text-zinc-700">We Are</p>
    //         <h1 className="text-5xl md:text-7xl tracking-tight uppercase font-[Gillroy]">
    //           Designing
    //           <span className="block text-black font-[RI]  font-light italic my-2 lowercase">
    //             the Future of
    //           </span>
    //           <span className="block">
    //             IT & Telecom
    //           </span>
    //         </h1>

    //         <p className="text-md mt-10 text-zinc-700">
    //           We enable Transforming industries with cutting-edge technology solutions that drive innovation and deliver exceptional results. drive innovation and deliver exceptional results.
    //         </p>
    //       </div>

    //     </div>

    //     <div className="flex-1 relative">
    //       {/* <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div> */}
    //       {/* <Image
    //         width={400}
    //         height={400}
    //         className="w-full md:w-[400px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30 mt-[-70px]"
    //         src={"/hero-image-dark.jpeg"}
    //         alt="dashboard"
    //       /> */}
    //     </div>

    //   </div>

    //   {/* <svg
    //     viewBox="0 0 1024 1024"
    //     className="absolute left-1/2 top-[40%] -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
    //     aria-hidden="true"
    //   >
    //     <circle
    //       cx="512"
    //       cy="512"
    //       r="512"
    //       fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
    //       fillOpacity="0.7"
    //     />
    //     <defs>
    //       <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
    //         <stop stopColor="#ffa21e" />
    //         <stop offset="1" stopColor="#f8a320" />
    //       </radialGradient>
    //     </defs>
    //   </svg> */}
    // </section>

    <section className="w-full h-screen bg-white overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto md:px-12 pt-32">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-full text-center">
            <h1 className="relative font-[RI] text-[80px] md:text-[100px] lg:text-[150px] leading-[0.9] tracking-tight uppercase">
              <span>
                DESIGNING
              </span>
              <span className="block font-[Gillroy] text-5xl md:text-[90px] lg:text-[130px] tracking-tighter my-6 md:my-0">
                THE FUTURE OF
              </span>
              <span>
                IT & TELECOME
                <div className="absolute text-base md:text-2xl font-semibold font-[Gillroy] tracking-normal bg-orange-300 px-2 rounded rotate-[-7deg] right-3 md:right-6 lg:right-24 md:bottom-[0.10rem] lg:bottom-1">DESIGNING SOLUTIONS</div>
              </span>
            </h1>
          </div>

          <div className="w-full flex justify-start mt-12">
            {/* <p
              className="text-sm md:text-base max-w-2xl text-left">
              THE SHIFT CREATES FUTURE-INSPIRED PROJECTS FOR PEOPLE AND BUSINESSES, DESIRING A SHIFT. BASED IN TOKYO, WORKING WORLDWIDE.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
