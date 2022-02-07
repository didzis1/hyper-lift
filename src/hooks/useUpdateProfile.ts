import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from '../graphql/auth/mutations';
import { ME } from '../graphql/auth/queries';
import { UpdateUserType } from '../types/UserType';

const useUpdateProfile = () => {
  const [mutate, result] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [ME]
  });

  const updateProfile = async (values: UpdateUserType) => {
    const { data } = await mutate({
      variables: {
        profileInput: values
      }
    });

    return data;
  };

  return {
    updateProfile,
    result
  };
};

export default useUpdateProfile;
