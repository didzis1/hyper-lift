import React from 'react';
import { createContext, useCallback, useMemo, useState } from 'react';
import { CombinedDarkTheme, CombinedLightTheme } from '../theme';

const ThemeContext = createContext<{
  isDarkTheme: boolean;
  toggleTheme: () => void;
  theme: ReactNativePaper.Theme;
}>({
  isDarkTheme: false,
  toggleTheme: () => {},
  theme: CombinedLightTheme
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  let theme = isDarkTheme ? CombinedDarkTheme : CombinedLightTheme;

  const toggleTheme = useCallback(() => {
    return setIsDarkTheme(!isDarkTheme);
  }, [isDarkTheme]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isDarkTheme,
      theme
    }),
    [toggleTheme, isDarkTheme, theme]
  );

  return (
    <ThemeContext.Provider value={preferences}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
