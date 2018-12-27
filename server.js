const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');
const beers = require('./data');
const typeDefs = require('./schema');

const resolvers = {
  Query: { getBeers: () => beers }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const PORT = 3500;
const app = express();

const endpointURL = '/graphql';
app.use(endpointURL, bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL }));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
