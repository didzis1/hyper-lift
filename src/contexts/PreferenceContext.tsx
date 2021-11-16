import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PreferenceContext = createContext<{
  toggleTheme: () => void;
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  toggleTheme: () => {},
  isDarkTheme: false,
  setIsDarkTheme: () => {}
});

export const PreferenceProvider: React.FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const setThemeFromStorage = async () => {
      const previousTheme = await AsyncStorage.getItem('isDarkTheme');

      // If theme is found from storage, set it to isDarkTheme state
      if (previousTheme) {
        return setIsDarkTheme(() => previousTheme === 'true');
      }
      // If theme is not found, set it as default (light) theme
      return setIsDarkTheme(() => false);
    };
    setThemeFromStorage();
  }, []);

  const toggleTheme = async () => {
    const newTheme = !isDarkTheme;
    console.log('New theme', newTheme);
    try {
      await AsyncStorage.setItem('isDarkTheme', newTheme.toString());
    } catch (error) {
      console.log('error', error);
    }
    return setIsDarkTheme(() => newTheme);
  };

  const values = {
    toggleTheme,
    isDarkTheme,
    setIsDarkTheme
  };

  return (
    <PreferenceContext.Provider value={values}>
      {children}
    </PreferenceContext.Provider>
  );
};

export default PreferenceContext;
