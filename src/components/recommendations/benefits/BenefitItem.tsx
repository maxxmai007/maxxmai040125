import React from 'react';

interface BenefitItemProps {
  text: string;
  angle: number;
  index: number;
}

export function BenefitItem({ text, angle, index }: BenefitItemProps) {
  return (
    <div
      className="benefit-arrow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        '--delay': `${index * 0.1}s`,
        transform: `rotate(${angle}deg)`,
        animationDelay: `var(--delay)`,
      } as React.CSSProperties}
    >
      {/* Arrow line */}
      <div className="relative h-px w-[300px] bg-gradient-to-r from-gold-500/20 to-gold-500/40">
        <div className="absolute right-0 w-2 h-2 bg-gold-500 rounded-full" />
      </div>

      {/* Benefit text */}
      <div 
        className="absolute left-full ml-4 top-1/2 -translate-y-1/2"
        style={{ transform: `rotate(-${angle}deg)` }}
      >
        <div className="bg-dark-800/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 hover:scale-105">
          <p className="text-sm text-gold-500/80 whitespace-nowrap">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}