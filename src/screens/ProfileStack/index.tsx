import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import AddMaxLift from './AddMaxLift';
import MaxLifts from './MaxLifts';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{ title: 'Home', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name='MaxLifts'
        component={MaxLifts}
        options={{ title: 'Max Lifts', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name='AddMaxLift'
        component={AddMaxLift}
        options={{ title: 'Add new max', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
