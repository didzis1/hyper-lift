import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { AuthStorageType } from './authStorage';

const httpLink = createHttpLink({
  uri: `https://peaceful-ocean-62346.herokuapp.com/graphql`
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
