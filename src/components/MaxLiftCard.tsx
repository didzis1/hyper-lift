import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Surface, Text } from 'react-native-paper';
import { MaxLiftType } from '../types/MaxLiftType';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeParamList } from '../screens/HomeStack/HomeParamList';

type Props = {
  maxLifts: MaxLiftType[];
  navigation: NativeStackNavigationProp<HomeParamList, 'Home'>;
};

const MaxLiftCard: React.FC<Props> = ({ maxLifts, navigation }) => {
  return (
    <Surface style={[styles.maxLiftContainer, styles.shadowProp]}>
      {maxLifts.length > 0 ? (
        <>
          <View style={styles.addIconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('MaxLifts')}>
              <Feather name='plus' size={24} color='#e9c46a' />
            </TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>
            {maxLifts.map((maxLift) => (
              <View key={maxLift.id} style={styles.maxLiftRow}>
                <View style={styles.exerciseContainer}>
                  <MaterialIcons
                    name='fitness-center'
                    size={20}
                    color='#e9c46a'
                  />
                  <Text style={styles.exerciseText}>{maxLift.exercise}</Text>
                </View>

                <View style={styles.weightContainer}>
                  <Text style={styles.weightText}>{maxLift.weight} kg</Text>
                </View>
              </View>
            ))}
          </View>
        </>
      ) : (
        <>
          <View style={styles.contentContainer}>
            <View style={styles.noLiftsContainer}>
              <Text style={styles.noLiftsText}>
                You currently have no maximum lifts
              </Text>
              <Button
                mode='contained'
                uppercase={false}
                style={styles.button}
                labelStyle={styles.buttonText}
                onPress={() => navigation.navigate('MaxLifts')}>
                Add max lift
              </Button>
            </View>
          </View>
        </>
      )}
    </Surface>
  );
};

const styles = StyleSheet.create({
  maxLiftContainer: {
    backgroundColor: '#2C4E5B',
    borderRadius: 15,
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    margin: 15
  },
  shadowProp: {
    elevation: 4
  },
  maxLiftRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  addIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 12
  },
  contentContainer: {
    marginVertical: 16
  },
  noLiftsContainer: {
    width: '70%',
    alignSelf: 'center'
  },
  noLiftsText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#E9C46A'
  },
  buttonText: {
    fontSize: 16
  },
  exerciseContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  exerciseText: {
    fontSize: 20,
    color: '#E9C46A',
    fontWeight: 'normal',
    marginLeft: 5
  },
  weightContainer: {},
  weightText: {
    fontSize: 20,
    color: '#E9C46A',
    fontWeight: 'bold'
  }
});

export default MaxLiftCard;
