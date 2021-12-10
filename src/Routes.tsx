import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './screens/AuthStack';
import AppTabs from './screens/AppTabs';
import useCurrentUser from './hooks/useCurrentUser';
import { Provider as PaperProvider } from 'react-native-paper';
import PreferenceContext from './contexts/PreferenceContext';

import { CombinedDarkTheme, CombinedDefaultTheme } from './theme';
import Loading from './components/Loading';

const Routes: React.FC = () => {
  const { currentUser, loading } = useCurrentUser();
  const { isDarkTheme } = useContext(PreferenceContext);
  console.log('Currentuser', currentUser);
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  if (loading) {
    return <Loading />;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {currentUser ? <AppTabs /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Routes;
