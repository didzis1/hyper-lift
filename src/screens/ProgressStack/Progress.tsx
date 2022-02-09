import React, { useState, useEffect, useContext } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

import { LineChart } from 'react-native-chart-kit';
import { Title, useTheme, Text } from 'react-native-paper';
import Loading from '../../components/Loading';

import useGetMaxLift from '../../hooks/useGetMaxLift';
import { MaxLiftType } from '../../types/MaxLiftType';
import { PreferenceContext } from '../../contexts/PreferenceContext';
import { calculateGrowth } from '../../utils/calculateGrowth';

const Progress = () => {
  const [selectedMaxLift, setSelectedMaxLift] = useState<MaxLiftType | null>(
    null
  );
  const { weightMeasurement, isDarkTheme } = useContext(PreferenceContext);
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
              backgroundColor: isDarkTheme ? colors.accent : '#FFFFFF',
              borderColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: 5
            }}>
            <Picker
              style={[
                styles.picker,
                {
                  color: colors.text
                }
              ]}
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
          <>
            <LineChart
              data={{
                labels: [weightMeasurement],
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
            <View>
              <Text>
                {selectedMaxLift.exercise} has increased by{' '}
                {calculateGrowth(selectedMaxLift.weightHistory)}% since your
                first marked date.
              </Text>
            </View>
          </>
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
