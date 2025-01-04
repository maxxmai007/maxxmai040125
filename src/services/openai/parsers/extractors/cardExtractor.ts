import { cleanMarkdown } from '../utils/cleanMarkdown';

export function extractCardName(content: string): string {
  const patterns = [
    // Direct JSON format
    /"card_name":\s*"([^"]+)"/,
    // Markdown formats
    /\*\*Card Name\*\*:\s*(.*?)(?:\n|$)/,
    /the\s+\*\*([^*]+?)\*\*\s+would be/i,
    /recommend the\s+\*\*([^*]+?)\*\*/i,
    /I recommend the\s+\*\*([^*]+?)\*\*/i,
    /Based on.*?,\s+the\s+\*\*([^*]+?)\*\*\s+would be/i
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match?.[1]) {
      return cleanMarkdown(match[1]);
    }
  }

  // If no match found, try to find any text between ** ** that looks like a card name
  const cardNameMatch = content.match(/\*\*([^*]+?(?:Card|credit card))\*\*/i);
  if (cardNameMatch?.[1]) {
    return cleanMarkdown(cardNameMatch[1]);
  }

  return 'Unknown Card';
}

export function extractAnnualFee(content: string): string {
  const patterns = [
    // Direct JSON format
    /"annual_fee":\s*"([^"]+)"/,
    // Markdown formats
    /\*\*Annual Fee\*\*:\s*(₹[\d,]+)/,
    /Annual Fee:\s*(₹[\d,]+)/,
    /annual fee of\s*(₹[\d,]+)/i
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match?.[1]) {
      return cleanMarkdown(match[1]);
    }
  }

  return 'Contact bank for details';
}

export function extractMaximumBenefits(content: string): string {
  const patterns = [
    // Direct JSON format
    /"maximum_value_of_benefits":\s*"([^"]+)"/,
    // Markdown formats
    /\*\*Maximum Value of Benefits\*\*:\s*(₹[\d,]+)/,
    /Maximum Value of Benefits:\s*(₹[\d,]+)/,
    /benefits worth\s*(₹[\d,]+)/i,
    /value up to\s*(₹[\d,]+)/i
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match?.[1]) {
      return cleanMarkdown(match[1]);
    }
  }

  return 'Benefits vary based on usage';
}

export function extractRealWorldBenefits(content: string): string {
  const patterns = [
    // Direct JSON format
    /"real_world_benefits":\s*"([^"]+)"/,
    // Markdown formats
    /\*\*(?:Gamified )?Real-World Benefits\*\*:?\s*(.*?)(?:\n\n|\n(?=[1-6]\.)|$)/s,
    /With the.*?(?:card|Card),\s+you\s+(?:can|could)\s+(.*?)(?=\n\n|\n\[|$)/s,
    /Imagine:(.*?)(?=\n\n|\n\[|$)/s,
    /🎉\s*(.*?)(?=\n\n|\n\[|$)/s,
    /Benefits:(.*?)(?=\n\n|\n\[|$)/s
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match?.[1]) {
      const benefits = cleanMarkdown(match[1]);
      // Ensure benefits include emojis if they're missing
      if (!/[✈️🛍️💰🎉🍽️]/.test(benefits)) {
        return `${benefits} ✨`;
      }
      return benefits;
    }
  }

  // Try to find any sentence with emojis that looks like benefits
  const emojiMatch = content.match(/[^.!?]*[✈️🛍️💰🎉🍽️][^.!?]*[.!?]/);
  if (emojiMatch?.[0]) {
    return cleanMarkdown(emojiMatch[0]);
  }

  return 'Exclusive rewards and benefits tailored to your spending habits ✨';
}

export function extractCardImage(content: string): string {
  const patterns = [
    // Direct JSON format
    /"card_image":\s*"([^"]+)"/,
    // Markdown image format
    /!\[.*?\]\((https?:\/\/[^\s)]+)\)/,
    // Direct URL in text
    /Card Image:\s*(https?:\/\/[^\s)]+)/
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return 'https://via.placeholder.com/300x200?text=Credit+Card';
}

export function extractApplyLink(content: string): string {
  const patterns = [
    // Direct JSON format
    /"apply_link":\s*"([^"]+)"/,
    // Markdown link format
    /\[(?:Apply|Apply Here|Click to Apply)[^\]]*\]\((https?:\/\/[^\s)]+)\)/,
    // Direct URL in text
    /Apply Here:\s*(https?:\/\/[^\s)]+)/
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return '#';
}