import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import type * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export interface ApiMutation {
  /** Add new Game */
  readonly createGame: GameModel;
  /** Edit the Game */
  readonly updateGame: GameModel;
}


export type ApiMutationCreateGameArgs = {
  payload: CreateGameInput;
};


export type ApiMutationUpdateGameArgs = {
  payload: EditGameInput;
};

export interface ApiQuery {
  readonly authors?: Maybe<AuthorsConnection>;
  readonly cards?: Maybe<CardsConnection>;
  readonly franchises?: Maybe<FranchisesConnection>;
  readonly games: ReadonlyArray<GameModel>;
  readonly locale?: Maybe<LocaleModel>;
  readonly persons?: Maybe<PersonsConnection>;
  readonly scenes?: Maybe<ScenesConnection>;
  readonly tag?: Maybe<TagModel>;
  readonly tags?: Maybe<TagsConnection>;
}


export type ApiQueryAuthorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ReadonlyArray<AuthorModelSortInput>>;
  where?: InputMaybe<AuthorModelFilterInput>;
};


export type ApiQueryCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ReadonlyArray<CardModelSortInput>>;
  where?: InputMaybe<CardModelFilterInput>;
};


export type ApiQueryFranchisesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ReadonlyArray<FranchiseModelSortInput>>;
  where?: InputMaybe<FranchiseModelFilterInput>;
};


export type ApiQueryLocaleArgs = {
  where?: InputMaybe<LocaleModelFilterInput>;
};


export type ApiQueryPersonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ReadonlyArray<PersonModelSortInput>>;
  where?: InputMaybe<PersonModelFilterInput>;
};


export type ApiQueryScenesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ReadonlyArray<SceneModelSortInput>>;
  where?: InputMaybe<SceneModelFilterInput>;
};


export type ApiQueryTagArgs = {
  where?: InputMaybe<TagModelFilterInput>;
};


export type ApiQueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ReadonlyArray<TagModelSortInput>>;
  where?: InputMaybe<TagModelFilterInput>;
};

export interface AuthorModel {
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
}

export interface AuthorModelFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<AuthorModelFilterInput>>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly name?: InputMaybe<StringOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<AuthorModelFilterInput>>;
}

export interface AuthorModelSortInput {
  readonly id?: InputMaybe<SortEnumType>;
  readonly name?: InputMaybe<SortEnumType>;
}

/** A connection to a list of items. */
export interface AuthorsConnection {
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<AuthorsEdge>>;
  /** A flattened list of the nodes. */
  readonly nodes?: Maybe<ReadonlyArray<AuthorModel>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface AuthorsEdge {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: AuthorModel;
}

export interface BinaryFileChunk {
  readonly hash: Scalars['String']['output'];
  readonly id: Scalars['Int']['output'];
  readonly url: Scalars['String']['output'];
}

export interface BinaryFileChunkFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<BinaryFileChunkFilterInput>>;
  readonly hash?: InputMaybe<StringOperationFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<BinaryFileChunkFilterInput>>;
  readonly url?: InputMaybe<StringOperationFilterInput>;
}

export interface BinaryFileModel {
  readonly id: Scalars['Int']['output'];
  readonly versions: ReadonlyArray<BinaryFileVersion>;
}

export interface BinaryFileModelFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<BinaryFileModelFilterInput>>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<BinaryFileModelFilterInput>>;
  readonly versions?: InputMaybe<ListFilterInputTypeOfBinaryFileVersionFilterInput>;
}

export interface BinaryFileVersion {
  readonly backup: Scalars['String']['output'];
  readonly chunks: ReadonlyArray<BinaryFileChunk>;
  readonly id: Scalars['Int']['output'];
}

export interface BinaryFileVersionFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<BinaryFileVersionFilterInput>>;
  readonly backup?: InputMaybe<StringOperationFilterInput>;
  readonly chunks?: InputMaybe<ListFilterInputTypeOfBinaryFileChunkFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<BinaryFileVersionFilterInput>>;
}

export interface CardModel {
  readonly author: AuthorModel;
  readonly games: ReadonlyArray<GameModel>;
  readonly id: Scalars['Int']['output'];
  readonly name: LocaleModel;
  readonly tags: ReadonlyArray<TagModel>;
  readonly versions: ReadonlyArray<CardVersion>;
}

