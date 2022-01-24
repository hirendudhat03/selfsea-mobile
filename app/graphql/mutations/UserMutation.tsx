import { gql } from 'graphql-request';

export const createUserMutation = gql`
  mutation CreateUser(
    $email: String!
    $authId: String!
    $birthMonth: Month!
    $birthYear: Float!
    $username: String!
  ) {
    createUser(
      createUserInput: {
        email: $email
        authId: $authId
        birthMonth: $birthMonth
        birthYear: $birthYear
        username: $username
      }
    ) {
      id
      authId
      email
    }
  }
`;
