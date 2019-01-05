const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String
    beersReviewed: [Beer!]!
  }

  type Beer {
    id: ID!
    name: String!
    picture: String
    brewery: Brewery
    style: Style
    glass: [Glass]
    ibu: Int
    abv: Float
    description: String
    published: Boolean!
    reviewer: User!
  }

  type Style {
    id: ID!
    name: String!
  }

  type Glass {
    id: ID!
    name: String!
  }

  type Brewery {
    id: ID!
    name: String!
    location: Location
  }

  type Location {
    id: ID!
    city: String
    country: Country!
  }

  type Country {
    id: ID!
    countryCode: String!
    name: String!
    icon: String
  }

  type DeleteMessage {
    id: ID!
    message: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    me: User
    getBeers: [Beer!]!
    retrieveBeer(id: ID!): Beer
    filterBeers(searchString: String): [Beer!]!
  }

  type Mutation {
    signup(email: String!, password: String!, name: String): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createBeer(name: String!, description: String!): Beer
    updateBeer(id: ID!, name: String, description: String): Beer
    deleteBeer(id: ID!): DeleteMessage
    publishBeer(id: ID!): Beer
  }

  type Subscription {
    beerCreated: Beer
  }
`;

module.exports = typeDefs;
