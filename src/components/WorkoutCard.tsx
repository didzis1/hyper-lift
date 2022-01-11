import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Title, useTheme, Surface, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { WorkoutSplitType } from '../types/RoutineType';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WorkoutParamList } from '../screens/WorkoutStack/WorkoutParamList';

type WorkoutCardProps = {
  workout: WorkoutSplitType & { routineId: string };
  navigation: NativeStackNavigationProp<WorkoutParamList, 'SelectWorkout'>;
};

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, navigation }) => {
  const { colors } = useTheme();
  return (
    <Surface
      style={[
        styles.routineCard,
        {
          backgroundColor: colors.primary
        }
      ]}>
      <View style={{ flex: 1 }}>
        <Title style={[styles.routineTitle, { color: colors.accent }]}>
          {workout.name}
        </Title>
      </View>
      <View style={styles.routineDataContainer}>
        <View style={styles.dataRow}>
          <View>
            <Ionicons name='sync-outline' size={24} color={colors.accent} />
          </View>
          <View style={styles.textRow}>
            <Text style={styles.dataText}>
              {workout.exercises.length} exercises
            </Text>
          </View>
        </View>

        <View style={styles.dataRow}>
          <View>
            <Ionicons name='layers' size={24} color={colors.accent} />
          </View>
          <View style={styles.textRow}>
            <Text style={styles.dataText}>
              {workout.exercises.reduce((acc, exercise) => {
                return acc + exercise.sets;
              }, 0)}{' '}
              total sets
            </Text>
          </View>
        </View>

        <View style={styles.dataRow}>
          <View>
            <Ionicons name='flame-sharp' size={24} color={colors.accent} />
          </View>
          <View style={styles.textRow}>
            <Text style={styles.dataText}>
              {workout.exercises.reduce((acc, exercise) => {
                return acc + exercise.reps;
              }, 0)}{' '}
              total reps
            </Text>
          </View>
        </View>
        <View style={styles.dataRow}>
          <Button
            onPress={() =>
              navigation.navigate('ActiveWorkout', {
                workout
              })
            }
            mode='contained'
            uppercase={false}
            color={colors.accent}>
            Start workout
          </Button>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10
  },
  routineCard: {
    margin: 15,
    width: 280,
    paddingVertical: 10,
    borderRadius: 15,
    flex: 1,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  routineDataContainer: {
    paddingTop: 10
  },
  dataRow: {
    flexDirection: 'row',
    marginVertical: 3
  },
  textRow: {
    marginLeft: 8
  },
  routineTitle: {
    textAlign: 'center'
  },
  dataText: {
    color: '#FFFFFF',
    fontSize: 17
  },
  routineIcon: {
    width: 25,
    height: 25
  },
  noRoutineContainer: {
    backgroundColor: '#2C4E5B',
    borderRadius: 15,
    padding: 15,
    marginVertical: 16
  },
  noRoutineInnerCardContainer: {
    width: '70%',
    alignSelf: 'center'
  },
  noLiftsText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#E9C46A'
  },
  buttonText: {
    fontSize: 16,
    color: '#000000'
  },
  carouselLeftArrow: {
    position: 'absolute',
    left: 15,
    top: '45%'
  },
  carouselRightArrow: {
    position: 'absolute',
    right: 15,
    top: '45%'
  }
});

export default WorkoutCard;
