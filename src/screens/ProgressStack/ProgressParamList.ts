import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ProgressParamList = {
  Progress: undefined;
};

export type ProgressNavProps<T extends keyof ProgressParamList> = {
  navigation: NativeStackNavigationProp<ProgressParamList, T>;
  route: RouteProp<ProgressParamList, T>;
};
