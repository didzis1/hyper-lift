import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { AuthContextProvider } from './src/contexts/AuthContext';
import Routes from './src/Routes';
import createApolloClient from './src/utils/createApolloClient';

const apolloClient = createApolloClient();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ApolloProvider>
  );
};

export default App;
