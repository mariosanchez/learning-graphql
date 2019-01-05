# GraphQL mutation examples

You can try them running the server and accessing to `http://localhost:3500/graphql`(Playground).

You may need to add your authorization bearer to the HTTP Headers in Playground once you have done login:

```json
{
  "Authorization": "Bearer __YOUR_TOKEN__"
}
```

## signup

**Create a new user.**

```graphql
mutation {
  signup(email: "kevin@bacon.com", password: "123456", name: "Kevin") {
    token
    user {
      id
    }
  }
}
```

## login

**Authenticate with an existing user.**

```graphql
mutation {
  login(email: "kevin@bacon.com", password: "123456") {
    token
    user {
      id
    }
  }
}
```

## createBeer

**Create new basic beer (auth required).**

```graphql
mutation createNewBeer($name: String!, $description: String!) {
  createBeer(name: $name, description: $description) {
    ...beerInfo
  }
}

fragment beerInfo on Beer {
  id
  name
  description
}
```

```json
{
  "name": "Brutal IPA",
  "description": "Awesome beer!"
}
```

**Update an existing beer (auth and ownership required).**

```graphql
mutation updateBeer($id: ID!, $name: String!, $description: String!) {
  updateBeer(id: $id, name: $name, description: $description) {
    ...beerInfo
  }
}

fragment beerInfo on Beer {
  id
  name
  description
}
```

```json
{
  "id": "__BEER_ID__",
  "name": "Wild Sierra",
  "description": "Super tasty beer :)"
}
```

**Delete an existing beer (auth and ownership required).**

```graphql
mutation deleteBeer {
  deleteBeer(id: "__BEER_ID__") {
    id
    message
  }
}
```

If you do it more than once will result in an error.

**Publish an existing beer (auth and ownership required).**

```graphql
mutation {
  publishBeer(id: "__BEER_ID__") {
    name
    published
  }
}
```
