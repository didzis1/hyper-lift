import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../../components/Button';
import { AuthNavProps } from './AuthParamList';
import FormikTextInput from '../../components/FormikTextInput';
import { Formik } from 'formik';
import { LoginType } from '../../types/auth/LoginType';
import useLogin from '../../hooks/useLogin';

const LoginScreen = ({}: AuthNavProps<'LoginScreen'>) => {
  const [error, setError] = useState<string | null>(null);
  const { login } = useLogin();

  const handleFormSubmit = async (credentials: LoginType) => {
    try {
      await login(credentials);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Sign in here</Text>
        {error && <Text>{error}</Text>}
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => handleFormSubmit(values)}>
          {({ handleSubmit }) => (
            <>
              <FormikTextInput
                label='E-mail'
                placeholder='john_doe@gmail.com'
                name='email'
              />
              <FormikTextInput
                label='Password'
                placeholder='*******'
                name='password'
                secureTextEntry
              />
              <Button onPress={handleSubmit} title='Sign In' />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '80%'
  }
});

export default LoginScreen;
