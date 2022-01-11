import { useMutation } from '@apollo/client';
import { CREATE_HISTORY } from '../graphql/history/mutations';
import { GET_HISTORY } from '../graphql/history/queries';
import { AddHistoryInput } from '../types/HistoryType';

const useCreateHistory = () => {
  const [mutate, result] = useMutation(CREATE_HISTORY, {
    refetchQueries: [GET_HISTORY]
  });

  const createNewHistoryLift = async (values: AddHistoryInput) => {
    const { data } = await mutate({
      variables: {
        historyData: values
      }
    });

    return data;
  };

  return {
    createNewHistoryLift,
    result
  };
};

export default useCreateHistory;