export interface CardModelFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<CardModelFilterInput>>;
  readonly author?: InputMaybe<AuthorModelFilterInput>;
  readonly games?: InputMaybe<ListFilterInputTypeOfGameModelFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly name?: InputMaybe<LocaleModelFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<CardModelFilterInput>>;
  readonly tags?: InputMaybe<ListFilterInputTypeOfTagModelFilterInput>;
  readonly versions?: InputMaybe<ListFilterInputTypeOfCardVersionFilterInput>;
}

export interface CardModelSortInput {
  readonly author?: InputMaybe<AuthorModelSortInput>;
  readonly id?: InputMaybe<SortEnumType>;
  readonly name?: InputMaybe<LocaleModelSortInput>;
}

export interface CardVersion {
  readonly cover: Scalars['String']['output'];
  readonly file: BinaryFileModel;
  readonly id: Scalars['Int']['output'];
}

export interface CardVersionFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<CardVersionFilterInput>>;
  readonly cover?: InputMaybe<StringOperationFilterInput>;
  readonly file?: InputMaybe<BinaryFileModelFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<CardVersionFilterInput>>;
}

/** A connection to a list of items. */
export interface CardsConnection {
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<CardsEdge>>;
  /** A flattened list of the nodes. */
  readonly nodes?: Maybe<ReadonlyArray<CardModel>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface CardsEdge {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: CardModel;
}

export interface CreateGameInput {
  readonly icons: ReadonlyArray<Scalars['Upload']['input']>;
  readonly name: ReadonlyArray<KeyValuePairOfLangVariantAndStringInput>;
}

export interface EditGameInput {
  readonly file?: InputMaybe<Scalars['Upload']['input']>;
  readonly id: Scalars['Int']['input'];
  readonly name?: InputMaybe<ReadonlyArray<KeyValuePairOfLangVariantAndStringInput>>;
}

export interface FranchiseModel {
  readonly cards: ReadonlyArray<CardModel>;
  readonly id: Scalars['Int']['output'];
  readonly name: LocaleModel;
  readonly scenes: ReadonlyArray<SceneModel>;
}

export interface FranchiseModelFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<FranchiseModelFilterInput>>;
  readonly cards?: InputMaybe<ListFilterInputTypeOfCardModelFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly name?: InputMaybe<LocaleModelFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<FranchiseModelFilterInput>>;
  readonly scenes?: InputMaybe<ListFilterInputTypeOfSceneModelFilterInput>;
}

export interface FranchiseModelSortInput {
  readonly id?: InputMaybe<SortEnumType>;
  readonly name?: InputMaybe<LocaleModelSortInput>;
}

/** A connection to a list of items. */
export interface FranchisesConnection {
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<FranchisesEdge>>;
  /** A flattened list of the nodes. */
  readonly nodes?: Maybe<ReadonlyArray<FranchiseModel>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface FranchisesEdge {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: FranchiseModel;
}

export interface GameFeaturesOperationFilterInput {
  readonly eq?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly neq?: InputMaybe<Scalars['Int']['input']>;
  readonly nin?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
}

export interface GameModel {
  readonly cards: ReadonlyArray<CardModel>;
  readonly features: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly magnet: Scalars['String']['output'];
  readonly name: LocaleModel;
  readonly scenes: ReadonlyArray<SceneModel>;
}

export interface GameModelFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<GameModelFilterInput>>;
  readonly cards?: InputMaybe<ListFilterInputTypeOfCardModelFilterInput>;
  readonly features?: InputMaybe<GameFeaturesOperationFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly magnet?: InputMaybe<StringOperationFilterInput>;
  readonly name?: InputMaybe<LocaleModelFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<GameModelFilterInput>>;
  readonly scenes?: InputMaybe<ListFilterInputTypeOfSceneModelFilterInput>;
}

export interface IntOperationFilterInput {
  readonly eq?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly neq?: InputMaybe<Scalars['Int']['input']>;
  readonly ngt?: InputMaybe<Scalars['Int']['input']>;
  readonly ngte?: InputMaybe<Scalars['Int']['input']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly nlt?: InputMaybe<Scalars['Int']['input']>;
  readonly nlte?: InputMaybe<Scalars['Int']['input']>;
}

export interface KeyValuePairOfLangVariantAndStringInput {
  readonly key: LangVariant;
  readonly value: Scalars['String']['input'];
}

