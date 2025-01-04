import React from 'react';
import { cn } from '../../../utils/cn';

interface BenefitBoxProps {
  title: string;
  items: string[];
  position: 'left' | 'right';
}

export function BenefitBox({ title, items, position }: BenefitBoxProps) {
  return (
    <div className="relative">
      {/* Connecting arrow */}
      <div 
        className={cn(
          "absolute top-1/2 -translate-y-1/2 w-16",
          position === 'left' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
        )}
      >
        <div 
          className={cn(
            "h-px",
            position === 'left' 
              ? "bg-gradient-to-r from-gold-500/40 to-gold-500/20"
              : "bg-gradient-to-l from-gold-500/40 to-gold-500/20"
          )}
        >
          <div 
            className={cn(
              "absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-gold-500 rounded-full",
              position === 'left' ? 'right-0' : 'left-0'
            )}
          />
        </div>
      </div>

      {/* Content box */}
      <div 
        className="bg-dark-800/90 backdrop-blur-sm p-6 rounded-lg border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 hover:scale-105"
        style={{
          opacity: 0,
          animation: 'fadeInBenefit 0.5s ease-out forwards'
        }}
      >
        <h4 className="text-gold-500/60 text-sm mb-3">{title}</h4>
        {items.map((item, index) => (
          <p 
            key={index}
            className="text-gold-500 text-base"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}