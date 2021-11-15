import { gql } from '@apollo/client';

export const ME = gql`
  query Query {
    me {
      id
      firstName
      lastName
      email
      age
      routines {
        id
        description
        workouts {
          name
          exercises {
            exerciseName
            setsData {
              reps
              set
              weight
            }
          }
        }
      }
      liftingType
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
          historySets {
            set
            reps
            weight
          }
        }
        notes
        createdAt
      }
    }
  }
`;
