import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ProfileParamList = {
  Profile: undefined;
  MaxLifts: undefined;
  AddMaxLift: undefined;
};

export type ProfileNavProps<T extends keyof ProfileParamList> = {
  navigation: NativeStackNavigationProp<ProfileParamList, T>;
  route: RouteProp<ProfileParamList, T>;
};
