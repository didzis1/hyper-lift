import { useApolloClient, useMutation } from '@apollo/client';
import { REGISTER } from '../graphql/auth/mutations';
import { RegisterType } from '../types/AuthTypes';

const useRegister = () => {
  const [mutate, result] = useMutation(REGISTER);
  const apolloClient = useApolloClient();

  const register = async (
    credentials: Omit<RegisterType, 'passwordConfirmation'>
  ) => {
    const { data } = await mutate({
      variables: {
        registerInput: {
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          email: credentials.email,
          password: credentials.password
        }
      }
    });
    apolloClient.resetStore();
    console.log('DATA', data);
    return data;
  };

  return { register, result };
};

export default useRegister;
