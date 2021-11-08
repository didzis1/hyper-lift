import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { MaxLiftType } from '../types/auth/UserType';

type Props = {
  maxLifts: MaxLiftType[];
};

const MaxLiftCard = ({ maxLifts }: Props) => {
  console.log(maxLifts);
  return (
    <View style={styles.container}>
      {maxLifts.map((maxLift) => {
        return (
          <View key={maxLift.id}>
            <Text style={styles.exerciseText}>{maxLift.exercise}</Text>
            <Text style={styles.weightText}>{maxLift.weight}kg</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  exerciseContainer: {
    borderWidth: 1,
    borderColor: '#FfFFFF',
    flexDirection: 'column',
    alignItems: 'center'
  },
  exerciseText: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  weightText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});

export default MaxLiftCard;
