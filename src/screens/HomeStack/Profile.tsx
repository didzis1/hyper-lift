import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import ThemeContext from '../../contexts/ThemeContext';
import useLogout from '../../hooks/useLogout';

const Profile = () => {
  const { logout } = useLogout();
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
    <View>
      <Text>Profile screen</Text>
      <View>
        <Button onPress={() => handleLogout()}>Log out</Button>
      </View>
      <Button onPress={() => toggleTheme()}>Change theme</Button>
    </View>
  );
};

export default Profile;
