import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import globalStyles from '../globalStyles';

const Loading = () => {
  return (
    <View style={globalStyles.container}>
      <ActivityIndicator animating={true} />
    </View>
  );
};

export default Loading;
