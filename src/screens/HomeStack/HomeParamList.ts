import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MaxLiftType } from '../../types/MaxLiftType';

export type HomeParamList = {
  Home: undefined;
  MaxLifts: undefined;
  Profile: undefined;
  Settings: undefined;
  CreateRoutine: undefined;
  ChangeTheme: undefined;
  Measurements: undefined;
  EditMaxLift: {
    maxLift: MaxLiftType;
  };
  AddMaxLift: undefined;
  AddExercise: undefined;
};

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: NativeStackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
