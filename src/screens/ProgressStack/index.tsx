import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Progress from './Progress';

const Stack = createNativeStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Progress'
        component={Progress}
        options={{ title: 'Progress', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

export default HistoryStack;
