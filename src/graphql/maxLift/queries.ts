import { gql } from '@apollo/client';

export const GET_MAX_LIFTS = gql`
  query GetMaxLifts {
    getMaxLifts {
      id
      exercise
      weight
    }
  }
`;
