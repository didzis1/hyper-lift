import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStack from './ProfileStack';

const Stack = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ProfileStack' component={ProfileStack} />
    </Stack.Navigator>
  );
};

export default AppTabs;
