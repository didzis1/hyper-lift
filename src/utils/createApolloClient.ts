import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { LOCAL_IP } from '@env';

const httpLink = createHttpLink({
  uri: `http://${LOCAL_IP}:4000/graphql`
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
};

export default createApolloClient;
