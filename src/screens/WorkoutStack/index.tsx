import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectWorkout from './SelectWorkout';
import { WorkoutParamList } from './WorkoutParamList';

const Stack = createNativeStackNavigator<WorkoutParamList>();

const WorkoutStack = () => {
  return (
    <Stack.Navigator initialRouteName='SelectWorkout'>
      <Stack.Screen
        name='SelectWorkout'
        component={SelectWorkout}
        options={() => ({
          title: 'Workout',
          headerTitleAlign: 'center'
        })}
      />
    </Stack.Navigator>
  );
};

export default WorkoutStack;
