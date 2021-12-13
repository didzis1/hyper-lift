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
import { HomeParamList } from './HomeParamList';
import CreateMaxLift from './CreateMaxLift';
import { Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import globalStyles from '../../globalStyles';
import Routine from './Routine';
import EditRoutine from './EditRoutine';

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
        name='Routine'
        component={Routine}
        options={({ route }) => ({
          title: route.params.routine.description,
          headerTitleAlign: 'center'
        })}
      />

      <Stack.Screen
        name='CreateRoutine'
        component={CreateRoutine}
        options={() => ({
          title: 'Create Routine',
          headerTitleAlign: 'center'
          // Is info button necessary? How does the user benefit from it?
          // headerRight: () => (
          //   <TouchableOpacity
          // 		onPress={() => }
          // 	>
          //     <Ionicons
          //       name='ios-information-circle-outline'
          //       size={28}
          //       color='#2A9D8F'
          //     />
          //   </TouchableOpacity>
          // )
        })}
      />

      <Stack.Screen
        name='EditRoutine'
        component={EditRoutine}
        options={() => ({
          title: 'Edit Routine',
          headerTitleAlign: 'center'
        })}
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
    </Stack.Navigator>
  );
};

export default HomeStack;
