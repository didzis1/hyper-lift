import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';

import { HomeNavProps } from './HomeParamList';

const Settings: React.FC<HomeNavProps<'Settings'>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>Account settings</List.Subheader>
        <List.Item
          title='Profile'
          onPress={() => navigation.navigate('Profile')}
          left={() => <List.Icon icon='account' />}
        />
        <List.Item
          title='Account'
          onPress={() => console.log('Account')}
          left={() => <List.Icon icon='lock' />}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Preferences</List.Subheader>
        <List.Item
          title='Measurements'
          onPress={() => navigation.navigate('Measurements')}
          left={() => <List.Icon icon='weight' />}
        />
        <List.Item
          title='Theme'
          onPress={() => navigation.navigate('ChangeTheme')}
          left={() => <List.Icon icon='brightness-4' />}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  optionsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '70%'
  },
  option: {
    width: '100%',
    height: '10%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    marginVertical: 8
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    paddingHorizontal: 8
  }
});

export default Settings;
