import { useQuery } from '@apollo/client';
import { GET_ROUTINES } from '../graphql/routines/queries';
import { RoutineType } from '../types/RoutineType';

type QueryResult = {
  getRoutines: RoutineType[];
};

const useGetRoutines = () => {
  const { data, ...rest } = useQuery<QueryResult>(GET_ROUTINES, {
    fetchPolicy: 'cache-and-network'
  });

  return {
    routines: data?.getRoutines,
    ...rest
  };
};

export default useGetRoutines;
