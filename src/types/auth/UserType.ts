export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  maxLifts: MaxLiftType[];
  routines: RoutineType[];
  history: [];
};

export type MaxLiftType = {
  id: string;
  exercise: string;
  weight: number;
};

export type RoutineType = {
  id: string;
  description?: string;
  workouts: WorkoutSplitType[];
};

export type WorkoutSplitType = {
  name: string;
  exercises: ExerciseType[];
};

export type ExerciseType = {
  exerciseName: string;
  reps: number;
  sets: number;
  weight?: number;
};
