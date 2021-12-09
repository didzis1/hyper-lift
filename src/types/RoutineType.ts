export type RoutineType = {
  id: string;
  description: string;
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
};

export type RoutineInputType = Omit<RoutineType, 'id'>;

export type RoutineInitialValuesType = {
  description: string;
  workouts: {
    name: string;
    exercises: ExerciseType[] | [];
  }[];
};
