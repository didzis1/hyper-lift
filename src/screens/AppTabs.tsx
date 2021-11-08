import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';

import { Feather } from '@expo/vector-icons';
import WorkoutStack from './WorkoutStack';

const Stack = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='HomeStack'
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name='home'
                size={24}
                color={focused ? '#0099FF' : 'grey'}
              />
            );
          }
        }}
      />
      <Stack.Screen
        name='WorkoutStack'
        component={WorkoutStack}
        options={{
          title: 'Workout',
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name='zap'
                size={24}
                color={focused ? '#0099FF' : 'grey'}
              />
            );
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default AppTabs;
