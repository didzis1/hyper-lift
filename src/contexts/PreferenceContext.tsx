import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WeightMeasurement } from '../types/WeightMeasurement';

export const PreferenceContext = createContext<{
  toggleTheme: () => void;
  toggleWeightMeasurement: (value: boolean) => void;
  isDarkTheme: boolean;
  weightMeasurement: WeightMeasurement;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  setWeightMeasurement: React.Dispatch<React.SetStateAction<WeightMeasurement>>;
}>({
  toggleTheme: () => {},
  toggleWeightMeasurement: () => {},
  isDarkTheme: false,
  weightMeasurement: 'kg',
  setIsDarkTheme: () => {},
  setWeightMeasurement: () => {}
});

export const PreferenceProvider: React.FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [weightMeasurement, setWeightMeasurement] =
    useState<WeightMeasurement>('kg');

  useEffect(() => {
    const setPreferencesFromStorage = async () => {
      const previousTheme = await AsyncStorage.getItem('isDarkTheme');
      const previousWeight = (await AsyncStorage.getItem(
        'weightMeasurement'
      )) as WeightMeasurement;

      // If theme is found from storage, set it to isDarkTheme state
      if (previousTheme) {
        return setIsDarkTheme(() => previousTheme === 'true');
      }

      if (previousWeight) {
        return setWeightMeasurement(() => previousWeight);
      }

      // If theme is not found, set it as default (light) theme
      setIsDarkTheme(() => false);
      // If weight measurement is not found, set it as kg for default value
      setWeightMeasurement(() => 'kg');
      return;
    };
    setPreferencesFromStorage();
  }, []);

  const toggleTheme = async () => {
    const newTheme = !isDarkTheme;
    console.log('New theme', newTheme);
    setIsDarkTheme(() => newTheme);
    try {
      return await AsyncStorage.setItem('isDarkTheme', newTheme.toString());
    } catch (error) {
      console.log('error', error);
    }
  };

  const toggleWeightMeasurement = async (value: boolean) => {
    if (value) {
      setWeightMeasurement(() => 'lbs');
    } else {
      setWeightMeasurement(() => 'kg');
    }

    try {
      return await AsyncStorage.setItem('weightMeasurement', weightMeasurement);
    } catch (error) {
      console.log('error', error);
    }
  };

  const values = {
    toggleTheme,
    toggleWeightMeasurement,
    isDarkTheme,
    weightMeasurement,
    setIsDarkTheme,
    setWeightMeasurement
  };

  return (
    <PreferenceContext.Provider value={values}>
      {children}
    </PreferenceContext.Provider>
  );
};

export default PreferenceContext;
