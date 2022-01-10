import { gql } from '@apollo/client';

export const GET_HISTORY = gql`
  query Query {
    getHistory {
      id
      routineId
      splitName
      exercises {
        exerciseName
        volumeSets {
          set
          reps
          weight
        }
      }
      notes
      createdAt
    }
  }
`;
