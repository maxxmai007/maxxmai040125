import React from 'react';
import { cn } from '../../../utils/cn';

interface ConnectingArrowProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  position: 'left' | 'right';
  className?: string;
}

export function ConnectingArrow({ start, end, position, className }: ConnectingArrowProps) {
  const controlPoint = {
    x: (start.x + end.x) / 2,
    y: (start.y + end.y) / 2
  };

  const path = `
    M ${start.x},${start.y}
    Q ${controlPoint.x},${controlPoint.y} ${end.x},${end.y}
  `;

  return (
    <svg 
      className={cn(
        "absolute pointer-events-none",
        "transition-opacity duration-300",
        className
      )}
    >
      <path
        d={path}
        className="stroke-gold-500/40 fill-none"
        strokeWidth="1"
      />
      <circle
        cx={end.x}
        cy={end.y}
        r="2"
        className="fill-gold-500"
      />
    </svg>
  );
}