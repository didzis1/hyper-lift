import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { globalStyles } from '../../../globalStyles';
import Button from '../../components/Button';
import { theme } from '../../../theme';

const StartingScreen = ({ navigation }) => {
  return (
    <Layout
      style={[globalStyles.centeredContainer, globalStyles.startingContainer]}>
      <Layout>
        <Button
          onPress={() => navigation.navigate('RegisterScreen')}
          text='REGISTER'
        />
        <Text>Works</Text>
        <Button
          customText={{ color: theme.colors.black }}
          customButton={{ backgroundColor: theme.colors.white, marginTop: 5 }}
          onPress={() => navigation.navigate('LoginScreen')}
          text='LOGIN'
        />
      </Layout>
    </Layout>
  );
};

export default StartingScreen;
