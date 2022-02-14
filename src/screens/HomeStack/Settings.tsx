import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { List, useTheme } from 'react-native-paper';
import PreferenceContext from '../../contexts/PreferenceContext';

import { HomeNavProps } from './HomeParamList';

const Settings: React.FC<HomeNavProps<'Settings'>> = ({ navigation }) => {
  const { isDarkTheme } = useContext(PreferenceContext);
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={{ color: colors.text }}>
          Account settings
        </List.Subheader>
        <List.Item
          style={[
            styles.listSection,
            {
              backgroundColor: isDarkTheme ? colors.accent : '#FFFFFF'
            }
          ]}
          title='Profile'
          titleStyle={{ color: colors.text }}
          onPress={() => navigation.navigate('Profile')}
          left={() => <List.Icon icon='account' color={colors.primary} />}
        />
        {/* <List.Item
          style={[
            styles.listSection,
            {
              backgroundColor: isDarkTheme ? colors.accent : '#FFFFFF'
            }
          ]}
          title='Account'
          titleStyle={{ color: colors.text }}
          onPress={() => console.log('Account')}
          left={() => <List.Icon icon='lock' color={colors.primary} />}
        /> */}
      </List.Section>

      <List.Section>
        <List.Subheader style={{ color: colors.text }}>
          Preferences
        </List.Subheader>
        <List.Item
          style={[
            styles.listSection,
            {
              backgroundColor: isDarkTheme ? colors.accent : '#FFFFFF'
            }
          ]}
          title='Measurements'
          titleStyle={{ color: colors.text }}
          onPress={() => navigation.navigate('Measurements')}
          left={() => <List.Icon icon='weight' color={colors.primary} />}
        />
        <List.Item
          style={[
            styles.listSection,
            {
              backgroundColor: isDarkTheme ? colors.accent : '#FFFFFF'
            }
          ]}
          title='Theme'
          titleStyle={{ color: colors.text }}
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
  listSection: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    marginHorizontal: 15,
    marginVertical: 3,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    paddingVertical: 0
  }
});

export default Settings;
