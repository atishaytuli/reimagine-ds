"use client"; // Fix hydration issue by ensuring it runs on the client

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures hydration consistency
  }, []);

  if (!mounted) {
    return <div className="h-[100px]"></div>; // Prevents mismatch
  }

  return (
    <div
      {...props}
      className={cn(
        "relative group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              reverse ? "animate-marquee-right" : "animate-marquee-left",
              pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}
          >
            {children}
          </div>
        ))}


      {!vertical && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-100 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-100 to-transparent"></div>
        </>
      )}
    </div>
  );
}
