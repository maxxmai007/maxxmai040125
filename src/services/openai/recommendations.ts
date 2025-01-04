import { openai } from './client';
import { generateSystemPrompt, generateUserPrompt } from './prompts';
import { parseOpenAIResponse } from './parsers/responseParser';
import { OpenAIError } from './errors/OpenAIError';
import type { UserProfile } from '../../types/profile';
import type { RecommendationsResponse } from './types';

export async function getRecommendations(profile: UserProfile): Promise<RecommendationsResponse> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: generateSystemPrompt() },
        { role: "user", content: generateUserPrompt(profile) }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new OpenAIError(
        'No recommendations received from OpenAI',
        'EMPTY_RESPONSE'
      );
    }

    return parseOpenAIResponse(content);
  } catch (error) {
    throw OpenAIError.fromError(error);
  }
}