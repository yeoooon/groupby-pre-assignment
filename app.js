import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolver.js';

async function startServer(typeDefs, resolvers) {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log('mongoDB가 성공적으로 연결되었습니다.');
  } catch (error) {
    console.log(error);
  }

  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });

  const PORT = 5110;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
}

startServer(typeDefs, resolvers);
