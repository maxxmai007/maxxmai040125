import React from 'react';
import { BenefitItem } from './BenefitItem';

interface BenefitsCircleProps {
  benefits: string[];
}

export function BenefitsCircle({ benefits }: BenefitsCircleProps) {
  return (
    <div className="absolute inset-0 -m-32">
      {benefits.map((benefit, index) => {
        const angle = (360 / benefits.length) * index;
        return (
          <BenefitItem
            key={index}
            text={benefit}
            angle={angle}
            index={index}
          />
        );
      })}
    </div>
  );
}