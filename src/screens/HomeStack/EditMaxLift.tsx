import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { HomeNavProps } from './HomeParamList';

const EditMaxLift: React.FC<HomeNavProps<'EditMaxLift'>> = ({ route }) => {
  console.log('route', route.params.maxLift.weight);
  return (
    <View>
      <Text>Edit max lift</Text>
      <View>
        <Text>{route.params.maxLift.exercise}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditMaxLift;
