import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { LOGIN } from '../graphql/auth/mutations';
import { LoginType } from '../types/auth/LoginType';
import { useApolloClient } from '@apollo/client';

const useLogin = () => {
  const [mutate, result] = useMutation(LOGIN);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const login = async (credentials: LoginType) => {
    const { data } = await mutate({
      variables: { loginInput: credentials }
    });
    await authStorage.setToken(data.login.value);

    apolloClient.resetStore();

    return data;
  };

  return { login, result };
};

export default useLogin;
