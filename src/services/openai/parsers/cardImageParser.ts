import { getCardImagePath } from '../../../utils/cards/imageMapper';
import { parseCardName } from '../../../utils/cards/nameParser';

export function parseCardImageFromResponse(content: string): string {
  console.log('Parsing card image from response:', content);
  
  const cardName = parseCardName(content);
  console.log('Extracted card name:', cardName);
  
  if (!cardName) {
    console.warn('No card name found in response');
    return '/src/assets/images/cards/default-card.png';
  }
  
  const imagePath = getCardImagePath(cardName);
  console.log('Resolved image path:', imagePath);
  
  return imagePath;
}