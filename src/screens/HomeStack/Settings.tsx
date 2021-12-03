import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, useTheme } from 'react-native-paper';

import { HomeNavProps } from './HomeParamList';

const Settings: React.FC<HomeNavProps<'Settings'>> = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.listSubheader}>
          Account settings
        </List.Subheader>
        <List.Item
          style={styles.listSection}
          title='Profile'
          onPress={() => navigation.navigate('Profile')}
          left={() => <List.Icon icon='account' color={colors.primary} />}
        />
        <List.Item
          style={styles.listSection}
          title='Account'
          onPress={() => console.log('Account')}
          left={() => <List.Icon icon='lock' color={colors.primary} />}
        />
      </List.Section>

      <List.Section>
        <List.Subheader style={styles.listSubheader}>
          Preferences
        </List.Subheader>
        <List.Item
          style={styles.listSection}
          title='Measurements'
          onPress={() => navigation.navigate('Measurements')}
          left={() => <List.Icon icon='weight' color={colors.primary} />}
        />
        <List.Item
          style={styles.listSection}
          title='Theme'
          onPress={() => navigation.navigate('ChangeTheme')}
          left={() => <List.Icon icon='brightness-4' color={colors.primary} />}
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    paddingHorizontal: 8
  },
  listSubheader: {
    color: '#2C4E5B'
  },
  listSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginVertical: 3,
    borderRadius: 15,
    elevation: 3,
    paddingVertical: 0
  }
});

export default Settings;
