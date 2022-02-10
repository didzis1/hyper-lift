import React, { useState, useEffect, useContext } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  ActionSheetIOS,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

import { LineChart } from 'react-native-chart-kit';
import { Title, useTheme, Text, Button } from 'react-native-paper';
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

  const showiOSActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...maxLifts.map((maxLift) => maxLift.exercise)],
        cancelButtonIndex: 0,
        title: 'Select max lift'
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          return null;
        }

        return setSelectedMaxLift(maxLifts[buttonIndex - 1]);
      }
    );
  };

  const handleValueChange = (id: string) => {
    const maxLift = maxLifts.find((maxLift) => maxLift.id === id);

    if (!maxLift) {
      return setSelectedMaxLift(null);
    }

    return setSelectedMaxLift(maxLift);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Title>Max lifts</Title>
          {Platform.OS === 'ios' ? (
            <View>
              <Button
                onPress={showiOSActionSheet}
                mode='contained'
                uppercase={false}>
                {selectedMaxLift
                  ? `Selected: ${
                      maxLifts.find((maxLift) => maxLift === selectedMaxLift)
                        ?.exercise
                    }`
                  : 'Select'}
              </Button>
            </View>
          ) : (
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
                selectedValue={selectedMaxLift?.exercise}
                onValueChange={(maxLift) => handleValueChange(maxLift)}>
                {maxLifts.map((maxLift) => (
                  <Picker.Item
                    key={maxLift.id}
                    label={maxLift.exercise}
                    value={maxLift.id}
                  />
                ))}
              </Picker>
            </View>
          )}

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
