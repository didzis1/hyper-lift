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

export type CreateRoutineInputType = Omit<
  RoutineType,
  '_id' | 'totalSplits' | 'totalReps' | 'totalSets'
>;

export type EditRoutineInputType = Omit<
  RoutineType,
  'totalSplits' | 'totalReps' | 'totalSets'
>;

export type RoutineInitialValuesType = {
  description: string;
  workouts: {
    name: string;
    exercises: ExerciseType[] | [];
  }[];
};

export type EditRoutineInitialValuesType = {
  description: string;
  workouts: EditRoutineWorkoutSplitType[];
};

type EditRoutineWorkoutSplitType = {
  name: string;
  exercises: EditExerciseType[];
};

export type EditExerciseType = {
  exerciseName: string;
  reps: string;
  sets: string;
};
