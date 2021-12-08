import { Formik } from 'formik';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Button, Subheading } from 'react-native-paper';
import FormikTextInput from '../../components/FormikTextInput';
import useCreateMaxLift from '../../hooks/useCreateMaxLift';
import { AddMaxLiftInput } from '../../types/MaxLiftType';
import { HomeNavProps } from './HomeParamList';
import ExerciseCard from '../../components/ExerciseCard';
import globalStyles from '../../globalStyles';

const CreateMaxLift: React.FC<HomeNavProps<'CreateMaxLift'>> = ({
  navigation,
  route
}) => {
  const { createMaxLift } = useCreateMaxLift();

  const handleNewMaxLift = async (values: AddMaxLiftInput) => {
    try {
      await createMaxLift(values);
      navigation.navigate('MaxLifts', {
        snackBarError: false,
        snackBarMessage: 'New max lift created successfully'
      });
    } catch (error) {
      navigation.navigate('MaxLifts', {
        snackBarError: true,
        snackBarMessage:
          'An error occured while trying to create a new max lift'
      });
    }
  };
  console.log(route.params.exercise);
  if (route.params.exercise) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <View>
              <Formik
                initialValues={{
                  exercise: route.params.exercise
                    ? route.params.exercise.name
                    : '',
                  weight: ''
                }}
                onSubmit={(values) =>
                  handleNewMaxLift({
                    exercise: values.exercise,
                    weight: Number(values.weight)
                  })
                }>
                {({ handleSubmit }) => (
                  <View>
                    <View style={styles.formContainer}>
                      <Subheading>Exercise</Subheading>

                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('SearchExercise', {
                            isSelected: route.params.exercise,
                            returnTo: 'CreateMaxLift'
                          })
                        }>
                        <ExerciseCard item={route.params.exercise} />
                      </TouchableOpacity>

                      <FormikTextInput
                        name='weight'
                        label='Max weight (RM)'
                        keyboardType='number-pad'
                      />
                    </View>
                    <Button
                      mode='contained'
                      uppercase={false}
                      onPress={() => handleSubmit()}>
                      Save
                    </Button>
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  return (
    <View style={styles.firstSearchContainer}>
      <Button
        mode='contained'
        uppercase={false}
        onPress={() =>
          navigation.navigate('SearchExercise', {
            isSelected: null,
            returnTo: 'CreateMaxLift'
          })
        }
        style={globalStyles.searchButton}>
        Search for an exercise
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', padding: 20 },
  firstSearchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {}
});

export default CreateMaxLift;
