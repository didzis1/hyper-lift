import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStack from './ProfileStack';

import { FontAwesome } from '@expo/vector-icons';

const Stack = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='ProfileStack'
        component={ProfileStack}
        options={{
          title: 'Home',
          tabBarIcon: () => {
            return <FontAwesome name='home' size={24} color='black' />;
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default AppTabs;
