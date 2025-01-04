import React from 'react';
import { cn } from '../../../utils/cn';

interface CurvedArrowProps {
  position: 'left' | 'right';
  startY: number;
  endY: number;
  label: string;
}

export function CurvedArrow({ position, startY, endY, label }: CurvedArrowProps) {
  const isLeft = position === 'left';
  const path = `M ${isLeft ? '0' : '100'} ${startY} C ${isLeft ? '50' : '50'} ${startY}, ${isLeft ? '50' : '50'} ${endY}, ${isLeft ? '100' : '0'} ${endY}`;

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <svg className="absolute inset-0 w-full h-full">
        <path
          d={path}
          className={cn(
            "fill-none stroke-gold-500/40 stroke-[1px]",
            "transition-all duration-300",
            "group-hover:stroke-gold-500/60 group-hover:filter group-hover:drop-shadow-[0_0_4px_rgba(212,183,136,0.4)]"
          )}
        />
        {/* Arrow head */}
        <circle
          cx={isLeft ? '100' : '0'}
          cy={endY}
          r="2"
          className="fill-gold-500 transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_4px_rgba(212,183,136,0.6)]"
        />
      </svg>

      {/* Label */}
      <div 
        className={cn(
          "absolute transform -translate-y-1/2 px-4 py-2",
          "bg-dark-800/90 backdrop-blur-sm rounded-lg",
          "border border-gold-500/20 group-hover:border-gold-500/40",
          "transition-all duration-300 group-hover:scale-105",
          isLeft ? "right-full mr-4" : "left-full ml-4"
        )}
        style={{ top: `${endY}px` }}
      >
        <p className="text-sm text-gold-500/80 whitespace-nowrap">{label}</p>
      </div>
    </div>
  );
}