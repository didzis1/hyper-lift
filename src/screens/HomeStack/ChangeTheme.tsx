import React, { useContext } from 'react';
import { View } from 'react-native';
import { Switch, List } from 'react-native-paper';
import ThemeContext from '../../contexts/ThemeContext';
import { HomeNavProps } from './HomeParamList';

const ChangeTheme: React.FC<HomeNavProps<'ChangeTheme'>> = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);
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
