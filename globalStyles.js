import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
const theme = useTheme();

export const globalStyles = StyleSheet.create({
  center: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.accent
  }
});
