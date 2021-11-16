import React, { useContext } from 'react';
import { View } from 'react-native';
import { Switch, List } from 'react-native-paper';
import PreferenceContext from '../../contexts/PreferenceContext';
import { HomeNavProps } from './HomeParamList';

const ChangeTheme: React.FC<HomeNavProps<'ChangeTheme'>> = () => {
  const { toggleTheme, isDarkTheme } = useContext(PreferenceContext);
  return (
    <View>
      <List.Section>
        <List.Subheader>Change theme</List.Subheader>
        <List.Item
          title='Theme'
          right={() => (
            <Switch value={isDarkTheme} onValueChange={() => toggleTheme()} />
          )}
        />
      </List.Section>
    </View>
  );
};

export default ChangeTheme;
