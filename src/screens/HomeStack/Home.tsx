import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { HomeNavProps } from './HomeParamList';
import useLogout from '../../hooks/useLogout';
import { Button, Title, Avatar, Caption, Text } from 'react-native-paper';
import SafeView from '../../components/SafeView';
import ThemeContext from '../../contexts/ThemeContext';
import useCurrentUser from '../../hooks/useCurrentUser';
import MaxLiftCard from '../../components/MaxLiftCard';
import Loading from '../../components/Loading';

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
    <SafeView>
      {/* Profile card */}
      <TouchableOpacity onPress={() => navigation.push('Profile')}>
        <View style={styles.profileCard}>
          <Avatar.Image
            size={80}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/53485411?s=400&u=fcf4fe96f8f7654d609be9b62f33675ca4e08990&v=4'
            }}
          />
          <View style={styles.profileTop}>
            <Title>
              {currentUser.firstName} {currentUser.lastName}
            </Title>
            <Caption>Profile</Caption>
          </View>
        </View>
      </TouchableOpacity>

      {/* Max lifts card */}
      <View style={styles.card}>
        <Title style={styles.cardTitle}>Max Lifts</Title>

        <MaxLiftCard maxLifts={currentUser.maxLifts} />

        <Button onPress={() => navigation.push('MaxLifts')}>Max Lifts</Button>
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
          mode='contained'
          onPress={() => navigation.push('CreateRoutine')}>
          Create a new routine
        </Button>
      </View>

      <View>
        <Button onPress={() => handleLogout()}>Log out</Button>
      </View>
      <Button onPress={() => toggleTheme()}>Change theme</Button>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: 200,
    borderRadius: 16,
    color: 'white',
    backgroundColor: '#7E007B',
    alignSelf: 'center'
  },
  cardTitle: {
    color: '#FFFFFF',
    paddingTop: 5,
    paddingLeft: 15
  },
  tableCell: {
    color: '#FFFFFF'
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
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
