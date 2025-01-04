import React from 'react';
import { getRandomCardImage } from '../../../utils/cardImages';
import type { CreditCardRecommendation } from '../../../services/openai/types';

interface CenteredCardProps {
  recommendation: CreditCardRecommendation;
}

export function CenteredCard({ recommendation }: CenteredCardProps) {
  const cardImage = React.useMemo(() => getRandomCardImage(), []);

  return (
    <div className="relative w-[400px] mx-auto">
      {/* Gold glow effect */}
      <div className="absolute inset-0 bg-gold-500/10 blur-3xl rounded-full card-glow" />
      
      {/* Card container */}
      <div className="relative rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-105">
        <img
          src={cardImage}
          alt={recommendation.card_name}
          className="w-full h-auto object-contain"
        />
        
        {/* Card details overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-medium text-white mb-2">
              {recommendation.card_name}
            </h3>
            <div className="flex justify-between text-sm text-gold-500/80">
              <span>Annual Fee: {recommendation.annual_fee}</span>
              <span>Up to {recommendation.maximum_value_of_benefits}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}