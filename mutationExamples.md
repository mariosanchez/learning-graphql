# GraphQL mutation examples

You can try them running the server and accessing to `http://localhost:3500/graphiql`.

## createBeer

**Create new basic beer.**

```graphql
mutation createNewBeer($name: String!, $breweryName: String!) {
  createBeer(name: $name, breweryName: $breweryName) {
    ...beerInfo
  }
}

fragment beerInfo on Beer {
  id
  name
  brewery {
    name
  }
}
```

```json
{
  "name": "Brutal IPA",
  "breweryName": "ROGUE"
}
```