export const enum LangVariant {
  En = 'EN',
  Ru = 'RU'
};

export interface ListFilterInputTypeOfBinaryFileChunkFilterInput {
  readonly all?: InputMaybe<BinaryFileChunkFilterInput>;
  readonly any?: InputMaybe<Scalars['Boolean']['input']>;
  readonly none?: InputMaybe<BinaryFileChunkFilterInput>;
  readonly some?: InputMaybe<BinaryFileChunkFilterInput>;
}

export interface ListFilterInputTypeOfBinaryFileVersionFilterInput {
  readonly all?: InputMaybe<BinaryFileVersionFilterInput>;
  readonly any?: InputMaybe<Scalars['Boolean']['input']>;
  readonly none?: InputMaybe<BinaryFileVersionFilterInput>;
  readonly some?: InputMaybe<BinaryFileVersionFilterInput>;
}

export interface ListFilterInputTypeOfCardModelFilterInput {
  readonly all?: InputMaybe<CardModelFilterInput>;
  readonly any?: InputMaybe<Scalars['Boolean']['input']>;
  readonly none?: InputMaybe<CardModelFilterInput>;
  readonly some?: InputMaybe<CardModelFilterInput>;
}

export interface ListFilterInputTypeOfCardVersionFilterInput {
  readonly all?: InputMaybe<CardVersionFilterInput>;
  readonly any?: InputMaybe<Scalars['Boolean']['input']>;
  readonly none?: InputMaybe<CardVersionFilterInput>;
  readonly some?: InputMaybe<CardVersionFilterInput>;
}

export interface ListFilterInputTypeOfGameModelFilterInput {
  readonly all?: InputMaybe<GameModelFilterInput>;
  readonly any?: InputMaybe<Scalars['Boolean']['input']>;
  readonly none?: InputMaybe<GameModelFilterInput>;
  readonly some?: InputMaybe<GameModelFilterInput>;
}

export interface ListFilterInputTypeOfSceneModelFilterInput {
  readonly all?: InputMaybe<SceneModelFilterInput>;
  readonly any?: InputMaybe<Scalars['Boolean']['input']>;
  readonly none?: InputMaybe<SceneModelFilterInput>;
  readonly some?: InputMaybe<SceneModelFilterInput>;
}

export interface ListFilterInputTypeOfSceneVersionFilterInput {
  readonly all?: InputMaybe<SceneVersionFilterInput>;
  readonly any?: InputMaybe<Scalars['Boolean']['input']>;
  readonly none?: InputMaybe<SceneVersionFilterInput>;
  readonly some?: InputMaybe<SceneVersionFilterInput>;
}

export interface ListFilterInputTypeOfTagModelFilterInput {
  readonly all?: InputMaybe<TagModelFilterInput>;
  readonly any?: InputMaybe<Scalars['Boolean']['input']>;
  readonly none?: InputMaybe<TagModelFilterInput>;
  readonly some?: InputMaybe<TagModelFilterInput>;
}

export interface LocaleModel {
  readonly en: Scalars['String']['output'];
  readonly id: Scalars['Int']['output'];
  readonly ru: Scalars['String']['output'];
}

export interface LocaleModelFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<LocaleModelFilterInput>>;
  readonly en?: InputMaybe<StringOperationFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<LocaleModelFilterInput>>;
  readonly ru?: InputMaybe<StringOperationFilterInput>;
}

export interface LocaleModelSortInput {
  readonly en?: InputMaybe<SortEnumType>;
  readonly id?: InputMaybe<SortEnumType>;
  readonly ru?: InputMaybe<SortEnumType>;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['String']['output']>;
}

export interface PersonModel {
  readonly cards: ReadonlyArray<CardModel>;
  readonly id: Scalars['Int']['output'];
}

export interface PersonModelFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<PersonModelFilterInput>>;
  readonly cards?: InputMaybe<ListFilterInputTypeOfCardModelFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<PersonModelFilterInput>>;
}

export interface PersonModelSortInput {
  readonly id?: InputMaybe<SortEnumType>;
}

