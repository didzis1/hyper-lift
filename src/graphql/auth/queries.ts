import { gql } from '@apollo/client';

// Me query only fetches user main data (excludes history, maxLifts and routines)
export const ME = gql`
  query Query {
    me {
      _id
      firstName
      lastName
      age
      email
      liftingType
    }
  }
`;
