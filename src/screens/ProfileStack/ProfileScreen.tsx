import React from 'react';
import { Button, View, SafeAreaView, StyleSheet } from 'react-native';
import useLogout from '../../hooks/useLogout';
import globalStyles from '../../globalStyles';
import Text from '../../components/Text';

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
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Text color='primary' variant='body'>
            fasfas
          </Text>
        </View>
      </View>
      <Button title='Logout' onPress={() => handleLogout()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    height: 150
  },
  cardContent: {
    flex: 1
  }
});

export default ProfileScreen;
