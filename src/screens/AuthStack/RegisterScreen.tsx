import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../../components/Button';
import { AuthNavProps } from './AuthParamList';
import FormikTextInput from '../../components/FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CredentialsType } from '../../types/CredentialsType';
import useRegister from '../../hooks/useRegister';

const initialValues: CredentialsType = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(1, 'First name must be longer than one character')
    .max(255, 'First name cannot be this long')
    .required(),
  lastName: yup
    .string()
    .min(1, 'Last name must be longer than one character')
    .max(255, 'Last name cannot be this long')
    .required(),
  email: yup
    .string()
    .email('E-mail must be in correct format')
    .required('E-mail is required'),
  password: yup
    .string()
    .min(5, 'Password length must be over five characters')
    .max(50, 'Password length cannot be higher than 50 characters')
    .required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirmation is required')
});

const RegisterScreen = ({ navigation }: AuthNavProps<'RegisterScreen'>) => {
  const { register } = useRegister();
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (credentials: CredentialsType) => {
    try {
      console.log('hello?');
      await register(credentials);
      navigation.navigate('LoginScreen');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign up here</Text>
      {error && <Text>{error}</Text>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleFormSubmit(values)}>
        {({ handleSubmit }) => (
          <View style={styles.formContainer}>
            <View style={styles.dualInputs}>
              <FormikTextInput
                label='First name'
                placeholder='John'
                name='firstName'
              />
              <FormikTextInput
                label='Last name'
                placeholder='Doe'
                name='lastName'
              />
            </View>
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
            <FormikTextInput
              label='Password confirmation'
              placeholder='*******'
              name='passwordConfirmation'
              secureTextEntry
            />
            <Button onPress={handleSubmit} title='Sign Up' />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    width: '100%'
  },
  dualInputs: {
    flexDirection: 'row',
    width: '100%'
  }
});

export default RegisterScreen;
