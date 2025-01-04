import React, { useMemo } from 'react';
import { ExternalLink } from 'lucide-react';
import type { CreditCardRecommendation } from '../../services/openai/types';
import { getRandomCardImage } from '../../utils/cardImages';

interface RecommendationCardProps extends CreditCardRecommendation {}

export function RecommendationCard({
  card_name,
  card_image,
  annual_fee,
  maximum_value_of_benefits,
  real_world_benefits,
  apply_link
}: RecommendationCardProps) {
  // Generate a random image URL when the component mounts
  const displayImage = useMemo(() => {
    return card_image?.includes('example.com') ? getRandomCardImage() : card_image;
  }, [card_image]); // Regenerate when card_image changes

  return (
    <div className="bg-dark-800/50 border border-gold-500/10 rounded-lg overflow-hidden hover:border-gold-500/20 transition-all duration-300">
      <div className="aspect-[16/10] relative bg-gradient-to-br from-gold-500/5 to-dark-900/50">
        <img
          src={displayImage}
          alt={card_name}
          className="absolute inset-0 w-full h-full object-contain p-6"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-medium text-white">{card_name}</h3>
          {apply_link && (
            <a
              href={apply_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:text-gold-600 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gold-500/60 mb-1">Annual Fee</p>
            <p className="text-white font-medium">{annual_fee}</p>
          </div>
          <div>
            <p className="text-sm text-gold-500/60 mb-1">Maximum Benefits</p>
            <p className="text-white font-medium">{maximum_value_of_benefits}</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gold-500/60 mb-2">Real-World Benefits</p>
          <p className="text-white text-sm leading-relaxed">{real_world_benefits}</p>
        </div>
      </div>
    </div>
  );
}