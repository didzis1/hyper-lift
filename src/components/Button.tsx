import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
  customText?: object;
  customButton?: object;
};

const Button = ({
  onPress,
  title,
  customButton,
  customText,
  ...props
}: Props) => {
  const styledButton = [styles.container, customButton];
  const styledText = [styles.text, customText];
  return (
    <TouchableOpacity onPress={onPress} style={styledButton} {...props}>
      <Text style={styledText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 5
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    letterSpacing: 1.5
  }
});

export default Button;
