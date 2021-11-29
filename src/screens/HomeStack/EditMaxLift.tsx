import { Formik } from 'formik';
import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import { Button, Title } from 'react-native-paper';
import FormikTextInput from '../../components/FormikTextInput';
import { HomeNavProps } from './HomeParamList';
import { MaxLiftType } from '../../types/MaxLiftType';
import useEditMaxLift from '../../hooks/useEditMaxLift';
import useDeleteMaxLift from '../../hooks/useDeleteMaxLift';

const EditMaxLift: React.FC<HomeNavProps<'EditMaxLift'>> = ({
  route,
  navigation
}) => {
  const { editMaxLift } = useEditMaxLift();
  const { deleteMaxLift } = useDeleteMaxLift();

  const handleUpdateMaxLift = async (values: MaxLiftType) => {
    try {
      await editMaxLift({
        id: route.params.maxLift.id,
        exercise: values.exercise,
        weight: values.weight
      });
      navigation.navigate('MaxLifts', {
        snackBarError: false,
        snackBarMessage: 'Max lift updated successfully'
      });
    } catch (error) {
      if (error instanceof Error) {
        navigation.navigate('MaxLifts', {
          snackBarError: true,
          snackBarMessage: 'Max lift could not be updated successfully'
        });
      }
    }
  };

  const handleDeleteMaxLift = async () => {
    try {
      await deleteMaxLift(route.params.maxLift.id);
      navigation.navigate('MaxLifts', {
        snackBarError: false,
        snackBarMessage: 'Max lift deleted successfully'
      });
    } catch (error) {
      navigation.navigate('MaxLifts', {
        snackBarError: true,
        snackBarMessage: 'An error occured while trying to delete max lift'
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Title>Update the weight</Title>
          <View>
            <Formik
              initialValues={{
                exercise: route.params.maxLift.exercise,
                weight: route.params.maxLift.weight.toString()
              }}
              onSubmit={(values) =>
                handleUpdateMaxLift({
                  id: route.params.maxLift.id,
                  exercise: values.exercise,
                  weight: Number(values.weight)
                })
              }>
              {({ handleSubmit }) => (
                <View>
                  <FormikTextInput name='exercise' label='Exercise' disabled />
                  <FormikTextInput
                    name='weight'
                    label='Max weight (RM)'
                    keyboardType='number-pad'
                  />

                  <Button
                    mode='contained'
                    uppercase={false}
                    onPress={handleSubmit}>
                    Update
                  </Button>
                </View>
              )}
            </Formik>
          </View>
          <View style={styles.removeButtonContainer}>
            <Button
              mode='contained'
              uppercase={false}
              style={styles.removeButton}
              onPress={() => handleDeleteMaxLift()}>
              Delete
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  removeButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  removeButton: {
    backgroundColor: '#E76F51'
  }
});

export default EditMaxLift;
