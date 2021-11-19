import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  ScrollView
} from 'react-native';
import { AuthNavProps } from './AuthParamList';
import FormikTextInput from '../../components/FormikTextInput';
import { Formik } from 'formik';
import { registerValidation } from '../../utils/validationSchemas';
import { RegisterType } from '../../types/UserType';
import useRegister from '../../hooks/useRegister';
import { Button, Caption, Paragraph, TextInput } from 'react-native-paper';
import globalStyles from '../../globalStyles';
import { Entypo, FontAwesome } from '@expo/vector-icons';

const initialValues: RegisterType = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

const RegisterScreen: React.FC<AuthNavProps<'RegisterScreen'>> = ({
  navigation
}) => {
  const { register } = useRegister();
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (credentials: RegisterType) => {
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={globalStyles.container}>
            <View style={globalStyles.form}>
              {error && <Text>{error}</Text>}
              <Formik
                initialValues={initialValues}
                validationSchema={registerValidation}
                validateOnChange={false}
                onSubmit={(values) => handleFormSubmit(values)}>
                {({ handleSubmit }) => (
                  <>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}>
                      <View style={{ flexGrow: 1, paddingRight: 3 }}>
                        <FormikTextInput
                          placeholder='First name'
                          name='firstName'
                          left={
                            <TextInput.Icon
                              name={() => (
                                <FontAwesome
                                  name='user'
                                  size={18}
                                  color='#636363'
                                />
                              )}
                            />
                          }
                        />
                      </View>
                      <View style={{ flexGrow: 1, paddingLeft: 3 }}>
                        <FormikTextInput
                          placeholder='Last name'
                          name='lastName'
                          left={
                            <TextInput.Icon
                              name={() => (
                                <FontAwesome
                                  name='user'
                                  size={18}
                                  color='#636363'
                                />
                              )}
                            />
                          }
                        />
                      </View>
                    </View>
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
                    <FormikTextInput
                      placeholder='Confirm password'
                      name='passwordConfirmation'
                      secureTextEntry
                      left={
                        <TextInput.Icon
                          name={() => (
                            <Entypo name='lock' size={18} color='#636363' />
                          )}
                        />
                      }
                    />
                    <Button
                      dark={true}
                      uppercase={false}
                      mode='contained'
                      onPress={handleSubmit}>
                      Sign Up
                    </Button>
                  </>
                )}
              </Formik>
            </View>
            <Paragraph>By registering you agree to hyperlift's</Paragraph>
            <Caption style={styles.terms}>
              Terms and Conditions Privacy Policy
            </Caption>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  },
  terms: {
    textDecorationLine: 'underline'
  }
});

export default RegisterScreen;
