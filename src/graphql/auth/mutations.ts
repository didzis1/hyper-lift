import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Mutation($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      id
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
