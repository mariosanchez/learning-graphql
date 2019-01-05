# With graphql-yoga

This example shows how create a GraphQL server using `graphql-yoga`, a easy to use and less boilerplate GraphQL server, with good performance an devX, whick is bases in some great libraries:

- 🚀 `express/apollo-server`.
- 📬 `graphql-subscriptions`/`subscription-transport-ws`.
- 🛠 `GraqhQL.js`/`graphql-tools`.
- ⛹️‍♀️ `graphql-playground`.

It also has cool features like built in error (i.e. when you try to update nonexisting data) handling and easy to implement subscriptions.

## Run this Example

In order to run this example execute the following command in this folder:

`npm i && npm run start`

Then access to this URL:

`http://localhost:4000`

Finally try to mutate and query data:

```graphql
mutation {
  createRecord(recordData: "pepe")
}
```

```graphql
query {
  fetchRecords
}
```

Also you can try subscriptions:

```graphql
subscription {
  recordCreated
}
```
