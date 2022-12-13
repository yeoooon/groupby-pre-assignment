const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

try {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('Connected to MongoDB');
} catch (error) {
  console.log(error);
}

const app = express();
const apolloServer = new ApolloServer({ typeDefs, resolvers });

await apolloServer.start();
apolloServer.applyMiddleware({ app });

const PORT = 5110;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
