import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarHistory from './CalendarHistory';
import HistoryWorkout from './HistoryWorkout';

import { HistoryParamList } from './HistoryParamList';

const Stack = createNativeStackNavigator<HistoryParamList>();

const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='CalendarHistory'
        component={CalendarHistory}
        options={{ title: 'Workout History', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name='HistoryWorkout'
        component={HistoryWorkout}
        options={({ route }) => ({
          headerTitleAlign: 'center',
          title: route.params.workout.splitName
        })}
      />
    </Stack.Navigator>
  );
};

export default HistoryStack;
