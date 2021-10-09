import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { AuthNavProps } from './AuthParamList';
import { StyleSheet } from 'react-native';

const StartingScreen = ({ navigation }: AuthNavProps<'StartingScreen'>) => {
  return (
    <Layout style={styles.container}>
      <Text>hyperlift</Text>
      <Layout style={styles.btnContainer}>
        <Button onPress={() => navigation.navigate('RegisterScreen')}>
          REGISTER
        </Button>
      </Layout>
      <Layout style={styles.btnContainer}>
        <Button onPress={() => navigation.navigate('LoginScreen')}>
          SIGN IN
        </Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer: {
    marginVertical: 5,
    width: 150
  }
});

export default StartingScreen;
