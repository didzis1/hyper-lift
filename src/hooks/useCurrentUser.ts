import { useQuery } from '@apollo/client';
import { ME } from '../graphql/auth/queries';

const useCurrentUser = () => {
  const { loading, error, data } = useQuery(ME, {
    fetchPolicy: 'cache-and-network'
  });

  return {
    currentUser: data?.me,
    loading,
    error
  };
};

export default useCurrentUser;
