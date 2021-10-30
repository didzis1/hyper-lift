import { gql } from '@apollo/client';

export const ME = gql`
  query Query {
    me {
      id
      firstName
      lastName
      email
      routines {
        id
        description
        workouts {
          name
          exercises {
            exerciseName
            reps
            sets
            weight
          }
        }
      }
      maxLifts {
        id
        exercise
        weight
      }
      history {
        id
        routineId
        splitName
        exercises {
          exerciseName
          setsData {
            set
            reps
            weight
          }
        }
        createdAt
      }
    }
  }
`;
