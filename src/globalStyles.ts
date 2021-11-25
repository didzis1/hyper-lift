import { StyleSheet, Platform, StatusBar } from 'react-native';

const globalStyles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#FBFBFB'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderRadius: 15
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
  },
  cancelText: {
    color: '#c43535'
  },
  saveText: {
    color: '#2f6bd4'
  },
  input: {
    width: '100%',
    borderColor: '#00D8BE',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 5,
    backgroundColor: '#FFFFFF'
  }
});

export default globalStyles;
