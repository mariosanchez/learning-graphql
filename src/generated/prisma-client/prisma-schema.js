module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBeer {
  count: Int!
}

type AggregateBrewery {
  count: Int!
}

type AggregateCountry {
  count: Int!
}

type AggregateGlass {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateStyle {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Beer {
  id: ID!
  name: String!
  picture: String
  brewery: Brewery
  style: Style
  glass(where: GlassWhereInput, orderBy: GlassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Glass!]
  ibu: Int
  abv: Float
  description: String
  published: Boolean!
  reviewer: User!
}

type BeerConnection {
  pageInfo: PageInfo!
  edges: [BeerEdge]!
  aggregate: AggregateBeer!
}

input BeerCreateInput {
  name: String!
  picture: String
  brewery: BreweryCreateOneInput
  style: StyleCreateOneInput
  glass: GlassCreateManyInput
  ibu: Int
  abv: Float
  description: String
  published: Boolean
  reviewer: UserCreateOneWithoutBeersReviewedInput!
}

input BeerCreateManyWithoutReviewerInput {
  create: [BeerCreateWithoutReviewerInput!]
  connect: [BeerWhereUniqueInput!]
}

input BeerCreateWithoutReviewerInput {
  name: String!
  picture: String
  brewery: BreweryCreateOneInput
  style: StyleCreateOneInput
  glass: GlassCreateManyInput
  ibu: Int
  abv: Float
  description: String
  published: Boolean
}

type BeerEdge {
  node: Beer!
  cursor: String!
}

enum BeerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  picture_ASC
  picture_DESC
  ibu_ASC
  ibu_DESC
  abv_ASC
  abv_DESC
  description_ASC
  description_DESC
  published_ASC
  published_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerPreviousValues {
  id: ID!
  name: String!
  picture: String
  ibu: Int
  abv: Float
  description: String
  published: Boolean!
}

input BeerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  picture: String
  picture_not: String
  picture_in: [String!]
  picture_not_in: [String!]
  picture_lt: String
  picture_lte: String
  picture_gt: String
  picture_gte: String
  picture_contains: String
  picture_not_contains: String
  picture_starts_with: String
  picture_not_starts_with: String
  picture_ends_with: String
  picture_not_ends_with: String
  ibu: Int
  ibu_not: Int
  ibu_in: [Int!]
  ibu_not_in: [Int!]
  ibu_lt: Int
  ibu_lte: Int
  ibu_gt: Int
  ibu_gte: Int
  abv: Float
  abv_not: Float
  abv_in: [Float!]
  abv_not_in: [Float!]
  abv_lt: Float
  abv_lte: Float
  abv_gt: Float
  abv_gte: Float
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  published: Boolean
  published_not: Boolean
  AND: [BeerScalarWhereInput!]
  OR: [BeerScalarWhereInput!]
  NOT: [BeerScalarWhereInput!]
}

type BeerSubscriptionPayload {
  mutation: MutationType!
  node: Beer
  updatedFields: [String!]
  previousValues: BeerPreviousValues
}

input BeerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BeerWhereInput
  AND: [BeerSubscriptionWhereInput!]
  OR: [BeerSubscriptionWhereInput!]
  NOT: [BeerSubscriptionWhereInput!]
}

input BeerUpdateInput {
  name: String
  picture: String
  brewery: BreweryUpdateOneInput
  style: StyleUpdateOneInput
  glass: GlassUpdateManyInput
  ibu: Int
  abv: Float
  description: String
  published: Boolean
  reviewer: UserUpdateOneRequiredWithoutBeersReviewedInput
}

input BeerUpdateManyDataInput {
  name: String
  picture: String
  ibu: Int
  abv: Float
  description: String
  published: Boolean
}

input BeerUpdateManyMutationInput {
  name: String
  picture: String
  ibu: Int
  abv: Float
  description: String
  published: Boolean
}

