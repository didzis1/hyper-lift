import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import Button from '../../components/Button';
import { AuthNavProps } from './AuthParamList';
import FormikTextInput from '../../components/FormikTextInput';
import { Formik } from 'formik';
import { AuthContext } from '../../contexts/AuthContext';

type Values = {
  username: string;
  password: string;
};

const LoginScreen = ({ navigation }: AuthNavProps<'LoginScreen'>) => {
  const { login } = useContext(AuthContext);

  const handleFormSubmit = (credentials: Values) => {
    login(credentials);
    console.log('successfully logged in');
    navigation.navigate('StartingScreen');
  };

  return (
    <Layout style={styles.container}>
      <Layout style={styles.form}>
        <Text>Sign in here</Text>

        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values) => handleFormSubmit(values)}>
          {({ handleSubmit }) => (
            <>
              <FormikTextInput
                label='Username'
                placeholder='john_doe'
                name='username'
              />
              <FormikTextInput
                label='Password'
                placeholder='*******'
                name='password'
                secureTextEntry
              />
              <Button onPress={handleSubmit} text='Sign In' />
            </>
          )}
        </Formik>
      </Layout>
    </Layout>
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
