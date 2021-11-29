import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Surface, Text } from 'react-native-paper';
import { MaxLiftType } from '../types/MaxLiftType';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeParamList } from '../screens/HomeStack/HomeParamList';
import { AntDesign } from '@expo/vector-icons';

type MaxLiftCardProps = {
  maxLifts: MaxLiftType[];
  navigation: NativeStackNavigationProp<HomeParamList, 'Home'>;
};

const MaxLiftCard: React.FC<MaxLiftCardProps> = ({ maxLifts, navigation }) => {
  return (
    <Surface style={[styles.container, styles.shadowProp]}>
      <TouchableOpacity onPress={() => navigation.navigate('MaxLifts', {})}>
        {maxLifts.length > 0 ? (
          <>
            <View style={styles.contentContainer}>
              {maxLifts.slice(0, 3).map((maxLift) => (
                <View key={maxLift.id} style={styles.maxLiftRow}>
                  <View style={styles.textContainer}>
                    <Text style={styles.exerciseText}>{maxLift.exercise}</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.weightText}>{maxLift.weight} kg</Text>
                  </View>
                </View>
              ))}
              {maxLifts.length > 3 ? (
                <View style={styles.maxLiftRow}>
                  <View style={styles.textContainer}>
                    <Text style={styles.weightText}>...</Text>
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.weightText}>...</Text>
                  </View>
                </View>
              ) : null}
            </View>
          </>
        ) : (
          <>
            <View style={styles.contentContainer}>
              <View style={styles.innerCardContainer}>
                <Text style={styles.noLiftsText}>
                  You currently have no maximum lifts
                </Text>
                <Button
                  mode='contained'
                  uppercase={false}
                  icon={() => (
                    <AntDesign name='rocket1' size={24} color='#2C4E5B' />
                  )}
                  style={styles.button}
                  labelStyle={styles.buttonText}
                  onPress={() => navigation.navigate('CreateMaxLift', {})}>
                  Add max lift
                </Button>
              </View>
            </View>
          </>
        )}
      </TouchableOpacity>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C4E5B',
    borderRadius: 15,
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10
  },
  shadowProp: {
    elevation: 4
  },
  maxLiftRow: {
    flexDirection: 'row'
  },
  contentContainer: {
    marginVertical: 5
  },
  innerCardContainer: {
    width: '70%',
    alignSelf: 'center'
  },
  noLiftsText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#E9C46A'
  },
  buttonText: {
    fontSize: 16,
    color: '#000000'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center'
  },
  exerciseText: {
    fontSize: 18,
    color: '#E9C46A',
    fontWeight: 'normal',
    alignSelf: 'flex-start'
  },
  weightText: {
    fontSize: 20,
    color: '#E9C46A',
    fontWeight: 'bold'
  },
  extraContainer: {
    flex: 1
  }
});

export default MaxLiftCard;
