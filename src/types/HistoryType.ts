export type HistoryType = {
  id: string;
  routineId: string;
  splitName: string;
  notes: string | null;
  exercises: ExerciseInput[];
  createdAt: Date;
};

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
