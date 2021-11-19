import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import MaxLifts from './MaxLifts';
import Settings from './Settings';
import CreateRoutine from './CreateRoutine';
import ChangeTheme from './ChangeTheme';
import Measurements from './Measurements';
import Profile from './Profile';
import EditMaxLift from './EditMaxLift';
import AddExercise from './AddExercise';
import { HomeParamList } from './HomeParamList';
import CreateMaxLift from './CreateMaxLift';

const Stack = createNativeStackNavigator<HomeParamList>();

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
        name='Settings'
        component={Settings}
        options={{ title: 'Settings', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{ title: 'Profile', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name='MaxLifts'
        component={MaxLifts}
        options={{
          title: 'Max Lifts',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen
        name='CreateMaxLift'
        component={CreateMaxLift}
        options={{
          title: 'Add max lift',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen
        name='EditMaxLift'
        component={EditMaxLift}
        options={({ route }) => ({
          headerTitleAlign: 'center',
          title: route.params.maxLift.exercise
        })}
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

      <Stack.Screen
        name='Measurements'
        component={Measurements}
        options={{ title: 'Preferences', headerTitleAlign: 'center' }}
      />

      <Stack.Screen name='AddExercise' component={AddExercise} />
    </Stack.Navigator>
  );
};

export default HomeStack;
