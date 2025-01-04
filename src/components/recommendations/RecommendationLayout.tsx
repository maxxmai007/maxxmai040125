import React from 'react';
import { Logo } from '../layout/Logo';
import { BackButton } from '../ui/BackButton';
import { CardSection } from './card/CardSection';
import { ApplyButton } from './ApplyButton';
import type { CreditCardRecommendation } from '../../services/openai/types';

interface RecommendationLayoutProps {
  recommendation: CreditCardRecommendation;
}

export function RecommendationLayout({ recommendation }: RecommendationLayoutProps) {
  const benefits = React.useMemo(() => [
    {
      label: 'Annual Fee',
      value: recommendation.annual_fee,
      position: 'right' as const,
      startY: 120,
      endY: 100
    },
    {
      label: 'Maximum Value',
      value: recommendation.maximum_value_of_benefits,
      position: 'right' as const,
      startY: 180,
      endY: 200
    },
    {
      label: 'Benefits',
      value: recommendation.real_world_benefits,
      position: 'left' as const,
      startY: 150,
      endY: 150
    }
  ], [recommendation]);

  return (
    <div className="min-h-screen bg-dark-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <BackButton className="mb-8" />
        
        <div className="text-center mb-16">
          <Logo className="mx-auto" />
          <h2 className="mt-6 text-3xl font-display tracking-tight text-white">
            Your Perfect Match
          </h2>
          <p className="mt-2 text-sm text-gold-500/80">
            Tailored to your spending habits and preferences
          </p>
        </div>

        <div className="flex justify-center items-center min-h-[600px]">
          <CardSection
            name={recommendation.card_name}
            benefits={benefits}
          />
        </div>

        <div className="mt-16 text-center">
          <ApplyButton href={recommendation.apply_link} />
        </div>
      </div>
    </div>
  );
}