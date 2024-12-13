import Prisma from "../utils/prismaClient.js";

export const resolvers = {
  Query: {
    getCryptocurrency: async (_: any, { symbol }: { symbol: string }) => {
      return Prisma.cryptocurrency.findUnique({
        where: { symbol },
        include: { trades: true },
      });
    },
    getTradesBySymbol: async (_: any, { symbol }: { symbol: string }) => {
      return Prisma.trade.findMany({
        where: { cryptocurrencyId: symbol },
      });
    },
  },
  Mutation: {
    addTrade: async (
      _: any,
      { symbol, event, timestamp, price, quantity, maker, market }: any
    ) => {
      return Prisma.trade.create({
        data: {
          event,
          timestamp,
          price,
          quantity,
          maker,
          market,
          cryptocurrency: {
            connect: { symbol },
          },
        },
      });
    },
  },
};
