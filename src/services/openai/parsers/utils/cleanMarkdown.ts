export function cleanMarkdown(text: string): string {
  return text
    .replace(/\*\*/g, '') // Remove bold markers
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim(); // Remove leading/trailing spaces
}