// Code generated by Prisma (prisma@1.22.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  player: (where?: PlayerWhereInput) => Promise<boolean>;
  result: (where?: ResultWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  player: (where: PlayerWhereUniqueInput) => PlayerPromise;
  players: (
    args?: {
      where?: PlayerWhereInput;
      orderBy?: PlayerOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Player>;
  playersConnection: (
    args?: {
      where?: PlayerWhereInput;
      orderBy?: PlayerOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PlayerConnectionPromise;
  result: (where: ResultWhereUniqueInput) => ResultPromise;
  results: (
    args?: {
      where?: ResultWhereInput;
      orderBy?: ResultOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Result>;
  resultsConnection: (
    args?: {
      where?: ResultWhereInput;
      orderBy?: ResultOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ResultConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPlayer: (data: PlayerCreateInput) => PlayerPromise;
  updatePlayer: (
    args: { data: PlayerUpdateInput; where: PlayerWhereUniqueInput }
  ) => PlayerPromise;
  updateManyPlayers: (
    args: { data: PlayerUpdateManyMutationInput; where?: PlayerWhereInput }
  ) => BatchPayloadPromise;
  upsertPlayer: (
    args: {
      where: PlayerWhereUniqueInput;
      create: PlayerCreateInput;
      update: PlayerUpdateInput;
    }
  ) => PlayerPromise;
  deletePlayer: (where: PlayerWhereUniqueInput) => PlayerPromise;
  deleteManyPlayers: (where?: PlayerWhereInput) => BatchPayloadPromise;
  createResult: (data: ResultCreateInput) => ResultPromise;
  updateResult: (
    args: { data: ResultUpdateInput; where: ResultWhereUniqueInput }
  ) => ResultPromise;
  updateManyResults: (
    args: { data: ResultUpdateManyMutationInput; where?: ResultWhereInput }
  ) => BatchPayloadPromise;
  upsertResult: (
    args: {
      where: ResultWhereUniqueInput;
      create: ResultCreateInput;
      update: ResultUpdateInput;
    }
  ) => ResultPromise;
  deleteResult: (where: ResultWhereUniqueInput) => ResultPromise;
  deleteManyResults: (where?: ResultWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  player: (
    where?: PlayerSubscriptionWhereInput
  ) => PlayerSubscriptionPayloadSubscription;
  result: (
    where?: ResultSubscriptionWhereInput
  ) => ResultSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Category = "FUSSBALL" | "PINGPONG";

export type PlayerOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type Division = "A" | "B" | "C";

export type ResultOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "season_ASC"
  | "season_DESC"
  | "category_ASC"
  | "category_DESC"
  | "division_ASC"
  | "division_DESC"
  | "points_ASC"
  | "points_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ResultWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PlayerCreateInput {
  name: String;
  streak?: PlayerCreatestreakInput;
}

export interface ResultCreateInput {
  season: Int;
  category: Category;
  division: Division;
  winner: PlayerCreateOneInput;
  loser: PlayerCreateOneInput;
  points: Int;
}

export type PlayerWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ResultWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  season?: Int;
  season_not?: Int;
  season_in?: Int[] | Int;
  season_not_in?: Int[] | Int;
  season_lt?: Int;
  season_lte?: Int;
  season_gt?: Int;
  season_gte?: Int;
  category?: Category;
  category_not?: Category;
  category_in?: Category[] | Category;
  category_not_in?: Category[] | Category;
  division?: Division;
  division_not?: Division;
  division_in?: Division[] | Division;
  division_not_in?: Division[] | Division;
  winner?: PlayerWhereInput;
  loser?: PlayerWhereInput;
  points?: Int;
  points_not?: Int;
  points_in?: Int[] | Int;
  points_not_in?: Int[] | Int;
  points_lt?: Int;
  points_lte?: Int;
  points_gt?: Int;
  points_gte?: Int;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  AND?: ResultWhereInput[] | ResultWhereInput;
  OR?: ResultWhereInput[] | ResultWhereInput;
  NOT?: ResultWhereInput[] | ResultWhereInput;
}

export interface PlayerUpsertNestedInput {
  update: PlayerUpdateDataInput;
  create: PlayerCreateInput;
}

export interface PlayerSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PlayerWhereInput;
  AND?: PlayerSubscriptionWhereInput[] | PlayerSubscriptionWhereInput;
  OR?: PlayerSubscriptionWhereInput[] | PlayerSubscriptionWhereInput;
  NOT?: PlayerSubscriptionWhereInput[] | PlayerSubscriptionWhereInput;
}

export interface PlayerUpdateOneRequiredInput {
  create?: PlayerCreateInput;
  update?: PlayerUpdateDataInput;
  upsert?: PlayerUpsertNestedInput;
  connect?: PlayerWhereUniqueInput;
}

export interface ResultSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ResultWhereInput;
  AND?: ResultSubscriptionWhereInput[] | ResultSubscriptionWhereInput;
  OR?: ResultSubscriptionWhereInput[] | ResultSubscriptionWhereInput;
  NOT?: ResultSubscriptionWhereInput[] | ResultSubscriptionWhereInput;
}

export interface PlayerCreatestreakInput {
  set?: Boolean[] | Boolean;
}

export interface PlayerUpdateInput {
  name?: String;
  streak?: PlayerUpdatestreakInput;
}

export interface PlayerUpdatestreakInput {
  set?: Boolean[] | Boolean;
}

export interface PlayerUpdateManyMutationInput {
  name?: String;
  streak?: PlayerUpdatestreakInput;
}

export interface PlayerCreateOneInput {
  create?: PlayerCreateInput;
  connect?: PlayerWhereUniqueInput;
}

export interface ResultUpdateInput {
  season?: Int;
  category?: Category;
  division?: Division;
  winner?: PlayerUpdateOneRequiredInput;
  loser?: PlayerUpdateOneRequiredInput;
  points?: Int;
}

export interface PlayerUpdateDataInput {
  name?: String;
  streak?: PlayerUpdatestreakInput;
}

export interface PlayerWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: PlayerWhereInput[] | PlayerWhereInput;
  OR?: PlayerWhereInput[] | PlayerWhereInput;
  NOT?: PlayerWhereInput[] | PlayerWhereInput;
}

export interface ResultUpdateManyMutationInput {
  season?: Int;
  category?: Category;
  division?: Division;
  points?: Int;
}

export interface NodeNode {
  id: ID_Output;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ResultPreviousValues {
  id: ID_Output;
  season: Int;
  category: Category;
  division: Division;
  points: Int;
  createdAt: DateTimeOutput;
}

export interface ResultPreviousValuesPromise
  extends Promise<ResultPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  season: () => Promise<Int>;
  category: () => Promise<Category>;
  division: () => Promise<Division>;
  points: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface ResultPreviousValuesSubscription
  extends Promise<AsyncIterator<ResultPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  season: () => Promise<AsyncIterator<Int>>;
  category: () => Promise<AsyncIterator<Category>>;
  division: () => Promise<AsyncIterator<Division>>;
  points: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface PlayerConnection {}

export interface PlayerConnectionPromise
  extends Promise<PlayerConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PlayerEdge>>() => T;
  aggregate: <T = AggregatePlayerPromise>() => T;
}

export interface PlayerConnectionSubscription
  extends Promise<AsyncIterator<PlayerConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PlayerEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePlayerSubscription>() => T;
}

export interface ResultEdge {
  cursor: String;
}

export interface ResultEdgePromise extends Promise<ResultEdge>, Fragmentable {
  node: <T = ResultPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ResultEdgeSubscription
  extends Promise<AsyncIterator<ResultEdge>>,
    Fragmentable {
  node: <T = ResultSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PlayerSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PlayerSubscriptionPayloadPromise
  extends Promise<PlayerSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PlayerPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PlayerPreviousValuesPromise>() => T;
}

export interface PlayerSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PlayerSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PlayerSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PlayerPreviousValuesSubscription>() => T;
}

export interface PlayerPreviousValues {
  id: ID_Output;
  name: String;
  streak: Boolean[];
}

export interface PlayerPreviousValuesPromise
  extends Promise<PlayerPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  streak: () => Promise<Boolean[]>;
}

export interface PlayerPreviousValuesSubscription
  extends Promise<AsyncIterator<PlayerPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  streak: () => Promise<AsyncIterator<Boolean[]>>;
}

export interface Player {
  id: ID_Output;
  name: String;
  streak: Boolean[];
}

export interface PlayerPromise extends Promise<Player>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  streak: () => Promise<Boolean[]>;
}

export interface PlayerSubscription
  extends Promise<AsyncIterator<Player>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  streak: () => Promise<AsyncIterator<Boolean[]>>;
}

