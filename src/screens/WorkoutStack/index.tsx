import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutPreview from './WorkoutPreview';

const Stack = createNativeStackNavigator();

const WorkoutStack = () => {
  return (
    <Stack.Navigator initialRouteName='WorkoutPreview'>
      <Stack.Screen name='WorkoutPreview' component={WorkoutPreview} />
    </Stack.Navigator>
  );
};

export default WorkoutStack;
