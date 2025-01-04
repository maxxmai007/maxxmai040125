export function extractJSONFromMarkdown(content: string): string {
  // If content is already JSON, return as is
  try {
    JSON.parse(content);
    return content;
  } catch (e) {
    // Continue with markdown parsing
  }

  // Try to find JSON code block
  const jsonBlockMatch = content.match(/```(?:json)?\n([\s\S]*?)\n```/);
  if (jsonBlockMatch?.[1]) {
    return jsonBlockMatch[1].trim();
  }

  // Extract structured data from markdown
  const cardDetails = {
    card_name: content.match(/\*\*Card Name\*\*:\s*(.*?)(?:\n|$)/)?.[1]?.trim(),
    annual_fee: content.match(/\*\*Annual Fee\*\*:\s*(.*?)(?:\n|$)/)?.[1]?.trim(),
    maximum_value_of_benefits: content.match(/\*\*Maximum Value of Benefits\*\*:\s*(.*?)(?:\n|$)/)?.[1]?.trim(),
    real_world_benefits: content.match(/\*\*Gamified Real-world Benefits\*\*:\s*(.*?)(?:\n|$)/)?.[1]?.trim() 
      || content.match(/With this card.*?:\s*(.*?)(?:\n|$)/)?.[1]?.trim(),
    card_image: content.match(/!\[.*?\]\((.*?)\)/)?.[1]?.trim(),
    apply_link: content.match(/\[Apply Here\]\((.*?)\)/)?.[1]?.trim()
  };

  // Validate extracted data
  if (!cardDetails.card_name) {
    throw new Error('Could not extract card name from response');
  }

  return JSON.stringify(cardDetails);
}