input BeerUpdateManyWithoutReviewerInput {
  create: [BeerCreateWithoutReviewerInput!]
  delete: [BeerWhereUniqueInput!]
  connect: [BeerWhereUniqueInput!]
  disconnect: [BeerWhereUniqueInput!]
  update: [BeerUpdateWithWhereUniqueWithoutReviewerInput!]
  upsert: [BeerUpsertWithWhereUniqueWithoutReviewerInput!]
  deleteMany: [BeerScalarWhereInput!]
  updateMany: [BeerUpdateManyWithWhereNestedInput!]
}

input BeerUpdateManyWithWhereNestedInput {
  where: BeerScalarWhereInput!
  data: BeerUpdateManyDataInput!
}

input BeerUpdateWithoutReviewerDataInput {
  name: String
  picture: String
  brewery: BreweryUpdateOneInput
  style: StyleUpdateOneInput
  glass: GlassUpdateManyInput
  ibu: Int
  abv: Float
  description: String
  published: Boolean
}

input BeerUpdateWithWhereUniqueWithoutReviewerInput {
  where: BeerWhereUniqueInput!
  data: BeerUpdateWithoutReviewerDataInput!
}

input BeerUpsertWithWhereUniqueWithoutReviewerInput {
  where: BeerWhereUniqueInput!
  update: BeerUpdateWithoutReviewerDataInput!
  create: BeerCreateWithoutReviewerInput!
}

input BeerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  picture: String
  picture_not: String
  picture_in: [String!]
  picture_not_in: [String!]
  picture_lt: String
  picture_lte: String
  picture_gt: String
  picture_gte: String
  picture_contains: String
  picture_not_contains: String
  picture_starts_with: String
  picture_not_starts_with: String
  picture_ends_with: String
  picture_not_ends_with: String
  brewery: BreweryWhereInput
  style: StyleWhereInput
  glass_every: GlassWhereInput
  glass_some: GlassWhereInput
  glass_none: GlassWhereInput
  ibu: Int
  ibu_not: Int
  ibu_in: [Int!]
  ibu_not_in: [Int!]
  ibu_lt: Int
  ibu_lte: Int
  ibu_gt: Int
  ibu_gte: Int
  abv: Float
  abv_not: Float
  abv_in: [Float!]
  abv_not_in: [Float!]
  abv_lt: Float
  abv_lte: Float
  abv_gt: Float
  abv_gte: Float
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  published: Boolean
  published_not: Boolean
  reviewer: UserWhereInput
  AND: [BeerWhereInput!]
  OR: [BeerWhereInput!]
  NOT: [BeerWhereInput!]
}

input BeerWhereUniqueInput {
  id: ID
}

type Brewery {
  id: ID!
  name: String!
  location: Location
}

type BreweryConnection {
  pageInfo: PageInfo!
  edges: [BreweryEdge]!
  aggregate: AggregateBrewery!
}

input BreweryCreateInput {
  name: String!
  location: LocationCreateOneInput
}

input BreweryCreateOneInput {
  create: BreweryCreateInput
  connect: BreweryWhereUniqueInput
}

type BreweryEdge {
  node: Brewery!
  cursor: String!
}

enum BreweryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BreweryPreviousValues {
  id: ID!
  name: String!
}

type BrewerySubscriptionPayload {
  mutation: MutationType!
  node: Brewery
  updatedFields: [String!]
  previousValues: BreweryPreviousValues
}

input BrewerySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BreweryWhereInput
  AND: [BrewerySubscriptionWhereInput!]
  OR: [BrewerySubscriptionWhereInput!]
  NOT: [BrewerySubscriptionWhereInput!]
}

input BreweryUpdateDataInput {
  name: String
  location: LocationUpdateOneInput
}

input BreweryUpdateInput {
  name: String
  location: LocationUpdateOneInput
}

input BreweryUpdateManyMutationInput {
  name: String
}

input BreweryUpdateOneInput {
  create: BreweryCreateInput
  update: BreweryUpdateDataInput
  upsert: BreweryUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: BreweryWhereUniqueInput
}

input BreweryUpsertNestedInput {
  update: BreweryUpdateDataInput!
  create: BreweryCreateInput!
}

input BreweryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  location: LocationWhereInput
  AND: [BreweryWhereInput!]
  OR: [BreweryWhereInput!]
  NOT: [BreweryWhereInput!]
}

input BreweryWhereUniqueInput {
  id: ID
}

type Country {
  id: ID!
  countryCode: String!
  name: String!
  icon: String
}

type CountryConnection {
  pageInfo: PageInfo!
  edges: [CountryEdge]!
  aggregate: AggregateCountry!
}

input CountryCreateInput {
  countryCode: String!
  name: String!
  icon: String
}

input CountryCreateOneInput {
  create: CountryCreateInput
  connect: CountryWhereUniqueInput
}

type CountryEdge {
  node: Country!
  cursor: String!
}

enum CountryOrderByInput {
  id_ASC
  id_DESC
  countryCode_ASC
  countryCode_DESC
  name_ASC
  name_DESC
  icon_ASC
  icon_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CountryPreviousValues {
  id: ID!
  countryCode: String!
  name: String!
  icon: String
}

type CountrySubscriptionPayload {
  mutation: MutationType!
  node: Country
  updatedFields: [String!]
  previousValues: CountryPreviousValues
}

input CountrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CountryWhereInput
  AND: [CountrySubscriptionWhereInput!]
  OR: [CountrySubscriptionWhereInput!]
  NOT: [CountrySubscriptionWhereInput!]
}

input CountryUpdateDataInput {
  countryCode: String
  name: String
  icon: String
}

input CountryUpdateInput {
  countryCode: String
  name: String
  icon: String
}

input CountryUpdateManyMutationInput {
  countryCode: String
  name: String
  icon: String
}

input CountryUpdateOneRequiredInput {
  create: CountryCreateInput
  update: CountryUpdateDataInput
  upsert: CountryUpsertNestedInput
  connect: CountryWhereUniqueInput
}

input CountryUpsertNestedInput {
  update: CountryUpdateDataInput!
  create: CountryCreateInput!
}

input CountryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  countryCode: String
  countryCode_not: String
  countryCode_in: [String!]
  countryCode_not_in: [String!]
  countryCode_lt: String
  countryCode_lte: String
  countryCode_gt: String
  countryCode_gte: String
  countryCode_contains: String
  countryCode_not_contains: String
  countryCode_starts_with: String
  countryCode_not_starts_with: String
  countryCode_ends_with: String
  countryCode_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  icon: String
  icon_not: String
  icon_in: [String!]
  icon_not_in: [String!]
  icon_lt: String
  icon_lte: String
  icon_gt: String
  icon_gte: String
  icon_contains: String
  icon_not_contains: String
  icon_starts_with: String
  icon_not_starts_with: String
  icon_ends_with: String
  icon_not_ends_with: String
  AND: [CountryWhereInput!]
  OR: [CountryWhereInput!]
  NOT: [CountryWhereInput!]
}

input CountryWhereUniqueInput {
  id: ID
  countryCode: String
}

type Glass {
  id: ID!
  name: String!
}

type GlassConnection {
  pageInfo: PageInfo!
  edges: [GlassEdge]!
  aggregate: AggregateGlass!
}

input GlassCreateInput {
  name: String!
}

input GlassCreateManyInput {
  create: [GlassCreateInput!]
  connect: [GlassWhereUniqueInput!]
}

type GlassEdge {
  node: Glass!
  cursor: String!
}

enum GlassOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GlassPreviousValues {
  id: ID!
  name: String!
}

input GlassScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [GlassScalarWhereInput!]
  OR: [GlassScalarWhereInput!]
  NOT: [GlassScalarWhereInput!]
}

type GlassSubscriptionPayload {
  mutation: MutationType!
  node: Glass
  updatedFields: [String!]
  previousValues: GlassPreviousValues
}

input GlassSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GlassWhereInput
  AND: [GlassSubscriptionWhereInput!]
  OR: [GlassSubscriptionWhereInput!]
  NOT: [GlassSubscriptionWhereInput!]
}

input GlassUpdateDataInput {
  name: String
}

input GlassUpdateInput {
  name: String
}

input GlassUpdateManyDataInput {
  name: String
}

