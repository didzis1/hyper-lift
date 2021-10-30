import React from 'react';
import {
  StyleSheet,
  TextInput as NativeTextInput,
  Text,
  View
} from 'react-native';
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
  const styledInput = [styles.input, style];

  return <NativeTextInput style={styledInput} {...props} />;
};

const FormikTextInput = ({ label, name, ...props }: FormikTextInputProps) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text>{showError}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15
  },
  label: {
    paddingVertical: 5
  }
});

export default FormikTextInput;
