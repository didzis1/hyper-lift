import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import globalStyles from '../globalStyles';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const SafeView = ({ children, style }: Props) => {
  return <View style={[globalStyles.androidSafeArea, style]}>{children}</View>;
};

export default SafeView;
