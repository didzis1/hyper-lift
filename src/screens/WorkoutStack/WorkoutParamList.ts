import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type WorkoutParamList = {
  WorkoutPreview: undefined;
};

export type WorkoutNavProps<T extends keyof WorkoutParamList> = {
  navigation: NativeStackNavigationProp<WorkoutParamList, T>;
  route: RouteProp<WorkoutParamList, T>;
};
