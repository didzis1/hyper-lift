import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import SnackBar from '../../components/SnackBar';
import { HomeNavProps } from './HomeParamList';

const Routine: React.FC<HomeNavProps<'Routine'>> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      {route.params.routine.workouts.map((workout, index) => {
        return (
          <List.Section key={`${workout.name}-${index}`}>
            <List.Subheader style={{ paddingBottom: 0 }}>
              {workout.name}
            </List.Subheader>
            <List.Section>
              <View style={styles.headerContainer}>
                <View style={{ flex: 2 }}>
                  <List.Item titleStyle={styles.title} title='Exercise' />
                </View>
                <View style={{ flex: 1 }}>
                  <List.Item titleStyle={styles.title} title='Sets' />
                </View>
                <View style={{ flex: 1 }}>
                  <List.Item titleStyle={styles.title} title='Reps' />
                </View>
              </View>
            </List.Section>
            {workout.exercises.map((exercise, index) => {
              return (
                <View key={`${exercise.exerciseName}-${index}`}>
                  <List.Section>
                    <View style={styles.exerciseContainer}>
                      <View style={{ flex: 2 }}>
                        <List.Item title={exercise.exerciseName} />
                      </View>
                      <View style={{ flex: 1 }}>
                        <List.Item title={exercise.sets} />
                      </View>
                      <View style={{ flex: 1 }}>
                        <List.Item title={exercise.reps} />
                      </View>
                    </View>
                  </List.Section>
                </View>
              );
            })}
          </List.Section>
        );
      })}
      <SnackBar navigation={navigation} route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5
  },
  title: {
    fontWeight: 'bold'
  },
  exerciseContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 3
  }
});

export default Routine;
