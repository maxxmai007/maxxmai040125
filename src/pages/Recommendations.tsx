import React from 'react';
import { Logo } from '../components/layout/Logo';
import { LoadingAnimation } from '../components/recommendations/LoadingAnimation';
import { RecommendationLayout } from '../components/recommendations/RecommendationLayout';
import { useRecommendationsStore } from '../store/useRecommendationsStore';
import { parseRecommendations } from '../utils/parseRecommendations';

export function Recommendations() {
  const { recommendations, isLoading, error } = useRecommendationsStore();
  const parsedData = recommendations ? parseRecommendations(recommendations) : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl px-4">
          <div className="text-center mb-8">
            <Logo className="mx-auto" />
            <h2 className="mt-6 text-3xl font-display tracking-tight text-white">
              Finding Your Perfect Card
            </h2>
            <p className="mt-2 text-sm text-gold-500/80">
              Our AI is analyzing thousands of credit cards to find your best match
            </p>
          </div>
          <LoadingAnimation />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center text-red-500">
          {error}
        </div>
      </div>
    );
  }

  if (!parsedData || parsedData.recommendations.length === 0) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center text-gold-500/60">
          No recommendations available. Please try again.
        </div>
      </div>
    );
  }

  // Use the first recommendation for our new layout
  return <RecommendationLayout recommendation={parsedData.recommendations[0]} />;
}