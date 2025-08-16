import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Article: a
      .model({
        title: a.string().required(),
        url: a.url().required(),
        excerpt: a.string(),
        content: a.string(),
        publishedDate: a.datetime().required(),
        source: a.string().required(),
        imageUrl: a.url(),
        tags: a.string().array(),
        author: a.string(),
        readTime: a.integer(),
        featured: a.boolean().default(false),
      })
      .authorization(allow => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});