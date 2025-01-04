import React from 'react';
import { getCardImage } from '../../../utils/cardImages';
import { DEFAULT_CARD_IMAGE } from '../../../utils/cards/imageMapper';

interface CardDisplayProps {
  name: string;
  className?: string;
}

export function CardDisplay({ name, className }: CardDisplayProps) {
  const [imageSrc, setImageSrc] = React.useState(() => getCardImage(name));

  const handleImageError = () => {
    console.warn(`Failed to load image for card: ${name}`);
    setImageSrc(DEFAULT_CARD_IMAGE);
  };

  return (
    <div className={className}>
      {/* Card glow effect */}
      <div className="absolute inset-0 bg-gold-500/10 blur-3xl rounded-full card-glow" />
      
      {/* Card image */}
      <div className="relative rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-105">
        <img
          src={imageSrc}
          alt={name}
          onError={handleImageError}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Card name */}
      <h3 className="text-2xl font-medium text-white text-center mt-4">
        {name}
      </h3>
    </div>
  );
}