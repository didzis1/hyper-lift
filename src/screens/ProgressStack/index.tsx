import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Progress from './Progress';

import { ProgressParamList } from './ProgressParamList';

const Stack = createNativeStackNavigator<ProgressParamList>();

type Props = {};

const HistoryStack: React.FC<Props> = ({}) => {
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
