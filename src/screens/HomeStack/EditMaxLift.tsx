import { Formik } from 'formik';
import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
import { Button, Headline, Subheading, Text } from 'react-native-paper';
import FormikTextInput from '../../components/FormikTextInput';
import { HomeNavProps } from './HomeParamList';
import { EditMaxLiftInput } from '../../types/MaxLiftType';
import useEditMaxLift from '../../hooks/useEditMaxLift';
import useDeleteMaxLift from '../../hooks/useDeleteMaxLift';
import { formatStringDate } from '../../utils/dateFormat';

const EditMaxLift: React.FC<HomeNavProps<'EditMaxLift'>> = ({
  route,
  navigation
}) => {
  const { editMaxLift } = useEditMaxLift();
  const { deleteMaxLift } = useDeleteMaxLift();

  console.log(new Date(route.params.maxLift.weightHistory[0].date));
  const handleUpdateMaxLift = async (values: EditMaxLiftInput) => {
    try {
      await editMaxLift({
        id: route.params.maxLift.id,
        weight: values.weight,
        date: values.date
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
        <ScrollView>
          <View style={styles.container}>
            <Headline>Update the weight</Headline>
            <View>
              <Formik
                initialValues={{
                  exercise: route.params.maxLift.exercise,
                  weight: route.params.maxLift.weight.toString()
                }}
                onSubmit={(values) =>
                  handleUpdateMaxLift({
                    id: route.params.maxLift.id,
                    weight: Number(values.weight),
                    date: new Date()
                  })
                }>
                {({ handleSubmit }) => (
                  <View>
                    <FormikTextInput
                      name='exercise'
                      label='Exercise'
                      disabled
                    />
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

            {/* History max lifts */}
            <View style={styles.historyWeightContainer}>
              <Headline>History of previous lifts</Headline>
              <View style={styles.historyHeaderContainer}>
                <Subheading>Weight</Subheading>
                <Subheading>Date</Subheading>
              </View>
              {route.params.maxLift.weightHistory.map((weightHistory) => {
                return (
                  <View style={styles.historyDataContainer}>
                    <View style={styles.historyTextContainer}>
                      <Text style={styles.historyDataText}>
                        {weightHistory.weight} kg
                      </Text>
                    </View>
                    <View style={styles.historyTextContainer}>
                      <Text style={styles.historyDataText}>
                        {formatStringDate(weightHistory.date)}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>

            <View style={styles.removeButtonContainer}>
              <Button
                mode='contained'
                uppercase={false}
                style={styles.removeButton}
                onPress={() => handleDeleteMaxLift()}>
                Delete - {route.params.maxLift.exercise}
              </Button>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  historyWeightContainer: {
    paddingVertical: 15
  },
  historyHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  historyDataContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2C4E5B',
    paddingVertical: 8,
    marginVertical: 5,
    borderRadius: 5
  },
  historyTextContainer: {
    flex: 1,
    alignItems: 'center'
  },
  historyDataText: {
    color: '#E9C46A'
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
