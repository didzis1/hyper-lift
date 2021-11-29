import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { HomeNavProps } from './HomeParamList';

import useGetRoutines from '../../hooks/useGetRoutines';
import Loading from '../../components/Loading';

const Routines: React.FC<HomeNavProps<'Routines'>> = ({}) => {
  const { routines, loading } = useGetRoutines();

  console.log('Routines:', routines);

  if (loading) return <Loading />;

  return (
    <View>
      <Text>All routines</Text>
    </View>
  );
};

export default Routines;
