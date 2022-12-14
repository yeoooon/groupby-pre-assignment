import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolver.js';

async function startServer(typeDefs, resolvers) {
  try {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_URL);
    console.log('mongoDB가 성공적으로 연결되었습니다.');
  } catch (error) {
    console.log(error);
  }

  const app = express();

  const PORT = 5110;

  app.use('/graphql', graphqlHTTP({
    schema: typeDefs,
    rootValue: resolvers,
  }));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
}

startServer(typeDefs, resolvers);