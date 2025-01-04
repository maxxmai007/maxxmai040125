export class OpenAIError extends Error {
  constructor(
    message: string,
    public code: string,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'OpenAIError';
  }

  static fromError(error: unknown): OpenAIError {
    if (error instanceof OpenAIError) {
      return error;
    }

    const message = error instanceof Error ? error.message : 'Unknown OpenAI API error';
    return new OpenAIError(message, 'OPENAI_API_ERROR', error);
  }
}