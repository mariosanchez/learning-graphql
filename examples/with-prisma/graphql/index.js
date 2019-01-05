const { prisma } = require('../generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');

const resolvers = {
  Query: {
    beersOnStock(parent, args, context) {
      return context.prisma.beers({ where: { onStock: true } });
    },
    beer(parent, args, context) {
      return context.prisma.beer({ id: args.beerId });
    },
    beersByUser(parent, args, context) {
      return context.prisma
        .user({
          id: args.userId
        })
        .beers();
    }
  },
  Mutation: {
    createDraft(parent, args, context) {
      return context.prisma.createBeer({
        name: args.name,
        author: {
          connect: { id: args.userId }
        }
      });
    },
    reStock(parent, args, context) {
      return context.prisma.updateBeer({
        where: { id: args.beerId },
        data: { onStock: true }
      });
    },
    createUser(parent, args, context) {
      return context.prisma.createUser({ name: args.name });
    }
  },
  User: {
    beers(parent, args, context) {
      return context.prisma
        .user({
          id: parent.id
        })
        .beers();
    }
  },
  Beer: {
    author(parent, args, context) {
      return context.prisma
        .beer({
          id: parent.id
        })
        .author();
    }
  }
};

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  }
});
server.start(() => console.log('Server is running on http://localhost:4000'));
