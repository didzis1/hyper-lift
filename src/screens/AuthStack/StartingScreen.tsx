import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { AuthNavProps } from './AuthParamList';

const StartingScreen = ({ navigation }: AuthNavProps<'StartingScreen'>) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.brandLogo}>
          <Image source={require('../../../assets/hyperlift.png')} />
        </View>
        <View>
          <Text style={styles.slogan}>Your digital gym notebook</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            mode='contained'
            style={styles.register}
            labelStyle={styles.registerText}
            onPress={() => navigation.push('RegisterScreen')}>
            Register
          </Button>
        </View>
        <View style={styles.button}>
          <Button
            mode='contained'
            style={styles.signIn}
            onPress={() => navigation.push('LoginScreen')}>
            Sign In
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#FE5E41'
  },
  brandLogo: { width: '100%' },
  slogan: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 1
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '60%'
  },
  button: {
    paddingVertical: 5
  },
  register: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 3
  },
  registerText: {
    color: '#FE5E41'
  },
  signIn: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    elevation: 0,
    paddingHorizontal: 15,
    paddingVertical: 3
  }
});

export default StartingScreen;
