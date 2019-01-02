# GraphQL subscription examples

You can try them running the server and accessing to `http://localhost:3500/graphql` (Playground).

## Subscription to beerCreated topic

**First subscribe to the topic in one tab.**

```graphql
subscription {
  beerCreated {
    id
    name
  }
}
```

**Then perform a simple createBeer mutation.**

```graphql
mutation createNewBeer {
  createBeer(name: "Brutal IPA", breweryName: "ROGUE") {
    id
    name
    brewery {
      name
    }
  }
}
```

**Then you will see the output in the first subscription tab.**
