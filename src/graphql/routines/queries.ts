import { gql } from '@apollo/client';

export const GET_ROUTINES = gql`
  query GetRoutines {
    getRoutines {
      id
      description
      workouts {
        name
        exercises {
          exerciseName
          reps
          sets
        }
      }
    }
  }
`;
