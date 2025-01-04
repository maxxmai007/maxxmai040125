import type { CreditCardRecommendation } from '../services/openai/types';

export function parseOpenAIResponse(content: string): {
  recommendations: CreditCardRecommendation[];
} {
  try {
    console.log('Raw OpenAI response:', content);
    
    // Extract JSON from markdown if needed
    let jsonContent = content;
    if (content.includes('```json')) {
      jsonContent = content.split('```json')[1].split('```')[0].trim();
    }
    
    // Parse the JSON content
    const parsed = JSON.parse(jsonContent);
    
    // Transform into expected format
    const recommendation: CreditCardRecommendation = {
      card_name: parsed.card_name || 'Unnamed Card',
      annual_fee: parsed.annual_fee || 'N/A',
      maximum_value_of_benefits: parsed.maximum_value_of_benefits || 'N/A',
      real_world_benefits: parsed.real_world_benefits || 'No benefits information available',
      card_image: parsed.card_image || 'https://via.placeholder.com/300x200?text=Credit+Card',
      apply_link: parsed.apply_link || '#'
    };
    
    return {
      recommendations: [recommendation]
    };
  } catch (error) {
    console.error('Error parsing OpenAI response:', error);
    throw new Error('Failed to parse recommendation data');
  }
}