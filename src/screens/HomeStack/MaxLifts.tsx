import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
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

          <View style={styles.infoContainer}>
            <Text
              style={[styles.text, { textAlign: 'center', color: '#E9C46A' }]}>
              Maximum lift is your one-rep max that you can lift for a single
              repetition for a given exercise (1 RM = 1 Rep Max)
            </Text>
          </View>

          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <View style={{ flex: 2 }}>
                <Text style={styles.headerText}>Exercise</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.headerText}>Weight</Text>
              </View>
            </View>
            {currentUser.maxLifts.map((maxLift) => (
              <TouchableOpacity
                key={maxLift.id}
                style={styles.singleItem}
                onPress={() => navigation.navigate('EditMaxLift', { maxLift })}>
                <View style={{ flex: 2 }}>
                  <Text style={styles.text}>{maxLift.exercise}</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.text}>{maxLift.weight} kg</Text>
                </View>
              </TouchableOpacity>
            ))}
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
            Add Max Lift
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: '#2C4E5B',
    padding: 35
  },
  container: {
    marginVertical: 35,
    flex: 1,
    flexDirection: 'column',
    elevation: 10,
    padding: 10
  },
  headerContainer: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 20
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  singleItem: {
    backgroundColor: '#2C4E5B',
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    paddingVertical: 15,
    paddingLeft: 20,
    marginVertical: 5,
    elevation: 8,
    borderRadius: 5
  },
  text: {
    color: '#E9C46A',
    fontSize: 16
  },
  addButton: {
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: '#E9C46A',
    margin: 5,
    elevation: 4
  },
  modal: {
    backgroundColor: 'white'
  }
});

export default MaxLifts;
