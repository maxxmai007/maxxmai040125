import { ParserError } from '../errors/ParserError';
import type { CreditCardRecommendation } from '../types';
import { parseCardImageFromResponse } from './cardImageParser';
import {
  extractCardName,
  extractAnnualFee,
  extractMaximumBenefits,
  extractRealWorldBenefits,
  extractApplyLink
} from './extractors/cardExtractor';

interface ParsedResponse {
  recommendations: CreditCardRecommendation[];
}

export function parseOpenAIResponse(content: string): ParsedResponse {
  try {
    console.log('Parsing OpenAI response:', content);

    // Get card image based on card name
    const cardImage = parseCardImageFromResponse(content);

    const recommendation: CreditCardRecommendation = {
      card_name: extractCardName(content),
      annual_fee: extractAnnualFee(content),
      maximum_value_of_benefits: extractMaximumBenefits(content),
      real_world_benefits: extractRealWorldBenefits(content),
      card_image: cardImage,
      apply_link: extractApplyLink(content)
    };

    console.log('Extracted recommendation:', recommendation);

    return { recommendations: [recommendation] };
  } catch (error) {
    console.error('Error parsing OpenAI response:', error);
    throw ParserError.fromError(error);
  }
}