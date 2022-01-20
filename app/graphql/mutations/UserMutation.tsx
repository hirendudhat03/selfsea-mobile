import { gql } from 'graphql-request';

export const createUserMutation = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $authId: String!
    $birthMonth: Month!
    $birthYear: Float!
    $username: String!
  ) {
    createUser(
      createUserInput: {
        email: $email
        password: $password
        authId: $authId
        birthMonth: $birthMonth
        birthYear: $birthYear
        username: $username
      }
    ) {
      createUserInput {
        id
        authId
        email
      }
    }
  }
`;
