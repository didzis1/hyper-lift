import { Formik } from 'formik';
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Button, DataTable, Subheading, Text } from 'react-native-paper';
import FormikTextInput from '../../components/FormikTextInput';
import { HomeNavProps } from './HomeParamList';
import useMaxLift from '../../hooks/useMaxLift';
import { AddMaxLiftType } from '../../types/maxLift/AddMaxLiftType';
import useCurrentUser from '../../hooks/useCurrentUser';
import Loading from '../../components/Loading';
import { AntDesign } from '@expo/vector-icons';
import globalStyles from '../../globalStyles';

const MaxLifts = ({ navigation }: HomeNavProps<'MaxLifts'>) => {
  const { currentUser } = useCurrentUser();
  const { createMaxLift } = useMaxLift();

  if (!currentUser) return <Loading />;

  const handleNewMaxLift = async (values: AddMaxLiftType) => {
    try {
      const response = await createMaxLift(values);
      console.log(response);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.table}>
            <DataTable>
              <DataTable.Header style={styles.listHeader}>
                <DataTable.Title>
                  <Text style={styles.headerText}>Exercise</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={styles.headerText}>Max weight</Text>
                </DataTable.Title>
              </DataTable.Header>
              {currentUser.maxLifts.map((maxLift) => (
                <DataTable.Row>
                  <DataTable.Cell>{maxLift.exercise}</DataTable.Cell>
                  <DataTable.Cell numeric>{maxLift.weight} kgs</DataTable.Cell>
                  <DataTable.Cell numeric>
                    <AntDesign name='edit' size={22} color='#3a443a' />
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </View>

          <Subheading style={styles.formHeader}>Add new max lift</Subheading>

          <Formik
            initialValues={{ exercise: '', weight: '' }}
            onSubmit={(values) =>
              handleNewMaxLift({
                exercise: values.exercise,
                weight: Number(values.weight)
              })
            }>
            {({ handleSubmit }) => (
              <View style={globalStyles.form}>
                <FormikTextInput
                  name='exercise'
                  label='Exercise'
                  placeholder='eg. Bench Press'
                />

                <FormikTextInput
                  name='weight'
                  label='Max weight (RM)'
                  placeholder='100'
                  keyboardType='number-pad'
                />

                <Button
                  mode='contained'
                  dark={true}
                  uppercase={false}
                  onPress={handleSubmit}>
                  Save Max Lift
                </Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    backgroundColor: '#FE5E41'
  },
  headerText: {
    color: '#FFFFFF'
  },
  table: {
    marginBottom: 35
  },

  formHeader: {
    textAlign: 'center'
  }
});

export default MaxLifts;
