import React, { useContext } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import AuthStack from './screens/AuthStack';
import AppTabs from './screens/AppTabs';
import useCurrentUser from './hooks/useCurrentUser';
import { ActivityIndicator } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import ThemeContext from './contexts/ThemeContext';

import { CombinedDarkTheme, CombinedDefaultTheme } from './theme';

type CombinedThemes = ReactNativePaper.Theme & Theme;

const Routes: React.FC = () => {
  const { currentUser, loading } = useCurrentUser();
  const { isDarkTheme } = useContext(ThemeContext);

  const theme: CombinedThemes = isDarkTheme
    ? CombinedDarkTheme
    : CombinedDefaultTheme;

  if (loading) {
    return <ActivityIndicator size='large' />;
  }

  console.log(currentUser);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {currentUser ? <AppTabs /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Routes;
