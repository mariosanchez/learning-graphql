const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`type Query { hello: String }`);
const rootResolver = { hello: () => 'Hello world!' };

const PORT = 4000;
const app = express();

app.use(
  '/',
  graphqlHTTP({
    schema,
    rootValue: rootResolver,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
