import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, List } from 'react-native-paper';
import SnackBar from '../../components/SnackBar';
import useDeleteRoutine from '../../hooks/useDeleteRoutine';
import { HomeNavProps } from './HomeParamList';

const Routine: React.FC<HomeNavProps<'Routine'>> = ({ navigation, route }) => {
  const { deleteRoutine } = useDeleteRoutine();

  const handleDeleteRoutine = async () => {
    try {
      await deleteRoutine(route.params.routine._id);
      navigation.navigate('Home', {
        snackBarMessage: 'Routine deleted successfully'
      });
    } catch (error) {
      navigation.navigate('Home', {
        snackBarError:
          'Something went wrong while trying to delete your routine'
      });
    }
  };

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
                        <List.Item
                          titleStyle={styles.text}
                          title={exercise.exerciseName}
                        />
                      </View>
                      <View style={{ flex: 1 }}>
                        <List.Item
                          titleStyle={styles.text}
                          title={exercise.sets}
                        />
                      </View>
                      <View style={{ flex: 1 }}>
                        <List.Item
                          titleStyle={styles.text}
                          title={exercise.reps}
                        />
                      </View>
                    </View>
                  </List.Section>
                </View>
              );
            })}
          </List.Section>
        );
      })}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            onPress={() =>
              navigation.navigate('EditRoutine', {
                initialData: route.params.routine
              })
            }
            mode='contained'
            uppercase={false}
            color='#2A9D8F'>
            Edit
          </Button>
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => handleDeleteRoutine()}
            mode='contained'
            uppercase={false}
            color='#E76F51'
            labelStyle={{ color: '#FFFFFF' }}>
            Delete
          </Button>
        </View>
      </View>
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
    fontWeight: 'bold',
    color: 'black',
    height: 20
  },
  text: {
    height: 20
  },
  exerciseContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 3
  },
  buttonContainer: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    marginVertical: 3,
    width: 200
  }
});

export default Routine;
