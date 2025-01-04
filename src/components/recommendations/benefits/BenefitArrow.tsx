import React from 'react';

interface BenefitArrowProps {
  text: string;
  angle: number;
  delay: number;
}

export function BenefitArrow({ text, angle, delay }: BenefitArrowProps) {
  const transform = `rotate(${angle}deg)`;
  
  return (
    <div
      className="absolute inset-0 origin-center transition-opacity duration-500"
      style={{ 
        transform,
        opacity: 0,
        animation: `fadeIn 0.5s ease-out forwards ${delay}s`
      }}
    >
      {/* Arrow line */}
      <div className="absolute top-1/2 left-1/2 h-px w-48 bg-gradient-to-r from-gold-500/20 to-gold-500/40 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute right-0 w-2 h-2 bg-gold-500 rounded-full" />
      </div>
      
      {/* Benefit text */}
      <div 
        className="absolute left-1/2 ml-52 -translate-y-1/2 max-w-xs"
        style={{ transform: `rotate(-${angle}deg)` }}
      >
        <div className="bg-dark-800/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-500/20 hover:border-gold-500/40 transition-colors duration-300">
          <p className="text-sm text-gold-500/80">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}