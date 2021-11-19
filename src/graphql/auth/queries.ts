import { gql } from '@apollo/client';

// Me query doesn't fetch history
export const ME = gql`
  query Query {
    me {
      id
      firstName
      lastName
      email
      age
      liftingType
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
    }
  }
`;
