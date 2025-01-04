import React from 'react';
import { cn } from '../../../utils/cn';

interface BenefitBoxProps {
  title: string;
  content: string;
  position: 'left' | 'right';
  className?: string;
}

export function BenefitBox({ title, content, position, className }: BenefitBoxProps) {
  return (
    <div 
      className={cn(
        "max-w-xs bg-dark-800/90 backdrop-blur-sm rounded-lg",
        "border border-gold-500/20 hover:border-gold-500/40",
        "transition-all duration-300 hover:scale-105",
        className
      )}
    >
      <div className="p-4">
        <h4 className="text-gold-500 font-medium mb-2">
          {title}
        </h4>
        <p className="text-gold-500/80 text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}