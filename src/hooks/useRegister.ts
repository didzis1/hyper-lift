import { useMutation } from '@apollo/client';
import { REGISTER } from '../graphql/auth/mutations';
import { RegisterType } from '../types/auth/RegisterType';

const useRegister = () => {
  const [mutate, result] = useMutation(REGISTER);

  const register = async (
    credentials: Omit<RegisterType, 'passwordConfirmation'>
  ): Promise<any> => {
    console.log('Register gets called');
    const { data } = await mutate({
      variables: {
        registerInput: {
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          email: credentials.email,
          password: credentials.password
        }
      }
    });
    console.log('DATA', data);
    return data;
  };

  return { register, result };
};

export default useRegister;
