export function formatAgeGroup(age: string): string {
  // Already in correct format (e.g. "35-44")
  return age;
}

export function formatIncome(income: string): string {
  // Income is already in the correct format (e.g. "Above 25 lakh")
  return income;
}

export function formatBasicDetails(details: {
  age: string;
  income: string;
  occupation: string;
  city: string;
}): string[] {
  return [
    `- Age Group: ${formatAgeGroup(details.age)}`,
    `- Annual Income: ${formatIncome(details.income)}`,
    `- Occupation: ${details.occupation}`,
    `- City: ${details.city}`
  ];
}