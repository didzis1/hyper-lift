import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Routes from './src/Routes';
import createApolloClient from './src/utils/createApolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import { ThemeContextProvider } from './src/contexts/ThemeContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
        <ThemeContextProvider>
          <Routes />
        </ThemeContextProvider>
      </AuthStorageContext.Provider>
    </ApolloProvider>
  );
};

export default App;
