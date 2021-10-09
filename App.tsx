import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/screens/AuthStack';
import { AuthContextProvider } from './src/contexts/AuthContext';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthContextProvider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContextProvider>
    </ApplicationProvider>
  );
};

export default App;
