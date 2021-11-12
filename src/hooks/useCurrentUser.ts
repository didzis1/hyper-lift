import { useQuery } from '@apollo/client';
import { ME } from '../graphql/auth/queries';
import { UserType } from '../types/UserType';

type QueryResult = {
  me: UserType;
};

const useCurrentUser = () => {
  const { loading, error, data } = useQuery<QueryResult>(ME, {
    fetchPolicy: 'cache-and-network'
  });

  console.log('DATAAA', data);
  return {
    currentUser: data?.me,
    loading,
    error
  };
};

export default useCurrentUser;
