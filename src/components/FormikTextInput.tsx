import React from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useField } from 'formik';

type FormikTextInputProps = {
  label?: string;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  left?: JSX.Element;
  right?: JSX.Element;
};

const FormikTextInput = ({ label, name, ...props }: FormikTextInputProps) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        dense={true}
        underlineColor='transparent'
        theme={{ colors: { primary: '#FE5E41' } }}
        {...props}
      />
      {showError && <Text style={styles.error}>{showError}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#00D8BE',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 5
  },
  label: {
    paddingVertical: 5
  },
  error: {
    color: '#fc2c08'
  }
});

export default FormikTextInput;
