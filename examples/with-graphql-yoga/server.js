const { GraphQLServer, PubSub } = require('graphql-yoga');
var records = [];
/* Create a GraphQL schema */
const typeDefs = `
 type Query {
   fetchRecords: [String]
 }
 type Mutation {
   createRecord(recordData: String!): String!
   updateRecord(recordIndex: Int!, recordName: String!): String
 }
 type Subscription {
  recordCreated: String!
 }
`;
const RECORD_CREATED = 'RECORD_CREATED';
/* Implement resolvers for the GraphQL schema operations */
const resolvers = {
  Query: {
    fetchRecords: () => records
  },
  Mutation: {
    createRecord: (_, { recordData }) => {
      records.push(recordData);
      pubsub.publish(RECORD_CREATED, {
        // Publish new beer to PubSub
        recordCreated: recordData
      });
      return `New Record Created: ${recordData}`;
    },
    updateRecord: (_, { recordIndex, recordName }) => {
      if (records[+recordIndex] === undefined) {
        throw Error(`Record Index Does not Exist`);
      }
      records[+recordIndex] = recordName;
      return `Record Updated to: ${records[recordIndex]}`;
    }
  },
  Subscription: {
    recordCreated: {
      subscribe: () => pubsub.asyncIterator(RECORD_CREATED)
    }
  }
};
/* Create a GraphQL server using GraphQLServer */
const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });
server.start(() => console.log('Server is running on localhost:4000'));
