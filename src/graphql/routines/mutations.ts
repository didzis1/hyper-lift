import { gql } from '@apollo/client';

export const CREATE_ROUTINE = gql`
  mutation Mutation($routineData: NewRoutineInput!) {
    createRoutine(routineData: $routineData) {
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
    }
  }
`;

export const DELETE_ROUTINE = gql`
  mutation Mutation($routineData: DeleteRoutineInput!) {
    deleteRoutine(routineData: $routineData)
  }
`;

export const EDIT_ROUTINE = gql`
  mutation EditRoutine($routineData: EditRoutineInput!) {
    editRoutine(routineData: $routineData) {
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
      totalSets
      totalReps
      totalSplits
    }
  }
`;
