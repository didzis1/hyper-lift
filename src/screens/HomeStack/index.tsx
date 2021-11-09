import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import MaxLifts from './MaxLifts';
import Profile from './Profile';
import CreateRoutine from './CreateRoutine';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={({ navigation }) => ({
          title: 'Home',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.push('Profile')}>
              <Avatar.Text size={30} label='DZ' />
            </TouchableOpacity>
          )
        })}
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
    </Stack.Navigator>
  );
};

export default HomeStack;
