import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';
import { AuthNavProps } from './AuthParamList';
import FormikTextInput from '../../components/FormikTextInput';
import { Formik } from 'formik';
import { loginValidation } from '../../utils/validationSchemas';
import { LoginType } from '../../types/auth/LoginType';
import useLogin from '../../hooks/useLogin';
import { Button, Caption, TextInput } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import globalStyles from '../../globalStyles';
import Loading from '../../components/Loading';

const LoginScreen: React.FC<AuthNavProps<'LoginScreen'>> = ({ navigation }) => {
  const [error, setError] = useState<string | null>(null);
  const { login, result } = useLogin();

  const handleFormSubmit = async (credentials: LoginType) => {
    try {
      return await login(credentials);
    } catch (error) {
      if (error instanceof Error) {
        return setError(error.message);
      }
    }
  };

  if (result.loading) {
    return <Loading />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <View style={globalStyles.form}>
            {error && <Text>{error}</Text>}
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={loginValidation}
              validateOnChange={false}
              onSubmit={(values) => handleFormSubmit(values)}>
              {({ handleSubmit }) => (
                <>
                  <FormikTextInput
                    placeholder='E-mail'
                    name='email'
                    left={
                      <TextInput.Icon
                        name={() => (
                          <Entypo name='email' size={18} color='#636363' />
                        )}
                      />
                    }
                  />

                  <FormikTextInput
                    placeholder='Password'
                    name='password'
                    secureTextEntry
                    left={
                      <TextInput.Icon
                        name={() => (
                          <Entypo name='lock' size={18} color='#636363' />
                        )}
                      />
                    }
                  />
                  <Text style={styles.forgotPassword}>Forgot password?</Text>

                  <Button
                    dark={true}
                    uppercase={false}
                    mode='contained'
                    onPress={handleSubmit}>
                    Sign In
                  </Button>

                  <Caption
                    style={globalStyles.caption}
                    onPress={() => navigation.navigate('RegisterScreen')}>
                    Do not have an account? Register here.
                  </Caption>
                </>
              )}
            </Formik>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    color: '#FE5E41',
    fontWeight: 'bold',
    paddingVertical: 3
  }
});

export default LoginScreen;
