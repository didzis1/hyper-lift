import { FieldArray, Formik } from 'formik';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import FormikTextInput from '../../components/FormikTextInput';
import globalStyles from '../../globalStyles';

const CreateRoutine = () => {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Formik
          initialValues={{
            description: '',
            workouts: [
              {
                name: '',
                exercises: ''
              }
            ]
          }}
          onSubmit={(values) => console.log(values)}>
          {({ handleSubmit, values }) => (
            <View style={styles.form}>
              <FormikTextInput
                label='Routine name'
                placeholder='eg. Push Pull Legs'
                name='description'
              />
              <FieldArray name='workouts'>
                {({ push, remove }) => (
                  <>
                    {values.workouts.map((_, index) => (
                      <View key={index} style={styles.splitBox}>
                        <FormikTextInput
                          label='Split name'
                          name={`workouts[${index}.name]`}
                          placeholder='eg. Push A'
                        />
                        <FormikTextInput
                          name={`workouts[${index}.exercises]`}
                          placeholder='Exercises'
                        />

                        <Button
                          uppercase={false}
                          mode='contained'
                          onPress={() => remove(index)}>
                          Delete split
                        </Button>
                      </View>
                    ))}
                    <Button
                      uppercase={false}
                      mode='contained'
                      onPress={() => push({ name: '', exercises: '' })}>
                      Add Split
                    </Button>
                  </>
                )}
              </FieldArray>

              <Button uppercase={false} mode='contained' onPress={handleSubmit}>
                Create routine
              </Button>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '90%'
  },
  splitBox: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 15,
    borderRadius: 8,
    elevation: 2
  }
});

export default CreateRoutine;
// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