/** A connection to a list of items. */
export interface PersonsConnection {
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<PersonsEdge>>;
  /** A flattened list of the nodes. */
  readonly nodes?: Maybe<ReadonlyArray<PersonModel>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface PersonsEdge {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: PersonModel;
}

export interface SceneModel {
  readonly author: AuthorModel;
  readonly games: ReadonlyArray<GameModel>;
  readonly id: Scalars['Int']['output'];
  readonly name: LocaleModel;
  readonly tags: ReadonlyArray<TagModel>;
  readonly versions: ReadonlyArray<SceneVersion>;
}

export interface SceneModelFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<SceneModelFilterInput>>;
  readonly author?: InputMaybe<AuthorModelFilterInput>;
  readonly games?: InputMaybe<ListFilterInputTypeOfGameModelFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly name?: InputMaybe<LocaleModelFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<SceneModelFilterInput>>;
  readonly tags?: InputMaybe<ListFilterInputTypeOfTagModelFilterInput>;
  readonly versions?: InputMaybe<ListFilterInputTypeOfSceneVersionFilterInput>;
}

export interface SceneModelSortInput {
  readonly author?: InputMaybe<AuthorModelSortInput>;
  readonly id?: InputMaybe<SortEnumType>;
  readonly name?: InputMaybe<LocaleModelSortInput>;
}

export interface SceneVersion {
  readonly cover: Scalars['String']['output'];
  readonly id: Scalars['Int']['output'];
  readonly magnet: Scalars['String']['output'];
}

export interface SceneVersionFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<SceneVersionFilterInput>>;
  readonly cover?: InputMaybe<StringOperationFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly magnet?: InputMaybe<StringOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<SceneVersionFilterInput>>;
}

/** A connection to a list of items. */
export interface ScenesConnection {
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<ScenesEdge>>;
  /** A flattened list of the nodes. */
  readonly nodes?: Maybe<ReadonlyArray<SceneModel>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface ScenesEdge {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: SceneModel;
}

export const enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
};

export interface StringOperationFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<StringOperationFilterInput>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly eq?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly ncontains?: InputMaybe<Scalars['String']['input']>;
  readonly nendsWith?: InputMaybe<Scalars['String']['input']>;
  readonly neq?: InputMaybe<Scalars['String']['input']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly nstartsWith?: InputMaybe<Scalars['String']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<StringOperationFilterInput>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface TagModel {
  readonly cards: ReadonlyArray<CardModel>;
  readonly id: Scalars['Int']['output'];
  readonly name: LocaleModel;
  readonly scenes: ReadonlyArray<SceneModel>;
}

export interface TagModelFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<TagModelFilterInput>>;
  readonly cards?: InputMaybe<ListFilterInputTypeOfCardModelFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly name?: InputMaybe<LocaleModelFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<TagModelFilterInput>>;
  readonly scenes?: InputMaybe<ListFilterInputTypeOfSceneModelFilterInput>;
}

export interface TagModelSortInput {
  readonly id?: InputMaybe<SortEnumType>;
  readonly name?: InputMaybe<LocaleModelSortInput>;
}

