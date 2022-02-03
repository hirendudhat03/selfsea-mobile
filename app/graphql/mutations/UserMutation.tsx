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
      input: {
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

export const updateProfileMutation = gql`
  mutation UpadteProfile(
    $isPrivate: Boolean!
    $location: String!
    $bio: String!
  ) {
    updateProfile(
      input: { isPrivate: $isPrivate, location: $location, bio: $bio }
    ) {
      id
      isPrivate
      location
      bio
    }
  }
`;
// $pronouns: [ProfileAssignmentsInput!]
// $orientations: [ProfileAssignmentsInput!]
// $genders: [ProfileAssignmentsInput!]
// $ethnicities: [ProfileAssignmentsInput!]
// genders: $genders
// orientations: $orientations
// ethnicities: $ethnicities
// pronouns: $pronouns
export const acceptCurrentTermsMutation = gql`
  mutation {
    acceptCurrentTerms {
      acceptCurrentTerms
    }
  }
`;
