const express = require('express');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const PORT = 3500;
const GRAPHQL_PATH = '/graphql';

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: GRAPHQL_PATH });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
