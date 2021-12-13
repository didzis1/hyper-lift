import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Button, Text, Title, Surface, useTheme } from 'react-native-paper';
import { HomeParamList } from '../screens/HomeStack/HomeParamList';
import { RoutineType } from '../types/RoutineType';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RoutineCardsProps = {
  routines: RoutineType[];
  navigation: NativeStackNavigationProp<HomeParamList, 'Home'>;
};

type RoutineCardProps = {
  routine: RoutineType;
  navigation: NativeStackNavigationProp<HomeParamList, 'Home'>;
};

const RoutineCard: React.FC<RoutineCardProps> = ({ routine, navigation }) => {
  const { colors } = useTheme();

  return (
    <Surface key={routine._id} style={styles.routineCard}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Routine', {
            routine
          })
        }>
        <View>
          <Title style={styles.routineTitle}>{routine.description}</Title>
        </View>
        <View style={styles.routineDataContainer}>
          <View style={styles.dataRow}>
            <View>
              <Ionicons name='sync-outline' size={24} color={colors.accent} />
            </View>
            <View style={styles.textRow}>
              <Text style={styles.dataText}>
                {routine.totalSplits} day split
              </Text>
            </View>
          </View>

          <View style={styles.dataRow}>
            <View>
              <Ionicons name='layers' size={24} color={colors.accent} />
            </View>
            <View style={styles.textRow}>
              <Text style={styles.dataText}>
                {routine.totalSets} total sets
              </Text>
            </View>
          </View>

          <View style={styles.dataRow}>
            <View>
              <Ionicons name='flame-sharp' size={24} color={colors.accent} />
            </View>
            <View style={styles.textRow}>
              <Text style={styles.dataText}>
                {routine.totalReps} total reps
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Surface>
  );
};

const RoutineCards: React.FC<RoutineCardsProps> = ({
  routines,
  navigation
}) => {
  const renderItem = ({ item }: { item: RoutineType }) => {
    return <RoutineCard navigation={navigation} routine={item} />;
  };

  return (
    <View style={styles.container}>
      {routines.length > 0 ? (
        <View>
          <FlatList
            data={routines}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            keyExtractor={(routine) => routine._id}
          />
          {routines.length === 1 ? null : (
            <>
              <View style={styles.carouselLeftArrow}>
                <Ionicons
                  name='arrow-back'
                  size={24}
                  color='rgba(0, 0, 0, 0.3)'
                />
              </View>
              <View style={styles.carouselRightArrow}>
                <Ionicons
                  name='arrow-forward'
                  size={24}
                  color='rgba(0, 0, 0, 0.3)'
                />
              </View>
            </>
          )}
        </View>
      ) : (
        <View style={styles.noRoutineContainer}>
          <View style={styles.noRoutineInnerCardContainer}>
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
              onPress={() => navigation.navigate('CreateRoutine', {})}>
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
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10
  },
  routineCard: {
    backgroundColor: '#2C4E5B',
    height: 150,
    width: 225,
    margin: 15,
    paddingVertical: 10,
    borderRadius: 15,
    flex: 1,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  routineDataContainer: {
    paddingTop: 10
  },
  dataRow: {
    flexDirection: 'row',
    marginVertical: 3
  },
  textRow: {
    marginLeft: 8
  },
  routineTitle: {
    color: '#E9C46A',
    textAlign: 'center'
  },
  dataText: {
    color: '#FFFFFF',
    fontSize: 17
  },
  routineIcon: {
    width: 25,
    height: 25
  },
  noRoutineContainer: {
    backgroundColor: '#2C4E5B',
    borderRadius: 15,
    padding: 15,
    marginVertical: 16
  },
  noRoutineInnerCardContainer: {
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
  carouselLeftArrow: {
    position: 'absolute',
    left: 15,
    top: '45%'
  },
  carouselRightArrow: {
    position: 'absolute',
    right: 15,
    top: '45%'
  }
});

export default RoutineCards;
