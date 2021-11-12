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
