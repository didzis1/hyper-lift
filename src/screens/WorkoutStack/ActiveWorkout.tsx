import React, { useContext } from 'react';
import { Formik, FieldArray } from 'formik';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Subheading, Title, Text } from 'react-native-paper';
import { AddHistoryInput } from '../../types/HistoryType';
import { WorkoutNavProps } from './WorkoutParamList';
import { PreferenceContext } from '../../contexts/PreferenceContext';

import useCreateHistory from '../../hooks/useCreateHistory';

import { FontAwesome } from '@expo/vector-icons';
import FormikTextInput from '../../components/FormikTextInput';

const ActiveWorkout: React.FC<WorkoutNavProps<'ActiveWorkout'>> = ({
  route,
  navigation
}) => {
  const { createNewHistoryLift } = useCreateHistory();
  const { weightMeasurement } = useContext(PreferenceContext);

  const initialValues = {
    routineId: route.params.workout.routineId,
    notes: '',
    splitName: route.params.workout.name,
    exercises: route.params.workout.exercises.map((exercise) => ({
      exerciseName: exercise.exerciseName,
      volumeSets: [...Array(exercise.sets).keys()].map((set) => ({
        set: set + 1,
        reps: '',
        weight: ''
      }))
    }))
  };

  const handleCreateNewHistory = async (values: AddHistoryInput) => {
    console.log(values);
    try {
      const newHistory = await createNewHistoryLift(values);
      console.log(newHistory);
      navigation.navigate('SelectWorkout');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title>{route.params.workout.name}</Title>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validateOnChange={false}
          onSubmit={(values) =>
            handleCreateNewHistory({
              ...values,
              exercises: values.exercises.map((exercise) => ({
                ...exercise,
                volumeSets: exercise.volumeSets.map((volumeSet) => ({
                  ...volumeSet,
                  reps: Number(volumeSet.reps),
                  weight: Number(volumeSet.weight)
                }))
              }))
            })
          }>
          {({ handleSubmit, values }) => {
            return (
              <View style={{ flex: 1 }}>
                <FieldArray name='exercises'>
                  {() => (
                    <>
                      {values.exercises.map((exercise, exerciseIndex) => {
                        return (
                          <View
                            key={exerciseIndex}
                            style={{ marginVertical: 15 }}>
                            <View style={styles.exerciseContainer}>
                              <Subheading>{exercise.exerciseName}</Subheading>
                              <View style={styles.exerciseHeadings}>
                                <View style={styles.alignHeadingContent}>
                                  <Text style={styles.headingText}>Set</Text>
                                </View>
                                <View style={styles.alignHeadingContent}>
                                  <Text style={styles.headingText}>
                                    Reps achieved
                                  </Text>
                                </View>
                                <View style={styles.alignHeadingContent}>
                                  <Text style={styles.headingText}>
                                    Weights used
                                  </Text>
                                </View>
                              </View>
                            </View>

                            {exercise.volumeSets.map(
                              (volumeSet, volumeSetIndex) => {
                                return (
                                  <View
                                    key={volumeSetIndex}
                                    style={styles.exerciseHeadings}>
                                    <View style={styles.alignHeadingContent}>
                                      <Text>{volumeSet.set}</Text>
                                    </View>
                                    <View style={styles.alignHeadingContent}>
                                      <FormikTextInput
                                        name={`exercises[${exerciseIndex}].volumeSets[${volumeSetIndex}].reps`}
                                        placeholder='2'
                                        keyboardType='number-pad'
                                      />
                                    </View>
                                    <View style={styles.alignHeadingContent}>
                                      <FormikTextInput
                                        name={`exercises[${exerciseIndex}].volumeSets[${volumeSetIndex}].weight`}
                                        placeholder={`90 ${weightMeasurement}`}
                                        keyboardType='number-pad'
                                      />
                                    </View>
                                  </View>
                                );
                              }
                            )}
                          </View>
                        );
                      })}
                    </>
                  )}
                </FieldArray>
                <Subheading>Optional notes about workout</Subheading>
                <FormikTextInput
                  name='notes'
                  placeholder='Felt stronger on bench press...'
                />
                <View>
                  <Button
                    onPress={handleSubmit}
                    mode='contained'
                    color='#E9C46A'
                    uppercase={false}
                    icon={() => (
                      <FontAwesome name='check' size={24} color='#2C4E5B' />
                    )}>
                    Complete workout
                  </Button>
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  exerciseHeadings: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5
  },
  exerciseContainer: {
    flex: 1
  },
  alignHeadingContent: {
    flex: 1,
    alignItems: 'center'
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 15
  }
});

export default ActiveWorkout;
