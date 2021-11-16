import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import MaxLifts from './MaxLifts';
import Profile from './Profile';
import CreateRoutine from './CreateRoutine';
import ChangeTheme from './ChangeTheme';

const Stack = createNativeStackNavigator();

type Props = {};

const HomeStack: React.FC<Props> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{ title: 'Profile', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name='MaxLifts'
        component={MaxLifts}
        options={{ title: 'Max Lifts', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name='CreateRoutine'
        component={CreateRoutine}
        options={{ title: 'Create Routine', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name='ChangeTheme'
        component={ChangeTheme}
        options={{ title: 'Preferences', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
