import { MaxLiftType } from './MaxLiftType';
import { RoutineType } from './RoutineType';

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  maxLifts: MaxLiftType[];
  routines: RoutineType[];
  history: [];
  age?: number;
  liftingType?: string;
};
