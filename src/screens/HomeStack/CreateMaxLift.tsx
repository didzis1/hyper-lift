import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  StyleSheet
} from 'react-native';
import { Button, Modal, Portal, Subheading, Text } from 'react-native-paper';
import globalStyles from '../../globalStyles';

import FormikTextInput from '../../components/FormikTextInput';
import SearchModal from '../../components/SearchModal';

import useCreateMaxLift from '../../hooks/useCreateMaxLift';
import { AddMaxLiftInput } from '../../types/MaxLiftType';
import { HomeNavProps } from './HomeParamList';
import { ModalDataType } from '../../types/ModalType';

const CreateMaxLift: React.FC<HomeNavProps<'CreateMaxLift'>> = ({
  navigation
}) => {
  const [modalData, setModalData] = useState<ModalDataType>({
    visible: false,
    location: null,
    fieldName: null
  });

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
              onSubmit={(values) => {
                console.log(values);
                handleNewMaxLift({
                  exercise: values.exercise,
                  weight: Number(values.weight)
                });
              }}>
              {({ handleSubmit, values, setFieldValue }) => {
                if (values.exercise !== '') {
                  return (
                    <View>
                      <View>
                        <Subheading>Exercise</Subheading>

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
                  );
                } else {
                  return (
                    <View>
                      <Button
                        mode='contained'
                        uppercase={false}
                        onPress={() =>
                          setModalData({
                            visible: true,
                            location: 'exercise',
                            fieldName: null
                          })
                        }
                        style={globalStyles.searchButton}>
                        Search for an exercise
                      </Button>
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
                    </View>
                  );
                }
              }}
            </Formik>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', padding: 20 },
  modal: { flex: 1, backgroundColor: '#FFFFFF' }
});

export default CreateMaxLift;
