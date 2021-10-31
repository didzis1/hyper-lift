import React from 'react';
import { StyleProp, Text as RNText, TextStyle } from 'react-native';
import { theme } from '../theme';

interface TextProps extends React.ComponentProps<typeof RNText> {
  variant?: keyof typeof theme.textVariants;
  color?: keyof typeof theme.colors;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const Text = ({ style, variant, color, children, ...props }: TextProps) => {
  const textStyles: StyleProp<TextStyle> = [
    color && {
      color: theme.colors[color]
    },
    variant && theme.textVariants[variant],
    style
  ];

  return (
    <RNText style={textStyles} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