export interface ResultConnection {}

export interface ResultConnectionPromise
  extends Promise<ResultConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ResultEdge>>() => T;
  aggregate: <T = AggregateResultPromise>() => T;
}

export interface ResultConnectionSubscription
  extends Promise<AsyncIterator<ResultConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ResultEdgeSubscription>>>() => T;
  aggregate: <T = AggregateResultSubscription>() => T;
}

export interface AggregateResult {
  count: Int;
}

export interface AggregateResultPromise
  extends Promise<AggregateResult>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateResultSubscription
  extends Promise<AsyncIterator<AggregateResult>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PlayerEdge {
  cursor: String;
}

export interface PlayerEdgePromise extends Promise<PlayerEdge>, Fragmentable {
  node: <T = PlayerPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PlayerEdgeSubscription
  extends Promise<AsyncIterator<PlayerEdge>>,
    Fragmentable {
  node: <T = PlayerSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePlayer {
  count: Int;
}

export interface AggregatePlayerPromise
  extends Promise<AggregatePlayer>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePlayerSubscription
  extends Promise<AsyncIterator<AggregatePlayer>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Result {
  id: ID_Output;
  season: Int;
  category: Category;
  division: Division;
  points: Int;
  createdAt: DateTimeOutput;
}

export interface ResultPromise extends Promise<Result>, Fragmentable {
  id: () => Promise<ID_Output>;
  season: () => Promise<Int>;
  category: () => Promise<Category>;
  division: () => Promise<Division>;
  winner: <T = PlayerPromise>() => T;
  loser: <T = PlayerPromise>() => T;
  points: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface ResultSubscription
  extends Promise<AsyncIterator<Result>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  season: () => Promise<AsyncIterator<Int>>;
  category: () => Promise<AsyncIterator<Category>>;
  division: () => Promise<AsyncIterator<Division>>;
  winner: <T = PlayerSubscription>() => T;
  loser: <T = PlayerSubscription>() => T;
  points: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ResultSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ResultSubscriptionPayloadPromise
  extends Promise<ResultSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ResultPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ResultPreviousValuesPromise>() => T;
}

export interface ResultSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ResultSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ResultSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ResultPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Division",
    embedded: false
  },
  {
    name: "Player",
    embedded: false
  },
  {
    name: "Result",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
