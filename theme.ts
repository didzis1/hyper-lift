import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#3F334D',
    textSecondary: '#797082',
    white: '#FFFFFF',
    black: '#000000',
    primary: '#8FC0A9',
    secondary: '#DCEFED',
    error: '#FF6B6B',
    background: '#FAFAFA',
    divider: '#ededed'
  },
  fontSize: {
    small: 14,
    medium: 15,
    body: 17,
    large: 24,
    xlarge: 26,
    xxlarge: 34
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    })
  },
  fontWeights: {
    normal: 'normal',
    bold: 'bold'
  }
};

export default theme;
