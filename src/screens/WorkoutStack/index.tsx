import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectWorkout from './SelectWorkout';
import ActiveWorkout from './ActiveWorkout';
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
      <Stack.Screen
        name='ActiveWorkout'
        component={ActiveWorkout}
        options={() => ({
          title: 'Time to workout',
          headerTitleAlign: 'center'
        })}
      />
    </Stack.Navigator>
  );
};

export default WorkoutStack;
