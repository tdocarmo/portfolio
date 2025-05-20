"use client";

import { useState, useEffect } from "react";

const technologies = [
  "React",
  "Node.js",
  "TypeScript",
  "Next.js"
];

export function TechScroller() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
        setIsVisible(true);
      }, 300); // Transition plus lente pour un effet plus doux
    }, 2000); // Changement toutes les 2 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-14 flex items-center">
      <div className="relative">
        {technologies.map((tech, index) => (
          <span
            key={tech}
            className={`absolute transition-all duration-800 ease-in-out text-3xl font-semibold
              ${index === currentIndex 
                ? isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
                : 'opacity-0 -translate-y-4'
              } bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
} 