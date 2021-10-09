import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Navigator>
      <Screen name='ProfileStack' />
      <Screen name='WorkoutStack' />
      <Screen name='HistoryStack' />
    </Navigator>
  );
};

export default AppTabs;
