import { useMutation } from '@apollo/client';
import { GET_MAX_LIFTS } from '../graphql/maxLift/queries';
import { DELETE_MAX_LIFT } from '../graphql/maxLift/mutations';

const useDeleteMaxLift = () => {
  const [mutate, result] = useMutation(DELETE_MAX_LIFT, {
    refetchQueries: [GET_MAX_LIFTS]
  });

  const deleteMaxLift = async (id: string) => {
    const { data } = await mutate({
      variables: {
        maxLiftData: {
          id
        }
      }
    });

    return data;
  };

  return {
    deleteMaxLift,
    result
  };
};

export default useDeleteMaxLift;
