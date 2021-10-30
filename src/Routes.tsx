import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './screens/AuthStack';
import AppTabs from './screens/AppTabs';
import useCurrentUser from './hooks/useCurrentUser';
import { ActivityIndicator } from 'react-native';

const Routes = () => {
  const { currentUser, loading } = useCurrentUser();

  if (loading) {
    return <ActivityIndicator size='large' />;
  }

  console.log(currentUser);
  return (
    <NavigationContainer>
      {currentUser ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
