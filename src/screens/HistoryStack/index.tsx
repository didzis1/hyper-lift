import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarHistory from './CalendarHistory';

const Stack = createNativeStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='CalendarHistory'
        component={CalendarHistory}
        options={{ title: 'Workout History', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

export default HistoryStack;
