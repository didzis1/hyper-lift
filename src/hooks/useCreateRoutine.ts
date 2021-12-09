import { useMutation } from '@apollo/client';
import { CREATE_ROUTINE } from '../graphql/routines/mutations';
import { GET_ROUTINES } from '../graphql/routines/queries';
import { CreateRoutineInput } from '../types/RoutineType';

const useCreateRoutine = () => {
  const [mutate, result] = useMutation(CREATE_ROUTINE, {
    refetchQueries: [GET_ROUTINES]
  });

  const createRoutine = async (values: CreateRoutineInput) => {
    const { data } = await mutate({
      variables: {
        routineData: values
      }
    });

    return data;
  };

  return {
    createRoutine,
    result
  };
};

export default useCreateRoutine;
