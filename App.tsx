import React, { useContext } from 'react';
import { ApolloProvider } from '@apollo/client';
import Routes from './src/Routes';
import createApolloClient from './src/utils/createApolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import { Provider as PaperProvider } from 'react-native-paper';
import ThemeContext, {
  ThemeContextProvider
} from './src/contexts/ThemeContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
        <ThemeContextProvider>
          <PaperProvider theme={theme}>
            <Routes />
          </PaperProvider>
        </ThemeContextProvider>
      </AuthStorageContext.Provider>
    </ApolloProvider>
  );
};

export default App;
