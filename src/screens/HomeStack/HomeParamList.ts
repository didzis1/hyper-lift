import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MaxLiftType } from '../../types/MaxLiftType';
import { ExerciseDataType } from '../../types/ExerciseDataType';

export type HomeParamList = {
  Home: undefined;
  MaxLifts: {
    snackBarMessage?: string | null;
    snackBarError?: boolean | null;
  };
  CreateMaxLift: {
    exercise?: ExerciseDataType | null;
  };
  EditMaxLift: {
    maxLift: MaxLiftType;
  };
  Profile: undefined;
  Settings: undefined;
  Routines: undefined;
  CreateRoutine: {
    exercise?: ExerciseDataType | null;
    split?: number | null;
  };
  ChangeTheme: undefined;
  Measurements: undefined;
  SearchExercise: {
    submit?: React.MutableRefObject<() => void>;
    isSelected: ExerciseDataType | null | undefined;
    returnTo: keyof HomeParamList;
    split?: number | null;
  };
};

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: NativeStackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
