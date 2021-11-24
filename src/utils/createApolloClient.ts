import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Constants from 'expo-constants';
import { AuthStorageType } from './authStorage';
const httpLink = createHttpLink({
  uri: `http://${Constants?.manifest?.extra?.local_ip}:4000/graphql`
});

const createApolloClient = (authStorage: AuthStorageType) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const authToken = await authStorage.getToken();
      return {
        headers: {
          ...headers,
          authorization: authToken ? `Bearer ${authToken}` : ''
        }
      };
    } catch (error) {
      console.log(error);
      return {
        headers
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
};

export default createApolloClient;
