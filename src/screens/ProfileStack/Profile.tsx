import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ProfileNavProps } from './ProfileParamList';
import useLogout from '../../hooks/useLogout';
import globalStyles from '../../globalStyles';
import { Button, Switch, Text } from 'react-native-paper';
import ThemeContext from '../../contexts/ThemeContext';

const ProfileScreen = ({ navigation }: ProfileNavProps<'Profile'>) => {
  const { logout } = useLogout();
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  console.log(toggleTheme);
  console.log(isDarkTheme);
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
        <Button onPress={() => navigation.push('MaxLifts')}>Max Lifts</Button>
      </View>

      <View>
        <Button onPress={() => handleLogout()}>Log out</Button>
      </View>
      <Button onPress={() => toggleTheme()}>Change theme</Button>
      <Switch
        color='red'
        onValueChange={() => toggleTheme()}
        value={isDarkTheme}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: 150,
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
