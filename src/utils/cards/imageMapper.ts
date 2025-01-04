import { logger } from '../logger';

// Map bank names to folder names
const bankMap: Record<string, string> = {
  'american express': 'amex',
  'amex': 'amex',
  'axis bank': 'axis',
  'axis': 'axis',
  'standard chartered': 'standard',
  'sc': 'standard',
  'yes bank': 'yes',
  'citi': 'citi',
  'citibank': 'citi',
  'hdfc': 'hdfc',
  'hdfc bank': 'hdfc',
  'icici': 'icici',
  'icici bank': 'icici',
  'sbi': 'sbi',
  'sbi card': 'sbi',
  'hsbc': 'hsbc'
};

// Map card variations to exact filenames that exist in assets
const cardFileMap: Record<string, string> = {
  // HDFC Cards
  'infinia': 'Infinia',
  'diners club black card': 'Bank_Diners_Club_Black_Card',
  'diners club privilege': 'Bank_Diners_Club_Privilege',
  'regalia': 'Bank_Regalia_Card',
  'millennia': 'Millennia',
  'moneyback': 'Moneyback',
  'first citizen': 'FirstCitizen',
  'diners club rewardz': 'Diners_Club_Rewardz',

  // Axis Cards
  'ace': 'Ace',
  'neo': 'Neo',
  'magnus': 'Magnus',
  'flipkart': 'Flipkart',
  'my zone': 'My_Zone',
  'atlas': 'Atlas',
  'vistara infinite': 'Bank_Vistara_Infinite',

  // ICICI Cards
  'amazon pay': 'Amazon_Pay_ICICI',
  'emeralde': 'Emeralde_Private_Metal',
  'coral': 'Coral',
  'sapphiro': 'Sapphiro',
  'platinum chip': 'Platinum_Chip',
  'rubyx': 'Rubyx',

  // AMEX Cards
  'platinum': 'Platinum_Card',
  'platinum charge': 'Platinum_Charge_Card',
  'gold': 'Gold',
  'platinum reserve': 'Platinum_Reserve',
  'membership rewards': 'Express_Membership',

  // SBI Cards
  'elite': 'Elite',
  'prime': 'Prime',
  'aurum': 'Aurum',
  'simplyclick': 'Simplyclick',
  'simplysave': 'Simplysave',

  // Citi Cards
  'prestige': 'Prestige',
  'prestige card': 'Prestige_Card',
  'premiermiles card': 'PremierMiles_Card',
  'cash back': 'Cash_Back',
  'rewards': 'Rewards',
  'ultimate': 'Ultimate',

  // HSBC Cards
  'smart value': 'Smart_Value',
  'hsbc platinum': 'Platinum',
  'cashback': 'Cashback',

  // Standard Chartered Cards
  'manhattan platinum': 'Manhattan_Platinum',
  'platinum rewards': 'Platinum_Rewards',
  'emirates world': 'Emirates_World',
  'super value': 'Super_Value',

  // YES Bank Cards
  'prosperity rewards plus': 'Prosperity_Rewards'
};

export const DEFAULT_CARD_IMAGE = '/src/assets/images/cards/default-card.png';

export function getCardImagePath(cardName: string): string {
  try {
    if (!cardName) {
      logger.warn('No card name provided');
      console.warn('❌ No card name provided, using default image');
      return DEFAULT_CARD_IMAGE;
    }

    console.log('🔍 Processing card name:', cardName);

    // Normalize the input
    const normalizedName = cardName.toLowerCase().replace(/\s+credit\s+card$/i, '');
    console.log('📝 Normalized name:', normalizedName);
    
    // Extract bank and card type
    const parts = normalizedName.split(' ');
    let bankName = parts[0];
    let cardType = parts.slice(1).join(' ');

    // Check for multi-word bank names
    const possibleBank = parts.slice(0, 2).join(' ');
    if (bankMap[possibleBank]) {
      bankName = bankMap[possibleBank];
      cardType = parts.slice(2).join(' ');
    } else {
      bankName = bankMap[bankName] || bankName;
    }

    console.log('🏦 Resolved bank name:', bankName);
    console.log('💳 Card type:', cardType);

    // Get the exact filename from our map
    const fileName = cardFileMap[cardType];
    if (!fileName) {
      logger.warn('No matching filename found for card type:', cardType);
      console.warn('⚠️ No matching filename found for card type:', cardType);
      return DEFAULT_CARD_IMAGE;
    }

    console.log('📄 Mapped filename:', fileName);

    const imagePath = `/src/assets/images/cards/${bankName}/${fileName}.png`;
    console.log('🎯 Final image path:', imagePath);
    
    return imagePath;
  } catch (error) {
    logger.error('Error in getCardImagePath:', error);
    console.error('❌ Error resolving image path:', error);
    return DEFAULT_CARD_IMAGE;
  }
}