import { ApolloServer } from 'apollo-server';
import express from 'express';
import { setupKafkaProducer } from './modules/producers.js';
import { setupKafkaConsumer } from './modules/consumers/frontedConsumer.js';
import { schema } from './graphql/schema.js';

setupKafkaProducer();
setupKafkaConsumer();


const app = express();


const server = new ApolloServer({ schema});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});