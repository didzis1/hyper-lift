import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as KittenButton } from '@ui-kitten/components';

type Props = {
  onPress: () => void;
  text: string;
  style?: object;
};

const Button = ({ onPress, text, style }: Props) => {
  const styledButton = [styles.container, style];
  return (
    <KittenButton onPress={onPress} style={styledButton}>
      {text}
    </KittenButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 8,
    // paddingHorizontal: 10,
    // width: 150,
    // borderRadius: 5,
    // borderWidth: 3,
  }
});

export default Button;
