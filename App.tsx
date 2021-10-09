import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/screens/AuthStack';
import { AuthContextProvider } from './src/contexts/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
