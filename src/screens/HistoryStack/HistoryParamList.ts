import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HistoryType } from '../../types/HistoryType';

export type HistoryParamList = {
  CalendarHistory: undefined;
  HistoryWorkout: {
    workout: HistoryType;
  };
};

export type HistoryNavProps<T extends keyof HistoryParamList> = {
  navigation: NativeStackNavigationProp<HistoryParamList, T>;
  route: RouteProp<HistoryParamList, T>;
};
