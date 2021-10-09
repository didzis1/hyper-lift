import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

type Props = {
  text: string;
  onPress: () => void;
  customButton?: object;
  customText?: object;
};

const Button = ({ text, onPress, customButton, customText }: Props) => {
  const styledButton = [styles.container, customButton];
  const styledText = [styles.text, customText];
  return (
    <Pressable style={styledButton} onPress={onPress}>
      <Text style={styledText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: 150,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: theme.colors.black
  },
  text: {
    color: theme.colors.white
  }
});

export default Button;
