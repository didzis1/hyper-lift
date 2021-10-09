import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const globalStyles = StyleSheet.create({
  startingContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primary
  },
  centeredContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
