export type AddHistoryInput = {
  routineId: string;
  notes?: string;
  splitName: string;
  exercises: ExerciseInput[];
};

type ExerciseInput = {
  exerciseName: string;
  volumeSets: VolumeSet[];
};

type VolumeSet = {
  reps: number;
  set: number;
  weight?: number;
};
