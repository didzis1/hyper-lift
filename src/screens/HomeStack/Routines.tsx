import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { HomeNavProps } from './HomeParamList';

const Routines: React.FC<HomeNavProps<'Routines'>> = ({}) => {
  return (
    <View>
      <Text>All routines</Text>
    </View>
  );
};

export default Routines;
