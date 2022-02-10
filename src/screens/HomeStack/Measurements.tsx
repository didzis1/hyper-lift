import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Switch, Text } from 'react-native-paper';
import { HomeNavProps } from './HomeParamList';
import { PreferenceContext } from '../../contexts/PreferenceContext';

type WeightSwitchProps = {
  switchValue: boolean;
  setSwitchValue: React.Dispatch<React.SetStateAction<boolean>>;
};

const WeightSwitch = ({ switchValue, setSwitchValue }: WeightSwitchProps) => {
  return (
    <View style={styles.switchContainer}>
      <Text>kgs</Text>
      <Switch
        onValueChange={() => setSwitchValue(!switchValue)}
        value={switchValue}
      />
      <Text>lbs</Text>
    </View>
  );
};

const Measurements: React.FC<HomeNavProps<'Measurements'>> = ({}) => {
  const { toggleWeightMeasurement, weightMeasurement } =
    useContext(PreferenceContext);
  const [switchValue, setSwitchValue] = useState<boolean>(
    weightMeasurement === 'lbs' ? true : false
  );

  useEffect(() => {
    toggleWeightMeasurement(switchValue);
  }, [switchValue]);

  return (
    <View>
      <List.Section>
        <List.Subheader>Change weight</List.Subheader>
        <List.Item
          title='Weight unit'
          right={() => (
            <WeightSwitch
              switchValue={switchValue}
              setSwitchValue={setSwitchValue}
            />
          )}
        />
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
