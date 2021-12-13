import { useMutation } from '@apollo/client';
import { DELETE_ROUTINE } from '../graphql/routines/mutations';
import { GET_ROUTINES } from '../graphql/routines/queries';

const useDeleteRoutine = () => {
  const [mutate, result] = useMutation(DELETE_ROUTINE, {
    refetchQueries: [GET_ROUTINES]
  });

  const deleteRoutine = async (_id: string) => {
    const { data } = await mutate({
      variables: {
        routineData: {
          _id
        }
      }
    });

    return data;
  };

  return {
    deleteRoutine,
    result
  };
};

export default useDeleteRoutine;
