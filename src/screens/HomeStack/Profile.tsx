import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import useLogout from '../../hooks/useLogout';

const Profile = () => {
  const { logout } = useLogout();
  return (
    <View>
      <Button onPress={() => logout()}>Log out</Button>
    </View>
  );
};

export default Profile;
