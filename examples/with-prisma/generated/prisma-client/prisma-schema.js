module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBeer {
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
  onStock: Boolean!
  author: User
}

type BeerConnection {
  pageInfo: PageInfo!
  edges: [BeerEdge]!
  aggregate: AggregateBeer!
}

input BeerCreateInput {
  name: String!
  onStock: Boolean
  author: UserCreateOneWithoutBeersInput
}

input BeerCreateManyWithoutAuthorInput {
  create: [BeerCreateWithoutAuthorInput!]
  connect: [BeerWhereUniqueInput!]
}

input BeerCreateWithoutAuthorInput {
  name: String!
  onStock: Boolean
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
  onStock_ASC
  onStock_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BeerPreviousValues {
  id: ID!
  name: String!
  onStock: Boolean!
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
  onStock: Boolean
  onStock_not: Boolean
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
  onStock: Boolean
  author: UserUpdateOneWithoutBeersInput
}

input BeerUpdateManyDataInput {
  name: String
  onStock: Boolean
}

input BeerUpdateManyMutationInput {
  name: String
  onStock: Boolean
}

input BeerUpdateManyWithoutAuthorInput {
  create: [BeerCreateWithoutAuthorInput!]
  delete: [BeerWhereUniqueInput!]
  connect: [BeerWhereUniqueInput!]
  disconnect: [BeerWhereUniqueInput!]
  update: [BeerUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [BeerUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [BeerScalarWhereInput!]
  updateMany: [BeerUpdateManyWithWhereNestedInput!]
}

input BeerUpdateManyWithWhereNestedInput {
  where: BeerScalarWhereInput!
  data: BeerUpdateManyDataInput!
}

input BeerUpdateWithoutAuthorDataInput {
  name: String
  onStock: Boolean
}

input BeerUpdateWithWhereUniqueWithoutAuthorInput {
  where: BeerWhereUniqueInput!
  data: BeerUpdateWithoutAuthorDataInput!
}

input BeerUpsertWithWhereUniqueWithoutAuthorInput {
  where: BeerWhereUniqueInput!
  update: BeerUpdateWithoutAuthorDataInput!
  create: BeerCreateWithoutAuthorInput!
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
  onStock: Boolean
  onStock_not: Boolean
  author: UserWhereInput
  AND: [BeerWhereInput!]
  OR: [BeerWhereInput!]
  NOT: [BeerWhereInput!]
}

input BeerWhereUniqueInput {
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
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  beer(where: BeerSubscriptionWhereInput): BeerSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String
  name: String!
  beers(where: BeerWhereInput, orderBy: BeerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Beer!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  name: String!
  beers: BeerCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutBeersInput {
  create: UserCreateWithoutBeersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBeersInput {
  email: String
  name: String!
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
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  name: String!
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
  name: String
  beers: BeerUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  name: String
}

input UserUpdateOneWithoutBeersInput {
  create: UserCreateWithoutBeersInput
  update: UserUpdateWithoutBeersDataInput
  upsert: UserUpsertWithoutBeersInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBeersDataInput {
  email: String
  name: String
}

input UserUpsertWithoutBeersInput {
  update: UserUpdateWithoutBeersDataInput!
  create: UserCreateWithoutBeersInput!
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
  beers_every: BeerWhereInput
  beers_some: BeerWhereInput
  beers_none: BeerWhereInput
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
    