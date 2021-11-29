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
import SearchExercise from './SearchExercise';
import { Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import globalStyles from '../../globalStyles';

const Stack = createNativeStackNavigator<HomeParamList>();

type Props = {};

const HomeStack: React.FC<Props> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Group>
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
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name='SearchExercise'
          component={SearchExercise}
          options={({ navigation, route }) => ({
            title: 'Select Exercise',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={globalStyles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => route.params.submit?.current()}>
                <Text style={globalStyles.saveText}>Save</Text>
              </TouchableOpacity>
            )
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
