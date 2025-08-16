import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storyBoard } from './functions/story-board/resource';

export const backend = defineBackend({
  auth,
  data,
  storyBoard,
});