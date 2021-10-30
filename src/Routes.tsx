import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './screens/AuthStack';
import AppTabs from './screens/AppTabs';

import { AuthContext } from './contexts/AuthContext';

const Routes = () => {
  const { token } = useContext(AuthContext);
  console.log(token);
  return (
    <NavigationContainer>
      {token ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
