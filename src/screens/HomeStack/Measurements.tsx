import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Switch, Text } from 'react-native-paper';
import { HomeNavProps } from './HomeParamList';

const WeightSwitch = () => {
  return (
    <View style={styles.switchContainer}>
      <Text>kgs</Text>
      <Switch value={false} />
      <Text>lbs</Text>
    </View>
  );
};

const Measurements: React.FC<HomeNavProps<'Measurements'>> = () => {
  return (
    <View>
      <List.Section>
        <List.Subheader>Change weight</List.Subheader>
        <List.Item title='Weight unit' right={() => <WeightSwitch />} />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10
  }
});

export default Measurements;
