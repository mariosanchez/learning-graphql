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

**Update an existing beer.**

```graphql
mutation updateBeer($id: ID!, $name: String!, $styleName: String!, $breweryName: String!) {
  updateBeer(id: $id, name: $name, styleName: $styleName, breweryName: $breweryName) {
    ...beerInfo
  }
}

fragment beerInfo on Beer {
  id
  name
  style {
    name
  }
  brewery {
    name
  }
}
```

```json
{
  "id": 1,
  "name": "Wild Sierra",
  "styleName": "Saison",
  "breweryName": "Mammoth Brewing Company"
}
```

**Delete an existing beer.**

```graphql
mutation deleteBeer {
  deleteBeer(id: 1) {
    id
    message
  }
}
```

If you do it more than once will result in an error.
