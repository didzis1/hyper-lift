import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { HomeParamList } from '../screens/HomeStack/HomeParamList';
import { RoutineType } from '../types/RoutineType';
import { AntDesign } from '@expo/vector-icons';

type RoutineCardsProps = {
  routines: RoutineType[];
  navigation: NativeStackNavigationProp<HomeParamList, 'Home'>;
};

const RoutineCards: React.FC<RoutineCardsProps> = ({
  routines,
  navigation
}) => {
  console.log(routines);
  return (
    <View style={styles.container}>
      {routines.length > 0 ? (
        <Text>Length is over one</Text>
      ) : (
        <View style={styles.contentContainer}>
          <View style={styles.innerCardContainer}>
            <Text style={styles.noLiftsText}>
              You currently have no routines
            </Text>
            <Button
              mode='contained'
              uppercase={false}
              icon={() => (
                <AntDesign name='retweet' size={24} color='#2C4E5B' />
              )}
              style={styles.button}
              labelStyle={styles.buttonText}
              onPress={() => navigation.navigate('CreateRoutine')}>
              Create a routine
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C4E5B',
    borderRadius: 15,
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10
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
  }
});

export default RoutineCards;
