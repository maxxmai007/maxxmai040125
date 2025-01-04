import React from 'react';
import { getCardImage } from '../../../utils/cardImages';
import type { CreditCardRecommendation } from '../../../services/openai/types';

interface RecommendationCardProps {
  recommendation: CreditCardRecommendation;
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const displayImage = React.useMemo(() => 
    getCardImage(recommendation.card_name), 
    [recommendation.card_name]
  );

  return (
    <div className="relative group">
      {/* Card container with hover effect */}
      <div className="relative rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-105">
        <img
          src={displayImage}
          alt={recommendation.card_name}
          className="w-full h-auto object-contain"
        />
        
        {/* Overlay with card details */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
            <h3 className="text-2xl font-medium text-white">
              {recommendation.card_name}
            </h3>
            <div className="flex justify-between text-sm">
              <span className="text-gold-500/80">
                Annual Fee: {recommendation.annual_fee}
              </span>
              <span className="text-gold-500/80">
                Up to {recommendation.maximum_value_of_benefits} in benefits
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}