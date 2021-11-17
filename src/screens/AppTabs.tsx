import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import WorkoutStack from './WorkoutStack';
import HistoryStack from './HistoryStack';
import ProgressStack from './ProgressStack';
import { AppParamList } from './AppParamList';

import { Feather, AntDesign } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

const Stack = createBottomTabNavigator<AppParamList>();

const AppTabs = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='HomeStack'>
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
                color={focused ? theme.colors.primary : 'grey'}
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
                color={focused ? theme.colors.primary : 'grey'}
              />
            );
          }
        }}
      />

      <Stack.Screen
        name='HistoryStack'
        component={HistoryStack}
        options={{
          title: 'History',
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name='clockcircleo'
                size={24}
                color={focused ? theme.colors.primary : 'grey'}
              />
            );
          }
        }}
      />

      <Stack.Screen
        name='ProgressStack'
        component={ProgressStack}
        options={{
          title: 'Progress',
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name='barschart'
                size={24}
                color={focused ? theme.colors.primary : 'grey'}
              />
            );
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default AppTabs;
