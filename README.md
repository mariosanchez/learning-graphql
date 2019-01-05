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

## Run Project

Install dependencies:

`npm i`

Initialize docker environment for the database and Prisma server:

`npm run docker:start`

Deploy Prisma server:

`npm run prisma:deploy`

Run the API server:

`npm run start`
