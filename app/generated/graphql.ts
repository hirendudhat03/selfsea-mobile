import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BaseObject = {
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['String'];
};

export type Query = {
  currentUser?: Maybe<User>;
};

export type User = BaseObject & {
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type CurrentUserFieldsFragment = { id: string, username: string, createdAt: string, updatedAt: string };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { currentUser?: { id: string, username: string, createdAt: string, updatedAt: string } | null | undefined };

export const CurrentUserFieldsFragmentDoc = gql`
    fragment CurrentUserFields on User {
  id
  username
  createdAt
  updatedAt
}
    `;
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    ...CurrentUserFields
  }
}
    ${CurrentUserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    currentUser(variables?: CurrentUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CurrentUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CurrentUserQuery>(CurrentUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'currentUser');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;