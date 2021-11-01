import React from 'react';
import { View } from 'react-native';
import { ProfileNavProps } from './ProfileParamList';
import globalStyles from '../../globalStyles';
import { Text } from 'react-native-paper';

const MaxLiftsScreen = ({}: ProfileNavProps<'MaxLifts'>) => {
  return (
    <View style={globalStyles.androidSafeArea}>
      <Text>Max lifts</Text>
    </View>
  );
};

export default MaxLiftsScreen;
