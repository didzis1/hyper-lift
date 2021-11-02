import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import FormikTextInput from '../../components/FormikTextInput';
import SafeView from '../../components/SafeView';
import { ProfileNavProps } from './ProfileParamList';

type FormValues = {
  exerciseName: string;
  weight: number;
};

const AddMaxLift = ({}: ProfileNavProps<'AddMaxLift'>) => {
  const handleNewMaxLift = (values: FormValues) => {
    console.log(values);
  };

  return (
    <SafeView>
      <Text>Hello</Text>
      <Formik
        initialValues={{ exerciseName: '', weight: 0 }}
        onSubmit={(values) => handleNewMaxLift(values)}>
        {({ handleSubmit }) => (
          <View>
            <FormikTextInput
              name='exerciseName'
              label='Exercise'
              placeholder='eg. Bench Press'
            />

            <FormikTextInput
              name='weight'
              label='Max weight (RM)'
              placeholder='100 '
              keyboardType='number-pad'
            />

            <Button onPress={handleSubmit}>Save</Button>
          </View>
        )}
      </Formik>
    </SafeView>
  );
};

export default AddMaxLift;
