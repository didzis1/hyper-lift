import React, { useEffect, useState } from 'react';
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
import { Button, Snackbar, Text } from 'react-native-paper';
import { HomeNavProps } from './HomeParamList';
import useGetMaxLift from '../../hooks/useGetMaxLift';
import Loading from '../../components/Loading';
import { Ionicons } from '@expo/vector-icons';

const MaxLifts = ({ navigation, route }: HomeNavProps<'MaxLifts'>) => {
  const [snackBarVisible, setSnackBarVisible] = useState<boolean>(false);
  const { maxLifts, ...rest } = useGetMaxLift();

  useEffect(() => {
    if (route.params?.snackBarMessage) {
      setSnackBarVisible(true);
    } else {
      setSnackBarVisible(false);
    }
  }, [route.params?.snackBarMessage]);

  if (rest.loading) return <Loading />;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
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

            <View>
              {maxLifts?.map((maxLift) => (
                <TouchableOpacity
                  key={maxLift.id}
                  style={styles.singleItem}
                  onPress={() =>
                    navigation.navigate('EditMaxLift', { maxLift })
                  }>
                  <View style={{ flex: 2 }}>
                    <Text style={styles.text}>{maxLift.exercise}</Text>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.text}>{maxLift.weight} kg</Text>
                  </View>
                </TouchableOpacity>
              ))}

              <Button
                dark={true}
                icon={() => (
                  <Ionicons name='add-circle-outline' size={24} color='white' />
                )}
                uppercase={false}
                mode='contained'
                style={styles.addButton}
                onPress={() => navigation.navigate('CreateMaxLift')}>
                Add new exercise
              </Button>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <Snackbar
        onDismiss={() => navigation.setParams({ snackBarMessage: '' })}
        style={{
          backgroundColor: route.params?.snackBarError ? '#E76F51' : '#2A9D8F'
        }}
        action={{
          label: 'Dismiss',
          onPress: () => setSnackBarVisible(false)
        }}
        visible={snackBarVisible}>
        {route.params?.snackBarMessage}
      </Snackbar>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: '#2C4E5B',
    padding: 35
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
  headerContainer: {
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
    backgroundColor: '#E9C46A',
    margin: 10,
    elevation: 4
  },
  modal: {
    backgroundColor: 'white'
  },
  snackbar: {
    backgroundColor: '#2A9D8F'
  }
});

export default MaxLifts;
