import React from 'react';
import { View } from 'react-native';
import { ProfileNavProps } from './ProfileParamList';
import globalStyles from '../../globalStyles';
import { Button, Text } from 'react-native-paper';

const MaxLifts = ({ navigation }: ProfileNavProps<'MaxLifts'>) => {
  return (
    <View style={globalStyles.androidSafeArea}>
      <Button mode='contained' onPress={() => navigation.push('AddMaxLift')}>
        Add Max Lift
      </Button>
      <Text>Add Max Lift</Text>
      <View></View>
    </View>
  );
};

export default MaxLifts;
