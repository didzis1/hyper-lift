import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WorkoutSplitType } from '../../types/RoutineType';

export type WorkoutParamList = {
  SelectWorkout: undefined;
  ActiveWorkout: {
    workout: WorkoutSplitType & { routineId: string };
  };
};

export type WorkoutNavProps<T extends keyof WorkoutParamList> = {
  navigation: NativeStackNavigationProp<WorkoutParamList, T>;
  route: RouteProp<WorkoutParamList, T>;
};
