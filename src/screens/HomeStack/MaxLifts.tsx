import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import {
  Button,
  DataTable,
  Modal,
  Portal,
  Text,
  Title
} from 'react-native-paper';
import FormikTextInput from '../../components/FormikTextInput';
import { HomeNavProps } from './HomeParamList';
import useMaxLift from '../../hooks/useMaxLift';
import { AddMaxLiftType } from '../../types/maxLift/AddMaxLiftType';
import useCurrentUser from '../../hooks/useCurrentUser';
import Loading from '../../components/Loading';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import globalStyles from '../../globalStyles';

const MaxLifts = ({ navigation }: HomeNavProps<'MaxLifts'>) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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
          {/* Modal */}
          <Portal>
            <Modal
              visible={modalOpen}
              dismissable
              onDismiss={() => setModalOpen(false)}
              contentContainerStyle={styles.modal}>
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
                    <Ionicons
                      style={{
                        alignSelf: 'flex-end',
                        marginTop: 5,
                        marginRight: 5
                      }}
                      onPress={() => setModalOpen(false)}
                      name='close-sharp'
                      size={24}
                      color='black'
                    />
                    <Title>Add new max lift</Title>
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
                      Save
                    </Button>
                  </View>
                )}
              </Formik>
            </Modal>
          </Portal>
          {/* Modal */}

          <View style={styles.table}>
            <DataTable style={{ backgroundColor: '#FFFFFF' }}>
              <DataTable.Header style={styles.listHeader}>
                <DataTable.Title>
                  <Text style={styles.headerText}>Exercise</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={styles.headerText}>Max weight</Text>
                </DataTable.Title>
              </DataTable.Header>
              {currentUser.maxLifts.map((maxLift) => (
                <DataTable.Row key={maxLift.id}>
                  <DataTable.Cell>{maxLift.exercise}</DataTable.Cell>
                  <DataTable.Cell numeric>{maxLift.weight} kgs</DataTable.Cell>
                  <DataTable.Cell numeric onPress={() => setModalOpen(true)}>
                    <AntDesign name='edit' size={22} color='#3a443a' />
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </View>
          <Button
            dark={true}
            icon={() => (
              <Ionicons name='add-circle-outline' size={24} color='white' />
            )}
            uppercase={false}
            mode='contained'
            style={styles.addButton}
            onPress={() => setModalOpen(true)}>
            Add
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    backgroundColor: '#E0e0aa'
  },
  headerText: {},
  table: {
    marginBottom: 35
  },
  addButton: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    marginRight: 16
  },
  modal: {
    backgroundColor: 'white'
  }
});

export default MaxLifts;
