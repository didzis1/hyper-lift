import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';

import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
} from 'react-native-paper';

export const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    background: '#fffffc',
    primary: '#2C4E5B',
    accent: '#E9C46A',
    error: '#E76F51',
    text: '#201d2d',
    success: '#2A9D8F',
    warning: '#E9C46A',
    danger: '#E76F51',
    placeholder: '#201d2d'
  }
};
export const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    background: '#201d2d',
    primary: '#D3BD60',
    accent: '#3d405b',
    error: '#F44336',
    text: '#FFFFFF',
    success: '#7b9e51',
    warning: '#f88e19',
    danger: '#f44336',
    placeholder: '#201d2d'
  }
};

// background: '#fffffc',
// primary: '#3d405b',
// accent: '#D3BD60',
// error: '#F44336',
// text: '#201d2d',
// success: '#7b9e51',
// warning: '#f88e19',
// danger: '#f44336',
// placeholder: '#201d2d'
