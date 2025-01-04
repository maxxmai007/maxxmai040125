import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecommendations } from '../services/openai/recommendations';
import { useRecommendationsStore } from '../store/useRecommendationsStore';
import { OpenAIError } from '../services/openai/errors/OpenAIError';
import { ParserError } from '../services/openai/errors/ParserError';
import type { UserProfile } from '../types/profile';

export function useOpenAI() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setRecommendations } = useRecommendationsStore();

  const handleGetRecommendations = async (profile: UserProfile) => {
    try {
      // Check age eligibility first
      if (profile.basicDetails.age === 'below_18') {
        setError('Sorry, you must be 18 or older to apply for a credit card. Please check back when you are eligible.');
        return;
      }

      setIsLoading(true);
      setError(null);

      const result = await getRecommendations(profile);
      if (!result) {
        throw new Error('No recommendations received');
      }

      setRecommendations(JSON.stringify(result));
      navigate('/recommendations');
    } catch (err) {
      let errorMessage = 'Failed to get recommendations';
      
      if (err instanceof OpenAIError || err instanceof ParserError) {
        errorMessage = err.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      console.error('Error getting recommendations:', err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getRecommendations: handleGetRecommendations,
    isLoading,
    error
  };
}