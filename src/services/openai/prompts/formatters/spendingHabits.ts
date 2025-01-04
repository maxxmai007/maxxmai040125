import { formatCurrency } from '../../../../utils/formatters';

export function formatSpendingHabits(habits: {
  groceries: string;
  dining: string;
  shopping: string;
  travel: string;
}): string[] {
  return [
    `- Groceries and Food: ${formatCurrency(habits.groceries)}`,
    `- Entertainment and Leisure: ${formatCurrency(habits.dining)}`,
    `- Shopping and Retail: ${formatCurrency(habits.shopping)}`,
    `- Travel and Transportation: ${formatCurrency(habits.travel)}`
  ];
}