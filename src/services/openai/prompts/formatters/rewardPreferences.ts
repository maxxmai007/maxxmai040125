const rewardLabels: Record<string, string> = {
  cashback: '💰 Cashback',
  travel: '✈️ Travel',
  shopping: '🛍️ Shopping',
  dining: '🍽️ Dining and Lifestyle'
};

export function formatRewardPreferences(goals: string[]): string[] {
  return goals.map(goal => `- ${rewardLabels[goal] || goal}`);
}