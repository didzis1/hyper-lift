import { MaxLiftType } from './MaxLiftType';
import { RoutineType } from './RoutineType';

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  maxLifts: MaxLiftType[];
  routines: RoutineType[];
  history: [];
  age?: number;
  liftingType?: LiftingType | null;
};

export type UpdateUserType = {
  firstName: string;
  lastName: string;
  age: number | null;
  liftingType: LiftingType | null;
};

export type LiftingType =
  | 'Powerlifting'
  | 'Bodybuilding'
  | 'Crossfit'
  | 'Olympic Weightlifting'
  | 'Aerobics';
