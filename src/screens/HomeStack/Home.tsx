import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { HomeNavProps } from './HomeParamList';
import useLogout from '../../hooks/useLogout';
import { Button, Title, Text, FAB, Subheading } from 'react-native-paper';

import ThemeContext from '../../contexts/ThemeContext';
import useCurrentUser from '../../hooks/useCurrentUser';
import Loading from '../../components/Loading';
import { Ionicons } from '@expo/vector-icons';
const ProfileScreen = ({ navigation }: HomeNavProps<'Home'>) => {
  const { logout } = useLogout();
  const { currentUser } = useCurrentUser();

  if (!currentUser) {
    return <Loading />;
  }

  const { toggleTheme } = useContext(ThemeContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Title>Today</Title>
        <Title>Tue 9 Nov</Title>
        {/* Max lifts card */}
        <View style={styles.cardContainer}>
          <View style={styles.leftCardContent}>
            <View
              style={[
                styles.box,
                styles.shadowProp,
                { marginBottom: 3, marginRight: 3 }
              ]}>
              <Title style={styles.cardText}>Weights lifted</Title>
              <Subheading style={styles.cardText}>this week</Subheading>
              <Text style={styles.cardText}>1290 kg</Text>
            </View>
            <View
              style={[
                styles.box,
                styles.shadowProp,
                { marginTop: 3, marginRight: 3 }
              ]}>
              <Title style={styles.cardText}>Time spent</Title>
              <Subheading style={styles.cardText}>in the gym</Subheading>
              <Text style={styles.cardText}>3h 50min</Text>
            </View>
          </View>

          <View
            style={[
              styles.rightCardContent,
              styles.shadowProp,
              { marginLeft: 3 }
            ]}>
            <View>
              <Title style={styles.cardText}>Max Lifts</Title>
              {currentUser.maxLifts.map((maxLift) => (
                <View key={maxLift.id}>
                  <Text style={styles.cardText}>
                    {maxLift.exercise} - {maxLift.weight} kg
                  </Text>
                </View>
              ))}
            </View>
            <FAB
              style={styles.fab}
              small
              icon='plus'
              onPress={() => navigation.push('MaxLifts')}
            />
          </View>
        </View>
        {/* Routines card */}
        <View>
          <Title>Routines</Title>
          {currentUser.routines.length === 0 ? (
            <Text>You currently have no routines</Text>
          ) : (
            <Text>Routine found</Text>
          )}
          <Button
            icon={() => (
              <Ionicons name='ios-add-circle-outline' size={24} color='white' />
            )}
            mode='contained'
            uppercase={false}
            onPress={() => navigation.push('CreateRoutine')}>
            Create a new routine
          </Button>
        </View>

        <View>
          <Button onPress={() => handleLogout()}>Log out</Button>
        </View>
        <Button onPress={() => toggleTheme()}>Change theme</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 10,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  leftCardContent: {
    flexDirection: 'column',
    width: '50%'
  },
  cardText: {
    color: '#FFFFFF'
  },
  rightCardContent: {
    flexDirection: 'row',
    borderRadius: 20,
    height: '100%',
    width: '50%',
    flexGrow: 1,
    padding: 8,
    backgroundColor: '#D3BD60'
  },
  box: {
    flexGrow: 1,
    borderRadius: 20,
    padding: 8,
    backgroundColor: '#81b29a'
  },
  shadowProp: {
    shadowColor: '#000000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 10,
    backgroundColor: '#F6F9F8'
  },
  profileCard: {
    backgroundColor: '#D3BD60',
    borderRadius: 15,
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 15
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'baseline'
  }
});

export default ProfileScreen;
