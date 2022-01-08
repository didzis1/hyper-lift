import React from 'react';
import { Text, View } from 'react-native';

import { WorkoutNavProps } from './WorkoutParamList';

const ActiveWorkout: React.FC<WorkoutNavProps<'ActiveWorkout'>> = ({
  route
}) => {
  return (
    <View>
      <Text>{route.params.workout.name}</Text>
    </View>
  );
};

export default ActiveWorkout;
