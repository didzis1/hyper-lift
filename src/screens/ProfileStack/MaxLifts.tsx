import React from 'react';
import { View } from 'react-native';
import { ProfileNavProps } from './ProfileParamList';
import globalStyles from '../../globalStyles';
import { Button, Text } from 'react-native-paper';

const MaxLifts = ({ navigation }: ProfileNavProps<'MaxLifts'>) => {
  return (
    <View style={globalStyles.androidSafeArea}>
      <Text>Add Max Lift</Text>
      <View></View>
      <Button mode='contained' onPress={() => navigation.push('AddMaxLift')}>
        Add Max Lift
      </Button>
    </View>
  );
};

export default MaxLifts;
