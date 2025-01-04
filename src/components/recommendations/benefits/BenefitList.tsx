import React from 'react';

interface BenefitListProps {
  benefits: string[];
}

export function BenefitList({ benefits }: BenefitListProps) {
  return (
    <div className="absolute right-0 top-1/2 translate-x-[120%] -translate-y-1/2 space-y-4">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="relative"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            opacity: 0,
            animation: 'fadeInBenefit 0.5s ease-out forwards'
          }}
        >
          {/* Arrow */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 w-16">
            <div className="h-px bg-gradient-to-r from-gold-500/20 to-gold-500/40">
              <div className="absolute right-0 w-2 h-2 bg-gold-500 rounded-full -translate-y-1/2" />
            </div>
          </div>

          {/* Benefit box */}
          <div className="bg-dark-800/90 backdrop-blur-sm p-4 rounded-lg border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 hover:scale-105">
            <p className="text-sm text-gold-500/80">{benefit}</p>
          </div>
        </div>
      ))}
    </div>
  );
}