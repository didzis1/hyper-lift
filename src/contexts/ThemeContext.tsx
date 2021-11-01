import React from 'react';
import { createContext, useState } from 'react';

const ThemeContext = createContext<{
  toggleTheme: () => void;
  isDarkTheme: boolean;
}>({
  toggleTheme: () => {},
  isDarkTheme: false
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const toggleTheme = () => {
    return setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  };

  const values = {
    toggleTheme,
    isDarkTheme
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
