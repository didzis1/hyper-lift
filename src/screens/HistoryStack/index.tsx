import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import History from './History';

const Stack = createNativeStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='History'
        component={History}
        options={{ title: 'History', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

export default HistoryStack;
