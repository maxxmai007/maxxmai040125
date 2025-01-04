import React from 'react';
import { BenefitBox } from '../text/BenefitBox';
import { ConnectingArrow } from '../arrows/ConnectingArrow';
import type { CreditCardRecommendation } from '../../../services/openai/types';

interface RecommendationDetailsProps {
  recommendation: CreditCardRecommendation;
}

export function RecommendationDetails({ recommendation }: RecommendationDetailsProps) {
  return (
    <div className="relative flex justify-center items-center gap-32">
      {/* Left side - Real World Benefits */}
      <div className="relative">
        <BenefitBox
          title="Real World Benefits"
          content={recommendation.real_world_benefits}
          position="left"
        />
        <ConnectingArrow
          start={{ x: 200, y: 100 }}
          end={{ x: 300, y: 100 }}
          position="left"
        />
      </div>

      {/* Center - Card Display */}
      <div className="relative w-[400px]">
        <img
          src={recommendation.card_image}
          alt={recommendation.card_name}
          className="w-full rounded-xl shadow-xl"
        />
        <h3 className="text-xl text-white text-center mt-4">
          {recommendation.card_name}
        </h3>
      </div>

      {/* Right side - Fees and Value */}
      <div className="space-y-8">
        <div className="relative">
          <BenefitBox
            title="Annual Fee"
            content={recommendation.annual_fee}
            position="right"
          />
          <ConnectingArrow
            start={{ x: 0, y: 100 }}
            end={{ x: 100, y: 100 }}
            position="right"
          />
        </div>
        <div className="relative">
          <BenefitBox
            title="Maximum Value"
            content={recommendation.maximum_value_of_benefits}
            position="right"
          />
          <ConnectingArrow
            start={{ x: 0, y: 100 }}
            end={{ x: 100, y: 100 }}
            position="right"
          />
        </div>
      </div>
    </div>
  );
}