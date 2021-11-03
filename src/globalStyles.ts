import { StyleSheet, Platform, StatusBar } from 'react-native';

const globalStyles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '80%'
  },
  regularButton: {
    backgroundColor: '#FE5E41',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    elevation: 0,
    paddingHorizontal: 15,
    paddingVertical: 3
  },
  caption: {
    textAlign: 'center'
  }
});

export default globalStyles;
