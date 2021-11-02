import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ProfileNavProps } from './ProfileParamList';
import useLogout from '../../hooks/useLogout';
import { Button, Text, Title, DataTable } from 'react-native-paper';
import SafeView from '../../components/SafeView';
import ThemeContext from '../../contexts/ThemeContext';
import useCurrentUser from '../../hooks/useCurrentUser';
import MaxLiftCard from '../../components/MaxLiftCard';

const ProfileScreen = ({ navigation }: ProfileNavProps<'Profile'>) => {
  const { logout } = useLogout();
  const { currentUser } = useCurrentUser();
  const { toggleTheme } = useContext(ThemeContext);
  console.log('Inside ProfileScreen', currentUser);
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
      <View style={{ paddingBottom: 30 }}>
        <Text style={{ paddingLeft: 15, fontSize: 18, fontWeight: 'bold' }}>
          Hello, {currentUser!.firstName} {currentUser!.lastName}
        </Text>
      </View>

      <View style={styles.card}>
        <Title style={styles.cardTitle}>Max Lifts</Title>

        <MaxLiftCard maxLifts={currentUser!.maxLifts} />

        <Button onPress={() => navigation.push('MaxLifts')}>Max Lifts</Button>
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
  }
});

export default ProfileScreen;
