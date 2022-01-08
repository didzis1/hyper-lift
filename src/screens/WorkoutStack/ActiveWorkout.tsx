import React from 'react';
import { Text, View } from 'react-native';

import { WorkoutNavProps } from './WorkoutParamList';

const ActiveWorkout: React.FC<WorkoutNavProps<'ActiveWorkout'>> = ({}) => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default ActiveWorkout;
