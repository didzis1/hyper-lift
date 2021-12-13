import React, { useRef, useState } from 'react';
import { FieldArray, Formik } from 'formik';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Modal, Portal, Text, Title } from 'react-native-paper';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import globalStyles from '../../globalStyles';

import FormikTextInput from '../../components/FormikTextInput';
import { HomeNavProps } from './HomeParamList';
import SearchModal from '../../components/SearchModal';
import { ModalDataType } from '../../types/ModalType';
import {
  RoutineInitialValuesType,
  RoutineInputType
} from '../../types/RoutineType';
import { routineValidation } from '../../utils/validationSchemas';
import useCreateRoutine from '../../hooks/useCreateRoutine';

const CreateRoutine: React.FC<HomeNavProps<'CreateRoutine'>> = ({
  navigation
}) => {
  const [modalData, setModalData] = useState<ModalDataType>({
    visible: false,
    location: null,
    fieldName: null
  });

  const { createRoutine } = useCreateRoutine();

  const handleCreateRoutine = async (values: RoutineInputType) => {
    console.log(values);
    try {
      const newRoutine = await createRoutine(values);
      navigation.navigate('Routine', {
        routine: newRoutine.createRoutine,
        snackBarMessage: 'Routine created successfully'
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

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

  const initialValues: RoutineInitialValuesType = {
    description: '',
    workouts: [
      {
        name: '',
        exercises: []
      }
    ]
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validateOnChange={false}
          validationSchema={routineValidation}
          onSubmit={(values) =>
            // Loop over values and parse sets/reps to number
            handleCreateRoutine({
              description: values.description,
              workouts: values.workouts.map((workout) => ({
                name: workout.name,
                exercises: workout.exercises.map((exercise) => ({
                  exerciseName: exercise.exerciseName,
                  reps: Number(exercise.reps),
                  sets: Number(exercise.sets)
                }))
              }))
            })
          }>
          {({ handleSubmit, values, setFieldValue, errors }) => (
            <View style={styles.form}>
              <FormikTextInput
                label='Routine Title'
                placeholder='eg. Push Pull Legs'
                name='description'
              />
              <FieldArray name='workouts'>
                {({ push, remove }) => (
                  <>
                    {values.workouts.map((workout, workoutIndex) => {
                      console.log('Errors', errors);
                      return (
                        <View key={workoutIndex} style={styles.splitBox}>
                          <Title>{`Day ${workoutIndex + 1}`}</Title>
                          <FormikTextInput
                            label='Name your split'
                            name={`workouts[${workoutIndex}.name]`}
                            placeholder='eg. Push A'
                          />
                          <View>
                            <View style={styles.exerciseContainer}>
                              <View style={styles.exerciseNameContainer}>
                                <Text>Exercise name</Text>
                              </View>
                              <View style={styles.repSetContainer}>
                                <Text>Sets</Text>
                              </View>

                              <View style={styles.repSetContainer}>
                                <Text>Reps</Text>
                              </View>
                            </View>
                          </View>
                          <Portal>
                            <Modal
                              visible={modalData.visible}
                              onDismiss={() =>
                                setModalData({
                                  visible: false,
                                  location: null,
                                  fieldName: null
                                })
                              }
                              contentContainerStyle={styles.modal}>
                              <SearchModal
                                setFieldValue={setFieldValue}
                                modalData={modalData}
                                setModalData={setModalData}
                              />
                            </Modal>
                          </Portal>

                          {workout.exercises.map((exercise, exerciseIndex) => (
                            <View
                              key={`${exercise.exerciseName}-${exerciseIndex}`}>
                              <View style={styles.exerciseContainer}>
                                <View style={styles.exerciseNameContainer}>
                                  <Text>{exercise.exerciseName}</Text>
                                </View>
                                <View style={styles.repSetContainer}>
                                  <FormikTextInput
                                    placeholder='3'
                                    name={`workouts[${workoutIndex}].exercises[${exerciseIndex}].sets`}
                                    keyboardType='number-pad'
                                  />
                                </View>

                                <View style={styles.repSetContainer}>
                                  <FormikTextInput
                                    placeholder='8'
                                    name={`workouts[${workoutIndex}].exercises[${exerciseIndex}].reps`}
                                    keyboardType='number-pad'
                                  />
                                </View>
                              </View>
                            </View>
                          ))}

                          <View style={styles.splitButtonContainer}>
                            <Button
                              style={globalStyles.searchButton}
                              mode='contained'
                              uppercase={false}
                              onPress={() =>
                                setModalData({
                                  visible: true,
                                  location: `workouts[${workoutIndex}].exercises[${workout.exercises.length}]`,
                                  fieldName: 'exerciseName'
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
                              onPress={() => remove(workoutIndex)}
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
                      );
                    })}
                    <Button
                      uppercase={false}
                      mode='contained'
                      // Generate a new split box
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
    flex: 3,
    justifyContent: 'center',
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
    flex: 1
  },
  modal: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});

export default CreateRoutine;
// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