/** A connection to a list of items. */
export interface TagsConnection {
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<TagsEdge>>;
  /** A flattened list of the nodes. */
  readonly nodes?: Maybe<ReadonlyArray<TagModel>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface TagsEdge {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  readonly node: TagModel;
}

export type CardsQueryVariables = Exact<{ [key: string]: never; }>;


export type CardsQuery = { readonly cards?: { readonly nodes?: ReadonlyArray<{ readonly id: number, readonly name: { readonly en: string }, readonly author: { readonly name: string }, readonly tags: ReadonlyArray<{ readonly id: number, readonly name: { readonly en: string } }>, readonly versions: ReadonlyArray<{ readonly id: number, readonly cover: string }> }> | null } | null };

export type GamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GamesQuery = { readonly games: ReadonlyArray<{ readonly id: number, readonly features: number, readonly name: { readonly en: string, readonly ru: string } }> };

export type ScenesQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ScenesQuery = { readonly scenes?: { readonly edges?: ReadonlyArray<{ readonly cursor: string, readonly node: { readonly id: number, readonly name: { readonly en: string, readonly ru: string }, readonly author: { readonly name: string }, readonly games: ReadonlyArray<{ readonly id: number }>, readonly versions: ReadonlyArray<{ readonly id: number, readonly cover: string }> } }> | null } | null };

export type SearchFranchisesQueryVariables = Exact<{
  value: Scalars['String']['input'];
}>;


export type SearchFranchisesQuery = { readonly franchises?: { readonly edges?: ReadonlyArray<{ readonly node: { readonly id: number, readonly name: { readonly id: number, readonly en: string, readonly ru: string } } }> | null } | null };

export type SearchTagsQueryVariables = Exact<{
  value: Scalars['String']['input'];
}>;


export type SearchTagsQuery = { readonly tags?: { readonly edges?: ReadonlyArray<{ readonly node: { readonly id: number, readonly name: { readonly id: number, readonly en: string, readonly ru: string } } }> | null } | null };

export type SearchAuthorsQueryVariables = Exact<{
  value: Scalars['String']['input'];
}>;


export type SearchAuthorsQuery = { readonly authors?: { readonly edges?: ReadonlyArray<{ readonly node: { readonly id: number, readonly name: string } }> | null } | null };


export const CardsDocument = gql`
    query cards {
  cards {
    nodes {
      id
      name {
        en
      }
      author {
        name
      }
      tags {
        id
        name {
          en
        }
      }
      versions {
        id
        cover
      }
    }
  }
}
    `;

/**
 * __useCardsQuery__
 *
 * To run a query within a Vue component, call `useCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCardsQuery();
 */
export function useCardsQuery(options: VueApolloComposable.UseQueryOptions<CardsQuery, CardsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CardsQuery, CardsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CardsQuery, CardsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CardsQuery, CardsQueryVariables>(CardsDocument, {}, options);
}
export function useCardsLazyQuery(options: VueApolloComposable.UseQueryOptions<CardsQuery, CardsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CardsQuery, CardsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CardsQuery, CardsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CardsQuery, CardsQueryVariables>(CardsDocument, {}, options);
}
export type CardsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CardsQuery, CardsQueryVariables>;
export const GamesDocument = gql`
    query games {
  games {
    id
    name {
      en
      ru
    }
    features
  }
}
    `;

/**
 * __useGamesQuery__
 *
 * To run a query within a Vue component, call `useGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGamesQuery();
 */
export function useGamesQuery(options: VueApolloComposable.UseQueryOptions<GamesQuery, GamesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GamesQuery, GamesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GamesQuery, GamesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GamesQuery, GamesQueryVariables>(GamesDocument, {}, options);
}
export function useGamesLazyQuery(options: VueApolloComposable.UseQueryOptions<GamesQuery, GamesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GamesQuery, GamesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GamesQuery, GamesQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GamesQuery, GamesQueryVariables>(GamesDocument, {}, options);
}
export type GamesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GamesQuery, GamesQueryVariables>;
export const ScenesDocument = gql`
    query scenes($id: Int!) {
  scenes(where: {games: {some: {id: {eq: $id}}}}) {
    edges {
      cursor
      node {
        id
        name {
          en
          ru
        }
        author {
          name
        }
        games {
          id
        }
        versions {
          id
          cover
        }
      }
    }
  }
}
    `;

/**
 * __useScenesQuery__
 *
 * To run a query within a Vue component, call `useScenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useScenesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useScenesQuery({
 *   id: // value for 'id'
 * });
 */
export function useScenesQuery(variables: ScenesQueryVariables | VueCompositionApi.Ref<ScenesQueryVariables> | ReactiveFunction<ScenesQueryVariables>, options: VueApolloComposable.UseQueryOptions<ScenesQuery, ScenesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ScenesQuery, ScenesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ScenesQuery, ScenesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ScenesQuery, ScenesQueryVariables>(ScenesDocument, variables, options);
}
export function useScenesLazyQuery(variables: ScenesQueryVariables | VueCompositionApi.Ref<ScenesQueryVariables> | ReactiveFunction<ScenesQueryVariables>, options: VueApolloComposable.UseQueryOptions<ScenesQuery, ScenesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ScenesQuery, ScenesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ScenesQuery, ScenesQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ScenesQuery, ScenesQueryVariables>(ScenesDocument, variables, options);
}
export type ScenesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ScenesQuery, ScenesQueryVariables>;
export const SearchFranchisesDocument = gql`
    query searchFranchises($value: String!) {
  franchises(
    where: {name: {or: [{en: {contains: $value}}, {ru: {contains: $value}}]}}
  ) {
    edges {
      node {
        id
        name {
          id
          en
          ru
        }
      }
    }
  }
}
    `;

/**
 * __useSearchFranchisesQuery__
 *
 * To run a query within a Vue component, call `useSearchFranchisesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchFranchisesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSearchFranchisesQuery({
 *   value: // value for 'value'
 * });
 */
export function useSearchFranchisesQuery(variables: SearchFranchisesQueryVariables | VueCompositionApi.Ref<SearchFranchisesQueryVariables> | ReactiveFunction<SearchFranchisesQueryVariables>, options: VueApolloComposable.UseQueryOptions<SearchFranchisesQuery, SearchFranchisesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchFranchisesQuery, SearchFranchisesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchFranchisesQuery, SearchFranchisesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<SearchFranchisesQuery, SearchFranchisesQueryVariables>(SearchFranchisesDocument, variables, options);
}
export function useSearchFranchisesLazyQuery(variables: SearchFranchisesQueryVariables | VueCompositionApi.Ref<SearchFranchisesQueryVariables> | ReactiveFunction<SearchFranchisesQueryVariables>, options: VueApolloComposable.UseQueryOptions<SearchFranchisesQuery, SearchFranchisesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchFranchisesQuery, SearchFranchisesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchFranchisesQuery, SearchFranchisesQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<SearchFranchisesQuery, SearchFranchisesQueryVariables>(SearchFranchisesDocument, variables, options);
}
export type SearchFranchisesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<SearchFranchisesQuery, SearchFranchisesQueryVariables>;
export const SearchTagsDocument = gql`
    query searchTags($value: String!) {
  tags(where: {name: {or: [{en: {contains: $value}}, {ru: {contains: $value}}]}}) {
    edges {
      node {
        id
        name {
          id
          en
          ru
        }
      }
    }
  }
}
    `;

/**
 * __useSearchTagsQuery__
 *
 * To run a query within a Vue component, call `useSearchTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTagsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSearchTagsQuery({
 *   value: // value for 'value'
 * });
 */
export function useSearchTagsQuery(variables: SearchTagsQueryVariables | VueCompositionApi.Ref<SearchTagsQueryVariables> | ReactiveFunction<SearchTagsQueryVariables>, options: VueApolloComposable.UseQueryOptions<SearchTagsQuery, SearchTagsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchTagsQuery, SearchTagsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchTagsQuery, SearchTagsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<SearchTagsQuery, SearchTagsQueryVariables>(SearchTagsDocument, variables, options);
}
export function useSearchTagsLazyQuery(variables: SearchTagsQueryVariables | VueCompositionApi.Ref<SearchTagsQueryVariables> | ReactiveFunction<SearchTagsQueryVariables>, options: VueApolloComposable.UseQueryOptions<SearchTagsQuery, SearchTagsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchTagsQuery, SearchTagsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchTagsQuery, SearchTagsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<SearchTagsQuery, SearchTagsQueryVariables>(SearchTagsDocument, variables, options);
}
export type SearchTagsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<SearchTagsQuery, SearchTagsQueryVariables>;
export const SearchAuthorsDocument = gql`
    query searchAuthors($value: String!) {
  authors(where: {name: {contains: $value}}) {
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useSearchAuthorsQuery__
 *
 * To run a query within a Vue component, call `useSearchAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchAuthorsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSearchAuthorsQuery({
 *   value: // value for 'value'
 * });
 */
export function useSearchAuthorsQuery(variables: SearchAuthorsQueryVariables | VueCompositionApi.Ref<SearchAuthorsQueryVariables> | ReactiveFunction<SearchAuthorsQueryVariables>, options: VueApolloComposable.UseQueryOptions<SearchAuthorsQuery, SearchAuthorsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchAuthorsQuery, SearchAuthorsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchAuthorsQuery, SearchAuthorsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<SearchAuthorsQuery, SearchAuthorsQueryVariables>(SearchAuthorsDocument, variables, options);
}
export function useSearchAuthorsLazyQuery(variables: SearchAuthorsQueryVariables | VueCompositionApi.Ref<SearchAuthorsQueryVariables> | ReactiveFunction<SearchAuthorsQueryVariables>, options: VueApolloComposable.UseQueryOptions<SearchAuthorsQuery, SearchAuthorsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchAuthorsQuery, SearchAuthorsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchAuthorsQuery, SearchAuthorsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<SearchAuthorsQuery, SearchAuthorsQueryVariables>(SearchAuthorsDocument, variables, options);
}
export type SearchAuthorsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<SearchAuthorsQuery, SearchAuthorsQueryVariables>;