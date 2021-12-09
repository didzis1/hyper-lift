import { gql } from '@apollo/client';

export const CREATE_ROUTINE = gql`
  mutation Mutation($routineData: NewRoutineInput!) {
    createRoutine(routineData: $routineData) {
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
