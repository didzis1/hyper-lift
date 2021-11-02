import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import FormikTextInput from '../../components/FormikTextInput';
import SafeView from '../../components/SafeView';
import { ProfileNavProps } from './ProfileParamList';
import useMaxLift from '../../hooks/useMaxLift';
import { AddMaxLiftType } from '../../types/maxLift/AddMaxLiftType';

const AddMaxLift = ({ navigation }: ProfileNavProps<'AddMaxLift'>) => {
  const { createMaxLift } = useMaxLift();

  const handleNewMaxLift = async (values: AddMaxLiftType) => {
    try {
      const response = await createMaxLift(values);
      console.log(response);
      navigation.navigate('Profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeView>
      <Text>Hello</Text>
      <Formik
        initialValues={{ exercise: '', weight: '' }}
        onSubmit={(values) =>
          handleNewMaxLift({
            exercise: values.exercise,
            weight: Number(values.weight)
          })
        }>
        {({ handleSubmit }) => (
          <View>
            <FormikTextInput
              name='exercise'
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
