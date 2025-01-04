export function parseCardName(content: string): string {
  // Extract card name from OpenAI response
  const cardNameMatch = content.match(/\*\*Card Name\*\*:\s*(.*?)(?:\n|$)/);
  if (!cardNameMatch) return '';

  return cardNameMatch[1].trim();
}