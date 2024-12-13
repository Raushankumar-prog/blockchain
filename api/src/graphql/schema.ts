import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './typed.js';
import { resolvers } from '../controllers/tradeControllers.js';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
