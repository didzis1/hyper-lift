import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, Text, Title, useTheme } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import useGetRoutines from '../../hooks/useGetRoutines';
import Loading from '../../components/Loading';
import WorkoutCard from '../../components/WorkoutCard';

const SelectWorkout = ({}) => {
  const [selectedSplit, setSelectedSplit] = useState<string>();
  const { colors } = useTheme();
  const { routines, loading } = useGetRoutines();

  if (loading) return <Loading />;

  if (!routines)
    return (
      <View>
        <Text>You currently have no routines</Text>
      </View>
    );

  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Title>Select your routine</Title>
        <View>
          <Picker
            mode='dropdown'
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

        <View>
          <Title>Select your workout</Title>
          <Divider />
        </View>

        <View style={styles.workoutsContainer}>
          {routines.map((routine) => {
            if (routine._id === selectedSplit) {
              return routine.workouts.map((workout) => (
                <WorkoutCard
                  key={workout.name}
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
  workoutsContainer: {
    flex: 1,
    alignItems: 'center'
  }
});

export default SelectWorkout;
