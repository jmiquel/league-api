module.exports = {
        typeDefs: /* GraphQL */ `type AggregatePlayer {
  count: Int!
}

type AggregateResult {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum Category {
  FUSSBALL
  PINGPONG
}

scalar DateTime

enum Division {
  A
  B
  C
}

scalar Long

type Mutation {
  createPlayer(data: PlayerCreateInput!): Player!
  updatePlayer(data: PlayerUpdateInput!, where: PlayerWhereUniqueInput!): Player
  updateManyPlayers(data: PlayerUpdateManyMutationInput!, where: PlayerWhereInput): BatchPayload!
  upsertPlayer(where: PlayerWhereUniqueInput!, create: PlayerCreateInput!, update: PlayerUpdateInput!): Player!
  deletePlayer(where: PlayerWhereUniqueInput!): Player
  deleteManyPlayers(where: PlayerWhereInput): BatchPayload!
  createResult(data: ResultCreateInput!): Result!
  updateResult(data: ResultUpdateInput!, where: ResultWhereUniqueInput!): Result
  updateManyResults(data: ResultUpdateManyMutationInput!, where: ResultWhereInput): BatchPayload!
  upsertResult(where: ResultWhereUniqueInput!, create: ResultCreateInput!, update: ResultUpdateInput!): Result!
  deleteResult(where: ResultWhereUniqueInput!): Result
  deleteManyResults(where: ResultWhereInput): BatchPayload!
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

type Player {
  id: ID!
  name: String!
  streak: [Boolean!]!
}

type PlayerConnection {
  pageInfo: PageInfo!
  edges: [PlayerEdge]!
  aggregate: AggregatePlayer!
}

input PlayerCreateInput {
  name: String!
  streak: PlayerCreatestreakInput
}

input PlayerCreateOneInput {
  create: PlayerCreateInput
  connect: PlayerWhereUniqueInput
}

input PlayerCreatestreakInput {
  set: [Boolean!]
}

type PlayerEdge {
  node: Player!
  cursor: String!
}

enum PlayerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PlayerPreviousValues {
  id: ID!
  name: String!
  streak: [Boolean!]!
}

type PlayerSubscriptionPayload {
  mutation: MutationType!
  node: Player
  updatedFields: [String!]
  previousValues: PlayerPreviousValues
}

input PlayerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlayerWhereInput
  AND: [PlayerSubscriptionWhereInput!]
  OR: [PlayerSubscriptionWhereInput!]
  NOT: [PlayerSubscriptionWhereInput!]
}

input PlayerUpdateDataInput {
  name: String
  streak: PlayerUpdatestreakInput
}

input PlayerUpdateInput {
  name: String
  streak: PlayerUpdatestreakInput
}

input PlayerUpdateManyMutationInput {
  name: String
  streak: PlayerUpdatestreakInput
}

input PlayerUpdateOneRequiredInput {
  create: PlayerCreateInput
  update: PlayerUpdateDataInput
  upsert: PlayerUpsertNestedInput
  connect: PlayerWhereUniqueInput
}

input PlayerUpdatestreakInput {
  set: [Boolean!]
}

input PlayerUpsertNestedInput {
  update: PlayerUpdateDataInput!
  create: PlayerCreateInput!
}

input PlayerWhereInput {
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
  AND: [PlayerWhereInput!]
  OR: [PlayerWhereInput!]
  NOT: [PlayerWhereInput!]
}

input PlayerWhereUniqueInput {
  id: ID
}

type Query {
  player(where: PlayerWhereUniqueInput!): Player
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player]!
  playersConnection(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlayerConnection!
  result(where: ResultWhereUniqueInput!): Result
  results(where: ResultWhereInput, orderBy: ResultOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Result]!
  resultsConnection(where: ResultWhereInput, orderBy: ResultOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResultConnection!
  node(id: ID!): Node
}

type Result {
  id: ID!
  season: Int!
  category: Category!
  division: Division!
  winner: Player!
  loser: Player!
  points: Int!
  createdAt: DateTime!
}

type ResultConnection {
  pageInfo: PageInfo!
  edges: [ResultEdge]!
  aggregate: AggregateResult!
}

input ResultCreateInput {
  season: Int!
  category: Category!
  division: Division!
  winner: PlayerCreateOneInput!
  loser: PlayerCreateOneInput!
  points: Int!
}

type ResultEdge {
  node: Result!
  cursor: String!
}

enum ResultOrderByInput {
  id_ASC
  id_DESC
  season_ASC
  season_DESC
  category_ASC
  category_DESC
  division_ASC
  division_DESC
  points_ASC
  points_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ResultPreviousValues {
  id: ID!
  season: Int!
  category: Category!
  division: Division!
  points: Int!
  createdAt: DateTime!
}

type ResultSubscriptionPayload {
  mutation: MutationType!
  node: Result
  updatedFields: [String!]
  previousValues: ResultPreviousValues
}

input ResultSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ResultWhereInput
  AND: [ResultSubscriptionWhereInput!]
  OR: [ResultSubscriptionWhereInput!]
  NOT: [ResultSubscriptionWhereInput!]
}

input ResultUpdateInput {
  season: Int
  category: Category
  division: Division
  winner: PlayerUpdateOneRequiredInput
  loser: PlayerUpdateOneRequiredInput
  points: Int
}

input ResultUpdateManyMutationInput {
  season: Int
  category: Category
  division: Division
  points: Int
}

input ResultWhereInput {
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
  season: Int
  season_not: Int
  season_in: [Int!]
  season_not_in: [Int!]
  season_lt: Int
  season_lte: Int
  season_gt: Int
  season_gte: Int
  category: Category
  category_not: Category
  category_in: [Category!]
  category_not_in: [Category!]
  division: Division
  division_not: Division
  division_in: [Division!]
  division_not_in: [Division!]
  winner: PlayerWhereInput
  loser: PlayerWhereInput
  points: Int
  points_not: Int
  points_in: [Int!]
  points_not_in: [Int!]
  points_lt: Int
  points_lte: Int
  points_gt: Int
  points_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ResultWhereInput!]
  OR: [ResultWhereInput!]
  NOT: [ResultWhereInput!]
}

input ResultWhereUniqueInput {
  id: ID
}

type Subscription {
  player(where: PlayerSubscriptionWhereInput): PlayerSubscriptionPayload
  result(where: ResultSubscriptionWhereInput): ResultSubscriptionPayload
}
`
      }
    