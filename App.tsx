import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Routes from './src/Routes';
import createApolloClient from './src/utils/createApolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import { PreferenceProvider } from './src/contexts/PreferenceContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
        <PreferenceProvider>
          <SafeAreaProvider>
            <Routes />
          </SafeAreaProvider>
        </PreferenceProvider>
      </AuthStorageContext.Provider>
    </ApolloProvider>
  );
};

export default App;
