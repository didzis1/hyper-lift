import { gql } from '@apollo/client';

export const CREATE_HISTORY = gql`
  mutation Mutation($historyData: NewHistoryInput!) {
    addHistory(historyData: $historyData) {
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

export const EDIT_HISTORY = gql`
  mutation EditHistory($editHistoryData: EditHistoryInput!) {
    editHistory(editHistoryData: $editHistoryData) {
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
