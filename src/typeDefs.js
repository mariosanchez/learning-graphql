const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
  }
  type Style {
    name: String
  }
  type Glass {
    name: String!
  }
  type Brewery {
    name: String!
    location: Location
  }
  type Location {
    city: String
    country: Country!
  }
  type Country {
    id: String!
    name: String!
    icon: String
  }
  type DeleteMessage {
    id: ID!
    message: String
  }
  type Query {
    getBeers: [Beer]
    retrieveBeer(id: ID!): Beer
  }
  type Mutation {
    createBeer(name: String!, breweryName: String!): Beer
    updateBeer(id: ID!, name: String, styleName: String, breweryName: String): Beer
    deleteBeer(id: ID!): DeleteMessage
  }
  type Subscription {
    beerCreated: Beer
  }
`;

module.exports = typeDefs;
