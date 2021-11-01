import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import MaxLifts from './MaxLifts';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='MaxLifts' component={MaxLifts} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
