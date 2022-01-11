import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import useLogout from '../../hooks/useLogout';
import { HomeNavProps } from './HomeParamList';

const Profile: React.FC<HomeNavProps<'Profile'>> = ({}) => {
  const { logout } = useLogout();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Button
          mode='contained'
          uppercase={false}
          style={styles.logout}
          onPress={() => logout()}>
          Log out
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logout: {
    width: '50%',
    backgroundColor: '#E76F51',
    alignSelf: 'center'
  }
});

export default Profile;
