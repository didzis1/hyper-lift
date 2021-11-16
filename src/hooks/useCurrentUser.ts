import { useQuery } from '@apollo/client';
import { ME } from '../graphql/auth/queries';
import { UserType } from '../types/UserType';

type QueryResult = {
  me: UserType;
};

const useCurrentUser = () => {
  const { data, ...rest } = useQuery<QueryResult>(ME, {
    fetchPolicy: 'cache-and-network'
  });

  return {
    currentUser: data?.me,
    ...rest
  };
};

export default useCurrentUser;
