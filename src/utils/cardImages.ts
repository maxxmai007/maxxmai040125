import { getCardImagePath } from './cards/imageMapper';

export function getCardImage(cardName: string): string {
  if (!cardName) {
    console.warn('No card name provided for image lookup');
    return '/src/assets/images/cards/default-card.png';
  }

  return getCardImagePath(cardName);
}