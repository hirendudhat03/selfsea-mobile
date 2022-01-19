import React from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $authId: String!
    $birthMonth: String!
    $birthYear: String!
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

export default function Mutation() {
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        email: 'r@gmail.com',
        authId: '123456',
        id: 1,
      },
    },
  );

  return <View></View>;
}
