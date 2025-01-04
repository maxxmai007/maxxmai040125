import React from 'react';
import { cn } from '../../../utils/cn';

interface DetailBoxProps {
  label: string;
  value: string;
  position: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

export function DetailBox({ label, value, position, className }: DetailBoxProps) {
  return (
    <div 
      className={cn(
        "absolute transform transition-all duration-300",
        {
          'top-0 left-1/2 -translate-x-1/2 -translate-y-full': position === 'top',
          'right-0 top-1/2 translate-x-full -translate-y-1/2': position === 'right',
          'bottom-0 left-1/2 -translate-x-1/2 translate-y-full': position === 'bottom',
          'left-0 top-1/2 -translate-x-full -translate-y-1/2': position === 'left',
        },
        className
      )}
    >
      <div className="bg-dark-800/90 backdrop-blur-sm p-4 rounded-lg border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 hover:scale-105">
        <p className="text-sm text-gold-500/60 mb-1">{label}</p>
        <p className="text-base text-gold-500">{value}</p>
      </div>
    </div>
  );
}