const typeDefs = `
type Beer {
  id: ID!,
  name: String!,
  picture: String,
  brewery: Brewery,
  style: Style,
  glass: [Glass],
  ibu: Int,
  abv: Float,
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
},
type Country {
  id: String!
  name: String!
  icon: String
}
type Query {
  getBeers: [Beer]
  retrieveBeer(id: ID!): Beer
}
type Mutation {
  createBeer(name: String!, breweryName: String!): Beer
}
`;

module.exports = typeDefs;
