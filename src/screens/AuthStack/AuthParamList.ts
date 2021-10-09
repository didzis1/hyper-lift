import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthParamList = {
  StartingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: NativeStackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};
