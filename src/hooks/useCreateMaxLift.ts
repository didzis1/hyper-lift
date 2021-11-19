import { useMutation } from '@apollo/client';
import { ADD_MAX_LIFT } from '../graphql/maxLift/mutations';
import { GET_MAX_LIFTS } from '../graphql/maxLift/queries';
import { AddMaxLiftType } from '../types/maxLift/AddMaxLiftType';

const useCreateMaxLift = () => {
  const [mutate, result] = useMutation(ADD_MAX_LIFT, {
    refetchQueries: [GET_MAX_LIFTS]
  });

  const createMaxLift = async (values: AddMaxLiftType) => {
    const { data } = await mutate({
      variables: {
        maxLiftData: {
          exercise: values.exercise,
          weight: values.weight
        }
      }
    });
    return data;
  };

  return {
    createMaxLift,
    result
  };
};

export default useCreateMaxLift;
