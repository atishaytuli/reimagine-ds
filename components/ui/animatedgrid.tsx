import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedGridProps {
  title?: string;
}

const AnimatedGrid: React.FC<AnimatedGridProps> = ({ title = "Animated Grid Background" }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const gridSize = 12;
  const gridLines = Array.from({ length: gridSize + 1 });

  const animatedLines = [
    { type: "vertical", position: 8, delay: 0 },
    { type: "horizontal", position: 7, delay: 0.5 },
    { type: "vertical", position: 4, delay: 1 },
    { type: "horizontal", position: 11, delay: 1.5 },
  ];

  if (!mounted) return null;

  return (
    <div className="absolute w-full h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="relative w-full max-w-6xl aspect-square">
        {/* Static Grid Lines */}
        {gridLines.map((_, i) => (
          <React.Fragment key={`grid-line-${i}`}>
            {/* Vertical Lines */}
            <div
              className="absolute top-0 h-full w-px"
              style={{ left: `${(i / gridSize) * 100}%` }}
            />
            {/* Horizontal Lines */}
            <div
              className="absolute left-0 w-full h-px"
              style={{ top: `${(i / gridSize) * 100}%` }}
            />
          </React.Fragment>
        ))}

        {/* Animated Orange Lines */}
        {animatedLines.map((line, index) => {
          if (line.type === "vertical") {
            return (
              <motion.div
                key={`animated-line-${index}`}
                className="absolute top-0 h-full w-px bg-orange-500"
                style={{ left: `${(line.position / gridSize) * 100}%` }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ 
                  scaleY: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: line.delay,
                  ease: [0.42, 0, 0.58, 1] // smoother cubic-bezier ease
                }}
              />
            );
          } else {
            return (
              <motion.div
                key={`animated-line-${index}`}
                className="absolute left-0 w-full h-px bg-orange-500"
                style={{ top: `${(line.position / gridSize) * 100}%` }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: line.delay,
                  ease: [0.42, 0, 0.58, 1]
                }}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default AnimatedGrid;
