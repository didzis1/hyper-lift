import { Formik } from 'formik';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  StyleSheet
} from 'react-native';
import { Button } from 'react-native-paper';
import FormikTextInput from '../../components/FormikTextInput';
import useCreateMaxLift from '../../hooks/useCreateMaxLift';
import { AddMaxLiftInput } from '../../types/MaxLiftType';
import { HomeNavProps } from './HomeParamList';

const CreateMaxLift: React.FC<HomeNavProps<'CreateMaxLift'>> = ({
  navigation
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <View>
            <Formik
              initialValues={{
                exercise: '',
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
                  <FormikTextInput name='exercise' label='Exercise' />
                  <FormikTextInput
                    name='weight'
                    label='Max weight (RM)'
                    keyboardType='number-pad'
                  />

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
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
});

export default CreateMaxLift;
