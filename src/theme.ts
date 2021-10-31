import { TextStyle } from 'react-native';

type ThemeType = {
  colors: {
    background: string;
    foreground: string;
    primary: string;
    success: string;
    danger: string;
    failure: string;
  };
  spacing: object;
  textVariants: {
    header: TextStyle;
    body: TextStyle;
  };
};

const palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: '#F0F2F3'
};

export const theme: ThemeType = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40
  },
  textVariants: {
    header: {
      fontFamily: 'Roboto',
      fontSize: 36,
      fontWeight: 'bold'
    },
    body: {
      fontFamily: 'Roboto',
      fontSize: 16
    }
  }
};

export const darkTheme = {
  ...theme,
  colors: {
    background: palette.black,
    foreground: palette.white
  }
};
