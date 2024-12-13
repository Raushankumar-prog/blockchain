import { gql } from 'apollo-server';

export  const typeDefs = gql`
  scalar BigInt
  scalar Decimal

  type Cryptocurrency {
    symbol: String!
    trades: [Trade!]!
  }

  type Trade {
    id: String!
    event: String!
    timestamp: BigInt!
    price: Decimal!
    quantity: Decimal!
    maker: Boolean!
    market: Boolean!
    cryptocurrency: Cryptocurrency!
  }

  type Query {
    getCryptocurrency(symbol: String!): Cryptocurrency
    getTradesBySymbol(symbol: String!): [Trade!]!
  }

  type Mutation {
    addTrade(
      symbol: String!
      event: String!
      timestamp: BigInt!
      price: Decimal!
      quantity: Decimal!
      maker: Boolean!
      market: Boolean!
    ): Trade
  }
`;
