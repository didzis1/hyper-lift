import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

import { LineChart } from 'react-native-chart-kit';
import { Title, useTheme } from 'react-native-paper';
import Loading from '../../components/Loading';

import useGetMaxLift from '../../hooks/useGetMaxLift';
import { MaxLiftType } from '../../types/MaxLiftType';

const Progress = () => {
  const [selectedMaxLift, setSelectedMaxLift] = useState<MaxLiftType | null>(
    null
  );
  const { colors } = useTheme();
  const { maxLifts } = useGetMaxLift();

  useEffect(() => {
    // Set first max Lift as the selected one
    // If not set, maxLift chart is not generated
    if (maxLifts && maxLifts.length > 0) {
      setSelectedMaxLift(maxLifts[0]);
    }
  }, []);

  if (!maxLifts) return <Loading />;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Title>Max lifts</Title>
          <View
            style={{
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              borderColor: colors.primary,
              borderRadius: 5
            }}>
            <Picker
              style={styles.picker}
              mode='dialog'
              selectedValue={selectedMaxLift}
              onValueChange={(maxLift) => setSelectedMaxLift(maxLift)}>
              {maxLifts.map((maxLift) => (
                <Picker.Item
                  key={maxLift.id}
                  label={maxLift.exercise}
                  value={maxLift}
                />
              ))}
            </Picker>
          </View>
        </View>
        {selectedMaxLift ? (
          <LineChart
            data={{
              labels: ['kg'],
              datasets: [
                {
                  data: selectedMaxLift?.weightHistory.map(
                    (weightHistory) => weightHistory.weight
                  ),
                  strokeWidth: 2 // optional
                }
              ]
            }}
            width={Dimensions.get('window').width - 40} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: '#2C4E5B',
              backgroundGradientFrom: '#2C4E5B',
              backgroundGradientTo: '#2C4E5B',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  picker: {
    paddingVertical: 20
  }
});

export default Progress;
