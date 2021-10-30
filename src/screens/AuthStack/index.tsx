import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingScreen from './StartingScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name='StartingScreen'
        component={StartingScreen}
      />
      <Stack.Screen
        options={{
          title: 'Go Back'
        }}
        name='LoginScreen'
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ title: 'Go Back' }}
        name='RegisterScreen'
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
