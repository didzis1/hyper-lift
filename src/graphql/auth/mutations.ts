import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Mutation($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const LOGIN = gql`
  mutation LoginMutation($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      value
    }
  }
`;

export const DELETE_ACCOUNT = gql`
  mutation DeleteAccountMutation {
    deleteAccount
  }
`;

export const UPDATE_PROFILE = gql`
  mutation Mutation($profileInput: ProfileInput!) {
    updateUser(profileInput: $profileInput) {
      firstName
      lastName
      liftingType
      age
    }
  }
`;
