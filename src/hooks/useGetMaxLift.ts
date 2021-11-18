import { useQuery } from '@apollo/client';
import { MaxLiftType } from '../types/MaxLiftType';
import { GET_MAX_LIFTS } from '../graphql/maxLift/queries';

type QueryResult = {
  getMaxLifts: MaxLiftType[];
};

const useGetMaxLift = () => {
  const { data, ...rest } = useQuery<QueryResult>(GET_MAX_LIFTS, {
    fetchPolicy: 'cache-and-network'
  });

  return {
    maxLifts: data?.getMaxLifts,
    ...rest
  };
};

export default useGetMaxLift;
