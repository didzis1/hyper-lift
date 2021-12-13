import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RoutineType } from '../../types/RoutineType';
import { MaxLiftType } from '../../types/MaxLiftType';
import { ExerciseDataType } from '../../types/ExerciseDataType';

export type HomeParamList = {
  Home: {
    snackBarMessage?: string | null;
    snackBarError?: string | null;
  };
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
  Routine: {
    routine: RoutineType;
    snackBarMessage?: string | null;
    snackBarError?: string | null;
  };
  CreateRoutine: {
    exercise?: ExerciseDataType | null;
    split?: number | null;
  };
  EditRoutine: {
    initialData: RoutineType;
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
