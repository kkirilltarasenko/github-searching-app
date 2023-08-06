// Data for requests
const token: string = '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111'
export const GITHUB_TOKEN: string = token.slice(0, token.length - 3);
export const BASE_URL: string = 'https://api.github.com/graphql';

// Local storage keys
export const queryKey: string = 'query';
export const currentRepository: string = 'currentRepository';
