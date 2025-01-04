import React from 'react';
import { CardDisplay } from './CardDisplay';
import { CurvedArrow } from '../arrows/CurvedArrow';

interface CardSectionProps {
  name: string;
  benefits: {
    label: string;
    value: string;
    position: 'left' | 'right';
    startY: number;
    endY: number;
  }[];
}

export function CardSection({ name, benefits }: CardSectionProps) {
  return (
    <div className="relative w-[400px] group">
      {/* Card */}
      <CardDisplay name={name} />

      {/* Arrows and Labels */}
      {benefits.map((benefit, index) => (
        <CurvedArrow
          key={index}
          position={benefit.position}
          startY={benefit.startY}
          endY={benefit.endY}
          label={`${benefit.label}: ${benefit.value}`}
        />
      ))}
    </div>
  );
}