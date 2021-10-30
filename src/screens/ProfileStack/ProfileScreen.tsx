import React from 'react';
import { Button, Text, View } from 'react-native';
import useLogout from '../../hooks/useLogout';

const ProfileScreen = () => {
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
    <View>
      <Text>Profile Screen</Text>
      <Text>Here are your routines:</Text>
      <Button title='Logout' onPress={() => handleLogout()} />
    </View>
  );
};
export default ProfileScreen;
