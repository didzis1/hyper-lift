import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingScreen from './StartingScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='StartingScreen' component={StartingScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
