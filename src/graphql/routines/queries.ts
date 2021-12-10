import { gql } from '@apollo/client';

export const GET_ROUTINES = gql`
  query GetRoutines {
    getRoutines {
      _id
      description
      workouts {
        name
        exercises {
          exerciseName
          reps
          sets
        }
      }
      totalSplits
      totalSets
      totalReps
    }
  }
`;
