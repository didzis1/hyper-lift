import { useQuery } from '@apollo/client';
import { HistoryType } from '../types/HistoryType';
import { GET_HISTORY } from '../graphql/history/queries';

type QueryResult = {
  getHistory: HistoryType[];
};

const useGetHistoryWorkouts = () => {
  const { data, ...rest } = useQuery<QueryResult>(GET_HISTORY, {
    fetchPolicy: 'cache-and-network'
  });

  return {
    history: data?.getHistory,
    ...rest
  };
};

export default useGetHistoryWorkouts;
