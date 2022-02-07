import React, { useRef, useState, useContext } from 'react';
import { FieldArray, Formik } from 'formik';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import {
  Button,
  Modal,
  Portal,
  Text,
  Title,
  useTheme
} from 'react-native-paper';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import globalStyles from '../../globalStyles';

import FormikTextInput from '../../components/FormikTextInput';
import { HomeNavProps } from './HomeParamList';
import SearchModal from '../../components/SearchModal';
import { ModalDataType } from '../../types/ModalType';
import {
  EditRoutineInitialValuesType,
  EditRoutineInputType
} from '../../types/RoutineType';
import { routineValidation } from '../../utils/validationSchemas';
import useEditRoutine from '../../hooks/useEditRoutine';
import PreferenceContext from '../../contexts/PreferenceContext';

const EditRoutine: React.FC<HomeNavProps<'EditRoutine'>> = ({
  navigation,
  route
}) => {
  const { colors } = useTheme();
  const { isDarkTheme } = useContext(PreferenceContext);
  const [modalData, setModalData] = useState<ModalDataType>({
    visible: false,
    location: null,
    fieldName: null
  });

  const { editRoutine } = useEditRoutine();

  const handleEditRoutine = async (values: EditRoutineInputType) => {
    try {
      const result = await editRoutine(values);
      navigation.navigate('Routine', {
        routine: result.editRoutine,
        snackBarMessage: 'Routine updated successfully'
      });
    } catch (error) {
      navigation.navigate('Routine', {
        routine: route.params.initialData,
        snackBarError: 'An error occured while trying to update the routine'
      });
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

  const initialValues: EditRoutineInitialValuesType = {
    description: route.params.initialData.description,
    workouts: route.params.initialData.workouts.map((workout) => ({
      name: workout.name,
      exercises: workout.exercises.map((exercise) => ({
        exerciseName: exercise.exerciseName,
        reps: exercise.reps.toString(),
        sets: exercise.sets.toString()
      }))
    }))
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
            handleEditRoutine({
              _id: route.params.initialData._id,
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
                        <View
                          key={workoutIndex}
                          style={[
                            styles.splitBox,
                            {
                              backgroundColor: isDarkTheme
                                ? colors.accent
                                : 'white'
                            }
                          ]}>
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
                              Remove
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
                  color='#2A9D8F'
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
    flex: 1,
    marginVertical: 5
  },
  modal: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});

export default EditRoutine;
