import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    getExchangeRate(src:String!, tgt:String!): ExchangeInfo
  }

  type Mutation {
    postExchangeRate(info: InputUpdateExchangeInfo): ExchangeInfo
    deleteExchangeRate(info: InputDeleteExchangeInfo): ExchangeInfo
  }

  input InputUpdateExchangeInfo {
    src: String!
    tgt: String!
    rate: Float!
    date: String
  }

  input InputDeleteExchangeInfo {
    src: String!
    tgt: String!
    date: String!
  }

  directive @key(fields: String!) on OBJECT

  type ExchangeInfo @key(fields: "src, tgt") {
    src: String!
    tgt: String!
    rate: Float!
    date: String!
  }
`;

export default typeDefs;