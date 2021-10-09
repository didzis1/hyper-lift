import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/screens/AuthStack';
import { AuthContextProvider } from './src/contexts/AuthContext';
import { ApplicationProvider } from '@ui-kitten/components';
import { AuthContext } from './src/contexts/AuthContext';
import AppTabs from './src/screens/AppTabs';

import * as eva from '@eva-design/eva';
import { default as theme } from './theme.json';

const App = () => {
  const { token } = useContext(AuthContext);

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <AuthContextProvider>
        <NavigationContainer>
          {token ? <AppTabs /> : <AuthStack />}
        </NavigationContainer>
      </AuthContextProvider>
    </ApplicationProvider>
  );
};

export default App;
