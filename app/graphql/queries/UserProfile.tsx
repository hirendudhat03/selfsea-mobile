import { gql } from 'graphql-request';

export const userEthnicityQuery = gql`
  query ethnicities {
    ethnicities {
      id
      name
    }
  }
`;

export const userPronounsQuery = gql`
  query pronouns {
    pronouns {
      id
      name
    }
  }
`;

export const userOrientationQuery = gql`
  query orientations {
    orientations {
      id
      name
    }
  }
`;

export const userGenderQuery = gql`
  query genders {
    genders {
      id
      name
    }
  }
`;

export const currentUserQuery = gql`
  query {
    currentUser {
      id
      authId
      email
      profile {
        id
        bio
        genders {
          id
          name
        }
        pronouns {
          id
          name
        }
        orientations {
          id
          name
        }
      }
    }
  }
`;
