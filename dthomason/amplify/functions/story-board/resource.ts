import { defineFunction } from '@aws-amplify/backend';

export const storyBoard = defineFunction({
  name: 'story-board',
  entry: './handler.ts',
  environment: {
    MEDIUM_RSS_URL: 'https://medium.com/@yourusername/feed',
    // Add other RSS URLs as needed
  },
  timeoutSeconds: 300, // 5 minutes
});