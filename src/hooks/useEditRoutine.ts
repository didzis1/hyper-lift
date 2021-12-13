import { useMutation } from '@apollo/client';
import { EDIT_ROUTINE } from '../graphql/routines/mutations';
import { GET_ROUTINES } from '../graphql/routines/queries';
import { EditRoutineInputType } from '../types/RoutineType';

const useEditRoutine = () => {
  const [mutate, result] = useMutation(EDIT_ROUTINE, {
    refetchQueries: [GET_ROUTINES]
  });

  const editRoutine = async (values: EditRoutineInputType) => {
    const { data } = await mutate({
      variables: {
        routineData: values
      }
    });

    return data;
  };

  return {
    editRoutine,
    result
  };
};

export default useEditRoutine;
