export type RoutineType = {
  _id: string;
  description: string;
  workouts: WorkoutSplitType[];
  totalSplits: number;
  totalSets: number;
  totalReps: number;
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

export type RoutineInputType = Omit<
  RoutineType,
  '_id' | 'totalSplits' | 'totalReps' | 'totalSets'
>;

export type RoutineInitialValuesType = {
  description: string;
  workouts: {
    name: string;
    exercises: ExerciseType[] | [];
  }[];
};
