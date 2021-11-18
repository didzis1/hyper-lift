import { useApolloClient, useMutation } from '@apollo/client';
import { ADD_MAX_LIFT } from '../graphql/maxLift/mutations';
import { AddMaxLiftType } from '../types/maxLift/AddMaxLiftType';

const useCreateMaxLift = () => {
  const [mutate, result] = useMutation(ADD_MAX_LIFT);
  const apolloClient = useApolloClient();

  const createMaxLift = async (values: AddMaxLiftType) => {
    const { data } = await mutate({
      variables: {
        maxLiftData: {
          exercise: values.exercise,
          weight: values.weight
        }
      }
    });
    apolloClient.resetStore();
    return data;
  };

  return {
    createMaxLift,
    result
  };
};

export default useCreateMaxLift;