input GlassUpdateManyInput {
  create: [GlassCreateInput!]
  update: [GlassUpdateWithWhereUniqueNestedInput!]
  upsert: [GlassUpsertWithWhereUniqueNestedInput!]
  delete: [GlassWhereUniqueInput!]
  connect: [GlassWhereUniqueInput!]
  disconnect: [GlassWhereUniqueInput!]
  deleteMany: [GlassScalarWhereInput!]
  updateMany: [GlassUpdateManyWithWhereNestedInput!]
}

input GlassUpdateManyMutationInput {
  name: String
}

input GlassUpdateManyWithWhereNestedInput {
  where: GlassScalarWhereInput!
  data: GlassUpdateManyDataInput!
}

input GlassUpdateWithWhereUniqueNestedInput {
  where: GlassWhereUniqueInput!
  data: GlassUpdateDataInput!
}

input GlassUpsertWithWhereUniqueNestedInput {
  where: GlassWhereUniqueInput!
  update: GlassUpdateDataInput!
  create: GlassCreateInput!
}

input GlassWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [GlassWhereInput!]
  OR: [GlassWhereInput!]
  NOT: [GlassWhereInput!]
}

input GlassWhereUniqueInput {
  id: ID
}

type Location {
  id: ID!
  city: String
  country: Country!
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  city: String
  country: CountryCreateOneInput!
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  city_ASC
  city_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  id: ID!
  city: String
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateDataInput {
  city: String
  country: CountryUpdateOneRequiredInput
}

input LocationUpdateInput {
  city: String
  country: CountryUpdateOneRequiredInput
}

input LocationUpdateManyMutationInput {
  city: String
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  country: CountryWhereInput
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBeer(data: BeerCreateInput!): Beer!
  updateBeer(data: BeerUpdateInput!, where: BeerWhereUniqueInput!): Beer
  updateManyBeers(data: BeerUpdateManyMutationInput!, where: BeerWhereInput): BatchPayload!
  upsertBeer(where: BeerWhereUniqueInput!, create: BeerCreateInput!, update: BeerUpdateInput!): Beer!
  deleteBeer(where: BeerWhereUniqueInput!): Beer
  deleteManyBeers(where: BeerWhereInput): BatchPayload!
  createBrewery(data: BreweryCreateInput!): Brewery!
  updateBrewery(data: BreweryUpdateInput!, where: BreweryWhereUniqueInput!): Brewery
  updateManyBreweries(data: BreweryUpdateManyMutationInput!, where: BreweryWhereInput): BatchPayload!
  upsertBrewery(where: BreweryWhereUniqueInput!, create: BreweryCreateInput!, update: BreweryUpdateInput!): Brewery!
  deleteBrewery(where: BreweryWhereUniqueInput!): Brewery
  deleteManyBreweries(where: BreweryWhereInput): BatchPayload!
  createCountry(data: CountryCreateInput!): Country!
  updateCountry(data: CountryUpdateInput!, where: CountryWhereUniqueInput!): Country
  updateManyCountries(data: CountryUpdateManyMutationInput!, where: CountryWhereInput): BatchPayload!
  upsertCountry(where: CountryWhereUniqueInput!, create: CountryCreateInput!, update: CountryUpdateInput!): Country!
  deleteCountry(where: CountryWhereUniqueInput!): Country
  deleteManyCountries(where: CountryWhereInput): BatchPayload!
  createGlass(data: GlassCreateInput!): Glass!
  updateGlass(data: GlassUpdateInput!, where: GlassWhereUniqueInput!): Glass
  updateManyGlasses(data: GlassUpdateManyMutationInput!, where: GlassWhereInput): BatchPayload!
  upsertGlass(where: GlassWhereUniqueInput!, create: GlassCreateInput!, update: GlassUpdateInput!): Glass!
  deleteGlass(where: GlassWhereUniqueInput!): Glass
  deleteManyGlasses(where: GlassWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createStyle(data: StyleCreateInput!): Style!
  updateStyle(data: StyleUpdateInput!, where: StyleWhereUniqueInput!): Style
  updateManyStyles(data: StyleUpdateManyMutationInput!, where: StyleWhereInput): BatchPayload!
  upsertStyle(where: StyleWhereUniqueInput!, create: StyleCreateInput!, update: StyleUpdateInput!): Style!
  deleteStyle(where: StyleWhereUniqueInput!): Style
  deleteManyStyles(where: StyleWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  beer(where: BeerWhereUniqueInput!): Beer
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer]!
  beersConnection(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BeerConnection!
  brewery(where: BreweryWhereUniqueInput!): Brewery
  breweries(where: BreweryWhereInput, orderBy: BreweryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brewery]!
  breweriesConnection(where: BreweryWhereInput, orderBy: BreweryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BreweryConnection!
  country(where: CountryWhereUniqueInput!): Country
  countries(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Country]!
  countriesConnection(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CountryConnection!
  glass(where: GlassWhereUniqueInput!): Glass
  glasses(where: GlassWhereInput, orderBy: GlassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Glass]!
  glassesConnection(where: GlassWhereInput, orderBy: GlassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GlassConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  style(where: StyleWhereUniqueInput!): Style
  styles(where: StyleWhereInput, orderBy: StyleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Style]!
  stylesConnection(where: StyleWhereInput, orderBy: StyleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StyleConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Style {
  id: ID!
  name: String!
}

type StyleConnection {
  pageInfo: PageInfo!
  edges: [StyleEdge]!
  aggregate: AggregateStyle!
}

input StyleCreateInput {
  name: String!
}

input StyleCreateOneInput {
  create: StyleCreateInput
  connect: StyleWhereUniqueInput
}

type StyleEdge {
  node: Style!
  cursor: String!
}

enum StyleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StylePreviousValues {
  id: ID!
  name: String!
}

type StyleSubscriptionPayload {
  mutation: MutationType!
  node: Style
  updatedFields: [String!]
  previousValues: StylePreviousValues
}

input StyleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StyleWhereInput
  AND: [StyleSubscriptionWhereInput!]
  OR: [StyleSubscriptionWhereInput!]
  NOT: [StyleSubscriptionWhereInput!]
}

input StyleUpdateDataInput {
  name: String
}

input StyleUpdateInput {
  name: String
}

input StyleUpdateManyMutationInput {
  name: String
}

input StyleUpdateOneInput {
  create: StyleCreateInput
  update: StyleUpdateDataInput
  upsert: StyleUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: StyleWhereUniqueInput
}

input StyleUpsertNestedInput {
  update: StyleUpdateDataInput!
  create: StyleCreateInput!
}

input StyleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [StyleWhereInput!]
  OR: [StyleWhereInput!]
  NOT: [StyleWhereInput!]
}

input StyleWhereUniqueInput {
  id: ID
}

type Subscription {
  beer(where: BeerSubscriptionWhereInput): BeerSubscriptionPayload
  brewery(where: BrewerySubscriptionWhereInput): BrewerySubscriptionPayload
  country(where: CountrySubscriptionWhereInput): CountrySubscriptionPayload
  glass(where: GlassSubscriptionWhereInput): GlassSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  style(where: StyleSubscriptionWhereInput): StyleSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String
  beersReviewed(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String
  beersReviewed: BeerCreateManyWithoutReviewerInput
}

input UserCreateOneWithoutBeersReviewedInput {
  create: UserCreateWithoutBeersReviewedInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBeersReviewedInput {
  email: String!
  password: String!
  name: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  beersReviewed: BeerUpdateManyWithoutReviewerInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredWithoutBeersReviewedInput {
  create: UserCreateWithoutBeersReviewedInput
  update: UserUpdateWithoutBeersReviewedDataInput
  upsert: UserUpsertWithoutBeersReviewedInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBeersReviewedDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertWithoutBeersReviewedInput {
  update: UserUpdateWithoutBeersReviewedDataInput!
  create: UserCreateWithoutBeersReviewedInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  beersReviewed_every: BeerWhereInput
  beersReviewed_some: BeerWhereInput
  beersReviewed_none: BeerWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    