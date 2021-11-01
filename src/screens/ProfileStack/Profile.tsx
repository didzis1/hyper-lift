import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ProfileNavProps } from './ProfileParamList';
import useLogout from '../../hooks/useLogout';
import globalStyles from '../../globalStyles';
import { Button, Text } from 'react-native-paper';

const ProfileScreen = ({ navigation }: ProfileNavProps<'Profile'>) => {
  const { logout } = useLogout();

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
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <Text>Hello, John Doe</Text>

      <View style={styles.card}>
        <Text>Max Lifts</Text>
        <Text>Bench 100</Text>
        <Text>Deadlift 150</Text>
        <Text>Squat 140</Text>
        <Button onPress={() => navigation.navigate('MaxLifts')}>
          Max Lifts
        </Button>
      </View>

      <View>
        <Button onPress={() => handleLogout()}>Log out</Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: 150,
    backgroundColor: '#0099FF',
    borderRadius: 20,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    width: '90%',
    backgroundColor: 'blue',
    alignSelf: 'center'
  }
});

export default ProfileScreen;
