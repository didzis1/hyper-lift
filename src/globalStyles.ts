import { StyleSheet, Platform, StatusBar } from 'react-native';

const globalStyles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

export default globalStyles;
