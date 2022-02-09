export type MaxLiftType = {
  id: string;
  exercise: string;
  weight: number;
  weightHistory: WeightHistory[];
};

export type WeightHistory = {
  weight: number;
  date: string;
};

export type AddMaxLiftInput = {
  exercise: string;
  weight: number;
};

export type EditMaxLiftInput = {
  id: string;
  weight: number;
  date: Date;
};
