import { gql } from '@apollo/client';

export const ME = gql`
  query Query {
    me {
      id
      firstName
      lastName
      email
    }
  }
`;
