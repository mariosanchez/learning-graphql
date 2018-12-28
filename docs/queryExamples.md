# GraphQL query examples

You can try them running the server and accessing to `http://localhost:3500/graphiql`.

## getBeers

**Get just the name of all beers.**

```graphql
query {
  getBeers {
    name
  }
}
```

## retrieveBeer

**Retrieve the name of the beer with the matching id.**

```graphql
query {
  retrieveBeer(id: 1) {
    name
  }
}
```

**Retrieve the name of the beer with the matching id using variables.**

```graphql
query($beerID: ID!) {
  retrieveBeer(id: $beerID) {
    name
  }
}
```

```json
{
  "beerID": 3
}
```

**Retrieve the name of the beers with the matching ids using aliases.**

Useful for retrieve multiple specific beers

```graphql
query($beerID1: ID!, $beerID2: ID!) {
  beer1: retrieveBeer(id: $beerID1) {
    name
  }
  beer2: retrieveBeer(id: $beerID2) {
    name
  }
}
```

```json
{
  "beerID1": 3,
  "beerID2": 1
}
```

**Using fragments.**

For avoid repeating fields

```graphql
query($beerID1: ID!, $beerID2: ID!) {
  beer1: retrieveBeer(id: $beerID1) {
    ...beerInfo
  }
  beer2: retrieveBeer(id: $beerID2) {
    ...beerInfo
  }
}

fragment beerInfo on Beer {
  name
  description
}
```

```json
{
  "beerID1": 3,
  "beerID2": 1
}
```

**Using inline fragments.**

Useful when you have different types possible (not very suitable in this example)

```graphql
query($beerID: ID!) {
  retrieveBeer(id: $beerID) {
    ... on Beer {
      abv
      ibu
    }
  }
}
```

```json
{
  "beerID": 3
}
```

**Using directives `@skip` and `@include`.**

```graphql
query($skipDescription: Boolean!, $includeCity: Boolean!) {
  retrieveBeer(id: 1) {
    name
    description @skip(if: $skipDescription)
    brewery {
      location {
        city @include(if: $includeCity)
      }
    }
  }
}
```

```json
{
  "skipDescription": true,
  "includeCity": true
}
```
