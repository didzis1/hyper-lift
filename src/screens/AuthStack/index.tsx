import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingScreen from './StartingScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='StartingScreen' component={StartingScreen} />
      <Screen name='LoginScreen' component={LoginScreen} />
      <Screen name='RegisterScreen' component={RegisterScreen} />
    </Navigator>
  );
};

export default AuthStack;
