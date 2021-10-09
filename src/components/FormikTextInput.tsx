import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout, Text } from '@ui-kitten/components';
import { useField } from 'formik';

type InputProps = {
  style?: object;
  onChangeText: (value: string) => void;
  onBlur: () => void;
  value: string;
  error: boolean | string | undefined;
};

type FormikTextInputProps = {
  label: string;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
};

export const TextInput = ({ style, ...props }: InputProps) => {
  const styledInput = [style];

  return <Input style={styledInput} {...props} />;
};

const FormikTextInput = ({ label, name, ...props }: FormikTextInputProps) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <Layout>
      {label && (
        <Text style={styles.label} category='h6'>
          {label}
        </Text>
      )}
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && (
        <Text category='p2' status='danger'>
          {showError}
        </Text>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  label: {
    paddingVertical: 5
  }
});

export default FormikTextInput;
