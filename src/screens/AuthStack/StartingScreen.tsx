import React from 'react';
import { View, Image } from 'react-native';
import { globalStyles } from '../../../globalStyles';
import Button from '../../components/Button';
import { theme } from '../../../theme';
import hyperliftLogo from '../../../assets/white-hyperlift.svg';

const AuthStack = () => {
  return (
    <View
      style={[globalStyles.centeredContainer, globalStyles.startingContainer]}>
      <Image source={hyperliftLogo} style={{ width: 200, height: 200 }} />
      <View>
        <Button
          onPress={() => console.log('pressed register')}
          text='REGISTER'
        />

        <Button
          customText={{ color: theme.colors.black }}
          customButton={{ backgroundColor: theme.colors.white, marginTop: 5 }}
          onPress={() => console.log('pressed login')}
          text='LOGIN'
        />
      </View>
    </View>
  );
};

export default AuthStack;
