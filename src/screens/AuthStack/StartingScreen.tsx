import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthNavProps } from './AuthParamList';

const StartingScreen = ({ navigation }: AuthNavProps<'StartingScreen'>) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 45,
              fontWeight: 'bold',
              letterSpacing: 3
            }}>
            hyperlift
          </Text>
        </View>

        <View style={{ paddingBottom: 30 }}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              letterSpacing: 2
            }}>
            Your digital gym notebook
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <Button onPress={() => navigation.navigate('RegisterScreen')}>
            Sign in
          </Button>
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={() => navigation.navigate('LoginScreen')}>
            Log in
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    width: '70%',
    marginVertical: 5
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  }
});

export default StartingScreen;
