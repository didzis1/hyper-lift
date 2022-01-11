import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  ActionSheetIOS
} from 'react-native';
import { Button, Subheading, Title, useTheme } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import useGetRoutines from '../../hooks/useGetRoutines';
import Loading from '../../components/Loading';
import WorkoutCard from '../../components/WorkoutCard';
// import { Ionicons } from '@expo/vector-icons';
import { WorkoutNavProps } from './WorkoutParamList';

const SelectWorkout: React.FC<WorkoutNavProps<'SelectWorkout'>> = ({
  navigation
}) => {
  const { routines, loading } = useGetRoutines();
  const [selectedSplit, setSelectedSplit] = useState<string>();
  const { colors } = useTheme();

  useEffect(() => {
    // Set first routine as the selected one
    // If not set, workout splits are not generated
    if (routines && routines.length > 0) {
      setSelectedSplit(routines[0]._id);
    }
  }, []);

  if (loading) return <Loading />;

  if (!routines)
    return (
      <View style={styles.container}>
        <View style={styles.noRoutineContainer}>
          <Subheading style={styles.noRoutineText}>
            Create a workout to start track your progress and massive gains!
          </Subheading>
        </View>
      </View>
    );

  const showiOSActionSheet = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...routines.map((routine) => routine.description)],
        cancelButtonIndex: 0,
        title: 'Select routine'
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
          return null;
        }

        return setSelectedSplit(routines[buttonIndex - 1]._id);
      }
    );

  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Title>Select your routine</Title>
        <View style={styles.pickerContainer}>
          {Platform.OS === 'ios' ? (
            <View>
              <Button
                onPress={showiOSActionSheet}
                mode='contained'
                uppercase={false}>
                {selectedSplit
                  ? `Selected: ${
                      routines.find((routine) => routine._id === selectedSplit)
                        ?.description
                    }`
                  : 'Select'}
              </Button>
            </View>
          ) : (
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
                selectedValue={selectedSplit}
                onValueChange={(split) => setSelectedSplit(split)}>
                {routines.map((routine) => (
                  <Picker.Item
                    key={routine._id}
                    label={routine.description}
                    value={routine._id}
                  />
                ))}
              </Picker>
            </View>
          )}
        </View>

        <View>
          <Title>Select your workout</Title>
        </View>

        <View style={styles.workoutsContainer}>
          {routines.map((routine) => {
            if (routine._id === selectedSplit) {
              return routine.workouts.map((workout) => (
                <WorkoutCard
                  key={workout.name}
                  navigation={navigation}
                  workout={{ ...workout, routineId: selectedSplit }}
                />
              ));
            }
            return null;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  noRoutineContainer: {
    alignItems: 'center',
    backgroundColor: '#2C4E5B',
    paddingVertical: 15,
    borderRadius: 15,
    elevation: 5
  },
  noRoutineText: {
    color: '#E9C46A',
    fontWeight: 'bold',
    marginHorizontal: 35,
    marginVertical: 15,
    textAlign: 'center'
  },
  workoutsContainer: {
    flex: 1,
    alignItems: 'center'
  },
  pickerContainer: {
    borderRadius: 4,
    borderColor: '#2C4E5B',
    marginTop: 8,
    marginBottom: 20
  },
  picker: {
    paddingVertical: 20
  }
});

export default SelectWorkout;
