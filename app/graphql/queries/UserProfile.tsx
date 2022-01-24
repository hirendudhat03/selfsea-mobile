import { gql } from 'graphql-request';

export const createUserQuery = gql`
  query ethnicities {
    ethnicities {
      id
      name
    }
  }
`;
