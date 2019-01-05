# learning-graphql

Exercises for learning GraphQL

## Docs

- [Query examples](docs/queryExamples.md)
- [Mutation examples](docs/mutationExamples.md)
- [Subscription examples](docs/subscriptionExamples.md)

## Examples

- [With GraphQL.js](examples/with-graphqljs)
- [With graphql-yoga](examples/with-graphql-yoga)
- [With Graphcool Framework](examples/with-graphcool)
- [With Prisma](examples/with-prisma)

### Disclaimer

Since this examples are for a learning purpose you are not encourage to use them as a base of any production service as they might have potential security vulnerabilities.

## Branches

- [Understanding GraphQL concepts](https://github.com/mariosanchez/learning-graphql/tree/understanding-graphql-concepts)
- [Querying real time data](https://github.com/mariosanchez/learning-graphql/tree/querying-real-time-data)
- [Integrating GraphQL with server-side applications using Apollo Client](https://github.com/mariosanchez/learning-graphql/tree/integrating-graphql-using-apollo-client)

## Requirements

This project may only be run with modern Chrome v71+ and Node.js v10+.

## Run Project

### Server side

Access to server folder:

`cd server`

Install dependencies:

`npm i`

Initialize docker environment for the database and Prisma server:

`npm run docker:start`

Deploy Prisma server:

`npm run prisma:deploy`

Run the API server:

`npm run start`

Access to the playground:

`http://localhost:3500/graphql`

#### Troubleshooting

- If you get a `PROJECT NOT FOUND: default@default` error you might need to redeploy prisma.

### Client side

Access to client folder:

`cd client`

Install dependencies:

`npm i`

Run the client:

`npm run start`

Access to the app:

`http://localhost:1234`

## Resources

### Books

- Beginning GraphQL book by Brian Kimokoti

### Documentations and Tutorials

- [How to GraphQL Tutorials](https://www.howtographql.com)
- [Apollo Server Docs](https://www.apollographql.com/docs/apollo-server/)
- [Prisma Docs](https://www.prisma.io/docs)

### Code

- [Prisma Examples](https://github.com/prisma/prisma-examples)

### Articles

- [Apollo GraphQL subscriptions](https://medium.com/@s4y.solutions/apollo-graphql-subscriptions-7ec0cfb7d6a5)
