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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
        setIsTransitioning(false);
      }, 500); // Attendre que la sortie soit terminée
    }, 3000); // Augmenté à 3 secondes pour plus de lisibilité

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 flex items-center">
      <div className="relative">
        {technologies.map((tech, index) => (
          <span
            key={tech}
            className={`absolute transition-all duration-700 ease-in-out text-2xl font-semibold
              ${index === currentIndex 
                ? 'opacity-100 translate-y-0 bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent' 
                : isTransitioning && index === (currentIndex - 1 + technologies.length) % technologies.length
                ? 'opacity-0 translate-y-4'
                : 'opacity-0 -translate-y-4'
              }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
} 