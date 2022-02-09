import { WeightHistory } from '../types/MaxLiftType';

export const calculateGrowth = (
  weightHistory: WeightHistory[]
): number | string => {
  if (weightHistory && weightHistory.length >= 2) {
    return (
      (weightHistory[weightHistory.length - 1].weight /
        weightHistory[0].weight) *
      10
    ).toFixed(2);
  }

  return 0;
};
