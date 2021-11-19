import { useMutation } from '@apollo/client';
import { EDIT_MAX_LIFT } from '../graphql/maxLift/mutations';
import { GET_MAX_LIFTS } from '../graphql/maxLift/queries';
import { MaxLiftType } from '../types/MaxLiftType';

const useEditMaxLift = () => {
  const [mutate, result] = useMutation(EDIT_MAX_LIFT, {
    refetchQueries: [GET_MAX_LIFTS]
  });

  const editMaxLift = async (values: MaxLiftType) => {
    const { data } = await mutate({
      variables: {
        maxLiftData: {
          id: values.id,
          exercise: values.exercise,
          weight: values.weight
        }
      }
    });

    return data;
  };

  return {
    editMaxLift,
    result
  };
};

export default useEditMaxLift;
