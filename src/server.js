const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const bodyParser = require('body-parser');
const schema = require('./schema');

const PORT = 3500;
const app = express();

const endpointURL = '/graphql';
app.use(endpointURL, bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL }));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
