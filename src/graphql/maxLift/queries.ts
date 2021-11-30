import { gql } from '@apollo/client';

export const GET_MAX_LIFTS = gql`
  query Query {
    getMaxLifts {
      id
      exercise
      weight
      weightHistory {
        weight
        date
      }
    }
  }
`;
