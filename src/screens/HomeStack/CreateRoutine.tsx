import React, { useEffect, useRef, useState } from 'react';
import { FieldArray, Formik } from 'formik';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Divider, Text, Title } from 'react-native-paper';
import globalStyles from '../../globalStyles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import FormikTextInput from '../../components/FormikTextInput';
import { HomeNavProps } from './HomeParamList';
import { ExerciseDataType } from '../../types/ExerciseDataType';

type FormSplit = {
  split: number;
  exercises: ExerciseDataType[];
};

const CreateRoutine: React.FC<HomeNavProps<'CreateRoutine'>> = ({
  navigation,
  route
}) => {
  const [formSplits, setFormSplits] = useState<FormSplit[]>([]);

  // Add exercise to form state when new exercise is selected
  useEffect(() => {
    if (route.params?.exercise != null && route.params?.split != null) {
      const splitExists = formSplits.find(
        (formSplit) => formSplit.split === route.params.split
      );
      // If the split exists (has at least one exercise in it), add exercise to that split
      if (splitExists) {
        const updatedSplits = formSplits.map((stateSplit) => {
          if (stateSplit.split === splitExists.split) {
            return {
              split: stateSplit.split,
              exercises: [...stateSplit.exercises, route.params.exercise!]
            };
          } else {
            return stateSplit;
          }
        });
        setFormSplits(() => updatedSplits);
      } else {
        // Split doesn't exist in the state (has no exercises), add split and exercise to state
        const newSplit = {
          split: route.params.split,
          exercises: [route.params.exercise]
        };
        setFormSplits(() => formSplits.concat(newSplit));
      }
    }

    // Remove exercise and split from parameters so that re-render doesn't add the exercise twice
    navigation.setParams({ exercise: null, split: null });
    return;
  }, [route.params?.exercise]);

  const dismiss = useRef(() => {});

  dismiss.current = () => {
    Alert.alert(
      'Dismiss new routine?',
      'Are you sure you want to go back? Routine will not be saved.',
      [
        {
          text: 'Yes',
          onPress: () => navigation.goBack(),
          style: 'default'
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelled the action'),
          style: 'cancel'
        }
      ]
    );
  };

  const handleSubmitRoutine = (values: any) => {
    console.log(values);
    console.log('exercises', formSplits);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Formik
          enableReinitialize
          initialValues={{
            description: '',
            workouts: formSplits.map((formSplit) => ({
              name: '',
              exercises: formSplit.exercises.map((exercise) => ({
                exerciseName: exercise.name,
                reps: '',
                sets: ''
              }))
            }))
          }}
          onSubmit={(values) => handleSubmitRoutine(values)}>
          {({ handleSubmit, values }) => (
            <View style={styles.form}>
              <FormikTextInput
                label='Give a name to your routine'
                placeholder='eg. Push Pull Legs'
                name='description'
              />
              <FieldArray name='workouts'>
                {({ push, remove }) => (
                  <>
                    {values.workouts.map((workout, workoutIndex) => (
                      <View key={workoutIndex} style={styles.splitBox}>
                        <Title>{`Day ${workoutIndex + 1}`}</Title>
                        <FormikTextInput
                          label='Name your split'
                          name={`workouts[${workoutIndex}.name]`}
                          placeholder='eg. Push A'
                        />
                        {workout.exercises.map((exercise, exerciseIndex) => {
                          return (
                            <View key={exercise.exerciseName}>
                              <View style={styles.exerciseContainer}>
                                <View style={styles.exerciseNameContainer}>
                                  <Text style={styles.exerciseName}>
                                    {exercise.exerciseName}
                                  </Text>
                                </View>
                                <View style={styles.repSetContainer}>
                                  <FormikTextInput
                                    placeholder='5'
                                    name={`workouts[${workoutIndex}].exercises[${exerciseIndex}].sets`}
                                    keyboardType='number-pad'
                                  />
                                </View>

                                <View style={styles.repSetContainer}>
                                  <FormikTextInput
                                    placeholder='10'
                                    name={`workouts[${workoutIndex}].exercises[${exerciseIndex}].reps`}
                                    keyboardType='number-pad'
                                  />
                                </View>
                              </View>
                              <Divider />
                            </View>
                          );
                        })}

                        <View style={styles.splitButtonContainer}>
                          <Button
                            style={globalStyles.searchButton}
                            mode='contained'
                            uppercase={false}
                            onPress={() =>
                              navigation.navigate('SearchExercise', {
                                isSelected: null,
                                returnTo: 'CreateRoutine',
                                split: workoutIndex
                              })
                            }
                            icon={() => (
                              <Ionicons
                                name='add-outline'
                                size={24}
                                color='white'
                              />
                            )}>
                            Exercise
                          </Button>

                          <Button
                            uppercase={false}
                            style={globalStyles.removeButton}
                            mode='contained'
                            onPress={() => remove(index)}
                            icon={() => (
                              <MaterialCommunityIcons
                                name='text-box-remove-outline'
                                size={24}
                                color='white'
                              />
                            )}>
                            Delete
                          </Button>
                        </View>
                      </View>
                    ))}
                    <Button
                      uppercase={false}
                      mode='contained'
                      onPress={() => push({ name: '', exercises: [] })}>
                      Add Split
                    </Button>
                  </>
                )}
              </FieldArray>
              <View style={styles.createContainer}>
                <Button
                  uppercase={false}
                  mode='contained'
                  onPress={handleSubmit}>
                  Create routine
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  form: {
    flex: 1
  },
  splitBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    padding: 15,
    marginVertical: 15,
    borderRadius: 8,
    elevation: 2
  },
  splitButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around'
  },
  exerciseContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  exerciseNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 3
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  repSetContainer: {
    flex: 1,
    marginHorizontal: 3
  },
  createContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default CreateRoutine;
// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
