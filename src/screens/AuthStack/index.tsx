import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingScreen from './StartingScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='StartingScreen' component={StartingScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
