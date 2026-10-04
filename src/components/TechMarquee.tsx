import React from 'react';
import { MARQUEE_TECH } from '../data/portfolioData';

export const TechMarquee: React.FC = () => {
  // Duplicate for seamless infinite loop
  const duplicatedTech = [...MARQUEE_TECH, ...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <section id="tech-strip" className="relative w-full py-5 bg-[#050914] border-y border-border-subtle overflow-hidden z-20">
      {/* Side Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="marquee-container flex overflow-hidden select-none">
        <div className="marquee-track flex shrink-0 items-center gap-6 sm:gap-10 animate-marquee">
          {duplicatedTech.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center gap-3 text-xs sm:text-sm font-mono font-semibold tracking-wider text-text-secondary hover:text-primary-cyan transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-primary-blue shadow-[0_0_8px_#3877FF]" />
              <span className="whitespace-nowrap uppercase">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
