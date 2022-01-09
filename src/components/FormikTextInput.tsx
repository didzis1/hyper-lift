import React from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useField } from 'formik';
import globalStyles from '../globalStyles';

type FormikTextInputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  left?: JSX.Element;
  right?: JSX.Element;
  disabled?: boolean;
};

const FormikTextInput = ({ label, name, ...props }: FormikTextInputProps) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={globalStyles.input}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        dense={true}
        placeholderTextColor='#bccbd1'
        underlineColor='transparent'
        theme={{ colors: { primary: '#FE5E41' } }}
        {...props}
      />
      {showError && <Text style={styles.error}>{showError}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    paddingVertical: 5
  },
  error: {
    color: '#fc2c08'
  }
});

export default FormikTextInput;
