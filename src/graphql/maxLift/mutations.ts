import { gql } from '@apollo/client';

export const ADD_MAX_LIFT = gql`
  mutation Mutation($maxLiftData: NewMaxLiftInput!) {
    addMaxLift(maxLiftData: $maxLiftData) {
      id
      exercise
      weight
    }
  }
`;

export const EDIT_MAX_LIFT = gql`
  mutation EditMaxLiftMutation($maxLiftData: EditMaxLiftInput!) {
    editMaxLift(maxLiftData: $maxLiftData) {
      id
      exercise
      weight
    }
  }
`;

export const DELETE_MAX_LIFT = gql`
  mutation DeleteMaxLiftMutation($maxLiftData: RemoveMaxLiftInput!) {
    deleteMaxLift(maxLiftData: $maxLiftData)
  }
`;
