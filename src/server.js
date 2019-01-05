const express = require('express');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');
const { applyMiddleware } = require('graphql-middleware');
const { makeExecutableSchema } = require('graphql-tools');
const { Prisma } = require('./generated/prisma-client');
const { permissions } = require('./permission');
const { resolvers } = require('./resolvers');
const typeDefs = require('./typeDefs');
const prismaTypeDefs = require('./generated/prisma-client/prisma-schema');

const PORT = 3500;
const GRAPHQL_PATH = '/graphql';
const PRISMA_HOST = 'http://localhost:4466';

const prisma = new Prisma({
  endpoint: PRISMA_HOST,
  // secret: 'pepe_viyuela_is_da_boss',
  debug: true
});

const executableSchema = makeExecutableSchema({ typeDefs, resolvers });
const schema = applyMiddleware(executableSchema, permissions);

const app = express();
const server = new ApolloServer({
  schema,
  context: req => ({
    ...req,
    prisma
  })
});

server.applyMiddleware({ app, path: GRAPHQL_PATH });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});
