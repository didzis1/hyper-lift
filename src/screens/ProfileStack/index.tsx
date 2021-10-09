import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Navigator>
      <Screen name='ProfileScreen' component={ProfileScreen} />
    </Navigator>
  );
};

export default ProfileStack;
