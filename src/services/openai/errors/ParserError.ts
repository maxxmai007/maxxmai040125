export class ParserError extends Error {
  constructor(
    message: string,
    public code: string,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'ParserError';
  }

  static fromError(error: unknown): ParserError {
    if (error instanceof ParserError) {
      return error;
    }

    const message = error instanceof Error ? error.message : 'Failed to parse recommendation data';
    return new ParserError(message, 'PARSER_ERROR', error);
  }
}