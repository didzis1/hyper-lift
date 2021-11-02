import { useQuery } from '@apollo/client';
import { ME } from '../graphql/auth/queries';
import { UserType } from '../types/auth/UserType';

const useCurrentUser = () => {
  const { loading, error, data } = useQuery(ME, {
    fetchPolicy: 'cache-and-network'
  });

  const currentUser: UserType | undefined = data?.me;

  return {
    currentUser,
    loading,
    error
  };
};

export default useCurrentUser;
